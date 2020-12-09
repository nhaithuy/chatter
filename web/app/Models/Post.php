<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function readPosts(): HasMany
    {
        return $this->hasMany(CommentReadUsers::class);
    }
}
