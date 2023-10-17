import Breadcrumbs from "@/Components/Breadcrumbs";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import ClockSvg from "../../images/clock.svg"
import PinSvg from "../../images/pin.svg"
import Cdek from "../../images/cdek.svg"
import Post from "../../images/kaz-post.svg"
import parse from "html-react-parser"

export default (props) => {

    const { pagetitle, table } = props;

    return <Layout
        {...props}
    >
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
        <div class="info">
            <div class="container-outer">
                <div class="info__outer">
                    <div class="info__inner">
                        <div class="catalogue-section__title info__title center fw-700-45-55">
                            <p>Оплата и доставка</p>
                        </div>
                        <div class="payment-info">
                            <div class="info__title center payment-info__title fw-600-30-37">
                                <p>Прайс на почтовые услуги EMS АО «KAZPOST»</p>
                            </div>
                            <div class="info__subtitle center fw-700-18-22">
                                <p>Курьером до двери, либо в почтовом отделении</p>
                            </div>
                        </div>
                        <div class="white-block -green flex flex-col md:flex-row gap-4 justify-between md:items-center">
                            <p class="payment__city-name">Караганда</p>
                            <span class="payment__city-type">По ценам яндекс доставки, либо самовывоз</span>
                        </div>
                        <div class="white-block flex justify-start gap-3">
                            <svg class="basis-auto flex-shrink-0 flex-grow-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F"></path>
                            </svg>
                            Сроки доставки указаны без учета для приема и без учета выходных дней
                        </div>
                        <div class="payment__table-block">
                            <div class="payment__table">
                                {parse(table ?? ``)}
                            </div>
                        </div>
                        <div class="samovyvoz white-block">
                            <div class="info__title payment-info__title fw-600-30-37">
                                <p>Самовывоз</p>
                            </div>
                            <div class="info__subtitle fw-700-18-22">
                                <p>Клиент может забрать заказ по следующему адресу</p>
                            </div>
                            <div class="samovyvoz fw-400-16-19">
                                <div class="samovyvoz__address">
                                    <div class="pin samovyvoz__pin">
                                        <img src={PinSvg} alt="" />
                                    </div>
                                    <div class="samovyvoz__label">
                                        <p>г. Караганда, ул. Бухар Жырау, 79</p>
                                    </div>
                                </div>
                                <div class="samovyvoz__working-hours">
                                    <div class="clock-icon samovyvoz__clock-icon">
                                        <img src={ClockSvg} alt="" />
                                    </div>
                                    <div class="samovyvoz__label">
                                        <p>График выдачи товара: понедельник - пятница с 9.00 до 18.00, перерыва 12.30-13.3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout >
}