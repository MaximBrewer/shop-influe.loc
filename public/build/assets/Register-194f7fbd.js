import{W as p,r as u,j as r,L as g,a as e,b as _}from"./app-204582c2.js";import{I as o}from"./InputError-32c3208c.js";import"./TextInput-c1265060.js";import{B as h}from"./Breadcrumbs-be54e92a.js";function b(n){const{data:s,setData:t,post:l,processing:c,errors:i,reset:m}=p({name:"",email:"",password:"",password_confirmation:""});u.useEffect(()=>()=>{m("password","password_confirmation")},[]);const d=a=>{a.preventDefault(),l(route("register"))};return r(g,{...n,children:[e(_,{title:"Register"}),e("div",{className:"catalogue-categories",children:e("div",{className:"container-outer",children:e("div",{className:"catalogue-categories__outer",children:e("div",{className:"catalogue-categories__inner",children:e(h,{...n})})})})}),e("div",{className:"registration-section",children:r("div",{className:"container-outer",children:[e("div",{className:"registration-section__title catalogue-section__title center fw-700-45-55",children:e("p",{children:"Регистрация"})}),e("div",{className:"registration-section__subtitle reg-subtitle fw-400-16-19",children:e("p",{children:"Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия."})}),r("form",{className:"registration-section__form reg-form fw-400-16-19",onSubmit:d,children:[r("div",{className:"reg-form__row",children:[r("div",{style:{width:"50%"},children:[e("input",{id:"name",name:"name",value:s.name,className:"reg__input",autoComplete:"name",isFocused:!0,onChange:a=>t("name",a.target.value),placeholder:"Имя"}),e(o,{message:i.name})]}),r("div",{style:{width:"50%"},children:[e("input",{id:"email",type:"text",name:"email",value:s.email,className:"reg__input",autoComplete:"username",onChange:a=>t("email",a.target.value),placeholder:"E-mail"}),e(o,{message:i.email})]})]}),r("div",{className:"reg-form__col",children:[e("input",{id:"password",type:"password",name:"password",placeholder:"Пароль",value:s.password,className:"reg__input",autoComplete:"new-password",onChange:a=>t("password",a.target.value)}),e(o,{message:i.password})]}),r("div",{className:"reg-form__col",children:[e("input",{id:"password_confirmation",type:"password",placeholder:"Подтвердите пароль",name:"password_confirmation",value:s.password_confirmation,className:"reg__input",autoComplete:"new-password",onChange:a=>t("password_confirmation",a.target.value)}),e(o,{message:i.password_confirmation})]}),e("div",{className:"reg-form__btn-wrapper fw-700-16-20",children:e("button",{className:"btn-primary",disabled:c,children:"Зарегистрироваться"})})]}),e("br",{}),e("br",{})]})})]})}export{b as default};