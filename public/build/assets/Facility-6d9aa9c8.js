import{u as n,j as e,L as o,a,b as h,C as x,F as g}from"./app-a7aa735b.js";import"./index-4e15583a.js";import{H as i}from"./index-b663c089.js";import{F as f}from"./FacilityTizer-ac6326b6.js";const w=s=>{const{pagetitle:d,current:t,facility:N,facilities:c}=s,{setModal:r}=n();return e(o,{...s,children:[a(h,{title:d}),e("div",{className:"main-block",children:[a("div",{className:"main-bg brightness-50",children:a("img",{src:t.data.image,alt:t.data.title})}),a("div",{className:"container-outer",children:e("div",{className:"main-content flex flex-col justify-center text-center",children:[a("h1",{className:"main-title",children:t.data.title}),a("p",{className:"main-subtitle",children:t.data.subtitle}),a("a",{href:"#",className:"btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto",onClick:l=>{l.preventDefault(),r(a(x,{}))},children:"Заказать звонок"})]})})]}),c.data.length?a("div",{className:"our-services",children:a("div",{className:"container-outer",children:a("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-10",children:c.data.map((l,m)=>a(f,{item:l},m))})})}):a(g,{}),a("div",{className:"massage-info bg-white py-20",children:e("div",{className:"container-outer facility-text",children:[e("div",{className:"flex flex-col md:flex-row items-stretch gap-5 mb-5",children:[t.data.text1?a("div",{className:"white-block -gray mb-0 md:w-1/2 facility-text1",children:i(t.data.text1??"")}):"",e("div",{className:"flex flex-col gap-5 md:w-1/2",children:[t.data.text2?a("div",{className:"white-block -gray mb-0  facility-text2",children:i(t.data.text2??"")}):"",t.data.text3?a("div",{className:"white-block -gray mb-0  facility-text3",children:i(t.data.text3??"")}):""]})]}),t.data.text4?a("div",{className:"white-block -gray mb-5 facility-text4",children:i(t.data.text4??"")}):"",t.data.text5?a("div",{className:"white-block -gray mb-5 facility-text5",children:i(t.data.text5??"")}):"",e("div",{className:"massage-courses mt-10",children:[e("div",{className:"flex flex-col md:flex-row items-center md:items-start justify-between mb-10",children:[t.data.text6?a("div",{className:"grow facility-text6",children:i(t.data.text6??"")}):"",a("div",{className:"max-w-[21.875rem] shrink-0",children:a("img",{src:t.data.text6image,alt:""})})]}),t.data.sign1?a("div",{className:"warning-block",children:t.data.sign1}):"",t.data.sign2?a("div",{className:"warning-block",children:t.data.sign2}):""]})]})})]})};export{w as default};
