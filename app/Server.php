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

    protected $fillable = [
        'ip',//ip
        'remote_socket',
        'ssl',
        'name',
        'status',
        'user_id',
        'type',
        'can_use',
        'description',
    ];

    public function user()
    {
        return $this->belongsTo('App\User','user_id','id');
    }

    public function docker()
    {
        return $this->hasMany('App\Docker');
    }
}
