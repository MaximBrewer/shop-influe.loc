<?php

namespace App\Http\Controllers;

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
            'pagetitle' => __('Catalog'),
            // 'posts' => Post::paginate(6)
        ]);
    }
}
