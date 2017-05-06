<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    /**
     * 关联到模型的数据表
     *
     * @var string
     */
    protected $table = 'applications';

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
