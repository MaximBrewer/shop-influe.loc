<?php

namespace App\Http\Controllers;

use App\Http\Resources\Menu as ResourcesMenu;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use Inertia\Inertia;
use TCG\Voyager\Models\Menu;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function __construct()
    {
        $menus = ResourcesMenu::collection(Menu::whereNot('name', 'admin')->get());
        View::share('appdata', compact(
            'menus'
        ));
    }

    /**
     * Execute an action on the controller.
     *
     * @param  string  $method
     * @param  array  $parameters
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function callAction($method, $parameters)
    {
        // $this->cart = Auth::check() ? Auth::user()->cart : (Session::getId() ? Cart::where('session_id', Session::getId())->first() : null);
        // if (!$this->cart) {
        //     if (Auth::check()) {
        //         $this->cart = Cart::where('session_id', Session::getId())->first();
        //         if ($this->cart) {
        //             $this->cart->update([
        //                 'user_id' => Auth::id()
        //             ]);
        //         }
        //         $this->cart = $this->cart ?: Cart::create(['user_id' => Auth::id()]);
        //     } elseif (Session::getId()) {
        //         $this->cart = Cart::create(['session_id' => Session::getId()]);
        //     }
        // }

        // $favorites = Auth::check() ? [
        //     'trucks' => Auth::user()->favoriteTrucks()->pluck('uniqid')->toArray(),
        //     'parts' => Auth::user()->favoriteParts()->pluck('uniqid')->toArray(),
        //     'users' => Auth::user()->favoriteUsers()->pluck('uniqid')->toArray(),
        // ] : (Session::get('favorites'));

        // if (!$favorites) {
        //     $favorites = [
        //         'trucks' => [],
        //         'parts' => [],
        //         'users' => [],
        //     ];
        //     Session::put('favorites', $favorites);
        // }

        // Inertia::share('cart', new \App\Http\Resources\Cart($this->cart));
        // Inertia::share('favorites', [
        //     'trucks' => array_values((array)$favorites['trucks']),
        //     'parts' => array_values((array)$favorites['parts']),
        //     'users' => array_values((array)$favorites['users']),
        // ]);
        // if (Auth::check()) Inertia::share('auth', new \App\Http\Resources\User(Auth::user()));
        // else Inertia::share('city', new \App\Http\Resources\City(City::find(Session::get('city_id') ?: 73)));
        return $this->{$method}(...array_values($parameters));
    }
}
