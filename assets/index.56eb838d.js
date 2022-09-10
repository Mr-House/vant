import{V as s}from"./index.b7bf9a84.js";import{V as z}from"./index.ebd5e50a.js";import{c as d}from"./index.8aada796.js";import{T as m}from"./function-call.668cd34a.js";import{a as _}from"./use-translate.adc2ccf9.js";import{z as S,C as p,r as j,o as y,a as B,e as u,w as i,B as e,h as D,t as w,d as T,F as L}from"./vue-libs.a65f1bfc.js";import"./with-install.007edd36.js";import"./use-expose.9b1749d6.js";import"./index.55cbeda9.js";import"./function-call.973472e6.js";import"./mount-component.1ad90cc4.js";import"./constant.80c6de18.js";import"./interceptor.e2b79e43.js";import"./index.f3179bc1.js";import"./use-touch.ffb74f5c.js";import"./on-popup-reopen.76ccb88c.js";import"./index.6376440d.js";import"./use-lazy-render.965a094b.js";import"./index.8af07ca5.js";import"./index.b35e7802.js";import"./index.49155860.js";import"./use-route.985ba6da.js";const N={class:"preview-cover van-ellipsis"},oe=S({__name:"index",setup(R){const l=_({"zh-CN":{status:"\u4E0A\u4F20\u72B6\u6001",failed:"\u4E0A\u4F20\u5931\u8D25",upload:"\u4E0A\u4F20\u6587\u4EF6",preview:"\u6587\u4EF6\u9884\u89C8",maxSize:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F",disabled:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20",maxCount:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF",uploading:"\u4E0A\u4F20\u4E2D...",imageName:"\u56FE\u7247\u540D\u79F0",beforeRead:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406",overSizeTip:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500kb",invalidType:"\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247",customUpload:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",previewSize:"\u81EA\u5B9A\u4E49\u9884\u89C8\u5927\u5C0F",previewCover:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F",deleteMessage:"\u5220\u9664\u524D\u7F6E\u5904\u7406",customPreviewImage:"\u81EA\u5B9A\u4E49\u5355\u4E2A\u56FE\u7247\u9884\u89C8"},"en-US":{status:"Upload Status",failed:"Failed",upload:"Upload File",preview:"Preview File",maxSize:"Max Size",disabled:"Disable Uploader",maxCount:"Max Count",uploading:"Uploading...",imageName:"Image Name",beforeRead:"Before Read",overSizeTip:"File size cannot exceed 500kb",invalidType:"Please upload an image in jpg format",customUpload:"Custom Upload Area",previewSize:"Preview Size",previewCover:"Preview Cover",deleteMessage:"Before Delete",customPreviewImage:"Custom single preview image"}}),n=p([{url:d("leaf.jpeg")},{url:d("tree.jpeg")}]),f=p([{url:d("sand.jpeg")}]),v=p([]),g=p([{url:d("sand.jpeg")}]),F=p([{url:d("sand.jpeg"),deletable:!0,beforeDelete:()=>{m(l("deleteMessage"))}},{url:d("tree.jpeg"),imageFit:"contain"}]),E=p([{url:d("leaf.jpeg"),status:"uploading",message:l("uploading")},{url:d("tree.jpeg"),status:"failed",message:l("failed")}]),V=p([{url:d("leaf.jpeg"),file:{name:l("imageName")}}]),C=p([{url:d("leaf.jpeg")}]),U=o=>Array.isArray(o)?!0:o.type!=="image/jpeg"?(m(l("invalidType")),!1):!0,A=(o,a)=>{console.log(o,a)},c=o=>{o.status="uploading",o.message=l("uploading"),setTimeout(()=>{o.status="failed",o.message=l("failed")},1e3)},b=o=>{Array.isArray(o)?o.forEach(c):c(o)},x=(o,a)=>{console.log(o,a),m(l("overSizeTip"))};return(o,a)=>{const r=j("demo-block");return y(),B(L,null,[u(r,{title:e(l)("basicUsage")},{default:i(()=>[u(e(s),{"after-read":A})]),_:1},8,["title"]),u(r,{title:e(l)("preview")},{default:i(()=>[u(e(s),{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=t=>n.value=t),multiple:"",accept:"*"},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("status")},{default:i(()=>[u(e(s),{modelValue:E.value,"onUpdate:modelValue":a[1]||(a[1]=t=>E.value=t),"after-read":b},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("maxCount")},{default:i(()=>[u(e(s),{modelValue:f.value,"onUpdate:modelValue":a[2]||(a[2]=t=>f.value=t),multiple:"","max-count":2},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("maxSize")},{default:i(()=>[u(e(s),{modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=t=>g.value=t),multiple:"","max-size":500*1024,onOversize:x},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("customUpload")},{default:i(()=>[u(e(s),null,{default:i(()=>[u(e(z),{type:"primary",icon:"plus"},{default:i(()=>[D(w(e(l)("upload")),1)]),_:1})]),_:1})]),_:1},8,["title"]),u(r,{title:e(l)("previewCover")},{default:i(()=>[u(e(s),{modelValue:V.value,"onUpdate:modelValue":a[4]||(a[4]=t=>V.value=t)},{"preview-cover":i(({file:t})=>[T("div",N,w(t.name),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("previewSize")},{default:i(()=>[u(e(s),{modelValue:C.value,"onUpdate:modelValue":a[5]||(a[5]=t=>C.value=t),"preview-size":"60"},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("beforeRead")},{default:i(()=>[u(e(s),{modelValue:v.value,"onUpdate:modelValue":a[6]||(a[6]=t=>v.value=t),"before-read":U},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("disabled")},{default:i(()=>[u(e(s),{"after-read":A,disabled:""})]),_:1},8,["title"]),u(r,{title:e(l)("customPreviewImage")},{default:i(()=>[u(e(s),{modelValue:F.value,"onUpdate:modelValue":a[7]||(a[7]=t=>F.value=t),multiple:"",accept:"*",deletable:!1},null,8,["modelValue"])]),_:1},8,["title"])],64)}}});export{oe as default};
