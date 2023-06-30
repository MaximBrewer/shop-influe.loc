<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category as ResourcesCategory;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CatalogController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Catalog', [
            'pagetitle' => __('Каталог'),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'Главная'
                ],
                [
                    'text' => 'Каталог'
                ]
            ],
            'categories' => ResourcesCategory::collection(Category::whereNull('parent_id')->with('children')->get())
        ]);
    }
}
