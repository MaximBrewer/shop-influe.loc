<?php

namespace App\Console\Commands;

use App\Models\Category;
use Illuminate\Console\Command;

class Categories extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:categories';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $cats = [
            [
                'name' => 'Бандажи',
                'sort' => 700,
                'children' => [
                    'Послеоперационные на брюшную стенку',
                    'Послеоперационные на грудную клетку',
                    'Грыжевые',
                    'Грыжепаховые',
                    'С отверстием для стомы',
                    'До- и послеродовые',
                    'При опущении внутренних органов и органов малого таза',
                    'При выпадении прямой кишки',
                    'Шейные',
                    'Тазовые',
                    'Суспензорий',
                    'Для коррекции фигуры',
                    'Косметологические',
                    'Магнитотерапия'
                ]
            ],
            [
                'name' => 'Корсеты и бандажи для позвоночника',
                'sort' => 800,
                'children' => [
                    'Пояснично-крестцовые',
                    'Грудопоясничные',
                    'Согревающие',
                    'Компресионные',
                ]
            ],
            [
                'name' => 'Корректоры осанки',
                'sort' => 900,
                'children' => [
                    'Реклинаторы',
                    'Кольца Дельбе',
                ]
            ],
            [
                'name' => 'Ортезы/фиксаторы на суставы',
                'sort' => 1000,
                'children' => [
                    'Верхней конечности: плечевой, локтевой, лучезапястный и кисть, пальцевой, на всю руку',
                    'Нижняя конечность: тазобедренный, коленный, голеностопный',
                ]
            ],
            [
                'name' => 'Компрессионный трикотаж и сопутствующие товары',
                'sort' => 1100,
                'children' => [
                    'Гольфы',
                    'Чулки',
                    'Колготки',
                    'Для мужчин',
                    'Для путешествий',
                    'Госпитальный трикотаж',
                    'При лимфатических отеках (рукава и перчатки)',
                    'При трофических язвах',
                    'Сопутствующие товары',
                ]
            ],
            [
                'name' => 'Согревающие изделия',
                'sort' => 1200,
                'children' => [
                    'Термобелье',
                    'Бандажи',
                    'Наколенники',
                    'Носки',
                    'Тапочки',
                    'Гольфы',
                ]
            ],
            [
                'name' => 'Массажные изделия и кинезиотейпы',
                'sort' => 1300,
                'children' => [
                    'Для кисти',
                    'Для рук и предплечья',
                    'Для стоп',
                    'Для всех частей тела',
                    'Для спины',
                    'Аппликатор Кузнецова',
                    'Аппликатор Ляпко',
                    'Для пальцев',
                    'Валики',
                ]
            ],
            [
                'name' => 'Современного гипс',
                'sort' => 1400,
                'children' => [
                    'Скотч-каст',
                    'Софт-каст',
                    'Дополнительные изделия',
                ]
            ],
            [
                'name' => 'Средства гигиены',
                'sort' => 1500,
                'children' => [
                    'Для мытья головы',
                    'Для мытья тела',
                    'Аксессуары',
                ]
            ],
            [
                'name' => 'Для спорта и фитнеса',
                'sort' => 1600,
                'children' => [
                    'Наколенники',
                    'Налокотники',
                    'Фиксаторы лучезапястные',
                    'Фиксаторы голеностопные',
                    'Фиксаторы плеча',
                    'Профилактический компрессионный трикотаж',
                    'Кинезиотейпы',
                    'Эспандеры',
                    'Мячи',
                    'Полусферы',
                    'Лента для фитнеса',
                    'Балансировочные диски',
                ]
            ],
        ];

        foreach ($cats as $cat) {
            if ($cat['sort'] == 700) {
                $category = Category::find(72);
            } else {
                $category = Category::create([
                    'parent_id' => null,
                    'order' => $cat['sort'],
                    'accounting_id' => null,
                    'name' => $cat['name'],
                    'slug' => \Illuminate\Support\Str::slug($cat['sort']),
                    'image' => null
                ]);
            }
            $sort = 100;
            foreach ($cat['children'] as $child) {
                $sort += 100;
                Category::create([
                    'parent_id' => $category->id,
                    'order' => $sort,
                    'accounting_id' => null,
                    'name' => $child,
                    'slug' => \Illuminate\Support\Str::slug($child),
                    'image' => null
                ]);
            }
        }
    }
}