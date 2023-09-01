import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';

import ImgOrthopedic1 from "@/../images/img-orthopedic-1.png"
import ImgAbout1 from "@/../images/img-about-1.png"



import Slider from 'react-slick';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import NoPhoto from '@/Icons/NoPhoto';
import Cart2 from '@/Icons/Cart2';
import Star from '@/Icons/Star';
import ProductTizer from '@/Components/ProductTizer';
import FormAppDoctor from '@/Components/FormAppDoctor';


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

    const { pagetitle, products } = props

    var settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 460,
            settings: {
                slidesToShow: 1
            }
        }]
    };


    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div class="main-block">
                <div class="main-bg brightness-50">
                    <img src={ImgAbout1} alt="Хруст в коленях – норма или повод обратиться к врачу?" />
                </div>
                <div class="container-outer">
                    <div class="main-content flex flex-col justify-center text-center">
                        <h1 class="main-title">
                            о компании
                        </h1>
                        <p class="main-subtitle">
                            Ортопедический центр Extra Comfort работает с 2006 года. <br /> Мы - первооткрыватели ортопедического центра в Казахстане.
                        </p>
                        <a href="#" class="btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto">Заказать звонок</a>
                    </div>
                </div>
            </div>
            <div class="about-info bg-white py-20">
                <div class="container-outer">
                    <h4 class="fw-700-32-40 mb-6 center">Наша деятельность развивается в двух направлениях:</h4>
                    <div class="flex flex-col md:flex-row items-stretch gap-5 mb-5">
                        <div class="white-block -gray md:w-1/2">
                            <h4 class="fw-700-20-24 mb-6 center">Диагностика и лечение опорно-двигательной системы</h4>
                            <ul class="about-content-list">
                                <li>Мы занимаемся патологией стоп и опорно-двигательной системы более 17 лет!</li>
                                <li>Уникальный опыт 17-летней практики ортореабилитологии, учитывающий взаимосвязи между верхним и нижним отделами опорно-двигательной системы</li>
                                <li>Уникальная подометрическая система PadPro Professional - для диагностики плоскостопия и нагрузки опорно-двигательного аппарата</li>
                                <li>Единственный в городе Оптический топограф – система безлучевой 3D диагностики сколиоза и других деформаций позвоночника</li>
                                <li>У нас создана мультидисциплинарная команда по реабилитации опорно-двигательной системы</li>
                                <li>Высокий профессиональный уровень специалистов -
                                    в постоянном процессе его повышения - проходят регулярные обучения, участвуют в международных конференциях, семинарах, тренингах</li>
                                <li>35500 пациентам сделали индивидуальные и индивидуализированные стельки</li>
                                <li>Уникальный опыт создания разгрузочных систем при язвенных поражениях стоп, после частичных ампутаций стоп</li>
                            </ul>
                        </div>
                        <div class="white-block -aqua md:w-1/2 flex flex-col justify-between">
                            <div class="block">
                                <h4 class="fw-700-20-24 mb-6 center">Консультация и подбор при реализации товаров медицинского назначения</h4>
                                <ul class="about-content-list">
                                    <li>
                                        <p><strong>Высокое качество ортопедической продукции</strong></p>
                                        <p>У нас представлена продукция лидеров рынка в ортопедии, проверенная через собственное использование и выбор лучшего по качеству и соответствующей цене. Более 1500 наименований изученных и тщательно отобранных медицинских изделий (из них ортопедических стелек - более 150 видов!)</p>
                                    </li>
                                    <li>
                                        <p><strong>Сотрудничество с лучшими производителями</strong></p>
                                        <p>Мы регулярно посещаем выставки медицинских изделий в Казахстане и зарубежом. Отслеживаем появление нового ассортимента ортопедической продукции у производителей и вводим в линейку товаров инновационные изделия</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="white-block relative mt-16 mb-0">
                                <p class="fw-600-24-34">
                                    Достижение максимально возможного результата в лечении пациента и усовершенствовании качества жизни людей
                                </p>
                                <svg class="absolute right-0 -top-16" width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="91.667" height="91.667" rx="45.8335" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.958 45.8336C13.958 28.2295 28.229 13.9585 45.8331 13.9585C63.4373 13.9585 77.7083 28.2295 77.7083 45.8336C77.7083 63.4378 63.4373 77.7087 45.8331 77.7087H16.1293L18.9583 73.4653L19.0122 73.3845C19.4947 72.6609 19.9479 71.9812 20.2739 71.3764C20.6301 70.7158 20.9564 69.9325 21.0029 68.9954C21.0508 68.0309 20.7758 67.1858 20.4777 66.4842C20.1962 65.8213 19.7868 65.0519 19.3388 64.2098L19.2935 64.1247C17.0807 59.9645 13.958 52.8074 13.958 45.8336ZM45.8331 8.9585C25.4676 8.9585 8.95801 25.4681 8.95801 45.8336C8.95801 54.07 12.5655 62.123 14.8792 66.4727C15.3873 67.4281 15.6901 68.0022 15.8757 68.4391C15.9415 68.594 15.976 68.6953 15.9937 68.7547C15.9734 68.8044 15.9368 68.8849 15.8729 69.0036C15.6718 69.3765 15.3534 69.8588 14.798 70.6918L9.37789 78.822C8.86646 79.5891 8.81878 80.5755 9.25383 81.3884C9.68887 82.2013 10.536 82.7087 11.458 82.7087H45.8331C66.1987 82.7087 82.7083 66.1992 82.7083 45.8336C82.7083 25.4681 66.1987 8.9585 45.8331 8.9585ZM16.0156 68.6945C16.0166 68.6911 16.0169 68.6895 16.0169 68.6895C16.0168 68.6896 16.0166 68.6902 16.0163 68.6914C16.0161 68.6922 16.0159 68.6932 16.0156 68.6945ZM60.969 38.0527C61.9453 37.0764 61.9453 35.4935 60.969 34.5172C59.9927 33.5409 58.4098 33.5409 57.4335 34.5172L42.0137 49.937L36.1425 44.0659C35.1662 43.0895 33.5833 43.0895 32.607 44.0659C31.6307 45.0422 31.6307 46.6251 32.607 47.6014L40.2459 55.2403C41.2222 56.2166 42.8051 56.2166 43.7814 55.2403L60.969 38.0527Z" fill="#65BC54" />
                                </svg>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="orthopedic-block bg-white pb-20">
                <div class="container-outer">
                    <div class="flex flex-col md:flex-row items-center gap-6">
                        <div class="block md:w-1/2">
                            <h4 class="fw-600-24-34 uppercase mb-5">ОРТОПЕДИЧЕСКИЙ ЦЕНТР</h4>
                            <div class="orthopedic-block-text">
                                <p>Ортопедический центр Extra Comfort (лицензия № 000168DM) - лечебное учреждение, оказывающее консультативно-реабилитационные услуги амбулаторного уровня пациентам всех возрастных групп преимущественно с заболеваниями опорно-двигательного аппарата и нервной системы</p>
                                <p>Консультативные услуги предусматривают осмотр специалистов с использованием компьютерной диагностики позвоночника и стоп на аппаратах: электронный и барометрический оптический подометр и оптический топограф.</p>
                                <p>Реабилитационные услуги включает назначение и проведение физиопроцедур, массажа, мануальной терапии, кинезотерапии с использованием эффективных методик (Войта терапии, Бобат терапии, Шрот терапии, SEAS, методик по Кальтенборну-Эвенту, PNF), кинезиотейпирования, ортопедической коррекции.</p>
                            </div>
                        </div>
                        <div class="block md:w-1/2">
                            <div class="orthopedic-slider">
                                <div class="orthopedic-slide-item">
                                    <img src={ImgOrthopedic1} alt="" />
                                </div>
                                <div class="orthopedic-slide-item">
                                    <img src={ImgOrthopedic1} alt="" />
                                </div>
                                <div class="orthopedic-slide-item">
                                    <img src={ImgOrthopedic1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white pb-20">
                <div class="container-outer">
                    <FormAppDoctor />
                </div>
            </div>
        </Layout>
    );
}
