<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Product', [
            'pagetitle' => __('Product'),
            // 'posts' => Post::paginate(6)
        ]);
    }
}
