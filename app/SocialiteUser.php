<?php
/**
 * Created by PhpStorm.
 * User: wangb
 * Date: 2017/5/6
 * Time: 23:17
 */

namespace App;

use Illuminate\Database\Eloquent\Model;

class SocialiteUser extends Model
{
    public $guarded = ['id'];

    protected $table = 'socialite_users';

    protected $fillable = [
        'user_id', 'driver', 'open_id',
    ];

    /**
     * Get user instance by driver and openid.
     *
     * @param  $driver  string
     * @param  $openid  string
     * @return /App/User|null
     */
    public function getUser($driver, $openid)
    {
        $finder =  $this->where([
            'driver' => $driver,
            'open_id' => $openid
        ])->first();

        return $finder ? $finder->user : $finder;
    }

    /**
     * get related user model.
     *
     * @return /App/User||null
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Save a new record.
     *
     * @param  $userId  integer
     * @param  $driver  string
     * @param  $id  string
     * @return /App/SocialiteUser
     */
    public function saveOne($userId, $driver, $id)
    {
        return $this->create([
            'user_id' => $userId,
            'driver' => $driver,
            'open_id' => $id
        ]);
    }
}