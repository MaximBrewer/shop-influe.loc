<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RefundController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;
use App\Http\Controllers\Cabinet;
use App\Http\Controllers\CallBackController;
use App\Http\Controllers\ConsultController;
use App\Http\Controllers\DeliveryController;
use App\Http\Controllers\FacilitiesController;
use App\Http\Controllers\GiftsController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TerminController;
use App\Http\Controllers\WriteUsController;

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

Route::resource('/company', PageController::class)->only('show');

Route::get('/about', AboutController::class)->name('about');
Route::get('/team', TeamController::class)->name('team');
Route::get('/partners', PartnerController::class)->name('partners');
Route::get('/gifts', GiftsController::class)->name('gifts');
Route::get('/consult', ConsultController::class)->name('consult');

Route::get('/articles', [PostsController::class, 'index'])->name('articles');
Route::get('/articles/{post}', [PostsController::class, 'show'])->name('post');

Route::get('/contacts', ContactsController::class)->name('contacts');
Route::post('/contacts', [ContactsController::class, 'store'])->name('contacts.store');

Route::post('/termins', [TerminController::class, 'store'])->name('termins.store');

Route::post('/callback', CallBackController::class)->name('callback');
Route::post('/writeus', WriteUsController::class)->name('writeus');

Route::middleware('service')->group(function () {
    Route::get('/services', ServicesController::class)->name('services');
    Route::get('/services/{facility}/{subfacility?}', FacilitiesController::class)->name('facility');
});

Route::middleware('shop')->group(function () {

    Route::get('/payment', PaymentController::class)->name('payment');
    Route::get('/delivery', DeliveryController::class)->name('delivery');
    Route::get('/refund', RefundController::class)->name('refund');

    Route::get('/catalog', CatalogController::class)->name('catalog');
    Route::get('/catalog/{category}/{subcategory?}/{subsubcategory?}', CategoryController::class)->name('category');
    Route::get('/product/{product}', ProductController::class)->name('product');

    Route::get('/shop', [HomeController::class, 'shop'])->name('shop');

    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart/add', [CartController::class, 'add'])->name('cart.add');
    Route::post('/cart/subtract', [CartController::class, 'subtract'])->name('cart.subtract');
    Route::post('/cart/delete', [CartController::class, 'destroy'])->name('cart.delete');


    Route::middleware('auth')->group(function () {
        Route::resource('/reviews', ReviewController::class)->only(['store', 'index']);

        Route::group(['prefix' => 'cabinet', 'as' => 'cabinet.'], function () {
            Route::get('/', Cabinet\Controller::class)->name('index');
            Route::put('/password', [Cabinet\PasswordController::class, 'update'])->name('password.update');
            Route::get('/password', Cabinet\PasswordController::class)->name('password');
            Route::put('/profile', [Cabinet\ProfileController::class, 'update'])->name('profile.update');
            Route::get('/profile', Cabinet\ProfileController::class)->name('profile');

            Route::get('/favorites', [Cabinet\FavoriteController::class, 'index'])->name('favorites.index');
            Route::patch('/favorite/toggle', [Cabinet\FavoriteController::class, 'toggle'])->name('favorite.toggle');

            Route::get('/orders/history', [Cabinet\OrderController::class, 'history'])->name('orders.history');
            Route::get('/orders/thanks', [Cabinet\OrderController::class, 'thanks'])->name('orders.thanks');
            Route::resource('/orders', Cabinet\OrderController::class);
        });
    });
});

require __DIR__ . '/auth.php';


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::get('/clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    return redirect('/');
});

Route::get('/migrate', function () {
    Artisan::call('migrate');
    return redirect('/');
});
