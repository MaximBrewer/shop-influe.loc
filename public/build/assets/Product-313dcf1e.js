import{r,a,j as e,b as w}from"./app-69c3d8ba.js";import{B as b}from"./Breadcrumbs-88d8ca3f.js";import{S as p}from"./index-8d28ec8d.js";import{L as k,P as C}from"./Layout-4fe4457b.js";const y=c=>{const{pagetitle:d,product:t}=c,{images:l}=t.data,[h,u]=r.useState(null),[N,g]=r.useState(null),m=r.useRef(null),_=r.useRef(null),v={asNavFor:N,dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},f={asNavFor:h,dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1};return r.useEffect(()=>{u(m.current),g(_.current)},[]),l.length?a("div",{className:"product-slider-wrapper",children:e("div",{className:"product-slider",children:[a(p,{...v,className:"product-slider",ref:m,children:l.map((n,o)=>a("div",{className:"slick-slide p-4",children:a("div",{className:"w-full h-full bg-no-repeat bg-center bg-contain pt-[100%]",style:{backgroundImage:`url('${n}')`}})},o))}),l.length>1?a(p,{...f,className:"product-slider__nav block",ref:_,children:l.map((n,o)=>a("div",{className:"slick-slide",children:a("div",{className:"product-slider__nav-item mx-auto",children:a("div",{className:"w-full h-full bg-no-repeat bg-center bg-contain pt-[100%]",style:{backgroundImage:`url('${n}')`}})})},o))}):""]})}):""},x="/build/assets/in-stock-tick-8dfb6a57.svg",i="/build/assets/avatar-3e3350a5.svg",s="/build/assets/catalogue-item-photo-632655bb.svg",L=c=>a("svg",{className:c.className,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M15.9077 3.34289C15.8161 3.21162 15.6687 3.13049 15.5086 3.12365L5.58366 2.69584C5.29889 2.68338 5.06093 2.90323 5.04875 3.18667C5.03665 3.47 5.25614 3.7094 5.53955 3.72157L14.7926 4.12045L12.9732 9.79691H4.87696L3.41425 1.83256C3.38209 1.658 3.26225 1.51238 3.09697 1.44754L0.701302 0.506377C0.437269 0.403005 0.139327 0.532694 0.0356332 0.796405C-0.0678819 1.06026 0.0617715 1.35838 0.325661 1.46207L2.45579 2.29889L3.94432 10.403C3.98918 10.6467 4.20151 10.8236 4.44933 10.8236H4.69624L4.13241 12.3898C4.08522 12.521 4.10466 12.6667 4.18497 12.7806C4.26518 12.8946 4.39562 12.9624 4.53487 12.9624H4.93034C4.68529 13.2352 4.53487 13.5943 4.53487 13.9892C4.53487 14.8384 5.22589 15.5293 6.07495 15.5293C6.92402 15.5293 7.61504 14.8384 7.61504 13.9892C7.61504 13.5943 7.46462 13.2352 7.2196 12.9624H10.5774C10.3322 13.2352 10.1818 13.5943 10.1818 13.9892C10.1818 14.8384 10.8727 15.5293 11.7219 15.5293C12.5712 15.5293 13.262 14.8384 13.262 13.9892C13.262 13.5943 13.1116 13.2352 12.8666 12.9624H13.3476C13.5839 12.9624 13.7754 12.7709 13.7754 12.5347C13.7754 12.2984 13.5839 12.1069 13.3476 12.1069H5.14357L5.60554 10.8235H13.3475C13.5708 10.8235 13.7683 10.6792 13.8363 10.4668L15.9753 3.79308C16.0245 3.64076 15.9993 3.47423 15.9077 3.34289ZM6.07499 14.6738C5.69749 14.6738 5.39049 14.3669 5.39049 13.9894C5.39049 13.6119 5.69749 13.3049 6.07499 13.3049C6.45249 13.3049 6.75945 13.6119 6.75945 13.9894C6.75945 14.3669 6.45249 14.6738 6.07499 14.6738ZM11.7219 14.6738C11.3444 14.6738 11.0374 14.3669 11.0374 13.9894C11.0374 13.6119 11.3444 13.3049 11.7219 13.3049C12.0994 13.3049 12.4064 13.6119 12.4064 13.9894C12.4064 14.3669 12.0994 14.6738 11.7219 14.6738Z",fill:"currentColor"})}),z=c=>a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:c.filled?"currentColor":"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})}),j=c=>{const{pagetitle:d,product:t}=c,l="4444";return console.log(t.data),e(k,{...c,children:[a(w,{title:d}),a("div",{className:"catalogue-categories",children:a("div",{className:"container-outer",children:a("div",{className:"catalogue-categories__outer",children:a("div",{className:"catalogue-categories__inner",children:a(b,{...c})})})})}),a("div",{className:"product-description",children:a("div",{className:"container-outer",children:a("div",{className:"product-description__outer",children:e("div",{className:"product-description__inner",children:[a(y,{...c}),e("div",{className:"product-description__purchase-details",children:[a("div",{className:"product-title fw-700-35-42",children:a("p",{children:d})}),e("div",{className:"product-description__row-one",children:[e("div",{className:"in-stock-label",children:[a("div",{className:"in-stock-label__tick center",children:a("img",{src:x,alt:""})}),a("div",{className:"in-stock-label__txt fw-400-14-17",children:a("p",{children:"В наличии"})})]}),e("div",{className:"articul fw-400-14-17",children:[a("p",{children:"Артикул: "}),a("span",{className:"articul__code",children:t.data.article})]})]}),a("div",{className:"product-description__card",children:e("div",{className:"product-description__card-inner",children:[e("div",{className:"product-description__card-left",children:[a("div",{className:"product-description__card-size-wrapper",children:a("div",{className:"product-description__card-size-label fw-700-14-17",children:a("p",{children:"Размер"})})}),e("div",{className:"product-description__card-size-flexbox",children:[a("div",{className:"product-description__product-size-item fw-400-12-14",children:a("p",{children:"36,5"})}),a("div",{className:"product-description__product-size-item fw-400-12-14",children:a("p",{children:"37"})}),a("div",{className:"product-description__product-size-item fw-400-12-14",children:a("p",{children:"37,5"})}),a("div",{className:"product-description__product-size-item fw-400-12-14",children:a("p",{children:"38"})}),a("div",{className:"product-description__product-size-item fw-400-12-14",children:a("p",{children:"38,5"})}),a("div",{className:"product-description__product-size-item fw-400-12-14",children:a("p",{children:"39"})}),a("div",{className:"product-description__product-size-item fw-400-12-14",children:a("p",{children:"39,5"})}),a("div",{className:"product-description__product-size-item fw-400-12-14",children:a("p",{children:"40"})}),a("div",{className:"product-description__product-size-item fw-400-12-14",children:a("p",{children:"40,5"})}),a("div",{className:"product-description__product-size-item fw-400-12-14",children:a("p",{children:"41"})})]})]}),a("div",{className:"product-description__card-right",children:e("div",{className:"btn-secondary product-description__btn-secondary",children:[a("div",{className:"product-description__btn-secondary-phone-icon-wrapper",children:a("img",{src:C,alt:""})}),a("div",{className:"product-description__btn-secondary-txt-wrapper fw-700-16-20",children:a("p",{children:"Заказать звонок"})})]})})]})}),a("div",{className:"product-description__line"}),e("div",{className:"product-description__row-two",children:[a("div",{className:"catalogue__item-price fw-700-18-22 center mr-4",children:l}),e("div",{className:"purchase-btn-group product-description__purchase-btn-group center",children:[e("div",{className:"btn-purchase product-description__btn-purchase",children:[a(L,{className:"w-5 h-5 mr-2"}),a("div",{className:"btn-purchase__txt fw-700-16-20",children:"Купить"})]}),a("div",{className:"heart-icon-wrapper product-description__heart-icon-wrapper",children:a(z,{className:"w-4 h-4"})})]})]})]})]})})})}),a("div",{className:"product-review-tab-wrapper product-review-tab-wrapper_mb34",children:e("div",{className:"container-outer",children:[e("div",{className:"product-review-tab-wrapper__tab-line fw-700-20-24",children:[a("button",{className:"tab-item product-active",children:"Описание"}),a("button",{className:"tab-item",children:"Отзывы"})]}),a("div",{className:"product-review-tab-wrapper__bottom-section",children:a("div",{className:"product-review-tab-wrapper__bottom-section-inner",children:e("ul",{className:"product-review-tab-wrapper__bottom-section-list",children:[e("ul",{id:"product-desc",className:"product-review-tab-wrapper__bottom-list-item",children:[e("li",{className:"product-review-tab-wrapper__bottom-section-item",children:[a("div",{className:"product-review-tab-wrapper__bottom-section-title fw-600-20-24",children:a("p",{children:"Основное"})}),a("div",{className:"product-review-tab-wrapper__bottom-section-desc fw-400-16-19",children:a("p",{children:"Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Товарищи! консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке форм развития. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание новых предложений."})})]}),e("li",{className:"product-review-tab-wrapper__bottom-section-item",children:[a("div",{className:"product-review-tab-wrapper__bottom-section-title fw-600-20-24",children:a("p",{children:"Характеристики"})}),a("div",{className:"product-review-tab-wrapper__bottom-section-desc fw-400-16-19",children:a("p",{children:"Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Товарищи! консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке форм развития. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание новых предложений."})})]}),e("li",{className:"product-review-tab-wrapper__bottom-section-item",children:[a("div",{className:"product-review-tab-wrapper__bottom-section-title fw-600-20-24",children:a("p",{children:"Рекомендации"})}),a("div",{className:"product-review-tab-wrapper__bottom-section-desc fw-400-16-19",children:a("p",{children:"Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Товарищи! консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке форм развития. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание новых предложений."})})]})]}),e("div",{id:"product-feedback",className:"product-review-tab-wrapper__bottom-list-item",style:{display:"none"},children:[e("ul",{className:"comment-wrapper product-review-tab-wrapper__comment-wrapper",children:[e("li",{className:"comment-wrapper__comment comment",children:[e("div",{className:"comment__left",children:[a("div",{className:"comment__photo",children:a("img",{src:i,alt:""})}),e("div",{className:"comment__content ",children:[a("div",{className:"comment__fullname fw-500-16-22",children:a("p",{children:"Фамилия Имя"})}),a("div",{className:"comment__txt fw-400-16-19",children:a("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"})}),a("div",{className:"comment__date fw-500-14-20",children:a("p",{children:"5 сен в 13:32"})})]})]}),a("div",{className:"comment__right",children:a("div",{className:"catalogue__item-rating",children:e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]})})})]}),e("li",{className:"comment-wrapper__comment comment",children:[e("div",{className:"comment__left",children:[a("div",{className:"comment__photo",children:a("img",{src:i,alt:""})}),e("div",{className:"comment__content ",children:[a("div",{className:"comment__fullname fw-500-16-22",children:a("p",{children:"Фамилия Имя"})}),a("div",{className:"comment__txt fw-400-16-19",children:a("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"})}),a("div",{className:"comment__date fw-500-14-20",children:a("p",{children:"5 сен в 13:32"})})]})]}),a("div",{className:"comment__right",children:a("div",{className:"catalogue__item-rating",children:e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]})})})]}),e("li",{className:"comment-wrapper__comment comment",children:[e("div",{className:"comment__left",children:[a("div",{className:"comment__photo",children:a("img",{src:i,alt:""})}),e("div",{className:"comment__content ",children:[a("div",{className:"comment__fullname fw-500-16-22",children:a("p",{children:"Фамилия Имя"})}),a("div",{className:"comment__txt fw-400-16-19",children:a("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"})}),a("div",{className:"comment__date fw-500-14-20",children:a("p",{children:"5 сен в 13:32"})})]})]}),a("div",{className:"comment__right",children:a("div",{className:"catalogue__item-rating",children:e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]})})})]}),e("li",{className:"comment-wrapper__comment comment",children:[e("div",{className:"comment__left",children:[a("div",{className:"comment__photo",children:a("img",{src:i,alt:""})}),e("div",{className:"comment__content ",children:[a("div",{className:"comment__fullname fw-500-16-22",children:a("p",{children:"Фамилия Имя"})}),a("div",{className:"comment__txt fw-400-16-19",children:a("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"})}),a("div",{className:"comment__date fw-500-14-20",children:a("p",{children:"5 сен в 13:32"})})]})]}),a("div",{className:"comment__right",children:a("div",{className:"catalogue__item-rating",children:e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]})})})]}),e("li",{className:"comment-wrapper__comment comment",children:[e("div",{className:"comment__left",children:[a("div",{className:"comment__photo",children:a("img",{src:i,alt:""})}),e("div",{className:"comment__content ",children:[a("div",{className:"comment__fullname fw-500-16-22",children:a("p",{children:"Фамилия Имя"})}),a("div",{className:"comment__txt fw-400-16-19",children:a("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"})}),a("div",{className:"comment__date fw-500-14-20",children:a("p",{children:"5 сен в 13:32"})})]})]}),a("div",{className:"comment__right",children:a("div",{className:"catalogue__item-rating",children:e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]})})})]})]}),a("div",{className:"product-feedback__btn-wrapper",children:a("button",{className:"btn-secondary",children:"Показать еще"})})]})]})})})]})}),a("div",{className:"similar-products bg_aqua",children:a("div",{className:"container-outer",children:a("div",{className:"similar-products__outer",children:e("div",{className:"similar-products__inner",children:[a("div",{className:"similar-products-title-label similar-products__similar-products-title-label fw-700-45-55 color_white",children:a("p",{children:"Похожие товары"})}),e("ul",{className:"similar-products-slick",children:[e("li",{className:"catalogue-item",children:[a("div",{className:"catalogue__item-photo-wrapper",children:a("div",{className:"catalogue__item-photo",children:a("img",{width:"100%",src:s,alt:""})})}),a("div",{className:"catalogue__item-bottom",children:e("div",{className:"catalogue__item-bottom-inner",children:[a("div",{className:"catalogue__item-title fw-600-16-19",children:a("p",{children:"Наименование"})}),e("div",{className:"catalogue__item-rating",children:[e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]}),a("div",{className:"catalogue__feedback-label fw-500-12-18",children:a("p",{children:"1360 отзывов"})})]}),a("div",{className:"catalogue__in-stock-label fw-400-14-17",children:a("p",{children:"Наличие"})}),a("div",{className:"catalogue__short-desc-label fw-400-16-19",children:a("p",{children:"Краткое описание"})}),a("div",{className:"catalogue__item-price fw-700-18-22 ",children:a("p",{children:"40 000 тг"})}),a("div",{className:"cart-icon-wrapper catalogue__cart-icon-wrapper",children:a("ion-icon",{name:"cart-outline",className:"cart-icon"})})]})})]}),e("li",{className:"catalogue-item",children:[a("div",{className:"catalogue__item-photo-wrapper",children:a("div",{className:"catalogue__item-photo",children:a("img",{width:"100%",src:s,alt:""})})}),a("div",{className:"catalogue__item-bottom",children:e("div",{className:"catalogue__item-bottom-inner",children:[a("div",{className:"catalogue__item-title fw-600-16-19",children:a("p",{children:"Наименование"})}),e("div",{className:"catalogue__item-rating",children:[e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]}),a("div",{className:"catalogue__feedback-label fw-500-12-18",children:a("p",{children:"1360 отзывов"})})]}),a("div",{className:"catalogue__in-stock-label fw-400-14-17",children:a("p",{children:"Наличие"})}),a("div",{className:"catalogue__short-desc-label fw-400-16-19",children:a("p",{children:"Краткое описание"})}),a("div",{className:"catalogue__item-price fw-700-18-22 ",children:a("p",{children:"40 000 тг"})}),a("div",{className:"cart-icon-wrapper catalogue__cart-icon-wrapper",children:a("ion-icon",{name:"cart-outline",className:"cart-icon"})})]})})]}),e("li",{className:"catalogue-item",children:[a("div",{className:"catalogue__item-photo-wrapper",children:a("div",{className:"catalogue__item-photo",children:a("img",{width:"100%",src:s,alt:""})})}),a("div",{className:"catalogue__item-bottom",children:e("div",{className:"catalogue__item-bottom-inner",children:[a("div",{className:"catalogue__item-title fw-600-16-19",children:a("p",{children:"Наименование"})}),e("div",{className:"catalogue__item-rating",children:[e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]}),a("div",{className:"catalogue__feedback-label fw-500-12-18",children:a("p",{children:"1360 отзывов"})})]}),a("div",{className:"catalogue__in-stock-label fw-400-14-17",children:a("p",{children:"Наличие"})}),a("div",{className:"catalogue__short-desc-label fw-400-16-19",children:a("p",{children:"Краткое описание"})}),a("div",{className:"catalogue__item-price fw-700-18-22 ",children:a("p",{children:"40 000 тг"})}),a("div",{className:"cart-icon-wrapper catalogue__cart-icon-wrapper",children:a("ion-icon",{name:"cart-outline",className:"cart-icon"})})]})})]}),e("li",{className:"catalogue-item",children:[a("div",{className:"catalogue__item-photo-wrapper",children:a("div",{className:"catalogue__item-photo",children:a("img",{width:"100%",src:s,alt:""})})}),a("div",{className:"catalogue__item-bottom",children:e("div",{className:"catalogue__item-bottom-inner",children:[a("div",{className:"catalogue__item-title fw-600-16-19",children:a("p",{children:"Наименование"})}),e("div",{className:"catalogue__item-rating",children:[e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]}),a("div",{className:"catalogue__feedback-label fw-500-12-18",children:a("p",{children:"1360 отзывов"})})]}),a("div",{className:"catalogue__in-stock-label fw-400-14-17",children:a("p",{children:"Наличие"})}),a("div",{className:"catalogue__short-desc-label fw-400-16-19",children:a("p",{children:"Краткое описание"})}),a("div",{className:"catalogue__item-price fw-700-18-22 ",children:a("p",{children:"40 000 тг"})}),a("div",{className:"cart-icon-wrapper catalogue__cart-icon-wrapper",children:a("ion-icon",{name:"cart-outline",className:"cart-icon"})})]})})]}),e("li",{className:"catalogue-item",children:[a("div",{className:"catalogue__item-photo-wrapper",children:a("div",{className:"catalogue__item-photo",children:a("img",{width:"100%",src:s,alt:""})})}),a("div",{className:"catalogue__item-bottom",children:e("div",{className:"catalogue__item-bottom-inner",children:[a("div",{className:"catalogue__item-title fw-600-16-19",children:a("p",{children:"Наименование"})}),e("div",{className:"catalogue__item-rating",children:[e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]}),a("div",{className:"catalogue__feedback-label fw-500-12-18",children:a("p",{children:"1360 отзывов"})})]}),a("div",{className:"catalogue__in-stock-label fw-400-14-17",children:a("p",{children:"Наличие"})}),a("div",{className:"catalogue__short-desc-label fw-400-16-19",children:a("p",{children:"Краткое описание"})}),a("div",{className:"catalogue__item-price fw-700-18-22 ",children:a("p",{children:"40 000 тг"})}),a("div",{className:"cart-icon-wrapper catalogue__cart-icon-wrapper",children:a("ion-icon",{name:"cart-outline",className:"cart-icon"})})]})})]}),e("li",{className:"catalogue-item",children:[a("div",{className:"catalogue__item-photo-wrapper",children:a("div",{className:"catalogue__item-photo",children:a("img",{width:"100%",src:s,alt:""})})}),a("div",{className:"catalogue__item-bottom",children:e("div",{className:"catalogue__item-bottom-inner",children:[a("div",{className:"catalogue__item-title fw-600-16-19",children:a("p",{children:"Наименование"})}),e("div",{className:"catalogue__item-rating",children:[e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]}),a("div",{className:"catalogue__feedback-label fw-500-12-18",children:a("p",{children:"1360 отзывов"})})]}),a("div",{className:"catalogue__in-stock-label fw-400-14-17",children:a("p",{children:"Наличие"})}),a("div",{className:"catalogue__short-desc-label fw-400-16-19",children:a("p",{children:"Краткое описание"})}),a("div",{className:"catalogue__item-price fw-700-18-22 ",children:a("p",{children:"40 000 тг"})}),a("div",{className:"cart-icon-wrapper catalogue__cart-icon-wrapper",children:a("ion-icon",{name:"cart-outline",className:"cart-icon"})})]})})]}),e("li",{className:"catalogue-item",children:[a("div",{className:"catalogue__item-photo-wrapper",children:a("div",{className:"catalogue__item-photo",children:a("img",{width:"100%",src:s,alt:""})})}),a("div",{className:"catalogue__item-bottom",children:e("div",{className:"catalogue__item-bottom-inner",children:[a("div",{className:"catalogue__item-title fw-600-16-19",children:a("p",{children:"Наименование"})}),e("div",{className:"catalogue__item-rating",children:[e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]}),a("div",{className:"catalogue__feedback-label fw-500-12-18",children:a("p",{children:"1360 отзывов"})})]}),a("div",{className:"catalogue__in-stock-label fw-400-14-17",children:a("p",{children:"Наличие"})}),a("div",{className:"catalogue__short-desc-label fw-400-16-19",children:a("p",{children:"Краткое описание"})}),a("div",{className:"catalogue__item-price fw-700-18-22 ",children:a("p",{children:"40 000 тг"})}),a("div",{className:"cart-icon-wrapper catalogue__cart-icon-wrapper",children:a("ion-icon",{name:"cart-outline",className:"cart-icon"})})]})})]}),e("li",{className:"catalogue-item",children:[a("div",{className:"catalogue__item-photo-wrapper",children:a("div",{className:"catalogue__item-photo",children:a("img",{width:"100%",src:s,alt:""})})}),a("div",{className:"catalogue__item-bottom",children:e("div",{className:"catalogue__item-bottom-inner",children:[a("div",{className:"catalogue__item-title fw-600-16-19",children:a("p",{children:"Наименование"})}),e("div",{className:"catalogue__item-rating",children:[e("div",{className:"catalogue__stars",children:[a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})}),a("div",{className:"catalogue__star-wrapper center",children:a("i",{className:"fa-solid fa-star catalogue__star"})})]}),a("div",{className:"catalogue__feedback-label fw-500-12-18",children:a("p",{children:"1360 отзывов"})})]}),a("div",{className:"catalogue__in-stock-label fw-400-14-17",children:a("p",{children:"Наличие"})}),a("div",{className:"catalogue__short-desc-label fw-400-16-19",children:a("p",{children:"Краткое описание"})}),a("div",{className:"catalogue__item-price fw-700-18-22 ",children:a("p",{children:"40 000 тг"})}),a("div",{className:"cart-icon-wrapper catalogue__cart-icon-wrapper",children:a("ion-icon",{name:"cart-outline",className:"cart-icon"})})]})})]})]}),a("div",{className:"similar-products__btn-wrapper",children:a("button",{className:"btn-primary similar-products__btn-primary fw-400-18-30",children:"Посмотреть все"})})]})})})})]})};export{j as default};
