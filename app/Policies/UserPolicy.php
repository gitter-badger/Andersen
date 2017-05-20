<?php

namespace App\Policies;

use App\User;
use Auth;
use const false;
use Illuminate\Auth\Access\HandlesAuthorization;
use function tempnam;
use const true;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function before(User $user)
    {
        if ($user->isadmin == true) {
            return true;
        }
    }

    public function view(User $user)
    {
        //
    }

    public function create(User $user)
    {
        return false;
    }

    public function update(User $user)
    {
        return $user2->id === $user->id;
    }

    public function delete(User $user)
    {
        return false;
    }
}
