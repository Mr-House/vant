import{c as L,h as _,E as j,n as G,U as Q,V as W,r as D,q as Z,l as p,F as ee}from"./use-translate.adc2ccf9.js";import{c as w,n as E,w as te}from"./with-install.007edd36.js";import{u as ne}from"./use-touch.ffb74f5c.js";import{z as ae,C as x,D as B,e as y}from"./vue-libs.a65f1bfc.js";const[re,f]=L("slider"),ie={min:w(0),max:w(100),step:w(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:E,buttonSize:E,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}},le=ae({name:re,props:ie,emits:["change","drag-end","drag-start","update:modelValue"],setup(t,{emit:g,slots:V}){let S,o,u;const N=x(),A=x(),c=x(),b=ne(),m=B(()=>Number(t.max)-Number(t.min)),M=B(()=>{const e=t.vertical?"width":"height";return{background:t.inactiveColor,[e]:_(t.barHeight)}}),s=e=>t.range&&Array.isArray(e),O=()=>{const{modelValue:e,min:n}=t;return s(e)?`${(e[1]-e[0])*100/m.value}%`:`${(e-Number(n))*100/m.value}%`},R=()=>{const{modelValue:e,min:n}=t;return s(e)?`${(e[0]-Number(n))*100/m.value}%`:"0%"},X=B(()=>{const n={[t.vertical?"height":"width"]:O(),background:t.activeColor};c.value&&(n.transition="none");const a=()=>t.vertical?t.reverse?"bottom":"top":t.reverse?"right":"left";return n[a()]=R(),n}),h=e=>{const n=+t.min,a=+t.max,i=+t.step;e=ee(e,n,a);const r=Math.round((e-n)/i)*i;return W(n,r)},P=(e,n)=>JSON.stringify(e)===JSON.stringify(n),Y=e=>{var i,r;const n=(i=e[0])!=null?i:Number(t.min),a=(r=e[1])!=null?r:Number(t.max);return n>a?[a,n]:[n,a]},d=(e,n)=>{s(e)?e=Y(e).map(h):e=h(e),P(e,t.modelValue)||g("update:modelValue",e),n&&!P(e,u)&&g("change",e)},$=e=>{if(e.stopPropagation(),t.disabled||t.readonly)return;const{min:n,reverse:a,vertical:i,modelValue:r}=t,l=D(N),U=()=>i?a?l.bottom-e.clientY:e.clientY-l.top:a?l.right-e.clientX:e.clientX-l.left,q=i?l.height:l.width,v=Number(n)+U()/q*m.value;if(s(r)){const[k,z]=r,K=(k+z)/2;v<=K?d([v,z],!0):d([k,v],!0)}else d(v,!0)},F=e=>{t.disabled||t.readonly||(b.start(e),o=t.modelValue,s(o)?u=o.map(h):u=h(o),c.value="start")},H=e=>{if(t.disabled||t.readonly)return;c.value==="start"&&g("drag-start",e),p(e,!0),b.move(e),c.value="dragging";const n=D(N),a=t.vertical?b.deltaY.value:b.deltaX.value,i=t.vertical?n.height:n.width;let r=a/i*m.value;if(t.reverse&&(r=-r),s(u)){const l=t.reverse?1-S:S;o[l]=u[l]+r}else o=u+r;d(o)},T=e=>{t.disabled||t.readonly||(c.value==="dragging"&&(d(o,!0),g("drag-end",e)),c.value="")},I=e=>typeof e=="number"?f("button-wrapper",["left","right"][e]):f("button-wrapper",t.reverse?"left":"right"),J=(e,n)=>{if(typeof n=="number"){const a=V[n===0?"left-button":"right-button"];if(a)return a({value:e})}return V.button?V.button({value:e}):y("div",{class:f("button"),style:Z(t.buttonSize)},null)},C=e=>{const n=typeof e=="number"?t.modelValue[e]:t.modelValue;return y("div",{ref:A,role:"slider",class:I(e),tabindex:t.disabled?void 0:0,"aria-valuemin":t.min,"aria-valuenow":n,"aria-valuemax":t.max,"aria-disabled":t.disabled||void 0,"aria-readonly":t.readonly||void 0,"aria-orientation":t.vertical?"vertical":"horizontal",onTouchstartPassive:a=>{typeof e=="number"&&(S=e),F(a)},onTouchend:T,onTouchcancel:T,onClick:Q},[J(n,e)])};return d(t.modelValue),j(()=>t.modelValue),G("touchmove",H,{target:A}),()=>y("div",{ref:N,style:M.value,class:f({vertical:t.vertical,disabled:t.disabled}),onClick:$},[y("div",{class:f("bar"),style:X.value},[t.range?[C(0),C(1)]:C()])])}}),oe=te(le),me=oe;export{me as V};
