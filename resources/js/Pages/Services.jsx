import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";

import ImgMain1 from "@/../images/img-main-1.jpg"
import FormAppDoctor from "@/Components/FormAppDoctor";
import Slider from 'react-slick';
import parse from "html-react-parser"
import Breadcrumbs from "@/Components/Breadcrumbs";
import CallBack from "@/Modals/CallBack";
import { useLayout } from "@/Contexts/LayoutContext";


export default (props) => {

    const { pagetitle, facilities, banners } = props;

    const { setModal } = useLayout()

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
        <div className="main-block relative">
            <div className="absolute top-0 w-full flex justify-center text-white pt-6">
                <Breadcrumbs {...props} inbanner={true} />
            </div>
            <Slider {...settings} className="main-slider w-full">
                {banners.data.map((item, index) => <div key={index} className="main-slider-item">
                    <div className="main-bg brightness-50">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="container-outer flex flex-col justify-between h-full py-8">
                        <div className="main-content flex flex-col justify-center items-center text-center w-full">
                            <div className="main-title">{item.title}</div>
                            <a href="#" className="btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto" onClick={e => {
                                e.preventDefault()
                                setModal(<CallBack />)
                            }}>Заказать звонок</a>
                        </div>
                        <div></div>
                    </div>
                </div>)}
            </Slider>
        </div>

        <div className="our-services">
            <div className="container-outer">
                <div className="our-services-title">
                    <h2>Наши услуги</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {facilities.data.map((item, index) => <Link href={route('services.show', {
                        service: item.slug
                    })} key={index} className="our-services-item">
                        <div className="our-services-bg">
                            <img src={item.bg} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-4">
                            <div className="our-services-icon">
                                {parse(item.icon ?? ``)}
                            </div>
                            <div className="our-services-name">{parse(item.title ?? ``)}</div>
                        </div>
                        <span className="our-services-btn">Подробнее</span>
                    </Link>)}
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