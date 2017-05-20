<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDockersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dockers', function (Blueprint $table) {
            //'status','server_url','description','uuid','user_id','application_id','server_id',
            $table->increments('id');
            $table->string('name')->comment('name');
            $table->integer('status')->default('0');
            $table->string('server_url');
            $table->string('description')->nullable();
            $table->string('uuid');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('application_id')->unsigned();
            $table->foreign('application_id')->references('id')->on('applications');
            $table->integer('server_id')->unsigned();
            $table->foreign('server_id')->references('id')->on('servers');
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
        Schema::dropIfExists('dockers');
    }
}
