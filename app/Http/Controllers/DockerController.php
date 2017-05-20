<?php

namespace App\Http\Controllers;

use App\Application;
use App\Server;
use App\Service;
use Illuminate\Http\Request;
use Auth;
use App\Docker;

class DockerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:web');
    }
    
    public function dockers($id = null)
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
            $dockers = Docker::with('user','server','docker')->get();
        else
            $dockers = Docker::with('user','server','docker')->where('user_id',$id)->get();

        return view('docker.list',['dockers' => $dockers]);
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

        $docker = Docker::findOrFail($id)->with('user');
        if (null ==  $docker)
            return view('errors.404');

        return view('docker.view',['docker' => $docker,'isedit' => true]);
    }

    public function connect()
    {}


    public function add()
    {
        $servers = Server::where('user_id',Auth::id())->orwhere('type',0)->get();
        $applications = Application::where('user_id',Auth::id())->get();
        $services = Service::where('user_id',Auth::id())->get();

        return view('docker.add',[
            'servers'=>$servers,
            'applications'=>$applications,
            'services'=>$services,
            ]);
    }

    public function create(Request $request)
    {

        $this->validate($request, [
            'name'          => 'required|string|max:255',
            'description'   => 'nullable|string|max:512',
            'server_id'       => 'string|url|max:255',
            'application_id'      => 'nullable|string|url|max:255',
            'server_url'       => 'nullable|string|url|max:255'
        ]);

        if ($request->session()->has('use_xyoauth'))
        {
            $use_xyoauth = true;
        }else
            $use_xyoauth = false;

        return Docker::create([
            'name'          => $request->input('name'),
            'client_id'     => $request->input('client_id'),
            'description'   => $request->input('description'),
            'git_url'       => $request->input('git_url'),
            'logo_url'      => $request->input('logo_url'),
            'website'       => $request->input('website'),
            'status'        => 0,
            'use_xyoauth'   => $use_xyoauth,
            'user_id'       => Auth::id(),
        ]);
    }

    public function update(Request $request,$id)
    {
        //$this->authorize('update',Docker::class);

        if (null == $id)
        {
            return view('errors.404');
        }

        $this->validate($request, [
            'name'          => 'required|string|max:255',
            'client_id'     => 'required|string|max:255',
            'description'   => 'nullable|string|max:512',
            'git_url'       => 'nullable|string|url|max:255',
            'logo_url'      => 'nullable|string|url|max:255',
            'website'       => 'nullable|string|url|max:255',
            'status'        => 'required|integer',
        ]);

        $docker = Docker::find($id);

        if (null == $docker)
        {
            return view('errors.404');
        }

        $docker->name      = $request->input('name');
        $docker->client_id = $request->input('client_id');
        $docker->description= $request->input('description');
        $docker->git_url = $request->input('git_url');
        $docker->logo_url = $request->input('logo_url');
        $docker->website = $request->input('website');
        $docker->status = $request->input('status');

        $result = $docker->save();
        return json_encode(['status' => $result,'value' => $result]);

    }

    public function delete($id)
    {
        $this->authorize('delete',Docker::class);

        if (null == $id)
        {
            return view('errors.404');
        }

        $docker = Docker::find($id);

        if (Auth::user()->isadmin == false && Auth::id() != $docker->user()->id){
            return view('errors.403');
        }

        $result =  $docker->delete();
        return json_encode(['status' => $result]);

    }
    
    
}
