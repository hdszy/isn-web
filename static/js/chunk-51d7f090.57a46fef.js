/*!
 *  copyright: sunzhiyang 975263179@qq.com 
 *  time:  2022-1-12 08:34:23
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51d7f090"],{3033:function(e,t,c){},"749b":function(e,t,c){"use strict";var n=c("4c02"),a=(c("83b2"),c("03ae")),o=(c("effa"),c("f2bf")),l=c("c71c"),r=function(e){return Object(o["pushScopeId"])("data-v-31e2d485"),e=e(),Object(o["popScopeId"])(),e},i=r((function(){return Object(o["createElementVNode"])("div",{class:"header"},[Object(o["createElementVNode"])("span",{class:"rom-l"},[Object(o["createElementVNode"])("i",{class:"iconfont icon-tuiguang"}),Object(o["createTextVNode"])(" 赞助推广")])],-1)})),b={class:"list"},d=["onClick"],u={setup:function(e){var t=["https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"],c=function(e){Object(l["a"])({options:{initialViewIndex:e},images:t})};return function(e,l){var r=a["a"],u=n["a"];return Object(o["openBlock"])(),Object(o["createBlock"])(u,{shadow:"never",class:"zanzhu"},{default:Object(o["withCtx"])((function(){return[i,Object(o["createElementVNode"])("div",b,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(Object(o["unref"])(t),(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"d_img",key:t,onClick:function(e){return c(t)}},[Object(o["createVNode"])(r,{class:"img",src:e,fit:"cover"},null,8,["src"])],8,d)})),128))])]})),_:1})}}},s=(c("bace"),c("6b0d")),j=c.n(s);const O=j()(u,[["__scopeId","data-v-31e2d485"]]);t["a"]=O},a93a:function(e,t,c){"use strict";c.r(t);var n=c("90b1"),a=(c("f48c"),c("6407")),o=c("03ae"),l=(c("effa"),c("0cee")),r=(c("eab6"),c("c1b8")),i=(c("7f44"),c("b9bd"),c("f2bf")),b=c("6c02"),d=c("749b"),u=function(e){return Object(i["pushScopeId"])("data-v-eb566d66"),e=e(),Object(i["popScopeId"])(),e},s={class:"information w"},j={class:"breadcrumb"},O=Object(i["createTextVNode"])("首页"),f=Object(i["createTextVNode"])("本地资讯"),p={class:"info-wrapper"},m={class:"nav"},v=["onClick"],g={class:"list","element-loading-text":"正在查询数据中，请稍后...","element-loading-background":"rgba(0, 0, 0, 0.8)"},k=["onClick"],V={class:"d_img"},N=u((function(){return Object(i["createElementVNode"])("div",{class:"mid"},[Object(i["createElementVNode"])("p",{class:"title"},"这是一首简单的小情歌唱出我们心头的哀歌。我想我很快案例这简单的小情歌唱出我们心头的哀歌。我想我很快案例这是一首简"),Object(i["createElementVNode"])("div",{class:"d-b"},[Object(i["createElementVNode"])("p",{class:"author"},[Object(i["createTextVNode"])("鸡泽服务网 "),Object(i["createElementVNode"])("span",null,"  2022-12-32 26:22")])])],-1)})),E={setup:function(e){var t=Object(b["d"])(),c=[{label:"精选"},{label:"本地"},{label:"探店"},{label:"图片"},{label:"美食"},{label:"旅游"},{label:"生活"},{label:"电影"},{label:"国内"}],u=Object(i["ref"])(0),E=Object(i["reactive"])({loading:!1,page:1,limit:10,category:""}),h=Object(i["reactive"])({total:0}),w=function(e,t){u.value=t,E.category=e.label,B()},B=function(){E.loading=!0,setTimeout((function(){E.loading=!1}),1500)};B();var x=function(e){var c=t.resolve({path:"/information/details",query:{uuid:e}});window.open(c.href,"_blank")};return function(e,t){var b=r["b"],B=r["a"],C=l["a"],_=o["a"],y=a["a"],I=n["a"];return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",s,[Object(i["createElementVNode"])("div",j,[Object(i["createVNode"])(B,{separator:">"},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(b,{to:"/home"},{default:Object(i["withCtx"])((function(){return[O]})),_:1}),Object(i["createVNode"])(b,null,{default:Object(i["withCtx"])((function(){return[f]})),_:1})]})),_:1})]),Object(i["createElementVNode"])("div",p,[Object(i["createVNode"])(C,null,{default:Object(i["withCtx"])((function(){return[Object(i["createElementVNode"])("div",m,[(Object(i["openBlock"])(),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(c,(function(e,t){return Object(i["createElementVNode"])("div",{key:t,class:Object(i["normalizeClass"])(["nav-b",{active:u.value===t}]),onClick:function(c){return w(e,t)}},Object(i["toDisplayString"])(e.label),11,v)})),64))])]})),_:1}),Object(i["withDirectives"])((Object(i["openBlock"])(),Object(i["createElementBlock"])("div",g,[(Object(i["openBlock"])(),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(10,(function(e,t){return Object(i["createElementVNode"])("div",{key:t,class:"info",onClick:function(t){return x(e.uuid)}},[Object(i["createElementVNode"])("div",V,[Object(i["createVNode"])(_,{class:"img",src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",fit:"cover"})]),N],8,k)})),64)),Object(i["createVNode"])(y,{total:Object(i["unref"])(h).total,page:Object(i["unref"])(E).page,limit:Object(i["unref"])(E).limit,padding:"20px 0 50px 0"},null,8,["total","page","limit"])])),[[I,Object(i["unref"])(E).loading]]),Object(i["createVNode"])(Object(i["unref"])(d["a"]))])])}}},h=(c("ea24"),c("6b0d")),w=c.n(h);const B=w()(E,[["__scopeId","data-v-eb566d66"]]);t["default"]=B},bace:function(e,t,c){"use strict";c("3033")},d93e:function(e,t,c){},ea24:function(e,t,c){"use strict";c("d93e")}}]);