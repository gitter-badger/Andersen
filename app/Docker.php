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
    protected $table = 'docker';

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
