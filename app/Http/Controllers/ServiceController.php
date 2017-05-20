<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Service;

class ServiceController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function services($id = null)
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
            $services = Service::with('user')->get();
        else
            $services = Service::with('user')->where('user_id',$id)->get();

        return view('service.list',['services' => $services]);
    }


//    public function view($id)
//    {
//        if (null == $id)
//        {
//            return view('errors.404');
//        }
//        elseif($id != Auth::id() && Auth::user()->isadmin == false)
//        {
//            return view('errors.403');
//        }
//
//        $server = Server::find($id)->with('user');
//        if (null ==  $server)
//            return view('errors.404');
//
//        return view('server.view',['server' => $server,'isedit' => true]);
//    }

    public function create(Request $request)
    {

        $this->validate($request, [
            'name'      => 'required|string|max:255',
            'env_name'  => 'required|string|max:255',
            'type'      => 'numeric|digits_between:0,2',
            'status'    => 'boolean',
        ]);

        return Service::create([
            'name'          => $request->input('name'),
            'env_name'      => $request->input('env_name'),
            'type'          => $request->input('type'),
            'status'        => $request->input('status'),
            'user_id'       => Auth::id(),
        ]);
    }

    public function update(Request $request,$id)
    {

        if (null == $id)
        {
            return view('errors.404');
        }

        $this->validate($request, [
            'name'      => 'required|string|max:255',
            'env_name'  => 'required|string|max:255',
            'type'      => 'numeric|digits_between:0,2',
            'status'    => 'boolean',
        ]);

        $service = Service::find($id);

        if (null == $service)
        {
            return view('errors.404');
        }

        $service->name       = $request->input('name');
        $service->env_name   = $request->input('env_name');
        $service->type       = $request->input('type');
        $service->status     = $request->input('status');

        $result = $service->save();
        return json_encode(['status' => $result,'value' => $result]);

    }

    public function delete($id)
    {
        //$this->authorize('delete',Service::class);

        if (null == $id)
        {
            return view('errors.404');
        }

        $service = Service::find($id);

        if (Auth::user()->isadmin == false && Auth::id() != $service->user()->id){
            return view('errors.403');
        }

        $result =  $service->delete();
        return json_encode(['status' => $result]);

    }
}
