(this["webpackJsonptest-app-rest-api"]=this["webpackJsonptest-app-rest-api"]||[]).push([[0],{50:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(51),r=n.n(s),o=(n(50),n.p+"static/media/logo.8bb55362.svg"),i=n(1),l=Object(a.memo)((function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsxs)("div",{className:"header__content",children:[Object(i.jsx)("a",{className:"header__logo",href:"/#",children:Object(i.jsx)("img",{src:o,alt:"logo of the cat"})}),Object(i.jsxs)("nav",{className:"nav",children:[Object(i.jsx)("button",{type:"button",className:"btn",children:"Users"}),Object(i.jsx)("button",{type:"button",className:"btn",children:"Sign up"})]})]})})})),j=Object(a.memo)((function(){return Object(i.jsx)("div",{className:"banner",children:Object(i.jsxs)("div",{className:"banner__content",children:[Object(i.jsx)("h1",{className:"banner__title",children:"Test assignment for front-end developer"}),Object(i.jsx)("p",{className:"banner__subtitle",children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they will be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),Object(i.jsx)("button",{type:"button",className:"banner__button",children:"Sign up"})]})})})),u=n(30),d=n.n(u),b=n(37),m=n(9),p="https://frontend-test-assignment-api.abz.agency/api/v1",h=function(){return localStorage.getItem("API_TOKEN")||""},O=function(e){return localStorage.setItem("API_TOKEN",e)};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return n&&(a.body=n,a.headers={Token:h()}),fetch(p+e,a).then((function(a){if(!a.ok){if(401===a.status)return fetch("".concat(p,"/token")).then((function(e){return e.ok?e.json():{}})).then((function(a){if(a.token)return O(a.token),f(e,t,n);throw Error("Cannot get token")}));throw new Error}return a.json()}))}var x=function(e){return f(e)},v=function(e,t){return f(e,"POST",t)},g=Object(a.memo)((function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/users");case 3:t=e.sent,c(t.users),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.jsxs)("div",{className:"card-profile",children:[Object(i.jsx)("h1",{className:"card-profile__title",children:"Working with GET request"}),Object(i.jsx)("div",{className:"card-profile__container",children:n&&Object(i.jsx)(i.Fragment,{children:n.map((function(e){return Object(i.jsxs)("div",{className:"card-box",children:[Object(i.jsx)("img",{className:"card-box__image",src:e.photo,alt:""}),Object(i.jsxs)("div",{className:"card-box__description description",children:[Object(i.jsx)("p",{className:"description__name",children:e.name}),Object(i.jsx)("p",{children:e.position}),Object(i.jsx)("p",{children:e.email}),Object(i.jsx)("p",{children:e.phone})]})]},e.id)}))})}),Object(i.jsx)("button",{type:"button",className:"btn",children:"Show more"})]})})),_=n(20),N=n(92),k=n(96),y=n(93),w=n(94),S=n(91),C=Object(a.memo)((function(e){var t=e.onClose;return Object(i.jsx)("div",{className:"modal",children:Object(i.jsxs)("div",{className:"modal__content",children:[Object(i.jsx)("h2",{children:"User successfully registered!"}),Object(i.jsx)("button",{type:"button",className:"modal__close",onClick:function(){return t(!1)},children:"Close"})]})})}));var E=function(){var e=Object(a.useState)(),t=Object(m.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(m.a)(s,2),o=r[0],l=r[1],j=Object(a.useState)({email:"",id:"",phone:"",photo:"",position:"",position_id:"",registration_timestamp:0,name:""}),u=Object(m.a)(j,2),p=u[0],h=u[1],O=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("position_id",p.position_id),a.append("name",p.name),a.append("email",p.email),a.append("phone",p.phone),a.append("photo",p.photo),n&&a.append("photo",n),e.prev=8,e.next=11,v("/users",a);case 11:c=e.sent,l(!0),console.log(c),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[8,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("form",{onSubmit:O,className:"login-form",children:[Object(i.jsx)("input",{className:"login-form__input",type:"text",id:"username",value:p.name,placeholder:"Your name",onChange:function(e){h((function(t){return Object(_.a)(Object(_.a)({},t),{},{name:e.target.value})}))}}),Object(i.jsx)("input",{className:"login-form__input",type:"email",id:"email",value:p.email,placeholder:"Email",onChange:function(e){h((function(t){return Object(_.a)(Object(_.a)({},t),{},{email:e.target.value})}))}}),Object(i.jsxs)("div",{className:"login-form__phone-container",children:[Object(i.jsx)("input",{className:"login-form__input",type:"tel",id:"phone",value:p.phone,placeholder:"Phone",onChange:function(e){h((function(t){return Object(_.a)(Object(_.a)({},t),{},{phone:e.target.value})}))}}),Object(i.jsx)("p",{className:"login-form__phone",children:"+38 (XXX) XXX - XX - XX"})]}),Object(i.jsx)("div",{className:"login-form__select",children:Object(i.jsxs)(N.a,{children:[Object(i.jsx)(k.a,{id:"demo-radio-buttons-group-label",children:"Select your position"}),Object(i.jsxs)(y.a,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"Frontend developer",onChange:function(e){h((function(t){return Object(_.a)(Object(_.a)({},t),{},{position_id:e.target.value})}))},value:p.position_id,name:"radio-buttons-group",children:[Object(i.jsx)(w.a,{value:"1",control:Object(i.jsx)(S.a,{}),label:"Frontend developer"}),Object(i.jsx)(w.a,{value:"2",control:Object(i.jsx)(S.a,{}),label:"Backend developer"}),Object(i.jsx)(w.a,{value:"3",control:Object(i.jsx)(S.a,{}),label:"Designer"}),Object(i.jsx)(w.a,{value:"4",control:Object(i.jsx)(S.a,{}),label:"QA"})]})]})}),Object(i.jsx)("div",{className:"login-form__upload",children:Object(i.jsx)("div",{className:"file has-name",children:Object(i.jsxs)("label",{className:"file-label",htmlFor:"resume",children:[Object(i.jsx)("input",{id:"resume",className:"file-input",type:"file",name:"resume",onChange:function(e){var t,n=null===(t=e.target.files)||void 0===t?void 0:t[0];if(n){var a=new FileReader;a.readAsDataURL(n),a.onload=function(){c(n),h((function(e){return Object(_.a)(Object(_.a)({},e),{},{photo:String(n)})}))}}}}),Object(i.jsxs)("span",{className:"file-cta",children:[Object(i.jsx)("i",{className:"fas fa-upload"}),Object(i.jsx)("div",{className:"file-label",children:"Upload"})]}),Object(i.jsx)("span",{className:"file-name",children:p.photo?"Picture uploaded":"No file chosen"})]})})}),Object(i.jsx)("button",{type:"submit",className:"login-form__button",onChange:function(){return O},children:"Sign Up"})]}),o&&Object(i.jsx)(C,{onClose:l})]})},T=Object(a.memo)((function(){return Object(i.jsx)("div",{className:"form",children:Object(i.jsxs)("div",{className:"form__content",children:[Object(i.jsx)("h1",{className:"form__title",children:"Working with POST request"}),Object(i.jsx)(E,{})]})})})),X=Object(a.memo)((function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(j,{}),Object(i.jsx)(g,{}),Object(i.jsx)(T,{})]})}));r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(X,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.0f2a3167.chunk.js.map