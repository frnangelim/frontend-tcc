(this["webpackJsonpgaja-site"]=this["webpackJsonpgaja-site"]||[]).push([[9],{100:function(n,t,e){"use strict";e(0);var r=e(49),i=e(99),o=e(1);t.a=function(n){var t=new Date>new Date(n.item.date),e="#828282";return Object(o.jsxs)(i.j,{$size:"BLOCK",slugMarginTopShow:-20,children:[Object(o.jsx)(i.a,{children:Object(o.jsx)(r.a,{alt:"todo",src:n.item.image})}),Object(o.jsx)(i.e,{}),Object(o.jsx)(i.f,{href:"/evento/".concat(n.item.slug)}),Object(o.jsx)(i.i,{children:Object(o.jsx)("span",{style:{color:t?e:null},children:new Date(n.item.date).toLocaleDateString()})}),Object(o.jsx)(i.b,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)("h3",{dangerouslySetInnerHTML:{__html:n.item.title},style:{color:t?e:null}}),Object(o.jsx)("span",{style:{color:t?e:null},children:"IN_PERSON"===n.item.type?"PRESENCIAL":"REMOTO"})]})}),Object(o.jsx)(i.h,{children:Object(o.jsx)(i.g,{href:"/evento/".concat(n.item.slug),$color:"white",children:"Acessar"})})]})}},151:function(n,t,e){"use strict";e.r(t);var r,i,o=e(22),a=e(90),c=e.n(a),s=e(91),u=e(26),d=e(0),l=e(99),p=e(100),h=e(52),f=e.p+"static/media/default_image2.3106abd5.png",m=e(36),x=e(6),g=e(7),w=g.a.div(r||(r=Object(x.a)([""]))),v=g.a.h3(i||(i=Object(x.a)(["\n  color: #409bd6;\n  text-align: center;\n  margin-top: -7px;\n  padding: 20px;\n"]))),b=e(93),y=e(1);t.default=function(){var n=Object(d.useState)(!0),t=Object(u.a)(n,2),e=t[0],r=t[1],i=Object(d.useState)(!1),a=Object(u.a)(i,2),x=a[0],g=a[1],j=Object(d.useState)(1),O=Object(u.a)(j,2),E=O[0],L=O[1],S=Object(d.useState)({}),T=Object(u.a)(S,2),_=T[0],k=T[1],P=Object(d.useState)(!1),N=Object(u.a)(P,2),R=N[0],z=N[1],C=Object(d.useState)(!1),D=Object(u.a)(C,2),I=D[0],U=D[1];Object(d.useEffect)((function(){function n(){return(n=Object(s.a)(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.c({page:E,limit:20});case 2:t=n.sent,k(t.items),r(!1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(d.useEffect)((function(){return window.addEventListener("scroll",A),function(){window.removeEventListener("scroll",A)}}));var A=function(){var n=document.querySelector(".feedblock-list > .feedblock-element:last-child");if(null!==n&&n instanceof HTMLElement&&(!I||!R)){var t=n.offsetTop+n.clientHeight;window.pageYOffset+window.innerHeight+500>t&&(g(!0),F(E+1))}},F=function(){var n=Object(s.a)(c.a.mark((function n(t){var e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,L(t),n.next=4,b.c({page:t,limit:20,hotData:!R});case 4:e=n.sent,k([].concat(Object(o.a)(_),Object(o.a)(e.items))),g(!1),0!==e.items.length||R?0===e.items.length&&R&&U(!0):z(!0),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),g(!1);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}();return Object(y.jsx)(y.Fragment,{children:e?Object(y.jsx)(m.k,{children:Object(y.jsx)(m.j,{color:"#DC3736"})}):Object(y.jsxs)("div",{children:[Object(y.jsx)(m.a,{alt:"Foto principal",src:f}),Object(y.jsx)(w,{children:Object(y.jsx)(v,{children:"Engajando com institui\xe7\xf5es"})}),Object(y.jsx)(l.d,{className:"feedblock-list",children:_&&_.map((function(n,t){return Object(y.jsx)("div",{className:"feedblock-element",children:Object(y.jsx)(p.a,{className:"feedblock-element",item:n})},t)}))}),x?Object(y.jsx)("div",{style:{textAlign:"center"},children:Object(y.jsx)(h.a,{})}):void 0]})})}},90:function(n,t,e){n.exports=e(94)},91:function(n,t,e){"use strict";function r(n,t,e,r,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void e(u)}c.done?t(s):Promise.resolve(s).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var a=n.apply(t,e);function c(n){r(a,i,o,c,s,"next",n)}function s(n){r(a,i,o,c,s,"throw",n)}c(void 0)}))}}e.d(t,"a",(function(){return i}))},92:function(n,t,e){"use strict";e.r(t),e.d(t,"request",(function(){return s}));var r=e(90),i=e.n(r),o=e(91),a=e(47).history,c=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"https://frnangelim.github.io/frontend-tcc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001"}).REACT_APP_TIMEOUT_IN_SECONDS||20);function s(n){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(i.a.mark((function n(t){var e,r,o,s,u;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.url,r=t.params,o=t.options,s={},o&&o["Content-Type"]||(s["Content-Type"]="application/json"),(u=localStorage.getItem("USER_JWT"))&&(s.Authorization=u),t.headers=new Headers(s),r&&Object.keys(r).forEach((function(n){void 0!==r[n]&&e.searchParams.append(n,r[n])})),t.body&&"application/json"===s["Content-Type"]&&(t.body=JSON.stringify(t.body)),n.abrupt("return",new Promise((function(n,r){var i=setTimeout((function(){r(new Error("Promise timeout"))}),1e3*c);fetch(e,t).then((function(t){clearTimeout(i),401===t.status&&a.push("/entrar"),t.ok?t.json().then((function(t){n(t)})):t.json().then((function(n){r(n)}))}))})));case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},93:function(n,t,e){"use strict";e.d(t,"f",(function(){return o})),e.d(t,"d",(function(){return a})),e.d(t,"e",(function(){return c})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return u})),e.d(t,"g",(function(){return d})),e.d(t,"b",(function(){return l}));var r=e(92).request,i="".concat("http://localhost:3001","/event");function o(){var n=new URL(i);return r({url:n,method:"GET"})}function a(n){var t=new URL(i+"/".concat(n));return r({url:t,method:"GET"})}function c(n,t){var e=new URL(i+"/".concat(n,"/").concat(t));return r({url:e,method:"GET"})}function s(n){var t=n.page,e=n.limit,o=void 0===e?10:e,a=new URL(i+"/list");return r({url:a,body:{page:t,limit:o},method:"POST"})}function u(n){var t=new URL(i),e=new FormData;return e.append("event",JSON.stringify(n)),e.append("file",n.image),r({url:t,body:e,method:"POST",options:{"Content-Type":"multipart/form-data"}})}function d(n){var t=new URL(i),e=new FormData;return e.append("event",JSON.stringify(n)),e.append("file",n.image),r({url:t,body:e,method:"PUT",options:{"Content-Type":"multipart/form-data"}})}function l(n){var t=new URL(i+"/enrollment");return r({url:t,body:n,method:"POST"})}},94:function(n,t,e){var r=function(n){"use strict";var t,e=Object.prototype,r=e.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{s({},"")}catch(N){s=function(n,t,e){return n[t]=e}}function u(n,t,e,r){var i=t&&t.prototype instanceof x?t:x,o=Object.create(i.prototype),a=new _(r||[]);return o._invoke=function(n,t,e){var r=l;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return P()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===m)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=f,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var s=d(n,t,e);if("normal"===s.type){if(r=e.done?f:p,s.arg===m)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r=f,e.method="throw",e.arg=s.arg)}}}(n,e,a),o}function d(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(N){return{type:"throw",arg:N}}}n.wrap=u;var l="suspendedStart",p="suspendedYield",h="executing",f="completed",m={};function x(){}function g(){}function w(){}var v={};v[o]=function(){return this};var b=Object.getPrototypeOf,y=b&&b(b(k([])));y&&y!==e&&r.call(y,o)&&(v=y);var j=w.prototype=x.prototype=Object.create(v);function O(n){["next","throw","return"].forEach((function(t){s(n,t,(function(n){return this._invoke(t,n)}))}))}function E(n,t){function e(i,o,a,c){var s=d(n[i],n,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(n){e("next",n,a,c)}),(function(n){e("throw",n,a,c)})):t.resolve(l).then((function(n){u.value=n,a(u)}),(function(n){return e("throw",n,a,c)}))}c(s.arg)}var i;this._invoke=function(n,r){function o(){return new t((function(t,i){e(n,r,t,i)}))}return i=i?i.then(o,o):o()}}function L(n,e){var r=n.iterator[e.method];if(r===t){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=t,L(n,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=d(r,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var o=i.arg;return o?o.done?(e[n.resultName]=o.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function S(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function T(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function _(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(S,this),this.reset(!0)}function k(n){if(n){var e=n[o];if(e)return e.call(n);if("function"===typeof n.next)return n;if(!isNaN(n.length)){var i=-1,a=function e(){for(;++i<n.length;)if(r.call(n,i))return e.value=n[i],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return g.prototype=j.constructor=w,w.constructor=g,g.displayName=s(w,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"===typeof n&&n.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,w):(n.__proto__=w,s(n,c,"GeneratorFunction")),n.prototype=Object.create(j),n},n.awrap=function(n){return{__await:n}},O(E.prototype),E.prototype[a]=function(){return this},n.AsyncIterator=E,n.async=function(t,e,r,i,o){void 0===o&&(o=Promise);var a=new E(u(t,e,r,i),o);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},O(j),s(j,c,"Generator"),j[o]=function(){return this},j.toString=function(){return"[object Generator]"},n.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=k,_.prototype={constructor:_,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function i(r,i){return c.type="throw",c.arg=n,e.next=r,i&&(e.method="next",e.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=n,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),m},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),T(e),m}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var i=r.arg;T(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:k(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),m}},n}(n.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},99:function(n,t,e){"use strict";e.d(t,"a",(function(){return x})),e.d(t,"e",(function(){return g})),e.d(t,"f",(function(){return w})),e.d(t,"h",(function(){return b})),e.d(t,"g",(function(){return y})),e.d(t,"d",(function(){return E})),e.d(t,"b",(function(){return L})),e.d(t,"c",(function(){return S})),e.d(t,"i",(function(){return T}));var r,i,o,a,c,s,u,d,l,p,h,f=e(6),m=e(7),x=m.a.div(r||(r=Object(f.a)(["\n  img {\n    object-fit: cover;\n    position: absolute;\n    visibility: visible;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]))),g=m.a.div(i||(i=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 1);\n  opacity: 0;\n  z-index: 2;\n  transition: 0.2s all;\n\n  @media (min-width: 768px) {\n    display: block;\n  }\n"]))),w=m.a.a(o||(o=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 1);\n  opacity: 0;\n  z-index: 2;\n  transition: 0.2s all;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),v=m.a.div(a||(a=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 1);\n  opacity: 0;\n  z-index: 2;\n  transition: 0.2s all;\n\n  section {\n    margin: 18px;\n    margin: 18px;\n    position: relative;\n    height: calc(100% - 70px);\n\n    p {\n      position: absolute;\n      bottom: 0;\n      margin: auto;\n      font-style: italic;\n      font-weight: 500;\n      line-height: 24px;\n      font-size: 16px;\n      text-align: center;\n    }\n  }\n"]))),b=m.a.div(c||(c=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n"]))),y=m.a.a(s||(s=Object(f.a)(["\n  font-size: 16px;\n  z-index: 3;\n  border: 1.8px solid ",";\n  color: ",";\n  padding: 10px;\n  opacity: 0;\n  border-radius: 50px;\n  margin: 0 auto;\n  text-decoration: none;\n\n  transform: translateY(100px);\n  transition: transform 1s ease-in-out;\n"])),(function(n){var t=n.$color;n.theme;return t||"white"}),(function(n){var t=n.$color;n.theme;return t||"white"})),j=m.a.div(u||(u=Object(f.a)(["\n  position: relative;\n  display: block;\n  animation: colorChange 3000ms ease var(--delay) infinite both;\n  font-size: 14px;\n  font-weight: bold;\n  color: ",";\n  border-radius: 8px;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  max-height: 300px;\n  max-width: 300px;\n  max-width: 300px;\n\n  ","\n\n  &:nth-child(4n - 2) {\n    --delay: 1000ms;\n  }\n\n  &:nth-child(4n) {\n    --delay: 2000ms;\n  }\n\n  :hover {\n    "," {\n      opacity: 0.8;\n      transition: 1s all;\n    }\n\n    "," {\n      opacity: 0.8;\n      transition: 1s all;\n    }\n\n    "," {\n      opacity: 0.8;\n      transition: 1s all;\n    }\n\n    "," {\n      img {\n        transform: scale(1.1) rotate(-2deg);\n        -webkit-filter: blur(2px);\n        filter: blur(2px);\n        transition: transform 1s ease;\n      }\n    }\n\n    "," {\n      margin-top: ","px;\n      display: block;\n      transform: translateY(0px);\n      transition: all 1s ease-in-out;\n      opacity: 1;\n      transition: opacity 0.5s linear;\n    }\n  }\n"])),(function(n){n.theme;return"white"}),(function(n){var t=n.$size;return O(t)}),g,w,v,x,y,(function(n){var t=n.slugMarginTopShow;return void 0!==t?t:80})),O=function(n){switch(n){case"BLOCK":return"\n                max-width: 300px;\n                max-height: none;\n            ";case"BIG":return"\n                max-width: 620px;\n                max-height: none;\n                grid-column-end: span 2;\n                grid-row-end: span 2;\n\n                @media (max-width: 1270px) {\n                    grid-column-end: span 2;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 710px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 1;\n                }\n        ";case"COLUMN":return"\n                max-width: 300px;\n                grid-column-end: span 1;\n                grid-row-end: span 2;\n                max-height: none;\n\n                @media (max-width: 710px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 493px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 2;\n                }\n        ";case"WIDE":return"\n                max-width: 940px;\n                max-height: none;\n                grid-column-end: span 3;\n                grid-row-end: span 2;\n\n                @media (max-width: 2510px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 2200px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1890px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1580px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1270px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1100px) {\n                    grid-column-end: span 2;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 710px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 1;\n                }\n\n                @media (max-width: 493px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 1;\n                }\n        ";default:return"\n                \n            "}},E=m.a.div(d||(d=Object(f.a)(["\n  display: grid;\n  grid-auto-rows: minmax(290px, auto);\n  grid-gap: 20px;\n  grid-auto-flow: dense;\n  padding: 0px;\n  margin: 40px auto;\n  transition: all 0.5s;\n\n  grid-template-columns: repeat(auto-fit, minmax(290px, 290px));\n  justify-content: center;\n  width: ",";\n  max-width: ",";\n\n  @media (max-width: 4000px) {\n    width: 1900px;\n  }\n\n  @media (max-width: 2510px) {\n    width: 1900px;\n  }\n\n  @media (max-width: 2200px) {\n    width: 1870px;\n  }\n\n  @media (max-width: 1890px) {\n    width: 1560px;\n  }\n\n  @media (max-width: 1580px) {\n    width: 1250px;\n  }\n\n  @media (max-width: 1270px) {\n    width: 940px;\n  }\n\n  @media (max-width: 1100px) {\n    width: 620px;\n  }\n\n  @media (max-width: 710px) {\n    width: 600px;\n  }\n\n  @media (max-width: 493px) {\n    width: 300px;\n  }\n"])),(function(n){return n.maxSize||"1900px"}),(function(n){return n.maxSize||"1900px"})),L=m.a.div(l||(l=Object(f.a)(["\n  text-align: left;\n  z-index: 3;\n  position: absolute;\n  display: block;\n  bottom: 0px;\n  color: #ffffff;\n  background: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(0, 0, 0, 1) 100%\n  );\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  width: 100%;\n"]))),S=m.a.div(p||(p=Object(f.a)(["\n  text-shadow: 2px 2px 6px #000000;\n  z-index: 3;\n  max-width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding: 12px;\n\n  h3 {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 0 0 0px 0px;\n    font-size: 18px;\n    font-weight: 800;\n    max-width: inherit;\n    color: ",";\n    line-height: 20px;\n  }\n  span {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 5px 0 0px 0px;\n    font-size: 13px;\n    font-weight: 500;\n    font-style: italic;\n    max-height: 11px;\n    display: block;\n    max-height: 15px;\n    max-width: inherit;\n    color: ",";\n  }\n"])),(function(n){n.theme;return"white"}),(function(n){n.theme;return"white"})),T=m.a.div(h||(h=Object(f.a)(["\n  position: relative;\n  padding: 10px;\n  z-index: 3;\n  background: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.7) 0%,\n    rgba(0, 0, 0, 0) 100%\n  );\n"])));t.j=j}}]);
//# sourceMappingURL=9.73539d51.chunk.js.map