<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Lang;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $arr = parent::toArray($request);
        $arr['stock'] = 'Наличие';
        $arr['offers'] = Offer::collection($this->offers);
        $arr['reviewsCount'] = 12 . ' ' . Lang::choice('отзыв|отзыва|отзывов', 12, [], 'ru');
        $arr['reviews'] = Review::collection($this->reviews);
        $arr['similars'] = ProductTizer::collection($this->similars);
        return $arr;
    }
}
