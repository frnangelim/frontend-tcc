(this["webpackJsonpgaja-site"]=this["webpackJsonpgaja-site"]||[]).push([[11],{102:function(e,n,t){e.exports=t(103)},103:function(e,n,t){"use strict";var a,r=(a=t(0))&&"object"==typeof a&&"default"in a?a.default:a,i=t(14);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function s(e,n){e.prototype=Object.create(n.prototype),function(e,n){for(var t=Object.getOwnPropertyNames(n),a=0;a<t.length;a++){var r=t[a],i=Object.getOwnPropertyDescriptor(n,r);i&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}}(e.prototype.constructor=e,n)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e,n,t,a,r,i,o,s){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,a,r,i,o,s],u=0;(c=new Error(n.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}};function u(e,n,t){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=n,e.selectionEnd=t;else{var a=e.createTextRange();a.collapse(!0),a.moveStart("character",n),a.moveEnd("character",t-n),a.select()}}var p={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function d(e,n,t){var a="",r="",i=null,o=[];if(void 0===n&&(n="_"),null==t&&(t=p),!e||"string"!=typeof e)return{maskChar:n,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach((function(e){s=!s&&"\\"===e||(s||!t[e]?(o.push(a.length),a.length===o.length-1&&(r+=e)):i=a.length+1,a+=e,!1)})),{maskChar:n,formatChars:t,prefix:r,mask:a,lastEditablePosition:i,permanents:o}}function h(e,n){return-1!==e.permanents.indexOf(n)}function f(e,n,t){var a=e.mask,r=e.formatChars;if(!t)return!1;if(h(e,n))return a[n]===t;var i=r[a[n]];return new RegExp(i).test(t)}function m(e,n){return n.split("").every((function(n,t){return h(e,t)||!f(e,t,n)}))}function g(e,n){var t=e.maskChar,a=e.prefix;if(!t){for(;n.length>a.length&&h(e,n.length-1);)n=n.slice(0,n.length-1);return n.length}for(var r=a.length,i=n.length;i>=a.length;i--){var o=n[i];if(!h(e,i)&&f(e,i,o)){r=i+1;break}}return r}function v(e,n){return g(e,n)===e.mask.length}function b(e,n){var t=e.maskChar,a=e.mask,r=e.prefix;if(!t){for((n=j(e,"",n,0)).length<r.length&&(n=r);n.length<a.length&&h(e,n.length);)n+=a[n.length];return n}if(n)return j(e,b(e,""),n,0);for(var i=0;i<a.length;i++)h(e,i)?n+=a[i]:n+=t;return n}function j(e,n,t,a){var r=e.mask,i=e.maskChar,o=e.prefix,s=t.split(""),c=v(e,n);return!i&&a>n.length&&(n+=r.slice(n.length,a)),s.every((function(t){for(;u=t,h(e,l=a)&&u!==r[l];){if(a>=n.length&&(n+=r[a]),s=t,i&&h(e,a)&&s===i)return!0;if(++a>=r.length)return!1}var s,l,u;return!f(e,a,t)&&t!==i||(a<n.length?n=i||c||a<o.length?n.slice(0,a)+t+n.slice(a+1):(n=n.slice(0,a)+t+n.slice(a),b(e,n)):i||(n+=t),++a<r.length)})),n}function O(e,n){for(var t=e.mask,a=n;a<t.length;++a)if(!h(e,a))return a;return null}function x(e){return e||0===e?e+"":""}function k(e,n,t,a,r){var i=e.mask,o=e.prefix,s=e.lastEditablePosition,c=n,l="",u=0,p=0,d=Math.min(r.start,t.start);return t.end>r.start?p=(u=function(e,n,t,a){var r=e.mask,i=e.maskChar,o=t.split(""),s=a;return o.every((function(n){for(;o=n,h(e,t=a)&&o!==r[t];)if(++a>=r.length)return!1;var t,o;return(f(e,a,n)||n===i)&&a++,a<r.length})),a-s}(e,0,l=c.slice(r.start,t.end),d))?r.length:0:c.length<a.length&&(p=a.length-c.length),c=a,p&&(1!==p||r.length||(d=r.start===t.start?O(e,t.start):function(e,n){for(var t=n;0<=t;--t)if(!h(e,t))return t;return null}(e,t.start)),c=function(e,n,t,a){var r=t+a,i=e.maskChar,o=e.mask,s=e.prefix,c=n.split("");if(i)return c.map((function(n,a){return a<t||r<=a?n:h(e,a)?o[a]:i})).join("");for(var l=r;l<c.length;l++)h(e,l)&&(c[l]="");return t=Math.max(s.length,t),c.splice(t,r-t),n=c.join(""),b(e,n)}(e,c,d,p)),c=j(e,c,l,d),(d+=u)>=i.length?d=i.length:d<o.length&&!u?d=o.length:d>=o.length&&d<s&&u&&(d=O(e,d)),l||(l=null),{value:c=b(e,c),enteredString:l,selection:{start:d,end:d}}}function w(e){return"function"==typeof e}function C(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function S(e){return(C()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function A(e){(C()||clearTimeout)(e)}var y=function(e){function n(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=S(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(A(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var e=i.findDOMNode(c(c(t))),n="undefined"!=typeof window&&e instanceof window.Element;if(e&&!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},t.getInputValue=function(){var e=t.getInputDOMNode();return e?e.value:null},t.setInputValue=function(e){var n=t.getInputDOMNode();n&&(t.value=e,n.value=e)},t.setCursorToEnd=function(){var e=g(t.maskOptions,t.value),n=O(t.maskOptions,e);null!==n&&t.setCursorPosition(n)},t.setSelection=function(e,n,a){void 0===a&&(a={});var r=t.getInputDOMNode(),i=t.isFocused();r&&i&&(a.deferred||u(r,e,n),null!==t.selectionDeferId&&A(t.selectionDeferId),t.selectionDeferId=S((function(){t.selectionDeferId=null,u(r,e,n)})),t.previousSelection={start:e,end:n,length:Math.abs(n-e)})},t.getSelection=function(){return function(e){var n=0,t=0;if("selectionStart"in e&&"selectionEnd"in e)n=e.selectionStart,t=e.selectionEnd;else{var a=document.selection.createRange();a.parentElement()===e&&(n=-a.moveStart("character",-e.value.length),t=-a.moveEnd("character",-e.value.length))}return{start:n,end:t,length:t-n}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(e){t.setSelection(e,e)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var e=t.maskOptions,n=e.mask,a=e.maskChar,r=e.permanents,i=e.formatChars;return{mask:n,maskChar:a,permanents:r,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:i}},t.isInputAutofilled=function(e,n,a,r){var i=t.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return!0}catch(l){}return!t.focused||r.end<a.length&&n.end===e.length},t.onChange=function(e){var n=c(c(t)).beforePasteState,a=c(c(t)).previousSelection,r=t.props.beforeMaskedValueChange,i=t.getInputValue(),o=t.value,s=t.getSelection();t.isInputAutofilled(i,s,o,a)&&(o=b(t.maskOptions,""),a={start:0,end:0,length:0}),n&&(a=n.selection,o=n.value,s={start:a.start+i.length,end:a.start+i.length,length:0},i=o.slice(0,a.start)+i+o.slice(a.end),t.beforePasteState=null);var l=k(t.maskOptions,i,s,o,a),u=l.enteredString,p=l.selection,d=l.value;if(w(r)){var h=r({value:d,selection:p},{value:o,selection:a},u,t.getBeforeMaskedValueChangeConfig());d=h.value,p=h.selection}t.setInputValue(d),w(t.props.onChange)&&t.props.onChange(e),t.isWindowsPhoneBrowser?t.setSelection(p.start,p.end,{deferred:!0}):t.setSelection(p.start,p.end)},t.onFocus=function(e){var n=t.props.beforeMaskedValueChange,a=t.maskOptions,r=a.mask,i=a.prefix;if(t.focused=!0,t.mounted=!0,r){if(t.value)g(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var o=b(t.maskOptions,i),s=b(t.maskOptions,o),c=g(t.maskOptions,s),l=O(t.maskOptions,c),u={start:l,end:l};if(w(n)){var p=n({value:s,selection:u},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());s=p.value,u=p.selection}var d=s!==t.getInputValue();d&&t.setInputValue(s),d&&w(t.props.onChange)&&t.props.onChange(e),t.setSelection(u.start,u.end)}t.runSaveSelectionLoop()}w(t.props.onFocus)&&t.props.onFocus(e)},t.onBlur=function(e){var n=t.props.beforeMaskedValueChange,a=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,a&&!t.props.alwaysShowMask&&m(t.maskOptions,t.value)){var r="";w(n)&&(r=n({value:r,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var i=r!==t.getInputValue();i&&t.setInputValue(r),i&&w(t.props.onChange)&&t.props.onChange(e)}w(t.props.onBlur)&&t.props.onBlur(e)},t.onMouseDown=function(e){if(!t.focused&&document.addEventListener){t.mouseDownX=e.clientX,t.mouseDownY=e.clientY,t.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(n){if(document.removeEventListener("mouseup",e),t.focused){var a=Math.abs(n.clientX-t.mouseDownX),r=Math.abs(n.clientY-t.mouseDownY),i=Math.max(a,r),o=(new Date).getTime()-t.mouseDownTime;(i<=10&&o<=200||i<=5&&o<=300)&&t.setCursorToEnd()}}))}w(t.props.onMouseDown)&&t.props.onMouseDown(e)},t.onPaste=function(e){w(t.props.onPaste)&&t.props.onPaste(e),e.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(e){null==t.props.children&&w(t.props.inputRef)&&t.props.inputRef(e)};var a=n.mask,r=n.maskChar,o=n.formatChars,s=n.alwaysShowMask,l=n.beforeMaskedValueChange,p=n.defaultValue,h=n.value;t.maskOptions=d(a,r,o),null==p&&(p=""),null==h&&(h=p);var f=x(h);if(t.maskOptions.mask&&(s||f)&&(f=b(t.maskOptions,f),w(l))){var v=n.value;null==n.value&&(v=p),f=l({value:f,selection:null},{value:v=x(v),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=f,t}s(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),n=new RegExp("phone","i"),t=navigator.userAgent;return e.test(t)&&n.test(t)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var e=this.previousSelection,n=this.props,t=n.beforeMaskedValueChange,a=n.alwaysShowMask,r=n.mask,i=n.maskChar,o=n.formatChars,s=this.maskOptions,c=a||this.isFocused(),l=null!=this.props.value,u=l?x(this.props.value):this.value,p=e?e.start:null;if(this.maskOptions=d(r,i,o),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var h=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||l||(u=this.getInputValue()),(h||this.maskOptions.mask&&(u||c))&&(u=b(this.maskOptions,u)),h){var f=g(this.maskOptions,u);(null===p||f<p)&&(p=v(this.maskOptions,u)?f:O(this.maskOptions,f))}!this.maskOptions.mask||!m(this.maskOptions,u)||c||l&&this.props.value||(u="");var j={start:p,end:p};if(w(t)){var k=t({value:u,selection:j},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());u=k.value,j=k.selection}this.value=u;var C=this.getInputValue()!==this.value;C?(this.setInputValue(this.value),this.forceUpdate()):h&&this.forceUpdate();var S=!1;null!=j.start&&null!=j.end&&(S=!e||e.start!==j.start||e.end!==j.end),(S||C)&&this.setSelection(j.start,j.end)}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&A(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var e,n=this.props,t=(n.mask,n.alwaysShowMask,n.maskChar,n.formatChars,n.inputRef,n.beforeMaskedValueChange,n.children),a=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],0<=n.indexOf(t)||(r[t]=e[t]);return r}(n,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(t){w(t)||l(!1);var i=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=o({},a);i.forEach((function(e){return delete s[e]})),e=t(s),i.filter((function(n){return null!=e.props[n]&&e.props[n]!==a[n]})).length&&l(!1)}else e=r.createElement("input",o({ref:this.handleRef},a));var c={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(c.onChange=this.onChange,c.onPaste=this.onPaste,c.onMouseDown=this.onMouseDown),null!=a.value&&(c.value=this.value)),e=r.cloneElement(e,c)},n}(r.Component);e.exports=y},111:function(e,n,t){"use strict";var a=t(2),r=t(8),i=t(27),o=t(9),s=t(0),c=t.n(s),l=t(3),u=t.n(l),p=t(5),d=t.n(p),h=t(16),f={children:u.a.node,inline:u.a.bool,tag:h.d,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(e){function n(n){var t;return(t=e.call(this,n)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.submit=t.submit.bind(Object(i.a)(t)),t}Object(o.a)(n,e);var t=n.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,n=e.className,t=e.cssModule,i=e.inline,o=e.tag,s=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(h.b)(d()(n,!!i&&"form-inline"),t);return c.a.createElement(o,Object(a.a)({},l,{ref:s,className:u}))},n}(s.Component);m.propTypes=f,m.defaultProps={tag:"form"},n.a=m},147:function(e,n,t){"use strict";t.r(n);var a,r,i,o,s,c,l,u,p,d=t(13),h=t(90),f=t.n(h),m=t(91),g=t(26),v=t(0),b=t(36),j=t(111),O=t(102),x=t.n(O),k=t(106),w=t(6),C=t(7),S=C.a.div(a||(a=Object(w.a)(['\n  margin-top: 20px;\n  margin-bottom: 80px;\n  margin-left: 100px;\n  margin-right: 100px;\n  \n  display: grid;\n\tgap: 20px;\n\tgrid-template: "information information information information"\n                 "form form form form";\n\t\t\t\t\n\t.information {\n\t\tgrid-area: information;\n    text-align: center;\n\t}\n  .form {\n    grid-area form;\n    margin-top: 30px;\n  }\n  \n  @media (max-width: 700px) {\n    grid-template: "information information information information"\n                    "form form form form";\n                  \n    margin-left: 20px;\n    margin-right: 20px; \n\t}\n\t\n']))),A=C.a.h1(r||(r=Object(w.a)(["\n  text-align: center;\n"]))),y=C.a.div(i||(i=Object(w.a)(["\n  border-bottom: 2px solid #ccc;\n  height: 1px;\n  margin-bottom: 40px;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n"]))),T=C.a.div(o||(o=Object(w.a)(["\n  border-bottom: 2px solid #ccc;\n  height: 1px;\n  margin-top: 60px;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n"]))),M=(C.a.div(s||(s=Object(w.a)(["\n  margin-top: 30px;\n"]))),C.a.div(c||(c=Object(w.a)(["\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"])))),E=C.a.div(l||(l=Object(w.a)(["\n  margin-top: 10px;\n"]))),I=C.a.input(u||(u=Object(w.a)(["\n  padding: 10px;\n  border-radius: 3px;\n  width: 80%;\n"]))),D=C.a.div(p||(p=Object(w.a)(["\n  margin-top: 30px;\n"]))),R=t(93),V=t(1);var P,N,U,L,B,F,G,K,J,q=function(e){var n=Object(v.useState)({firstName:"",lastName:"",email:"",phone:""}),t=Object(g.a)(n,2),a=t[0],r=t[1],i=Object(v.useState)(""),o=Object(g.a)(i,2),s=o[0],c=o[1],l=function(){var n=Object(m.a)(f.a.mark((function n(t){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),n.prev=1,!(a.phone&&!a.phone.includes("_")||(c("Telefone inv\xe1lido"),0))){n.next=7;break}return n.next=5,R.b(Object(d.a)({eventId:e.event.id,slotId:e.slot.id},a));case 5:n.sent&&e.onSubmit();case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),c(n.t0&&n.t0.err?n.t0.err.message:"Ocorreu um erro, tente novamente.");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)(S,{children:[Object(V.jsxs)("div",{className:"information",children:[Object(V.jsxs)(A,{children:['Inscri\xe7\xe3o como "',e.slot.name,'"']}),Object(V.jsxs)("div",{children:[e.event.date&&Object(V.jsxs)("div",{children:[Object(V.jsx)(k.a,{}),Object(V.jsxs)(b.l,{children:[" ",new Date(e.event.date).toLocaleDateString()]})]}),e.event.address?Object(V.jsxs)("div",{style:{marginTop:10},children:[Object(V.jsx)(k.c,{}),Object(V.jsxs)(b.l,{children:[" ",e.event.address]})]}):Object(V.jsxs)("div",{style:{marginTop:10},children:[Object(V.jsx)(k.c,{}),Object(V.jsx)(b.l,{children:" Evento Remoto"})]})]})]}),Object(V.jsxs)("div",{className:"form",children:[Object(V.jsx)(y,{}),Object(V.jsx)(M,{children:Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("h4",{children:"Formul\xe1rio"}),Object(V.jsxs)(j.a,{onSubmit:l,children:[Object(V.jsx)(E,{children:Object(V.jsx)(I,{type:"text",name:"name",placeholder:"Nome*",value:a.name,onChange:function(e){r(Object(d.a)(Object(d.a)({},a),{},{firstName:e.target.value}))},required:!0})}),Object(V.jsx)(E,{children:Object(V.jsx)(I,{type:"text",name:"lastName",placeholder:"Sobrenome*",value:a.lastName,onChange:function(e){r(Object(d.a)(Object(d.a)({},a),{},{lastName:e.target.value}))},required:!0})}),Object(V.jsx)(E,{children:Object(V.jsx)(I,{type:"email",name:"email",placeholder:"Email*",value:a.email,onChange:function(e){r(Object(d.a)(Object(d.a)({},a),{},{email:e.target.value}))},required:!0})}),Object(V.jsx)(E,{children:Object(V.jsx)(x.a,{mask:"(99) 99999-9999",maskChar:"_",value:a.phone,onChange:function(e){r(Object(d.a)(Object(d.a)({},a),{},{phone:e.target.value}))},name:"phone",placeholder:"Telefone*",required:!0,children:function(e){return Object(V.jsx)(I,Object(d.a)({},e))}})}),s&&Object(V.jsxs)(b.f,{children:[s,Object(V.jsx)("br",{})]}),Object(V.jsx)(D,{children:Object(V.jsx)(b.d,{color:"primary",type:"submit",children:"Enviar"})})]})]})}),Object(V.jsx)(T,{})]})]})})},z=C.a.div(P||(P=Object(w.a)(['\n  margin-top: 40px;\n  margin-bottom: 80px;\n  margin-left: 100px;\n  margin-right: 100px;\n\n  display: grid;\n  gap: 20px;\n  grid-template:\n    "top top top top"\n    "confirmation confirmation confirmation confirmation"\n    "hints hints hints hints";\n\n  .top {\n    grid-area: top;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .confirmation {\n    grid-area: confirmation;\n    margin-top: 40px;\n  }\n\n  .hints {\n    text-align: center;\n    margin-top: 30px;\n    grid-area: hints;\n  }\n\n  @media (max-width: 700px) {\n    grid-template:\n      "top top top"\n      "confirmation confirmation confirmation"\n      "hints hints hints";\n\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n']))),Z=C.a.span(N||(N=Object(w.a)(["\n  font-size: 60px;\n"]))),H=C.a.div(U||(U=Object(w.a)(["\n  border-bottom: 2px solid #ccc;\n  margin-bottom: 40px;\n  height: 1px;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n"]))),W=C.a.div(L||(L=Object(w.a)(["\n  border-bottom: 2px solid #ccc;\n  margin-top: 60px;\n  height: 1px;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n"]))),X=C.a.div(B||(B=Object(w.a)(["\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n"]))),Y=C.a.div(F||(F=Object(w.a)(["\n  margin-top: 30px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  width: 100%;\n  background: #80e4c6;\n"]))),Q=C.a.div(G||(G=Object(w.a)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n  width: 100%;\n  background: #d3b5dc;\n"]))),_=C.a.div(K||(K=Object(w.a)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n  width: 100%;\n  background: #ffc796;\n"]))),$=C.a.div(J||(J=Object(w.a)(["\n  margin-top: 10px;\n"])));var ee=function(){return Object(V.jsxs)(z,{children:[Object(V.jsx)("div",{className:"top",children:Object(V.jsx)(Z,{children:"Obrigado por engajar!"})}),Object(V.jsxs)("div",{className:"confirmation",children:[Object(V.jsx)(H,{}),Object(V.jsxs)(X,{children:[Object(V.jsx)("div",{children:Object(V.jsx)("span",{style:{fontWeight:"bold"},children:"Inscri\xe7\xe3o realizada!"})}),Object(V.jsx)("div",{style:{marginTop:30},children:Object(V.jsx)("span",{children:"Fique atento ao seu e-mail e celular, voc\xea receber\xe1 uma mensagem com a confirma\xe7\xe3o da inscri\xe7\xe3o e os demais detalhes necess\xe1rios."})})]}),Object(V.jsx)(W,{})]}),Object(V.jsxs)("div",{className:"hints",children:[Object(V.jsx)("div",{children:Object(V.jsx)("img",{src:"data:image/png;base64,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",alt:"Teste"})}),Object(V.jsx)("div",{children:Object(V.jsx)(b.b,{children:"Dicas do GAJA"})}),Object(V.jsxs)(Y,{children:[Object(V.jsx)("div",{children:Object(V.jsx)(b.b,{children:"N\xe3o vai conseguir ir?"})}),Object(V.jsx)($,{children:Object(V.jsx)("span",{children:"Avisa a institui\xe7\xe3o assim que poss\xedvel por telefone, e-mail ou sinal de fuma\xe7a."})})]}),Object(V.jsxs)(Q,{children:[Object(V.jsx)("div",{children:Object(V.jsx)(b.b,{children:"V\xe1 com o cora\xe7\xe3o aberto"})}),Object(V.jsx)($,{children:Object(V.jsx)("span",{children:"Ser volunt\xe1rio \xe9 muito mais que doar tempo e dedica\xe7\xe3o \xe9 al\xe9m de tudo receber amor."})})]}),Object(V.jsxs)(_,{children:[Object(V.jsx)("div",{children:Object(V.jsx)(b.b,{children:"Chegue cedo"})}),Object(V.jsx)($,{children:Object(V.jsx)("span",{children:"Chegar cedo \xe9 importante para obter as informa\xe7\xf5es necess\xe1rias e se familiarizar com a equipe."})})]})]})]})};n.default=function(e){var n=Object(v.useState)({}),t=Object(g.a)(n,2),a=t[0],r=t[1],i=Object(v.useState)({}),o=Object(g.a)(i,2),s=o[0],c=o[1],l=Object(v.useState)(!0),u=Object(g.a)(l,2),p=u[0],h=u[1],j=Object(v.useState)(!1),O=Object(g.a)(j,2),x=O[0],k=O[1];return Object(v.useEffect)((function(){function n(){return(n=Object(m.a)(f.a.mark((function n(){var t,a,i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.match&&e.match.params.slug,a=e.match&&e.match.params.slotSlug,n.next=4,R.e(t,a);case 4:(i=n.sent)&&(r(i.event),c(i.slot),h(!1));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(V.jsxs)(V.Fragment,{children:[p?Object(V.jsx)(b.k,{children:Object(V.jsx)(b.j,{color:"#DC3736"})}):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("div",{children:[Object(V.jsxs)("div",{children:[Object(V.jsx)(b.a,{alt:"Foto principal",src:a&&a.image}),Object(V.jsx)(b.o,{href:"https://api.whatsapp.com/send?text=".concat(window.location.href),target:"_blank",children:"Compartilhar"})]}),Object(V.jsx)(b.h,{children:Object(V.jsx)(b.g,{children:"Evento de ado\xe7\xe3o"})})]}),x?Object(V.jsx)(ee,{}):Object(V.jsx)(q,Object(d.a)(Object(d.a)({},e),{},{event:a,slot:s,onSubmit:function(){return k(!0)}}))]}),Object(V.jsx)("br",{})]})}},92:function(e,n,t){"use strict";t.r(n),t.d(n,"request",(function(){return c}));var a=t(90),r=t.n(a),i=t(91),o=t(47).history,s=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"https://frnangelim.github.io/frontend-tcc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001"}).REACT_APP_TIMEOUT_IN_SECONDS||20);function c(e){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(r.a.mark((function e(n){var t,a,i,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.url,a=n.params,i=n.options,c={},i&&i["Content-Type"]||(c["Content-Type"]="application/json"),(l=localStorage.getItem("USER_JWT"))&&(c.Authorization=l),n.headers=new Headers(c),a&&Object.keys(a).forEach((function(e){void 0!==a[e]&&t.searchParams.append(e,a[e])})),n.body&&"application/json"===c["Content-Type"]&&(n.body=JSON.stringify(n.body)),e.abrupt("return",new Promise((function(e,a){var r=setTimeout((function(){a(new Error("Promise timeout"))}),1e3*s);fetch(t,n).then((function(n){clearTimeout(r),401===n.status&&o.push("/entrar"),n.ok?n.json().then((function(n){e(n)})):n.json().then((function(e){a(e)}))}))})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},93:function(e,n,t){"use strict";t.d(n,"f",(function(){return i})),t.d(n,"d",(function(){return o})),t.d(n,"e",(function(){return s})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return l})),t.d(n,"g",(function(){return u})),t.d(n,"b",(function(){return p}));var a=t(92).request,r="".concat("http://localhost:3001","/event");function i(){var e=new URL(r);return a({url:e,method:"GET"})}function o(e){var n=new URL(r+"/".concat(e));return a({url:n,method:"GET"})}function s(e,n){var t=new URL(r+"/".concat(e,"/").concat(n));return a({url:t,method:"GET"})}function c(e){var n=e.page,t=e.limit,i=void 0===t?10:t,o=new URL(r+"/list");return a({url:o,body:{page:n,limit:i},method:"POST"})}function l(e){var n=new URL(r),t=new FormData;return t.append("event",JSON.stringify(e)),t.append("file",e.image),a({url:n,body:t,method:"POST",options:{"Content-Type":"multipart/form-data"}})}function u(e){var n=new URL(r),t=new FormData;return t.append("event",JSON.stringify(e)),t.append("file",e.image),a({url:n,body:t,method:"PUT",options:{"Content-Type":"multipart/form-data"}})}function p(e){var n=new URL(r+"/enrollment");return a({url:n,body:e,method:"POST"})}}}]);
//# sourceMappingURL=11.f35bcd05.chunk.js.map