<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product as ResourcesProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Product $product)
    {
        $subcategory = $product->category;
        $category = $subcategory->parent;

        $breadcrumbs = [
            [
                'route' => 'home',
                'text' => 'Главная'
            ],
            [
                'route' => 'catalog',
                'text' => 'Каталог'
            ]
        ];

        if ($category) {
            $breadcrumbs[] = [
                'route' => 'category',
                'params' => [
                    'category' => $category->slug
                ],
                'text' => $category->name
            ];
            if ($subcategory) {
                $breadcrumbs[] = [
                    'route' => 'category',
                    'params' => [
                        'category' => $subcategory->slug,
                        'category' => $subcategory->slug
                    ],
                    'text' => $subcategory->name
                ];
            }
        }

        $breadcrumbs[] = [
            'text' => $product->title
        ];

        return Inertia::render('Product', [
            'pagetitle' => __('Product'),
            'breadcrumbs' => $breadcrumbs,
            'product' => new ResourcesProduct($product)
        ]);
    }
}
