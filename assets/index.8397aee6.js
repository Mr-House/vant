import{c,e as u,q as d,h as m}from"./use-translate.7145ee20.js";import{n as l,m as p,w as S}from"./with-install.756837d9.js";import{e as n,z as f,C as g}from"./vue-libs.84e059bd.js";const[x,a]=c("loading"),v=Array(12).fill(null).map((e,r)=>n("i",{class:a("line",String(r+1))},null)),y=n("svg",{class:a("circular"),viewBox:"25 25 50 50"},[n("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),z={size:l,type:p("circular"),color:String,vertical:Boolean,textSize:l,textColor:String};var C=f({name:x,props:z,setup(e,{slots:r}){const s=g(()=>u({color:e.color},d(e.size))),o=()=>{var t;if(r.default)return n("span",{class:a("text"),style:{fontSize:m(e.textSize),color:(t=e.textColor)!=null?t:e.color}},[r.default()])};return()=>{const{type:t,vertical:i}=e;return n("div",{class:a([t,{vertical:i}])},[n("span",{class:a("spinner",t),style:s.value},[t==="spinner"?v:y]),o()])}}});const j=S(C);export{j as L};