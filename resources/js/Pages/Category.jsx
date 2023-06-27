import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

export default (props) => {
    return (
        <Layout
            {...props}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />


            <div className="catalogue-categories">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            <div className="catalogue-categories-title-section">
                                <div className="catalogue-categories-title-item fw-600-14-17">
                                    <p>Стельки</p>
                                </div>
                                <div className="catalogue-categories-title-item fw-600-14-17">
                                    <p>Корсеты</p>
                                </div>
                                <div className="catalogue-categories-title-item fw-600-14-17">
                                    <p>Обувь</p>
                                </div>
                                <div className="catalogue-categories-title-item fw-600-14-17">
                                    <p>Название категории</p>
                                </div>
                                <div className="catalogue-categories-title-item fw-600-14-17">
                                    <p>Название категории</p>
                                </div>
                            </div>
                            <div className="catalogue-breadcrumb-wrapper fw-400-18-22">
                                <div className="catalogue-breadcrumb-item">
                                    <a href=""><p>Главная</p></a>
                                </div>
                                <div className="catalogue-breadcrumb-dot-wrapper center">
                                    <div className="catalogue-breadcrumb-dot"></div>
                                </div>
                                <div className="catalogue-breadcrumb-item">
                                    <a href=""><p>Каталог</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="catalogue-section">
                <div className="container-outer">
                    <div className="catalogue-section__title center fw-700-45-55">
                        <p>Ортопедическая обувь</p>
                    </div>
                    <div className="catalogue-filter-row catalogue-section__catalogue-filter-row">
                        <div className="total-found-label fw-400-16-19">
                            <p>Показано 621 товаров</p>
                        </div>
                        <div className="sort-filter catalogue-filter-row__sort-filter fw-600-14-17">
                            <input type="text" className="total-found-sidebar__input" placeholder="Сортировка" />
                            <div className="total-found-sidebar__chevron-down-icon-wrapper center">
                                <ion-icon className="total-found-sidebar__chevron-down-icon" name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div className="catalogue catalogue-section__catalogue">
                        <div className="catalogue__left">
                            <ul className="total-found-sidebar catalogue__total-found-sidebar fw-400-16-19">
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

                            </ul>
                        </div>
                        <div className="catalogue__grid">
                            <ul className="catalogue__grid-inner">
                                <li className="catalogue__item">
                                    <div className="catalogue__item-photo-wrapper">
                                        <div className="catalogue__item-photo">
                                            <img width="100%" src="./assets/images/catalogue-item-photo.svg" alt="./assets/images/catalogue-item-photo.svg" />
                                        </div>
                                    </div>
                                    <div className="catalogue__item-bottom">
                                        <div className="catalogue__item-bottom-inner">
                                            <div className="catalogue__item-title fw-600-16-19">
                                                <p>Наименование</p>
                                            </div>
                                            <div className="catalogue__item-rating">
                                                <div className="catalogue__stars">
                                                    <div className="catalogue__star-wrapper center">
                                                        <i className="fa-solid fa-star catalogue__star"></i>
                                                    </div>
                                                    <div className="catalogue__star-wrapper center">
                                                        <i className="fa-solid fa-star catalogue__star"></i>
                                                    </div>
                                                    <div className="catalogue__star-wrapper center">
                                                        <i className="fa-solid fa-star catalogue__star"></i>
                                                    </div>
                                                    <div className="catalogue__star-wrapper center">
                                                        <i className="fa-solid fa-star catalogue__star"></i>
                                                    </div>
                                                    <div className="catalogue__star-wrapper center">
                                                        <i className="fa-solid fa-star catalogue__star"></i>
                                                    </div>
                                                </div>
                                                <div className="catalogue__feedback-label fw-500-12-18">
                                                    <p>1360 отзывов</p>
                                                </div>
                                            </div>
                                            <div className="catalogue__in-stock-label fw-400-14-17">
                                                <p>Наличие</p>
                                            </div>
                                            <div className="catalogue__short-desc-label fw-400-16-19">
                                                <p>Краткое описание</p>
                                            </div>
                                            <div className="catalogue__item-price fw-700-18-22">
                                                <p>40 000 тг</p>
                                            </div>
                                            <div className="cart-icon-wrapper catalogue__cart-icon-wrapper">
                                                <ion-icon name="cart-outline" className="cart-icon"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="pagination">
                                <ul className="pagination-list">
                                    <li className="pagination-list__item fw-600-14-17 active">
                                        <p>1</p>
                                    </li>
                                    <li className="pagination-list__item fw-600-14-17">
                                        <p>2</p>
                                    </li>
                                    <li className="pagination-list__item fw-600-14-17">
                                        <p>...</p>
                                    </li>
                                    <li className="pagination-list__item fw-600-14-17">
                                        <p>6</p>
                                    </li>
                                    <li className="pagination-list__item fw-600-14-17">
                                        <p>7</p>
                                    </li>
                                    <li className="pagination-list__item-before pagination_arrow_left">
                                        <ion-icon name="chevron-back-outline"></ion-icon>
                                    </li>
                                    <li className="pagination-list__item-after pagination_arrow_right">
                                        <ion-icon name="chevron-forward-outline"></ion-icon>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
