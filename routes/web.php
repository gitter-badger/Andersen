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
use App\Http\Controllers;


Route::get('/', function () {
    return view('index');
});

Auth::routes();

Route::group(['prefix'=>'oauth'],function(){
    Route::get('github', 'OauthController@github')->name('github');
    Route::get('github/callback', 'OauthController@github_callback');

    Route::get('xiyoulinux', 'OauthController@xiyoulinux')->name('xiyoulinux');
    Route::get('xiyoulinux/callback','OauthController@xiyoulinux_callback');

    Route::get('weixin', 'OauthController@weixin')->name('weixin');
    Route::get('weixin/callback', 'OauthController@weixin_callback');

    Route::get('qq', 'OauthController@qq')->name('qq');
    Route::get('qq/callback', 'OauthController@qq_callback');

    Route::get('google', 'OauthController@google')->name('google');
    Route::get('google/callback', 'OauthController@google_callback');
});

//Route::get('reg',function(){
//    return view('auth.registerbyxiyou',['name' => session('name'),'email' => session('email')]);
//});

Route::get('users', 'UserController@users');
Route::group(['prefix'=>'user'],function(){

    Route::get('list', 'UserController@lists');
    Route::get('add', 'UserController@addget');
    Route::post('add','UserController@addpost');
    Route::get('edit/{user_id?}','UserController@getedit')->where('user_id','[0-9]+');
    Route::post('edit/{user_id?}','UserController@postedit')->where('user_id','[0-9]+');
    Route::delete('{user_id}','UserController@delete')->where('user_id','[0-9]+');
    Route::get('info/{user_id?}', 'UserController@info')->where('user_id','[0-9]+');

});

Route::get('siginlog/{user_id?}','UserController@signlog')->where('user_id','[0-9]+');

Route::get('applications/{id?}','ApplicationController@applications');
Route::group(['prefix'=>'application'],function(){
    Route::get('add',function(){
        return view('application.view',['application' => null,'isedit'=>false]);
    });
    Route::get('{application}',function(App\Application $application){
        return view('application.view',['application' => $application,'isedit'=>true]);
    });
    Route::put('{id}','ApplicationController@update');
    Route::post('{id?}','ApplicationController@create');
    Route::delete('{id}','ApplicationController@delete');
});

Route::get('servers/{id?}','ServerController@servers');
Route::group(['prefix'=>'server'],function(){
    Route::get('add',function(){
        return view('server.view',['server' => null,'isedit' =>false]);
    });

    Route::get('{server}',function(App\Server $server){
        return view('server.view',['server' => $server,'isedit'=>true]);
    });

    Route::put('{id}','ServerController@update');
    Route::post('{id?}','ServerController@create');
    Route::delete('{id}','ServerController@delete');
});

Route::get('services/{id?}','ServiceController@services');
Route::group(['prefix'=>'service'],function(){

    Route::get('add',function(){
        return view('service.view',['service' => null,'isedit' =>false]);
    });

    Route::get('{services}',function(App\Service $services){
        return view('service.view',['service' => $services,'isedit'=>true]);
    });

    Route::put('{id}','ServiceController@update');
    Route::post('{id?}','ServiceController@create');
    Route::delete('{id}','ServiceController@delete');
});

Route::get('dockers/{id?}','DockerController@dockers');

Route::group(['prefix'=>'docker'],function(){
    Route::get('add','DockerController@add');

    Route::get('{docker}',function(App\Docker $docker){
        return view('docker.view',['docker' => $docker,'isedit'=>true]);
    });

    Route::post('add','DockerController@create');
    Route::put('{id}','DockerController@update');
    Route::delete('{id}','DockerController@delete');
});



Route::get('home', 'HomeController@index')->name('home');
Route::get('welcome','HomeController@welcome');

Route::get('error/{error_id}/{error_doc}',function ($error_id,$error_doc){
    return view('errors.'.$error_id);
});

