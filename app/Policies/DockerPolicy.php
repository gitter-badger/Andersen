<?php

namespace App\Policies;

use App\User;
use App\Docker;
use Illuminate\Auth\Access\HandlesAuthorization;
use const true;

class DockerPolicy
{
    use HandlesAuthorization;


    public function before(User $user,Docker $docker)
    {
        return $user->isadmin == true;
    }
    /**
     * Determine whether the user can view the docker.
     *
     * @param  \App\User  $user
     * @param  \App\Docker  $docker
     * @return mixed
     */
    public function view(User $user, Docker $docker)
    {
        return $user->id === $docker->user_id;
    }

    /**
     * Determine whether the user can create dockers.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the docker.
     *
     * @param  \App\User  $user
     * @param  \App\Docker  $docker
     * @return mixed
     */
    public function update(User $user, Docker $docker)
    {
        return $user->id === $docker->user_id;
    }

    /**
     * Determine whether the user can delete the docker.
     *
     * @param  \App\User  $user
     * @param  \App\Docker  $docker
     * @return mixed
     */
    public function delete(User $user, Docker $docker)
    {
        return $user->id === $docker->user_id;
    }
}
