<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Server;

class ServerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function servers($id = null)
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
            $servers = Server::with('user')->get();
        else
            $servers = Server::where('user_id',$id)->orwhere('type',0)->with('user')->get();

        return view('server.list',['servers' => $servers]);
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

        $server = Server::find($id)->with('user');
        if (null ==  $server)
            return view('errors.404');

        return view('server.view',['server' => $server,'isedit' => true]);
    }

    public function create(Request $request)
    {

        $this->validate($request, [
            'name'          => 'required|string|max:255',
            'ip'            => 'required|ip',
            'remote_socket' => 'required|string|max:100',
            'ssl'           => 'required|boolean',
            'description'   => 'nullable|string|max:512',
            'type'          => 'numeric|digits_between:0,3',
        ]);

        return Server::create([
            'name'          => $request->input('name'),
            'ip'            => $request->input('ip'),
            'remote_socket' => $request->input('remote_socket'),
            'ssl'           => $request->input('ssl'),
            'description'   => $request->input('description'),
            'type'          => $request->input('type'),
            'status'        => 0,
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
            'name'          => 'required|string|max:255',
            'ip'            => 'required|ip',
            'remote_socket' => 'required|string|max:100',
            'ssl'           => 'required|boolean',
            'description'   => 'nullable|string|max:512',
            'type'          => 'numeric|digits_between:0,3',
        ]);

        $server = Server::find($id);

        if (null == $server)
        {
            return view('errors.404');
        }

        $server->name       = $request->input('name');
        $server->ip         = $request->input('ip');
        $server->remote_socket  = $request->input('remote_socket');
        $server->ssl         = $request->input('ssl');
        $server->type       = $request->input('type');
        $server->description= $request->input('description');

        $result = $server->save();
        return json_encode(['status' => $result,'value' => $result]);

    }

    public function delete($id)
    {
        //$this->authorize('delete',Server::class);

        if (null == $id)
        {
            return view('errors.404');
        }

        $server = Server::find($id);

        if (Auth::user()->isadmin == false && Auth::id() != $server->user()->id){
            return view('errors.403');
        }

        $result =  $server->delete();
        return json_encode(['status' => $result]);

    }
}
