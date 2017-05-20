<?php

namespace App\Http\Controllers;

use App\SigninLog;
use Auth;
use DB;
use function dd;
use Illuminate\Http\Request;
use function view;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('main');
    }

    public function welcome()
    {
        $last = SigninLog::where('user_id',Auth::id())->skip(1)->orderBy('login_time','desc')->first();

        return view('welcome',[
            'lastinfo' => $last,
        ]);

    }

}
