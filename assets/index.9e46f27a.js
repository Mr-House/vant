import{c as z,i as W,r as L,Y as I,l as M,F as O,a as j}from"./use-translate.4764287f.js";import{c as X,n as P,w as Y}from"./with-install.bb994bce.js";import{c as $}from"./interceptor.958dcd96.js";import{u as G}from"./use-touch.79e2b006.js";import{u as J}from"./use-expose.6911a823.js";import{z as q,C as _,H as K,D as V,e as l,r as Q,o as Z,a as ee,w as r,B as t,F as te}from"./vue-libs.7ad34eae.js";import{V as p}from"./index.72e98335.js";import{V as R}from"./index.010991be.js";import{V as oe}from"./index.68ec3b0b.js";import{c as le}from"./index.f8bdf99b.js";import{D as ne}from"./function-call.cacba04e.js";import"./constant.80c6de18.js";import"./use-route.13c8c682.js";import"./index.de1d0b70.js";import"./index.eee57e92.js";import"./index.77425977.js";import"./index.6b929cbb.js";import"./mount-component.18ad4a6f.js";import"./index.1557f4e4.js";import"./use-lazy-render.96f053d1.js";import"./on-popup-reopen.c53e1654.js";import"./index.1694d152.js";import"./index.69bf6596.js";import"./use-placeholder.76864190.js";import"./use-height.8c583324.js";const[ae,b]=z("swipe-cell"),se={name:X(""),disabled:Boolean,leftWidth:P,rightWidth:P,beforeClose:Function,stopPropagation:Boolean},re=q({name:ae,props:se,emits:["open","close","click"],setup(n,{emit:o,slots:f}){let i,u,m;const d=_(),w=_(),y=_(),a=K({offset:0,dragging:!1}),g=G(),T=e=>e.value?L(e).width:0,h=V(()=>W(n.leftWidth)?+n.leftWidth:T(w)),C=V(()=>W(n.rightWidth)?+n.rightWidth:T(y)),k=e=>{a.offset=e==="left"?h.value:-C.value,i||(i=!0,o("open",{name:n.name,position:e}))},v=e=>{a.offset=0,i&&(i=!1,o("close",{name:n.name,position:e}))},A=e=>{const s=Math.abs(a.offset),c=.15,U=i?1-c:c,F=e==="left"?h.value:C.value;F&&s>F*U?k(e):v(e)},H=e=>{n.disabled||(m=a.offset,g.start(e))},N=e=>{if(n.disabled)return;const{deltaX:s}=g;g.move(e),g.isHorizontal()&&(u=!0,a.dragging=!0,(!i||s.value*m<0)&&M(e,n.stopPropagation),a.offset=O(s.value+m,-C.value,h.value))},B=()=>{a.dragging&&(a.dragging=!1,A(a.offset>0?"left":"right"),setTimeout(()=>{u=!1},0))},E=(e="outside")=>{o("click",e),i&&!u&&$(n.beforeClose,{args:[{name:n.name,position:e}],done:()=>v(e)})},S=(e,s)=>c=>{s&&c.stopPropagation(),E(e)},D=(e,s)=>{const c=f[e];if(c)return l("div",{ref:s,class:b(e),onClick:S(e,!0)},[c()])};return J({open:k,close:v}),I(d,()=>E("outside"),{eventName:"touchstart"}),()=>{var s;const e={transform:`translate3d(${a.offset}px, 0, 0)`,transitionDuration:a.dragging?"0s":".6s"};return l("div",{ref:d,class:b(),onClick:S("cell",u),onTouchstartPassive:H,onTouchmove:N,onTouchend:B,onTouchcancel:B},[l("div",{class:b("wrapper"),style:e},[D("left",w),(s=f.default)==null?void 0:s.call(f),D("right",y)])])}}}),ie=Y(re),x=ie,Re=q({__name:"index",setup(n){const o=j({"zh-CN":{select:"\u9009\u62E9",delete:"\u5220\u9664",collect:"\u6536\u85CF",title:"\u5355\u5143\u683C",confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",cardTitle:"\u5546\u54C1\u6807\u9898",beforeClose:"\u5F02\u6B65\u5173\u95ED",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}}),f=le("ipad.jpeg"),i=({position:u})=>{switch(u){case"left":case"cell":case"outside":return!0;case"right":return new Promise(m=>{ne.confirm({title:o("confirm")}).then(()=>{m(!0)})})}};return(u,m)=>{const d=Q("demo-block");return Z(),ee(te,null,[l(d,{title:t(o)("basicUsage")},{default:r(()=>[l(t(x),null,{left:r(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:r(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"]),l(t(p),{square:"",type:"primary",text:t(o)("collect")},null,8,["text"])]),default:r(()=>[l(t(R),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"]),l(d,{title:t(o)("customContent")},{default:r(()=>[l(t(x),null,{right:r(()=>[l(t(p),{square:"",type:"danger",class:"delete-button",text:t(o)("delete")},null,8,["text"])]),default:r(()=>[l(t(oe),{num:"2",price:"2.00",desc:t(o)("desc"),title:t(o)("cardTitle"),thumb:t(f)},null,8,["desc","title","thumb"])]),_:1})]),_:1},8,["title"]),l(d,{title:t(o)("beforeClose")},{default:r(()=>[l(t(x),{"before-close":i},{left:r(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:r(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"])]),default:r(()=>[l(t(R),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"])],64)}}});export{Re as default};