import Breadcrumbs from '@/Components/Breadcrumbs';
import Filter from '@/Components/Filter';
import Paginate from '@/Components/Paginate';
import ProductTizer from '@/Components/ProductTizer';
import TopCategories from '@/Components/TopCategories';
import ChevronDown from '@/Icons/ChevronDown';
import ChevronDown2 from '@/Icons/ChevronDown2';
import Layout from '@/Layouts/Layout';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default (props) => {

    const { pagetitle, products, specifications } = props

    const { categories } = window.appdata

    const [catId, setCatId] = useState(null)

    return (
        <Layout {...props} >
            <Head title={pagetitle} />
            <div className="catalogue-categories">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            <Breadcrumbs {...props} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="catalogue-section">
                <div className="container-outer">
                    <div className="catalogue-section__title center fw-700-45-55">{pagetitle}</div>
                    <div className="catalogue-filter-row catalogue-section__catalogue-filter-row">
                        <div className="total-found-label fw-400-16-19">
                            <p>Показано 621 товаров</p>
                        </div>
                        <div className="sort-filter catalogue-filter-row__sort-filter fw-600-14-17">
                            <input type="text" className="total-found-sidebar__input" placeholder="Сортировка" />
                            <div className="total-found-sidebar__chevron-down-icon-wrapper center">
                                <ChevronDown2 className="w-3.5 h-3.5 shrink-0" />
                            </div>
                        </div>
                    </div>
                    <div className="catalogue catalogue-section__catalogue">
                        <div className="catalogue__left">
                            <ul className="total-found-sidebar catalogue__total-found-sidebar fw-400-16-19">
                                {categories.map((item) => <li key={item.id} className="total-found-sidebar__catalogue-sidebar-item">
                                    <Link href={route('category', {
                                        category: item.slug
                                    })} className="catalogue-sidebar-item">
                                        <div className="catalogue-sidebar-item__title">{item.name}</div>
                                        <div className="catalogue-sidebar-item__total">{item.productsCount ? `(${item.productsCount})` : ``}</div>
                                    </Link>
                                </li>)}
                            </ul>
                            <Filter />
                        </div>
                        <div className="catalogue__grid">
                            <ul className="catalogue__grid-inner">
                                {products.data.map((item) => <li key={item.id} className="catalogue__item">
                                    <ProductTizer item={item} />
                                </li>)}
                            </ul>
                            <Paginate {...products.meta} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
