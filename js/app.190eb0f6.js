(function(e){function t(t){for(var r,l,i=t[0],u=t[1],a=t[2],p=0,d=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&d.push(c[l][0]),c[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},c={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/Side-Project__Spin-the-Wheel/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5650:function(e){e.exports=JSON.parse('[{"id":"1","price":"200","deg":0},{"id":"2","price":"250","deg":0},{"id":"3","price":"300","deg":0},{"id":"4","price":"350","deg":0},{"id":"5","price":"400","deg":0},{"id":"6","price":"450","deg":0},{"id":"7","price":"500","deg":0},{"id":"8","price":"550","deg":0}]')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"Rwrap"},o={class:"rouletteWrap"},l=Object(r["d"])("div",{class:"rouletteBG"},null,-1),i={class:"rouletteMsg"},u={class:"rouleMsg_span"},a={class:"controlWrap_item"};function s(e,t,n,s,p,d){var b=Object(r["i"])("RouletteWrap");return Object(r["e"])(),Object(r["c"])("div",c,[Object(r["d"])("div",o,[l,Object(r["d"])(b,{db:s.dbData,onMsg:s.OpemMsg},null,8,["db","onMsg"])]),Object(r["d"])("div",{class:["rouletteMsgWrap",{rouletteMsgWrap_open:s.OpMsg}]},[Object(r["d"])("div",i,[Object(r["d"])("span",u,"恭喜獲得"+Object(r["j"])(s.MsgPrice)+"元",1),Object(r["d"])("button",{class:"rouleMsg_cancel",onClick:t[1]||(t[1]=function(){return s.closeMsg&&s.closeMsg.apply(s,arguments)})},"關 閉")])],2),Object(r["d"])("button",{class:"control",onClick:t[2]||(t[2]=function(){return s.control&&s.control.apply(s,arguments)})},"設定"),Object(r["d"])("div",{class:["controlWrap",{"controlWrap--active":s.OpControl}]},[Object(r["d"])("div",a,[Object(r["d"])("ul",null,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(s.dbData,(function(e,t){return Object(r["e"])(),Object(r["c"])("li",null,[Object(r["d"])("span",null,"獎品 "+Object(r["j"])(t+1),1),Object(r["m"])(Object(r["d"])("input",{type:"text","onUpdate:modelValue":function(t){return e.price=t}},null,8,["onUpdate:modelValue"]),[[r["k"],e.price,void 0,{trim:!0}]]),Object(r["d"])("a",{href:"javascript:;",onClick:function(e){return s.delBtn(t)}},"✗",8,["onClick"])])})),256))])]),Object(r["d"])("button",{class:"savebtn",onClick:t[3]||(t[3]=function(){return s.savaBtn&&s.savaBtn.apply(s,arguments)})},"新 增")],2)])}n("4160"),n("a434"),n("159b");var p=n("5650"),d=Object(r["d"])("span",null,"GO",-1);function b(e,t,n,c,o,l){return Object(r["e"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",{class:"roulette_pointer",onClick:t[1]||(t[1]=function(){return c.clickhandler&&c.clickhandler.apply(c,arguments)})},[d]),Object(r["d"])("div",{class:"roulette_circle",ref:"rouletteDOM",style:{transform:c.rotate()}},[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(c.props.db,(function(e,t){return Object(r["e"])(),Object(r["c"])("div",{class:"roulette_circle_item",key:e.id,style:{transform:c.Circle_Deg(t,"item_wrap")}},[Object(r["d"])("div",{class:"roulette_circle_item_cir",style:{transform:c.Circle_Deg(t,"item_circle")}},[Object(r["d"])("span",null,Object(r["j"])(e.price),1)],4)],4)})),128))],4)],64)}n("4de4"),n("b680");var f={props:{db:{type:Array,default:function(){return[]}}},emits:["msg"],setup:function(e,t){var n=t.emit,c=function(t,n){if("item_wrap"===n){var r=360/e.db.length*t+90/(e.db.length/2).toFixed(2);return"rotate(".concat(r,"deg)")}if("item_circle"===n){var c=(180-360/e.db.length).toFixed(2);return"rotate(".concat(c,"deg)")}},o=Object(r["g"])(0),l=Object(r["g"])(!1),i=Object(r["f"])({isOpen:!1,price:0}),u=(Object(r["g"])(null),function(){if(!l.value){l.value=!0;var t=e.db.length-1,r=e.db[s(0,t)].deg;o.value+=2880+r-o.value%360,setTimeout((function(){l.value=!1,i.isOpen=!0,i.price=p(r),n("msg",i)}),10500)}}),a=function(){return"rotate(".concat(o.value,"deg)")},s=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},p=function(t){var n=e.db.filter((function(e){return e.deg===t}));return n[0].price};return{props:e,Circle_Deg:c,clickhandler:u,rotate:a}}};n("c2ae");f.render=b;var O=f,j={components:{RouletteWrap:O},setup:function(){var e=Object(r["f"])([]);p.forEach((function(t){e.push(t)}));var t=Object(r["g"])(!1),n=Object(r["g"])(""),c=function(e){t.value=e.isOpen,n.value=e.price},o=function(){t.value=!1};Object(r["l"])((function(){e.forEach((function(t,n){t.deg=360/e.length*(e.length-n)}))}));var l=Object(r["g"])(!1),i=function(){l.value=!l.value},u=function(){var t=e.length+1+"";e.push({id:t,price:0}),console.log(e)},a=function(t){e.splice(t,1),console.log(e)};return{dbData:e,OpemMsg:c,OpMsg:t,MsgPrice:n,closeMsg:o,control:i,OpControl:l,savaBtn:u,delBtn:a}}};n("6aec");j.render=s;var g=j;Object(r["b"])(g).mount("#app")},"6aec":function(e,t,n){"use strict";n("9852")},9852:function(e,t,n){},c2ae:function(e,t,n){"use strict";n("f066")},f066:function(e,t,n){}});
//# sourceMappingURL=app.190eb0f6.js.map