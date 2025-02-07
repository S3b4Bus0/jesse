import{_ as re}from"./CUpjPPUh.js";import{c as i,o as r,b as a,g as V,q as k,i as M,B as Y,A as c,t as x,a as I,v as O,J as se,p as ae,K as ne,M as K,a_ as X,r as R,F as E,d as g,T as le,w as C,z as b,b0 as ie,b1 as de,b6 as ue,X as ce,x as Q,R as me,a3 as ee,a4 as te,aY as pe,Z as z,Y as fe,aj as ge,j as ye,m as U,e as Z,W as he}from"./Bxvlha2F.js";import{_ as be}from"./CL1NekgX.js";import{_ as _e}from"./BqjHQvxc.js";function ke(p,e){return r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"})])}function ve(p,e){return r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"})])}function xe(p,e){return r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})])}const we=["innerHTML"],gt=V({__name:"Logs",props:{logs:{}},setup(p){return(e,y)=>{const f=re;return e.logs.length?(r(),i("pre",{key:0,class:"whitespace-pre-line rounded border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 select-text text-base dark:text-gray-300 w-full px-4 sm:px-6 py-2",innerHTML:e.logs},null,8,we)):(r(),k(f,{key:1}))}}}),Ce=V({__name:"CircleProgressbar",props:{progress:{}},setup(p){const e=p,y=M(()=>{let f="progress-circle";return e.progress>50&&(f+=" over50"),f+=` p${Math.round(e.progress)}`,f});return(f,s)=>(r(),i("div",{class:Y(c(y))},[a("span",null,x(f.progress)+"%",1),s[0]||(s[0]=a("div",{class:"left-half-clipper"},[a("div",{class:"first50-bar"}),a("div",{class:"value-bar"})],-1))],2))}}),yt=I(Ce,[["__scopeId","data-v-88f4951a"]]),$e={class:"w-full flex justify-between items-center"},Re=["textContent"],Ve={class:"whitespace-nowrap ml-2"},oe=V({__name:"DividerWithButtons",props:{title:{}},setup(p){return(e,y)=>(r(),i("div",$e,[a("span",{class:"pr-3 bg-gray-50 dark:bg-backdrop-dark text-lg font-semibold text-gray-900 dark:text-gray-200",textContent:x(e.title)},null,8,Re),y[0]||(y[0]=a("div",{class:"w-full flex items-center","aria-hidden":"true"},[a("div",{class:"w-full border-t-2 border-dashed border-gray-300 dark:border-gray-600"})],-1)),a("span",Ve,[O(e.$slots,"default")])]))}}),Me={key:0,class:"mb-4"},Ee=["innerHTML"],Se={class:"flex justify-end"},Te={class:"rounded-md bg-red-50 p-4 my-4 select-text"},De={class:"flex"},Ue={class:"flex-shrink-0"},Be={class:"ml-3 overflow-hidden w-full"},Le=["textContent"],je=["innerHTML"],ze=["value"],ht=V({__name:"Exception",props:se({title:String,content:{type:String,default:""},mode:String,debugMode:{type:Boolean,default:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(p){const e=p,y=ae(p,"modelValue"),f=M(()=>ne().params.id),s=K(),h=X({description:"",attachLogs:!0,email:""}),B=R(!1),l=R(!1),S=R(!1),T=M(()=>e.mode==="backtest"&&!e.debugMode?{message:'It is highly recommended to attach log files with reports. To do that, press cancel, enable "Debug Mode", and  run again. ',type:"warning"}:{message:"",type:""}),q=M(()=>e.mode==="backtest"&&e.debugMode||e.mode==="live"),D=M(()=>s.hasLivePluginInstalled),H=async()=>{S.value=!0;const{data:L,error:d}=await pe("/report-exception",{description:h.description,email:h.email,traceback:e.content,mode:e.mode,attach_logs:h.attachLogs,session_id:f.value},!0);if(S.value=!1,d.value&&d.value.statusCode!==200){z("error",`[${d.value.statusCode}]: ${d.value.message}`);return}const $=L.value;$.status==="success"?(h.description="",h.email="",z("success",$.message),y.value=!1):$.status==="error"&&z("error",$.message)},A=()=>{navigator.clipboard.writeText(e.content),z("success","Copied successfully"),l.value=!0,setTimeout(()=>{l.value=!1},2e3)},P=()=>{y.value=!0};return(L,d)=>{const $=be,N=ue,j=de,W=ce,F=fe,t=Q,o=ie,_=le,v=oe;return r(),i(E,null,[g(_,{modelValue:y.value,"onUpdate:modelValue":d[5]||(d[5]=n=>y.value=n),title:"Report"},{default:C(()=>[c(T).message?(r(),i("div",Me,[g($,{color:"teal",icon:"i-heroicons-check-circle",title:c(T).message,"close-button":{icon:"i-heroicons-x-mark-20-solid",color:"white",variant:"link"},onClose:d[0]||(d[0]=n=>c(T).message="")},null,8,["title"])])):b("",!0),d[6]||(d[6]=a("p",null," If the exception you're seeing is not clear and you think it might be a bug, please send us a report to help us debugging and fixing it in a future release. ",-1)),d[7]||(d[7]=a("br",null,null,-1)),d[8]||(d[8]=a("label",{class:"font-semibold"},"Exception:",-1)),a("pre",{class:"break-all lg:break-normal mt-2 text-sm whitespace-pre-line px-6 py-6 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 dark:border-gray-800 border border-gray-200",innerHTML:p.content},null,8,Ee),g(o,{state:c(h),class:"space-y-4 mt-4",onSubmit:H},{default:C(()=>[g(j,{label:"Description (optional):",name:"Description (optional):"},{default:C(()=>[g(N,{modelValue:c(h).description,"onUpdate:modelValue":d[1]||(d[1]=n=>c(h).description=n),rows:10,placeholder:"Describe how the exception occurred..."},null,8,["modelValue"])]),_:1}),c(D)?b("",!0):(r(),k(j,{key:0,label:"Email (must be registered with on Jesse.Trade)",help:"Enter your email address for us to know who sent the feedback and possibly reply back to you. It must be the email address of your account on Jesse.Trade",required:""},{default:C(()=>[g(W,{modelValue:c(h).email,"onUpdate:modelValue":d[2]||(d[2]=n=>c(h).email=n),placeholder:"Email address...",type:"email"},null,8,["modelValue"])]),_:1})),c(q)?(r(),k(F,{key:1,modelValue:c(h).attachLogs,"onUpdate:modelValue":d[3]||(d[3]=n=>c(h).attachLogs=n),title:"Attach Debugging Logs",help:"Attach the log file of this session along with this report which helps Jesse's team"},null,8,["modelValue"])):b("",!0),a("div",Se,[g(t,{id:"feedback-cancel-button",color:"gray",variant:"link",class:"mr-8",label:"Cancel",onClick:d[4]||(d[4]=n=>y.value=!1)}),g(t,{id:"feedback-submit-button",type:"submit",class:"w-48 flex justify-center",label:"Submit",loading:c(S),disabled:!c(h).email.length&&!c(D)},null,8,["loading","disabled"])])]),_:1},8,["state"])]),_:1},8,["modelValue"]),g(v,{title:"Exception"},{default:C(()=>[a("button",{type:"button",class:"inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-l-full text-gray-700 dark:text-gray-100 bg-white dark:bg-backdrop-dark hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none",onClick:P},[g(c(ve),{class:"-ml-1.5 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"}),d[9]||(d[9]=a("span",null,"Report",-1))]),a("button",{type:"button",class:"inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-r-full text-gray-700 dark:text-gray-100 bg-white dark:bg-backdrop-dark hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none",onClick:A},[c(l)?(r(),k(c(me),{key:0,class:"-ml-1.5 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"})):(r(),k(c(ke),{key:1,class:"-ml-1.5 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"})),a("span",null,x(c(l)?"Copied":"Copy"),1)])]),_:1}),a("div",Te,[a("div",De,[a("div",Ue,[g(c(xe),{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),a("div",Be,[a("h3",{class:"text-base font-medium text-red-800 mb-6",textContent:x(p.title)},null,8,Le),p.content?(r(),i("pre",{key:0,class:"mt-2 text-sm text-red-700 whitespace-pre-line px-6 py-6 rounded-md border-2 border-dashed border-red-200",innerHTML:p.content},null,8,je)):b("",!0)])]),ee(a("textarea",{id:"exception-info",value:p.content,class:"fixed left-0 bottom-0 opacity-0"},null,8,ze),[[te,c(B)]])])],64)}}});function G(p,e){return r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"fill-rule":"evenodd",d:"M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z","clip-rule":"evenodd"})])}const Oe={id:"routes-section",class:"select-none"},qe={class:"w-full flex justify-center"},bt=V({__name:"Routes",props:{mode:{},timeframes:{},symbols:{},form:{},results:{},totalRoutesError:{}},setup(p){const e=p,y=R([]),f=R(""),s=K(),h=R({data_routes:e.form.data_routes}),B=R({routes:e.form.routes}),l=X({uniqueRoutesErrorMessage:"each exchange-symbol pair can be traded only once! More info: https://docs.jesse.trade/docs/routes.html#trading-multiple-routes",maxSymbolLengthErrorMessage:"Maximum symbol length is exceeded!",mustContainDashErrorMessage:'Symbol parameter must contain "-" character!',timeframeMustBeDifferentErrorMessage:"Data routes' timeframe and trading routes' timeframe must be different",emptyParameter:"You must fill all the parameters",invalidSymbol:"Symbol is invalid"}),S=M(()=>s.strategies);ge(()=>{h.value={data_routes:e.form.data_routes},B.value={routes:e.form.routes},T(),q()});function T(){e.form.routes.length||e.form.routes.push({symbol:"",timeframe:s.jesseSupportedTimeframes.includes("4h")?"4h":s.jesseSupportedTimeframes[s.jesseSupportedTimeframes.length-1],strategy:s.strategies[0]})}function q(){e.totalRoutesError.splice(0,e.totalRoutesError.length);for(const n of e.form.routes)D(n);if(e.form.data_routes.length>0)for(const n of e.form.data_routes)D(n);let t=!1;const o=e.form.routes;for(const n of o.slice(0,-1)){if(e.totalRoutesError.includes(l.uniqueRoutesErrorMessage)||t)break;for(const w of o.slice(o.indexOf(n)+1))if(n.strategy===w.strategy&&n.symbol===w.symbol&&n.symbol.length!==0){e.totalRoutesError.push(l.uniqueRoutesErrorMessage),t=!1;break}}let _=!1;const v=e.form.data_routes;for(const n of v.slice(0,-1)){if(e.totalRoutesError.includes(l.uniqueRoutesErrorMessage)||_)break;for(const w of v.slice(v.indexOf(n)+1))if(n.timeframe===w.timeframe&&n.symbol===w.symbol){e.totalRoutesError.push(l.uniqueRoutesErrorMessage),_=!0;break}}if(e.form.data_routes.length>0)for(const n of v){if(e.totalRoutesError.includes(l.timeframeMustBeDifferentErrorMessage)||t)break;for(const w of e.form.routes)if(n.symbol===w.symbol&&n.timeframe===w.timeframe){e.totalRoutesError.push(l.timeframeMustBeDifferentErrorMessage),_=!0;break}}}function D(t){!e.totalRoutesError.includes(l.emptyParameter)&&(t.symbol.length==0||t.timeframe.length==0)&&e.totalRoutesError.push(l.emptyParameter)}function H(){e.form.routes.push({symbol:"",timeframe:s.jesseSupportedTimeframes.includes("4h")?"4h":s.jesseSupportedTimeframes[s.jesseSupportedTimeframes.length-1],strategy:s.strategies[0]})}function A(){e.form.data_routes.push({symbol:"",timeframe:s.jesseSupportedTimeframes.includes("4h")?"4h":s.jesseSupportedTimeframes[s.jesseSupportedTimeframes.length-1]})}function P(t){const o=e.form.routes.indexOf(t);e.form.routes.length!==1&&o>-1&&e.form.routes.splice(o,1)}function L(t){const o=e.form.data_routes.indexOf(t);e.form.data_routes.length!==0&&o>-1&&e.form.data_routes.splice(o,1)}function d(t){const o=e.form.routes.indexOf(t),_={strategy:t.strategy,symbol:"",timeframe:t.timeframe};e.form.routes.splice(o+1,0,_)}function $(t){const o=e.form.data_routes.indexOf(t),_={symbol:"",timeframe:t.timeframe};e.form.data_routes.splice(o+1,0,_)}function N(t){const o=e.form.routes.indexOf(t);o!==0&&(e.form.routes[o]=e.form.routes[o-1],e.form.routes[o-1]=t)}function j(t){const o=e.form.data_routes.indexOf(t);o!==0&&(e.form.data_routes[o]=e.form.data_routes[o-1],e.form.data_routes[o-1]=t)}function W(t){const o=e.form.routes.indexOf(t);o!==e.form.routes.length-1&&(e.form.routes[o]=e.form.routes[o+1],e.form.routes[o+1]=t)}function F(t){const o=e.form.data_routes.indexOf(t);o!==e.form.data_routes.length-1&&(e.form.data_routes[o]=e.form.data_routes[o+1],e.form.data_routes[o+1]=t)}return ye(()=>f.value,t=>{if(t.length==0){y.value=[];return}const o=[];for(const _ of e.symbols){if(o.length>50)break;_.toLowerCase().startsWith(t.toLowerCase())&&o.push(_)}y.value=o}),(t,o)=>{const _=oe,v=_e,n=Q,w=he;return r(),i("div",Oe,[g(_,{title:"Routes"},{default:C(()=>[a("div",qe,[a("button",{type:"button",class:"inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 dark:border-gray-900 text-sm leading-5 font-medium rounded-l-full text-gray-700 dark:text-gray-100 bg-white dark:bg-backdrop-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none",onClick:H},[g(c(G),{class:"-ml-1.5 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"}),o[4]||(o[4]=a("span",null,"Trading Route",-1))]),a("button",{type:"button",class:"inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 dark:border-gray-900 text-sm leading-5 font-medium rounded-r-full text-gray-700 dark:text-gray-100 bg-white dark:bg-backdrop-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none",onClick:A},[g(c(G),{class:"-ml-1.5 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"}),o[5]||(o[5]=a("span",null,"Data Route",-1))])])]),_:1}),(r(!0),i(E,null,U(t.form.routes,(u,J)=>(r(),i("div",{key:u.symbol+J,class:"flex mt-4"},[g(v,{modelValue:u.symbol,"onUpdate:modelValue":m=>u.symbol=m,query:f.value,"onUpdate:query":o[0]||(o[0]=m=>f.value=m),"clear-search-on-close":"",class:"w-full",ui:{rounded:"rounded-none rounded-l"},searchable:"","searchable-placeholder":"Search symbols...",size:"lg",options:y.value,placeholder:"Select a symbol...",onChange:o[1]||(o[1]=m=>f.value="")},{empty:C(()=>o[6]||(o[6]=[Z("Start typing...")])),_:2},1032,["modelValue","onUpdate:modelValue","query","options"]),g(v,{modelValue:u.timeframe,"onUpdate:modelValue":m=>u.timeframe=m,class:"w-full",ui:{rounded:"rounded-none"},size:"lg","value-attribute":"value",options:t.timeframes},null,8,["modelValue","onUpdate:modelValue","options"]),g(v,{modelValue:u.strategy,"onUpdate:modelValue":m=>u.strategy=m,class:"w-full",ui:{rounded:"rounded-none rounded-r"},size:"lg",options:S.value,searchable:""},null,8,["modelValue","onUpdate:modelValue","options"]),t.form.routes.length>1?(r(),k(n,{key:0,class:"",size:"lg",variant:"link",color:"gray",icon:"i-heroicons-trash",disabled:t.form.routes.length===1,onClick:m=>P(u)},null,8,["disabled","onClick"])):b("",!0),t.form.routes.length>1?(r(),k(n,{key:1,class:"",size:"lg",variant:"link",color:"gray",icon:"i-heroicons-document-duplicate",disabled:t.form.routes.length===1,onClick:m=>d(u)},null,8,["disabled","onClick"])):b("",!0),t.form.routes.length>1?(r(),k(n,{key:2,class:"",size:"lg",variant:"link",color:"gray",icon:"i-heroicons-arrow-down",disabled:t.form.routes.indexOf(u)===t.form.routes.length-1,onClick:m=>W(u)},null,8,["disabled","onClick"])):b("",!0),t.form.routes.length>1?(r(),k(n,{key:3,class:"",size:"lg",variant:"link",color:"gray",icon:"i-heroicons-arrow-up",disabled:t.form.routes.indexOf(u)===0,onClick:m=>N(u)},null,8,["disabled","onClick"])):b("",!0),g(n,{class:"",size:"lg",variant:"link",color:"gray",icon:"i-heroicons-code-bracket",to:`/strategies/${u.strategy}`},null,8,["to"])]))),128)),t.form.data_routes.length?(r(),k(w,{key:0,class:"mt-8 mb-4",title:"Data Routes"})):b("",!0),(r(!0),i(E,null,U(t.form.data_routes,(u,J)=>(r(),i("div",{key:u.symbol+J+u.timeframe,class:"flex mt-4"},[g(v,{modelValue:u.symbol,"onUpdate:modelValue":m=>u.symbol=m,query:f.value,"onUpdate:query":o[2]||(o[2]=m=>f.value=m),"clear-search-on-close":"",class:"w-full",ui:{rounded:"rounded-none rounded-l"},searchable:"",size:"lg",options:y.value,placeholder:"Select a symbol...",onChange:o[3]||(o[3]=m=>f.value="")},{empty:C(()=>o[7]||(o[7]=[Z("Start typing...")])),_:2},1032,["modelValue","onUpdate:modelValue","query","options"]),g(v,{modelValue:u.timeframe,"onUpdate:modelValue":m=>u.timeframe=m,class:"w-full",ui:{rounded:"rounded-none rounded-r"},size:"lg","value-attribute":"value",options:t.timeframes},null,8,["modelValue","onUpdate:modelValue","options"]),g(n,{size:"lg",variant:"link",color:"gray",icon:"i-heroicons-trash",onClick:m=>L(u)},null,8,["onClick"]),t.form.routes.length>1?(r(),k(n,{key:0,class:"",size:"lg",variant:"link",color:"gray",icon:"i-heroicons-document-duplicate",onClick:m=>$(u)},null,8,["onClick"])):b("",!0),t.form.data_routes.length>1?(r(),k(n,{key:1,class:"",size:"lg",variant:"link",color:"gray",icon:"i-heroicons-arrow-down",disabled:t.form.data_routes.indexOf(u)===t.form.data_routes.length-1,onClick:m=>F(u)},null,8,["disabled","onClick"])):b("",!0),t.form.data_routes.length>1?(r(),k(n,{key:2,class:"",size:"lg",variant:"link",color:"gray",icon:"i-heroicons-arrow-up",disabled:t.form.data_routes.indexOf(u)===0,onClick:m=>j(u)},null,8,["disabled","onClick"])):b("",!0)]))),128))])}}}),He=["textContent"],Ae=V({__name:"Tooltip",props:{title:{}},setup(p){const e=R(!1),y=()=>{e.value=!0},f=()=>{e.value=!1};return(s,h)=>(r(),i("span",{class:"relative underline",onMouseenter:y,onMouseleave:f},[ee(a("span",{class:"absolute -top-10 z-90 bg-gray-900 rounded px-2 py-1 text-sm text-white",textContent:x(s.title)},null,8,He),[[te,c(e)]]),O(s.$slots,"default")],32))}}),Pe={class:"flex flex-col select-none"},Ne={class:"-my-2 overflow-x-auto"},We={class:"py-2 align-middle inline-block min-w-full"},Fe={class:"border dark:border-gray-600 overflow-hidden sm:rounded"},Je={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-600 hide-scroll overflow-x-scroll"},Ye={key:0,class:"bg-gray-100 dark:bg-gray-800 select-none"},Ze={key:1},Ge=["textContent"],Ie=["textContent"],Ke=["textContent"],Xe={key:1},Qe=["textContent"],et=["textContent"],tt=["textContent"],ot={key:0,class:"text-center text-xs dark:bg-gray-700 py-4 opacity-30 dark:opacity-75 select-none"},_t=V({__name:"MultipleValuesTable",props:{header:{type:Boolean},data:{},headerItems:{}},setup(p){return(e,y)=>{const f=Ae;return r(),i("div",Pe,[a("div",Ne,[a("div",We,[a("div",Fe,[a("table",Je,[e.header?(r(),i("thead",Ye,[a("tr",null,[(r(!0),i(E,null,U(e.headerItems,s=>(r(),i("th",{key:s,scope:"col",class:"px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400"},x(s),1))),128))])])):b("",!0),e.data.length?(r(),i("tbody",Ze,[(r(!0),i(E,null,U(e.data,(s,h)=>(r(),i("tr",{key:h,class:Y(["text-gray-900 dark:text-gray-200",h%2===0?"bg-white dark:bg-backdrop-dark":"bg-gray-50 dark:bg-gray-700"])},[(r(!0),i(E,null,U(s,(B,l)=>(r(),i("td",{key:l,class:Y(["px-6 py-4 whitespace-nowrap text-sm font-medium",s[l].style])},[s[l].tooltip?(r(),k(f,{key:0,title:s[l].tooltip},{default:C(()=>[s[l].tag==="code"?(r(),i("code",{key:0,class:"rounded border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 select-text text-sm dark:text-gray-300 w-full px-4 sm:px-6 py-2",textContent:x(s[l].value===0?"":s[l].value)},null,8,Ge)):s[l].tag==="pre"?(r(),i("pre",{key:1,class:"whitespace-pre-line rounded border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 select-text text-sm dark:text-gray-300 w-full px-4 sm:px-6 py-2",textContent:x(s[l].value===0?"":s[l].value)},null,8,Ie)):(r(),i("span",{key:2,textContent:x(s[l].value===0?"":s[l].value)},null,8,Ke))]),_:2},1032,["title"])):(r(),i("span",Xe,[s[l].tag==="code"?(r(),i("code",{key:0,class:"rounded border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 select-text text-sm dark:text-gray-300 w-full px-4 sm:px-6 py-2",textContent:x(s[l].value===0?"":s[l].value)},null,8,Qe)):s[l].tag==="pre"?(r(),i("pre",{key:1,class:"whitespace-pre-line rounded border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 select-text text-sm dark:text-gray-300 w-full px-4 sm:px-6 py-2",textContent:x(s[l].value===0?"":s[l].value)},null,8,et)):(r(),i("span",{key:2,textContent:x(s[l].value===0?"":s[l].value)},null,8,tt))]))],2))),128))],2))),128))])):b("",!0)]),e.data.length?b("",!0):(r(),i("div",ot," Empty List "))])])])])}}}),rt={},st={class:"grid grid-cols-1 gap-4 items-start lg:grid-cols-3 p-6"},at={class:"grid grid-cols-1 gap-4 lg:col-span-2 px-1"},nt={"aria-labelledby":"section-1-title"},lt={class:"rounded-lg"},it={class:"grid grid-cols-1 gap-4"},dt={"aria-labelledby":"section-2-title"};function ut(p,e){return r(),i("div",st,[a("div",at,[a("section",nt,[a("div",lt,[O(p.$slots,"left")])])]),a("div",it,[a("section",dt,[O(p.$slots,"right")])])])}const kt=I(rt,[["render",ut]]);export{gt as _,yt as a,ht as b,_t as c,bt as d,kt as e,oe as f,ke as r};
