import{j as r,L as o,a as e,b as d,d as n}from"./app-6ba2289b.js";import{S as m}from"./index-4bad2831.js";import{P as h}from"./ProductTizer-2d8ac0cc.js";import{A as p,a as u}from"./ArrowRightIcon-f901d39f.js";import"./NoPhoto-85c35881.js";const N="/build/assets/img-main-1-786173fa.jpg";function b(i){const{className:s,style:t,onClick:a}=i;return e("div",{className:`${s} slick-arrow-purple similar-products-slick__arrow-left center`,onClick:a,children:e(p,{className:"w-6 h-6 shrink-0"})})}function v(i){const{className:s,style:t,onClick:a}=i;return e("div",{className:`${s} slick-arrow-purple similar-products-slick__arrow-right center`,onClick:a,children:e(u,{className:"w-6 h-6 shrink-0"})})}var g={infinite:!1,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:1200,prevArrow:e(b,{}),nextArrow:e(v,{}),dots:!0,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:460,settings:{slidesToShow:1}}]};const x=i=>{const{pagetitle:s,products:t}=i,{categories:a}=window.appdata;return r(o,{...i,children:[e(d,{title:s}),r("div",{className:"main-block",children:[e("div",{className:"main-bg",children:e("img",{src:N,alt:""})}),e("div",{className:"container-outer",children:r("div",{className:"main-content",children:[e("h1",{className:"main-title xl:w-2/3",children:"Хруст в коленях – норма или повод обратиться к врачу?"}),e(n,{href:route("catalog"),children:e("button",{className:"btn-primary fw-700-16-20 py-4 px-6 mt-7",children:"Посмотреть каталог"})})]})})]}),e("div",{className:"similar-products",children:e("div",{className:"container-outer",children:e("div",{className:"similar-products__outer pb-0",children:e("div",{className:"similar-products__inner",children:e("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-6",children:a.map((l,c)=>e(n,{href:route("category",{category:l.slug}),className:"p-6 bg-white shadow text-center flex flex-col gap-3 justify-between items-center",children:r("div",{children:[e("div",{className:"w-12 h-12 bg-center bg-no-repeat bg-contain mx-auto mb-2",style:{backgroundImage:`url('${l.image}')`}}),e("div",{className:"font-semibold",children:l.name})]})},c))})})})})}),e("div",{className:"similar-products",children:e("div",{className:"container-outer",children:e("div",{className:"similar-products__outer",children:r("div",{className:"similar-products__inner",children:[e("div",{className:"similar-products-title-label similar-products__similar-products-title-label fw-700-45-55",children:"Акционные товары"}),e(m,{...g,className:"similar-products-slick-main",children:t.data.map((l,c)=>e("div",{className:"catalogue-item slick-slide",children:e(h,{item:l})},c))}),e("div",{className:"similar-products__btn-wrapper",children:e("button",{className:"btn-primary similar-products__btn-primary fw-400-18-30",children:"Посмотреть все"})})]})})})}),e("div",{className:"bottom-banner",children:e("div",{className:"container-outer",children:e("div",{className:"bottom-banner__outer",children:r("div",{className:"bottom-banner__inner",children:[e("div",{className:"bottom-banner__title fw-700-36-50",children:e("p",{children:"Лечение опорно-двигательной системы"})}),e("div",{className:"bottom-banner__subtitle fw-700-26-35",children:e("p",{children:"Основна сфера деяльности – краткое описание желательно в две строки"})}),e("div",{className:"my-6 text-center",children:e(n,{href:route("services.index"),className:"main-page-link-btn -purple",children:"Перейти"})})]})})})})]})};export{x as default};