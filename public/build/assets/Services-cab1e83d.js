import{u as C,j as t,L as x,a as e,b as w,C as M,F as L,d as y}from"./app-5a2de001.js";import{F as B}from"./FormAppDoctor-9ee65a90.js";import{S as n}from"./index-961a38d0.js";import{B as W}from"./Breadcrumbs-755e3b24.js";import{F as _}from"./FacilityTizer-ac2173a2.js";import{H as c}from"./index-bf92aa0b.js";import{a as d,C as j}from"./ChevronRightIcon-caa52abf.js";import"./react-select.esm-829cb7c9.js";function V(s){const{className:l,style:o,onClick:a}=s;return e("div",{className:`${l} z-10 left-0 lg:left-24 top-1/2 -translate-y-1/2 bg-purple-900 rounded-full w-10 lg:w-[62px] h-10 lg:h-[62px] flex items-center justify-center text-[#C7C7C7]`,onClick:a,children:e(j,{className:"w-5 lg:w-8 h-5 lg:h-8 shrink-0 relative -top-px"})})}function S(s){const{className:l,style:o,onClick:a}=s;return e("div",{className:`${l} z-10 right-0 lg:right-24 top-1/2 -translate-y-1/2 bg-purple-900 rounded-full w-10 lg:w-[62px] h-10 lg:h-[62px] flex  items-center justify-center text-[#C7C7C7]`,onClick:a,children:e(d,{className:"w-5 lg:w-8 h-5 lg:h-8 shrink-0 relative top-px"})})}var A={slidesToShow:3,slidesToScroll:1,prevArrow:e(V,{}),nextArrow:e(S,{}),centerMode:!0,centerPadding:0,responsive:[{breakpoint:992,settings:{slidesToShow:1}}]};const R=s=>{const{pagetitle:l,banners:o,statistics:a,testimonials:m,stattitle:h,statsubtitle:p,aboutImages:u,abouttext1:k,abouttext2:g}=s,{facilities:v}=window.appdata,{setModal:b}=C();var N={infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:1200,arrows:!1,prevArrow:'<div className="slick-arrow-purple main-slick__arrow-left center"><ion-icon name="arrow-back-outline"></ion-icon></div>',nextArrow:'<div className="slick-arrow-purple main-slick__arrow-right center"><ion-icon name="arrow-forward-outline"></ion-icon></div>',dots:!0};return t(x,{...s,children:[e(w,{title:l}),t("div",{className:"main-block relative",children:[e("div",{className:"absolute top-0 w-full flex justify-center text-white pt-6",children:e(W,{...s,inbanner:!0})}),e(n,{...N,className:"main-slider w-full",children:o.data.map((i,r)=>t("div",{className:"main-slider-item",children:[e("div",{className:"main-bg brightness-50",children:e("img",{src:i.image,alt:i.title})}),t("div",{className:"container-outer flex flex-col justify-between h-full py-8",children:[t("div",{className:"main-content flex flex-col justify-center items-center text-center w-full",children:[e("div",{className:"main-title",children:i.title}),e("a",{href:"#",className:"btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto",onClick:f=>{f.preventDefault(),b(e(M,{}))},children:"Заказать звонок"})]}),e("div",{})]})]},r))})]}),e("div",{className:"our-services",children:t("div",{className:"container-outer",children:[e("div",{className:"our-services-title",children:e("h2",{children:"Наши услуги"})}),e("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-10",children:v.map((i,r)=>e(_,{item:i},r))})]})}),t("div",{className:"bg-white",children:[e("div",{className:"container-outer",children:e("div",{className:"pb-16",children:e(B,{})})}),t("div",{className:"container-outer",children:[e("div",{className:"text-[32px] font-semibold mb-4 text-center",children:h}),e("div",{className:"text-zinc-400 text-[28px] mb-10 text-center",children:p}),e("div",{className:"pb-24 grid grid-cols-2 lg:grid-cols-4 gap-12",children:a.data.map((i,r)=>t("div",{className:"",children:[t("div",{className:"flex justify-between items-center mb-5",children:[e("div",{className:"w-24 lg:w-36 h-24 lg:h-36 bg-slate-50 rounded-full flex items-center justify-center shrink-0",children:e("div",{className:"w-12 lg:w-16 h-12 lg:h-16 bg-center bg-contain bg-no-repeat",style:{backgroundImage:`url('${i.icon}')`}})}),r<a.data.length-1?e(d,{className:"w-8 h-8 shrink-0"}):e(L,{})]}),e("div",{className:"text-zinc-900",children:i.title})]},r))})]}),t("div",{className:"container-outer",children:[e("div",{className:"text-[32px] font-semibold mb-4 text-center",children:"Отзывы"}),e("div",{className:"pb-24 grid grid-cols-2 lg:grid-cols-4 gap-6",children:m.data.map((i,r)=>t("div",{className:"bg-slate-50 p-4 rounded-lg",children:[e("div",{className:"mb-5 flex flex-col justify-center items-center",children:e("div",{className:"w-12 lg:w-16 h-12 lg:h-16 bg-center bg-cover bg-no-repeat rounded-full",style:{backgroundImage:`url('${i.photo}')`}})}),e("div",{className:"text-center mb-4 text-lg font-bold",children:i.name}),e("div",{className:"text-zinc-900",children:i.text})]},r))})]}),t("div",{className:"container-outer",children:[e("div",{className:"text-[26px] font-semibold text-center",children:"О компании"}),e("div",{className:"pb-6",children:e(n,{...A,className:"about-slider",children:u.data.map((i,r)=>e("div",{className:"about-slide-item",children:t("div",{className:"relative",children:[e("img",{src:i.image,alt:"",className:"w-full block"}),e("div",{className:"top-0 left-0 bottom-0 right-0 absolute backdrop-blur"})]})},r))})}),t("div",{className:"pb-24 grid grid-cols-1 lg:grid-cols-2 gap-6 abouttext",children:[e("div",{children:c(k??"")}),t("div",{children:[e("div",{className:"mb-4",children:c(g??"")}),t("div",{className:"flex gap-4 items-center",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",children:[e("path",{d:"M26.1002 25.2006V6.30059C26.1002 4.80929 24.8915 3.60059 23.4002 3.60059C21.9089 3.60059 20.7002 4.80929 20.7002 6.30059V24.3006",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M31.5001 26.1004V8.10039C31.5001 6.60909 30.2914 5.40039 28.8001 5.40039C27.3088 5.40039 26.1001 6.60909 26.1001 8.10039",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M30.6001 52.2004V50.4004C30.6001 46.8004 36.0001 44.1004 36.0001 36.9004V12.1504C36.0001 10.9075 34.993 9.90039 33.7501 9.90039C32.5072 9.90039 31.5001 10.9075 31.5001 12.1504",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M15.3001 52.2004V51.3004C15.3001 45.5908 10.126 44.3164 9.1558 37.4296C8.9164 35.7313 8.4205 34.0789 7.5736 32.5867L3.9817 26.2552C3.7315 25.8133 3.6001 25.294 3.6001 24.7504C3.6001 23.0107 5.0104 21.6004 6.7501 21.6004C7.7527 21.6004 8.6455 22.0684 9.2224 22.7983L13.6918 28.4557C13.8565 28.6654 14.113 28.8004 14.4001 28.8004C14.8969 28.8004 15.3001 28.3972 15.3001 27.9004V8.10039C15.3001 6.60909 16.5088 5.40039 18.0001 5.40039C19.4914 5.40039 20.7001 6.60909 20.7001 8.10039",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M5.54932 37.653C5.46022 37.0815 5.35582 36.6045 5.19922 36.123",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M11.6999 51.3005C11.6999 47.8175 7.48791 45.9347 5.94531 39.7607",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M36 13.8799L41.544 9.56798C42.0012 9.21248 42.5754 9.00098 43.2 9.00098C44.6913 9.00098 45.9 10.2097 45.9 11.701C45.9 12.5677 45.4914 13.3399 44.856 13.8331L36 20.7217",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M44.856 13.8333L46.9431 12.2682C47.2941 12.0063 47.9754 11.7012 48.6 11.7012C50.0913 11.7012 51.3 12.9099 51.3 14.4012C51.3 15.2679 50.8914 16.0401 50.256 16.5333L36 27.6222",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M46.6002 19.3765C46.9989 19.066 47.493 18.9004 48.0375 18.9004C49.3425 18.9004 50.4 19.9579 50.4 21.2629C50.4 22.0603 49.9833 22.7371 49.3992 23.1925L36 33.6442",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M45.0204 26.6082C45.4056 26.3076 45.8655 26.1006 46.392 26.1006C47.6115 26.1006 48.5997 27.0888 48.5997 28.3083C48.5997 29.0346 48.2316 29.6574 47.6997 30.0723L35.772 39.3765",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M11.6997 19.8006V8.10059",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M11.6997 6.30098V4.50098",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M44.1001 39.6006V43.2006",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M44.1001 46.8008V50.4008",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M49.4999 45.001H45.8999",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"}),e("path",{d:"M42.2997 45.001H38.6997",stroke:"#65BC54",strokeWidth:"2.21143",strokeMiterlimit:"10",strokeLinecap:"round"})]}),e("div",{className:"text-teal-500 font-bold",children:"Пожелаем центру процветания и побольше оздоровленных людей. "})]})]})]})]})]}),e("div",{className:"bottom-banner",children:e("div",{className:"container-outer",children:e("div",{className:"bottom-banner__outer",children:t("div",{className:"bottom-banner__inner",children:[e("div",{className:"bottom-banner__title fw-700-36-50",children:e("p",{children:"Магазин ортопедических товаров"})}),e("div",{className:"bottom-banner__subtitle fw-700-26-35",children:e("p",{children:"Основна сфера деяльности – краткое описание желательно в две строки"})}),e("div",{className:"my-6 text-center",children:e(y,{href:route("shop"),className:"main-page-link-btn -green",children:"Перейти"})})]})})})})]})};export{R as default};
