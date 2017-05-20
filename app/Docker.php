<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Docker extends Model
{
    /**
     * 关联到模型的数据表
     *
     * @var string
     */
    protected $table = 'dockers';

    protected $fillable = [
        'status','server_url','description','uuid','user_id','application_id','server_id',
    ];



    public function application()
    {
        return $this->belongsTo('App\Application');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function server()
    {
        return $this->belongsTo('App\Server');
    }


}
