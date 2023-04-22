<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('type', ['admin', 'doctor', 'patient']);
            $table->string('email')->unique();
            $table->string('dui')->unique();
            $table->enum('genre', ['m', 'f']);
            $table->date('birthday');
            $table->string('phone');
            $table->text('address_1');
            $table->text('address_2');
            $table->string('trusted_contact');
            $table->string('trusted_contact_phone');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
