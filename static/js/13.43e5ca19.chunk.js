(this["webpackJsonpgaja-site"]=this["webpackJsonpgaja-site"]||[]).push([[13],{151:function(n,t,e){"use strict";e.r(t);var i,a,r=e(22),o=e(88),d=e.n(o),c=e(89),s=e(26),l=e(0),p=e(98),u=e(99),m=e(51),h=e.p+"static/media/default_image2.3106abd5.png",x=e(36),f=e(6),b=e(7),g=b.a.div(i||(i=Object(f.a)([""]))),w=b.a.h3(a||(a=Object(f.a)(["\n  color: #409bd6;\n  text-align: center;\n  margin-top: -7px;\n  padding: 20px;\n"]))),j=e(92),O=e(1);t.default=function(){var n=Object(l.useState)(!0),t=Object(s.a)(n,2),e=t[0],i=t[1],a=Object(l.useState)(!1),o=Object(s.a)(a,2),f=o[0],b=o[1],v=Object(l.useState)(1),y=Object(s.a)(v,2),S=y[0],T=y[1],E=Object(l.useState)({}),k=Object(s.a)(E,2),_=k[0],L=k[1],z=Object(l.useState)(!1),C=Object(s.a)(z,2),R=C[0],P=C[1],D=Object(l.useState)(!1),N=Object(s.a)(D,2),U=N[0],A=N[1];Object(l.useEffect)((function(){function n(){return(n=Object(c.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.c({page:S,limit:20});case 2:t=n.sent,L(t.items),i(!1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(l.useEffect)((function(){return window.addEventListener("scroll",I),function(){window.removeEventListener("scroll",I)}}));var I=function(){var n=document.querySelector(".feedblock-list > .feedblock-element:last-child");if(null!==n&&n instanceof HTMLElement&&(!U||!R)){var t=n.offsetTop+n.clientHeight;window.pageYOffset+window.innerHeight+500>t&&(b(!0),H(S+1))}},H=function(){var n=Object(c.a)(d.a.mark((function n(t){var e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,T(t),n.next=4,j.c({page:t,limit:20,hotData:!R});case 4:e=n.sent,L([].concat(Object(r.a)(_),Object(r.a)(e.items))),b(!1),0!==e.items.length||R?0===e.items.length&&R&&A(!0):P(!0),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),b(!1);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:e?Object(O.jsx)(x.k,{children:Object(O.jsx)(x.j,{color:"#DC3736"})}):Object(O.jsxs)("div",{children:[Object(O.jsx)(x.a,{alt:"Foto principal",src:h}),Object(O.jsx)(g,{children:Object(O.jsx)(w,{children:"Engajando com institui\xe7\xf5es"})}),Object(O.jsx)(p.d,{className:"feedblock-list",children:_&&_.map((function(n,t){return Object(O.jsx)("div",{className:"feedblock-element",children:Object(O.jsx)(u.a,{className:"feedblock-element",item:n})},t)}))}),f?Object(O.jsx)("div",{style:{textAlign:"center"},children:Object(O.jsx)(m.a,{})}):void 0]})})}},90:function(n,t,e){"use strict";e.r(t),e.d(t,"request",(function(){return c}));var i=e(88),a=e.n(i),r=e(89),o=e(91).history,d=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"/frontend-tcc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001"}).REACT_APP_TIMEOUT_IN_SECONDS||20);function c(n){return s.apply(this,arguments)}function s(){return(s=Object(r.a)(a.a.mark((function n(t){var e,i,r,c,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.url,i=t.params,r=t.options,c={},r&&r["Content-Type"]||(c["Content-Type"]="application/json"),(s=localStorage.getItem("USER_JWT"))&&(c.Authorization=s),t.headers=new Headers(c),i&&Object.keys(i).forEach((function(n){void 0!==i[n]&&e.searchParams.append(n,i[n])})),t.body&&"application/json"===c["Content-Type"]&&(t.body=JSON.stringify(t.body)),n.abrupt("return",new Promise((function(n,i){var a=setTimeout((function(){i(new Error("Promise timeout"))}),1e3*d);fetch(e,t).then((function(t){clearTimeout(a),401===t.status&&o.push("/entrar"),t.ok?t.json().then((function(t){n(t)})):t.json().then((function(n){i(n)}))}))})));case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},91:function(n,t,e){"use strict";e.r(t),e.d(t,"history",(function(){return a}));var i=e(93),a=Object(i.a)({basename:""})},92:function(n,t,e){"use strict";e.d(t,"f",(function(){return r})),e.d(t,"d",(function(){return o})),e.d(t,"e",(function(){return d})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return s})),e.d(t,"g",(function(){return l})),e.d(t,"b",(function(){return p}));var i=e(90).request,a="".concat("http://localhost:3001","/event");function r(){var n=new URL(a);return i({url:n,method:"GET"})}function o(n){var t=new URL(a+"/".concat(n));return i({url:t,method:"GET"})}function d(n,t){var e=new URL(a+"/".concat(n,"/").concat(t));return i({url:e,method:"GET"})}function c(n){var t=n.page,e=n.limit,r=void 0===e?10:e,o=new URL(a+"/list");return i({url:o,body:{page:t,limit:r},method:"POST"})}function s(n){var t=new URL(a),e=new FormData;return e.append("event",JSON.stringify(n)),e.append("file",n.image),i({url:t,body:e,method:"POST",options:{"Content-Type":"multipart/form-data"}})}function l(n){var t=new URL(a),e=new FormData;return e.append("event",JSON.stringify(n)),e.append("file",n.image),i({url:t,body:e,method:"PUT",options:{"Content-Type":"multipart/form-data"}})}function p(n){var t=new URL(a+"/enrollment");return i({url:t,body:n,method:"POST"})}},98:function(n,t,e){"use strict";e.d(t,"a",(function(){return f})),e.d(t,"e",(function(){return b})),e.d(t,"f",(function(){return g})),e.d(t,"h",(function(){return j})),e.d(t,"g",(function(){return O})),e.d(t,"d",(function(){return S})),e.d(t,"b",(function(){return T})),e.d(t,"c",(function(){return E})),e.d(t,"i",(function(){return k}));var i,a,r,o,d,c,s,l,p,u,m,h=e(6),x=e(7),f=x.a.div(i||(i=Object(h.a)(["\n  img {\n    object-fit: cover;\n    position: absolute;\n    visibility: visible;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]))),b=x.a.div(a||(a=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 1);\n  opacity: 0;\n  z-index: 2;\n  transition: 0.2s all;\n\n  @media (min-width: 768px) {\n    display: block;\n  }\n"]))),g=x.a.a(r||(r=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 1);\n  opacity: 0;\n  z-index: 2;\n  transition: 0.2s all;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),w=x.a.div(o||(o=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 1);\n  opacity: 0;\n  z-index: 2;\n  transition: 0.2s all;\n\n  section {\n    margin: 18px;\n    margin: 18px;\n    position: relative;\n    height: calc(100% - 70px);\n\n    p {\n      position: absolute;\n      bottom: 0;\n      margin: auto;\n      font-style: italic;\n      font-weight: 500;\n      line-height: 24px;\n      font-size: 16px;\n      text-align: center;\n    }\n  }\n"]))),j=x.a.div(d||(d=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n"]))),O=x.a.a(c||(c=Object(h.a)(["\n  font-size: 16px;\n  z-index: 3;\n  border: 1.8px solid ",";\n  color: ",";\n  padding: 10px;\n  opacity: 0;\n  border-radius: 50px;\n  margin: 0 auto;\n  text-decoration: none;\n\n  transform: translateY(100px);\n  transition: transform 1s ease-in-out;\n"])),(function(n){var t=n.$color;n.theme;return t||"white"}),(function(n){var t=n.$color;n.theme;return t||"white"})),v=x.a.div(s||(s=Object(h.a)(["\n  position: relative;\n  display: block;\n  animation: colorChange 3000ms ease var(--delay) infinite both;\n  font-size: 14px;\n  font-weight: bold;\n  color: ",";\n  border-radius: 8px;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  max-height: 300px;\n  max-width: 300px;\n  max-width: 300px;\n\n  ","\n\n  &:nth-child(4n - 2) {\n    --delay: 1000ms;\n  }\n\n  &:nth-child(4n) {\n    --delay: 2000ms;\n  }\n\n  :hover {\n    "," {\n      opacity: 0.8;\n      transition: 1s all;\n    }\n\n    "," {\n      opacity: 0.8;\n      transition: 1s all;\n    }\n\n    "," {\n      opacity: 0.8;\n      transition: 1s all;\n    }\n\n    "," {\n      img {\n        transform: scale(1.1) rotate(-2deg);\n        -webkit-filter: blur(2px);\n        filter: blur(2px);\n        transition: transform 1s ease;\n      }\n    }\n\n    "," {\n      margin-top: ","px;\n      display: block;\n      transform: translateY(0px);\n      transition: all 1s ease-in-out;\n      opacity: 1;\n      transition: opacity 0.5s linear;\n    }\n  }\n"])),(function(n){n.theme;return"white"}),(function(n){var t=n.$size;return y(t)}),b,g,w,f,O,(function(n){var t=n.slugMarginTopShow;return void 0!==t?t:80})),y=function(n){switch(n){case"BLOCK":return"\n                max-width: 300px;\n                max-height: none;\n            ";case"BIG":return"\n                max-width: 620px;\n                max-height: none;\n                grid-column-end: span 2;\n                grid-row-end: span 2;\n\n                @media (max-width: 1270px) {\n                    grid-column-end: span 2;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 710px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 1;\n                }\n        ";case"COLUMN":return"\n                max-width: 300px;\n                grid-column-end: span 1;\n                grid-row-end: span 2;\n                max-height: none;\n\n                @media (max-width: 710px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 493px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 2;\n                }\n        ";case"WIDE":return"\n                max-width: 940px;\n                max-height: none;\n                grid-column-end: span 3;\n                grid-row-end: span 2;\n\n                @media (max-width: 2510px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 2200px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1890px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1580px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1270px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1100px) {\n                    grid-column-end: span 2;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 710px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 1;\n                }\n\n                @media (max-width: 493px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 1;\n                }\n        ";default:return"\n                \n            "}},S=x.a.div(l||(l=Object(h.a)(["\n  display: grid;\n  grid-auto-rows: minmax(290px, auto);\n  grid-gap: 20px;\n  grid-auto-flow: dense;\n  padding: 0px;\n  margin: 40px auto;\n  transition: all 0.5s;\n\n  grid-template-columns: repeat(auto-fit, minmax(290px, 290px));\n  justify-content: center;\n  width: ",";\n  max-width: ",";\n\n  @media (max-width: 4000px) {\n    width: 1900px;\n  }\n\n  @media (max-width: 2510px) {\n    width: 1900px;\n  }\n\n  @media (max-width: 2200px) {\n    width: 1870px;\n  }\n\n  @media (max-width: 1890px) {\n    width: 1560px;\n  }\n\n  @media (max-width: 1580px) {\n    width: 1250px;\n  }\n\n  @media (max-width: 1270px) {\n    width: 940px;\n  }\n\n  @media (max-width: 1100px) {\n    width: 620px;\n  }\n\n  @media (max-width: 710px) {\n    width: 600px;\n  }\n\n  @media (max-width: 493px) {\n    width: 300px;\n  }\n"])),(function(n){return n.maxSize||"1900px"}),(function(n){return n.maxSize||"1900px"})),T=x.a.div(p||(p=Object(h.a)(["\n  text-align: left;\n  z-index: 3;\n  position: absolute;\n  display: block;\n  bottom: 0px;\n  color: #ffffff;\n  background: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(0, 0, 0, 1) 100%\n  );\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  width: 100%;\n"]))),E=x.a.div(u||(u=Object(h.a)(["\n  text-shadow: 2px 2px 6px #000000;\n  z-index: 3;\n  max-width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding: 12px;\n\n  h3 {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 0 0 0px 0px;\n    font-size: 18px;\n    font-weight: 800;\n    max-width: inherit;\n    color: ",";\n    line-height: 20px;\n  }\n  span {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 5px 0 0px 0px;\n    font-size: 13px;\n    font-weight: 500;\n    font-style: italic;\n    max-height: 11px;\n    display: block;\n    max-height: 15px;\n    max-width: inherit;\n    color: ",";\n  }\n"])),(function(n){n.theme;return"white"}),(function(n){n.theme;return"white"})),k=x.a.div(m||(m=Object(h.a)(["\n  position: relative;\n  padding: 10px;\n  z-index: 3;\n  background: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.7) 0%,\n    rgba(0, 0, 0, 0) 100%\n  );\n"])));t.j=v},99:function(n,t,e){"use strict";e(0);var i=e(48),a=e(98),r=e(1);t.a=function(n){var t=new Date>new Date(n.item.date),e="#828282";return Object(r.jsxs)(a.j,{$size:"BLOCK",slugMarginTopShow:-20,children:[Object(r.jsx)(a.a,{children:Object(r.jsx)(i.a,{alt:"todo",src:n.item.image})}),Object(r.jsx)(a.e,{}),Object(r.jsx)(a.f,{href:"/evento/".concat(n.item.slug)}),Object(r.jsx)(a.i,{children:Object(r.jsx)("span",{style:{color:t?e:null},children:new Date(n.item.date).toLocaleDateString()})}),Object(r.jsx)(a.b,{children:Object(r.jsxs)(a.c,{children:[Object(r.jsx)("h3",{dangerouslySetInnerHTML:{__html:n.item.title},style:{color:t?e:null}}),Object(r.jsx)("span",{style:{color:t?e:null},children:"IN_PERSON"===n.item.type?"PRESENCIAL":"REMOTO"})]})}),Object(r.jsx)(a.h,{children:Object(r.jsx)(a.g,{href:"/evento/".concat(n.item.slug),$color:"white",children:"Acessar"})})]})}}}]);
//# sourceMappingURL=13.43e5ca19.chunk.js.map