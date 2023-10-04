import{u as m,j as i,L as p,a as e,b as v,C as f,d as s}from"./app-c337bf30.js";import{F as w}from"./FormAppDoctor-2a343b08.js";import{S as g}from"./index-4763abfb.js";import{H as r}from"./index-84cc2fc4.js";import{B as u}from"./Breadcrumbs-1e24bc97.js";const b=t=>{const{pagetitle:a,facilities:d,banners:n}=t,{setModal:h}=m();var C={infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:1200,arrows:!1,prevArrow:'<div className="slick-arrow-purple main-slick__arrow-left center"><ion-icon name="arrow-back-outline"></ion-icon></div>',nextArrow:'<div className="slick-arrow-purple main-slick__arrow-right center"><ion-icon name="arrow-forward-outline"></ion-icon></div>',dots:!0};return i(p,{...t,children:[e(v,{title:a}),i("div",{className:"main-block relative",children:[e("div",{className:"absolute top-0 w-full flex justify-center text-white pt-6",children:e(u,{...t,inbanner:!0})}),e(g,{...C,className:"main-slider w-full",children:n.data.map((l,c)=>i("div",{className:"main-slider-item",children:[e("div",{className:"main-bg brightness-50",children:e("img",{src:l.image,alt:l.title})}),i("div",{className:"container-outer flex flex-col justify-between h-full py-8",children:[i("div",{className:"main-content flex flex-col justify-center items-center text-center w-full",children:[e("div",{className:"main-title",children:l.title}),e("a",{href:"#",className:"btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto",onClick:o=>{o.preventDefault(),h(e(f,{}))},children:"Заказать звонок"})]}),e("div",{})]})]},c))})]}),e("div",{className:"our-services",children:i("div",{className:"container-outer",children:[e("div",{className:"our-services-title",children:e("h2",{children:"Наши услуги"})}),e("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-10",children:d.data.map((l,c)=>i(s,{href:route("services.show",{service:l.slug}),className:"our-services-item",children:[e("div",{className:"our-services-bg",children:e("img",{src:l.bg,alt:""})}),i("div",{className:"flex flex-col justify-start items-center gap-4",children:[e("div",{className:"our-services-icon",children:r(l.icon??"")}),e("div",{className:"our-services-name",children:r(l.title??"")})]}),e("span",{className:"our-services-btn",children:"Подробнее"})]},c))})]})}),e("div",{className:"bg-white",children:i("div",{className:"container-outer",children:[i("div",{className:"appointment-doctor py-24 md:mx-20",children:[e("div",{className:"appointment-doctor-title",children:e("h2",{children:"Рекомендовано записаться на прием:"})}),i("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-10",children:[i("div",{className:"flex gap-6 items-center justify-start",children:[i("svg",{width:"48",height:"48",className:"shrink-0",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_0_4139)",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z",fill:"#3A9EAA"})}),e("defs",{children:e("clipPath",{id:"clip0_0_4139",children:e("rect",{width:"48",height:"48",fill:"white"})})})]}),"Для сохранения здоровья суставов"]}),i("div",{className:"flex gap-6 items-center justify-start",children:[i("svg",{width:"48",height:"48",className:"shrink-0",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_0_4139)",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z",fill:"#3A9EAA"})}),e("defs",{children:e("clipPath",{id:"clip0_0_4139",children:e("rect",{width:"48",height:"48",fill:"white"})})})]}),"При лечении мышц и связок"]}),i("div",{className:"flex gap-6 items-center justify-start",children:[i("svg",{width:"48",height:"48",className:"shrink-0",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_0_4139)",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z",fill:"#3A9EAA"})}),e("defs",{children:e("clipPath",{id:"clip0_0_4139",children:e("rect",{width:"48",height:"48",fill:"white"})})})]}),"Для профилактики заболеваний вен"]}),i("div",{className:"flex gap-6 items-center justify-start",children:[i("svg",{width:"48",height:"48",className:"shrink-0",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_0_4139)",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z",fill:"#3A9EAA"})}),e("defs",{children:e("clipPath",{id:"clip0_0_4139",children:e("rect",{width:"48",height:"48",fill:"white"})})})]}),"Перенесшим операцию"]}),i("div",{className:"flex gap-6 items-center justify-start",children:[i("svg",{width:"48",height:"48",className:"shrink-0",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_0_4139)",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z",fill:"#3A9EAA"})}),e("defs",{children:e("clipPath",{id:"clip0_0_4139",children:e("rect",{width:"48",height:"48",fill:"white"})})})]}),"Нуждающимся в реабилитации"]}),i("div",{className:"flex gap-6 items-center justify-start",children:[i("svg",{width:"48",height:"48",className:"shrink-0",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_0_4139)",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z",fill:"#3A9EAA"})}),e("defs",{children:e("clipPath",{id:"clip0_0_4139",children:e("rect",{width:"48",height:"48",fill:"white"})})})]}),"Любителям спорта"]}),i("div",{className:"flex gap-6 items-center justify-start",children:[i("svg",{width:"48",height:"48",className:"shrink-0",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_0_4139)",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z",fill:"#3A9EAA"})}),e("defs",{children:e("clipPath",{id:"clip0_0_4139",children:e("rect",{width:"48",height:"48",fill:"white"})})})]}),"Для коррекции походки"]}),i("div",{className:"flex gap-6 items-center justify-start",children:[i("svg",{width:"48",height:"48",className:"shrink-0",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_0_4139)",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z",fill:"#3A9EAA"})}),e("defs",{children:e("clipPath",{id:"clip0_0_4139",children:e("rect",{width:"48",height:"48",fill:"white"})})})]}),"При борьбе с головной болью"]}),i("div",{className:"flex gap-6 items-center justify-start",children:[i("svg",{width:"48",height:"48",className:"shrink-0",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("g",{clipPath:"url(#clip0_0_4139)",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0C10.7455 0 0 10.7455 0 24C0 37.2545 10.7455 48 24 48C37.2545 48 48 37.2545 48 24C48 10.7455 37.2545 0 24 0ZM34.4029 19.9418C34.5945 19.7229 34.7403 19.4678 34.8318 19.1916C34.9234 18.9155 34.9587 18.6238 34.9359 18.3338C34.913 18.0438 34.8324 17.7612 34.6987 17.5028C34.565 17.2444 34.3811 17.0154 34.1576 16.8291C33.9341 16.6429 33.6756 16.5032 33.3973 16.4183C33.119 16.3334 32.8266 16.3051 32.5372 16.3349C32.2478 16.3647 31.9673 16.4521 31.7122 16.5919C31.4571 16.7318 31.2325 16.9212 31.0516 17.1491L21.6698 28.4051L16.8153 23.5484C16.4038 23.1509 15.8526 22.931 15.2806 22.936C14.7085 22.941 14.1613 23.1704 13.7568 23.5749C13.3522 23.9795 13.1228 24.5267 13.1178 25.0988C13.1128 25.6708 13.3327 26.222 13.7302 26.6335L20.2756 33.1789C20.49 33.3932 20.7467 33.5604 21.0293 33.67C21.3119 33.7795 21.6142 33.829 21.917 33.8152C22.2197 33.8015 22.5163 33.7248 22.7878 33.5901C23.0593 33.4553 23.2997 33.2655 23.4938 33.0327L34.4029 19.9418Z",fill:"#3A9EAA"})}),e("defs",{children:e("clipPath",{id:"clip0_0_4139",children:e("rect",{width:"48",height:"48",fill:"white"})})})]}),"Будущим мамам"]})]})]}),e("div",{className:"pb-16",children:e(w,{})})]})}),e("div",{className:"bottom-banner",children:e("div",{className:"container-outer",children:e("div",{className:"bottom-banner__outer",children:i("div",{className:"bottom-banner__inner",children:[e("div",{className:"bottom-banner__title fw-700-36-50",children:e("p",{children:"Магазин ортопедических товаров"})}),e("div",{className:"bottom-banner__subtitle fw-700-26-35",children:e("p",{children:"Основна сфера деяльности – краткое описание желательно в две строки"})}),e("div",{className:"my-6 text-center",children:e(s,{href:route("shop"),className:"main-page-link-btn -green",children:"Перейти"})})]})})})})]})};export{b as default};
