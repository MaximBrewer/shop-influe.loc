import{q as l,j as e,d as t,a}from"./app-9a1dbf06.js";import{H as r}from"./index-43817cff.js";const d=({item:s})=>{const{facility:i=null}=l().props,c=i?{facility:i.data.slug,subfacility:s.slug}:{facility:s.slug};return e(t,{href:route("facility",c),className:"our-services-item",children:[a("div",{className:"our-services-bg",children:a("img",{src:s.bg,alt:""})}),e("div",{className:"flex flex-col justify-start items-center gap-4",children:[a("div",{className:"our-services-icon",children:r(s.icon??"")}),a("div",{className:"our-services-name",children:r(s.title??"")})]})]})};export{d as F};
