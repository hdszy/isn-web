/*!
 *  copyright: sunzhiyang 975263179@qq.com 
 *  time:  2022-1-12 08:34:23
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-257c71fa"],{"2b2e":function(e,t,n){"use strict";n.r(t);var c=n("4c02"),r=(n("83b2"),n("d8e8")),o=(n("7aa1"),n("cf2e")),a=(n("797a"),n("def7")),u=(n("26f5"),n("8430")),l=(n("0a69"),n("c49e"),n("c349")),i=(n("c4aa"),n("c1b8")),d=(n("7f44"),n("b9bd"),n("f2bf")),f=(n("a9e3"),n("6fad")),b=n.n(f),s=n("ed7f"),O={props:{content:{type:String,default:""},height:{type:Number,default:500}},emits:["getHtml"],setup:function(e,t){var n,c=t.expose,r=t.emit,o=e,a=Object(d["ref"])();Object(d["onMounted"])((function(){n=new b.a(a.value),n.config.height=o.height,n.config.placeholder="请输入您的内容",n.config.showFullScreen=!0,n.config.pasteFilterStyle=!1,n.config.uploadImgServer="/upload-img",n.config.uploadImgMaxSize=2097152,n.config.uploadImgMaxLength=5,n.config.uploadFileName="file",n.config.showLinkImgHref=!1,n.config.uploadImgHooks={customInsert:function(e,t){console.log("customInsert",t),e(t.data[0])}},n.config.showLinkVideo=!1,n.config.customAlert=function(e,t){switch(t){case"success":s["b"].success(e);break;case"info":s["b"].info(e);break;case"warning":s["b"].warning(e);break;case"error":s["b"].error(e);break;default:s["b"].info(e);break}},n.create()})),Object(d["onBeforeUnmount"])((function(){n.destroy(),n=null}));var u=function(){r("getHtml",n.txt.html())};return c({getHtml:u}),function(t,n){return Object(d["openBlock"])(),Object(d["createElementBlock"])("div",null,[Object(d["createElementVNode"])("div",{ref_key:"editor",ref:a},Object(d["toDisplayString"])(e.content),513)])}}};const j=O;var m=j,V=n("7b0a"),p=function(e){return Object(d["pushScopeId"])("data-v-2610ed38"),e=e(),Object(d["popScopeId"])(),e},g={class:"forum-publish w"},h={class:"breadcrumb"},w=Object(d["createTextVNode"])("首页"),N=Object(d["createTextVNode"])("本地论坛"),v=Object(d["createTextVNode"])("发布新帖"),x={class:"card"},k=p((function(){return Object(d["createElementVNode"])("div",{class:""},[Object(d["createElementVNode"])("span",null,"发布新帖")],-1)})),_={class:"body"},E={class:"title"},y={class:"content"},z={class:"option"},C={class:"addittion"},I={class:"addittion"},A=Object(d["createTextVNode"])(" 我已阅读并同意《 "),S=Object(d["createTextVNode"])(" 使用协议 "),T=Object(d["createTextVNode"])(" 》 "),$={class:"btn"},Z=Object(d["createTextVNode"])(" 发布帖子"),H=Object(d["createTextVNode"])(" 保存草稿"),U={class:"rule"},q=Object(d["createTextVNode"])("本版积分规则"),B={setup:function(e){var t=Object(d["ref"])(),n=Object(d["reactive"])({loading:!1,check:!1,hftz:!0,inform:!1,onlyAuthor:!1,sord:!1,content:"",title:""}),f={title:[{required:!0,message:"请输入帖子标题",trigger:"blur"}],content:[{required:!0,message:"请输入帖子详细内容",trigger:"blur"}],check:[{required:!0,message:"请您阅读并同意《使用协议》",validator:V["a"],trigger:"blur"}]},b=function(e){n.content=e},s=Object(d["ref"])(null),O=function(){t.value.getHtml(),console.log(n.check),s.value.validate((function(e){if(e){var t=Object(d["toRaw"])(n);console.log(t)}}))};return function(e,j){var V=i["b"],p=i["a"],B=l["a"],F=r["b"],L=u["a"],M=a["a"],J=o["a"],W=r["a"],D=c["a"];return Object(d["openBlock"])(),Object(d["createElementBlock"])("div",g,[Object(d["createElementVNode"])("div",h,[Object(d["createVNode"])(p,{separator:">"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(V,{to:"/home"},{default:Object(d["withCtx"])((function(){return[w]})),_:1}),Object(d["createVNode"])(V,{to:"/forum"},{default:Object(d["withCtx"])((function(){return[N]})),_:1}),Object(d["createVNode"])(V,null,{default:Object(d["withCtx"])((function(){return[v]})),_:1})]})),_:1})]),Object(d["createElementVNode"])("div",x,[Object(d["createVNode"])(D,{shadow:"hover"},{header:Object(d["withCtx"])((function(){return[k]})),default:Object(d["withCtx"])((function(){return[Object(d["createElementVNode"])("div",_,[Object(d["createVNode"])(W,{ref_key:"form",ref:s,model:Object(d["unref"])(n),rules:f},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(F,{label:"文章标题：",prop:"title"},{default:Object(d["withCtx"])((function(){return[Object(d["createElementVNode"])("div",E,[Object(d["createVNode"])(B,{modelValue:Object(d["unref"])(n).title,"onUpdate:modelValue":j[0]||(j[0]=function(e){return Object(d["unref"])(n).title=e}),class:"input",maxlength:"100","show-word-limit":"",placeholder:"请输入帖子的标题，好的标题，才有好的内容。"},null,8,["modelValue"])])]})),_:1}),Object(d["createVNode"])(F,{prop:"content"},{default:Object(d["withCtx"])((function(){return[Object(d["createElementVNode"])("div",y,[Object(d["createVNode"])(Object(d["unref"])(m),{ref_key:"wEditor",ref:t,onGetHtml:b},null,512)])]})),_:1}),Object(d["createElementVNode"])("div",z,[Object(d["createElementVNode"])("div",C,[Object(d["createVNode"])(L,{modelValue:Object(d["unref"])(n).onlyAuthor,"onUpdate:modelValue":j[1]||(j[1]=function(e){return Object(d["unref"])(n).onlyAuthor=e}),label:"回帖仅作者可见",size:"small"},null,8,["modelValue"]),Object(d["createVNode"])(L,{modelValue:Object(d["unref"])(n).sord,"onUpdate:modelValue":j[2]||(j[2]=function(e){return Object(d["unref"])(n).sord=e}),label:"回帖倒叙排列",size:"small"},null,8,["modelValue"]),Object(d["createVNode"])(L,{modelValue:Object(d["unref"])(n).hftz,"onUpdate:modelValue":j[3]||(j[3]=function(e){return Object(d["unref"])(n).hftz=e}),label:"接受回复通知",size:"small"},null,8,["modelValue"]),Object(d["createVNode"])(L,{modelValue:Object(d["unref"])(n).inform,"onUpdate:modelValue":j[4]||(j[4]=function(e){return Object(d["unref"])(n).inform=e}),label:"广播给粉丝",size:"small"},null,8,["modelValue"])]),Object(d["createElementVNode"])("div",I,[Object(d["createVNode"])(F,{prop:"check"},{default:Object(d["withCtx"])((function(){return[Object(d["createVNode"])(L,{modelValue:Object(d["unref"])(n).check,"onUpdate:modelValue":j[5]||(j[5]=function(e){return Object(d["unref"])(n).check=e})},{default:Object(d["withCtx"])((function(){return[A,Object(d["createVNode"])(M,{style:{"margin-top":"-2px"},type:"primary",href:"/common/protocol",target:"_blank"},{default:Object(d["withCtx"])((function(){return[S]})),_:1}),T]})),_:1},8,["modelValue"])]})),_:1})]),Object(d["createElementVNode"])("div",$,[Object(d["createVNode"])(J,{type:"primary",class:"iconfont icon-fabusekuai",onClick:O},{default:Object(d["withCtx"])((function(){return[Z]})),_:1}),Object(d["createVNode"])(J,{type:"info",class:"iconfont icon-caogaoxiang",onClick:O},{default:Object(d["withCtx"])((function(){return[H]})),_:1})])])]})),_:1},8,["model"]),Object(d["createElementVNode"])("div",U,[Object(d["createVNode"])(M,null,{default:Object(d["withCtx"])((function(){return[q]})),_:1})])])]})),_:1})])])}}},F=(n("da8f"),n("6b0d")),L=n.n(F);const M=L()(B,[["__scopeId","data-v-2610ed38"]]);t["default"]=M},"3aed":function(e,t,n){},"61f7":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return l}));n("ac1f"),n("466d"),n("00b4"),n("d3b7"),n("498a");function c(e){var t=/^(\w){6,20}$/;return t.exec(e)}function r(e){var t=/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;return t.test(e)}function o(e){var t=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;return t.test(e)}function a(e){var t=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;return t.test(e)}function u(e){var t=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;return t.test(e)}var l=function(e){var t=/[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;return t.test(e)}},"7b0a":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a}));var c=n("61f7");function r(e,t,n){e.required||t?Object(c["d"])(t)?n():n(new Error(e.message||"请输入正确的手机号")):n()}var o=function(e,t,n){e.required&&!t?n(new Error(e.message)):n()},a=function(e,t,n){e.required&&!Object(c["c"])(t)?n(new Error(e.message||"密码由字母、数字、下划线、组成密码长度为6-20位")):n()}},da8f:function(e,t,n){"use strict";n("3aed")}}]);