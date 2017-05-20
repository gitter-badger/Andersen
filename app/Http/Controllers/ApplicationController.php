<?php

namespace App\Http\Controllers;

use function app;
use App\Application;
use App\User;
use Auth;
use const false;
use Illuminate\Http\Request;
use function json_encode;
use const null;
use function session;
use const true;
use function view;

class ApplicationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:web');
    }

    public function applications($id = null)
    {
        if (null == $id)
        {
            $id = Auth::id();
        }
        elseif($id != Auth::id() && Auth::user()->isadmin == false)
        {
            return view('errors.403');
        }
        if ($id == 0)
            $applications = Application::with('user')->get();
        else
            //$applications = User::find($id)->application()->with('user');
            $applications = Application::with('user')->where('user_id',$id)->get();
        return view('application.list',['applications' => $applications]);
    }

    public function view($id)
    {
        if (null == $id)
        {
            return view('errors.404');
        }
        elseif($id != Auth::id() && Auth::user()->isadmin == false)
        {
            return view('errors.403');
        }

        $application = Application::find($id)->with('user');
        if (null ==  $application)
            return view('errors.404');

        return view('application.view',['application' => $application,'isedit' => true]);
    }

    public function create(Request $request)
    {
        //$this->authorize('create',Application::class);

        $this->validate($request, [
            'name'          => 'required|string|max:255',
            'client_id'     => 'required|string|max:255',
            'description'   => 'nullable|string|max:512',
            'git_url'       => 'string|url|max:255',
            'docker_image'  => 'nullable|string|max:255',
            'logo_url'      => 'nullable|string|url|max:255',
            'website'       => 'nullable|string|url|max:255'
        ]);

        if ($request->session()->has('use_xyoauth'))
        {
            $use_xyoauth = true;
        }else
            $use_xyoauth = false;

        return Application::create([
            'name'          => $request->input('name'),
            'client_id'     => $request->input('client_id'),
            'description'   => $request->input('description'),
            'git_url'       => $request->input('git_url'),
            'docker_image'  => $request->input('docker_image'),
            'logo_url'      => $request->input('logo_url'),
            'website'       => $request->input('website'),
            'status'        => 0,
            'use_xyoauth'   => $use_xyoauth,
            'user_id'       => Auth::id(),
        ]);
    }

    public function update(Request $request,$id)
    {
        //$this->authorize('update',Application::class);

        if (null == $id)
        {
            return view('errors.404');
        }

        $this->validate($request, [
            'name'          => 'required|string|max:255',
            'client_id'     => 'required|string|max:255',
            'description'   => 'nullable|string|max:512',
            'git_url'       => 'nullable|string|url|max:255',
            'docker_image'  => 'nullable|string|max:255',
            'logo_url'      => 'nullable|string|url|max:255',
            'website'       => 'nullable|string|url|max:255',
            'status'        => 'required|integer',
        ]);

        $application = Application::find($id);

        if (null == $application)
        {
            return view('errors.404');
        }

        $application->name      = $request->input('name');
        $application->client_id = $request->input('client_id');
        $application->description= $request->input('description');
        $application->git_url = $request->input('git_url');
        $application->docker_image = $request->input('docker_image');
        $application->logo_url = $request->input('logo_url');
        $application->website = $request->input('website');
        $application->status = $request->input('status');

        $result = $application->save();
        return json_encode(['status' => $result,'value' => $result]);

    }

    public function delete($id)
    {
        $this->authorize('delete',Application::class);

        if (null == $id)
        {
            return view('errors.404');
        }

        $application = Application::find($id);

        if (Auth::user()->isadmin == false && Auth::id() != $application->user()->id){
            return view('errors.403');
        }

        $result =  $application->delete();
        return json_encode(['status' => $result]);

    }
}
