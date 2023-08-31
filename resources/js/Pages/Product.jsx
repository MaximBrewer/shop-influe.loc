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
import { useEffect, useRef, useState } from 'react';


export default (props) => {

    const { pagetitle, product } = props


    const [price, setPrice] = useState(null)
    const [offer, setOffer] = useState(null)

    const [specifications, setSpecifications] = useState([])
    const [spFilter, setSpFilter] = useState({})

    useEffect(() => {
        if (product.data.offers.length) {
            setOffer(product.data.offers[0])
            let specifications = []
            for (let offer of product.data.offers) {
                for (let specification of offer.specifications) {
                    let specificationIndex = specifications.findIndex(el => el.id == specification.id)
                    if (specificationIndex < 0) {
                        specificationIndex = specifications.length
                        specifications.push({
                            id: specification.id,
                            title: specification.title,
                            values: []
                        })
                    }
                    let valueIndex = specifications[specificationIndex].values.findIndex(el => el.value == specification.pivot.value)
                    if (valueIndex < 0) {
                        valueIndex = specifications[specificationIndex].values.length
                        specifications[specificationIndex].values.push({
                            value: specification.pivot.value,
                            offers: []
                        })
                    }
                    specifications[specificationIndex].values[valueIndex].offers.push(specification.pivot.offer_id)
                }
            }
            setSpecifications(specifications)
        }
    }, [product])

    useEffect(() => {
        console.log(offer)
        let price = null;
        if (offer) {
            const f = {};
            for (let s of specifications) {
                for (let vIndex in s.values) {
                    let v = s.values[vIndex]
                    if (v.offers.indexOf(offer.id) > -1) {
                        f[s.id] = vIndex
                    }
                }
            }
            setSpFilter(f)
            if (offer.prices.length) {
                var priceIndex = offer.prices.findIndex(el => el.currency == 'тен' || el.currency == 'KZT');
                if (priceIndex > -1) price = offer.prices[priceIndex].value
            }
        }
        setPrice(price)
    }, [offer, specifications])

    useEffect(() => {
        let offers = [...product.data.offers];
        for (let s of specifications) {
            offers = offers.filter(el => s.values[spFilter[s.id]] && s.values[spFilter[s.id]].offers.indexOf(el.id) > -1)
        }
        setOffer(offers[0] ?? null)
    }, [spFilter])

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
                            {product.data.images.length ? <ProductSlider {...props} /> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-auto text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>}
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
                                            {/* <div className="product-description__card-size-link fw-400-14-17">
                                                    <a href="">Подобрать размер</a>
                                                </div> */}
                                            {specifications.map((sp, sdx) => <div key={sp.id}>
                                                <div className="product-description__card-size-wrapper">
                                                    <div className="product-description__card-size-label fw-700-14-17">
                                                        <p>{sp.title}</p>
                                                    </div>
                                                </div>
                                                <div className="product-description__card-size-flexbox">
                                                    {sp.values.map((v, vdx) => <div key={vdx} onClick={e => setSpFilter(prev => {
                                                        const spFilter = { ...prev }
                                                        spFilter[sp.id] = vdx
                                                        return spFilter
                                                    })} className={`product-description__product-size-item fw-400-12-14 ${spFilter[sp.id] == vdx ? `bg-violet-900 text-white` : ``}`}>
                                                        <p>{v.value}</p>
                                                    </div>)}
                                                </div>
                                            </div>)}
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
                                    <div className="catalogue__item-price fw-700-18-22 center mr-4">{price && offer && offer.quantity ? price : `Нет предложения`}</div>
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
