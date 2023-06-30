<?php

use App\Http\Controllers\CatalogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RefundController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use TCG\Voyager\Facades\Voyager;

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

Route::get('/', HomeController::class)->name('home');

Route::get('/articles', [PostsController::class, 'index'])->name('articles');
Route::get('/articles/{post}', [PostsController::class, 'show'])->name('post');

Route::get('/contacts', ContactsController::class)->name('contacts');
Route::post('/contacts', [ContactsController::class, 'store'])->name('contacts.store');

Route::get('/catalog', CatalogController::class)->name('catalog');
Route::get('/catalog/{category}/{subcategory?}/{subsubcategory?}', CategoryController::class)->name('category');
Route::get('/product/{product}', ProductController::class)->name('product');

Route::get('/payment', PaymentController::class)->name('payment');
Route::get('/refund', RefundController::class)->name('refund');

// Route::get('/catalog', function () {
//     return Inertia::render('Catalog');
// });

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});


Route::get('/migrate', function () {
    Artisan::call('migrate');
    return redirect('/');
});



Route::get('/clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    return redirect('/');
});
