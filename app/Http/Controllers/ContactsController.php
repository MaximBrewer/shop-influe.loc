<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Contacts', [
            'pagetitle' => __('Contacts'),
            'address1' => setting('contacts.address1'),
            'schedule1' => setting('contacts.schedule1'),
            'address2' => setting('contacts.address2'),
            'schedule2' => setting('contacts.schedule2'),
            'breadcrumbs' => [
                [
                    'href' => '/',
                    'title' => __('Home')
                ],
                [
                    'title' => __('Contacts')
                ],
            ]
        ]);
    }
}
