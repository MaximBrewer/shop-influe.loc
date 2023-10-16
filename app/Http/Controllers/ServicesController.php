<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Facility as ResourcesFacility;
use App\Http\Resources\ServiceBanner as ResourcesServiceBanner;
use App\Models\Facility;
use App\Models\ServiceBanner;
use Inertia\Inertia;

class ServicesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Services', [
            'pagetitle' => __('Услуги'),
            'banners' => ResourcesServiceBanner::collection(ServiceBanner::all()),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => __('Главная')
                ],
                [
                    'text' => __('Услуги')
                ],
            ]
        ]);
    }
}
