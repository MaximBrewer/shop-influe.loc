<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category as ResourcesCategory;
use App\Http\Resources\Product as ResourcesProduct;
use App\Http\Resources\Specification as ResourcesSpecification;
use App\Models\Category;
use App\Models\Product;
use App\Models\Specification;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CatalogController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $products = new Product();
        $specifications = ResourcesSpecification::collection(Specification::all());
        return Inertia::render('Catalog', [
            'pagetitle' => __('Каталог'),
            'products' => ResourcesProduct::collection($products->paginate(12)),
            'specifications' => $specifications,
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Каталог'
                ]
            ]
        ]);
    }
}
