<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',50)->comment('姓名');
            $table->string('email',255)->unique();
            $table->string('password',60);
            $table->boolean('isadmin')->comment('is管理员')->default(false);
            $table->integer('xiyoulinux_id')->comment('小组openid')->unique();
            $table->string('xiyoulinux_token',40)->nullable()->comment('小组token');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
