import{o as i,c as d,b as r,bE as h,bF as m,Q as w,aX as c,aW as l,N as v,h as b,j as p,r as _,l as S,a1 as k,b2 as x,D as u,M as C,F as A,n as B,q as M,v as N,w as V,d as F,t as L,f as D}from"./B0OuR9xi.js";function E(a,t){return i(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{d:"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z"}),r("path",{d:"M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"})])}const y=h("strategies",{state:()=>({strategies:[]}),persist:{storage:m.localStorage},actions:{async getStrategies(){const{data:a,error:t}=await w("/get-strategies",!0);if(t.value&&t.value.statusCode!==200){c(t);return}const e=a.value;this.strategies=e.strategies},async getStrategy(a){const{data:t,error:e}=await l("/get-strategy",{name:a},!0);return e.value&&e.value.statusCode!==200?(c(e),""):t.value.content},async saveStrategy(a,t){const{data:e,error:s}=await l("/save-strategy",{name:a,content:t},!0);if(s.value&&s.value.statusCode!==200){c(s);return}const n=e.value;v("success",n.message)},async deleteStrategy(a){const{data:t,error:e}=await l("/delete-strategy",{name:a},!0);if(e.value&&e.value.statusCode!==200){c(e);return}const s=t.value;v("success",s.message)}}}),j={class:"flex justify-between items-center border-b dark:border-gray-600"},T=b({__name:"StrategiesSidebar",setup(a){const t=p(()=>y().strategies),e=_(""),s=p(()=>t.value.filter(n=>n.toLowerCase().includes(e.value.toLowerCase())));return S(async()=>{setTimeout(async()=>{await y().getStrategies()},200)}),(n,g)=>{const f=D;return i(),d("div",{class:"grid grid-cols-1 overflow-auto border-r dark:border-gray-600",style:M({height:"calc(100vh - 4rem - 4px)"})},[r("section",null,[r("section",null,[r("div",j,[k(r("input",{"onUpdate:modelValue":g[0]||(g[0]=o=>C(e)?e.value=o:null),class:"w-full px-4 py-2 bg-gray-50 focus:outline-none dark:bg-backdrop-dark",placeholder:"Search strategies..."},null,512),[[x,u(e)]])]),(i(!0),d(A,null,B(u(s),o=>(i(),N(f,{key:o,to:`/strategies/${o}`,class:"px-4 py-2 bg-gray-50 dark:bg-backdrop-dark hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer select-none flex items-center"},{default:V(()=>[F(u(E),{class:"w-4 h-4 mr-2"}),r("span",null,L(o),1)]),_:2},1032,["to"]))),128))])])],4)}}});export{T as _,y as u};
