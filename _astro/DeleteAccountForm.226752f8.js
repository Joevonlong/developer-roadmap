import{j as e}from"./jsx-runtime.391947bd.js";import{r as s}from"./index.ed373d49.js";import{c as m}from"./http.64a7434f.js";import{l as f}from"./navigation.776bdd27.js";import"./jwt.1b92699e.js";function E(){const[a,o]=s.useState(!1),[c,r]=s.useState(""),[n,l]=s.useState("");s.useEffect(()=>{r(""),l("")},[]);const d=async t=>{if(t.preventDefault(),o(!0),r(""),n.toUpperCase()!=="DELETE"){r("Verification text does not match"),o(!1);return}const{response:p,error:i}=await m("https://api.roadmap.sh/v1-delete-account");if(i||!p){o(!1),r(i?.message||"Something went wrong");return}f()},u=()=>{o(!1),r(""),l("");const t=document.getElementById("delete-account-popup");t?.classList.add("hidden"),t?.classList.remove("flex")};return e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{className:"my-4",children:[e.jsx("input",{type:"text",name:"delete-account",id:"delete-account",className:"mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:border-gray-400",placeholder:'Type "delete" to confirm',required:!0,autoFocus:!0,value:n,onInput:t=>l(t.target.value)}),c&&e.jsx("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:c})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",disabled:a,onClick:u,className:"flex-grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",children:"Cancel"}),e.jsx("button",{type:"submit",disabled:a||n.toUpperCase()!=="DELETE",className:"flex-grow cursor-pointer rounded-lg bg-red-500 py-2 text-white disabled:opacity-40",children:a?"Please wait ..":"Confirm"})]})]})}export{E as DeleteAccountForm};
