<?php

namespace App\Policies;

use App\User;
use App\Service;
use Illuminate\Auth\Access\HandlesAuthorization;
use const true;

class ServicePolicy
{
    use HandlesAuthorization;

    public function before(User $user, Service $service)
    {
        if ($user->isadmin == true) {
            return true;
        }
    }
    /**
     * Determine whether the user can view the service.
     *
     * @param  \App\User  $user
     * @param  \App\Service  $service
     * @return mixed
     */
    public function view(User $user, Service $service)
    {
        return $user->id === $service->user_id;
    }

    /**
     * Determine whether the user can create services.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the service.
     *
     * @param  \App\User  $user
     * @param  \App\Service  $service
     * @return mixed
     */
    public function update(User $user, Service $service)
    {
        return $user->id === $service->user_id;
    }

    /**
     * Determine whether the user can delete the service.
     *
     * @param  \App\User  $user
     * @param  \App\Service  $service
     * @return mixed
     */
    public function delete(User $user, Service $service)
    {
        return $user->id === $service->user_id;
    }
}
