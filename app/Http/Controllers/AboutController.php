<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('About', [
            'pagetitle' => __('About'),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'О нас'
                ],
                [
                    'text' => 'О нас'
                ]
            ]
        ]);
    }
}
