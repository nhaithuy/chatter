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

Route::get('/demo/temp_impersonate', function() {
    session(['course_user_id'=>1]);
    return 'FIXME remove this';
});
