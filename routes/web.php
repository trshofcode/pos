<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\PaymentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [ProductController::class, 'index'])->name('homepage');
Route::post('/item/delete/', [CartController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.item');
Route::get('/product/detail/', [ProductController::class, 'detail'])->name('detail.product');
Route::post('/addCart', [CartController::class, 'store'])->middleware(['auth', 'verified'])->name('add.cart');
Route::get('/cart', [CartController::class, 'show'])->middleware(['auth', 'verified'])->name('get.cart');
Route::post('/cart/alamat', [CartController::class, 'addAlamat'])->middleware(['auth', 'verified'])->name('alamat.post');
Route::post('/cart/checkout', [PaymentController::class, 'checkout'])->middleware(['auth', 'verified'])->name('post.checkout');
Route::get('/checkout', [PaymentController::class, 'index'])->middleware(['auth', 'verified'])->name('get.checkout');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');        
});

require __DIR__.'/auth.php';
