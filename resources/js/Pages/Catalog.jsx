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
                            <div className="catalogue-section">
                                <div className="catalogue-section__title center fw-700-45-55">
                                    <p>Каталог</p>
                                </div>
                                <div className="catalogue-wrapper">
                                    <ul className="catalogue-sidebar fw-700-16-20">
                                        <li className="catalogue-sidebar__item">
                                            <div className="catalogue-sidebar__item-inner">
                                                <div className="catalogue-sidebar__title">
                                                    <p>Обувь</p>
                                                </div>
                                                <div className="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon className="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div className="catalogue-sidebar__dropdown">
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="makasiny">Макасины</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="botinki">Ботинки</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="tufli">Туфли</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="krossovki">Кроссовки</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="sapogi">Сапоги</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="catalogue-sidebar__item">
                                            <div className="catalogue-sidebar__item-inner">
                                                <div className="catalogue-sidebar__title">
                                                    <p>Стельки</p>
                                                </div>
                                                <div className="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon className="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div className="catalogue-sidebar__dropdown">
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="makasiny">Стелька 1</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="botinki">Стелька 2</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="tufli">Стелька 3</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="krossovki">Стелька 4</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="sapogi">Стелька 5</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="catalogue-sidebar__item">
                                            <div className="catalogue-sidebar__item-inner">
                                                <div className="catalogue-sidebar__title">
                                                    <p>Корсеты</p>
                                                </div>
                                                <div className="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon className="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div className="catalogue-sidebar__dropdown">
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="makasiny">Корсет 1</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="botinki">Корсет 2</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="tufli">Корсет 3</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="krossovki">Корсет 4</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="sapogi">Корсет 5</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="catalogue-sidebar__item">
                                            <div className="catalogue-sidebar__item-inner">
                                                <div className="catalogue-sidebar__title">
                                                    <p>Название</p>
                                                </div>
                                                <div className="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon className="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div className="catalogue-sidebar__dropdown">
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="makasiny">Название 1</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="botinki">Название 2</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="tufli">Название 3</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="krossovki">Название 4</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="sapogi">Название 5</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="catalogue-sidebar__item">
                                            <div className="catalogue-sidebar__item-inner">
                                                <div className="catalogue-sidebar__title">
                                                    <p>Название</p>
                                                </div>
                                                <div className="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon className="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div className="catalogue-sidebar__dropdown">
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="makasiny">Название 1</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="botinki">Название 2</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="tufli">Название 3</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="krossovki">Название 4</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="sapogi">Название 5</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="catalogue-sidebar__item">
                                            <div className="catalogue-sidebar__item-inner">
                                                <div className="catalogue-sidebar__title">
                                                    <p>Название</p>
                                                </div>
                                                <div className="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon className="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div className="catalogue-sidebar__dropdown">
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="makasiny">Название 1</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="botinki">Название 2</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="tufli">Название 3</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="krossovki">Название 4</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="sapogi">Название 5</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="catalogue-sidebar__item">
                                            <div className="catalogue-sidebar__item-inner">
                                                <div className="catalogue-sidebar__title">
                                                    <p>Название</p>
                                                </div>
                                                <div className="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon className="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div className="catalogue-sidebar__dropdown">
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="makasiny">Название 1</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="botinki">Название 2</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="tufli">Название 3</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="krossovki">Название 4</label>
                                                </div>
                                                <div className="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label className="catalogue-sidebar-dropdown-label" htmlFor="sapogi">Название 5</label>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="catalogue-grid-wrapper">
                                        <li className="catalogue-grid__item">
                                            <div className="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div className="catalogue-item-title center fw-600-22-27">
                                                <p>Обувь</p>
                                            </div>
                                        </li>
                                        <li className="catalogue-grid__item">
                                            <div className="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div className="catalogue-item-title center fw-600-22-27">
                                                <p>Стельки</p>
                                            </div>
                                        </li>
                                        <li className="catalogue-grid__item">
                                            <div className="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div className="catalogue-item-title center fw-600-22-27">
                                                <p>Корсеты</p>
                                            </div>
                                        </li>
                                        <li className="catalogue-grid__item">
                                            <div className="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div className="catalogue-item-title center fw-600-22-27">
                                                <p>Название</p>
                                            </div>
                                        </li>
                                        <li className="catalogue-grid__item">
                                            <div className="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div className="catalogue-item-title center fw-600-22-27">
                                                <p>Название</p>
                                            </div>
                                        </li>
                                        <li className="catalogue-grid__item">
                                            <div className="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div className="catalogue-item-title center fw-600-22-27">
                                                <p>Название</p>
                                            </div>
                                        </li>
                                        <li className="catalogue-grid__item">
                                            <div className="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div className="catalogue-item-title center fw-600-22-27">
                                                <p>Название</p>
                                            </div>
                                        </li>
                                        <li className="catalogue-grid__item">
                                            <div className="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div className="catalogue-item-title center fw-600-22-27">
                                                <p>Название</p>
                                            </div>
                                        </li>
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
