<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('service', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',50)->comment('服务名');
            $table->string('env_name',32)->commrnt('env_name');
            $table->boolean('status')->default(false)->comment('状态');
            $table->integer('type')->comment('服务类型，0，未指定，1，Domain，2，MySQL');
            $table->json('config')->nullable()->comment('服务配置信息');
            $table->json('use_docker')->nullable()->comment('服务关联docker');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->softDeletes();
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
        Schema::dropIfExists('service');
    }
}
