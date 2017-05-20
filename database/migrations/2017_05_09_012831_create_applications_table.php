<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->comment('应用名');
            $table->string('client_id')->comment('应用client_id');
            $table->string('description')->nullable()->comment('简介');
            $table->string('git_url')->comment('Git');
            $table->string('docker_image')->nullable()->comment('Docker Image');
            $table->integer('status')->default(0)->comment('状态，0，待确认，1，开发，2，上线，3，下线');
            $table->string('logo_url')->nullable()->comment('LOGO');
            $table->string('website')->nullable()->comment('WebSite');
            $table->boolean('use_xyoauth')->default(false)->comment('是否接入小组OAuth');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('applications');
    }
}
