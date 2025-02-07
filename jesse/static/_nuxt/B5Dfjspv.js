import{g as C,r as I,M as D,q as p,o as u,aV as E,w as r,b as n,d as l,t as k,x as N,A as o,aW as T,c as K,z as d,I as F,aX as M,aY as S,aZ as $,Z as A,a_ as R,i as P,a$ as W,e as m,f as G,b0 as H,b1 as X,X as Z,F as z,m as Y}from"./Bxvlha2F.js";import{_ as J}from"./BqjHQvxc.js";import{_ as O}from"./CUpjPPUh.js";import{S as Q}from"./Cs_mR3iT.js";import{u as ee}from"./Blgg-j9U.js";const te={class:"flex justify-between items-center mb-2"},oe={class:"text-xl font-bold"},ne={class:"text-sm text-gray-500 dark:text-gray-400"},ae={class:"mt-4"},le={key:0,class:"flex justify-between"},se={key:1,class:"flex justify-between"},ie={key:2,class:"flex justify-between"},re=C({__name:"NotificationApiKey",props:{apiKey:{}},setup(U){const b=U,f=I(!1),v=I(!1),e=D();async function c(){v.value=!0;const{data:s,error:a}=await S("/notification-api-keys/delete",{id:b.apiKey.id},!0);if(v.value=!1,a.value&&a.value.statusCode!==200){$(a);return}f.value=!1,A("success","API Key deleted successfully"),e.notificationApiKeys=e.notificationApiKeys.filter(g=>g.id!==b.apiKey.id)}return(s,a)=>{const g=N,y=M,t=E;return u(),p(t,{class:"mb-4 p-4 bg-white"},{default:r(()=>[n("div",te,[n("h2",oe,k(s.apiKey.name)+" • "+k(s.apiKey.driver),1),l(g,{icon:"i-heroicons-trash",color:"red",label:"Delete",variant:"link",onClick:a[0]||(a[0]=_=>f.value=!0)})]),n("p",ne,k(o(T)(s.apiKey.created_at).value),1),n("div",ae,[s.apiKey.bot_token?(u(),K("div",le,[a[2]||(a[2]=n("span",{class:"font-medium"},"Bot Token:",-1)),n("span",null,k(s.apiKey.bot_token),1)])):d("",!0),s.apiKey.chat_id?(u(),K("div",se,[a[3]||(a[3]=n("span",{class:"font-medium"},"Chat ID:",-1)),n("span",null,k(s.apiKey.chat_id),1)])):d("",!0),s.apiKey.webhook?(u(),K("div",ie,[a[4]||(a[4]=n("span",{class:"font-medium"},"Webhook URL:",-1)),n("span",null,k(s.apiKey.webhook),1)])):d("",!0),l(y,{modelValue:o(f),"onUpdate:modelValue":a[1]||(a[1]=_=>F(f)?f.value=_:null),title:"Delete API Key",description:`Are you sure you want to delete '${s.apiKey.name}' API key?`,type:"info"},{default:r(()=>[l(g,{variant:"solid",color:"red",class:"flex justify-center",label:"Delete",loading:o(v),onClick:c},null,8,["loading"])]),_:1},8,["modelValue","description"])])]),_:1})}}}),ue={class:"flex justify-end"},de={class:"mt-8"},me={key:0},ke=C({__name:"notification-api-keys",setup(U){ee({title:"Notification API Keys"});const b=I(!1),f=D(),v=[{label:"Telegram",value:"telegram"},{label:"Discord",value:"discord"},{label:"Slack",value:"slack"}],e=R({name:"",driver:v[0].value,bot_token:"",chat_id:"",webhook:""}),c=P(()=>f.notificationApiKeys),s=P(()=>e.driver==="telegram"?e.bot_token&&e.chat_id:e.webhook);async function a(){if(!s.value){A("error","Please fill in all required fields");return}const y={};e.driver==="telegram"?(y.bot_token=e.bot_token,y.chat_id=e.chat_id):(e.driver==="discord"||e.driver==="slack")&&(y.webhook=e.webhook);const t={driver:e.driver,name:e.name,fields:y};b.value=!0;const{data:_,error:w}=await S("/notification-api-keys/store",t,!0);b.value=!1,w.value&&w.value.statusCode!==200&&$(w);const V=_.value;V.status==="success"?(A("success","Successfully added API key"),c.value.push(V.data),g()):V.status==="error"&&A("error",V.message)}function g(){e.chat_id="",e.bot_token="",e.webhook="",e.name=""}return(y,t)=>{const _=W,w=G,V=J,h=X,x=Z,B=N,L=H,j=O,q=re;return u(),p(Q,null,{default:r(()=>[l(_,null,{default:r(()=>t[6]||(t[6]=[m(" Notification API Keys ")])),_:1}),t[12]||(t[12]=n("p",null,[m(" Here you can add your API keys for various notification drivers. API keys are used to connect your account to the notification driver and allow the bot to send notifications on your behalf. "),n("br"),n("br"),m("Please note that for security reasons, once created, API keys cannot be modified or seen again. ")],-1)),t[13]||(t[13]=n("br",null,null,-1)),n("p",null,[t[8]||(t[8]=m(" If you need help setting up your API keys, please refer to the documentation for ")),l(w,{class:"underline",href:"https://docs.jesse.trade/docs/notifications",target:"_blank"},{default:r(()=>t[7]||(t[7]=[m("notification drivers")])),_:1}),t[9]||(t[9]=m(". "))]),t[14]||(t[14]=n("br",null,null,-1)),l(L,{state:o(e),class:"space-y-4",onSubmit:a},{default:r(()=>[l(h,{label:"Driver:",required:""},{default:r(()=>[l(V,{modelValue:o(e).driver,"onUpdate:modelValue":t[0]||(t[0]=i=>o(e).driver=i),"value-attribute":"value",options:v},null,8,["modelValue"])]),_:1}),l(h,{label:"Name:",required:""},{default:r(()=>[l(x,{modelValue:o(e).name,"onUpdate:modelValue":t[1]||(t[1]=i=>o(e).name=i),type:"text",placeholder:"Give a name to this API key to identify it later"},null,8,["modelValue"])]),_:1}),o(e).driver==="telegram"?(u(),p(h,{key:0,label:"Bot Token:",required:""},{default:r(()=>[l(x,{modelValue:o(e).bot_token,"onUpdate:modelValue":t[2]||(t[2]=i=>o(e).bot_token=i),type:"text",placeholder:"Enter your Telegram bot token"},null,8,["modelValue"])]),_:1})):d("",!0),o(e).driver==="telegram"?(u(),p(h,{key:1,label:"Chat ID:",required:""},{default:r(()=>[l(x,{modelValue:o(e).chat_id,"onUpdate:modelValue":t[3]||(t[3]=i=>o(e).chat_id=i),type:"text",placeholder:"Enter your Telegram chat ID"},null,8,["modelValue"])]),_:1})):d("",!0),o(e).driver==="discord"?(u(),p(h,{key:2,label:"Webhook URL:",required:""},{default:r(()=>[l(x,{modelValue:o(e).webhook,"onUpdate:modelValue":t[4]||(t[4]=i=>o(e).webhook=i),type:"text",placeholder:"Enter your Discord webhook URL"},null,8,["modelValue"])]),_:1})):d("",!0),o(e).driver==="slack"?(u(),p(h,{key:3,label:"Webhook URL:",required:""},{default:r(()=>[l(x,{modelValue:o(e).webhook,"onUpdate:modelValue":t[5]||(t[5]=i=>o(e).webhook=i),type:"text",placeholder:"Enter your Slack webhook URL"},null,8,["modelValue"])]),_:1})):d("",!0),n("div",ue,[l(B,{type:"submit",icon:"i-heroicons-plus",class:"w-48 flex justify-center",label:"Create",loading:o(b),disabled:!o(s)},null,8,["loading","disabled"])])]),_:1},8,["state"]),n("div",de,[l(_,null,{default:r(()=>[t[10]||(t[10]=m(" Previously Added ")),o(c).length?(u(),K("span",me,"("+k(o(c).length)+")",1)):d("",!0)]),_:1}),o(c).length?d("",!0):(u(),p(j,{key:0},{default:r(()=>t[11]||(t[11]=[m(" No API keys added yet ")])),_:1})),(u(!0),K(z,null,Y(o(c),i=>(u(),p(q,{key:i.id,"api-key":i},null,8,["api-key"]))),128))])]),_:1})}}});export{ke as default};
