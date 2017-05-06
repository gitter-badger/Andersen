<?php

namespace App\Http\Controllers;

use Socialite;


class OauthController extends Controller
{

    //
    public function github_callback()
    {
        $clientUser = Socialite::driver('github')->stateless()->user();
        dd($clientUser);
    }

    public function github()
    {
        return Socialite::driver('github')
            ->scopes(['repo', 'write:repo_hook'])
            ->redirect();
    }

    public function xiyoulinux()
    {
        //
    }

    public function xiyoulinux_callback()
    {
        //
    }

}
