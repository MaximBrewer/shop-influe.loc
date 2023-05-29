
import Logo from "../../images/logo.svg"
import Search from "../../images/search.svg"
import Phone from "../../images/phone.svg"
import ChevronDown from "../../images/chevron-down.svg"
import Whatsapp from "../../images/whatsapp.svg"
import Insta from "../../images/insta.svg"
import { Link } from "@inertiajs/react"
import { useState } from "react"
import { ArrowLeftOnRectangleIcon, XMarkIcon } from "@heroicons/react/24/solid"

export default (props) => {

    const { menus } = window.appdata
    const { auth } = props
    const [mmenu, setMmenu] = useState(false)

    return <>
        <header className="header">
            <div className="header__top fw-300-16-19">
                <div className="container-outer">
                    <nav className="header__navbar center">
                        <ul className="navbar-list">
                            {menus.find(menu => menu.name === `top`).items.map((item, index) => <li key={index} className={`navbar-list__item center`}>
                                <Link href={item.link}>{item.title}</Link>
                            </li>)}
                        </ul>
                        {auth.user ? <></> : <ul className="auth-navbar-list">
                            <li className="auth-navbar-list__item">
                                <Link href={route('login')} className={`auth-navbar-link`}>
                                    <ArrowLeftOnRectangleIcon className="login-icon" />
                                    <div className="auth-navbar-list__login-label center">Вход</div>
                                </Link>
                            </li>
                            <li className="auth-navbar-list__item center">
                                <Link href={route('register')} className={`auth-navbar-link`}>Регистрация</Link>
                            </li>
                        </ul>}
                    </nav>
                    <a href={`#`} onClick={e => {
                        e.preventDefault();
                        setMmenu(true)
                    }} className="mobile-menu">
                        <span className="menu-line line-one"></span>
                        <span className="menu-line line-two"></span>
                        <span className="menu-line line-three"></span>
                    </a>
                </div>
            </div>
            <div className="header__bottom">
                <div className="container-lower">
                    <div className="header-bottom-inner">
                        <div className="logo">
                            <Link href={route('home')}><img className="logo" src={Logo} alt="Логотип" /></Link>
                        </div>
                        <div className="search-wrapper header-bottom__search-wrapper fw-400-16-19">
                            <input className="search-input" type="text" name="search" id="search" placeholder="Поиск" />
                            <div className="search-icon-wrapper center">
                                <img width="15px" height="15px" src={Search} alt="" />
                            </div>
                        </div>
                        <div className="contact-info-wrapper header-bottom__contact-info-wrapper">
                            <div className="contact-info__left">
                                <div className="header-phone-icon-wrapper center">
                                    <img src={Phone} alt="" />
                                </div>
                            </div>
                            <div className="contact-info__right">
                                <div className="header-tel-wrapper">
                                    <div className="header-tel black fw-400-16-19">
                                        <p>+7(777) 777 77 77</p>
                                    </div>
                                    <div className="header-tel-chevron-icon center">
                                        <img src={ChevronDown} alt="" />
                                    </div>
                                </div>
                                <div className="order-callback purple fw-700-14-17">
                                    <a href="">Заказать обратный звонок</a>
                                </div>
                            </div>
                        </div>
                        <div className="header-media-icons-wrapper">
                            <div className="header-whatsapp center">
                                <a href="">
                                    <img className="whatsapp" src={Whatsapp} alt="" />
                                </a>
                            </div>
                            <div className="header-insta center">
                                <a href="">
                                    <img className="insta" src={Insta} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {mmenu ? <div className={`mobile-menu-wrapper`} onClick={e => setMmenu(false)} >
            <div className={`mobile-menu-inner`} style={{ transform: `translateX(0)` }} onClick={e => e.stopPropagation()}>
                <XMarkIcon className={`close-icon`} onClick={e => setMmenu(false)}></XMarkIcon>
                <div>
                    <ul className="navbar-list">
                        {menus.find(menu => menu.name === `top`).items.map((item, index) => <li key={index} className={`navbar-list__item center`}>
                            <Link href={item.link}>{item.title}</Link>
                        </li>)}
                    </ul>
                    {auth.user ? <></> : <ul className="auth-navbar-list">
                        <li className="auth-navbar-list__item">
                            <Link href={route('login')} className={`auth-navbar-link`}>
                                <ArrowLeftOnRectangleIcon className="login-icon" />
                                <div className="auth-navbar-list__login-label center">Вход</div>
                            </Link>
                        </li>
                        <li className="auth-navbar-list__item center">
                            <Link href={route('register')} className={`auth-navbar-link`}>Регистрация</Link>
                        </li>
                    </ul>}
                </div>
            </div>
        </div> : ``}
    </>
}