<?php

namespace App\Policies;

use App\User;
use App\Server;
use Illuminate\Auth\Access\HandlesAuthorization;
use const true;

class ServerPolicy
{
    use HandlesAuthorization;


    /**
     * @param User $user
     * @param Server $server
     * @return bool
     */
    public function before(User $user,Server $server)
    {
        return $user->isadmin == true;
    }

    /**
     * Determine whether the user can view the server.
     *
     * @param  \App\User  $user
     * @param  \App\Server  $server
     * @return mixed
     */
    public function view(User $user, Server $server)
    {
        return $user->id === $server->user_id || $user->isadmin === true;
    }

    /**
     * Determine whether the user can create servers.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the server.
     *
     * @param  \App\User  $user
     * @param  \App\Server  $server
     * @return mixed
     */
    public function update(User $user, Server $server)
    {
        return $user->id === $server->user_id || $user->isadmin === true;
    }

    /**
     * Determine whether the user can delete the server.
     *
     * @param  \App\User  $user
     * @param  \App\Server  $server
     * @return mixed
     */
    public function delete(User $user, Server $server)
    {
        return $user->id === $server->user_id || $user->isadmin === true;
    }
}
