<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ip')->comment("服务器IP");
            $table->string('remote_socket')->comment("docker uri");
            $table->boolean('ssl')->comment('ssl');
            $table->string('name')->comment("服务器名称");
            $table->integer('status')->comment("服务器状态");
            $table->integer('user_id')->unsigned()->comment("管理人员id");
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('type')->default(0)->comment("服务器类型");
            $table->string('description')->nullable()->comment("说明");
            $table->json('can_use')->nullable()->comment("可使用人员");
            //$table->string('can_use')->nullable()->comment("可使用人员");
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
        Schema::dropIfExists('servers');
    }
}
