import{W as u,u as h,j as t,a,I as c}from"./app-5439e053.js";import{S as f}from"./react-select.esm-3063ce7f.js";const g="/build/assets/form-doctor-5a17e38e.png",v={control:(r,l)=>({...r,borderColor:"transparent !important",borderRadius:"9999px",minHeight:"49.42px",boxShadow:"none !important",background:"#EEF2F5 !important"}),indicatorSeparator:(r,l)=>({...r,display:"none"}),singleValue:(r,l)=>({...r,color:"#414D55",padding:"0 4px"}),menu:(r,l)=>({...r,minWidth:"12rem",left:"auto",right:0})},_=r=>{const{menus:l,headerphone:d,facilities:m}=window.appdata,{data:o,setData:i,post:p,processing:N,errors:n,reset:x}=u({name:"",phone:"",message:"",facility_id:null,remember:!1});return h(),t("div",{className:"form-app-doctor",children:[t("div",{className:"form-app-doctor-content",children:[t("div",{className:"form-app-doctor-title",children:[a("h4",{children:"Запишитесь к Врачу "}),a("p",{children:"Оставьте контактные данные, выберите услугу и салон"})]}),a("form",{action:"",className:"form-app-doctor-form",onSubmit:e=>{e.preventDefault(),p(route("termins.store"),{preserveScroll:!0})},children:t("div",{className:"grid sm:grid-cols-3 gap-x-3 gap-y-3",children:[t("div",{children:[a("input",{type:"text",value:o.name,onChange:e=>i(s=>({...s,name:e.target.value})),className:"form-app-doctor-input",placeholder:"ФИО"}),a(c,{message:n.name,className:"mt-2"})]}),t("div",{children:[a("input",{type:"tel",value:o.phone,onChange:e=>i(s=>({...s,phone:e.target.value})),className:"form-app-doctor-input",placeholder:"Номер телефона"}),a(c,{message:n.phone,className:"mt-2"})]}),t("div",{className:"ordering-contacts-form__selectbox mr-0",children:[a(f,{options:m.map(e=>({label:e.title,value:e.id})),styles:v,isSearchable:!1,placeholder:"Выберите услугу",value:o.facility_id&&m.findIndex(e=>e.id==o.value)?{label:m.find(e=>e.id==o.facility_id).title,value:o.facility_id}:null,onChange:e=>i(s=>({...s,facility_id:e.value})),theme:e=>({...e,colors:{...e.colors,primary25:"#f1f5f8",primary:"#3A9EAA"}})}),a(c,{message:n.facility_id,className:"mt-2"})]}),t("div",{className:"col-span-3",children:[a("textarea",{type:"text",value:o.message,onChange:e=>i(s=>({...s,message:e.target.value})),className:"w-full form-app-doctor-input rounded-lg",placeholder:"Опишите причину вашего обращения"}),a(c,{message:n.message,className:"mt-2"})]}),a("div",{className:"col-span-3",children:a("button",{className:"form-app-doctor-btn",type:"submit",children:"Записаться на прием"})})]})}),t("div",{className:"form-app-doctor-contact",children:[a("span",{children:"Также запись по телефону:"}),a("a",{href:`tel:${d}`,className:"flex flex-col md:flex-row gap-x-4 gap-y-1 md:items-center",children:a("span",{children:d})})]})]}),a("div",{className:"form-app-doctor-img",children:a("img",{src:g,alt:""})})]})};export{_ as F};