<?php

use App\Http\Controllers\api\v1\auth\AuthController;
use App\Http\Controllers\api\v1\auth\UserTokenController;
use App\Http\Controllers\api\v1\ClientController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\v1\ProductController;
use App\Http\Controllers\api\v1\ProviderController;
use App\Http\Controllers\api\v1\SaleController;
use App\Http\Controllers\api\v1\UserController;

Route::prefix('v1')->group(function(){
    Route::apiResource('products', ProductController::class);
    Route::get('products/images/{image}', [ProductController::class, 'getImage'])->name('images.show');
    Route::apiResource('clients', ClientController::class);
    Route::apiResource('providers', ProviderController::class);
    Route::apiResource('sales', SaleController::class);
    Route::apiResource('users', UserController::class);
    Route::post('/login', UserTokenController::class);
    Route::post('/logout', [AuthController::class, 'logout']);
});