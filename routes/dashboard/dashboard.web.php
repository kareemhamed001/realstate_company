<?php

use Illuminate\Support\Facades\Route;

Route::get('/',[\App\Http\Controllers\Dashboard\Web\Service\ServiceController::class,'index'])->name('dashboard.web.services.index');
Route::get('/services',[\App\Http\Controllers\Dashboard\Web\Service\ServiceController::class,'index']);
Route::get('/packages',[\App\Http\Controllers\Dashboard\Web\Package\PackageController::class,'index'])->name('dashboard.web.packages.index');
Route::get('/gallery',[\App\Http\Controllers\Dashboard\Web\Service\ServiceController::class,'index'])->name('dashboard.web.gallery.index');
