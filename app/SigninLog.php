<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SigninLog extends Model
{
    //
    protected $table = 'signin_logs';

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    protected $fillable = [
        'user_id',
        'ip',
        'ip_area',
        'login_time'
    ];

}
