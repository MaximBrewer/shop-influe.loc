import Breadcrumbs from '@/Components/Breadcrumbs';
import Layout from '@/Layouts/Layout';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default (props) => {

    const { pagetitle, categories } = props

    const [catId, setCatId] = useState(null)

    return (
        <Layout {...props} >
            <Head title={pagetitle} />
            <div className="catalogue-categories">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            {/* <TopCategories /> */}
                            <Breadcrumbs {...props} />
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
                                        {categories.data.map((category, cdx) => <li key={cdx} className={`catalogue-sidebar__item ${catId === category.id ? `active` : ``}`}>
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
                                        </li>)}
                                    </ul>
                                    <ul className="catalogue-grid-wrapper self-start w-full">
                                        {categories.data.map((category, cdx) => <li key={cdx}>
                                            <Link href={route('category', {
                                                category: category.slug
                                            })} className="catalogue-grid__item rounded-[1.25rem] overflow-hidden">
                                                <div className="catalogue-item-img-wrapper pt-[66.66%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('${category.image}')` }} />
                                                <div className="catalogue-item-title center fw-700-16-20 text-center">
                                                    <p>{category.name}</p>
                                                </div>
                                            </Link>
                                        </li>)}
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
