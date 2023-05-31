import{F as b,b7 as k,T as w,a$ as x,b8 as D,a4 as M,a9 as G,n as P,q as l,c as p,b9 as V,p as U,H as J,r as h,an as A,al as X,aC as Y,ae as B,af as K,aS as Q,b as Z,ay as ee}from"./index-da17a432.js";function g(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",r=arguments.length>2?arguments[2]:void 0;return b({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:r},origin:{type:String,default:i}},setup(s,c){let{slots:a}=c;return()=>{const t=s.group?k:w;return x(t,{name:e,mode:s.mode,onBeforeEnter(n){n.style.transformOrigin=s.origin},onLeave(n){if(s.leaveAbsolute){const{offsetTop:d,offsetLeft:u,offsetWidth:v,offsetHeight:m}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${d}px`,n.style.left=`${u}px`,n.style.width=`${v}px`,n.style.height=`${m}px`}s.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(s.leaveAbsolute&&n!=null&&n._transitionInitialStyles){const{position:d,top:u,left:v,width:m,height:_}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=d||"",n.style.top=u||"",n.style.left=v||"",n.style.width=m||"",n.style.height=_||""}}},a.default)}}})}function C(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return b({name:e,props:{mode:{type:String,default:r}},setup(s,c){let{slots:a}=c;return()=>x(w,{name:e,...i},a.default)}})}function N(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=D(`offset-${r}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[r]:t.style[r]}},onEnter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const d=`${t[s]}px`;t.style[r]="0",t.offsetHeight,t.style.transition=n.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{t.style[r]=d})},onAfterEnter:a,onEnterCancelled:a,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[r]:t.style[r]},t.style.overflow="hidden",t.style[r]=`${t[s]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[r]="0")},onAfterLeave:c,onLeaveCancelled:c};function c(t){e&&t._parent&&t._parent.classList.remove(e),a(t)}function a(t){const n=t._initialStyle[r];t.style.overflow=t._initialStyle.overflow,n!=null&&(t.style[r]=n),delete t._initialStyle}}g("fab-transition","center center","out-in");g("dialog-bottom-transition");g("dialog-top-transition");g("fade-transition");g("scale-transition");g("scroll-x-transition");g("scroll-x-reverse-transition");g("scroll-y-transition");g("scroll-y-reverse-transition");g("slide-x-transition");g("slide-x-reverse-transition");const le=g("slide-y-transition");g("slide-y-reverse-transition");const ue=C("expand-transition",N()),ce=C("expand-x-transition",N("",!0));function te(e){return{aspectStyles:p(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const ne=b({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...M()},setup(e,i){let{slots:r}=i;const{aspectStyles:s}=te(e),{dimensionStyles:c}=G(e);return P(()=>{var a;return l("div",{class:"v-responsive",style:c.value},[l("div",{class:"v-responsive__sizer",style:s.value},null),(a=r.additional)==null?void 0:a.call(r),r.default&&l("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}});function re(e,i){if(!V)return;const r=i.modifiers||{},s=i.value,{handler:c,options:a}=typeof s=="object"?s:{handler:s,options:{}},t=new IntersectionObserver(function(){var n;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const v=(n=e._observe)==null?void 0:n[i.instance.$.uid];if(!v)return;const m=d.some(_=>_.isIntersecting);c&&(!r.quiet||v.init)&&(!r.once||m||v.init)&&c(m,d,u),m&&r.once?O(e,i):v.init=!0},a);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:t},t.observe(e)}function O(e,i){var r;const s=(r=e._observe)==null?void 0:r[i.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const se={mounted:re,unmounted:O},ae=se,ie=U({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),S=(e,i)=>{let{slots:r}=i;const{transition:s,...c}=e,{component:a=w,...t}=typeof s=="object"?s:{};return x(a,J(typeof s=="string"?{name:s}:t,c),r)},de=b({name:"VImg",directives:{intersect:ae},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...ie()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:r,slots:s}=i;const c=h(""),a=h(),t=h(e.eager?"loading":"idle"),n=h(),d=h(),u=p(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=p(()=>u.value.aspect||n.value/d.value||0);A(()=>e.src,()=>{m(t.value!=="idle")}),X(()=>m());function m(o){if(!(e.eager&&o)&&!(V&&!o&&!e.eager)){if(t.value="loading",u.value.lazySrc){const f=new Image;f.src=u.value.lazySrc,$(f,null)}u.value.src&&Y(()=>{var f,y;if(r("loadstart",((f=a.value)==null?void 0:f.currentSrc)||u.value.src),(y=a.value)!=null&&y.complete){if(a.value.naturalWidth||z(),t.value==="error")return;v.value||$(a.value,null),_()}else v.value||$(a.value),I()})}}function _(){var o;I(),t.value="loaded",r("load",((o=a.value)==null?void 0:o.currentSrc)||u.value.src)}function z(){var o;t.value="error",r("error",((o=a.value)==null?void 0:o.currentSrc)||u.value.src)}function I(){const o=a.value;o&&(c.value=o.currentSrc||o.src)}function $(o){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{const{naturalHeight:E,naturalWidth:L}=o;E||L?(n.value=L,d.value=E):!o.complete&&t.value==="loading"&&f!=null?setTimeout(y,f):(o.currentSrc.endsWith(".svg")||o.currentSrc.startsWith("data:image/svg+xml"))&&(n.value=1,d.value=1)};y()}const T=p(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),F=()=>{var o;if(!u.value.src||t.value==="idle")return null;const f=l("img",{class:["v-img__img",T.value],src:u.value.src,srcset:u.value.srcset,alt:"",sizes:e.sizes,ref:a,onLoad:_,onError:z},null),y=(o=s.sources)==null?void 0:o.call(s);return l(S,{transition:e.transition,appear:!0},{default:()=>[B(y?l("picture",{class:"v-img__picture"},[y,f]):f,[[ee,t.value==="loaded"]])]})},j=()=>l(S,{transition:e.transition},{default:()=>[u.value.lazySrc&&t.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",T.value],src:u.value.lazySrc,alt:""},null)]}),H=()=>s.placeholder?l(S,{transition:e.transition,appear:!0},{default:()=>[(t.value==="loading"||t.value==="error"&&!s.error)&&l("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,W=()=>s.error?l(S,{transition:e.transition,appear:!0},{default:()=>[t.value==="error"&&l("div",{class:"v-img__error"},[s.error()])]}):null,q=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,R=h(!1);{const o=A(v,f=>{f&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{R.value=!0})}),o())})}return P(()=>B(l(ne,{class:["v-img",{"v-img--booting":!R.value}],style:{width:Z(e.width==="auto"?n.value:e.width)},aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>l(Q,null,[l(F,null,null),l(j,null,null),l(q,null,null),l(H,null,null),l(W,null,null)]),default:s.default}),[[K("intersect"),{handler:m,options:e.options},null,{once:!0}]])),{currentSrc:c,image:a,state:t,naturalWidth:n,naturalHeight:d}}});export{ae as I,S as M,de as V,ue as a,le as b,ce as c,ie as m};
