var ie=Object.defineProperty,ue=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var U=(a,t,s)=>t in a?ie(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,L=(a,t)=>{for(var s in t||(t={}))ye.call(t,s)&&U(a,s,t[s]);if(K)for(var s of K(t))ge.call(t,s)&&U(a,s,t[s]);return a},A=(a,t)=>ue(a,fe(t));import{r as D,w as Q,o as pe,a as x,c as _,b as g,t as N,F as R,d as B,u as te,e as he,n as j,h as me,f as M,g as Z,i as Ce,j as Se,k as ke,l as ve,p as xe,m as _e,q as I,s as be}from"./vendor.36604ed2.js";const we=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerpolicy&&(i.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?i.credentials="include":c.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(c){if(c.ep)return;c.ep=!0;const i=s(c);fetch(c.href,i)}};we();const De=(a,t=null)=>{let s=a;return typeof t=="string"&&(s=m(a,t)),s.map(r=>Y(r))},Y=a=>{let t=null;typeof a=="string"?t=new Date(a):a instanceof Date&&(t=a);const s=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"];return{year:String(t.getFullYear()).padStart(4,"0"),month:String(t.getMonth()+1).padStart(2,"0"),day:String(t.getDate()).padStart(2,"0"),week:s[t.getDay()]}},Te=a=>{const s=a.replace(/\//g,"-").split("-").map(c=>Number(c));if(s.length!==2)throw new Error("\u83B7\u53D6\u6708\u4EFD\u65E5\u671F\u53C2\u6570\u9519\u8BEF:",a);const r=new Date(...s,0).getDate();return new Array(r).fill().map((c,i)=>i+1)},m=(a,t)=>{const s=new Date(a.replace(/\//g,"-")),r=new Date(t),c=[];for(;r>=s;){const i=Y(s);c.push(`${i.year}-${i.month}-${i.day}`),s.setDate(s.getDate()+1)}return c},$e=a=>{const t={};return a.forEach(s=>{const r=s.year+"-"+s.month;t[r]?t[r].push(s):t[r]=[s]}),Object.values(t)},ee=(a,t)=>m(...t).includes(a),G=a=>{const t=String(a).replace("/","-").split("-");return Te(a).map(s=>String(t[0]).padStart(4,"0")+"-"+String(t[1]).padStart(2,"0")+"-"+String(s).padStart(2,"0"))},We=()=>{const a=new Date,t=String(a.getFullYear()).padStart(4,"0"),s=String(a.getMonth()+1).padStart(2,"0"),r=String(a.getDate()).padStart(2,"0");return`${t}-${s}-${r}`},V=(a=new Date)=>{const t=a.getFullYear(),s=a.getMonth()+1,r=`${t}-${String(s).padStart(2,"0")}`;let c="";s===1?c=`${String(t-1).padStart(4,"0")}-12`:c=`${String(t).padStart(4,"0")}-${String(s-1).padStart(2,"0")}`;let i="";s===12?i=`${String(t+1).padStart(4,"0")}-01`:i=`${String(t).padStart(4,"0")}-${String(s+1).padStart(2,"0")}`;const f=G(c),u=G(r),C=G(i);let p=[...f,...u,...C];return p.prev=f,p.current=u,p.next=C,p},Ee=a=>{if(!a.length)return{};const t=a[0].days[0],s=a.map(f=>new Date(f.days.at(-1)).getTime()).sort((f,u)=>f-u).at(-1),r=Y(new Date(s)),c=`${r.year}-${r.month}-${r.day}`,i={};return m(t,c).forEach(f=>{const u=a.map((C,p)=>C.days.includes(f)?p:!1).filter(C=>C!==!1);u.length&&(i[f]=u)}),i},Le=(a,t)=>a.map(r=>{if(r.type!=="normal")return r;const c=Ee(r.schedule),i=Object.values(c),f=Object.keys(c);if(!f.length)return r;const u=[];for(let p=0;p<i.length;p++)JSON.stringify(u.at(-1))!==JSON.stringify(i[p])?(u.push(i[p]),u.at(-1).days=[f[p]]):u.at(-1)&&(u.at(-1).days?u.at(-1).days.push(f[p]):u.at(-1).days=[f[p]]);let C=new Array(u.length).fill({});return C=C.map((p,h)=>{let v={};if(u[h].length===1){if(v=A(L({},r.schedule[u[h][0]]),{days:u[h].days,daysSource:r.schedule[u[h][0]].days}),v.list){let w="",b="";typeof t.desc=="function"?w=t.desc(v.list):w=t.desc,typeof t.name=="function"?b=t.name(v.list):b=t.name,v=A(L({},v),{desc:w,name:b,backgroundColor:t.backgroundColor,textColor:t.textColor})}}else{const w=u[h].map(F=>r.schedule[F]);let b="",$="";typeof t.desc=="function"?b=t.desc(w):b=t.desc,typeof t.name=="function"?$=t.name(w):$=t.name,v={desc:b,backgroundColor:t.backgroundColor,textColor:t.textColor,name:$,list:w,days:u[h].days}}return v}),r.schedule=C,r}),Ne=(a=new Date)=>V(a).next,Oe=(a=new Date)=>V(a).prev,Fe=(a=new Date)=>V(a).current;var ne=(a,t)=>{const s=a.__vccOpts||a;for(const[r,c]of t)s[r]=c;return s};const Ae={class:"gantt",id:"Vue3Gantt"},Re={class:"guide"},Be={class:"desc"},Me={class:"date"},Ve={class:"item"},qe={class:"item-name-list"},He={class:"date-list first-date-list"},je={class:"month"},Ge={class:"day-box"},Ye={class:"day"},ze={class:"week"},Pe={class:"schedule-box"},Xe=["title","onMousemove","onMouseout","onClick"],Je={key:0,class:"work-desc"},Ke={props:{data:{type:Array,required:!0,default:[]},dateRangeList:{type:Array,required:!0,default:[],validator(a){return a[0]&&a.at(-1)}},dateText:{type:String,required:!0},itemText:{type:String,required:!0},activeDate:{type:String,default:()=>We()},repeatMode:{type:Object,default:()=>({mode:"cover",backgroundColor:"#FFFFCC",textColor:"#336666",name:"\u91CD\u53E0\u65E5\u7A0B",desc:"\u8FD9\u662F\u591A\u4E2A\u65E5\u7A0B"})},itemWidth:{type:Number,default:40,validator(a){return a>=40}},itemHeight:{type:Number,default:40,validator(a){return a>=40}},scheduleTitle:{type:Function,default:null},borderColor:{type:String,default:"#eee"},alikeName:{type:Function,default:null}},emits:["scheduleClick","scrollXEnd","scrollYEnd"],setup(a,{expose:t,emit:s}){const r=a;he(n=>({b8433008:r.borderColor,a051df16:r.itemWidth+"px",d4d94a50:r.itemHeight+"px",b0995cce:i.value,"1fcfb4e6":f.value}));let c=D([]);const i=D("2000px"),f=D("0px");let u=null;const C=()=>{clearTimeout(u),u=setTimeout(()=>{const n=document.querySelector("#Vue3Gantt");!n||(f.value=0,j(()=>{const e=n.parentElement||document.body,o=document.querySelector("#Vue3Gantt .desc");f.value=e.clientHeight-o.clientHeight-(o.offsetTop-e.offsetTop)-2+"px"}))},200)};Q(()=>{c.value=$e(De(...r.dateRangeList)),console.log("rangeDate.value",c.value),i.value=r.itemWidth*c.value.flat(1).length+122+"px"});const p=()=>{const n=["type","name","schedule"],e=["id","name","desc","backgroundColor","textColor","days"];r.data.forEach(o=>{if(o.type==="normal"){const l=Object.keys(o),d=n.find(k=>!l.includes(k));if(d)throw new Error(`\u9879\u76EE\u7F3A\u5C11${d}\u9879`);o.schedule.forEach(k=>{if(!k.list){const S=Object.keys(k),T=e.find(E=>!S.includes(E));if(T)throw new Error(`\u65E5\u7A0B\u7F3A\u5C11${T}\u9879`)}})}})},h=D([]),v=n=>n.map(e=>(e.type==="normal"&&Array.isArray(e.schedule)&&e.schedule.length&&(e.schedule=e.schedule.filter(o=>{const l=c.value[0][0],d=`${l.year}-${l.month}-${l.day}`;return new Date(o.days.at(-1)).getTime()>=new Date(d).getTime()})),e)),w=()=>{p(),h.value=Se(r.data).map(n=>(n.type==="normal"&&Array.isArray(n.schedule)&&(n.schedule=n.schedule.sort((e,o)=>new Date(e.days[0]).getTime()-new Date(o.days[0]).getTime()),n.schedule=n.schedule.map(e=>(e.days.length===2&&(e.days=m(...e.days)),e))),n)),h.value=v(h.value)},b=(n,e)=>{let o={};return n.type==="alike"&&(o=A(L({},o),{backgroundColor:n.color})),e&&e.type==="works"&&(o=A(L({},o),{backgroundColor:e.backgroundColor,color:e.textColor,width:e.width+"px",marginLeft:-e.left+"px"})),o},$=(n,e)=>{const o=ee(n[0],[e[0].date,e[e.length-1].date]),l=ee(n[n.length-1],[e[0].date,e[e.length-1].date]);return o&&l?n.length*r.itemWidth:!o&&l?m(e[0].date,n[n.length-1]).length*r.itemWidth:o&&!l?m(n[0],e[e.length-1].date).length*r.itemWidth:0},F=(n,e)=>e.days.includes(n),q=(n,e)=>!!e.find(o=>o.date===n),y=(n,e)=>!!e.find(o=>o.days.includes(n)),W=(n,e)=>{const o=e.filter(l=>l.type==="works");return!!y(n,o)},ae=n=>n.flat(1).map(e=>({type:"normal",date:String(e.year).padStart(4,"0")+"-"+String(e.month).padStart(2,"0")+"-"+String(e.day).padStart(2,"0")})),z=(n,e)=>n.days.filter(o=>e.days.includes(o)),P=(n,e)=>e.find(o=>o.type==="works"&&o.days.includes(n)),X=(n,e)=>{const o=P(n.days[0],e);if(o&&n.id!==o.id){const l=z(o,n),d=n.days.slice(l.length)[0],k=e.findIndex(S=>S.date===d);e[k]=L({type:"works",date:n.days[0],width:$(n.days,e),left:l.length*r.itemWidth},n)}else{const l=e.findIndex(d=>d.date===n.days[0]);e[l]=L({type:"works",date:n.days[0],width:$(n.days,e),left:0},n)}return e=e.filter(l=>!(l.type==="normal"&&n.days.includes(l.date))),e},re=n=>{const e=ae(c.value);if(!n.schedule||!n.schedule.length)return e;let o=[];return n.schedule.forEach(l=>{e.forEach(d=>{const k=F(d.date,l),S=q(d.date,o),T=W(d.date,o);if(k)if(!S&&!T)o.push(L({type:"works",date:d.date,width:$(l.days,e),left:0},l));else if(!S&&T){const E=P(d.date,o);l.id!==E.id&&(z(E,l),o=X(l,o))}else S&&!T&&(console.warn("\u5F53\u524D\u65E5\u671F\u5DF2\u7ECF\u88AB\u6DFB\u52A0 && \u5F53\u524D\u65E5\u7A0B\u4E0D\u5728\u5DF2\u6DFB\u52A0\u7684\u65E5\u7A0B\u8303\u56F4\u5185 (\u65B0\u589E\u65E5\u7A0B)"),o=X(l,o));else!S&&!T&&o.push(d)})}),o},se=(n,e)=>{n==="works"&&(e.target.tagName==="SPAN"?(e.target.parentElement.style.zIndex=2,e.target.parentElement.style.boxShadow="0 0 5px 0px rgba(0, 0, 0, 0.2)"):(e.target.style.zIndex=2,e.target.style.boxShadow="0 0 5px 0px rgba(0, 0, 0, 0.2)"))},le=(n,e)=>{n==="works"&&(e.target.tagName==="SPAN"?(e.target.parentElement.style.zIndex=1,e.target.parentElement.style.boxShadow="none"):(e.target.style.zIndex=1,e.target.style.boxShadow="none"))};let O=null;const J=D(null),H=n=>{const e=n?n.target:J.value;if(!e)return;const o=e.className;let l="item-name-list";o==="item-name-list"&&(l="schedule-box");const d=document.querySelector(`#Vue3Gantt .${l}`);d&&(d.scrollTop=e.scrollTop),O&&clearTimeout(O),O=setTimeout(()=>{const k=Math.ceil(Math.max(e.clientHeight,e.scrollHeight));e.scrollTop+e.clientHeight>=k&&s("scrollYEnd",n)},200)};pe(()=>{const n=document.querySelector("#Vue3Gantt .item-name-list"),e=document.querySelector("#Vue3Gantt .schedule-box");n.addEventListener("scroll",H),e.addEventListener("scroll",H),window.addEventListener("resize",C),C()}),Q(()=>{w(),r.repeatMode.mode==="extract"&&(h.value=Le(h.value,r.repeatMode),h.value=v(h.value)),j(()=>{H()})});const ce=n=>{s("scheduleClick",n)},de=n=>{O&&clearTimeout(O),O=setTimeout(()=>{const e=n.target,o=Math.ceil(Math.max(e.clientWidth,e.scrollWidth));e.scrollLeft+e.clientWidth>=o&&s("scrollXEnd",n)},200)};return t({exportImg:async(n=!0)=>new Promise((e,o)=>{const l=document.querySelector("#Vue3Gantt"),d=document.querySelector("#Vue3Gantt .inner"),k=document.querySelector(".guide");f.value="unset",l.style.maxWidth="unset",d.scrollLeft=d.scrollWidth,l.style.width=d.scrollWidth+k.clientWidth+"px",j(()=>{me(l,{removeContainer:!0}).then(function(S){const T=S.toDataURL();if(l.style.maxWidth=i.value,C(),l.style.width="100%",n){const E=document.createElement("a");E.href=T,E.setAttribute("download","\u65E5\u7A0B\u56FE"),E.click()}e(T)})})})}),(n,e)=>(x(),_("div",Ae,[g("div",Re,[g("div",Be,[g("span",Me,N(r.dateText),1),g("span",Ve,N(r.itemText),1)]),g("div",qe,[(x(!0),_(R,null,B(h.value,(o,l)=>(x(),_("div",{key:l,class:M({"guide-name":!0,"last-guide-name":l===h.value.length-1}),style:Z(o.type==="alike"&&b(o))},N(typeof r.alikeName=="function"&&o.type==="alike"?r.alikeName(o):o.name),7))),128))])]),g("div",{class:"inner",onScroll:e[0]||(e[0]=o=>de(o)),ref_key:"innerRef",ref:J},[g("div",He,[(x(!0),_(R,null,B(te(c),o=>(x(),_("div",{key:o.year+"-"+o.month,class:"month-item"},[g("div",je,N(o[0].year+"-"+o[0].month),1),g("div",Ge,[(x(!0),_(R,null,B(o,(l,d)=>(x(),_("div",{key:l.day+l.week,class:M({"day-item":!0,"first-day-item":d===0,"date-active":r.activeDate===l.year+"-"+l.month+"-"+l.day})},[g("div",Ye,N(l.day),1),g("div",ze,N(l.week),1)],2))),128))])]))),128))]),g("div",Pe,[(x(!0),_(R,null,B(h.value,(o,l)=>(x(),_("div",{key:l,class:M({"date-box":!0,alike:o.type==="alike"})},[(x(!0),_(R,null,B(re(o),(d,k)=>(x(),_("div",{key:k,class:M({"date-item":!0,"date-item-work":d.type==="works","date-active":d.date===r.activeDate}),style:Z(b(o,d)),title:d.type==="works"?d.desc:"",onMousemove:S=>se(d.type,S),onMouseout:S=>le(d.type,S),onClick:S=>ce(d)},[d.type==="works"?(x(),_("span",Je,N(r.scheduleTitle?r.scheduleTitle(d):d.name),1)):Ce("",!0)],46,Xe))),128))],2))),128))])],544)]))}};var Ue=ne(Ke,[["__scopeId","data-v-1be17b43"]]),Qe={data1:[{type:"alike",color:"rgb(255,222,215)",name:"\u5E74\u5EA6\u8003\u6838"},{type:"normal",color:"",name:"\u5B8C\u7F8E\u4E16\u754C",schedule:[{id:333330,name:"900\u52C7\u58EB\u540C\u65F6\u5728\u7EBF\u5E86\u795D\u6D3B\u52A8",desc:"\u8FD9\u4E2A\u6D3B\u52A8\u5F88\u91CD\u8981\uFF0C6666666\u8425\u6536\u6570\u767E\u4E07\uFF0C\u8DE8\u90E8\u95E8\u5408\u4F5C\u7684\u4E00\u4E2A\u5927\u9879\u76EE\uFF0CBOSS\u4EB2\u81EA\u4E0B\u573A\u5750\u9547\u6307\u6325\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u56E2\u7ED3\u4E00\u5FC3!",backgroundColor:"rgb(253, 211, 172)",textColor:"rgb(245, 36, 9)",days:m("2022-01-15","2022-02-05")},{id:555550,name:"\u6B63\u6708\u4E0D\u5243\u5934-\u91CD\u53E0\u4E00\u4E2A",desc:"\u8FD9\u4E2A\u6D3B\u52A8\u5F88\u91CD\u8981\uFF0C6666666\u8425\u6536\u6570\u767E\u4E07\uFF0C\u8DE8\u90E8\u95E8\u5408\u4F5C\u7684\u4E00\u4E2A\u5927\u9879\u76EE\uFF0CBOSS\u4EB2\u81EA\u4E0B\u573A\u5750\u9547\u6307\u6325\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u56E2\u7ED3\u4E00\u5FC3!",backgroundColor:"#28f",textColor:"#fff",days:m("2022-02-27","2022-03-15")},{id:222220,name:"\u6625\u8282\u6D3B\u52A8",desc:"\u8FD9\u4E2A\u6D3B\u52A8\u5F88\u91CD\u8981\uFF0C6666666\u8425\u6536\u6570\u767E\u4E07\uFF0C\u8DE8\u90E8\u95E8\u5408\u4F5C\u7684\u4E00\u4E2A\u5927\u9879\u76EE\uFF0CBOSS\u4EB2\u81EA\u4E0B\u573A\u5750\u9547\u6307\u6325\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u56E2\u7ED3\u4E00\u5FC3!",backgroundColor:"#768",textColor:"#fff",days:m("2022-02-28","2022-03-02")},{id:111110,name:"\u4E2D\u5143\u8282\u6D3B\u52A8",desc:"\u8FD9\u4E2A\u6D3B\u52A8\u5F88\u91CD\u8981\uFF0C\u8425\u6536\u6570\u767E\u4E07\uFF0C\u8DE8\u90E8\u95E8\u5408\u4F5C\u7684\u4E00\u4E2A\u5927\u9879\u76EE\uFF0CBOSS\u4EB2\u81EA\u4E0B\u573A\u5750\u9547\u6307\u6325\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u56E2\u7ED3\u4E00\u5FC3!",backgroundColor:"#369",textColor:"#fff",days:m("2022-03-2","2022-03-8")},{id:44440,name:"\u4E09\u516B\u5987\u5973\u6D3B\u52A8",desc:"\u8FD9\u4E2A\u6D3B\u52A8\u5F88\u91CD\u8981\uFF0C\u8425\u6536\u6570\u767E\u4E07\uFF0C\u8DE8\u90E8\u95E8\u5408\u4F5C\u7684\u4E00\u4E2A\u5927\u9879\u76EE\uFF0CBOSS\u4EB2\u81EA\u4E0B\u573A\u5750\u9547\u6307\u6325\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u56E2\u7ED3\u4E00\u5FC3!",backgroundColor:"#a59",textColor:"#fff",days:m("2022-03-26","2022-04-20")}]},{type:"normal",color:"",name:"\u6D41\u661F\u8774\u8776\u5251",schedule:[{id:222221,name:"\u5C0F\u5E74\u6D3B\u52A8",desc:"\u8FD9\u4E2A\u6D3B\u52A8\u5F88\u91CD\u8981\uFF0C6666666\u8425\u6536\u6570\u767E\u4E07\uFF0C\u8DE8\u90E8\u95E8\u5408\u4F5C\u7684\u4E00\u4E2A\u5927\u9879\u76EE\uFF0CBOSS\u4EB2\u81EA\u4E0B\u573A\u5750\u9547\u6307\u6325\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u56E2\u7ED3\u4E00\u5FC3!",backgroundColor:"#482",textColor:"#fff",days:m("2022-02-25","2022-03-10")},{id:111111,name:"\u4E2D\u5143\u8282\u6D3B\u52A8",desc:"\u8FD9\u4E2A\u6D3B\u52A8\u5F88\u91CD\u8981\uFF0C\u8425\u6536\u6570\u767E\u4E07\uFF0C\u8DE8\u90E8\u95E8\u5408\u4F5C\u7684\u4E00\u4E2A\u5927\u9879\u76EE\uFF0CBOSS\u4EB2\u81EA\u4E0B\u573A\u5750\u9547\u6307\u6325\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u56E2\u7ED3\u4E00\u5FC3!",backgroundColor:"#389",textColor:"#fff",days:m("2022-02-10","2022-03-13")},{id:3333331,name:"\u60C5\u4EBA\u8282\u6D3B\u52A8",desc:"\u6D6A\u6F2B\u60C5\u4EBA\u8282\uFF0C\u8BA9\u73A9\u5BB6\u51B2\u5927\u628A\u5927\u628A\u7684\u94B1\uFF0C\u8425\u6536\u7834\u4EBF\uFF01\uFF01\uFF01\u51B2\u51B2\u51B2\uFF01",backgroundColor:"pink",textColor:"#333",days:m("2022-04-23","2022-05-10")},{id:444441,name:"\u53CC12\u51B2\u51B2\u51B2\uFF01",desc:"\u53CC12\u662F\u4E00\u5E74\u4E00\u5EA6\u7684\u5272\u97ED\u83DC\u7684\u5B63\u8282\uFF0C\u730E\u4EBA\u4EEC\u6469\u62F3\u64E6\u638C\uFF0C\u6309\u8010\u5DF2\u4E45\uFF5E",backgroundColor:"#000",textColor:"#fff",days:m("2022-02-1","2022-03-01")}]},{type:"normal",color:"",name:"\u5929\u6DAF\u660E\u6708\u5200",schedule:[{id:333332,name:"\u5E86\u5143\u65E6\u6D3B\u52A8",desc:"\u8FD9\u4E2A\u6D3B\u52A8\u5F88\u91CD\u8981\uFF0C\u8425\u6536\u6570\u767E\u4E07\uFF0C\u8DE8\u90E8\u95E8\u5408\u4F5C\u7684\u4E00\u4E2A\u5927\u9879\u76EE\uFF0CBOSS\u4EB2\u81EA\u4E0B\u573A\u5750\u9547\u6307\u6325\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u56E2\u7ED3\u4E00\u5FC3!",backgroundColor:"#fa6",textColor:"#fff",days:m("2022-03-28","2022-04-10")},{id:111112,name:"\u4E2D\u5143\u8282\u6D3B\u52A8",desc:"\u8FD9\u4E2A\u6D3B\u52A8\u5F88\u91CD\u8981\uFF0C\u8425\u6536\u6570\u767E\u4E07\uFF0C\u8DE8\u90E8\u95E8\u5408\u4F5C\u7684\u4E00\u4E2A\u5927\u9879\u76EE\uFF0CBOSS\u4EB2\u81EA\u4E0B\u573A\u5750\u9547\u6307\u6325\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u56E2\u7ED3\u4E00\u5FC3!",backgroundColor:"#521",textColor:"#fff",days:m("2022-02-05","2022-02-17")},{id:444442,name:"\u597D\u53CB\u56DE\u5F52\u6D3B\u52A8",desc:"\u8FD9\u4E2A\u6D3B\u52A8\u5F88\u91CD\u8981\uFF0C6666666\u8425\u6536\u6570\u767E\u4E07\uFF0C\u8DE8\u90E8\u95E8\u5408\u4F5C\u7684\u4E00\u4E2A\u5927\u9879\u76EE\uFF0CBOSS\u4EB2\u81EA\u4E0B\u573A\u5750\u9547\u6307\u6325\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u56E2\u7ED3\u4E00\u5FC3!",backgroundColor:"#2dd",textColor:"#fff",days:m("2022-03-15","2022-03-22")},{id:222222,name:"\u5143\u5BB5\u897F\u6E38\u8BB0\u8054\u52A8",desc:"\u8FD9\u4E2A\u6D3B\u52A8\u5F88\u91CD\u8981\uFF0C6666666\u8425\u6536\u6570\u767E\u4E07\uFF0C\u8DE8\u90E8\u95E8\u5408\u4F5C\u7684\u4E00\u4E2A\u5927\u9879\u76EE\uFF0CBOSS\u4EB2\u81EA\u4E0B\u573A\u5750\u9547\u6307\u6325\uFF0C\u5927\u5BB6\u4E00\u5B9A\u8981\u56E2\u7ED3\u4E00\u5FC3!",backgroundColor:"#636",textColor:"#fff",days:m("2022-02-12","2022-02-20")}]}],data2:[{name:"\u957F\u7EBF\u7248\u672C\u8282\u70B9",color:"#f6f6f6",type:"alike"},{name:"\u548C\u5E73\u7CBE\u82F1",type:"normal",schedule:[{id:1111,name:"\u5143\u65E6\u73A9\u6CD5+S\u7EA7\u5546\u4E1A\u5316",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534750%",backgroundColor:"#ffdebc",textColor:"#ff5d35",days:["2022-01-30","2022-02-07"]},{id:1112,name:"S26\u65B0\u8D5B\u5B63\uFF0C\u6218\u4EE4\u66F4\u65B0",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534730%",backgroundColor:"#ffdebc",textColor:"#ff5d35",days:["2022-02-06","2022-02-07","2022-02-08","2022-02-09"]},{id:1113,name:"\u65B0\u76AE\u80A4\u6D3B\u52A8",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534730%",backgroundColor:"#ffdebc",textColor:"#ff5d35",days:["2022-02-18","2022-02-19","2022-02-20","2022-02-21","2022-02-22","2022-02-23","2022-02-24"]}]},{name:"\u91D1\u94F2\u94F2\u4E4B\u6218",type:"normal",schedule:[{id:2221,name:"\u5143\u65E6\u73A9\u6CD5+S\u7EA7\u5546\u4E1A\u5316",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534750%",backgroundColor:"#003333",textColor:"#999999",days:["2022-01-28","2022-01-29","2022-01-30","2022-01-31","2022-02-01"]},{id:2222,name:"S26\u65B0\u8D5B\u5B63\uFF0C\u6218\u4EE4\u66F4\u65B0",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534730%",backgroundColor:"#99CCCC",textColor:"#336699",days:["2022-01-30","2022-01-31","2022-02-01","2022-02-02","2022-02-03","2022-02-04","2022-02-05"]},{id:2223,name:"\u4E94\u661F\u7EA7\u6D3B\u52A8",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534730%",backgroundColor:"#006633",textColor:"#CCCC66",days:["2022-02-16","2022-02-17","2022-02-18","2022-02-19"]}]},{name:"\u897F\u6E38\u8BB0",type:"normal",schedule:[{id:2221,name:"\u5143\u65E6\u73A9\u6CD5+S\u7EA7\u5546\u4E1A\u5316",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534750%",backgroundColor:"#003333",textColor:"#999999",days:["2022-04-28","2022-05-01"]},{id:2222,name:"S26\u65B0\u8D5B\u5B63\uFF0C\u6218\u4EE4\u66F4\u65B0",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534730%",backgroundColor:"#99CCCC",textColor:"#336699",days:["2022-03-20","2022-04-05"]},{id:2223,name:"\u4E94\u661F\u7EA7\u6D3B\u52A8",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534730%",backgroundColor:"#006633",textColor:"#CCCC66",days:["2022-02-16","2022-02-19"]}]},{name:"\u6C34\u6D52\u4F20",type:"normal",schedule:[{id:2221,name:"\u5143\u65E6\u73A9\u6CD5+S\u7EA7\u5546\u4E1A\u5316",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534750%",backgroundColor:"#003333",textColor:"#999999",days:["2022-02-12","2022-02-21"]},{id:2222,name:"S26\u65B0\u8D5B\u5B63\uFF0C\u6218\u4EE4\u66F4\u65B0",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534730%",backgroundColor:"#99CCCC",textColor:"#336699",days:["2022-02-23","2022-03-05"]},{id:2223,name:"\u4E94\u661F\u7EA7\u6D3B\u52A8",desc:"\u6D3B\u8DC3\u63D0\u534720%\uFF0C\u6536\u5165\u63D0\u534730%",backgroundColor:"#006633",textColor:"#CCCC66",days:["2022-02-16","2022-02-19"]}]},{name:"\u4E09\u56FD\u6F14\u4E49",type:"normal",schedule:[]},{name:"\u5E73\u51E1\u7684\u4E16\u754C",type:"normal",schedule:[]},{name:"\u767D\u9E7F\u539F",type:"normal",schedule:[]},{name:"\u5C0F\u5175\u5F20\u560E",type:"normal",schedule:[]},{name:"\u51B2\u51B2\u51B2",type:"normal",schedule:[]},{name:"\u51B2\u51B2\u51B21",type:"normal",schedule:[]},{name:"\u51B2\u51B2\u51B22",type:"normal",schedule:[]},{name:"\u51B2\u51B2\u51B23",type:"normal",schedule:[]},{name:"\u51B2\u51B2\u51B24",type:"normal",schedule:[]},{name:"\u51B2\u51B2\u51B25",type:"normal",schedule:[]},{name:"\u51B2\u51B2\u51B26",type:"normal",schedule:[]}]};const oe=a=>(xe("data-v-7a05904b"),a=a(),_e(),a),Ze={class:"content"},Ie=oe(()=>g("h1",null,"\u7518\u7279\u56FE",-1)),et={class:"box"},tt=oe(()=>g("div",null,[I("SSSSS"),g("br"),I("efwef")],-1)),nt={setup(a){const t=D([]),s=D("2022-02-14");V(),t.value=["2022-02-01","2022-03-28"];const r=ke({mode:"extract",backgroundColor:"#009999",textColor:"#CCFFFF",name:y=>y.map(W=>W.name).join("+"),desc:y=>y.map(W=>W.desc).join("@@@")}),c=y=>y.name+"function",i=D(80),f=D(40),u=D(Qe.data2),C=y=>{console.log("\u70B9\u51FB",y)},p=D(null),h=()=>{console.log("gantt",p),p.value.exportImg()},v=y=>"\u25B6\uFE0F"+y.name,w=y=>{console.log("|\u5230\u5E95\u4E86")},b=()=>{s.value="2022-04-01",i.value=100,f.value=60,t.value=["2022-03-01","2022-05-01"],r.backgroundColor="#99CC33",r.textColo="#3399CC",u.value.pop()},$=()=>{const y=Oe(new Date(t.value[0]));t.value=[y[0],y.at(-1)]},F=()=>{const y=Ne(new Date(t.value.at(-1)));t.value=[y[0],y.at(-1)]},q=()=>{const y=new Date,W=Fe();s.value=`${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,"0")}-${String(y.getDate()).padStart(2,"0")}`,t.value=[W[0],W.at(-1)]};return(y,W)=>(x(),_("div",Ze,[g("div",{class:"head"},[Ie,g("button",{onClick:h},"\u4E0B\u8F7D\u56FE\u7247"),g("button",{onClick:b},"\u66F4\u6362\u9AD8\u4EAE"),g("button",{onClick:$},"\u4E0A\u4E00\u6708"),g("button",{onClick:F},"\u4E0B\u4E00\u6708"),g("button",{onClick:q},"\u4ECA\u5929")]),g("div",et,[tt,ve(Ue,{ref_key:"gantt",ref:p,data:u.value,itemText:"\u6E38\u620F/\u9879\u76EE",dateText:"\u65E5\u671F",activeDate:s.value,itemWidth:i.value,itemHeight:f.value,scheduleTitle:c,dateRangeList:t.value,repeatMode:te(r),alikeName:v,onScheduleClick:C,onScrollYEnd:w},null,8,["data","activeDate","itemWidth","itemHeight","dateRangeList","repeatMode"])])]))}};var ot=ne(nt,[["__scopeId","data-v-7a05904b"]]);be(ot).mount("#app");
