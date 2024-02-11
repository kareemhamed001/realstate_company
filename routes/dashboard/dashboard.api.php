<?php


use Illuminate\Support\Facades\Route;

Route::resource('services', \App\Http\Controllers\Dashboard\Api\Service\ServiceController::class,['except' => 'edit','create','update']);
Route::post('/services/{id}', [\App\Http\Controllers\Dashboard\Api\Service\ServiceController::class, 'update']);

Route::resource('packages', \App\Http\Controllers\Dashboard\Api\Package\PackageController::class,['except' => 'edit','create','update']);
Route::post('/packages/{id}', [\App\Http\Controllers\Dashboard\Api\Package\PackageController::class, 'update']);

Route::resource('cover-images', \App\Http\Controllers\Dashboard\Api\CoverImage\CoverImageController::class,['except' => 'edit','create','update']);
Route::post('/cover-images/{id}', [\App\Http\Controllers\Dashboard\Api\CoverImage\CoverImageController::class, 'update']);

Route::get('/settings', [\App\Http\Controllers\Dashboard\Api\Settings\SettingsController::class, 'index']);
Route::get('/feedbacks', [\App\Http\Controllers\Dashboard\Api\Feedback\FeedbackController::class, 'index']);
Route::get('/galleries', [\App\Http\Controllers\Dashboard\Api\Project\ProjectController::class, 'index']);
Route::get('/partners', [\App\Http\Controllers\Dashboard\Api\Partner\PartnerController::class, 'index']);
Route::get('/overview', [\App\Http\Controllers\Dashboard\Api\DashboardController::class, 'overview']);
