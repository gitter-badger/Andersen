<?php

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

Route::get('oauth/github', ['as' => 'github','OauthController@github']);
Route::get('oauth/github/callback', 'OauthController@github_callback');

Route::get('oauth/xiyoulinux', [ 'as' => 'xiyoulinux','OauthController@xiyoulinux']);
Route::get('oauth/xiyoulinux/callback', 'OauthController@xiyoulinux_callback');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/test',function (){
    //
    return view('auth/login-2');
});

Route::get('/test1',function (){
    //
    return view('auth/login1');
});