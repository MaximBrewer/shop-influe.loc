import Breadcrumbs from '@/Components/Breadcrumbs';
import Paginate from '@/Components/Paginate';
import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';

export default (props) => {

    const { pagetitle, category, products, total } = props

    console.log(category, products)

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

            <div className="catalogue-section">
                <div className="container-outer">
                    <div className="catalogue-section__title center fw-700-45-55">
                        <p>{pagetitle}</p>
                    </div>
                    <div className="catalogue-filter-row catalogue-section__catalogue-filter-row">
                        <div className="total-found-label fw-400-16-19">{total}</div>
                        <div className="sort-filter catalogue-filter-row__sort-filter fw-600-14-17">
                            <span className="total-found-sidebar__input grow">Сортировка</span>
                            <div className="total-found-sidebar__chevron-down-icon-wrapper center">
                                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.50382 5.85012C5.32037 5.85012 5.13694 5.78169 4.99707 5.64511L0.595729 1.3453C0.315747 1.07178 0.315747 0.62831 0.595729 0.354899C0.875599 0.0814886 1.32945 0.0814886 1.60946 0.354899L5.50382 4.15961L9.3982 0.355032C9.67819 0.0816215 10.132 0.0816215 10.4118 0.355032C10.692 0.628443 10.692 1.07191 10.4118 1.34543L6.01057 5.64525C5.87064 5.78184 5.6872 5.85012 5.50382 5.85012Z" fill="black" fillOpacity="0.2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="catalogue catalogue-section__catalogue">
                        <div className="catalogue__left">
                            {/* <ul className="total-found-sidebar catalogue__total-found-sidebar fw-400-16-19">
                                <li className="catalogue-sidebar-item total-found-sidebar__catalogue-sidebar-item active">
                                    <div className="catalogue-sidebar-item__title">
                                        <p>Ботинки</p>
                                    </div>
                                    <div className="catalogue-sidebar-item__total">
                                        <p>(255)</p>
                                    </div>
                                </li>
                                <li className="catalogue-sidebar-item total-found-sidebar__catalogue-sidebar-item">
                                    <div className="catalogue-sidebar-item__title">
                                        <p>Кроссовки</p>
                                    </div>
                                    <div className="catalogue-sidebar-item__total">
                                        <p>(29)</p>
                                    </div>
                                </li>
                                <li className="catalogue-sidebar-item total-found-sidebar__catalogue-sidebar-item">
                                    <div className="catalogue-sidebar-item__title">
                                        <p>Кеды</p>
                                    </div>
                                    <div className="catalogue-sidebar-item__total">
                                        <p>(9)</p>
                                    </div>
                                </li>
                                <li className="catalogue-sidebar-item total-found-sidebar__catalogue-sidebar-item">
                                    <div className="catalogue-sidebar-item__title">
                                        <p>Сланцы</p>
                                    </div>
                                    <div className="catalogue-sidebar-item__total">
                                        <p>(209)</p>
                                    </div>
                                </li>
                                <li className="catalogue-sidebar-item total-found-sidebar__catalogue-sidebar-item">
                                    <div className="catalogue-sidebar-item__title">
                                        <p>Тапочки</p>
                                    </div>
                                    <div className="catalogue-sidebar-item__total">
                                        <p>(120)</p>
                                    </div>
                                </li>
                                <li className="catalogue-sidebar-item total-found-sidebar__catalogue-sidebar-item">
                                    <div className="catalogue-sidebar-item__title">
                                        <p>Сандали</p>
                                    </div>
                                    <div className="catalogue-sidebar-item__total">
                                        <p>(215)</p>
                                    </div>
                                </li>
                                <li className="catalogue-sidebar-item total-found-sidebar__catalogue-sidebar-item">
                                    <div className="catalogue-sidebar-item__title">
                                        <p>Туфли</p>
                                    </div>
                                    <div className="catalogue-sidebar-item__total">
                                        <p>(410)</p>
                                    </div>
                                </li>
                                <li className="catalogue-sidebar-item total-found-sidebar__catalogue-sidebar-item">
                                    <div className="catalogue-sidebar-item__title">
                                        <p>Макасы</p>
                                    </div>
                                    <div className="catalogue-sidebar-item__total">
                                        <p>(30)</p>
                                    </div>
                                </li>

                            </ul>
                            <ul className="filter-sidebar catalogue__filter-sidebar fw-400-16-19">
                                <li className="filter-sidebar__title center">
                                    <p>Фильтр</p>
                                </li>
                                <ul className="filter-sidebar__inner">
                                    <li className="filter-sidebar__item" onclick="openFilterDropdown(0);">
                                        <div className="filter-sidebar__item-title fw-600-16-19">
                                            <p>Бренд</p>
                                        </div>
                                        <ul className="checkbox-grid">
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name-1" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name-1">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="filter-sidebar__item" onclick="openFilterDropdown(1);">
                                        <div className="filter-sidebar__item-title fw-600-16-19">
                                            <p>Категории</p>
                                        </div>
                                        <ul className="checkbox-grid">
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="obuv" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="obuv">Обувь</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="korsety" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="korsety">Корсеты</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="stelki" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="stelki">Стельки</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="name" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="name">Наименование</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="filter-sidebar__item" onclick="openFilterDropdown(2);">
                                        <div className="filter-sidebar__item-title fw-600-16-19">
                                            <p>Размер</p>
                                        </div>
                                        <ul className="checkbox-grid">
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="35" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="35">35</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="36" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="36">36</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="37" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="37">37</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="38" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="38">38</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="39" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="39">39</label>
                                                </div>
                                            </li>
                                            <li className="checkbox-grid__item">
                                                <div className="checkbox-wrapper center">
                                                    <input type="checkbox" name="chbox" id="40" />
                                                </div>
                                                <div className="checkbox-label-wrapper center">
                                                    <label className="checkbox-label" htmlFor="40">40</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>


                                </ul>

                            </ul> */}
                        </div>
                        <div className="catalogue__grid">
                            <ul className="catalogue__grid-inner">
                                {products.data.map((product, pdx) => <li key={pdx} className="catalogue__item">
                                    {product.images.length ? <div className="catalogue__item-photo-wrapper">
                                        <Link className="catalogue__item-photo" href={route('product', {
                                            product: product.id
                                        })}>
                                            <img src={product.images[0]} alt={product.name} className={`w-full`} />
                                        </Link>
                                    </div> : ``}
                                    <div className="catalogue__item-bottom">
                                        <div className="catalogue__item-bottom-inner">
                                            <Link className="catalogue__item-title fw-600-16-19" href={route('product', {
                                                product: product.id
                                            })}>
                                                <p>{product.name}</p>
                                            </Link>
                                            <div className="catalogue__item-rating">
                                                <div className="catalogue__stars gap-px">
                                                    {[null, null, null, null, null].map((i, idx) => <svg key={idx} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.00027 12.1733L3.29827 14.8053L4.34827 9.51998L0.391602 5.86131L5.74293 5.22665L8.00027 0.333313L10.2576 5.22665L15.6089 5.86131L11.6523 9.51998L12.7023 14.8053L8.00027 12.1733Z" fill="#E8B350" />
                                                    </svg>)}
                                                </div>
                                                <div className="catalogue__feedback-label fw-500-12-18">
                                                    <p>{product.reviews}</p>
                                                </div>
                                            </div>
                                            <div className="catalogue__in-stock-label fw-400-14-17">
                                                <p>{product.stock}</p>
                                            </div>
                                            <div className="catalogue__short-desc-label fw-400-16-19">
                                                <p>{product.excerpt}</p>
                                            </div>
                                            {product.offers.length ? <div className="catalogue__item-price fw-700-18-22">
                                                <p>{product.offers[0].prices[0].value} тг</p>
                                            </div> : ``}
                                            <div className="cart-icon-wrapper catalogue__cart-icon-wrapper">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.9077 3.34289C15.8161 3.21162 15.6687 3.13049 15.5086 3.12365L5.58366 2.69584C5.29889 2.68338 5.06093 2.90323 5.04875 3.18667C5.03665 3.47 5.25614 3.7094 5.53955 3.72157L14.7926 4.12045L12.9732 9.79691H4.87696L3.41425 1.83256C3.38209 1.658 3.26225 1.51238 3.09697 1.44754L0.701302 0.506377C0.437269 0.403005 0.139327 0.532694 0.0356332 0.796405C-0.0678819 1.06026 0.0617715 1.35838 0.325661 1.46207L2.45579 2.29889L3.94432 10.403C3.98918 10.6467 4.20151 10.8236 4.44933 10.8236H4.69624L4.13241 12.3898C4.08522 12.521 4.10466 12.6667 4.18497 12.7806C4.26518 12.8946 4.39562 12.9624 4.53487 12.9624H4.93034C4.68529 13.2352 4.53487 13.5943 4.53487 13.9892C4.53487 14.8384 5.22589 15.5293 6.07495 15.5293C6.92402 15.5293 7.61504 14.8384 7.61504 13.9892C7.61504 13.5943 7.46462 13.2352 7.2196 12.9624H10.5774C10.3322 13.2352 10.1818 13.5943 10.1818 13.9892C10.1818 14.8384 10.8727 15.5293 11.7219 15.5293C12.5712 15.5293 13.262 14.8384 13.262 13.9892C13.262 13.5943 13.1116 13.2352 12.8666 12.9624H13.3476C13.5839 12.9624 13.7754 12.7709 13.7754 12.5347C13.7754 12.2984 13.5839 12.1069 13.3476 12.1069H5.14357L5.60554 10.8235H13.3475C13.5708 10.8235 13.7683 10.6792 13.8363 10.4668L15.9753 3.79308C16.0245 3.64076 15.9993 3.47423 15.9077 3.34289ZM6.07499 14.6738C5.69749 14.6738 5.39049 14.3669 5.39049 13.9894C5.39049 13.6119 5.69749 13.3049 6.07499 13.3049C6.45249 13.3049 6.75945 13.6119 6.75945 13.9894C6.75945 14.3669 6.45249 14.6738 6.07499 14.6738ZM11.7219 14.6738C11.3444 14.6738 11.0374 14.3669 11.0374 13.9894C11.0374 13.6119 11.3444 13.3049 11.7219 13.3049C12.0994 13.3049 12.4064 13.6119 12.4064 13.9894C12.4064 14.3669 12.0994 14.6738 11.7219 14.6738Z" fill="#56326E" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </li>)}
                            </ul>
                            <Paginate {...products.meta} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}
