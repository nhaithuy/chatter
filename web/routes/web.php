<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/app', function() {
    return view('chatter_home');
});

//Auth::routes();
Route::post('/lti', [App\Http\Controllers\LtiController::class, 'ltiMessage']);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// For local development, it's useful to be able to run this without a full LMS.
// Allow impersonating an existing user ID.
if (env('APP_ENV') === 'local') {
    Route::get('/demo/temp_impersonate', function() {
        $dummy_user_id = 1;
        session(['course_user_id'=>$dummy_user_id]);
        return 'Impersonating user id #'.$dummy_user_id;
    });
}
