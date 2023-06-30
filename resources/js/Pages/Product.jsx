import Breadcrumbs from '@/Components/Breadcrumbs';
import Paginate from '@/Components/Paginate';
import ProductSlider from '@/Components/ProductSlider';
import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';
import Slider from 'react-slick';
import InStock from "../../images/in-stock-tick.svg"
import Phone from "../../images/phone.svg"
import MastercardLogo from "../../images/mastercard-logo.svg"
import VisaLogo from "../../images/visa-logo.svg"
import ScaleIcon from "../../images/scale-icon.svg"
import Money from "../../images/money.svg"
import Avatar from "../../images/avatar.svg"
import CatalogueItemPhoto from "../../images/catalogue-item-photo.svg"
import Cart from '@/Icons/Cart';
import Heart from '@/Icons/Heart';







export default (props) => {

    const { pagetitle, product } = props

    const price = '4444';
    console.log(product.data)

    return (
        <Layout {...props} >
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
            <div className="product-description">
                <div className="container-outer">
                    <div className="product-description__outer">
                        <div className="product-description__inner">
                            <ProductSlider {...props} />
                            <div className="product-description__purchase-details">
                                <div className="product-title fw-700-35-42">
                                    <p>{pagetitle}</p>
                                </div>
                                <div className="product-description__row-one">
                                    <div className="in-stock-label">
                                        <div className="in-stock-label__tick center">
                                            <img src={InStock} alt="" />
                                        </div>
                                        <div className="in-stock-label__txt fw-400-14-17">
                                            <p>В наличии</p>
                                        </div>
                                    </div>
                                    <div className="articul fw-400-14-17">
                                        <p>Артикул:&nbsp;</p><span className="articul__code">{product.data.article}</span>
                                    </div>
                                </div>
                                <div className="product-description__card">
                                    <div className="product-description__card-inner">
                                        <div className="product-description__card-left">
                                            {/* <div className="product-description__card-brand-wrapper">
                                                <div className="product-description__card-brand-label fw-700-14-17">
                                                    <p>Бренд</p>
                                                </div>
                                                <div className="product-description__card-brand-title fw-400-14-17">
                                                    <p>Название</p>
                                                </div>
                                            </div> */}
                                            <div className="product-description__card-size-wrapper">
                                                <div className="product-description__card-size-label fw-700-14-17">
                                                    <p>Размер</p>
                                                </div>
                                                {/* <div className="product-description__card-size-link fw-400-14-17">
                                                    <a href="">Подобрать размер</a>
                                                </div> */}
                                            </div>
                                            <div className="product-description__card-size-flexbox">
                                                <div className="product-description__product-size-item fw-400-12-14">
                                                    <p>36,5</p>
                                                </div>
                                                <div className="product-description__product-size-item fw-400-12-14">
                                                    <p>37</p>
                                                </div>
                                                <div className="product-description__product-size-item fw-400-12-14">
                                                    <p>37,5</p>
                                                </div>
                                                <div className="product-description__product-size-item fw-400-12-14">
                                                    <p>38</p>
                                                </div>
                                                <div className="product-description__product-size-item fw-400-12-14">
                                                    <p>38,5</p>
                                                </div>
                                                <div className="product-description__product-size-item fw-400-12-14">
                                                    <p>39</p>
                                                </div>
                                                <div className="product-description__product-size-item fw-400-12-14">
                                                    <p>39,5</p>
                                                </div>
                                                <div className="product-description__product-size-item fw-400-12-14">
                                                    <p>40</p>
                                                </div>
                                                <div className="product-description__product-size-item fw-400-12-14">
                                                    <p>40,5</p>
                                                </div>
                                                <div className="product-description__product-size-item fw-400-12-14">
                                                    <p>41</p>
                                                </div>
                                            </div>
                                            {/* <div className="product-description__card-purchase-label fw-700-14-17">
                                                <p>Оплата</p>
                                            </div>
                                            <div className="product-description__card-purchase-flexbox">
                                                <div className="product-description__card-purchase-item center">
                                                    <img src={VisaLogo} alt="" />
                                                </div>
                                                <div className="product-description__card-purchase-item center">
                                                    <img src={MastercardLogo} alt="" />
                                                </div>
                                                <div className="product-description__card-purchase-item center">
                                                    <img src={Money} alt="" />
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="product-description__card-right">
                                            {/* <div className="product-description__card-delivery-wrapper">
                                                <div className="product-description__card-delivery-label fw-700-14-17">
                                                    <p>Доставка</p>
                                                </div>
                                                <div className="product-description__card-delivery-desc fw-400-14-17">
                                                    <p>Описание и условие доставки</p>
                                                </div>
                                            </div> */}
                                            <div className="btn-secondary product-description__btn-secondary">
                                                <div className="product-description__btn-secondary-phone-icon-wrapper">
                                                    <img src={Phone} alt="" />
                                                </div>
                                                <div className="product-description__btn-secondary-txt-wrapper fw-700-16-20">
                                                    <p>Заказать звонок</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-description__line"></div>
                                <div className="product-description__row-two">
                                    <div className="catalogue__item-price fw-700-18-22 center mr-4">{price}</div>
                                    <div className="purchase-btn-group product-description__purchase-btn-group center">
                                        <div className="btn-purchase product-description__btn-purchase">
                                            <Cart className={`w-5 h-5 mr-2`} />
                                            <div className="btn-purchase__txt fw-700-16-20">Купить</div>
                                        </div>
                                        <div className="heart-icon-wrapper product-description__heart-icon-wrapper">
                                            <Heart className={`w-4 h-4`} />
                                        </div>
                                        {/* <div className="product-description__scales-icon-wrapper scales-icon-wrapper">
                                            <img src={ScaleIcon} alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-review-tab-wrapper product-review-tab-wrapper_mb34">
                <div className="container-outer">
                    <div className="product-review-tab-wrapper__tab-line fw-700-20-24">
                        <button className="tab-item product-active">
                            Описание
                        </button>
                        <button className="tab-item">
                            Отзывы
                        </button>
                    </div>
                    <div className="product-review-tab-wrapper__bottom-section">
                        <div className="product-review-tab-wrapper__bottom-section-inner">
                            <ul className="product-review-tab-wrapper__bottom-section-list">
                                <ul id="product-desc" className="product-review-tab-wrapper__bottom-list-item">
                                    <li className="product-review-tab-wrapper__bottom-section-item">
                                        <div className="product-review-tab-wrapper__bottom-section-title fw-600-20-24">
                                            <p>Основное</p>
                                        </div>
                                        <div className="product-review-tab-wrapper__bottom-section-desc fw-400-16-19">
                                            <p>Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Товарищи! консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке форм развития. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание новых предложений.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="product-review-tab-wrapper__bottom-section-item">
                                        <div className="product-review-tab-wrapper__bottom-section-title fw-600-20-24">
                                            <p>Характеристики</p>
                                        </div>
                                        <div className="product-review-tab-wrapper__bottom-section-desc fw-400-16-19">
                                            <p>Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Товарищи! консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке форм развития. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание новых предложений.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="product-review-tab-wrapper__bottom-section-item">
                                        <div className="product-review-tab-wrapper__bottom-section-title fw-600-20-24">
                                            <p>Рекомендации</p>
                                        </div>
                                        <div className="product-review-tab-wrapper__bottom-section-desc fw-400-16-19">
                                            <p>Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Товарищи! консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке форм развития. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание новых предложений.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <div id="product-feedback" className="product-review-tab-wrapper__bottom-list-item" style={{ display: `none` }}>
                                    <ul className="comment-wrapper product-review-tab-wrapper__comment-wrapper">
                                        <li className="comment-wrapper__comment comment">
                                            <div className="comment__left">
                                                <div className="comment__photo">
                                                    <img src={Avatar} alt="" />
                                                </div>
                                                <div className="comment__content ">
                                                    <div className="comment__fullname fw-500-16-22">
                                                        <p>Фамилия Имя</p>
                                                    </div>
                                                    <div className="comment__txt fw-400-16-19">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    </div>
                                                    <div className="comment__date fw-500-14-20">
                                                        <p>5 сен в 13:32</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment__right">
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
                                                </div>
                                            </div>
                                        </li>
                                        <li className="comment-wrapper__comment comment">
                                            <div className="comment__left">
                                                <div className="comment__photo">
                                                    <img src={Avatar} alt="" />
                                                </div>
                                                <div className="comment__content ">
                                                    <div className="comment__fullname fw-500-16-22">
                                                        <p>Фамилия Имя</p>
                                                    </div>
                                                    <div className="comment__txt fw-400-16-19">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    </div>
                                                    <div className="comment__date fw-500-14-20">
                                                        <p>5 сен в 13:32</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment__right">
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
                                                </div>
                                            </div>
                                        </li>
                                        <li className="comment-wrapper__comment comment">
                                            <div className="comment__left">
                                                <div className="comment__photo">
                                                    <img src={Avatar} alt="" />
                                                </div>
                                                <div className="comment__content ">
                                                    <div className="comment__fullname fw-500-16-22">
                                                        <p>Фамилия Имя</p>
                                                    </div>
                                                    <div className="comment__txt fw-400-16-19">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    </div>
                                                    <div className="comment__date fw-500-14-20">
                                                        <p>5 сен в 13:32</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment__right">
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
                                                </div>
                                            </div>
                                        </li>
                                        <li className="comment-wrapper__comment comment">
                                            <div className="comment__left">
                                                <div className="comment__photo">
                                                    <img src={Avatar} alt="" />
                                                </div>
                                                <div className="comment__content ">
                                                    <div className="comment__fullname fw-500-16-22">
                                                        <p>Фамилия Имя</p>
                                                    </div>
                                                    <div className="comment__txt fw-400-16-19">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    </div>
                                                    <div className="comment__date fw-500-14-20">
                                                        <p>5 сен в 13:32</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment__right">
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
                                                </div>
                                            </div>
                                        </li>
                                        <li className="comment-wrapper__comment comment">
                                            <div className="comment__left">
                                                <div className="comment__photo">
                                                    <img src={Avatar} alt="" />
                                                </div>
                                                <div className="comment__content ">
                                                    <div className="comment__fullname fw-500-16-22">
                                                        <p>Фамилия Имя</p>
                                                    </div>
                                                    <div className="comment__txt fw-400-16-19">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    </div>
                                                    <div className="comment__date fw-500-14-20">
                                                        <p>5 сен в 13:32</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment__right">
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
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="product-feedback__btn-wrapper">
                                        <button className="btn-secondary">Показать еще</button>
                                    </div>

                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="similar-products bg_aqua">
                <div className="container-outer">
                    <div className="similar-products__outer">
                        <div className="similar-products__inner">
                            <div className="similar-products-title-label similar-products__similar-products-title-label fw-700-45-55 color_white">
                                <p>Похожие товары</p>
                            </div>
                            <ul className="similar-products-slick">
                                <li className="catalogue-item">
                                    <div className="catalogue__item-photo-wrapper">
                                        <div className="catalogue__item-photo">
                                            <img width="100%" src={CatalogueItemPhoto} alt="" />
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
                                            <div className="catalogue__item-price fw-700-18-22 ">
                                                <p>40 000 тг</p>
                                            </div>
                                            <div className="cart-icon-wrapper catalogue__cart-icon-wrapper">
                                                <ion-icon name="cart-outline" className="cart-icon"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalogue-item">
                                    <div className="catalogue__item-photo-wrapper">
                                        <div className="catalogue__item-photo">
                                            <img width="100%" src={CatalogueItemPhoto} alt="" />
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
                                            <div className="catalogue__item-price fw-700-18-22 ">
                                                <p>40 000 тг</p>
                                            </div>
                                            <div className="cart-icon-wrapper catalogue__cart-icon-wrapper">
                                                <ion-icon name="cart-outline" className="cart-icon"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalogue-item">
                                    <div className="catalogue__item-photo-wrapper">
                                        <div className="catalogue__item-photo">
                                            <img width="100%" src={CatalogueItemPhoto} alt="" />
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
                                            <div className="catalogue__item-price fw-700-18-22 ">
                                                <p>40 000 тг</p>
                                            </div>
                                            <div className="cart-icon-wrapper catalogue__cart-icon-wrapper">
                                                <ion-icon name="cart-outline" className="cart-icon"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalogue-item">
                                    <div className="catalogue__item-photo-wrapper">
                                        <div className="catalogue__item-photo">
                                            <img width="100%" src={CatalogueItemPhoto} alt="" />
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
                                            <div className="catalogue__item-price fw-700-18-22 ">
                                                <p>40 000 тг</p>
                                            </div>
                                            <div className="cart-icon-wrapper catalogue__cart-icon-wrapper">
                                                <ion-icon name="cart-outline" className="cart-icon"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalogue-item">
                                    <div className="catalogue__item-photo-wrapper">
                                        <div className="catalogue__item-photo">
                                            <img width="100%" src={CatalogueItemPhoto} alt="" />
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
                                            <div className="catalogue__item-price fw-700-18-22 ">
                                                <p>40 000 тг</p>
                                            </div>
                                            <div className="cart-icon-wrapper catalogue__cart-icon-wrapper">
                                                <ion-icon name="cart-outline" className="cart-icon"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalogue-item">
                                    <div className="catalogue__item-photo-wrapper">
                                        <div className="catalogue__item-photo">
                                            <img width="100%" src={CatalogueItemPhoto} alt="" />
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
                                            <div className="catalogue__item-price fw-700-18-22 ">
                                                <p>40 000 тг</p>
                                            </div>
                                            <div className="cart-icon-wrapper catalogue__cart-icon-wrapper">
                                                <ion-icon name="cart-outline" className="cart-icon"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalogue-item">
                                    <div className="catalogue__item-photo-wrapper">
                                        <div className="catalogue__item-photo">
                                            <img width="100%" src={CatalogueItemPhoto} alt="" />
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
                                            <div className="catalogue__item-price fw-700-18-22 ">
                                                <p>40 000 тг</p>
                                            </div>
                                            <div className="cart-icon-wrapper catalogue__cart-icon-wrapper">
                                                <ion-icon name="cart-outline" className="cart-icon"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalogue-item">
                                    <div className="catalogue__item-photo-wrapper">
                                        <div className="catalogue__item-photo">
                                            <img width="100%" src={CatalogueItemPhoto} alt="" />
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
                                            <div className="catalogue__item-price fw-700-18-22 ">
                                                <p>40 000 тг</p>
                                            </div>
                                            <div className="cart-icon-wrapper catalogue__cart-icon-wrapper">
                                                <ion-icon name="cart-outline" className="cart-icon"></ion-icon>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="similar-products__btn-wrapper">
                                <button className="btn-primary similar-products__btn-primary fw-400-18-30">Посмотреть все</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
