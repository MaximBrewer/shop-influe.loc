import{q as p,r as d,h,j as n,a,d as v,u as y}from"./app-eba468fc.js";import{P as N}from"./ProductTizer-e21c8f7f.js";import{P as x}from"./Paginate-b3bf0545.js";import{S}from"./react-select.esm-28752b8d.js";import{B as $}from"./Breadcrumbs-3cddc808.js";const T=({item:e,filter:s,setFilter:r})=>{const[i,u]=d.useState(!1);return n("li",{className:"filter-sidebar__item",children:[a("div",{className:"filter-sidebar__item-title fw-600-16-19 cursor-pointer py-[9px] -mt-[9px] mb-0 px-[21px] -mx-[21px]",onClick:t=>u(l=>!l),children:e.title}),i?a("ul",{className:"checkbox-grid max-h-[24rem] overflow-y-auto p-2",children:e.values.map((t,l)=>a("li",{children:n("label",{htmlFor:`specification-${e.id}-${l}`,className:"checkbox-grid__item",children:[a("div",{className:"checkbox-wrapper center",children:a("input",{type:"checkbox",name:`specification-${e.id}`,id:`specification-${e.id}-${l}`,onChange:b=>{r(m=>{const c={...m};c[e.accounting_id]=c[e.accounting_id]?c[e.accounting_id]:[];const g=c[e.accounting_id].indexOf(t);return g>-1?c[e.accounting_id].splice(g,1):c[e.accounting_id].push(t),c[e.accounting_id].length||delete c[e.accounting_id],c})}})}),a("div",{className:"checkbox-label-wrapper center",children:a("div",{className:"checkbox-label",children:t})})]})},`${e.id}-${l}`))}):""]})},w=e=>{const{specifications:s,ziggy:r,category:i=null,subcategory:u=null,subsubcategory:t=null}=p().props,[l,b]=d.useState({}),m=d.useRef(!1),c=d.useRef(0);d.useEffect(()=>{if(m.current){clearTimeout(c.current);let o={};for(let _ in l)o[_]=l[_].join(":::");c.current=setTimeout(()=>{i?h.visit(route("category",t?{...o,category:i.data.slug,subcategory:u.data.slug,subsubcategory:t.data.slug}:u?{...o,category:i.data.slug,subcategory:u.data.slug}:{...o,category:i.data.slug}),{preserveState:!0,preserveScroll:!0}):h.visit(route("catalog",o))},2e3)}m.current=!0},[l]);const g=o=>{clearTimeout(c.current)};return d.useEffect(()=>(document.addEventListener("inertia:start",g),()=>{clearTimeout(c.current),document.removeEventListener("inertia:start",g)}),[]),n("ul",{className:"filter-sidebar catalogue__filter-sidebar fw-400-16-19",children:[a("li",{className:"filter-sidebar__title center",children:"Фильтр"}),a("ul",{className:"filter-sidebar__inner",children:s.data.map(o=>a(d.Fragment,{children:o.values.length?a(T,{item:o,filter:l,setFilter:b}):""},o.id))})]})},F=({categories:e})=>{const{products:s,category:r=null,subcategory:i=null,subsubcategory:u=null}=p().props;return n("div",{className:"catalogue catalogue-section__catalogue",children:[n("div",{className:"catalogue__left",children:[u?"":a("ul",{className:"total-found-sidebar catalogue__total-found-sidebar fw-400-16-19",children:e.map(t=>a("li",{className:"total-found-sidebar__catalogue-sidebar-item",children:n(v,{href:route("category",i?{category:r.data.slug,subcategory:i.data.slug,subsubcategory:t.slug}:r?{category:r.data.slug,subcategory:t.slug}:{category:t.slug}),className:"catalogue-sidebar-item",children:[a("div",{className:"catalogue-sidebar-item__title",children:t.name}),a("div",{className:"catalogue-sidebar-item__total",children:t.productsCount?`(${t.productsCount})`:""})]})},t.id))}),r?a(w,{}):""]}),n("div",{className:"catalogue__grid",children:[a("ul",{className:"catalogue__grid-inner",children:s.data.map(t=>a("li",{className:"catalogue__item",children:a(N,{item:t})},t.id))}),a(x,{...s.meta})]})]})},k={control:(e,s)=>({...e,borderColor:"rgba(0,0,0,.2) !important",borderRadius:"9999px",minHeight:"40px",boxShadow:"none !important"}),indicatorSeparator:(e,s)=>({...e,display:"none"}),singleValue:(e,s)=>({...e,color:"#414D55",padding:"0 4px"}),menu:(e,s)=>({...e,minWidth:"12rem",left:"auto",right:0})},f=[{value:"title:asc",label:"По названию А-Я"},{value:"title:desc",label:"По названию Я-А"},{value:"min_price:asc",label:"Дешевле"},{value:"min_price:desc",label:"Дороже"}],P=()=>{const{sort:e,order:s}=p().props;return a(S,{options:f,styles:k,isSearchable:!1,placeholder:"Сортировка",value:e&&s?f.find(r=>r.value==`${e}:${s}`):f[0],onChange:r=>h.visit(route("catalog",{sort:r.value.split(":")[0],order:r.value.split(":")[1]})),theme:r=>({...r,colors:{...r.colors,primary25:"#f1f5f8",primary:"#3A9EAA"}})})},A=()=>{const e=p().props;return a("div",{className:"catalogue-categories",children:a("div",{className:"container-outer",children:a("div",{className:"catalogue-categories__outer",children:a("div",{className:"catalogue-categories__inner",children:a($,{...e})})})})})},I=()=>{const{products:e}=p().props,{numWord:s}=y();return a("div",{className:"total-found-label fw-400-16-19",children:n("span",{children:["Показано ",e.meta.total," ",s(e.meta.total,["товар","товара","товаров"])]})})};export{F as M,P as S,A as T,I as a};