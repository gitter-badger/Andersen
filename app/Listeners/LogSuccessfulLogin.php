<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Carbon\Carbon;
use App\SigninLog;
use Jormin\IP\IP;

class LogSuccessfulLogin
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Login  $event
     * @return void
     */

    public function handle(Login $event)
    {
        $user = $event->user;
        $login_time = Carbon::now();
        $login_ip = request()->getClientIp();
        $login_ip_area = implode(IP::ip2addr($login_ip),' ');
        SigninLog::create([
            'user_id' => $user->id,
            'ip' => $login_ip,
            'ip_area' => $login_ip_area,
            'login_time' => $login_time
        ]);
    }
}
