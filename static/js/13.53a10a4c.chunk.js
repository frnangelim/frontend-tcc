(this["webpackJsonpgaja-site"]=this["webpackJsonpgaja-site"]||[]).push([[13],{153:function(t,n,e){"use strict";e.r(n);var a,i,r,o,c,s,d,l,p=e(90),g=e.n(p),j=e(91),u=e(26),b=e(0),x=e(11),h=e(106),m=e(6),f=e(7),O=e(49),v=f.a.div(a||(a=Object(m.a)(['\n  margin-top: 40px;\n  margin-bottom: 80px;\n  margin-left: 100px;\n  margin-right: 100px;\n  \n  display: grid;\n\tgap: 20px;\n\tgrid-template: "location location date date"\n\t               "description description description description"\n                   "gaja gaja gaja gaja"\n                   "about about about about";\n\t\t\t\t\n\t.date {\n    text-align: right;\n\t\tgrid-area: date;\n\t}\n\n\t.location {\n    text-align: left;\n\t\tgrid-area: location;\n\t}\n\t\n\t.description {\n    grid-area: description;\n\t}\n\n  .gaja {\n    grid-area gaja;\n    margin-top: 40px;\n  }\n\n  .about {\n    grid-area: about;\n  }\n  \n  @media (max-width: 700px) {\n  grid-template: "location location location"\n                "date date date"\n                "description description description"\n                "gaja gaja gaja"\n                "about about about";       \n                  \n    margin-left: 20px;\n    margin-right: 20px; \n      \n    .date {\n      text-align: center;\n      grid-area: date;\n    }\n\n    .location {\n      text-align: center;\n      grid-area: location;\n    } \n\t}\n\t\n']))),w=f.a.div(i||(i=Object(m.a)(['\n  margin-bottom: 20px;\n  margin-top: 50px;\n\n  display: grid;\n  gap: 50px;\n  grid-template: "image text text text text text text text text";\n\n  .image {\n    grid-area: image;\n    height: 250x;\n    width: 250px;\n  }\n\n  .text {\n    grid-area: text;\n  }\n\n  @media (max-width: 700px) {\n    grid-template:\n      "text text"\n      "image image";\n\n    .image {\n      width: 250px;\n      height: 250px;\n      max-width: 250px;\n      max-height: 250px;\n      margin-left: auto;\n      margin-right: auto;\n    }\n  }\n']))),y=(Object(f.a)(O.a)(r||(r=Object(m.a)(["\n  width: 100%;\n  height: 60vh;\n  object-fit: cover;\n"]))),f.a.a(o||(o=Object(m.a)(["\n  position: absolute;\n  top: 70px;\n  right: 20px;\n  color: white;\n  background: #DD9847\n  padding: 12px;\n  border-radius: 50px;\n  font-weight: bold;\n"]))),f.a.img(c||(c=Object(m.a)(["\n  height: 250px;\n  width: 250px;\n  border-radius: 125px;\n  object-fit: cover;\n  border: 1px solid #000;\n  background: #fff;\n"])))),S=e(36),T=(f.a.div(s||(s=Object(m.a)(['\n  margin-top: 40px;\n  margin-bottom: 80px;\n  margin-left: 100px;\n  margin-right: 100px;\n  \n  display: grid;\n\tgap: 20px;\n\tgrid-template: "location location date date"\n\t               "description description description description"\n                   "gaja gaja gaja gaja"\n                   "about about about about";\n\t\t\t\t\n\t.date {\n    text-align: right;\n\t\tgrid-area: date;\n\t}\n\n\t.location {\n    text-align: left;\n\t\tgrid-area: location;\n\t}\n\t\n\t.description {\n    grid-area: description;\n\t}\n\n  .gaja {\n    grid-area gaja;\n  }\n\n  .about {\n    grid-area: about;\n  }\n  \n  @media (max-width: 700px) {\n    grid-template: "location location location"\n                    "date date date"\n                    "description description description"\n                    "gaja gaja gaja"\n                    "about about about";       \n                  \n    margin-left: 20px;\n    margin-right: 20px; \n      \n    .date {\n      text-align: center;\n      grid-area: date;\n    }\n\n    .location {\n      text-align: center;\n      grid-area: location;\n    } \n\t}\n\t\n']))),f.a.div(d||(d=Object(m.a)(['\n  background: #fff;\n  padding: 40px;\n  border: 1px solid #ccc;\n  text-align: center;\n\n  display: grid;\n  gap: 20px;\n  grid-template: "info button";\n  @media (max-width: 700px) {\n    grid-template:\n      "info"\n      "button";\n  }\n\n  .button {\n    position: relative;\n    height: 100%;\n\n    a {\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n    }\n  }\n'])))),E=f.a.a(l||(l=Object(m.a)(["\n  color: white;\n  background: #80e4c6;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-radius: 50px;\n  font-weight: bold;\n"]))),R=e(93),N=e(1);n.default=function(t){var n=Object(b.useState)({}),e=Object(u.a)(n,2),a=e[0],i=e[1],r=Object(b.useState)(!0),o=Object(u.a)(r,2),c=o[0],s=o[1],d=Object(x.g)();return Object(b.useEffect)((function(){function n(){return(n=Object(j.a)(g.a.mark((function n(){var e,a,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.preview){n.next=5;break}(e=localStorage.getItem("EVENT_PREVIEW"))&&(a=JSON.parse(e)),n.next=10;break;case 5:return r=t.match&&t.match.params.slug,n.next=8,R.d(r);case 8:(e=n.sent)&&(a=e.event?e.event:e);case 10:i(a),s(!1);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(N.jsx)(N.Fragment,{children:c?Object(N.jsx)(S.k,{children:Object(N.jsx)(S.j,{color:"#DC3736"})}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(S.a,{alt:"Foto principal",src:a.image}),Object(N.jsx)(S.o,{href:"https://api.whatsapp.com/send?text=".concat(window.location.href),target:"_blank",children:"Compartilhar"})]}),Object(N.jsx)(S.h,{children:Object(N.jsx)(S.g,{children:a.title})})]}),Object(N.jsxs)(v,{children:[a.date&&Object(N.jsxs)("div",{className:"date",children:[Object(N.jsx)(h.a,{}),Object(N.jsxs)(S.l,{children:[" ",new Date(a.date).toLocaleDateString()]})]}),a.address?Object(N.jsxs)("div",{className:"location",children:[Object(N.jsx)(h.c,{}),Object(N.jsxs)(S.l,{children:[" ",a.address]})]}):Object(N.jsxs)("div",{className:"location",children:[Object(N.jsx)(h.c,{}),Object(N.jsx)(S.l,{children:" Evento Remoto"})]}),Object(N.jsxs)("div",{className:"description",children:[Object(N.jsx)("h2",{children:"Informa\xe7\xf5es:"}),Object(N.jsx)("span",{children:a.description})]}),Object(N.jsxs)("div",{className:"gaja",children:[Object(N.jsx)(S.p,{}),Object(N.jsx)("h3",{style:{textAlign:"center"},children:"VAGAS PARA VOLUNT\xc1RIOS"}),a.slots&&a.slots.map((function(t,n){return Object(N.jsxs)(T,{children:[Object(N.jsxs)("div",{className:"info",children:[Object(N.jsx)(S.b,{children:t.name}),Object(N.jsx)("br",{}),9999!==t.slots&&Object(N.jsxs)(S.b,{style:{fontWeight:"bold"},children:["Vagas:"," ",Object(N.jsx)("span",{style:{fontWeight:"normal"},children:t.slots})]})]}),Object(N.jsx)("div",{className:"button",children:Object(N.jsx)(E,{onClick:function(){return d.push("/evento/".concat(a.slug,"/").concat(t.slug))},href:"javascript:void(0);",children:"ENGAJAR"})})]},n)})),!a.slots||0===(a.slots&&a.slots.length)&&Object(N.jsxs)("div",{style:{textAlign:"center"},children:[Object(N.jsx)("br",{}),Object(N.jsx)("p",{children:"Sem vagas no momento"})]}),Object(N.jsx)(S.c,{})]}),Object(N.jsx)("br",{}),Object(N.jsxs)(w,{className:"about",children:[Object(N.jsx)(y,{alt:"Logo",src:a.owner&&a.owner.profileImage,className:"image"}),Object(N.jsxs)("div",{className:"text",children:[Object(N.jsx)("h2",{children:"Mais informa\xe7\xf5es"}),Object(N.jsx)("span",{children:"".concat(a.owner?a.owner.bio:"").substring(0,400)+"..."}),Object(N.jsx)("div",{style:{marginTop:10},children:Object(N.jsx)("a",{onClick:function(){return d.push("/".concat(a.owner&&a.owner.slug))},href:"javascript:void(0);",children:"Visitar p\xe1gina"})})]})]}),!t.preview&&a.ownerId===parseInt(localStorage.getItem("USER_ID")||"0")&&Object(N.jsx)(S.i,{onClick:function(){return d.push("/evento/".concat(a.slug,"/detalhes"))},children:Object(N.jsx)(h.b,{size:20})}),t.preview&&Object(N.jsx)(S.m,{children:Object(N.jsx)(S.n,{children:"PR\xc9-VISUALIZA\xc7\xc3O"})})]})]})})}},92:function(t,n,e){"use strict";e.r(n),e.d(n,"request",(function(){return s}));var a=e(90),i=e.n(a),r=e(91),o=e(47).history,c=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"https://frnangelim.github.io/frontend-tcc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001"}).REACT_APP_TIMEOUT_IN_SECONDS||20);function s(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(i.a.mark((function t(n){var e,a,r,s,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.url,a=n.params,r=n.options,s={},r&&r["Content-Type"]||(s["Content-Type"]="application/json"),(d=localStorage.getItem("USER_JWT"))&&(s.Authorization=d),n.headers=new Headers(s),a&&Object.keys(a).forEach((function(t){void 0!==a[t]&&e.searchParams.append(t,a[t])})),n.body&&"application/json"===s["Content-Type"]&&(n.body=JSON.stringify(n.body)),t.abrupt("return",new Promise((function(t,a){var i=setTimeout((function(){a(new Error("Promise timeout"))}),1e3*c);fetch(e,n).then((function(n){clearTimeout(i),401===n.status&&o.push("/entrar"),n.ok?n.json().then((function(n){t(n)})):n.json().then((function(t){a(t)}))}))})));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},93:function(t,n,e){"use strict";e.d(n,"f",(function(){return r})),e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return c})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return d})),e.d(n,"g",(function(){return l})),e.d(n,"b",(function(){return p}));var a=e(92).request,i="".concat("http://localhost:3001","/event");function r(){var t=new URL(i);return a({url:t,method:"GET"})}function o(t){var n=new URL(i+"/".concat(t));return a({url:n,method:"GET"})}function c(t,n){var e=new URL(i+"/".concat(t,"/").concat(n));return a({url:e,method:"GET"})}function s(t){var n=t.page,e=t.limit,r=void 0===e?10:e,o=new URL(i+"/list");return a({url:o,body:{page:n,limit:r},method:"POST"})}function d(t){var n=new URL(i),e=new FormData;return e.append("event",JSON.stringify(t)),e.append("file",t.image),a({url:n,body:e,method:"POST",options:{"Content-Type":"multipart/form-data"}})}function l(t){var n=new URL(i),e=new FormData;return e.append("event",JSON.stringify(t)),e.append("file",t.image),a({url:n,body:e,method:"PUT",options:{"Content-Type":"multipart/form-data"}})}function p(t){var n=new URL(i+"/enrollment");return a({url:n,body:t,method:"POST"})}}}]);
//# sourceMappingURL=13.53a10a4c.chunk.js.map