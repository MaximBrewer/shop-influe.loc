<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product as ResourcesProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Home2', [
            'pagetitle' => __('Home'),
            'services' => [
                'title' => setting('services.title_on_main'),
                'subtitle' => setting('services.subtitle_on_main'),
                'bg' => Storage::url(setting('services.bg_on_main')),
            ],
            'shop' => [
                'title' => setting('shop.title_on_main'),
                'subtitle' => setting('shop.subtitle_on_main'),
                'bg' => Storage::url(setting('shop.bg_on_main')),
            ]
        ]);
    }
    /**
     * Handle the incoming request.
     */
    public function shop(Request $request)
    {
        return Inertia::render('Home', [
            'pagetitle' => __('Home'),
            'products' => ResourcesProduct::collection(Product::limit(20)->get())
        ]);
    }
    /**
     * Handle the incoming request.
     */
    public function service(Request $request)
    {
        return Inertia::render('Service', [
            'pagetitle' => __('Home')
        ]);
    }
}
