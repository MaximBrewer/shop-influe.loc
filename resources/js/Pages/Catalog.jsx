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



            <div className="catalogue-categories">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            <div className="catalogue-section">
                                <div className="catalogue-section__title center fw-700-45-55">
                                    <p>{pagetitle}</p>
                                </div>
                                <div className="catalogue-wrapper">
                                    <ul className="catalogue-sidebar fw-700-14-17 min-h-[24rem] overflow-hidden">
                                        {/* {categories.data.map((category, cdx) => <li key={cdx} className={`catalogue-sidebar__item ${catId === category.id ? `active` : ``}`}>
                                            <div className="catalogue-sidebar__item-inner" onClick={e => setCatId(prev => prev === category.id ? null : category.id)}>
                                                <div className="catalogue-sidebar__title overflow-hidden break-words mr-1">
                                                    <p>{category.name}</p>
                                                </div>
                                                <div className="catalogue-sidebar__arrow-wrapper flex items-center">
                                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 14L0.205774 0.499999L15.7942 0.5L8 14Z" fill="#56326E" />
                                                    </svg>
                                                </div>
                                            </div>
                                            {category.children.map((child, chdx) => <Link href={route('category', {
                                                category: category.slug,
                                                subcategory: child.slug
                                            })} key={chdx} className="catalogue-sidebar__dropdown">
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <label className="catalogue-sidebar-dropdown-label">{child.name}</label>
                                                </div>
                                            </Link>)}
                                        </li>)} */}
                                    </ul>
                                    <ul className="catalogue-grid-wrapper self-start w-full">
                                        {/* {categories.map((category, cdx) => <li key={cdx}>
                                            <Link href={route('category', {
                                                category: category.slug
                                            })} className="catalogue-grid__item rounded-[1.25rem] overflow-hidden">
                                                <div className="catalogue-item-img-wrapper pt-[66.66%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('${category.image}')` }} />
                                                <div className="catalogue-item-title center fw-700-16-20 text-center">
                                                    <p>{category.name}</p>
                                                </div>
                                            </Link>
                                        </li>)} */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
