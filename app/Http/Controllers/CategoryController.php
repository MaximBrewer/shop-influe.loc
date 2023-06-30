<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category as ResourcesCategory;
use App\Http\Resources\Product as ResourcesProduct;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Category $category, Category $subcategory = null, Category $subsubcategory = null)
    {
        $products = $subcategory ? $subcategory->products() : Product::where('category_id', $category->id)->orWhereHas('category', function (Builder $query) use ($category) {
            $query->where('parent_id', $category->id);
        });
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

        $breadcrumbs[] = [
            'text' => $category->name,
            'route' => 'category',
            'params' => [
                'category' => $category->slug
            ],
        ];

        if ($subcategory) {
            $breadcrumbs[] = [
                'text' => $subcategory->name,
                'route' => 'category',
                'params' => [
                    'category' => $category->slug,
                    'subcategory' => $subcategory->slug
                ],
            ];
        }

        if ($subsubcategory) {
            $breadcrumbs[] = [
                'text' => $subsubcategory->name,
                'route' => 'category',
                'params' => [
                    'category' => $subsubcategory->slug,
                    'subcategory' => $subcategory->slug,
                    'subsubcategory' => $subsubcategory->slug
                ],
            ];
        }

        return Inertia::render('Category', [
            'pagetitle' => $category->name,
            'category' => new ResourcesCategory($subcategory ?: $category),
            'total' => 'Показано ' . $products->count() . ' ' . Lang::choice('товар|товара|товаров', $products->count(), [], 'ru'),
            'products' => ResourcesProduct::collection($products->paginate()),
            'breadcrumbs' => $breadcrumbs,
            // 'posts' => Post::paginate(6)
        ]);
    }
}
