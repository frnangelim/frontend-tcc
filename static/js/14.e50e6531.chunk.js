(this["webpackJsonpgaja-site"]=this["webpackJsonpgaja-site"]||[]).push([[14],{146:function(n,t,e){"use strict";e.r(t);var i,a,o,r,s=e(88),d=e.n(s),c=e(89),p=e(26),l=e(0),x=e(106),h=e(6),m=e(7),u=m.a.div(i||(i=Object(h.a)(['\n  margin-top: 10px;\n  margin-bottom: 80px;\n  margin-left: 100px;\n  margin-right: 100px;\n\n  display: grid;\n  gap: 20px;\n  grid-template:\n    "location location location location"\n    "description description description description"\n    "socials socials socials socials"\n    "events-options events-options events-options events-options"\n    "events events events events";\n\n  .location {\n    text-align: center;\n    grid-area: location;\n  }\n\n  .description {\n    margin-top: 20px;\n    text-align: center;\n    grid-area: description;\n  }\n\n  .socials {\n    margin-top: 20px;\n    grid-area: socials;\n    text-align: center;\n  }\n\n  .events-options {\n    grid-area: events-options;\n  }\n\n  .events {\n    grid-area: events;\n  }\n\n  @media (max-width: 700px) {\n    grid-template:\n      "location location location"\n      "description description description"\n      "socials socials socials"\n      "events-options events-options events-options"\n      "events events events";\n\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n']))),A=m.a.div(a||(a=Object(h.a)(["\n  display: grid;\n  grid-auto-rows: minmax(290px, auto);\n  grid-gap: 20px;\n  grid-auto-flow: dense;\n  padding: 0px;\n  margin: 40px auto;\n  transition: all 0.5s;\n\n  grid-template-columns: repeat(auto-fit, minmax(290px, 290px));\n  justify-content: center;\n  width: ",";\n  max-width: ",";\n\n  @media (max-width: 4000px) {\n    width: 1900px;\n  }\n\n  @media (max-width: 2510px) {\n    width: 1900px;\n  }\n\n  @media (max-width: 2200px) {\n    width: 1670px;\n  }\n\n  @media (max-width: 1890px) {\n    width: 1360px;\n  }\n\n  @media (max-width: 1580px) {\n    width: 1050px;\n  }\n\n  @media (max-width: 1270px) {\n    width: 740px;\n  }\n\n  @media (max-width: 1100px) {\n    width: 420px;\n  }\n\n  @media (max-width: 710px) {\n    width: 580px;\n  }\n\n  @media (max-width: 493px) {\n    width: 280px;\n  }\n"])),(function(n){return n.maxSize||"1900px"}),(function(n){return n.maxSize||"1900px"})),g=m.a.div(o||(o=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: -140px;\n"]))),b=m.a.img(r||(r=Object(h.a)(["\n  height: 250px;\n  width: 250px;\n  border-radius: 125px;\n  object-fit: cover;\n  border: 1px solid #000;\n  background: #fff;\n"]))),f=e.p+"static/media/a4banner.f8fbf300.jpeg",w=e.p+"static/media/a4.841df288.jpeg",j=e(99),O=e(36),v=e(96),I=e(1);t.default=function(n){var t=Object(l.useState)({}),e=Object(p.a)(t,2),i=e[0],a=e[1],o=Object(l.useState)(!0),r=Object(p.a)(o,2),s=r[0],h=r[1];return Object(l.useEffect)((function(){function t(){return(t=Object(c.a)(d.a.mark((function t(){var e,i,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.preview){t.next=5;break}(i=localStorage.getItem("USER_PREVIEW"))&&(e=JSON.parse(i)),t.next=10;break;case 5:return console.log("? "),o=n.match&&n.match.params.slug,t.next=9,v.b(o);case 9:e=t.sent;case 10:a(e),h(!1);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(I.jsx)(I.Fragment,{children:s?Object(I.jsx)(O.k,{children:Object(I.jsx)(O.j,{color:"#DC3736"})}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{children:Object(I.jsxs)("div",{children:[Object(I.jsx)(O.a,{alt:"Foto principal",src:i.coverImage?i.coverImage:f}),Object(I.jsx)(O.o,{href:"https://api.whatsapp.com/send?text=".concat(window.location.href),target:"_blank",children:"Compartilhar"})]})}),Object(I.jsx)(g,{children:Object(I.jsx)("div",{children:Object(I.jsx)(b,{src:i.profileImage?i.profileImage:w,alt:"Logo"})})}),Object(I.jsx)("h1",{style:{textAlign:"center"},children:i.fullName})]}),Object(I.jsxs)(u,{children:[i.address&&Object(I.jsxs)("div",{className:"location",children:[Object(I.jsx)(x.c,{}),Object(I.jsx)(O.l,{children:i.address})]}),Object(I.jsx)("div",{className:"description",children:Object(I.jsx)("span",{children:i.bio})}),Object(I.jsxs)("div",{className:"socials",children:[i.instagramUrl&&Object(I.jsx)("img",{src:"data:image/png;base64,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",alt:"Instagram",style:{cursor:"pointer"},onClick:function(){return window.open(i.instagramUrl,"_blank").focus()}}),i.facebookUrl&&Object(I.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATzSURBVHgBvVhLSGNXGD553DyIhqkaBWMHQd1osaWCxULFghaRLgTRhbopXbgpI0xFa6FVqKXIhMGCY0sXLgpCxS4UaRGULlpbtSCKVKfgA2uTqvWd1yQmuZnvv97cSTQZb66aD37u8XjPuV/+/z//46iYcqggYfGZCGGWJNQsSfT29tIaLUQD0efn5+ujnrrCwkKd+H+1KCr2ctIxkPuisGlZWZlmcXFRk5OToxkfH38jKyvrdYPBcJ/neWGfk5OTv46Ojv5paGhYOT09DWKKJAThRUlaY/EQ0YhxZWWlbnd39xt87MzpdIYTCYjtOByOH4aHh9+8B9BaCCdqV7a2YhAOh1WNjY2CWaampkqOj49/exmJRGK320eHhobKsI8ZZjXQniKxuFAlIgPQIh1+6QOTyfSpWq02M4WASZ17e3u28vLyJyD5DKTOx8bG4ppQlYCkOi8vT7ewsNCTnp7exW4JBwcHjwsKCr7C0AM5Z3H86orqwJ7mOJD5/DbJECwWy8PNzc1uDI0wH/nUFYXETIim0sJ5a7DgJ3ZHmJ2dbayrq5vB0ANSIQgfj5BgKogep+gpfOY+uyMEg0F7R0dH9eTkpANm9LGL8BBLiLRTUlLC4aUPodohORvv7++zkZERBo0Kf1dUVLC2tjY5SxlO39fFxcVfwBKe7e1tPxN9SSsxuzhVXGZm5idMJrq6ugRSEXg8HrlLWW5u7gd4PBLJBNhFAJWcWjDX0tJSlVxTkVYiZBC5WUtLi6AhuaAwMjEx8Q6GHLtIQwIkDUF1lBLeZwpQXV3NWltbWbKAyd5LS0v7BcFcAxOScnhJQ1CdWqfTlcrZaG5uTvIbwtbWFpueno6ZkwOElQq3260NBAJS+IloSDCZVqt9Tc5GSKwxHyeCJDU1Nay0VNZvEqDX661IztpQKCTlOIlZRkaG+ibpgZCdnZ3U+xqNJp04HB4eqquqqgRCkg8hecreqL+/X9AQnTICObQSH4qHmNRBSZClEDCVy+fzxc1lNBnGC/+yFAJx62+j0SgUbwjG4WhCBN7r9f7OUgiXy/UUATmEcMMjS7wghORGj9DOzs7PLIVAIJ7GQQoiwIZ6enpiCPEIUnxtbe1sqvzI7/f/19zc/AdOWoC+HZmXTtna2hrlEj9O23co3juu2xARVkgZBFSULFmsrq4O0vfOzs7OISGYTtBQTLYvKirS1dfX53Z3d//KcVweuyOQduDElRieQlz4diBCSHJqmtjY2AjabLb/l5eXH7A7xMzMDFUUz4gbRNKOwOPSu/Q3mdG0vr7+GUzykN0ykDMHkV4eYUi+6o3WDuFyTR2mkhKZ3wfzfQnvf8xuEUjCT0DGZjab3ehwSUPBaDKEK0U2+VJTU5MabQqHbGyan5//CMXUx2LeUQSUrC64w2BlZeW3qCjcaIW87EXXIQtEVEONHZ73BgYG3oKqf1TYKP7Z2dn5Lvaxil0s3QEo6mBVYodJG1AVYOnr63ubiKF/t1/TSjsRRr4fHR1tRXmRj7CQg2rCLIfMtSyJFIRKTCo16WaDQ/7Roz0utVqtr0KKI5cN6FYciC9r7e3tq4jA55AAwocf83Sagpdbnpsg0iIRKbo4SCP1w8cyMbZAskkLCJZUENHcK/QOul/hkkG8I1B2yZAkOdIYmYF8zSD6nB6pgOY1Sm47bso6+jIq+vgqvgd6DmUGn2ftklYDAAAAAElFTkSuQmCC",alt:"Facebook",style:{cursor:"pointer"},onClick:function(){return window.open(i.facebookUrl,"_blank").focus()}}),i.websiteUrl&&Object(I.jsx)("img",{src:"data:image/png;base64,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",alt:"Website",style:{cursor:"pointer"},onClick:function(){return window.open(i.websiteUrl,"_blank").focus()}}),i.whatsappNumber&&Object(I.jsx)("img",{src:"data:image/png;base64,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",alt:"Whatsapp",style:{cursor:"pointer"},onClick:function(){return window.open("https://api.whatsapp.com/send?phone=".concat(i.whatsappNumber),"_blank").focus()}})]}),i.events&&i.events.length>0&&Object(I.jsxs)("div",{className:"events",children:[Object(I.jsx)("h2",{style:{textAlign:"center"},children:"Pr\xf3ximos eventos"}),Object(I.jsx)(A,{children:i.events.map((function(n,t){return Object(I.jsx)(j.a,{item:n},t)}))})]}),n.preview&&Object(I.jsx)(O.m,{children:Object(I.jsx)(O.n,{children:"PR\xc9-VISUALIZA\xc7\xc3O"})})]})]})})}},90:function(n,t,e){"use strict";e.r(t),e.d(t,"request",(function(){return d}));var i=e(88),a=e.n(i),o=e(89),r=e(91).history,s=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"/frontend-tcc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001"}).REACT_APP_TIMEOUT_IN_SECONDS||20);function d(n){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(a.a.mark((function n(t){var e,i,o,d,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.url,i=t.params,o=t.options,d={},o&&o["Content-Type"]||(d["Content-Type"]="application/json"),(c=localStorage.getItem("USER_JWT"))&&(d.Authorization=c),t.headers=new Headers(d),i&&Object.keys(i).forEach((function(n){void 0!==i[n]&&e.searchParams.append(n,i[n])})),t.body&&"application/json"===d["Content-Type"]&&(t.body=JSON.stringify(t.body)),n.abrupt("return",new Promise((function(n,i){var a=setTimeout((function(){i(new Error("Promise timeout"))}),1e3*s);fetch(e,t).then((function(t){clearTimeout(a),401===t.status&&r.push("/entrar"),t.ok?t.json().then((function(t){n(t)})):t.json().then((function(n){i(n)}))}))})));case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},91:function(n,t,e){"use strict";e.r(t),e.d(t,"history",(function(){return a}));var i=e(93),a=Object(i.a)({basename:""})},96:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return r})),e.d(t,"c",(function(){return s})),e.d(t,"d",(function(){return d}));var i=e(90).request,a="".concat("http://localhost:3001","/user");function o(n){var t=new URL(a+"/".concat(n));return i({url:t,method:"GET"})}function r(){var n=new URL(a+"/authenticated");return i({url:n,method:"GET"})}function s(n){var t=new URL(a);return i({url:t,body:n,method:"POST"})}function d(n){var t=new URL(a),e=new FormData;return e.append("user",JSON.stringify(n)),n.profileImage&&n.profileImage instanceof Blob&&e.append("file",n.profileImage,"profileImage"),n.coverImage&&n.coverImage instanceof Blob&&e.append("file",n.coverImage,"coverImage"),i({url:t,body:e,method:"PUT",options:{"Content-Type":"multipart/form-data"}})}},98:function(n,t,e){"use strict";e.d(t,"a",(function(){return A})),e.d(t,"e",(function(){return g})),e.d(t,"f",(function(){return b})),e.d(t,"h",(function(){return w})),e.d(t,"g",(function(){return j})),e.d(t,"d",(function(){return I})),e.d(t,"b",(function(){return S})),e.d(t,"c",(function(){return y})),e.d(t,"i",(function(){return k}));var i,a,o,r,s,d,c,p,l,x,h,m=e(6),u=e(7),A=u.a.div(i||(i=Object(m.a)(["\n  img {\n    object-fit: cover;\n    position: absolute;\n    visibility: visible;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]))),g=u.a.div(a||(a=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 1);\n  opacity: 0;\n  z-index: 2;\n  transition: 0.2s all;\n\n  @media (min-width: 768px) {\n    display: block;\n  }\n"]))),b=u.a.a(o||(o=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 1);\n  opacity: 0;\n  z-index: 2;\n  transition: 0.2s all;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),f=u.a.div(r||(r=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 1);\n  opacity: 0;\n  z-index: 2;\n  transition: 0.2s all;\n\n  section {\n    margin: 18px;\n    margin: 18px;\n    position: relative;\n    height: calc(100% - 70px);\n\n    p {\n      position: absolute;\n      bottom: 0;\n      margin: auto;\n      font-style: italic;\n      font-weight: 500;\n      line-height: 24px;\n      font-size: 16px;\n      text-align: center;\n    }\n  }\n"]))),w=u.a.div(s||(s=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n"]))),j=u.a.a(d||(d=Object(m.a)(["\n  font-size: 16px;\n  z-index: 3;\n  border: 1.8px solid ",";\n  color: ",";\n  padding: 10px;\n  opacity: 0;\n  border-radius: 50px;\n  margin: 0 auto;\n  text-decoration: none;\n\n  transform: translateY(100px);\n  transition: transform 1s ease-in-out;\n"])),(function(n){var t=n.$color;n.theme;return t||"white"}),(function(n){var t=n.$color;n.theme;return t||"white"})),O=u.a.div(c||(c=Object(m.a)(["\n  position: relative;\n  display: block;\n  animation: colorChange 3000ms ease var(--delay) infinite both;\n  font-size: 14px;\n  font-weight: bold;\n  color: ",";\n  border-radius: 8px;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  max-height: 300px;\n  max-width: 300px;\n  max-width: 300px;\n\n  ","\n\n  &:nth-child(4n - 2) {\n    --delay: 1000ms;\n  }\n\n  &:nth-child(4n) {\n    --delay: 2000ms;\n  }\n\n  :hover {\n    "," {\n      opacity: 0.8;\n      transition: 1s all;\n    }\n\n    "," {\n      opacity: 0.8;\n      transition: 1s all;\n    }\n\n    "," {\n      opacity: 0.8;\n      transition: 1s all;\n    }\n\n    "," {\n      img {\n        transform: scale(1.1) rotate(-2deg);\n        -webkit-filter: blur(2px);\n        filter: blur(2px);\n        transition: transform 1s ease;\n      }\n    }\n\n    "," {\n      margin-top: ","px;\n      display: block;\n      transform: translateY(0px);\n      transition: all 1s ease-in-out;\n      opacity: 1;\n      transition: opacity 0.5s linear;\n    }\n  }\n"])),(function(n){n.theme;return"white"}),(function(n){var t=n.$size;return v(t)}),g,b,f,A,j,(function(n){var t=n.slugMarginTopShow;return void 0!==t?t:80})),v=function(n){switch(n){case"BLOCK":return"\n                max-width: 300px;\n                max-height: none;\n            ";case"BIG":return"\n                max-width: 620px;\n                max-height: none;\n                grid-column-end: span 2;\n                grid-row-end: span 2;\n\n                @media (max-width: 1270px) {\n                    grid-column-end: span 2;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 710px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 1;\n                }\n        ";case"COLUMN":return"\n                max-width: 300px;\n                grid-column-end: span 1;\n                grid-row-end: span 2;\n                max-height: none;\n\n                @media (max-width: 710px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 493px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 2;\n                }\n        ";case"WIDE":return"\n                max-width: 940px;\n                max-height: none;\n                grid-column-end: span 3;\n                grid-row-end: span 2;\n\n                @media (max-width: 2510px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 2200px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1890px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1580px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1270px) {\n                    grid-column-end: span 3;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 1100px) {\n                    grid-column-end: span 2;\n                    grid-row-end: span 2;\n                }\n\n                @media (max-width: 710px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 1;\n                }\n\n                @media (max-width: 493px) {\n                    grid-column-end: span 1;\n                    grid-row-end: span 1;\n                }\n        ";default:return"\n                \n            "}},I=u.a.div(p||(p=Object(m.a)(["\n  display: grid;\n  grid-auto-rows: minmax(290px, auto);\n  grid-gap: 20px;\n  grid-auto-flow: dense;\n  padding: 0px;\n  margin: 40px auto;\n  transition: all 0.5s;\n\n  grid-template-columns: repeat(auto-fit, minmax(290px, 290px));\n  justify-content: center;\n  width: ",";\n  max-width: ",";\n\n  @media (max-width: 4000px) {\n    width: 1900px;\n  }\n\n  @media (max-width: 2510px) {\n    width: 1900px;\n  }\n\n  @media (max-width: 2200px) {\n    width: 1870px;\n  }\n\n  @media (max-width: 1890px) {\n    width: 1560px;\n  }\n\n  @media (max-width: 1580px) {\n    width: 1250px;\n  }\n\n  @media (max-width: 1270px) {\n    width: 940px;\n  }\n\n  @media (max-width: 1100px) {\n    width: 620px;\n  }\n\n  @media (max-width: 710px) {\n    width: 600px;\n  }\n\n  @media (max-width: 493px) {\n    width: 300px;\n  }\n"])),(function(n){return n.maxSize||"1900px"}),(function(n){return n.maxSize||"1900px"})),S=u.a.div(l||(l=Object(m.a)(["\n  text-align: left;\n  z-index: 3;\n  position: absolute;\n  display: block;\n  bottom: 0px;\n  color: #ffffff;\n  background: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(0, 0, 0, 1) 100%\n  );\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  width: 100%;\n"]))),y=u.a.div(x||(x=Object(m.a)(["\n  text-shadow: 2px 2px 6px #000000;\n  z-index: 3;\n  max-width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding: 12px;\n\n  h3 {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 0 0 0px 0px;\n    font-size: 18px;\n    font-weight: 800;\n    max-width: inherit;\n    color: ",";\n    line-height: 20px;\n  }\n  span {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 5px 0 0px 0px;\n    font-size: 13px;\n    font-weight: 500;\n    font-style: italic;\n    max-height: 11px;\n    display: block;\n    max-height: 15px;\n    max-width: inherit;\n    color: ",";\n  }\n"])),(function(n){n.theme;return"white"}),(function(n){n.theme;return"white"})),k=u.a.div(h||(h=Object(m.a)(["\n  position: relative;\n  padding: 10px;\n  z-index: 3;\n  background: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.7) 0%,\n    rgba(0, 0, 0, 0) 100%\n  );\n"])));t.j=O},99:function(n,t,e){"use strict";e(0);var i=e(48),a=e(98),o=e(1);t.a=function(n){var t=new Date>new Date(n.item.date),e="#828282";return Object(o.jsxs)(a.j,{$size:"BLOCK",slugMarginTopShow:-20,children:[Object(o.jsx)(a.a,{children:Object(o.jsx)(i.a,{alt:"todo",src:n.item.image})}),Object(o.jsx)(a.e,{}),Object(o.jsx)(a.f,{href:"/evento/".concat(n.item.slug)}),Object(o.jsx)(a.i,{children:Object(o.jsx)("span",{style:{color:t?e:null},children:new Date(n.item.date).toLocaleDateString()})}),Object(o.jsx)(a.b,{children:Object(o.jsxs)(a.c,{children:[Object(o.jsx)("h3",{dangerouslySetInnerHTML:{__html:n.item.title},style:{color:t?e:null}}),Object(o.jsx)("span",{style:{color:t?e:null},children:"IN_PERSON"===n.item.type?"PRESENCIAL":"REMOTO"})]})}),Object(o.jsx)(a.h,{children:Object(o.jsx)(a.g,{href:"/evento/".concat(n.item.slug),$color:"white",children:"Acessar"})})]})}}}]);
//# sourceMappingURL=14.e50e6531.chunk.js.map