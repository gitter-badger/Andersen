<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Logout;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\SigninLog;
use Carbon\Carbon;


class LogSuccessfulLogout
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
     * @param  Logout  $event
     * @return void
     */
    public function handle(Logout $event)
    {
        $user = $event->user;
        $signinLog = SigninLog::where('user_id',$user->id)->orderBy('id','desc')->first();
        if($signinLog){
            $signinLog->logout_time = Carbon::now();
            $signinLog->save();
        }
    }
}
