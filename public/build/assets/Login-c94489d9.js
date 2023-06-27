import{j as e,W as f,r as g,a,b as h,d as b}from"./app-c0aca587.js";import{A as x}from"./Layout-cf9369be.js";import{T as n,I as i}from"./TextInput-423022b6.js";import{I as d}from"./InputLabel-0064d143.js";import{P as w}from"./PrimaryButton-ad914d93.js";function v({className:t="",...r}){return e("input",{...r,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+t})}function j(t){const{status:r}=t,{data:m,setData:o,post:c,processing:u,errors:l,reset:p}=f({email:"",password:"",remember:!1});return g.useEffect(()=>()=>{p("password")},[]),a(x,{...t,children:[e(h,{title:"Log in"}),r&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),a("form",{onSubmit:s=>{s.preventDefault(),c(route("login"))},children:[a("div",{children:[e(d,{htmlhtmlFor:"email",value:"Email"}),e(n,{id:"email",type:"email",name:"email",value:m.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e(i,{message:l.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(d,{htmlhtmlFor:"password",value:"Password"}),e(n,{id:"password",type:"password",name:"password",value:m.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e(i,{message:l.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:a("label",{className:"flex items-center",children:[e(v,{name:"remember",checked:m.remember,onChange:s=>o("remember",s.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),a("div",{className:"flex items-center justify-end mt-4",children:[e(b,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e(w,{className:"ml-4",disabled:u,children:"Log in"})]})]})]})}export{j as default};
