<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    //
    /**
     * 关联到模型的数据表
     *
     * @var string
     */
    protected $table = 'servers';

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function docker()
    {
        return $this->hasMany('App\Docker');
    }
}
