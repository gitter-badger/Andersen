<?php

namespace App;

use const false;
use Illuminate\Database\Eloquent\Model;
use const true;

class Application extends Model
{
    /**
     * 关联到模型的数据表
     *
     * @var string
     */
    protected $table = 'applications';

    protected $fillable = [
        'name',
        'client_id',
        'description',
        'git_url',
        'status',
        'logo_url',
        'website',
        'use_xyoauth',
        'user_id',
        'docker_image'
    ];

    public function image()
    {
        if (null == $this->docker_image)
            return false;
        else
            return $this->docker_image;
    }

    public function use_xyoauth()
    {
        //
        if ($this->use_xyoauth === true)
        {
            return true;
        }else
        {
            return false;
        }
    }
    /**
     * 获取应用对应的用户
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * 获取应用创建的docker
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function dockers()
    {
        return $this->hasMany('App\Docker');
    }
}
