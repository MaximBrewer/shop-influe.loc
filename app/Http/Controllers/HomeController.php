<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product as ResourcesProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Home2', [
            'pagetitle' => __('Home')
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
        return Inertia::render('Home', [
            'pagetitle' => __('Home')
        ]);
    }
}
