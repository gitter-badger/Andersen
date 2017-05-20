<?php

namespace App\Http\Controllers;

use App\SigninLog;
use App\User;
use Auth;
use function bcrypt;
use function dd;
use const false;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use function json_encode;
use const true;
use function usort;
use function view;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:web');
    }

    public function delete($user_id)
    {
        $this->authorize('delete',User::class);
        if (null == $user_id)
        {
            return view('errors.404');
        }

        if (Auth::user()->isadmin == false)
        {
            return view('errors.403');
        }

        if (Auth::id() == $user_id)
        {
            return view('errors.403');
        }

        return User::destroy($user_id);

    }

    public function users()
    {

        if (Auth::user()->isadmin == true)
            $users = User::all();
        else
            $users = ['0' => Auth::user()];

        return view('users.list',['users' => $users]);
    }

    public function lists()
    {
        $users = User::all();
        return view('users.list',['users'=>$users]);
    }

    public function addget()
    {
        return view('users.add');
    }

    public function signlog($user_id = null)
    {
        if (null === $user_id)
        {
            $user_id = Auth::id();
            //return view('users.signlog',['signlogs' => Auth::user()->signinlog()]);
        }elseif($user_id != Auth::id() && Auth::user()->isadmin == false)
        {
            return view('errors.403');
        }

        if ($user_id != 0)
            $signlogs = SigninLog::with('user')->where('user_id',$user_id)->orderBy('login_time','desc')->get();
        else
            $signlogs = SigninLog::with('user')->orderBy('login_time','desc')->get();


        return view('users.signlog',['signlogs' => $signlogs]);
    }

    public function info($user_id = null)
    {
        if (null === $user_id)
        {
            return view('users.edit',['user' => Auth::user()]);
        }elseif($user_id != Auth::id() && Auth::user()->isadmin == false)
        {
            return view('errors.403');
        }

        $user = User::findOrFail($user_id);
        return view('users.edit',['user' => $user]);

    }

    public function getedit($user_id =null)
    {
        if (null == $user_id)
        {
            $user_id = Auth::id();
        }elseif ($user_id != Auth::id() && Auth::user()->isadmin === false)
        {
            return json_encode(['status' => 1001,'value' => '权限不足']);
        }

        $user = User::findOrFail($user_id);

        if (null != $user)
        {
            return view('users.edit',['user' => $user]);
        }
        return json_encode(['status' => 2001,'value' => '用户不存在']);
    }

    public function addpost(Request $request)
    {
        $this->authorize('create',User::class);

//        if (Auth::user()->isadmin == false)
//            return view('errors.403');

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'isadmin' => 'required|boolean',
        ]);

        return User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'xiyoulinux_id' => 0,
            'isadmin' => $request->input('isadmin'),
        ]);

    }

    public function postedit(Request $request,$user_id)
    {
        $this->authorize('update',User::class);

        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'string|min:6|nullable',
            'isadmin' => 'required',
        ]);

        if (null == $user_id)
        {
            $user_id = Auth::id();
        }

        $user = User::find($user_id);
        if (null != $request->input('password'))
        {
            $user->password = bcrypt($request->input('password'));
        }

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        if ($request->input('isadmin') == 0)
        {
            $user->isadmin = false;
        }else{
            $user->isadmin = true;
        }
        $result = $user->save();
        return json_encode(['status' => $result,'value' => $result]);

    }

}
