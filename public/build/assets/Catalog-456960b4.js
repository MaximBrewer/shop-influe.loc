import{r,j as e,L as o,a,b as d,h as n,d as u}from"./app-6ebd43cc.js";import{B as m}from"./Breadcrumbs-e9b5c4f5.js";import{F as g}from"./Filter-4785cf08.js";import{P as h}from"./Paginate-51ab6d02.js";import{P as _}from"./ProductTizer-60882515.js";import"./NoPhoto-5d05ba50.js";const y=c=>{const{pagetitle:t,products:i,specifications:N}=c,{categories:s}=window.appdata;return r.useState(null),e(o,{...c,children:[a(d,{title:t}),a("div",{className:"catalogue-categories",children:a("div",{className:"container-outer",children:a("div",{className:"catalogue-categories__outer",children:a("div",{className:"catalogue-categories__inner",children:a(m,{...c})})})})}),a("div",{className:"catalogue-section",children:e("div",{className:"container-outer",children:[a("div",{className:"catalogue-section__title center fw-700-45-55",children:t}),e("div",{className:"catalogue-filter-row catalogue-section__catalogue-filter-row",children:[a("div",{className:"total-found-label fw-400-16-19",children:a("p",{children:"Показано 621 товаров"})}),e("div",{className:"sort-filter catalogue-filter-row__sort-filter fw-600-14-17",children:[a("input",{type:"text",className:"total-found-sidebar__input",placeholder:"Сортировка"}),a("div",{className:"total-found-sidebar__chevron-down-icon-wrapper center",children:a(n,{className:"w-3.5 h-3.5 shrink-0"})})]})]}),e("div",{className:"catalogue catalogue-section__catalogue",children:[e("div",{className:"catalogue__left",children:[a("ul",{className:"total-found-sidebar catalogue__total-found-sidebar fw-400-16-19",children:s.map(l=>a("li",{className:"total-found-sidebar__catalogue-sidebar-item",children:e(u,{href:route("category",{category:l.slug}),className:"catalogue-sidebar-item",children:[a("div",{className:"catalogue-sidebar-item__title",children:l.name}),a("div",{className:"catalogue-sidebar-item__total",children:l.productsCount?`(${l.productsCount})`:""})]})},l.id))}),a(g,{})]}),e("div",{className:"catalogue__grid",children:[a("ul",{className:"catalogue__grid-inner",children:i.data.map(l=>a("li",{className:"catalogue__item",children:a(_,{item:l})},l.id))}),a(h,{...i.meta})]})]})]})}),a("div",{className:"catalogue-categories",children:a("div",{className:"container-outer",children:a("div",{className:"catalogue-categories__outer",children:a("div",{className:"catalogue-categories__inner",children:e("div",{className:"catalogue-section",children:[a("div",{className:"catalogue-section__title center fw-700-45-55",children:a("p",{children:t})}),e("div",{className:"catalogue-wrapper",children:[a("ul",{className:"catalogue-sidebar fw-700-14-17 min-h-[24rem] overflow-hidden"}),a("ul",{className:"catalogue-grid-wrapper self-start w-full"})]})]})})})})})]})};export{y as default};