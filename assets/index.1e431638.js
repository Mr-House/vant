import{c as Re,_ as Te,p as De,e as Ie,a as Le}from"./use-translate.7b7055b3.js";import{m as ne,b as je,n as Me,t as G,u as _e,w as Be}from"./with-install.a0877b0b.js";import{f as Fe}from"./constant.e12a51b9.js";import{u as _,x as re,A as ye,M as Ne,R as qe,I as We,e as d,B as Ue,F as ae,q as Ve,r as He,o as fe,a as pe,w as b,C as f,h as q,t as W,d as ge,b as Xe}from"./vue-libs.d5ee895a.js";import{I as Ye}from"./index.bc61928d.js";import{P as Oe}from"./index.e2854e14.js";import{B as U}from"./index.516742fc.js";import{F as $e}from"./index.a42c8d99.js";import{P as ze}from"./index.0769075a.js";import{G as Ge,a as Je}from"./index.c8e55403.js";import{s as Ke}from"./index.81c7a5b9.js";import"./index.16bdfc10.js";import"./interceptor.adacec7f.js";import"./use-expose.77504c28.js";import"./use-touch.e8c4f7e8.js";import"./use-lazy-render.8319bb4a.js";import"./on-popup-reopen.5b484164.js";import"./index.03cbc9c0.js";import"./use-route.55b36618.js";import"./index.d7a56972.js";import"./index.b878185c.js";import"./use-id.283fca96.js";import"./Picker.b07ba470.js";import"./index.b6891a8c.js";import"./index.25303511.js";import"./use-refs.9408eccb.js";import"./index.6c1120f3.js";import"./mount-component.01a10567.js";function P(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ue(t){var e=P(t).Element;return t instanceof e||t instanceof Element}function C(t){var e=P(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function xe(t){if(typeof ShadowRoot>"u")return!1;var e=P(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var H=Math.round;function ie(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Qe(){return!/^((?!chrome|android).)*safari/i.test(ie())}function Q(t,e,o){e===void 0&&(e=!1),o===void 0&&(o=!1);var n=t.getBoundingClientRect(),r=1,i=1;e&&C(t)&&(r=t.offsetWidth>0&&H(n.width)/t.offsetWidth||1,i=t.offsetHeight>0&&H(n.height)/t.offsetHeight||1);var c=ue(t)?P(t):window,u=c.visualViewport,s=!Qe()&&o,l=(n.left+(s&&u?u.offsetLeft:0))/r,a=(n.top+(s&&u?u.offsetTop:0))/i,h=n.width/r,v=n.height/i;return{width:h,height:v,top:a,right:l+h,bottom:a+v,left:l,x:l,y:a}}function Ee(t){var e=P(t),o=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:o,scrollTop:n}}function Ze(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function et(t){return t===P(t)||!C(t)?Ee(t):Ze(t)}function R(t){return t?(t.nodeName||"").toLowerCase():null}function te(t){return((ue(t)?t.ownerDocument:t.document)||window.document).documentElement}function tt(t){return Q(te(t)).left+Ee(t).scrollLeft}function T(t){return P(t).getComputedStyle(t)}function ce(t){var e=T(t),o=e.overflow,n=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function ot(t){var e=t.getBoundingClientRect(),o=H(e.width)/t.offsetWidth||1,n=H(e.height)/t.offsetHeight||1;return o!==1||n!==1}function nt(t,e,o){o===void 0&&(o=!1);var n=C(e),r=C(e)&&ot(e),i=te(e),c=Q(t,r,o),u={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!o)&&((R(e)!=="body"||ce(i))&&(u=et(e)),C(e)?(s=Q(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):i&&(s.x=tt(i))),{x:c.left+u.scrollLeft-s.x,y:c.top+u.scrollTop-s.y,width:c.width,height:c.height}}function rt(t){var e=Q(t),o=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:n}}function le(t){return R(t)==="html"?t:t.assignedSlot||t.parentNode||(xe(t)?t.host:null)||te(t)}function Se(t){return["html","body","#document"].indexOf(R(t))>=0?t.ownerDocument.body:C(t)&&ce(t)?t:Se(le(t))}function K(t,e){var o;e===void 0&&(e=[]);var n=Se(t),r=n===((o=t.ownerDocument)==null?void 0:o.body),i=P(n),c=r?[i].concat(i.visualViewport||[],ce(n)?n:[]):n,u=e.concat(c);return r?u:u.concat(K(le(c)))}function at(t){return["table","td","th"].indexOf(R(t))>=0}function de(t){return!C(t)||T(t).position==="fixed"?null:t.offsetParent}function it(t){var e=/firefox/i.test(ie()),o=/Trident/i.test(ie());if(o&&C(t)){var n=T(t);if(n.position==="fixed")return null}var r=le(t);for(xe(r)&&(r=r.host);C(r)&&["html","body"].indexOf(R(r))<0;){var i=T(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function ke(t){for(var e=P(t),o=de(t);o&&at(o)&&T(o).position==="static";)o=de(o);return o&&(R(o)==="html"||R(o)==="body"&&T(o).position==="static")?e:o||it(t)||e}var V="top",Z="bottom",z="right",B="left",Ce="auto",st=[V,Z,z,B],Pe="start",ee="end",ut=[].concat(st,[Ce]).reduce(function(t,e){return t.concat([e,e+"-"+Pe,e+"-"+ee])},[]),ct="beforeRead",lt="read",ft="afterRead",pt="beforeMain",dt="main",vt="afterMain",mt="beforeWrite",ht="write",wt="afterWrite",se=[ct,lt,ft,pt,dt,vt,mt,ht,wt];function bt(t){var e=new Map,o=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function r(i){o.add(i.name);var c=[].concat(i.requires||[],i.requiresIfExists||[]);c.forEach(function(u){if(!o.has(u)){var s=e.get(u);s&&r(s)}}),n.push(i)}return t.forEach(function(i){o.has(i.name)||r(i)}),n}function yt(t){var e=bt(t);return se.reduce(function(o,n){return o.concat(e.filter(function(r){return r.phase===n}))},[])}function gt(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function D(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];return[].concat(o).reduce(function(r,i){return r.replace(/%s/,i)},t)}var L='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',Ot='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',ve=["name","enabled","phase","fn","effect","requires","options"];function xt(t){t.forEach(function(e){[].concat(Object.keys(e),ve).filter(function(o,n,r){return r.indexOf(o)===n}).forEach(function(o){switch(o){case"name":typeof e.name!="string"&&console.error(D(L,String(e.name),'"name"','"string"','"'+String(e.name)+'"'));break;case"enabled":typeof e.enabled!="boolean"&&console.error(D(L,e.name,'"enabled"','"boolean"','"'+String(e.enabled)+'"'));break;case"phase":se.indexOf(e.phase)<0&&console.error(D(L,e.name,'"phase"',"either "+se.join(", "),'"'+String(e.phase)+'"'));break;case"fn":typeof e.fn!="function"&&console.error(D(L,e.name,'"fn"','"function"','"'+String(e.fn)+'"'));break;case"effect":e.effect!=null&&typeof e.effect!="function"&&console.error(D(L,e.name,'"effect"','"function"','"'+String(e.fn)+'"'));break;case"requires":e.requires!=null&&!Array.isArray(e.requires)&&console.error(D(L,e.name,'"requires"','"array"','"'+String(e.requires)+'"'));break;case"requiresIfExists":Array.isArray(e.requiresIfExists)||console.error(D(L,e.name,'"requiresIfExists"','"array"','"'+String(e.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+e.name+'" modifier, valid properties are '+ve.map(function(n){return'"'+n+'"'}).join(", ")+'; but "'+o+'" was provided.')}e.requires&&e.requires.forEach(function(n){t.find(function(r){return r.name===n})==null&&console.error(D(Ot,String(e.name),n,n))})})})}function Et(t,e){var o=new Set;return t.filter(function(n){var r=e(n);if(!o.has(r))return o.add(r),!0})}function oe(t){return t.split("-")[0]}function St(t){var e=t.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(e).map(function(o){return e[o]})}function Ae(t){return t.split("-")[1]}function kt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ct(t){var e=t.reference,o=t.element,n=t.placement,r=n?oe(n):null,i=n?Ae(n):null,c=e.x+e.width/2-o.width/2,u=e.y+e.height/2-o.height/2,s;switch(r){case V:s={x:c,y:e.y-o.height};break;case Z:s={x:c,y:e.y+e.height};break;case z:s={x:e.x+e.width,y:u};break;case B:s={x:e.x-o.width,y:u};break;default:s={x:e.x,y:e.y}}var l=r?kt(r):null;if(l!=null){var a=l==="y"?"height":"width";switch(i){case Pe:s[l]=s[l]-(e[a]/2-o[a]/2);break;case ee:s[l]=s[l]+(e[a]/2-o[a]/2);break}}return s}var me="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",Pt="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",he={placement:"bottom",modifiers:[],strategy:"absolute"};function we(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function At(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,n=o===void 0?[]:o,r=e.defaultOptions,i=r===void 0?he:r;return function(u,s,l){l===void 0&&(l=i);var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},he,i),modifiersData:{},elements:{reference:u,popper:s},attributes:{},styles:{}},h=[],v=!1,w={state:a,setOptions:function(E){var p=typeof E=="function"?E(a.options):E;x(),a.options=Object.assign({},i,a.options,p),a.scrollParents={reference:ue(u)?K(u):u.contextElement?K(u.contextElement):[],popper:K(s)};var y=yt(St([].concat(n,a.options.modifiers)));a.orderedModifiers=y.filter(function(k){return k.enabled});{var S=Et([].concat(y,a.options.modifiers),function(k){var N=k.name;return N});if(xt(S),oe(a.options.placement)===Ce){var g=a.orderedModifiers.find(function(k){var N=k.name;return N==="flip"});g||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" "))}var m=T(s),A=m.marginTop,I=m.marginRight,X=m.marginBottom,Y=m.marginLeft;[A,I,X,Y].some(function(k){return parseFloat(k)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" "))}return F(),w.update()},forceUpdate:function(){if(!v){var E=a.elements,p=E.reference,y=E.popper;if(!we(p,y)){console.error(me);return}a.rects={reference:nt(p,ke(y),a.options.strategy==="fixed"),popper:rt(y)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(k){return a.modifiersData[k.name]=Object.assign({},k.data)});for(var S=0,g=0;g<a.orderedModifiers.length;g++){if(S+=1,S>100){console.error(Pt);break}if(a.reset===!0){a.reset=!1,g=-1;continue}var m=a.orderedModifiers[g],A=m.fn,I=m.options,X=I===void 0?{}:I,Y=m.name;typeof A=="function"&&(a=A({state:a,options:X,name:Y,instance:w})||a)}}},update:gt(function(){return new Promise(function(O){w.forceUpdate(),O(a)})}),destroy:function(){x(),v=!0}};if(!we(u,s))return console.error(me),w;w.setOptions(l).then(function(O){!v&&l.onFirstUpdate&&l.onFirstUpdate(O)});function F(){a.orderedModifiers.forEach(function(O){var E=O.name,p=O.options,y=p===void 0?{}:p,S=O.effect;if(typeof S=="function"){var g=S({state:a,name:E,instance:w,options:y}),m=function(){};h.push(g||m)}})}function x(){h.forEach(function(O){return O()}),h=[]}return w}}var J={passive:!0};function Rt(t){var e=t.state,o=t.instance,n=t.options,r=n.scroll,i=r===void 0?!0:r,c=n.resize,u=c===void 0?!0:c,s=P(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(a){a.addEventListener("scroll",o.update,J)}),u&&s.addEventListener("resize",o.update,J),function(){i&&l.forEach(function(a){a.removeEventListener("scroll",o.update,J)}),u&&s.removeEventListener("resize",o.update,J)}}var Tt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Rt,data:{}};function Dt(t){var e=t.state,o=t.name;e.modifiersData[o]=Ct({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var It={name:"popperOffsets",enabled:!0,phase:"read",fn:Dt,data:{}},Lt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function jt(t){var e=t.x,o=t.y,n=window,r=n.devicePixelRatio||1;return{x:H(e*r)/r||0,y:H(o*r)/r||0}}function be(t){var e,o=t.popper,n=t.popperRect,r=t.placement,i=t.variation,c=t.offsets,u=t.position,s=t.gpuAcceleration,l=t.adaptive,a=t.roundOffsets,h=t.isFixed,v=c.x,w=v===void 0?0:v,F=c.y,x=F===void 0?0:F,O=typeof a=="function"?a({x:w,y:x}):{x:w,y:x};w=O.x,x=O.y;var E=c.hasOwnProperty("x"),p=c.hasOwnProperty("y"),y=B,S=V,g=window;if(l){var m=ke(o),A="clientHeight",I="clientWidth";if(m===P(o)&&(m=te(o),T(m).position!=="static"&&u==="absolute"&&(A="scrollHeight",I="scrollWidth")),m=m,r===V||(r===B||r===z)&&i===ee){S=Z;var X=h&&m===g&&g.visualViewport?g.visualViewport.height:m[A];x-=X-n.height,x*=s?1:-1}if(r===B||(r===V||r===Z)&&i===ee){y=z;var Y=h&&m===g&&g.visualViewport?g.visualViewport.width:m[I];w-=Y-n.width,w*=s?1:-1}}var k=Object.assign({position:u},l&&Lt),N=a===!0?jt({x:w,y:x}):{x:w,y:x};if(w=N.x,x=N.y,s){var $;return Object.assign({},k,($={},$[S]=p?"0":"",$[y]=E?"0":"",$.transform=(g.devicePixelRatio||1)<=1?"translate("+w+"px, "+x+"px)":"translate3d("+w+"px, "+x+"px, 0)",$))}return Object.assign({},k,(e={},e[S]=p?x+"px":"",e[y]=E?w+"px":"",e.transform="",e))}function Mt(t){var e=t.state,o=t.options,n=o.gpuAcceleration,r=n===void 0?!0:n,i=o.adaptive,c=i===void 0?!0:i,u=o.roundOffsets,s=u===void 0?!0:u;{var l=T(e.elements.popper).transitionProperty||"";c&&["transform","top","right","bottom","left"].some(function(h){return l.indexOf(h)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',`

`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var a={placement:oe(e.placement),variation:Ae(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,be(Object.assign({},a,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,be(Object.assign({},a,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var _t={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Mt,data:{}};function Bt(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var n=e.styles[o]||{},r=e.attributes[o]||{},i=e.elements[o];!C(i)||!R(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(c){var u=r[c];u===!1?i.removeAttribute(c):i.setAttribute(c,u===!0?"":u)}))})}function Ft(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(n){var r=e.elements[n],i=e.attributes[n]||{},c=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:o[n]),u=c.reduce(function(s,l){return s[l]="",s},{});!C(r)||!R(r)||(Object.assign(r.style,u),Object.keys(i).forEach(function(s){r.removeAttribute(s)}))})}}var Nt={name:"applyStyles",enabled:!0,phase:"write",fn:Bt,effect:Ft,requires:["computeStyles"]},qt=[Tt,It,_t,Nt],Wt=At({defaultModifiers:qt});function Ut(t,e,o){var n=oe(t),r=[B,V].indexOf(n)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,c=i[0],u=i[1];return c=c||0,u=(u||0)*r,[B,z].indexOf(n)>=0?{x:u,y:c}:{x:c,y:u}}function Vt(t){var e=t.state,o=t.options,n=t.name,r=o.offset,i=r===void 0?[0,0]:r,c=ut.reduce(function(a,h){return a[h]=Ut(h,e.rects,i),a},{}),u=c[e.placement],s=u.x,l=u.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=l),e.modifiersData[n]=c}var Ht={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Vt};const Xt=(t,e)=>{const o=_(t());return re(t,n=>{n!==o.value&&(o.value=n)}),re(o,n=>{n!==t()&&e(n)}),o},[Yt,j]=Re("popover"),$t=["overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"],zt={show:Boolean,theme:ne("light"),overlay:Boolean,actions:je(),trigger:ne("click"),duration:Me,showArrow:G,placement:ne("bottom"),iconPrefix:String,overlayClass:_e,overlayStyle:Object,closeOnClickAction:G,closeOnClickOverlay:G,closeOnClickOutside:G,offset:{type:Array,default:()=>[0,8]},teleport:{type:[String,Object],default:"body"}},Gt=ye({name:Yt,props:zt,emits:["select","touchstart","update:show"],setup(t,{emit:e,slots:o,attrs:n}){let r;const i=_(),c=_(),u=_(),s=Xt(()=>t.show,p=>e("update:show",p)),l=()=>({placement:t.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},Ie({},Ht,{options:{offset:t.offset}})]}),a=()=>c.value&&u.value?Wt(c.value,u.value.popupRef.value,l()):null,h=()=>{Ve(()=>{!s.value||(r?r.setOptions(l()):r=a())})},v=p=>{s.value=p},w=()=>{t.trigger==="click"&&(s.value=!s.value)},F=(p,y)=>{p.disabled||(e("select",p,y),t.closeOnClickAction&&(s.value=!1))},x=()=>{s.value&&t.closeOnClickOutside&&(!t.overlay||t.closeOnClickOverlay)&&(s.value=!1)},O=(p,y)=>o.action?o.action({action:p,index:y}):[p.icon&&d(Ye,{name:p.icon,classPrefix:t.iconPrefix,class:j("action-icon")},null),d("div",{class:[j("action-text"),Fe]},[p.text])],E=(p,y)=>{const{icon:S,color:g,disabled:m,className:A}=p;return d("div",{role:"menuitem",class:[j("action",{disabled:m,"with-icon":S}),A],style:{color:g},tabindex:m?void 0:0,"aria-disabled":m||void 0,onClick:()=>F(p,y)},[O(p,y)])};return Ne(()=>{h(),qe(()=>{var p;i.value=(p=u.value)==null?void 0:p.popupRef.value})}),We(()=>{r&&(r.destroy(),r=null)}),re(()=>[s.value,t.offset,t.placement],h),Te([c,i],x,{eventName:"touchstart"}),()=>{var p;return d(ae,null,[d("span",{ref:c,class:j("wrapper"),onClick:w},[(p=o.reference)==null?void 0:p.call(o)]),d(Oe,Ue({ref:u,show:s.value,class:j([t.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,"onUpdate:show":v},n,De(t,$t)),{default:()=>[t.showArrow&&d("div",{class:j("arrow")},null),d("div",{role:"menu",class:j("content")},[o.default?o.default():t.actions.map(E)])]})])}}}),M=Be(Gt),Jt={class:"demo-popover-box"},Kt=ge("div",{class:"demo-popover-refer"},null,-1),Po=ye({__name:"index",setup(t){const e=Le({"zh-CN":{actions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"},{text:"\u9009\u9879\u4E09"}],shortActions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"}],actionsWithIcon:[{text:"\u9009\u9879\u4E00",icon:"add-o"},{text:"\u9009\u9879\u4E8C",icon:"music-o"},{text:"\u9009\u9879\u4E09",icon:"more-o"}],actionsDisabled:[{text:"\u9009\u9879\u4E00",disabled:!0},{text:"\u9009\u9879\u4E8C",disabled:!0},{text:"\u9009\u9879\u4E09"}],showIcon:"\u5C55\u793A\u56FE\u6807",placement:"\u5F39\u51FA\u4F4D\u7F6E",darkTheme:"\u6DF1\u8272\u98CE\u683C",lightTheme:"\u6D45\u8272\u98CE\u683C",showPopover:"\u70B9\u51FB\u5F39\u51FA\u6C14\u6CE1",uncontrolled:"\u975E\u53D7\u63A7\u6A21\u5F0F",actionOptions:"\u9009\u9879\u914D\u7F6E",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",disableAction:"\u7981\u7528\u9009\u9879",choosePlacement:"\u9009\u62E9\u5F39\u51FA\u4F4D\u7F6E"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",uncontrolled:"Uncontrolled",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement"}}),o=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"].map(l=>({text:l,value:l})),n=_({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1}),r=_(!1),i=_("top"),c=()=>{r.value=!0,setTimeout(()=>{n.value={...n.value,placement:!0}},300)},u=l=>{setTimeout(()=>{n.value.placement=!0,i.value=l.selectedValues[0]})},s=l=>Ke(l.text);return(l,a)=>{const h=He("demo-block");return fe(),pe(ae,null,[d(h,{title:f(e)("basicUsage")},{default:b(()=>[d(f(M),{show:n.value.lightTheme,"onUpdate:show":a[0]||(a[0]=v=>n.value.lightTheme=v),actions:f(e)("actions"),placement:"bottom-start",onSelect:s},{reference:b(()=>[d(f(U),{type:"primary"},{default:b(()=>[q(W(f(e)("lightTheme")),1)]),_:1})]),_:1},8,["show","actions"]),d(f(M),{show:n.value.darkTheme,"onUpdate:show":a[1]||(a[1]=v=>n.value.darkTheme=v),theme:"dark",actions:f(e)("actions"),onSelect:s},{reference:b(()=>[d(f(U),{type:"primary"},{default:b(()=>[q(W(f(e)("darkTheme")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(h,{title:f(e)("placement")},{default:b(()=>[d(f($e),{"is-link":"",readonly:"",name:"picker",label:f(e)("choosePlacement"),onClick:c},null,8,["label"]),d(f(Oe),{show:r.value,"onUpdate:show":a[3]||(a[3]=v=>r.value=v),round:"",position:"bottom",teleport:"body"},{default:b(()=>[ge("div",Jt,[d(f(M),{show:n.value.placement,"onUpdate:show":a[2]||(a[2]=v=>n.value.placement=v),theme:"dark",actions:f(e)("shortActions"),placement:i.value,onSelect:s},{reference:b(()=>[Kt]),_:1},8,["show","actions","placement"])]),d(f(ze),{columns:f(o),"show-toolbar":!1,onChange:u},null,8,["columns"])]),_:1},8,["show"])]),_:1},8,["title"]),d(h,{title:f(e)("actionOptions")},{default:b(()=>[d(f(M),{show:n.value.showIcon,"onUpdate:show":a[4]||(a[4]=v=>n.value.showIcon=v),actions:f(e)("actionsWithIcon"),placement:"bottom-start",onSelect:s},{reference:b(()=>[d(f(U),{type:"primary"},{default:b(()=>[q(W(f(e)("showIcon")),1)]),_:1})]),_:1},8,["show","actions"]),d(f(M),{show:n.value.disableAction,"onUpdate:show":a[5]||(a[5]=v=>n.value.disableAction=v),actions:f(e)("actionsDisabled"),onSelect:s},{reference:b(()=>[d(f(U),{type:"primary"},{default:b(()=>[q(W(f(e)("disableAction")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(h,{title:f(e)("customContent")},{default:b(()=>[d(f(M),{show:n.value.customContent,"onUpdate:show":a[7]||(a[7]=v=>n.value.customContent=v),placement:"top-start",onSelect:s},{reference:b(()=>[d(f(U),{type:"primary"},{default:b(()=>[q(W(f(e)("customContent")),1)]),_:1})]),default:b(()=>[d(f(Ge),{square:"",clickable:"",border:!1,"column-num":"3",style:{width:"240px"}},{default:b(()=>[(fe(),pe(ae,null,Xe(6,v=>d(f(Je),{key:v,icon:"photo-o",text:f(e)("option"),onClick:a[6]||(a[6]=w=>n.value.customContent=!1)},null,8,["text"])),64))]),_:1})]),_:1},8,["show"])]),_:1},8,["title"]),d(h,{title:f(e)("uncontrolled")},{default:b(()=>[d(f(M),{actions:f(e)("actions"),placement:"top-start",onSelect:s},{reference:b(()=>[d(f(U),{type:"primary"},{default:b(()=>[q(W(f(e)("uncontrolled")),1)]),_:1})]),_:1},8,["actions"])]),_:1},8,["title"])],64)}}});export{Po as default};
