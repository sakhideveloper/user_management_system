<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth','user'])->group(function () {

Route::get('/accounts', function () {
    return view('dashboard');
})->middleware(['auth'])->name('accounts');
});
require __DIR__.'/auth.php';
require __DIR__.'/admin_routes.php';
