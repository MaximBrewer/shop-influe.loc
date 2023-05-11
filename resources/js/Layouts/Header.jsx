export default (props) => {
    return <header class="header">
        <div class="header__top fw-300-16-19">
            <div class="container-outer">
                <nav class="header__navbar center">
                    <ul class="navbar-list">
                        <li class="navbar-list__item center"><a href="">О нас</a></li>
                        <li class="navbar-list__item center"><a href="">Все услуги</a></li>
                        <li class="navbar-list__item center"><a href="">Прайс</a></li>
                        <li class="navbar-list__item center"><a href="">Наша команда</a></li>
                        <li class="navbar-list__item center"><a href="">Статьи</a></li>
                        <li class="navbar-list__item center"><a href="">Видео</a></li>
                        <li class="navbar-list__item center"><a href="">Отзывы</a></li>
                        <li class="navbar-list__item center"><a href="">Новости</a></li>
                        <li class="navbar-list__item center"><a href="">Контакты</a></li>
                    </ul>
                    <ul class="auth-navbar-list">
                        <li class="auth-navbar-list__item">
                            <div class="login-icon auth-navbar-list__login-icon">
                                <ion-icon name="log-in-outline"></ion-icon>
                            </div>
                            <div class="auth-navbar-list__login-label center">
                                <p><a href="">Вход</a></p>
                            </div>
                        </li>
                        <li class="auth-navbar-list__item center">
                            <p><a href="">Регистрация</a></p>
                        </li>
                    </ul>
                </nav>
                <div class="mobile-menu">
                    <span class="menu-line line-one"></span>
                    <span class="menu-line line-two"></span>
                    <span class="menu-line line-three"></span>
                </div>
            </div>
        </div>
        <div class="header__bottom">
            <div class="container-lower">
                <div class="header-bottom-inner">
                    <div class="logo">
                        <a href=""><img class="logo" src="./assets/images/logo.svg" alt="Логотип" /></a>
                    </div>
                    <div class="search-wrapper header-bottom__search-wrapper fw-400-16-19">
                        <input class="search-input" type="text" name="search" id="search" placeholder="Поиск" />
                        <div class="search-icon-wrapper center">
                            <img width="15px" height="15px" src="./assets/images/search.svg" alt="./assets/images/search.svg" />
                        </div>
                    </div>
                    <div class="contact-info-wrapper header-bottom__contact-info-wrapper">
                        <div class="contact-info__left">
                            <div class="header-phone-icon-wrapper center">
                                <img src="./assets/images/phone.svg" alt="./assets/images/phone.svg" />
                            </div>
                        </div>
                        <div class="contact-info__right">
                            <div class="header-tel-wrapper">
                                <div class="header-tel black fw-400-16-19">
                                    <p>+7(777) 777 77 77</p>
                                </div>
                                <div class="header-tel-chevron-icon center">
                                    <img src="./assets/images/chevron-down.svg" alt="./assets/images/chevron-down.svg" />
                                </div>
                            </div>
                            <div class="order-callback purple fw-700-14-17">
                                <a href="">Заказать обратный звонок</a>
                            </div>
                        </div>
                    </div>
                    <div class="header-media-icons-wrapper">
                        <div class="header-whatsapp center">
                            <a href=""><img class="whatsapp" src="./assets/images/whatsapp.svg" alt="./assets/images/whatsapp.svg" /></a>
                        </div>
                        <div class="header-insta center">
                            <a href=""><img class="insta" src="./assets/images/insta.svg" alt="./assets/images/insta.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}