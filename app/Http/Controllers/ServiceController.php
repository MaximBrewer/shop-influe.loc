<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Facility as ResourcesFacility;
use App\Http\Resources\ServiceBanner as ResourcesServiceBanner;
use App\Models\Facility;
use App\Models\ServiceBanner;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Services', [
            'pagetitle' => __('Услуги'),
            'banners' => ResourcesServiceBanner::collection(ServiceBanner::all()),
            'facilities' => ResourcesFacility::collection(Facility::all()),
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Facility $service)
    {
        return Inertia::render('Service', [
            'pagetitle' => $service->title,
            'facility' => new ResourcesFacility($service)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
