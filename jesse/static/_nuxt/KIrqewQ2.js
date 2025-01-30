import{_ as Ee}from"./fRbb9zQd.js";import{r as ze,_ as Ue,a as Oe,b as Ie,c as Me,d as Be,e as De}from"./D3O7zjU2.js";import{g as Y,h as ke,i as x,r as z,j as W,k as ce,l as _e,o as r,c as h,b as w,F as Q,m as we,n as Ne,t as H,p as Pe,q as S,w as E,d as o,s as ge,v as Ce,x as We,y as qe,z as xe,A as P,B as s,C as g,D as ne,E as Fe,G as Ve,H as Ae,I as pe,J as Je,K as ie,P as G,e as he,L as oe,M as Ge,N as He,O as Qe,Q as Ye,R as Xe,S as Ze,T as Ke,U as et,V as tt}from"./BE3918HX.js";import{_ as st}from"./CJ7BYX5q.js";import{_ as ot}from"./C48FucfZ.js";import{T as ue,l as be,d as ve,s as le,_ as lt}from"./_p9D1TUX.js";import{_ as rt}from"./7PRTSvrL.js";import{u as at}from"./LWo86vlg.js";import"./WOrYCIn5.js";import"./B7mhvNun.js";const ye={width:800,height:400,priceScale:{borderColor:"rgba(197, 203, 206, 1)"},timeScale:{borderColor:"rgba(197, 203, 206, 1)",timeVisible:!0,secondsVisible:!1}},nt={chart:{layout:{background:{color:"#ffffff"},textColor:"rgba(33, 56, 77, 1)"},grid:{vertLines:{color:"#f1f1f1",visible:!0},horzLines:{color:"#f1f1f1",visible:!0}},priceScale:{borderColor:"rgba(197, 203, 206, 0.6)"},timeScale:{borderColor:"rgba(197, 203, 206, 0.6)",timeVisible:!0,secondsVisible:!1}}},it={chart:{layout:{background:{color:"#333333"},textColor:"#D1D5DB"},grid:{vertLines:{color:"#525252",visible:!0},horzLines:{color:"#525252",visible:!0}},priceScale:{borderColor:"#525252"},timeScale:{borderColor:"#525252",timeVisible:!0,secondsVisible:!1}}},ut={class:"mt-2"},ct={class:"ml-2"},dt=Y({__name:"EquityCurve",props:{data:{}},setup(O){const l=ke(),c=x(()=>l.value),u=z();let m=null,v=[];const i=O;W(i.data,n=>{}),W(c,n=>{p(n)}),ce(async()=>{await f()});async function f(){ye.width=u.value.clientWidth,m=ue(u.value,ye);for(const n of i.data){const y=m.addLineSeries({lineWidth:2});y.setData(n.data),v.push(y)}m.timeScale().fitContent(),p(c.value)}_e(()=>{k()});function k(){m!==null&&(m.remove(),m=null),v&&(v=[])}function p(n){m===null||v===null||m.applyOptions(n==="light"?nt.chart:it.chart)}return(n,y)=>(r(),h(Q,null,[w("div",{ref_key:"chartContainer",ref:u,class:"rounded overflow-hidden border-2 border-gray-100 dark:border-gray-600"},null,512),w("div",ut,[(r(!0),h(Q,null,we(n.data,V=>(r(),h("span",{key:V.name,class:"text-xs mr-2 rounded bg-white dark:bg-gray-700 p-1"},[w("span",{class:"inline-block",style:Ne({backgroundColor:V.color,width:"25px",height:"10px"})},null,4),w("span",ct,H(V.name),1)]))),128))])],64))}}),mt={class:"flex items-center justify-between"},ft=Y({__name:"FullscreenModal",props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:["update:modelValue"],setup(O){const l=Pe(O,"modelValue");return(c,u)=>{const m=Ce,v=We,i=qe;return r(),S(i,{modelValue:l.value,"onUpdate:modelValue":u[1]||(u[1]=f=>l.value=f),fullscreen:""},{default:E(()=>[o(v,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow"}}},{header:E(()=>[w("div",mt,[w("div",null,[ge(c.$slots,"title")]),o(m,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:u[0]||(u[0]=f=>l.value=!1)})])]),default:E(()=>[ge(c.$slots,"default")]),_:3})]),_:3},8,["modelValue"])}}}),gt={class:"flex flex-col h-full border dark:border-gray-800"},pt={key:0},ht=Y({__name:"BacktestCandlesChart",props:{form:{},results:{}},setup(O){const l=ke(),c=z(2),u=O,m=z(),v=z([]);let i=null,f=null;const k=[],p=[],n=x(()=>xe().params.id),y=x(()=>P.extraChartLines[n.value].find(b=>b.symbol===u.results.selectedRoute.symbol)),V=x(()=>l.value);W(V,b=>{Z(b)}),W(()=>u.results.selectedRoute.symbol,()=>{N(),setTimeout(async()=>{await $()},100)}),ce(async()=>{setTimeout(async()=>{await $()},200)});async function $(){var ee,T,te,se;le.width=m.value.clientWidth,le.height=m.value.clientHeight-Object.keys(y.value.charts).length*150,i=ue(m.value,le),i.applyOptions({rightPriceScale:{borderColor:V.value==="light"?"#d1d4dc":"#4b5563",minimumWidth:80},watermark:{visible:!0,fontSize:16,horzAlign:"left",vertAlign:"bottom",color:"#888",text:`${u.results.selectedRoute.symbol} • ${u.results.selectedRoute.timeframe}`}}),f=i.addCandlestickSeries();const b=P.candles[n.value].find(d=>d.symbol===u.results.selectedRoute.symbol).candles;f.setData(b),f.setMarkers(P.orders[n.value].find(d=>d.symbol===u.results.selectedRoute.symbol).orders);const L=String(b[0].open).indexOf("."),R=L===-1?0:String(b[b.length-1].open).length-L-1;c.value!==R&&(c.value=R,(c.value<0||c.value>100)&&(c.value=0),f.applyOptions({priceFormat:{type:"price",precision:c.value,minMove:Math.pow(10,-c.value).toFixed(c.value)}}));const F=(T=(ee=P.lines[n.value])==null?void 0:ee.find(d=>d.symbol===u.results.selectedRoute.symbol))==null?void 0:T.lines;if(F)for(const d of Object.keys(F)){const C=F[d];i.addLineSeries({lineWidth:1,title:d}).setData(C.data)}const A=(se=(te=P.horizontalLines[n.value])==null?void 0:te.find(d=>d.symbol===u.results.selectedRoute.symbol))==null?void 0:se.lines;if(A)for(const d of Object.keys(A)){const j=A[d];f.createPriceLine(j)}i.timeScale().fitContent();const K=new Set;Object.keys(y.value.charts).forEach((d,C)=>{const j={...le};j.width=v.value[C].clientWidth,j.height=150;const e=ue(v.value[C],j);k.push(e),Object.keys(y.value.charts[d]).forEach(t=>{var M,_;const U=e.addLineSeries({lineWidth:1,title:t}),I=(_=(M=P.horizontalExtraLines[n.value])==null?void 0:M.find(J=>J.symbol===u.results.selectedRoute.symbol))==null?void 0:_.lines[d];if(I&&!K.has(d)){for(const J of Object.keys(I)){const B=I[J];U.createPriceLine(B)}K.add(d)}U.setData(y.value.charts[d][t].data),p.push(U)}),e.applyOptions({rightPriceScale:{borderColor:V.value==="light"?"#d1d4dc":"#4b5563",minimumWidth:80},watermark:{visible:!0,fontSize:16,horzAlign:"left",vertAlign:"bottom",color:"#888",text:d}}),e.timeScale().subscribeVisibleLogicalRangeChange(t=>{i.timeScale().setVisibleLogicalRange(t)}),C!==Object.keys(y.value.charts).length-1&&e.timeScale().applyOptions({visible:!1})}),i.subscribeCrosshairMove(d=>{const C=X(f,d);Object.keys(y.value.charts).forEach((j,e)=>{q(k[e],p[e],C)})}),Object.keys(y.value.charts).forEach((d,C)=>{k[C].subscribeCrosshairMove(j=>{const e=X(p[C],j);q(i,f,e),k.forEach((t,U)=>{U!==C&&q(t,p[U],e)})})}),i.timeScale().subscribeVisibleLogicalRangeChange(d=>{k.forEach(C=>{C.timeScale().setVisibleLogicalRange(d)})}),Z(V.value),k.length>0&&i.timeScale().applyOptions({visible:!1})}_e(()=>{N()});function X(b,L){return L.time&&L.seriesData.get(b)||null}function q(b,L,R){if(R){b.setCrosshairPosition(R.value,R.time,L);return}b.clearCrosshairPosition()}function N(){i!==null&&(i.remove(),i=null),f!==null&&(f=null),k.length>0&&(k.forEach(b=>{b.remove()}),k.length=0),p.length>0&&(p.length=0)}function Z(b){i!==null&&(i.applyOptions(b==="light"?be.chart:ve.chart),k.forEach(L=>{L.applyOptions(b==="light"?be.chart:ve.chart)}))}return(b,L)=>(r(),h("div",gt,[w("div",{ref_key:"chartContainer",ref:m,class:"rounded overflow-hidden flex-grow"},null,512),s(y)&&Object.keys(s(y).charts).length?(r(),h("div",pt,[(r(!0),h(Q,null,we(Object.keys(s(y).charts),R=>(r(),h("div",{key:R,ref_for:!0,ref_key:"extraChartsRef",ref:v,class:"relative border-t-[1.5px] dark:border-gray-800"}))),128))])):g("",!0)]))}}),bt={key:0,class:"flex flex-col items-center justify-center select-none mt-[10%]"},vt=["textContent"],yt={class:"mt-8"},kt={class:"mt-8"},_t={key:0,class:"mt-4"},wt={key:1,class:"mx-auto container mt-8"},Ct={key:0},xt={class:"mb-4 mt-4"},Vt={class:"flex items-center select-none flex-1 my-4"},St={class:"grid grid-cols-1 gap-6 mt-8"},$t={key:1,class:"w-full mx-auto"},Lt={key:4,class:"text-yellow-500 border-yellow-400 bg-yellow-50 dark:bg-gray-700 dark:text-yellow-400 mt-16 text-center text-2xl rounded border-2 border-dashed dark:border-gray-800 py-16 select-none"},Rt={key:0},Tt={key:0},jt=["href"],Et=["href"],zt=["href"],Ut={key:5,class:"my-4"},Ot={key:1},It=Y({__name:"BacktestTab",props:{form:{},results:{}},setup(O){const l=O,c=z(!1),u=z([]),m=z(!1),v=z(!1),i=ne().authToken,f=z(Fe().public.apiBaseUrl),k=z(!1),p=x(()=>xe().params.id),n=Ve(),y=ne(),V=Ae(),$=z([]),X=x(()=>y.jesseSupportedTimeframes.map(e=>({label:e,value:e}))),q=x(()=>l.form.routes.map(e=>({label:`${e.strategy} • ${e.symbol}`,value:e})));l.results.selectedRoute=l.form.routes[0],ce(async()=>{await y.initiate(),!l.form.exchange&&y.backtestingExchangeNames.length&&(l.form.exchange=y.backtestingExchangeNames[0]),(!l.results.showResults&&l.form.exchange||!$.value.length)&&await N()});async function N(){if(l.form.exchange)try{$.value.length||($.value=await y.getExchangeSupportedSymbols(l.form.exchange));for(let e=0;e<l.form.routes.length;e++)$.value.includes(l.form.routes[e].symbol)||(l.form.routes[e].symbol=$.value[0]);if(l.form.data_routes.length>0)for(let e=0;e<l.form.data_routes.length;e++)$.value.includes(l.form.data_routes[e].symbol)||(l.form.data_routes[e].symbol=$.value[0])}catch(e){console.error("Error updating supported symbols:",e)}}W(()=>l.form.exchange,async(e,t)=>{e!==t&&($.value=[],await N())});const{cancel:Z,rerun:b,newBacktest:L}=n;function R(e){if(u.value.length){for(let t=0;t<u.value.length;t++)oe("error",u.value[t]);return}n.start(e)}const F=e=>{if(u.value.length){for(let t=0;t<u.value.length;t++)oe("error",u.value[t]);return}n.startInNewTab(e)},A=x(()=>{let e=`/download/backtest/tradingview/${l.results.generalInfo.session_id}?token=${i}`;return f.value!=="/"&&(e=f.value+e),e});x(()=>{let e=`/download/backtest/full-reports/${l.results.generalInfo.session_id}?token=${i}`;return f.value!=="/"&&(e=f.value+e),e});const K=x(()=>{let e=`/download/backtest/csv/${l.results.generalInfo.session_id}?token=${i}`;return f.value!=="/"&&(e=f.value+e),e}),ee=x(()=>{let e=`/download/backtest/json/${l.results.generalInfo.session_id}?token=${i}`;return f.value!=="/"&&(e=f.value+e),e}),T=x(()=>n.formattedMetrics(p.value).length>0),te=x(()=>pe.remainingTimeText(l.results.progressbar.estimated_remaining_seconds));function se(){navigator.clipboard.writeText(n.getInfoLogs(p.value)),oe("success","Logs copied successfully"),v.value=!0,setTimeout(()=>{v.value=!1},3e3)}W(()=>l.form.start_date,e=>{l.form.finish_date<e&&(l.form.finish_date=e)});async function d(){const e=n.missingCandlesErrors[p.value];e&&(V.forms.push({id:pe.uuid(),exchange:e.exchange,symbol:e.symbol,start_date:e.start_date,executing:!1,waiting:!1,progressbar:{current:0,estimated_remaining_seconds:0},exception:{error:"",traceback:""},alert:{message:"",type:""}}),await Ge("/candles/"),await V.start(V.forms[V.forms.length-1].id))}async function C(){n.getInfoLogs(p.value).length>0||await j(),c.value=!0}async function j(){const{data:e,error:t}=await He(`/logs/backtest/${p.value}?token=${i}`,!1);if(t.value){oe("error",t.value.message);return}const I=e.value.content.split(`
`).map(M=>{const _=M.match(/\[INFO \| (.*?)\] (.*)/);return _?`[${_[1]}] ${_[2]}`:M}).join(`
`);n.setInfoLogs(p.value,I)}return(e,t)=>{const U=Ue,I=Qe,M=Oe,_=Ce,J=Ie,re=st,B=Ye,de=ot,Se=Me,me=Xe,D=Ze,$e=dt,fe=Ke,Le=ft,ae=rt,Re=lt,Te=Be,je=De;return r(),h(Q,null,[o(I,{modelValue:s(c),"onUpdate:modelValue":t[0]||(t[0]=a=>ie(c)?c.value=a:null),title:"Logs"},{default:E(()=>[o(U,{logs:s(n).getInfoLogs(s(p))},null,8,["logs"])]),buttons:E(()=>[w("button",{class:"ml-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none",onClick:se},[s(v)?(r(),S(s(Je),{key:0,class:"h-6 w-6","aria-hidden":"true"})):g("",!0),!s(v)&&s(n).getInfoLogs(s(p)).length!=0?(r(),S(s(ze),{key:1,class:"h-6 w-6","aria-hidden":"true"})):g("",!0)])]),_:1},8,["modelValue"]),e.results.executing&&!e.results.showResults?(r(),h("div",bt,[w("div",null,[o(M,{progress:e.results.progressbar.current},null,8,["progress"])]),e.results.exception.error?g("",!0):(r(),h("h3",{key:0,class:"mt-8 animate-pulse",textContent:H(s(te))},null,8,vt)),w("div",yt,[w("div",kt,[o(_,{color:"gray",ui:{color:{gray:{solid:"text-rose-500 dark:text-rose-400"}}},class:"w-64 flex justify-center",icon:"i-heroicons-no-symbol",size:"xl",variant:"solid",label:"Cancel",trailing:!1,onClick:t[1]||(t[1]=a=>s(Z)((e._.provides[G]||e.$route).params.id))})]),e.form.debug_mode&&e.results.exception.error?(r(),h("div",_t,[o(_,{icon:"i-heroicons-clipboard-document-list",label:"Debugging Logs",color:"gray",size:"xl",variant:"solid",trailing:!1,class:"w-64 flex justify-center",onClick:C})])):g("",!0)]),e.results.exception.error&&e.results.executing?(r(),h("div",wt,[o(J,{modelValue:s(m),"onUpdate:modelValue":t[2]||(t[2]=a=>ie(m)?m.value=a:null),title:e.results.exception.error,content:e.results.exception.traceback,mode:"backtest","debug-mode":e.form.debug_mode},null,8,["modelValue","title","content","debug-mode"])])):g("",!0)])):g("",!0),o(je,null,{left:E(()=>[!e.results.executing&&!e.results.showResults?(r(),h("div",Ct,[s(n).missingCandlesErrors[s(p)]?(r(),S(re,{key:0,icon:"i-heroicons-exclamation-triangle",color:"rose",variant:"soft",class:"mb-4"},{title:E(()=>t[22]||(t[22]=[w("h3",{class:"text-lg font-semibold"},"Missing Required Warmup Candles",-1)])),description:E(()=>[w("p",xt,[t[23]||(t[23]=he(" Your strategy requires ")),t[24]||(t[24]=w("strong",{class:"font-bold"},"warmup candles",-1)),he(' for "'+H(s(n).missingCandlesErrors[s(p)].symbol)+'" on "'+H(s(n).missingCandlesErrors[s(p)].exchange)+'" starting from "'+H(s(n).missingCandlesErrors[s(p)].start_date)+'". These candles are needed for proper strategy initialization. ',1)]),o(_,{label:"Import Required Candles",icon:"i-heroicons-arrow-down-tray",onClick:d})]),_:1})):g("",!0),o(B,{class:"mb-4",title:"Exchange"}),o(de,{modelValue:e.form.exchange,"onUpdate:modelValue":t[3]||(t[3]=a=>e.form.exchange=a),placeholder:"Select an exchange...",searchable:"",options:s(ne)().backtestingExchangeNames,size:"lg",class:"mt-2 mb-16",onChange:N},null,8,["modelValue","options"]),o(Se,{"total-routes-error":s(u),timeframes:s(X),form:e.form,results:e.results,symbols:s($),mode:"backtest"},null,8,["total-routes-error","timeframes","form","results","symbols"]),o(B,{class:"mt-16",title:"Duration"}),w("div",Vt,[o(me,{modelValue:e.form.start_date,"onUpdate:modelValue":t[4]||(t[4]=a=>e.form.start_date=a),type:"date",variant:"outline",size:"lg",class:"w-full mr-2"},null,8,["modelValue"]),o(me,{modelValue:e.form.finish_date,"onUpdate:modelValue":t[5]||(t[5]=a=>e.form.finish_date=a),type:"date",variant:"outline",size:"lg",class:"w-full ml-2"},null,8,["modelValue"])]),o(B,{class:"mt-16",title:"Options"}),w("div",St,[o(D,{modelValue:e.form.debug_mode,"onUpdate:modelValue":t[6]||(t[6]=a=>e.form.debug_mode=a),title:"Debug Mode",description:"Logs every step of the execution. Very helpful for debugging your strategy but takes a lot longer to execute"},null,8,["modelValue"]),o(D,{modelValue:e.form.export_chart,"onUpdate:modelValue":t[7]||(t[7]=a=>e.form.export_chart=a),title:"Generate Interactive Charts",description:"Generate interactive charts for backtest results with details."},null,8,["modelValue"]),o(D,{modelValue:e.form.export_tradingview,"onUpdate:modelValue":t[8]||(t[8]=a=>e.form.export_tradingview=a),title:"Export Tradingview",description:"Exports the executed trades in a format accepted by TradingView's Pine Editor. Useful to look at the executed orders on their chart."},null,8,["modelValue"]),o(D,{modelValue:e.form.export_csv,"onUpdate:modelValue":t[9]||(t[9]=a=>e.form.export_csv=a),title:"Export CSV",description:"Exports executed trades in a CSV format"},null,8,["modelValue"]),o(D,{modelValue:e.form.export_json,"onUpdate:modelValue":t[10]||(t[10]=a=>e.form.export_json=a),title:"Export JSON",description:"Exports executed trades in a JSON format"},null,8,["modelValue"]),o(D,{modelValue:e.form.fast_mode,"onUpdate:modelValue":t[11]||(t[11]=a=>e.form.fast_mode=a),title:"Fast Mode",description:"Runs the backtest faster by using an improved algorithm. This is supposed to yield the same results; however, it's currently experimental, which is why it's an option."},null,8,["modelValue"]),o(D,{modelValue:e.form.benchmark,"onUpdate:modelValue":t[12]||(t[12]=a=>e.form.benchmark=a),title:"Benchmark",description:"If enabled, the backtest will compare the performance of the strategy against the buy and hold strategy of the market."},null,8,["modelValue"])])])):g("",!0),e.results.showResults?(r(),h("div",$t,[w("div",null,[s(T)?(r(),S(B,{key:0,class:"mb-4",title:"Equity Curve"})):g("",!0),s(T)?(r(),S($e,{key:1,data:e.results.charts.equity_curve},null,8,["data"])):g("",!0),s(T)?(r(),S(B,{key:2,class:"mt-16 mb-4",title:"Performance"})):g("",!0),s(T)?(r(),S(fe,{key:3,data:s(n).formattedMetrics(s(p))},null,8,["data"])):g("",!0),s(T)?g("",!0):(r(),h("div",Lt," No trades were executed via this strategy! "))]),o(Le,{modelValue:s(k),"onUpdate:modelValue":t[14]||(t[14]=a=>ie(k)?k.value=a:null)},{title:E(()=>[o(de,{modelValue:e.results.selectedRoute,"onUpdate:modelValue":t[13]||(t[13]=a=>e.results.selectedRoute=a),"value-attribute":"value",options:s(q)},null,8,["modelValue","options"])]),default:E(()=>[o(ht,{results:e.results,form:e.form},null,8,["results","form"])]),_:1},8,["modelValue"])])):g("",!0)]),right:E(()=>[e.results.executing?g("",!0):(r(),h("div",Rt,[e.results.showResults?(r(),h("div",Tt,[o(_,{class:"w-full flex justify-center",icon:"i-heroicons-arrow-path",size:"xl",variant:"solid",label:"Rerun",trailing:!1,onClick:t[15]||(t[15]=a=>s(b)((e._.provides[G]||e.$route).params.id))}),o(_,{class:"w-full flex justify-center mt-4",color:"green",icon:"i-heroicons-arrow-uturn-left",size:"xl",variant:"solid",label:"New session",trailing:!1,onClick:t[16]||(t[16]=a=>s(L)((e._.provides[G]||e.$route).params.id))}),e.form.debug_mode?(r(),S(_,{key:0,class:"w-full flex justify-center mt-4",color:"gray",icon:"i-heroicons-clipboard-document-list",size:"xl",variant:"solid",label:"Debugging Logs",trailing:!1,onClick:t[17]||(t[17]=a=>C())})):g("",!0),e.form.export_chart?(r(),S(_,{key:1,class:"mt-4 flex justify-center items-center btn-secondary text-center",color:"gray",icon:"i-heroicons-chart-bar",size:"xl",block:"",variant:"solid",label:"View charts",trailing:!1,onClick:t[18]||(t[18]=a=>k.value=!0)})):g("",!0),e.form.export_csv&&s(T)?(r(),h("a",{key:2,href:s(K),target:"_blank",class:"flex justify-center items-center btn-secondary text-center w-full"},[o(_,{class:"w-full flex justify-center mt-4",color:"gray",icon:"i-heroicons-document-arrow-down",size:"xl",variant:"solid",label:"CSV",trailing:!1})],8,jt)):g("",!0),e.form.export_json&&s(T)?(r(),h("a",{key:3,href:s(ee),target:"_blank",class:"flex justify-center items-center btn-secondary text-center w-full"},[o(_,{class:"w-full flex justify-center mt-4",color:"gray",icon:"i-heroicons-document-arrow-down",size:"xl",variant:"solid",label:"JSON",trailing:!1})],8,Et)):g("",!0),e.form.export_tradingview&&s(T)?(r(),h("a",{key:4,href:s(A),target:"_blank",class:"flex justify-center items-center btn-secondary text-center mb-4 w-full"},[o(_,{class:"w-full flex justify-center mt-4",color:"gray",icon:"i-heroicons-document-arrow-down",size:"xl",variant:"solid",label:"TradingView Pine Editor",trailing:!1})],8,zt)):g("",!0),e.results.showResults&&e.results.alert&&e.results.alert.message?(r(),h("div",Ut,[o(re,{color:"teal",icon:"i-heroicons-check-circle",variant:"soft",title:e.results.alert.message,"close-button":{icon:"i-heroicons-x-mark-20-solid",color:"white",variant:"link"},onClose:t[19]||(t[19]=a=>e.results.alert.message="")},null,8,["title"])])):g("",!0),o(ae,{class:"mt-8 mb-4",size:"lg",label:"General Info"}),o(Re,{data:e.results.info},null,8,["data"]),o(ae,{class:"mt-8 mb-4",size:"lg",label:"Routes"}),o(Te,{data:e.results.routes_info,"header-items":["Symbol","Timeframe","Strategy"],header:""},null,8,["data"]),e.results.hyperparameters.length?(r(),S(ae,{key:6,class:"mt-8 mb-4",size:"lg",label:"Hyperparameters"})):g("",!0),e.results.hyperparameters.length?(r(),S(fe,{key:7,data:e.results.hyperparameters},null,8,["data"])):g("",!0)])):(r(),h("div",Ot,[o(_,{class:"w-full flex justify-center",icon:"i-heroicons-bolt",size:"xl",variant:"solid",label:"Start",trailing:!1,onClick:t[20]||(t[20]=a=>R((e._.provides[G]||e.$route).params.id))}),o(_,{class:"w-full flex justify-center mt-4",color:"gray",icon:"i-heroicons-plus",size:"xl",variant:"solid",label:"Start in a new tab",trailing:!1,onClick:t[21]||(t[21]=a=>F((e._.provides[G]||e.$route).params.id))})]))]))]),_:1})],64)}}}),Mt={class:"w-full"},Ht=Y({__name:"[id]",setup(O){at({title:"Backtest - Jesse"});const l=Ve(),c=x(()=>l.tabs),u=x(()=>et().params.id),m=x(()=>{if(!c.value[u.value]){const v=Object.keys(c.value);if(v.length>0){const i=c.value[v[0]];return tt().push(`/backtest/${i.id}`),i}}return c.value[u.value]});return Object.keys(c.value).length===0&&l.addTab(),(v,i)=>{const f=Ee,k=It;return r(),h(Q,null,[w("div",Mt,[o(f,{"current-tab":m.value?m.value.id:null,tabs:c.value,mode:"backtest",onClose:s(l).closeTab,onCancel:s(l).cancel},null,8,["current-tab","tabs","onClose","onCancel"])]),m.value?(r(),S(k,{key:0,form:m.value.form,results:m.value.results},null,8,["form","results"])):g("",!0)],64)}}});export{Ht as default};
