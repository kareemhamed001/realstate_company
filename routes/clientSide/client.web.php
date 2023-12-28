<?php


use Illuminate\Support\Facades\Route;

Route::get('/', function (){
    echo 'Hello from client';
})->name('client.index');
