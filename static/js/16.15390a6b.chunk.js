(this["webpackJsonpgaja-site"]=this["webpackJsonpgaja-site"]||[]).push([[16],{152:function(t,e,n){"use strict";n.r(e);var a,r,i,o,c,s=n(90),u=n.n(s),p=n(91),d=n(17),l=n(13),j=n(26),b=n(0),h=n(138),O=n(111),m=n(139),f=n(140),x=n(141),g=n(142),v=n(11),S=n(6),w=n(7),E=n(137),T=n(87),_=n(88),y=Object(w.a)(E.a)(a||(a=Object(S.a)(["\n  margin-top: 100px;\n  text-align: center;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  margin-bottom: 30px;\n\n  @media (min-width: 768px) {\n    padding: 50px;\n    width: 50%;\n  }\n\n  @media (max-width: 768px) {\n    padding-top: 50px;\n    padding-bottom: 50px;\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-top: 150px;\n  }\n"]))),R=Object(w.a)(T.a)(r||(r=Object(S.a)(["\n  float: left;\n  font-weight: bold;\n"]))),C=Object(w.a)(_.a)(i||(i=Object(S.a)(["\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),P=(w.a.div(o||(o=Object(S.a)(["\n  position: absolute;\n  top: 80px;\n  left: 20px;\n  cursor: pointer;\n"]))),w.a.div(c||(c=Object(S.a)(["\n  margin-top: 40px;\n  cursor: pointer;\n"])))),A=n(36),k=n(50),I=n(92).request,U="".concat("http://localhost:3001","/auth");function D(t){var e=new URL(U+"/login");return I({url:e,body:t,method:"POST"})}var q=n(1);e.default=function(t){var e=Object(b.useState)({email:"",password:""}),n=Object(j.a)(e,2),a=n[0],r=n[1],i=Object(b.useState)(""),o=Object(j.a)(i,2),c=o[0],s=o[1],S=Object(v.g)(),w=function(t){var e=t.target.name,n=t.target.value;r(Object(l.a)(Object(l.a)({},a),{},Object(d.a)({},e,n)))},E=function(){var e=Object(p.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,D(a);case 4:(r=e.sent)&&(localStorage.setItem("USER_JWT",r.jwt),localStorage.setItem("USER_ID",r.user.id),t.loginEvent(),S.push("/meus-eventos")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("ERROR",e.t0),s(e.t0&&e.t0.err?e.t0.err.message:"Ocorreu um erro, tente novamente.");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)(y,{children:[Object(q.jsx)("div",{style:{textAlign:"center"},children:Object(q.jsx)("img",{src:k.a,alt:"Logo",style:{width:60,height:60}})}),Object(q.jsx)(h.a,{children:Object(q.jsxs)(O.a,{onSubmit:E,children:[Object(q.jsxs)(m.a,{children:[Object(q.jsx)(f.a,{sm:"12",children:Object(q.jsxs)(x.a,{children:[Object(q.jsx)(R,{for:"title",children:"Email:"}),Object(q.jsx)(g.a,{type:"email",name:"email",id:"email",onChange:w,value:a.email,required:!0})]})}),Object(q.jsx)(f.a,{sm:"12",children:Object(q.jsxs)(x.a,{children:[Object(q.jsx)(R,{for:"title",children:"Senha:"}),Object(q.jsx)(g.a,{type:"password",name:"password",id:"password",onChange:w,value:a.password,required:!0})]})})]}),c&&Object(q.jsxs)(A.f,{children:[c,Object(q.jsx)("br",{})]}),Object(q.jsx)("br",{}),Object(q.jsx)(C,{color:"primary",children:"Entrar"}),Object(q.jsx)(P,{onClick:function(){S.push("/cadastrar")},children:Object(q.jsx)(A.l,{children:"Ainda n\xe3o possui uma conta? Registre-se aqui"})})]})})]})}},92:function(t,e,n){"use strict";n.r(e),n.d(e,"request",(function(){return s}));var a=n(90),r=n.n(a),i=n(91),o=n(47).history,c=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"https://frnangelim.github.io/frontend-tcc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001"}).REACT_APP_TIMEOUT_IN_SECONDS||20);function s(t){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(r.a.mark((function t(e){var n,a,i,s,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,a=e.params,i=e.options,s={},i&&i["Content-Type"]||(s["Content-Type"]="application/json"),(u=localStorage.getItem("USER_JWT"))&&(s.Authorization=u),e.headers=new Headers(s),a&&Object.keys(a).forEach((function(t){void 0!==a[t]&&n.searchParams.append(t,a[t])})),e.body&&"application/json"===s["Content-Type"]&&(e.body=JSON.stringify(e.body)),t.abrupt("return",new Promise((function(t,a){var r=setTimeout((function(){a(new Error("Promise timeout"))}),1e3*c);fetch(n,e).then((function(e){clearTimeout(r),401===e.status&&o.push("/entrar"),e.ok?e.json().then((function(e){t(e)})):e.json().then((function(t){a(t)}))}))})));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=16.15390a6b.chunk.js.map