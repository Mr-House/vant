import{b as r,V as c}from"./index.009e0a62.js";import{a as M}from"./index.55cbeda9.js";import{a as D}from"./use-translate.adc2ccf9.js";import{T as P}from"./function-call.668cd34a.js";import{z as w,C as f,r as V,o as v,c as $,w as i,e as l,a as d,b as m,B as t,h as o,t as u,F as p}from"./vue-libs.a65f1bfc.js";import"./with-install.007edd36.js";import"./use-id.8a05d67e.js";import"./use-expose.9b1749d6.js";import"./use-route.985ba6da.js";import"./index.f3179bc1.js";import"./use-touch.ffb74f5c.js";import"./on-popup-reopen.76ccb88c.js";import"./constant.80c6de18.js";import"./interceptor.e2b79e43.js";import"./use-refs.9d0b72bf.js";import"./index.c57343ad.js";import"./mount-component.1ad90cc4.js";import"./index.6376440d.js";import"./use-lazy-render.965a094b.js";import"./index.8af07ca5.js";import"./index.49155860.js";const j=w({__name:"Shrink",setup(z){const a=D({"zh-CN":{tab:"\u6807\u7B7E ",shrink:"\u6536\u7F29\u5E03\u5C40"},"en-US":{tab:"Tab ",shrink:"Shrink"}}),k=[1,2,3,4],y=f(0),B=f(0);return(g,_)=>{const E=V("demo-block");return v(),$(E,{title:t(a)("shrink")},{default:i(()=>[l(t(c),{active:y.value,"onUpdate:active":_[0]||(_[0]=s=>y.value=s),shrink:""},{default:i(()=>[(v(),d(p,null,m(k,s=>l(t(r),{title:t(a)("tab")+s,key:s},{default:i(()=>[o(u(t(a)("content"))+" "+u(s),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"]),l(t(c),{active:B.value,"onUpdate:active":_[1]||(_[1]=s=>B.value=s),type:"card",shrink:"",style:{"margin-top":"var(--van-padding-lg)"}},{default:i(()=>[(v(),d(p,null,m(k,s=>l(t(r),{title:t(a)("tab")+s,key:s},{default:i(()=>[o(u(t(a)("content"))+" "+u(s),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"])}}}),ot=w({__name:"index",setup(z){const a=D({"zh-CN":{tab:"\u6807\u7B7E ",title2:"\u6807\u7B7E\u680F\u6EDA\u52A8",title3:"\u7981\u7528\u6807\u7B7E",title4:"\u6837\u5F0F\u98CE\u683C",title5:"\u70B9\u51FB\u4E8B\u4EF6",title6:"\u7C98\u6027\u5E03\u5C40",title7:"\u81EA\u5B9A\u4E49\u6807\u7B7E",title8:"\u5207\u6362\u52A8\u753B",title9:"\u6ED1\u52A8\u5207\u6362",title10:"\u6EDA\u52A8\u5BFC\u822A",disabled:" \u5DF2\u88AB\u7981\u7528",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",beforeChange:"\u5F02\u6B65\u5207\u6362"},"en-US":{tab:"Tab ",content:"content of tab",title2:"Swipe Tabs",title3:"Disabled Tab",title4:"Card Style",title5:"Click Event",title6:"Sticky",title7:"Custom Tab",title8:"Switch Animation",title9:"Swipeable",title10:"Scrollspy",disabled:" is disabled",matchByName:"Match By Name",beforeChange:"Before Change"}}),k=f(0),y=f(0),B=f(0),g=f(0),_=f(0),E=f(0),s=f(0),F=f(0),A=f(0),T=f(0),S=f(0),N=f("b"),U=[1,2,3,4],I=({title:C})=>{P(C)},L=C=>C===1?!1:new Promise(n=>{n(C!==3)});return(C,n)=>{const b=V("demo-block");return v(),d(p,null,[l(b,{title:t(a)("basicUsage")},{default:i(()=>[l(t(c),{active:k.value,"onUpdate:active":n[0]||(n[0]=e=>k.value=e)},{default:i(()=>[(v(),d(p,null,m(U,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("matchByName")},{default:i(()=>[l(t(c),{active:N.value,"onUpdate:active":n[1]||(n[1]=e=>N.value=e)},{default:i(()=>[l(t(r),{name:"a",title:t(a)("tab")+1},{default:i(()=>[o(u(t(a)("content"))+" 1 ",1)]),_:1},8,["title"]),l(t(r),{name:"b",title:t(a)("tab")+2},{default:i(()=>[o(u(t(a)("content"))+" 2 ",1)]),_:1},8,["title"]),l(t(r),{name:"c",title:t(a)("tab")+3},{default:i(()=>[o(u(t(a)("content"))+" 3 ",1)]),_:1},8,["title"])]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title2")},{default:i(()=>[l(t(c),{active:y.value,"onUpdate:active":n[2]||(n[2]=e=>y.value=e)},{default:i(()=>[(v(),d(p,null,m(8,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title3")},{default:i(()=>[l(t(c),{active:B.value,"onUpdate:active":n[3]||(n[3]=e=>B.value=e)},{default:i(()=>[(v(),d(p,null,m(3,e=>l(t(r),{title:t(a)("tab")+e,disabled:e===2,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title","disabled"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title4")},{default:i(()=>[l(t(c),{active:g.value,"onUpdate:active":n[4]||(n[4]=e=>g.value=e),type:"card"},{default:i(()=>[(v(),d(p,null,m(3,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title5")},{default:i(()=>[l(t(c),{active:_.value,"onUpdate:active":n[5]||(n[5]=e=>_.value=e),onClickTab:I},{default:i(()=>[(v(),d(p,null,m(2,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title6")},{default:i(()=>[l(t(c),{active:E.value,"onUpdate:active":n[6]||(n[6]=e=>E.value=e),sticky:""},{default:i(()=>[(v(),d(p,null,m(U,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(j),l(b,{title:t(a)("title7")},{default:i(()=>[l(t(c),{active:s.value,"onUpdate:active":n[7]||(n[7]=e=>s.value=e)},{default:i(()=>[(v(),d(p,null,m(2,e=>l(t(r),{key:e},{title:i(()=>[l(t(M),{name:"more-o"}),o(u(t(a)("tab")),1)]),default:i(()=>[o(" "+u(t(a)("content"))+" "+u(e),1)]),_:2},1024)),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title8")},{default:i(()=>[l(t(c),{active:F.value,"onUpdate:active":n[8]||(n[8]=e=>F.value=e),animated:""},{default:i(()=>[(v(),d(p,null,m(U,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title9")},{default:i(()=>[l(t(c),{active:A.value,"onUpdate:active":n[9]||(n[9]=e=>A.value=e),swipeable:""},{default:i(()=>[(v(),d(p,null,m(U,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title10")},{default:i(()=>[l(t(c),{active:T.value,"onUpdate:active":n[10]||(n[10]=e=>T.value=e),scrollspy:"",sticky:""},{default:i(()=>[(v(),d(p,null,m(8,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("beforeChange")},{default:i(()=>[l(t(c),{active:S.value,"onUpdate:active":n[11]||(n[11]=e=>S.value=e),"before-change":L},{default:i(()=>[(v(),d(p,null,m(4,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"])],64)}}});export{ot as default};
