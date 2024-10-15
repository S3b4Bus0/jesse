import{o as i,c as u,b as e,h as B,r as x,T as S,F as v,n as U,v as _,w as l,d as o,t as L,W as c,D as n,Z as w,$,a0 as N,a1 as R,G as j,I as V,a2 as z,x as D,L as O,f as E,Y as F,y as I,A as W}from"./CuiefXbU.js";import{r as A}from"./B3WB7roW.js";import{r as G}from"./C_aU7gdN.js";function C(M,f){return i(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"})])}const P={class:"mb-4"},Y={class:"hidden sm:block"},Z={class:"relative rounded-lg shadow flex justify-between divide-x divide-gray-200 dark:divide-gray-700 [&>*]:divide-x [&>*]:divide-gray-200 [&>*]::dark:divide-gray-700","aria-label":"Tabs"},q={class:"w-[calc(100%-114px)] flex justify-between"},H={class:"whitespace-nowrap text-ellipsis"},J=["onClick"],K=["onClick"],Q={class:"absolute right-[1em] focus:outline-none"},X={class:"absolute right-[1em] focus:outline-none"},ee={class:"absolute right-[1em] focus:outline-none"},te=e("span",{"aria-hidden":"true",class:"absolute inset-x-0 bottom-0 h-0.5 bg-transparent dark:bg-gray-600"},null,-1),re={class:"inline-block pt-5 px-4 pb-4"},se={class:"w-full flex justify-between items-center"},ae={class:"flex items-center"},oe={class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10"},ne=e("h3",{class:"text-gray-600 dark:text-gray-200 font-semibold ml-2 text-xl"}," Upgrade your plan ",-1),ie=e("div",{class:"flex items-start justify-start"},[e("div",{class:"mt-3 sm:mt-0 sm:ml-4 text-left"},[e("div",{class:"my-4 ml-8"},[e("p",{class:"text-gray-500 dark:text-gray-300"}," The benchmark feature is only available for premium users. Please upgrade your plan to access this feature. ")])])],-1),le={class:"mt-5 sm:mt-4 flex justify-end"},me=B({__name:"BacktestTabs",props:{tabs:{},currentTab:{}},emits:["close","cancel"],setup(M,{emit:f}){const d=x(!1),g=S(),b=x(g.params.id),m=f;function y(t){if(!t.form.routes.length)return"New Tab";if(t.results.exception.error&&t.results.executing)return"Error";const r=t.form.routes[0];let a="";return r.strategy&&(a+=`${r.strategy} • `),r.symbol&&(a+=`${r.symbol} • `),r.timeframe&&(a+=`${r.timeframe}`),a=a.endsWith(" • ")?a.slice(0,-3):a,t.results.executing?`${a} | ${t.results.progressbar.current}%`:t.results.showResults?`${a} | Results`:a}return(t,r)=>{const a=E,h=F,p=I,T=W;return i(),u(v,null,[e("div",P,[e("div",Y,[e("nav",Z,[e("div",q,[(i(!0),u(v,null,U(t.tabs,(s,de)=>(i(),_(h,{key:s.id,popper:{arrow:!0},class:"relative w-full group min-w-0 overflow-hidden text-center flex items-center group pr-6",text:y(s),"open-delay":700,onMouseup:R(k=>m("close",s.id),["middle"])},{default:l(()=>[o(a,{to:`/backtest/${s.id}`,class:c([s.id===n(b)?"text-gray-900 dark:text-gray-100 font-bold ":"text-gray-500 dark:text-gray-300 hover:text-gray-700 font-medium ","py-3 px-4 inline-block select-none cursor-pointer focus:outline-none w-full text-xs bg-gray-50 dark:bg-backdrop-dark"])},{default:l(()=>[e("span",H,L(y(s)),1),e("span",{"aria-hidden":"true",class:c([s.id===n(b)&&Object.keys(t.tabs).length>1?"bg-indigo-400":"bg-transparent dark:bg-gray-600","absolute inset-x-0 bottom-0 h-0.5"])},null,2)]),_:2},1032,["to","class"]),s.results.executing&&s.results.exception.error==""?w((i(),u("button",{key:0,class:"absolute right-[0.5em] focus:outline-none",onClick:k=>m("cancel",s.id)},[o(n(A),{class:"h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full","aria-hidden":"true"})],8,J)),[[$,Object.keys(t.tabs).length>1]]):w((i(),u("button",{key:1,class:"absolute right-[0.5em] focus:outline-none",onClick:k=>m("close",s.id)},[o(n(N),{class:"h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full","aria-hidden":"true"})],8,K)),[[$,Object.keys(t.tabs).length>1]])]),_:2},1032,["text","onMouseup"]))),128))]),o(h,{text:"Benchmark",popper:{arrow:!0}},{default:l(()=>[("useMainStore"in t?t.useMainStore:n(j))().plan==="free"||("useMainStore"in t?t.useMainStore:n(j))().plan==="guest"?(i(),u("button",{key:0,class:"select-none cursor-pointer text-gray-400 dark:text-gray-100 hover:text-gray-600 focus:outline-none group relative w-14 overflow-hidden bg-gray-50 dark:bg-backdrop-dark py-3 px-4 font-medium hover:bg-white dark:hover:bg-gray-800 flex items-center justify-center",onClick:r[0]||(r[0]=s=>d.value=!0)},[e("div",Q,[o(n(C),{class:"h-6 w-6 rounded-full","aria-hidden":"true"})]),e("span",{"aria-hidden":"true",class:c(["absolute inset-x-0 bottom-0 h-0.5 bg-transparent dark:bg-gray-600",[n(g).path==="/backtest/benchmark"?"bg-indigo-400":"bg-transparent dark:bg-gray-600","absolute inset-x-0 bottom-0 h-0.5"]])},null,2)])):(i(),_(a,{key:1,class:"select-none cursor-pointer text-gray-400 dark:text-gray-100 hover:text-gray-600 focus:outline-none group relative w-14 overflow-hidden bg-gray-50 dark:bg-backdrop-dark py-3 px-4 font-medium hover:bg-white dark:hover:bg-gray-800 flex items-center justify-center",href:"/backtest/benchmark"},{default:l(()=>[e("button",X,[o(n(C),{class:"h-6 w-6 rounded-full","aria-hidden":"true"})]),e("span",{"aria-hidden":"true",class:c(["absolute inset-x-0 bottom-0 h-0.5 bg-transparent dark:bg-gray-600",[n(g).path==="/backtest/benchmark"?"bg-indigo-400":"bg-transparent dark:bg-gray-600","absolute inset-x-0 bottom-0 h-0.5"]])},null,2)]),_:1}))]),_:1}),o(h,{text:"New Tab",popper:{arrow:!0}},{default:l(()=>[e("div",{class:"select-none cursor-pointer text-gray-400 dark:text-gray-100 hover:text-gray-600 focus:outline-none group relative w-14 overflow-hidden bg-gray-50 dark:bg-backdrop-dark py-3 px-4 font-medium hover:bg-white dark:hover:bg-gray-800 flex items-center justify-center",onClick:r[1]||(r[1]=s=>n(V)().addTab(t.currentTab))},[e("button",ee,[o(n(G),{class:"h-6 w-6 rounded-full","aria-hidden":"true"})]),te])]),_:1})])])]),o(T,{modelValue:n(d),"onUpdate:modelValue":r[4]||(r[4]=s=>O(d)?d.value=s:null)},{default:l(()=>[e("div",re,[e("div",se,[e("div",ae,[e("div",oe,[o(n(z),{class:"text-amber-400 h-7 w-7","aria-hidden":"true"})]),ne]),o(p,{icon:"i-heroicons-x-mark",variant:"link",color:"gray",class:"ml-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none",onClick:r[2]||(r[2]=s=>d.value=!1)})]),ie,e("div",le,[o(p,{variant:"link",color:"gray",class:"mr-4",size:"lg",label:"Close",onClick:r[3]||(r[3]=s=>d.value=!1)}),o(a,{to:"https://jesse.trade/pricing",target:"_blank"},{default:l(()=>[o(p,{variant:"solid",color:"primary","trailing-icon":"i-heroicons-arrow-right",class:"mr-4",size:"lg",label:"Upgrade"})]),_:1}),D(t.$slots,"default")])])]),_:3},8,["modelValue"])],64)}}});export{me as _};
