import{W as l,r as p,j as a,L as c,a as s,b as u}from"./app-6ebd43cc.js";import{I as f}from"./InputError-2b5c8723.js";import{I as w}from"./InputLabel-7cdcbe55.js";import{P as h}from"./PrimaryButton-c2ad9ccc.js";import{T as b}from"./TextInput-4fd0950b.js";function I(e){const{data:t,setData:o,post:m,processing:i,errors:n,reset:d}=l({password:""});return p.useEffect(()=>()=>{d("password")},[]),a(c,{...e,children:[s(u,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),m(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(w,{htmlhtmlFor:"password",value:"Password"}),s(b,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>o("password",r.target.value)}),s(f,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(h,{className:"ml-4",disabled:i,children:"Confirm"})})]})]})}export{I as default};