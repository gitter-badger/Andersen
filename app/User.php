<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','xiyoulinux_id','isadmin','xiyoulinux_token'
    ];

    /**
     * 获取用户创建的应用
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function applications()
    {
        return $this->hasMany('App\Application');
    }

    public function dockers()
    {
        return $this->hasMany('App\Docker');
    }

    public function servers()
    {
        return $this->hasMany('App\Server');
    }

    public function generateUserInstance()
    {
        return $this->hasMany('App\SocialiteUser');
    }

    public function signinlog()
    {
        return $this->hasMany('App\SigninLog');
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token','xiyoulinux_token'
    ];
}
