import{ae as Ne,h as Y,r as O,j as I,af as fe,ag as d,ah as ge,ai as W,aj as De,ak as Re,al as te,am as He,an as ze,ao as ye,ap as Ge,aq as Ke,ar as qe,as as Je,at as L,au as me,F as Q,av as X,l as ne,m as Ie,aw as Qe,ax as Be,ay as de,az as ce,aA as z,aB as V,aC as We,aD as ke,aE as be,aF as H,aG as x,aH as pe,a6 as Fe,a7 as ae,a as Ae,a8 as Oe,a9 as oe,aI as ve,aJ as Ye,k as we,aK as Ze,aL as le,o as h,v as N,w as U,d as T,Z as E,x as q,b as P,aM as Pe,ad as M,c as D,E as _,q as Xe,aN as et,aO as Ue,y as he,aP as je,aQ as tt,aR as se,n as re,t as J,a4 as at,e as ot,aS as Ce,J as nt,G as lt,N as K,T as st,z as rt,a1 as $e,a2 as Ee,D as ie,a0 as it}from"./B0OuR9xi.js";import{_ as ut}from"./BmrREbtp.js";import{_ as _e}from"./DP_FvpL9.js";const dt={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}},ct={wrapper:"relative",container:"z-50 group",trigger:"inline-flex w-full",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},overlay:{base:"fixed inset-0 transition-opacity z-50",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enterActiveClass:"ease-out duration-200",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in duration-150",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:Ne};var pt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(pt||{});let Me=Symbol("PopoverContext");function Se(e){let i=be(Me,null);if(i===null){let w=new Error(`<${e} /> is missing a parent <${Le.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(w,Se),w}return i}let vt=Symbol("PopoverGroupContext");function Ve(){return be(vt,null)}let xe=Symbol("PopoverPanelContext");function ft(){return be(xe,null)}let Le=Y({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:i,attrs:w,expose:B}){var C;let $=O(null);B({el:$,$el:$});let t=O(1),n=O(null),v=O(null),f=O(null),s=O(null),m=I(()=>fe($)),S=I(()=>{var a,r;if(!d(n)||!d(s))return!1;for(let G of document.querySelectorAll("body > *"))if(Number(G==null?void 0:G.contains(d(n)))^Number(G==null?void 0:G.contains(d(s))))return!0;let p=ge(),u=p.indexOf(d(n)),A=(u+p.length-1)%p.length,j=(u+1)%p.length,Z=p[A],ee=p[j];return!((a=d(s))!=null&&a.contains(Z))&&!((r=d(s))!=null&&r.contains(ee))}),k={popoverState:t,buttonId:O(null),panelId:O(null),panel:s,button:n,isPortalled:S,beforePanelSentinel:v,afterPanelSentinel:f,togglePopover(){t.value=W(t.value,{0:1,1:0})},closePopover(){t.value!==1&&(t.value=1)},close(a){k.closePopover();let r=a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?d(a):d(k.button):d(k.button);r==null||r.focus()}};De(Me,k),Re(I(()=>W(t.value,{0:te.Open,1:te.Closed})));let F={buttonId:k.buttonId,panelId:k.panelId,close(){k.closePopover()}},l=Ve(),c=l==null?void 0:l.registerPopover,[g,y]=He(),b=ze({mainTreeNodeRef:l==null?void 0:l.mainTreeNodeRef,portals:g,defaultContainers:[n,s]});function o(){var a,r,p,u;return(u=l==null?void 0:l.isFocusWithinPopoverGroup())!=null?u:((a=m.value)==null?void 0:a.activeElement)&&(((r=d(n))==null?void 0:r.contains(m.value.activeElement))||((p=d(s))==null?void 0:p.contains(m.value.activeElement)))}return ye(()=>c==null?void 0:c(F)),Ge((C=m.value)==null?void 0:C.defaultView,"focus",a=>{var r,p;a.target!==window&&a.target instanceof HTMLElement&&t.value===0&&(o()||n&&s&&(b.contains(a.target)||(r=d(k.beforePanelSentinel))!=null&&r.contains(a.target)||(p=d(k.afterPanelSentinel))!=null&&p.contains(a.target)||k.closePopover()))},!0),Ke(b.resolveContainers,(a,r)=>{var p;k.closePopover(),qe(r,Je.Loose)||(a.preventDefault(),(p=d(n))==null||p.focus())},I(()=>t.value===0)),()=>{let a={open:t.value===0,close:k.close};return L(Q,[L(y,{},()=>me({theirProps:{...e,...w},ourProps:{ref:$},slot:a,slots:i,attrs:w,name:"Popover"})),L(b.MainTreeNode)])}}}),gt=Y({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:i,slots:w,expose:B}){var C;let $=(C=e.id)!=null?C:`headlessui-popover-button-${X()}`,t=Se("PopoverButton"),n=I(()=>fe(t.button));B({el:t.button,$el:t.button}),ne(()=>{t.buttonId.value=$}),Ie(()=>{t.buttonId.value=null});let v=Ve(),f=v==null?void 0:v.closeOthers,s=ft(),m=I(()=>s===null?!1:s.value===t.panelId.value),S=O(null),k=`headlessui-focus-sentinel-${X()}`;m.value||ye(()=>{t.button.value=d(S)});let F=Qe(I(()=>({as:e.as,type:i.type})),S);function l(a){var r,p,u,A,j;if(m.value){if(t.popoverState.value===1)return;switch(a.key){case H.Space:case H.Enter:a.preventDefault(),(p=(r=a.target).click)==null||p.call(r),t.closePopover(),(u=d(t.button))==null||u.focus();break}}else switch(a.key){case H.Space:case H.Enter:a.preventDefault(),a.stopPropagation(),t.popoverState.value===1&&(f==null||f(t.buttonId.value)),t.togglePopover();break;case H.Escape:if(t.popoverState.value!==0)return f==null?void 0:f(t.buttonId.value);if(!d(t.button)||(A=n.value)!=null&&A.activeElement&&!((j=d(t.button))!=null&&j.contains(n.value.activeElement)))return;a.preventDefault(),a.stopPropagation(),t.closePopover();break}}function c(a){m.value||a.key===H.Space&&a.preventDefault()}function g(a){var r,p;e.disabled||(m.value?(t.closePopover(),(r=d(t.button))==null||r.focus()):(a.preventDefault(),a.stopPropagation(),t.popoverState.value===1&&(f==null||f(t.buttonId.value)),t.togglePopover(),(p=d(t.button))==null||p.focus()))}function y(a){a.preventDefault(),a.stopPropagation()}let b=Be();function o(){let a=d(t.panel);if(!a)return;function r(){W(b.value,{[x.Forwards]:()=>z(a,V.First),[x.Backwards]:()=>z(a,V.Last)})===pe.Error&&z(ge().filter(p=>p.dataset.headlessuiFocusGuard!=="true"),W(b.value,{[x.Forwards]:V.Next,[x.Backwards]:V.Previous}),{relativeTo:d(t.button)})}r()}return()=>{let a=t.popoverState.value===0,r={open:a},{...p}=e,u=m.value?{ref:S,type:F.value,onKeydown:l,onClick:g}:{ref:S,id:$,type:F.value,"aria-expanded":t.popoverState.value===0,"aria-controls":d(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:l,onKeyup:c,onClick:g,onMousedown:y};return L(Q,[me({ourProps:u,theirProps:{...i,...p},slot:r,attrs:i,slots:w,name:"PopoverButton"}),a&&!m.value&&t.isPortalled.value&&L(de,{id:k,features:ce.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:o})])}}}),yt=Y({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:i,slots:w,expose:B}){var C;let $=(C=e.id)!=null?C:`headlessui-popover-panel-${X()}`,{focus:t}=e,n=Se("PopoverPanel"),v=I(()=>fe(n.panel)),f=`headlessui-focus-sentinel-before-${X()}`,s=`headlessui-focus-sentinel-after-${X()}`;B({el:n.panel,$el:n.panel}),ne(()=>{n.panelId.value=$}),Ie(()=>{n.panelId.value=null}),De(xe,n.panelId),ye(()=>{var y,b;if(!t||n.popoverState.value!==0||!n.panel)return;let o=(y=v.value)==null?void 0:y.activeElement;(b=d(n.panel))!=null&&b.contains(o)||z(d(n.panel),V.First)});let m=We(),S=I(()=>m!==null?(m.value&te.Open)===te.Open:n.popoverState.value===0);function k(y){var b,o;switch(y.key){case H.Escape:if(n.popoverState.value!==0||!d(n.panel)||v.value&&!((b=d(n.panel))!=null&&b.contains(v.value.activeElement)))return;y.preventDefault(),y.stopPropagation(),n.closePopover(),(o=d(n.button))==null||o.focus();break}}function F(y){var b,o,a,r,p;let u=y.relatedTarget;u&&d(n.panel)&&((b=d(n.panel))!=null&&b.contains(u)||(n.closePopover(),((a=(o=d(n.beforePanelSentinel))==null?void 0:o.contains)!=null&&a.call(o,u)||(p=(r=d(n.afterPanelSentinel))==null?void 0:r.contains)!=null&&p.call(r,u))&&u.focus({preventScroll:!0})))}let l=Be();function c(){let y=d(n.panel);if(!y)return;function b(){W(l.value,{[x.Forwards]:()=>{var o;z(y,V.First)===pe.Error&&((o=d(n.afterPanelSentinel))==null||o.focus())},[x.Backwards]:()=>{var o;(o=d(n.button))==null||o.focus({preventScroll:!0})}})}b()}function g(){let y=d(n.panel);if(!y)return;function b(){W(l.value,{[x.Forwards]:()=>{let o=d(n.button),a=d(n.panel);if(!o)return;let r=ge(),p=r.indexOf(o),u=r.slice(0,p+1),A=[...r.slice(p+1),...u];for(let j of A.slice())if(j.dataset.headlessuiFocusGuard==="true"||a!=null&&a.contains(j)){let Z=A.indexOf(j);Z!==-1&&A.splice(Z,1)}z(A,V.First,{sorted:!1})},[x.Backwards]:()=>{var o;z(y,V.Previous)===pe.Error&&((o=d(n.button))==null||o.focus())}})}b()}return()=>{let y={open:n.popoverState.value===0,close:n.close},{focus:b,...o}=e,a={ref:n.panel,id:$,onKeydown:k,onFocusout:t&&n.popoverState.value===0?F:void 0,tabIndex:-1};return me({ourProps:a,theirProps:{...i,...o},attrs:i,slot:y,slots:{...w,default:(...r)=>{var p;return[L(Q,[S.value&&n.isPortalled.value&&L(de,{id:f,ref:n.beforePanelSentinel,features:ce.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:c}),(p=w.default)==null?void 0:p.call(w,...r),S.value&&n.isPortalled.value&&L(de,{id:s,ref:n.afterPanelSentinel,features:ce.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:g})])]}},features:ke.RenderStrategy|ke.Static,visible:S.value,name:"PopoverPanel"})}}});const ue=Fe(ae.ui.strategy,ae.ui.popover,ct),mt=Y({components:{HPopover:Le,HPopoverButton:gt,HPopoverPanel:yt},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:()=>ue.default.openDelay},closeDelay:{type:Number,default:()=>ue.default.closeDelay},overlay:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:i}){const{ui:w,attrs:B}=Oe("popover",oe(e,"ui"),ue,oe(e,"class")),C=I(()=>ve(e.mode==="hover"?{offsetDistance:0}:{},e.popper,w.value.popper)),[$,t]=Ye(C.value),n=O(null),v=O(null);let f=null,s=null;ne(()=>{var g,y;const l=(g=n.value)==null?void 0:g.$.provides;if(!l)return;const c=Object.getOwnPropertySymbols(l);v.value=c.length&&l[c[0]],e.open&&((y=v.value)==null||y.togglePopover())});const m=I(()=>{var y,b,o;if(e.mode!=="hover")return{};const l=((y=e.popper)==null?void 0:y.offsetDistance)||((b=w.value.popper)==null?void 0:b.offsetDistance)||8,c=(o=C.value.placement)==null?void 0:o.split("-")[0],g=`${l}px`;return c==="top"||c==="bottom"?{paddingTop:g,paddingBottom:g}:c==="left"||c==="right"?{paddingLeft:g,paddingRight:g}:{paddingTop:g,paddingBottom:g,paddingLeft:g,paddingRight:g}});function S(l){!l.cancelable||!v.value||(v.value.popoverState===0?v.value.closePopover():v.value.togglePopover())}function k(){e.mode!=="hover"||!v.value||(s&&(clearTimeout(s),s=null),v.value.popoverState!==0&&(f=f||setTimeout(()=>{v.value.togglePopover&&v.value.togglePopover(),f=null},e.openDelay)))}function F(){e.mode!=="hover"||!v.value||(f&&(clearTimeout(f),f=null),v.value.popoverState!==1&&(s=s||setTimeout(()=>{v.value.closePopover&&v.value.closePopover(),s=null},e.closeDelay)))}return we(()=>e.open,(l,c)=>{v.value&&(c===void 0||l===c||(l?v.value.popoverState=0:v.value.closePopover()))}),we(()=>{var l;return(l=v.value)==null?void 0:l.popoverState},(l,c)=>{c===void 0||l===c||i("update:open",l===0)}),Ze(()=>et("$dcv2Y3vSTA")),{ui:w,attrs:B,popover:n,popper:C,trigger:$,container:t,containerStyle:m,onTouchStart:S,onMouseEnter:k,onMouseLeave:F}}}),bt=["disabled"];function ht(e,i,w,B,C,$){const t=le("HPopoverButton"),n=le("HPopoverPanel"),v=le("HPopover");return h(),N(v,M({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:U(({open:f,close:s})=>[T(t,{ref:"trigger",as:"div",disabled:e.disabled,class:E(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:U(()=>[q(e.$slots,"default",{open:f,close:s},()=>[P("button",{disabled:e.disabled}," Open ",8,bt)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),e.overlay?(h(),N(Pe,M({key:0,appear:""},e.ui.overlay.transition),{default:U(()=>[f?(h(),D("div",{key:0,class:E([e.ui.overlay.base,e.ui.overlay.background])},null,2)):_("",!0)]),_:2},1040)):_("",!0),f?(h(),D("div",{key:1,ref:"container",class:E([e.ui.container,e.ui.width]),style:Xe(e.containerStyle),onMouseenter:i[0]||(i[0]=(...m)=>e.onMouseEnter&&e.onMouseEnter(...m))},[T(Pe,M({appear:""},e.ui.transition),{default:U(()=>[P("div",null,[e.popper.arrow?(h(),D("div",{key:0,"data-popper-arrow":"",class:E(Object.values(e.ui.arrow))},null,2)):_("",!0),T(n,{class:E([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:U(()=>[q(e.$slots,"panel",{open:f,close:s})]),_:2},1032,["class"])])]),_:2},1040)],38)):_("",!0)]),_:3},16,["class","onMouseleave"])}const St=Ae(mt,[["render",ht]]);function kt(e){return e?e[0].toUpperCase()+e.slice(1):""}const R=Fe(ae.ui.strategy,ae.ui.table,dt);function wt(e,i){return e===i}function Te(e,i,w){return e===i?0:w==="asc"?e<i?-1:1:e>i?-1:1}const Pt=Y({components:{UIcon:Ue,UButton:he,UProgress:_e,UCheckbox:je},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>wt},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>R.default.sortButton},sortAscIcon:{type:String,default:()=>R.default.sortAscIcon},sortDescIcon:{type:String,default:()=>R.default.sortDescIcon},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>R.default.loadingState},emptyState:{type:Object,default:()=>R.default.emptyState},progress:{type:Object,default:()=>R.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","update:sort"],setup(e,{emit:i,attrs:w}){const{ui:B,attrs:C}=Oe("table",oe(e,"ui"),R,oe(e,"class")),$=I(()=>e.columns??Object.keys(e.rows[0]??{}).map(o=>({key:o,label:kt(o),sortable:!1,class:void 0,sort:Te}))),t=tt(e,"sort",i,{passive:!0,defaultValue:ve({},e.sort,{column:null,direction:"asc"})}),n={column:t.value.column,direction:null},v=I(()=>{var r;if(!((r=t.value)!=null&&r.column)||e.sortMode==="manual")return e.rows;const{column:o,direction:a}=t.value;return e.rows.slice().sort((p,u)=>{var ee;const A=se(p,o),j=se(u,o);return(((ee=$.value.find(G=>G.key===o))==null?void 0:ee.sort)??Te)(A,j,a)})}),f=I({get(){return e.modelValue},set(o){i("update:modelValue",o)}}),s=I(()=>f.value&&f.value.length>0&&f.value.length<e.rows.length),m=I(()=>e.emptyState===null?null:{...B.value.default.emptyState,...e.emptyState}),S=I(()=>e.loadingState===null?null:{...B.value.default.loadingState,...e.loadingState});function k(o,a){if(typeof e.by=="string"){const r=e.by;return(o==null?void 0:o[r])===(a==null?void 0:a[r])}return e.by(o,a)}function F(o){return e.modelValue?f.value.some(a=>k(Ce(a),Ce(o))):!1}function l(o){if(t.value.column===o.key){const a=!o.direction||o.direction==="asc"?"desc":"asc";t.value.direction===a?t.value=ve({},n,{column:null,direction:"asc"}):t.value={column:t.value.column,direction:t.value.direction==="asc"?"desc":"asc"}}else t.value={column:o.key,direction:o.direction||"asc"}}function c(o){w.onSelect&&w.onSelect(o)}function g(){e.rows.forEach(o=>{F(o)||f.value.push(o)})}function y(o){o?g():f.value=[]}function b(o,a,r=""){return se(o,a,r)}return{ui:B,attrs:C,sort:t,columns:$,rows:v,selected:f,indeterminate:s,emptyState:m,loadingState:S,isSelected:F,onSort:l,onSelect:c,onChange:y,getRowData:b}}}),Ct={key:1},$t={key:0},Et={key:0},Tt=["colspan"],Dt={key:1},It=["colspan"],Bt=["onClick"];function Ft(e,i,w,B,C,$){const t=je,n=he,v=_e,f=Ue;return h(),D("div",M({class:e.ui.wrapper},e.attrs),[P("table",{class:E([e.ui.base,e.ui.divide])},[P("thead",{class:E(e.ui.thead)},[P("tr",{class:E(e.ui.tr.base)},[e.modelValue?(h(),D("th",{key:0,scope:"col",class:E(e.ui.checkbox.padding)},[T(t,M({"model-value":e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])],2)):_("",!0),(h(!0),D(Q,null,re(e.columns,(s,m)=>(h(),D("th",{key:m,scope:"col",class:E([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,s.class])},[q(e.$slots,`${s.key}-header`,{column:s,sort:e.sort,onSort:e.onSort},()=>[s.sortable?(h(),N(n,M({key:0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==s.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:s[e.columnAttribute],onClick:S=>e.onSort(s)}),null,16,["icon","label","onClick"])):(h(),D("span",Ct,J(s[e.columnAttribute]),1))])],2))),128))],2),e.loading&&e.progress?(h(),D("tr",$t,[P("td",{colspan:0,class:E(e.ui.progress.wrapper)},[T(v,M({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):_("",!0)],2),P("tbody",{class:E(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(h(),D("tr",Et,[P("td",{colspan:e.columns.length+(e.modelValue?1:0)},[q(e.$slots,"loading-state",{},()=>[P("div",{class:E(e.ui.loadingState.wrapper)},[e.loadingState.icon?(h(),N(f,{key:0,name:e.loadingState.icon,class:E(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):_("",!0),P("p",{class:E(e.ui.loadingState.label)},J(e.loadingState.label),3)],2)])],8,Tt)])):e.emptyState&&!e.rows.length?(h(),D("tr",Dt,[P("td",{colspan:e.columns.length+(e.modelValue?1:0)},[q(e.$slots,"empty-state",{},()=>[P("div",{class:E(e.ui.emptyState.wrapper)},[e.emptyState.icon?(h(),N(f,{key:0,name:e.emptyState.icon,class:E(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):_("",!0),P("p",{class:E(e.ui.emptyState.label)},J(e.emptyState.label),3)],2)])],8,It)])):(h(!0),D(Q,{key:2},re(e.rows,(s,m)=>(h(),D("tr",{key:m,class:E([e.ui.tr.base,e.isSelected(s)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,s==null?void 0:s.class]),onClick:()=>e.onSelect(s)},[e.modelValue?(h(),D("td",{key:0,class:E(e.ui.checkbox.padding)},[T(t,M({modelValue:e.selected,"onUpdate:modelValue":i[0]||(i[0]=S=>e.selected=S),value:s},e.ui.default.checkbox,{"aria-label":"Select row",onClick:i[1]||(i[1]=at(()=>{},["stop"]))}),null,16,["modelValue","value"])],2)):_("",!0),(h(!0),D(Q,null,re(e.columns,(S,k)=>{var F;return h(),D("td",{key:k,class:E([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,(F=s[S.key])==null?void 0:F.class])},[q(e.$slots,`${S.key}-data`,{column:S,row:s,index:m,getRowData:l=>e.getRowData(s,S.key,l)},()=>[ot(J(e.getRowData(s,S.key)),1)])],2)}),128))],10,Bt))),128))],2)],2)],16)}const At=Ae(Pt,[["render",Ft]]),Ot={class:"container my-8 pb-24"},Ut={class:"flex justify-between items-center mb-6"},jt={class:"flex gap-4 mb-6"},_t={class:"flex flex-col items-center justify-center py-12 gap-4"},Mt={key:0},Vt=P("span",{class:"text-gray-500 dark:text-gray-400 mb-4 block"}," Click the button below to fetch existing candles from the database ",-1),xt={class:"flex flex-col items-center gap-2"},Lt=P("p",{class:"text-sm text-gray-500 dark:text-gray-400 mt-2"}," Note: This process might take a few minutes depending on the database size ",-1),Nt={key:1},Rt=P("span",{class:"text-gray-500 dark:text-gray-400"}," No candles found matching your filters ",-1),Ht=[Rt],zt={class:"flex items-center gap-2"},Gt={class:"p-4 space-y-4"},Kt={class:"flex justify-end gap-2"},Wt=Y({__name:"manage",setup(e){const i=nt(),w=lt(),B=O(!1),C=O(!1),$=O(new Set),t=O({exchange:"",symbol:""}),n=[{key:"exchange",label:"Exchange"},{key:"symbol",label:"Symbol"},{key:"start_date",label:"Start Date"},{key:"end_date",label:"End Date"},{key:"actions",label:"Actions"}],v=I(()=>{let l=i.existingCandles;return t.value.exchange&&(l=l.filter(c=>c.exchange.toLowerCase().includes(t.value.exchange.toLowerCase()))),t.value.symbol&&(l=l.filter(c=>c.symbol.toLowerCase().includes(t.value.symbol.toLowerCase()))),l}),f=I(()=>B.value||C.value),s=l=>`${l.exchange}-${l.symbol}`;async function m(){K("success","Fetching latest candle details. This process might take from a few seconds up to a few minutes depending on the database size."),C.value=!0;try{await i.fetchExistingCandles()}finally{C.value=!1,K("success","Candles information updated successfully")}}async function S(l){const c=s(l);$.value.add(c);try{await i.deleteCandles(l.exchange,l.symbol),K("success","Candles deleted successfully")}catch{K("error","Failed to delete candles")}finally{$.value.delete(c)}}async function k(l){try{await i.updateCandles(l.exchange,l.symbol,l.start_date),K("success",`Started updating candles for ${l.symbol} on ${l.exchange}`)}catch{K("error","Failed to start candle update")}}const F=l=>w.backtestingExchangeNames.includes(l);return ne(async()=>{if(!i.existingCandles.length){B.value=!0;try{await i.fetchExistingCandles()}finally{B.value=!1}}}),(l,c)=>{const g=he,y=st,b=ut,o=it,a=St,r=At,p=rt;return h(),D("div",Ot,[P("div",Ut,[T(g,{class:"shadow-sm",icon:"i-heroicons-arrow-left",variant:"outline",to:"/candles",label:"Back"}),T(g,{class:"shadow-sm",icon:"i-heroicons-arrow-path",loading:C.value,label:"Refresh",onClick:m},null,8,["loading"])]),P("div",jt,[T(y,{modelValue:t.value.exchange,"onUpdate:modelValue":c[1]||(c[1]=u=>t.value.exchange=u),class:"w-64",icon:"i-heroicons-magnifying-glass",placeholder:"Filter by Exchange",ui:{icon:{trailing:{pointer:""}}}},{trailing:U(()=>[$e(T(g,{color:"gray",variant:"link",icon:"i-heroicons-x-mark-20-solid",padded:!1,onClick:c[0]||(c[0]=u=>t.value.exchange="")},null,512),[[Ee,t.value.exchange!==""]])]),_:1},8,["modelValue"]),T(y,{modelValue:t.value.symbol,"onUpdate:modelValue":c[3]||(c[3]=u=>t.value.symbol=u),icon:"i-heroicons-magnifying-glass",placeholder:"Filter by Symbol",class:"w-64",ui:{icon:{trailing:{pointer:""}}}},{trailing:U(()=>[$e(T(g,{color:"gray",variant:"link",icon:"i-heroicons-x-mark-20-solid",padded:!1,onClick:c[2]||(c[2]=u=>t.value.symbol="")},null,512),[[Ee,t.value.symbol!==""]])]),_:1},8,["modelValue"])]),B.value?(h(),N(b,{key:0,icon:"i-heroicons-information-circle",color:"gray",title:"Loading candles...",description:"This process might take from a few seconds up to a few minutes.",class:"mb-6"})):_("",!0),T(p,null,{default:U(()=>[T(r,{rows:v.value,columns:n,loading:f.value,"loading-state":{icon:"i-heroicons-arrow-path-20-solid",label:"Loading candles..."},progress:{color:"primary",animation:"carousel"}},{"empty-state":U(()=>[P("div",_t,[ie(i).existingCandles.length===0?(h(),D("div",Mt,[Vt,P("div",xt,[T(g,{icon:"i-heroicons-arrow-path",label:"Fetch Candles",onClick:m}),Lt])])):(h(),D("div",Nt,Ht))])]),"actions-data":U(({row:u})=>[P("div",zt,[F(u.exchange)?(h(),N(g,{key:1,color:"teal",variant:"soft",icon:"i-heroicons-arrow-path",size:"xs",label:"Update",loading:ie(i).isSymbolUpdating(u.exchange,u.symbol),disabled:!F(u.exchange),onClick:A=>k(u)},null,8,["loading","disabled","onClick"])):(h(),N(o,{key:0,text:"This exchange doesn't support backtesting"},{default:U(()=>[T(g,{color:"teal",variant:"soft",icon:"i-heroicons-arrow-path",size:"xs",label:"Update",loading:ie(i).isSymbolUpdating(u.exchange,u.symbol),disabled:!F(u.exchange),onClick:A=>k(u)},null,8,["loading","disabled","onClick"])]),_:2},1024)),T(a,{popper:{placement:"bottom-end"}},{panel:U(({close:A})=>[P("div",Gt,[P("p",null,'Are you sure you want to delete all candles for "'+J(u.symbol)+'" on "'+J(u.exchange)+'"?',1),P("div",Kt,[T(g,{color:"gray",variant:"soft",label:"Cancel",onClick:A},null,8,["onClick"]),T(g,{color:"red",variant:"soft",label:"Delete",onClick:()=>{S(u),A()}},null,8,["onClick"])])])]),default:U(()=>[T(g,{color:"red",variant:"soft",icon:"i-heroicons-trash",size:"xs",loading:$.value.has(s(u)),label:"Delete"},null,8,["loading"])]),_:2},1024)])]),_:1},8,["rows","loading","loading-state"])]),_:1})])}}});export{Wt as default};
