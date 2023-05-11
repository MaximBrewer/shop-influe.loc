import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

export default ({ auth }) => {
    return (
        <Layout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div class="catalogue-categories">
                <div class="container-outer">
                    <div class="catalogue-categories__outer">
                        <div class="catalogue-categories__inner">
                            <div class="catalogue-categories-title-section">
                                <div class="catalogue-categories-title-item fw-600-14-17">
                                    <p>Стельки</p>
                                </div>
                                <div class="catalogue-categories-title-item fw-600-14-17">
                                    <p>Корсеты</p>
                                </div>
                                <div class="catalogue-categories-title-item fw-600-14-17">
                                    <p>Обувь</p>
                                </div>
                                <div class="catalogue-categories-title-item fw-600-14-17">
                                    <p>Название категории</p>
                                </div>
                                <div class="catalogue-categories-title-item fw-600-14-17">
                                    <p>Название категории</p>
                                </div>
                            </div>
                            <div class="catalogue-breadcrumb-wrapper fw-400-18-22">
                                <div class="catalogue-breadcrumb-item">
                                    <a href=""><p>Главная</p></a>
                                </div>
                                <div class="catalogue-breadcrumb-dot-wrapper center">
                                    <div class="catalogue-breadcrumb-dot"></div>
                                </div>
                                <div class="catalogue-breadcrumb-item">
                                    <a href=""><p>Каталог</p></a>
                                </div>
                            </div>
                            <div class="catalogue-section">
                                <div class="catalogue-section__title center fw-700-45-55">
                                    <p>Каталог</p>
                                </div>
                                <div class="catalogue-wrapper">
                                    <ul class="catalogue-sidebar fw-700-16-20">
                                        <li class="catalogue-sidebar__item">
                                            <div class="catalogue-sidebar__item-inner">
                                                <div class="catalogue-sidebar__title">
                                                    <p>Обувь</p>
                                                </div>
                                                <div class="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon class="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div class="catalogue-sidebar__dropdown">
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="makasiny">Макасины</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="botinki">Ботинки</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="tufli">Туфли</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="krossovki">Кроссовки</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="sapogi">Сапоги</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="catalogue-sidebar__item">
                                            <div class="catalogue-sidebar__item-inner">
                                                <div class="catalogue-sidebar__title">
                                                    <p>Стельки</p>
                                                </div>
                                                <div class="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon class="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div class="catalogue-sidebar__dropdown">
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="makasiny">Стелька 1</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="botinki">Стелька 2</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="tufli">Стелька 3</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="krossovki">Стелька 4</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="sapogi">Стелька 5</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="catalogue-sidebar__item">
                                            <div class="catalogue-sidebar__item-inner">
                                                <div class="catalogue-sidebar__title">
                                                    <p>Корсеты</p>
                                                </div>
                                                <div class="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon class="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div class="catalogue-sidebar__dropdown">
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="makasiny">Корсет 1</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="botinki">Корсет 2</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="tufli">Корсет 3</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="krossovki">Корсет 4</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="sapogi">Корсет 5</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="catalogue-sidebar__item">
                                            <div class="catalogue-sidebar__item-inner">
                                                <div class="catalogue-sidebar__title">
                                                    <p>Название</p>
                                                </div>
                                                <div class="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon class="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div class="catalogue-sidebar__dropdown">
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="makasiny">Название 1</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="botinki">Название 2</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="tufli">Название 3</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="krossovki">Название 4</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="sapogi">Название 5</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="catalogue-sidebar__item">
                                            <div class="catalogue-sidebar__item-inner">
                                                <div class="catalogue-sidebar__title">
                                                    <p>Название</p>
                                                </div>
                                                <div class="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon class="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div class="catalogue-sidebar__dropdown">
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="makasiny">Название 1</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="botinki">Название 2</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="tufli">Название 3</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="krossovki">Название 4</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="sapogi">Название 5</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="catalogue-sidebar__item">
                                            <div class="catalogue-sidebar__item-inner">
                                                <div class="catalogue-sidebar__title">
                                                    <p>Название</p>
                                                </div>
                                                <div class="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon class="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div class="catalogue-sidebar__dropdown">
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="makasiny">Название 1</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="botinki">Название 2</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="tufli">Название 3</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="krossovki">Название 4</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="sapogi">Название 5</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="catalogue-sidebar__item">
                                            <div class="catalogue-sidebar__item-inner">
                                                <div class="catalogue-sidebar__title">
                                                    <p>Название</p>
                                                </div>
                                                <div class="catalogue-sidebar__arrow-wrapper">
                                                    <ion-icon class="catalogue-sidebar-arrow" name="caret-down-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div class="catalogue-sidebar__dropdown">
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="makasiny" id="makasiny" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="makasiny">Название 1</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="botinki" id="botinki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="botinki">Название 2</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="tufli" id="tufli" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="tufli">Название 3</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="krossovki" id="krossovki" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="krossovki">Название 4</label>
                                                </div>
                                                <div class="catalogue-sidebar-dropdown__item">
                                                    <input type="radio" name="sapogi" id="sapogi" />
                                                    <label class="catalogue-sidebar-dropdown-label" for="sapogi">Название 5</label>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="catalogue-grid-wrapper">
                                        <li class="catalogue-grid__item">
                                            <div class="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div class="catalogue-item-title center fw-600-22-27">
                                                <p>Обувь</p>
                                            </div>
                                        </li>
                                        <li class="catalogue-grid__item">
                                            <div class="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div class="catalogue-item-title center fw-600-22-27">
                                                <p>Стельки</p>
                                            </div>
                                        </li>
                                        <li class="catalogue-grid__item">
                                            <div class="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div class="catalogue-item-title center fw-600-22-27">
                                                <p>Корсеты</p>
                                            </div>
                                        </li>
                                        <li class="catalogue-grid__item">
                                            <div class="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div class="catalogue-item-title center fw-600-22-27">
                                                <p>Название</p>
                                            </div>
                                        </li>
                                        <li class="catalogue-grid__item">
                                            <div class="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div class="catalogue-item-title center fw-600-22-27">
                                                <p>Название</p>
                                            </div>
                                        </li>
                                        <li class="catalogue-grid__item">
                                            <div class="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div class="catalogue-item-title center fw-600-22-27">
                                                <p>Название</p>
                                            </div>
                                        </li>
                                        <li class="catalogue-grid__item">
                                            <div class="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div class="catalogue-item-title center fw-600-22-27">
                                                <p>Название</p>
                                            </div>
                                        </li>
                                        <li class="catalogue-grid__item">
                                            <div class="catalogue-item-img-wrapper">
                                                <img width="100%" src="./assets/images/catalogue-img.svg" alt="./assets/images/catalogue-img.svg" />
                                            </div>
                                            <div class="catalogue-item-title center fw-600-22-27">
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
