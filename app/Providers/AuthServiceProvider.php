<?php

namespace App\Providers;

use App\Application;
use App\Docker;
use App\Policies\ApplicationPolicy;
use App\Policies\DockerPolicy;
use App\Policies\ServerPolicy;
use App\Policies\UserPolicy;
use App\Server;
use App\Service;
use App\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
        Application::class => ApplicationPolicy::class,
        Docker::class => DockerPolicy::class,
        Server::class => ServerPolicy::class,
        Service::class => ServerPolicy::class,
        User::class => UserPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
