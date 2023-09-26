
import ChevronDown from "@/../images/chevron-down.svg"
import ArrowTop from "@/../images/arrow-top.svg"
import LogoVertical from "@/../images/logo_vertical.svg"
import Email from "@/../images/email.svg"
import Phone from "@/../images/phone.svg"
import { Link } from "@inertiajs/react"

export default () => {

    const { menus, footeremail, footerphone, copyright } = window.appdata

    return <footer>
        <div className="container-outer h-full">
            <div className="footer__outer">
                <div className="footer__inner">
                    <div className="footer__logo-wrapper">
                        <Link href={route('home')}>
                            <img src={LogoVertical} alt="" />
                        </Link>
                    </div>
                    <ul className="footer__navbar">
                        <li className="footer-navbar__item">
                            <div className="footer-navbar-item__title fw-600-18-22">Услуги</div>
                            <ul className="footer-navbar-item__menu fw-400-18-22">
                                {menus.find(menu => menu.name === `services`).items.map((item, index) => <li key={index}>
                                    <Link href={item.link}>{item.title}</Link>
                                </li>)}
                            </ul>
                        </li>
                        <li className="footer-navbar__item">
                            <div className="footer-navbar-item__title fw-600-18-22">Товары</div>
                            <ul className="footer-navbar-item__menu fw-400-18-22">
                                {menus.find(menu => menu.name === `products`).items.map((item, index) => <li key={index}>
                                    <Link href={item.link}>{item.title}</Link>
                                </li>)}
                            </ul>
                        </li>
                        <li className="footer-navbar__item">
                            <div className="footer-navbar-item__title fw-600-18-22">Контакты</div>
                            <div className="footer-contacts-wrapper">
                                <div className="footer-contacts-tel-wrapper">
                                    <div className="icon-wrapper center">
                                        <img src={Phone} alt="" />
                                    </div>
                                    <div className="footer-contacts-details-wrapper">
                                        <div className="footer-contacts-num-wrapper">
                                            <div className="footer-num-wrapper">
                                                {footerphone}
                                            </div>
                                            <div className="footer-num-chevron-wrapper center">
                                                <img src={ChevronDown} alt="" />
                                            </div>
                                        </div>
                                        <div className="order-callback purple">
                                            <a href="">Заказать обратный звонок</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-contacts-email-wrapper">
                                    <div className="icon-wrapper center">
                                        <img src={Email} alt="" />
                                    </div>
                                    <div className="email-wrapper center fw-400-16-19">
                                        {footeremail}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="footer-copy-wrapper center fw-400-14-17">{copyright}</div>
                <div className="go-top-wrapper js-back-to-top">
                    <div className="go-top-arrow-wrapper">
                        <img src={ArrowTop} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
}