<?php

namespace App\Http\Controllers;

use App\Exceptions\LoginExpiredException;
use App\Exceptions\UnauthorizedException;
use App\Models\Comment;
use App\Models\Course;
use App\Models\CourseUser;
use App\Models\CourseUserPostLastReadFlag;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function getUserSelf(Request $request)
    {
        $course_user = $this->getCourseUserFromSession($request);
        $course_user_id = $course_user->id;

        return CourseUser::where('id',$course_user_id)
            ->select(['id','course_id','name','email','role'])
            ->first();
    }

    public function getCourse(Request $request)
    {
        $course_user = $this->getCourseUserFromSession($request);
        $course_user_id = $course_user->id;

        $course = Course::where('id',$course_user->course_id)
            ->select('id','name')
            ->first();
        return $course;
    }

    public function getCoursePosts(Request $request)
    {
        $course_user = $this->getCourseUserFromSession($request);
        $course_user_id = $course_user->id;

        $filter = $request->get('filter');
        $search = $request->get('search');

        $posts = Post::where('course_id', $course_user->course_id)
            ->orderBy('created_at');
        if ($filter==='pinned') {
            $posts = $posts->where('pinned', true);
        } elseif ($filter==='unread') {
            $post_ids = DB::select(<<<'TAG'
select distinct(posts.id) as id from posts
left join comments on posts.id=comments.post_id
left join course_user_post_last_read_flags on posts.id = course_user_post_last_read_flags.post_id
where
      posts.course_id = ?
  and posts.deleted_at is null
  and (course_user_post_last_read_flags.course_user_id = ?
        or course_user_post_last_read_flags.course_user_id is null)
  and (course_user_post_last_read_flags.updated_at is null
        or comments.created_at > course_user_post_last_read_flags.updated_at)
TAG
                , [$course_user->course_id,$course_user_id]);
            $post_ids = array_values(array_column($post_ids, 'id'));
            $posts = $posts->whereIn('id', $post_ids);
        } elseif ($filter==='my_posts') {
            $posts = $posts->where('author_user_id', $course_user->id);
        }
        if ($search) {
            $posts = $posts->where('title', 'like', '%'.$search.'%')
                ->orWhere('body', 'like', '%'.$search.'%');
        }
        $posts = $posts
            ->get()
            ->map(function($post) use ($course_user_id) {
                $post->makeHidden('readComments');
                $post->num_comments = $post->comments->count();
                $post_last_read = CourseUserPostLastReadFlag
                    ::where('post_id',$post->id)
                    ->where('course_user_id',$course_user_id)
                    ->first();
                $unread_comments = $post->comments;
                if ($post_last_read) {
                    $unread_comments = $unread_comments
                        ->where('created_at', '>', $post_last_read->updated_at);
                }
                $post->num_unread_comments = $unread_comments->count();
                return $post;
              });
        return $posts;
    }


    public function getPost(Request $request, $post_id)
    {
        $course_user = $this->getCourseUserFromSession($request);
        $course_user_id = $course_user->id;

        $post = Post::where('id',$post_id)
            ->with(['comments'])
            ->first();
        if ($post === null) {
            return response('Post not found.', 404);
        }
        $this->checkPostAuths($post, $course_user);

        $post_last_read = CourseUserPostLastReadFlag::firstOrCreate([
            'post_id'=>$post->id,
            'course_user_id'=>$course_user_id
        ]);
        $post->comments = $post->comments->map(function($comment) use ($post_last_read) {
            $is_unread = $post_last_read->wasRecentlyCreated
                       || $comment->updated_at > $post_last_read->updated_at;
            $comment->is_unread = $is_unread;
            return $comment;
        });
        $post_last_read->updated_at = new Carbon();
        $post_last_read->save();

        return $post;
    }

    public function createPost(Request $request)
    {
        $course_user = $this->getCourseUserFromSession($request);

        // FIXME scrub out injection of e.g. <script> tags
        $body = $request->get('body');

        $post = new Post();
        $post->course_id = $course_user->course_id;
        $post->author_user_id = $course_user->id;
        $post->author_user_name = $course_user->name;
        $post->author_user_role = $course_user->role;
        $post->author_anonymous = $request->get('anonymous');
        $post->title = $request->get('title');
        $post->body = $body;
        $post->save();

        return $post;
    }

    public function editPost(Request $request, $post_id)
    {
//TODO
    }

    public function deletePost(Request $request, $post_id)
    {
        $course_user = $this->getCourseUserFromSession($request);
        $this->checkIsTeacher($course_user);

        $post = Post::findOrFail($post_id);
        $this->checkPostAuths($post, $course_user);
        $post->delete();
        return "ok";
    }

    public function pinPost(Request $request, $post_id, $pinned)
    {
        $course_user = $this->getCourseUserFromSession($request);
        $this->checkIsTeacher($course_user);

        $post = Post::findOrFail($post_id);
        $this->checkPostAuths($post, $course_user);
        $post->pinned = $pinned === 'true';
        $post->save();
        return $post;
    }

    public function lockPost(Request $request, $post_id, $locked)
    {
        $course_user = $this->getCourseUserFromSession($request);
        $this->checkIsTeacher($course_user);

        $post = Post::findOrFail($post_id);
        $this->checkPostAuths($post, $course_user);
        $post->locked = $locked==='true' ? 1 : 0;
        $post->save();
        return $post;
    }

    public function createComment(Request $request)
    {
        $course_user = $this->getCourseUserFromSession($request);
        $post = Post::findOrFail($request->get('post_id'));
        $this->checkPostAuths($post, $course_user);

        $body = $request->get('body');
        // FIXME scrub out injection of e.g. <script> tags

        $comment = new Comment();
        $comment->post_id = $request->get('post_id');
        $comment->author_user_id = $course_user->id;
        $comment->author_user_name = $course_user->name;
        $comment->author_user_role = $course_user->role;
        $comment->parent_comment_id = $request->get('parent_comment_id');
        $comment->author_anonymous = $request->get('author_anonymous');
        $comment->body = $body;
        $comment->save();

        return $comment;
    }

    public function editComment(Request $request, $comment_id)
    {
//TODO
    }

    public function endorseComment(Request $request, $comment_id, $endorsed)
    {
        $course_user = $this->getCourseUserFromSession($request);
        $this->checkIsTeacher($course_user);

        $comment = Comment::findOrFail($comment_id);
        $this->checkCommentAuths($comment, $course_user);

        $comment->endorsed = $endorsed==='true' ? 1 : 0;
        $comment->save();
        return $comment;
    }

    public function muteComment(Request $request, $comment_id, $muted)
    {
        $course_user = $this->getCourseUserFromSession($request);
        $this->checkIsTeacher($course_user);

        $comment = Comment::findOrFail($comment_id);
        $this->checkCommentAuths($comment, $course_user);

        $comment->muted_by_user_id = $muted ? $course_user->id : null;
        $comment->save();
        return $comment;
    }

    /*
    // utility functions
    */

    protected function getCourseUserFromSession(Request $request)
    {
        $course_user_id = $request->attributes->get('course_user_id');
        $course_user = CourseUser::find($course_user_id);
        if ($course_user === null) {
            throw new LoginExpiredException("Login expired.");
        }
        return $course_user;
    }

    protected function checkPostAuths($post, $course_user)
    {
        if ($post->course_id !== (int)$course_user->course_id) {
            throw new UnauthorizedException("Unauthorized: Course ID mismatch.");
        }
    }

    protected function checkCommentAuths($comment, $course_user)
    {
        $post = Post::where('id',$comment->post_id)->firstOrFail();
        $this->checkPostAuths($post, $course_user);
    }

    protected function checkIsTeacher($course_user)
    {
        if ($course_user->role !== 'teacher') {
            throw new UnauthorizedException("Unauthorized: Only teachers may perform this action.");
        }
    }

}
