import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";

import ImgMain1 from "@/../images/img-main-1.jpg"
import ImgOutService1 from "@/../images/our-services-1.png"
import FormAppDoctor from "@/Components/FormAppDoctor";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Slider from 'react-slick';


function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow-purple similar-products-slick__arrow-left center`}
            onClick={onClick}
        >
            <ArrowLeftIcon className="w-6 h-6 shrink-0" />
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow-purple similar-products-slick__arrow-right center`}
            onClick={onClick}
        >
            <ArrowRightIcon className="w-6 h-6 shrink-0" />
        </div>
    );
}


export default (props) => {

    const { pagetitle } = props;

    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1200,
        arrows: false,
        prevArrow: '<div className="slick-arrow-purple main-slick__arrow-left center"><ion-icon name="arrow-back-outline"></ion-icon></div>',
        nextArrow: '<div className="slick-arrow-purple main-slick__arrow-right center"><ion-icon name="arrow-forward-outline"></ion-icon></div>',
        dots: true
    };

    return <Layout
        {...props}
    >
        <Head title={pagetitle} />
        <div className="main-block">
            <Slider {...settings} className="main-slider">
                <div className="main-slider-item">
                    <div className="main-bg brightness-50">
                        <img src={ImgMain1} alt="Хруст в коленях – норма или повод обратиться к врачу?" />
                    </div>
                    <div className="container-outer flex flex-col justify-between h-full py-8">
                        <div className="main-breadcrumbs">
                            <div className="catalogue-breadcrumb-wrapper fw-400-18-22">
                                <div className="catalogue-breadcrumb-item">
                                    <a href=""><p>Главная</p></a>
                                </div>
                                <div className="catalogue-breadcrumb-dot-wrapper center">
                                    <div className="catalogue-breadcrumb-dot"></div>
                                </div>
                                <div className="catalogue-breadcrumb-item active">
                                    <a href=""><p>Услуги</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="main-content flex flex-col justify-center items-center text-center w-full">
                            <h1 className="main-title">
                                Хруст в коленях – норма или повод обратиться к врачу?
                            </h1>
                            <a href="#" className="btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto">Заказать звонок</a>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="main-slider-item">
                    <div className="main-bg brightness-50">
                        <img src={ImgMain1} alt="Хруст в коленях – норма или повод обратиться к врачу?" />
                    </div>
                    <div className="container-outer flex flex-col justify-between h-full py-8">
                        <div className="main-breadcrumbs">
                            <div className="catalogue-breadcrumb-wrapper fw-400-18-22">
                                <div className="catalogue-breadcrumb-item">
                                    <a href=""><p>Главная</p></a>
                                </div>
                                <div className="catalogue-breadcrumb-dot-wrapper center">
                                    <div className="catalogue-breadcrumb-dot"></div>
                                </div>
                                <div className="catalogue-breadcrumb-item active">
                                    <a href=""><p>Услуги</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="main-content flex flex-col justify-center items-center text-center w-full">
                            <h1 className="main-title">
                                Индивидуальный подход к каждому ребенку
                            </h1>
                            <a href="#" className="btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto">Заказать звонок</a>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="main-slider-item">
                    <div className="main-bg brightness-50">
                        <img src={ImgMain1} alt="Хруст в коленях – норма или повод обратиться к врачу?" />
                    </div>
                    <div className="container-outer flex flex-col justify-between h-full py-8">
                        <div className="main-breadcrumbs">
                            <div className="catalogue-breadcrumb-wrapper fw-400-18-22">
                                <div className="catalogue-breadcrumb-item">
                                    <a href=""><p>Главная</p></a>
                                </div>
                                <div className="catalogue-breadcrumb-dot-wrapper center">
                                    <div className="catalogue-breadcrumb-dot"></div>
                                </div>
                                <div className="catalogue-breadcrumb-item active">
                                    <a href=""><p>Услуги</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="main-content flex flex-col justify-center items-center text-center w-full">
                            <h1 className="main-title">
                                Все терапевтические методики ортопедии
                            </h1>
                            <a href="#" className="btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto">Заказать звонок</a>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="main-slider-item">
                    <div className="main-bg brightness-50">
                        <img src={ImgMain1} alt="Хруст в коленях – норма или повод обратиться к врачу?" />
                    </div>
                    <div className="container-outer flex flex-col justify-between h-full py-8">
                        <div className="main-breadcrumbs">
                            <div className="catalogue-breadcrumb-wrapper fw-400-18-22">
                                <div className="catalogue-breadcrumb-item">
                                    <a href=""><p>Главная</p></a>
                                </div>
                                <div className="catalogue-breadcrumb-dot-wrapper center">
                                    <div className="catalogue-breadcrumb-dot"></div>
                                </div>
                                <div className="catalogue-breadcrumb-item active">
                                    <a href=""><p>Услуги</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="main-content flex flex-col justify-center items-center text-center w-full">
                            <h1 className="main-title">
                                Врачи экспертного уровня
                            </h1>
                            <a href="#" className="btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto">Заказать звонок</a>
                        </div>
                        <div></div>
                    </div>
                </div>
            </Slider>

        </div>

        <div className="our-services">
            <div className="container-outer">
                <div className="our-services-title">
                    <h2>Наши услуги</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <a href="#" className="our-services-item">
                        <div className="our-services-bg">
                            <img src={ImgOutService1} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-4">
                            <div className="our-services-icon">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.333 19.6333V16.4667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M25.3333 12.6667V5.70002C25.3333 5.00018 24.7664 4.43335 24.0666 4.43335H2.53327C1.83343 4.43335 1.2666 5.00018 1.2666 5.70002V34.8333C1.2666 35.5332 1.83343 36.1 2.53327 36.1H24.0666C24.7664 36.1 25.3333 35.5332 25.3333 34.8333V23.4333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M1.2666 31.0334H25.3333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M11.4004 33.5667H15.2004" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.7998 14.5667V10.7667H6.33314V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M13.9336 14.5667V9.5H16.4669V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M8.86621 14.5667V6.96667H11.3995V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.16699 21.5333H4.43366L6.33366 17.7333L8.23366 25.3333L10.1337 21.5333H12.0337" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M20.9 16.4667C21.9493 16.4667 22.8 15.616 22.8 14.5667C22.8 13.5173 21.9493 12.6667 20.9 12.6667C19.8507 12.6667 19 13.5173 19 14.5667C19 15.616 19.8507 16.4667 20.9 16.4667Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2998 12.6667V14.5667H22.7998" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.8336 23.4334C16.8829 23.4334 17.7336 22.5827 17.7336 21.5334C17.7336 20.484 16.8829 19.6334 15.8336 19.6334C14.7843 19.6334 13.9336 20.484 13.9336 21.5334C13.9336 22.5827 14.7843 23.4334 15.8336 23.4334Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2995 27.3803C31.8302 26.8996 31.1766 26.6 30.4521 26.6C29.0239 26.6 27.8662 27.7578 27.8662 29.1859C27.8662 29.9497 28.1974 30.6356 28.7237 31.1094L32.2995 33.7776L35.8753 31.1094C36.4023 30.6363 36.7329 29.9497 36.7329 29.1859C36.7329 27.7578 35.5751 26.6 34.147 26.6C33.4224 26.6 32.7688 26.8996 32.2995 27.3803Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.3001 24.7001V21.5334H17.7334" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M31.0332 8.23334H33.5665" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M33.5666 8.23336C34.3532 6.20352 34.8333 5.70002 34.8333 4.43336C34.8333 3.03432 33.699 1.90002 32.2999 1.90002C30.9009 1.90002 29.7666 3.03432 29.7666 4.43336C29.7666 5.70002 30.2467 6.20352 31.0333 8.23336V10.1334C31.0333 10.483 31.317 10.7667 31.6666 10.7667H32.9333C33.2829 10.7667 33.5666 10.483 33.5666 10.1334V8.23336Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.2003 27.8666H13.9336V29.1333H15.2003V27.8666Z" fill="black" />
                                    <path d="M17.7335 27.8666H16.4668V29.1333H17.7335V27.8666Z" fill="black" />
                                    <path d="M10.1329 27.8666H8.86621V29.1333H10.1329V27.8666Z" fill="black" />
                                    <path d="M12.6671 27.8666H11.4004V29.1333H12.6671V27.8666Z" fill="black" />
                                </svg>
                            </div>
                            <p className="our-services-name">
                                Компьютерная диагностика плоскостопия
                            </p>
                        </div>
                        <span className="our-services-btn">Подробнее</span>
                    </a>
                    <a href="#" className="our-services-item">
                        <div className="our-services-bg">
                            <img src={ImgOutService1} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-4">
                            <div className="our-services-icon">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.333 19.6333V16.4667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M25.3333 12.6667V5.70002C25.3333 5.00018 24.7664 4.43335 24.0666 4.43335H2.53327C1.83343 4.43335 1.2666 5.00018 1.2666 5.70002V34.8333C1.2666 35.5332 1.83343 36.1 2.53327 36.1H24.0666C24.7664 36.1 25.3333 35.5332 25.3333 34.8333V23.4333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M1.2666 31.0334H25.3333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M11.4004 33.5667H15.2004" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.7998 14.5667V10.7667H6.33314V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M13.9336 14.5667V9.5H16.4669V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M8.86621 14.5667V6.96667H11.3995V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.16699 21.5333H4.43366L6.33366 17.7333L8.23366 25.3333L10.1337 21.5333H12.0337" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M20.9 16.4667C21.9493 16.4667 22.8 15.616 22.8 14.5667C22.8 13.5173 21.9493 12.6667 20.9 12.6667C19.8507 12.6667 19 13.5173 19 14.5667C19 15.616 19.8507 16.4667 20.9 16.4667Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2998 12.6667V14.5667H22.7998" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.8336 23.4334C16.8829 23.4334 17.7336 22.5827 17.7336 21.5334C17.7336 20.484 16.8829 19.6334 15.8336 19.6334C14.7843 19.6334 13.9336 20.484 13.9336 21.5334C13.9336 22.5827 14.7843 23.4334 15.8336 23.4334Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2995 27.3803C31.8302 26.8996 31.1766 26.6 30.4521 26.6C29.0239 26.6 27.8662 27.7578 27.8662 29.1859C27.8662 29.9497 28.1974 30.6356 28.7237 31.1094L32.2995 33.7776L35.8753 31.1094C36.4023 30.6363 36.7329 29.9497 36.7329 29.1859C36.7329 27.7578 35.5751 26.6 34.147 26.6C33.4224 26.6 32.7688 26.8996 32.2995 27.3803Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.3001 24.7001V21.5334H17.7334" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M31.0332 8.23334H33.5665" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M33.5666 8.23336C34.3532 6.20352 34.8333 5.70002 34.8333 4.43336C34.8333 3.03432 33.699 1.90002 32.2999 1.90002C30.9009 1.90002 29.7666 3.03432 29.7666 4.43336C29.7666 5.70002 30.2467 6.20352 31.0333 8.23336V10.1334C31.0333 10.483 31.317 10.7667 31.6666 10.7667H32.9333C33.2829 10.7667 33.5666 10.483 33.5666 10.1334V8.23336Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.2003 27.8666H13.9336V29.1333H15.2003V27.8666Z" fill="black" />
                                    <path d="M17.7335 27.8666H16.4668V29.1333H17.7335V27.8666Z" fill="black" />
                                    <path d="M10.1329 27.8666H8.86621V29.1333H10.1329V27.8666Z" fill="black" />
                                    <path d="M12.6671 27.8666H11.4004V29.1333H12.6671V27.8666Z" fill="black" />
                                </svg>
                            </div>
                            <p className="our-services-name">
                                Компьютерная диагностика плоскостопия
                            </p>
                        </div>
                        <span className="our-services-btn">Подробнее</span>
                    </a>
                    <a href="#" className="our-services-item">
                        <div className="our-services-bg">
                            <img src={ImgOutService1} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-4">
                            <div className="our-services-icon">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.333 19.6333V16.4667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M25.3333 12.6667V5.70002C25.3333 5.00018 24.7664 4.43335 24.0666 4.43335H2.53327C1.83343 4.43335 1.2666 5.00018 1.2666 5.70002V34.8333C1.2666 35.5332 1.83343 36.1 2.53327 36.1H24.0666C24.7664 36.1 25.3333 35.5332 25.3333 34.8333V23.4333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M1.2666 31.0334H25.3333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M11.4004 33.5667H15.2004" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.7998 14.5667V10.7667H6.33314V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M13.9336 14.5667V9.5H16.4669V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M8.86621 14.5667V6.96667H11.3995V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.16699 21.5333H4.43366L6.33366 17.7333L8.23366 25.3333L10.1337 21.5333H12.0337" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M20.9 16.4667C21.9493 16.4667 22.8 15.616 22.8 14.5667C22.8 13.5173 21.9493 12.6667 20.9 12.6667C19.8507 12.6667 19 13.5173 19 14.5667C19 15.616 19.8507 16.4667 20.9 16.4667Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2998 12.6667V14.5667H22.7998" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.8336 23.4334C16.8829 23.4334 17.7336 22.5827 17.7336 21.5334C17.7336 20.484 16.8829 19.6334 15.8336 19.6334C14.7843 19.6334 13.9336 20.484 13.9336 21.5334C13.9336 22.5827 14.7843 23.4334 15.8336 23.4334Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2995 27.3803C31.8302 26.8996 31.1766 26.6 30.4521 26.6C29.0239 26.6 27.8662 27.7578 27.8662 29.1859C27.8662 29.9497 28.1974 30.6356 28.7237 31.1094L32.2995 33.7776L35.8753 31.1094C36.4023 30.6363 36.7329 29.9497 36.7329 29.1859C36.7329 27.7578 35.5751 26.6 34.147 26.6C33.4224 26.6 32.7688 26.8996 32.2995 27.3803Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.3001 24.7001V21.5334H17.7334" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M31.0332 8.23334H33.5665" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M33.5666 8.23336C34.3532 6.20352 34.8333 5.70002 34.8333 4.43336C34.8333 3.03432 33.699 1.90002 32.2999 1.90002C30.9009 1.90002 29.7666 3.03432 29.7666 4.43336C29.7666 5.70002 30.2467 6.20352 31.0333 8.23336V10.1334C31.0333 10.483 31.317 10.7667 31.6666 10.7667H32.9333C33.2829 10.7667 33.5666 10.483 33.5666 10.1334V8.23336Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.2003 27.8666H13.9336V29.1333H15.2003V27.8666Z" fill="black" />
                                    <path d="M17.7335 27.8666H16.4668V29.1333H17.7335V27.8666Z" fill="black" />
                                    <path d="M10.1329 27.8666H8.86621V29.1333H10.1329V27.8666Z" fill="black" />
                                    <path d="M12.6671 27.8666H11.4004V29.1333H12.6671V27.8666Z" fill="black" />
                                </svg>
                            </div>
                            <p className="our-services-name">
                                Компьютерная диагностика плоскостопия
                            </p>
                        </div>
                        <span className="our-services-btn">Подробнее</span>
                    </a>
                    <a href="#" className="our-services-item">
                        <div className="our-services-bg">
                            <img src={ImgOutService1} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-4">
                            <div className="our-services-icon">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.333 19.6333V16.4667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M25.3333 12.6667V5.70002C25.3333 5.00018 24.7664 4.43335 24.0666 4.43335H2.53327C1.83343 4.43335 1.2666 5.00018 1.2666 5.70002V34.8333C1.2666 35.5332 1.83343 36.1 2.53327 36.1H24.0666C24.7664 36.1 25.3333 35.5332 25.3333 34.8333V23.4333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M1.2666 31.0334H25.3333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M11.4004 33.5667H15.2004" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.7998 14.5667V10.7667H6.33314V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M13.9336 14.5667V9.5H16.4669V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M8.86621 14.5667V6.96667H11.3995V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.16699 21.5333H4.43366L6.33366 17.7333L8.23366 25.3333L10.1337 21.5333H12.0337" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M20.9 16.4667C21.9493 16.4667 22.8 15.616 22.8 14.5667C22.8 13.5173 21.9493 12.6667 20.9 12.6667C19.8507 12.6667 19 13.5173 19 14.5667C19 15.616 19.8507 16.4667 20.9 16.4667Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2998 12.6667V14.5667H22.7998" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.8336 23.4334C16.8829 23.4334 17.7336 22.5827 17.7336 21.5334C17.7336 20.484 16.8829 19.6334 15.8336 19.6334C14.7843 19.6334 13.9336 20.484 13.9336 21.5334C13.9336 22.5827 14.7843 23.4334 15.8336 23.4334Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2995 27.3803C31.8302 26.8996 31.1766 26.6 30.4521 26.6C29.0239 26.6 27.8662 27.7578 27.8662 29.1859C27.8662 29.9497 28.1974 30.6356 28.7237 31.1094L32.2995 33.7776L35.8753 31.1094C36.4023 30.6363 36.7329 29.9497 36.7329 29.1859C36.7329 27.7578 35.5751 26.6 34.147 26.6C33.4224 26.6 32.7688 26.8996 32.2995 27.3803Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.3001 24.7001V21.5334H17.7334" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M31.0332 8.23334H33.5665" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M33.5666 8.23336C34.3532 6.20352 34.8333 5.70002 34.8333 4.43336C34.8333 3.03432 33.699 1.90002 32.2999 1.90002C30.9009 1.90002 29.7666 3.03432 29.7666 4.43336C29.7666 5.70002 30.2467 6.20352 31.0333 8.23336V10.1334C31.0333 10.483 31.317 10.7667 31.6666 10.7667H32.9333C33.2829 10.7667 33.5666 10.483 33.5666 10.1334V8.23336Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.2003 27.8666H13.9336V29.1333H15.2003V27.8666Z" fill="black" />
                                    <path d="M17.7335 27.8666H16.4668V29.1333H17.7335V27.8666Z" fill="black" />
                                    <path d="M10.1329 27.8666H8.86621V29.1333H10.1329V27.8666Z" fill="black" />
                                    <path d="M12.6671 27.8666H11.4004V29.1333H12.6671V27.8666Z" fill="black" />
                                </svg>
                            </div>
                            <p className="our-services-name">
                                Компьютерная диагностика плоскостопия
                            </p>
                        </div>
                        <span className="our-services-btn">Подробнее</span>
                    </a>
                    <a href="#" className="our-services-item">
                        <div className="our-services-bg">
                            <img src={ImgOutService1} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-4">
                            <div className="our-services-icon">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.333 19.6333V16.4667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M25.3333 12.6667V5.70002C25.3333 5.00018 24.7664 4.43335 24.0666 4.43335H2.53327C1.83343 4.43335 1.2666 5.00018 1.2666 5.70002V34.8333C1.2666 35.5332 1.83343 36.1 2.53327 36.1H24.0666C24.7664 36.1 25.3333 35.5332 25.3333 34.8333V23.4333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M1.2666 31.0334H25.3333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M11.4004 33.5667H15.2004" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.7998 14.5667V10.7667H6.33314V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M13.9336 14.5667V9.5H16.4669V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M8.86621 14.5667V6.96667H11.3995V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.16699 21.5333H4.43366L6.33366 17.7333L8.23366 25.3333L10.1337 21.5333H12.0337" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M20.9 16.4667C21.9493 16.4667 22.8 15.616 22.8 14.5667C22.8 13.5173 21.9493 12.6667 20.9 12.6667C19.8507 12.6667 19 13.5173 19 14.5667C19 15.616 19.8507 16.4667 20.9 16.4667Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2998 12.6667V14.5667H22.7998" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.8336 23.4334C16.8829 23.4334 17.7336 22.5827 17.7336 21.5334C17.7336 20.484 16.8829 19.6334 15.8336 19.6334C14.7843 19.6334 13.9336 20.484 13.9336 21.5334C13.9336 22.5827 14.7843 23.4334 15.8336 23.4334Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2995 27.3803C31.8302 26.8996 31.1766 26.6 30.4521 26.6C29.0239 26.6 27.8662 27.7578 27.8662 29.1859C27.8662 29.9497 28.1974 30.6356 28.7237 31.1094L32.2995 33.7776L35.8753 31.1094C36.4023 30.6363 36.7329 29.9497 36.7329 29.1859C36.7329 27.7578 35.5751 26.6 34.147 26.6C33.4224 26.6 32.7688 26.8996 32.2995 27.3803Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.3001 24.7001V21.5334H17.7334" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M31.0332 8.23334H33.5665" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M33.5666 8.23336C34.3532 6.20352 34.8333 5.70002 34.8333 4.43336C34.8333 3.03432 33.699 1.90002 32.2999 1.90002C30.9009 1.90002 29.7666 3.03432 29.7666 4.43336C29.7666 5.70002 30.2467 6.20352 31.0333 8.23336V10.1334C31.0333 10.483 31.317 10.7667 31.6666 10.7667H32.9333C33.2829 10.7667 33.5666 10.483 33.5666 10.1334V8.23336Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.2003 27.8666H13.9336V29.1333H15.2003V27.8666Z" fill="black" />
                                    <path d="M17.7335 27.8666H16.4668V29.1333H17.7335V27.8666Z" fill="black" />
                                    <path d="M10.1329 27.8666H8.86621V29.1333H10.1329V27.8666Z" fill="black" />
                                    <path d="M12.6671 27.8666H11.4004V29.1333H12.6671V27.8666Z" fill="black" />
                                </svg>
                            </div>
                            <p className="our-services-name">
                                Компьютерная диагностика плоскостопия
                            </p>
                        </div>
                        <span className="our-services-btn">Подробнее</span>
                    </a>
                    <a href="#" className="our-services-item">
                        <div className="our-services-bg">
                            <img src={ImgOutService1} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-4">
                            <div className="our-services-icon">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.333 19.6333V16.4667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M25.3333 12.6667V5.70002C25.3333 5.00018 24.7664 4.43335 24.0666 4.43335H2.53327C1.83343 4.43335 1.2666 5.00018 1.2666 5.70002V34.8333C1.2666 35.5332 1.83343 36.1 2.53327 36.1H24.0666C24.7664 36.1 25.3333 35.5332 25.3333 34.8333V23.4333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M1.2666 31.0334H25.3333" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M11.4004 33.5667H15.2004" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.7998 14.5667V10.7667H6.33314V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M13.9336 14.5667V9.5H16.4669V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M8.86621 14.5667V6.96667H11.3995V14.5667" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M3.16699 21.5333H4.43366L6.33366 17.7333L8.23366 25.3333L10.1337 21.5333H12.0337" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M20.9 16.4667C21.9493 16.4667 22.8 15.616 22.8 14.5667C22.8 13.5173 21.9493 12.6667 20.9 12.6667C19.8507 12.6667 19 13.5173 19 14.5667C19 15.616 19.8507 16.4667 20.9 16.4667Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2998 12.6667V14.5667H22.7998" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.8336 23.4334C16.8829 23.4334 17.7336 22.5827 17.7336 21.5334C17.7336 20.484 16.8829 19.6334 15.8336 19.6334C14.7843 19.6334 13.9336 20.484 13.9336 21.5334C13.9336 22.5827 14.7843 23.4334 15.8336 23.4334Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.2995 27.3803C31.8302 26.8996 31.1766 26.6 30.4521 26.6C29.0239 26.6 27.8662 27.7578 27.8662 29.1859C27.8662 29.9497 28.1974 30.6356 28.7237 31.1094L32.2995 33.7776L35.8753 31.1094C36.4023 30.6363 36.7329 29.9497 36.7329 29.1859C36.7329 27.7578 35.5751 26.6 34.147 26.6C33.4224 26.6 32.7688 26.8996 32.2995 27.3803Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M32.3001 24.7001V21.5334H17.7334" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M31.0332 8.23334H33.5665" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M33.5666 8.23336C34.3532 6.20352 34.8333 5.70002 34.8333 4.43336C34.8333 3.03432 33.699 1.90002 32.2999 1.90002C30.9009 1.90002 29.7666 3.03432 29.7666 4.43336C29.7666 5.70002 30.2467 6.20352 31.0333 8.23336V10.1334C31.0333 10.483 31.317 10.7667 31.6666 10.7667H32.9333C33.2829 10.7667 33.5666 10.483 33.5666 10.1334V8.23336Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M15.2003 27.8666H13.9336V29.1333H15.2003V27.8666Z" fill="black" />
                                    <path d="M17.7335 27.8666H16.4668V29.1333H17.7335V27.8666Z" fill="black" />
                                    <path d="M10.1329 27.8666H8.86621V29.1333H10.1329V27.8666Z" fill="black" />
                                    <path d="M12.6671 27.8666H11.4004V29.1333H12.6671V27.8666Z" fill="black" />
                                </svg>
                            </div>
                            <p className="our-services-name">
                                Компьютерная диагностика плоскостопия
                            </p>
                        </div>
                        <span className="our-services-btn">Подробнее</span>
                    </a>
                </div>
            </div>
        </div>

        <div className="bg-white">
            <div className="container-outer">
                <div className="appointment-doctor py-24 md:mx-20">
                    <div className="appointment-doctor-title">
                        <h2>Рекомендовано записаться на прием:</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Для сохранения здоровья суставов
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            При лечении мышц и связок
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Для профилактики заболеваний вен
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Перенесшим операцию
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Нуждающимся в реабилитации
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Любителям спорта
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Для коррекции походки
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            При борьбе с головной болью
                        </div>
                        <div className="flex gap-6 items-center justify-start">
                            <svg width="48" height="48" className="shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_4139)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z" fill="#3A9EAA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_4139">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Будущим мамам
                        </div>
                    </div>
                </div>
                <div className="pb-16">
                    <FormAppDoctor />
                </div>
            </div>
        </div>

        <div className="bottom-banner">
            <div className="container-outer">
                <div className="bottom-banner__outer">
                    <div className="bottom-banner__inner">
                        <div className="bottom-banner__title fw-700-36-50">
                            <p>Магазин ортопедических товаров</p>
                        </div>
                        <div className="bottom-banner__subtitle fw-700-26-35">
                            <p>Основна сфера деяльности – краткое описание желательно в две строки</p>
                        </div>
                        <div className="my-6 text-center">
                            <Link href={route('shop')} className="main-page-link-btn -green">Перейти</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}