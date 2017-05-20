<?php

namespace App\Http\Controllers;

use function config;
use function dd;
use const false;
use function old;
use function redirect;
use function session;
use Socialite;
use App\SocialiteUser;
use App\User;
use Auth;
use GuzzleHttp;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use const true;
use function view;


class OauthController extends Controller
{

    private function callbackCheckReg($driver)
    {
        $user = Socialite::driver($driver)->stateless()->user();
        $model = new User();
        $socialiteUser = new SocialiteUser();
        $finder = $socialiteUser->getUser($driver, $user->id);
        if (! $finder) {
            if (Auth::check() == true)
            {
                $finder = Auth::user();
                $socialiteUser->saveOne($finder->id, $driver, $user->id);
            }else{
                return view('errors.403');
            }
        }

        Auth::login($finder);
        return redirect()->route('home');
    }

    public function github()
    {
        return Socialite::driver('github')
            ->scopes(['repo', 'write:repo_hook'])
            ->redirect();
    }

    public function github_callback()
    {
        return $this->callbackCheckReg('github');
//        $user = Socialite::driver('github')->stateless()->user();
//        $model = new User();
//        $socialiteUser = new SocialiteUser();
//        $finder = $socialiteUser->getUser('github', $user->id);
//        if (! $finder) {
//            if (Auth::check() == true)
//            {
//                $finder = Auth::user();
//                //$finder->save();
//                $socialiteUser->saveOne($finder->id, 'github', $user->id);
//            }else{
//                return view('errors.403');
//            }
//        }
//
//        Auth::login($finder);
//        return redirect()->route('home');
    }

    public function google()
    {
        return Socialite::driver('google')->redirect();
    }

    public function google_callback()
    {
        //$clientUser = Socialite::driver('google')->stateless()->user();
        //dd($clientUser);
        return $this->callbackCheckReg('google');
    }

    public function qq_callback()
    {
//        $clientUser = Socialite::driver('qq')->stateless()->user();
//        dd($clientUser);
        return $this->callbackCheckReg('qq');
    }

    public function qq()
    {
        return Socialite::driver('qq')
            ->scopes(['get_user_info'])
            ->redirect();
    }

    public function weixin()
    {
        return Socialite::driver('wechat')
            ->scopes(['repo', 'write:repo_hook'])
            ->redirect();
    }

    public function weixin_callback()
    {
        return $this->callbackCheckReg('wechat');
/*        $clientUser = Socialite::driver('wechat')->stateless()->user();
        dd($clientUser);*/
    }

    public function xiyoulinux()
    {
        $query = http_build_query([
            'response_type' => 'code',
            'client_id'     => config('services.xiyoulinux.client_id'),
            'redirect_uri'  => config('services.xiyoulinux.redirect'),
            'scope' => 'all',
            'state' => md5('123456'.time())
        ]);
        return redirect('https://sso.xiyoulinux.org/oauth/authorize?'.$query);
    }

    public function xiyoulinux_callback(Request $request)
    {
        $http = new GuzzleHttp\Client;
        $response = $http->post('https://sso.xiyoulinux.org/oauth/access_token', [
            'form_params' => [
                'grant_type'    => 'authorization_code',
                'client_id'     => config('services.xiyoulinux.client_id'),
                'client_secret' => config('services.xiyoulinux.client_secret'),
                'redirect_uri'  => config('services.xiyoulinux.redirect'),
                'code'          => $request->input('code'),
            ],
            [ 'timeout'  =>  5 ],
        ]);

        $data = json_decode((string) $response->getBody(), true);
        $access_token = $data['access_token'];
        $response = $http->get('https://api.xiyoulinux.org/me?access_token='.$access_token, [
            [ 'timeout'  =>  5 ],
        ]);

        session()->put('xiyoulinux_token',$access_token);
        $user = json_decode((string) $response->getBody(), true);

        if(!User::where('xiyoulinux_id',$user['id'])->first()){
            $userModel = new User;
            $userModel->xiyoulinux_id = $user['id'];
            $userModel->email = $user['email'];
            $userModel->name = $user['name'];

            session()->put('xiyoulinux_id',$user['id']);
            session()->put('name',$user['name']);
            session()->put('email',$user['email']);
            session()->put('isadmin',$user['group']);
            return redirect()->route('register');
        }


        $userInstance = User::where('xiyoulinux_id',$user['id'])->firstOrFail();

        Auth::login($userInstance);
        return redirect()->route('home');
    }

}
