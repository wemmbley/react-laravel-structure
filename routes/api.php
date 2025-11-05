<?php

use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::get('test', [\App\Http\Controllers\API\V1\TestController::class, 'test']);
});
