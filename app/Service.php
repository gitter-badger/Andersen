<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use SoftDeletes;
    protected $table = 'service';
    protected $dates = ['created_at', 'updated_at', 'disabled_at'];

    protected $fillable = [
        'name',
        'env_name',
        'status',//状态 boolean
        'type',//服务类型，0，未指定，1，Domain，2，MySQL
        'config',//服务配置信息
        'use_docker',//服务关联docker
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
