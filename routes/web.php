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
use App\Http\Controllers\FacilitiesController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ServiceController;
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

Route::get('/articles', [PostsController::class, 'index'])->name('articles');
Route::get('/articles/{post}', [PostsController::class, 'show'])->name('post');

Route::get('/contacts', ContactsController::class)->name('contacts');
Route::post('/contacts', [ContactsController::class, 'store'])->name('contacts.store');

Route::post('/termins', [TerminController::class, 'store'])->name('termins.store');

Route::get('/payment', PaymentController::class)->name('payment');
Route::get('/refund', RefundController::class)->name('refund');

Route::post('/callback', CallBackController::class)->name('callback');
Route::post('/writeus', WriteUsController::class)->name('writeus');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });


Route::middleware('service')->group(function () {
    Route::get('/services', ServicesController::class)->name('services');
    Route::get('/services/{facility}/{subfacility?}', FacilitiesController::class)->name('facility');
});


Route::middleware('shop')->group(function () {

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
            // Route::post('/delete', [CabinetController::class, 'delete'])->name('delete');
            // Route::post('/update', [CabinetController::class, 'update'])->name('update');
            // Route::post('/req', [CabinetController::class, 'req'])->name('req');
            // Route::post('/shops', [CabinetController::class, 'shops'])->name('shops');

            // Route::any('paybox/getcards', [PayboxController::class, 'getcards'])->name('getcards');

            // Route::get('/profit', [CabinetProfitController::class, 'index'])->name('profit.index');

            // Route::get('/favorites/goods', [Cabinet\FavoriteController::class, 'goods'])->name('favorites.goods');
            // Route::get('/favorites/users', [Cabinet\FavoriteController::class, 'users'])->name('favorites.users');

            Route::patch('/favorite/toggle', [Cabinet\FavoriteController::class, 'toggle'])->name('favorite.toggle');
            // Route::patch('/favorite/trucks/toggle', [Cabinet\FavoriteController::class, 'toggleTruck'])->name('favorite.trucks.toggle');
            // Route::patch('/favorite/users/toggle', [Cabinet\FavoriteController::class, 'toggleUser'])->name('favorite.users.toggle');

            // Route::patch('/orders/{order}/assign', [Cabinet\OrderController::class, 'assign'])->name('orders.assign');
            // Route::get('/orders/delivered', [Cabinet\OrderController::class, 'delivered'])->name('orders.delivered');
            // Route::get('/orders/archive', [Cabinet\OrderController::class, 'archive'])->name('orders.archive');
            Route::get('/orders/history', [Cabinet\OrderController::class, 'history'])->name('orders.history');
            Route::get('/orders/thanks', [Cabinet\OrderController::class, 'thanks'])->name('orders.thanks');
            Route::resource('/orders', Cabinet\OrderController::class);
            // Route::any('/order/{order}/invoice', [Cabinet\OrderController::class, 'invoice'])->name('orders.invoice');

            // Route::get('/purchases/archive', [CabinetPurchaseController::class, 'archive'])->name('purchases.archive');
            // Route::get('/purchase', [CabinetPurchaseController::class, 'create'])->name('purchases.create');
            // Route::resource('/purchases', CabinetPurchaseController::class)->except('create');
            // Route::patch('/purchases/{purchase}/close', [CabinetPurchaseController::class, 'close'])->name('purchases.close');

            // Route::get('/pay', [CabinetController::class, 'pay'])->name('pay');
            // Route::post('/avatar', [CabinetController::class, 'avatar'])->name('avatar');
            // Route::post('/logotip', [CabinetController::class, 'logotip'])->name('logotip');
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
