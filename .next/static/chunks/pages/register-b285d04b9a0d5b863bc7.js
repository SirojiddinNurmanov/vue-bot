(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{1130:function(e,r){"use strict";r.Z={BACK_END_URL:"http://api.saadia.uz"}},9249:function(e,r,t){"use strict";t.r(r);var n=t(266),s=t(809),a=t.n(s),i=(t(9851),t(4978),t(6627)),c=t.n(i),u=t(7294),o=t(1163),l=t(1130),d=t(601),p=t(5764),m=t(5893);r.default=function(){var e=(0,u.useState)(),r=e[0],t=e[1];function s(){return(s=(0,n.Z)(a().mark((function e(){var t,n,s,i,c,u,m,h,f,x,v;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=null===(t=document.getElementById("fname"))||void 0===t?void 0:t.value,u=null===(n=document.getElementById("lname"))||void 0===n?void 0:n.value,m=null===(s=document.getElementById("password"))||void 0===s?void 0:s.value,h=null===(i=document.getElementById("password2"))||void 0===i?void 0:i.value,m==h){e.next=6;break}return e.abrupt("return",alert("Repeat passowrd not match!"));case 6:if(f={user_first_name:c,user_last_name:u,user_phone:r.split(" ").join("").slice(1),user_password:m},(x=d.Z.registerValidation(f)).status){e.next=10;break}return e.abrupt("return",alert(x.message));case 10:return e.next=12,(0,p.W)(l.Z.BACK_END_URL+"/api/auth/register","POST",f);case 12:if(200==(v=e.sent).status){e.next=15;break}return e.abrupt("return",alert(v.message));case 15:if(alert("Success create your accaount!, \nPlease next step login!")){e.next=17;break}return e.abrupt("return",o.default.push("/login"));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,m.jsx)("main",{children:(0,m.jsx)("div",{className:"container s-register",children:(0,m.jsxs)("form",{className:"form",id:"form",children:[(0,m.jsx)("h2",{children:"Register with Us"}),(0,m.jsxs)("div",{className:"form-control",children:[(0,m.jsx)("label",{htmlFor:"username",children:"Firstname"}),(0,m.jsx)("input",{type:"username",id:"fname",placeholder:"Enter username"}),(0,m.jsx)("small",{children:"Error message"})]}),(0,m.jsxs)("div",{className:"form-control",children:[(0,m.jsx)("label",{htmlFor:"username",children:"Lastname"}),(0,m.jsx)("input",{type:"username",id:"lname",placeholder:"Enter username"}),(0,m.jsx)("small",{children:"Error message"})]}),(0,m.jsxs)("div",{className:"form-control",children:[(0,m.jsx)("label",{htmlFor:"pnumber",children:"Phone Number"}),(0,m.jsx)(c(),{mask:"+99 8xx xxx xx xx",value:r,maskChar:"_",formatChars:{x:"[0-9]"},onChange:function(e){return t(e.target.value)}})]}),(0,m.jsxs)("div",{className:"form-control",children:[(0,m.jsx)("label",{htmlFor:"password",children:"Password"}),(0,m.jsx)("input",{type:"password",id:"password",placeholder:"Enter password"}),(0,m.jsx)("small",{children:"Error message"})]}),(0,m.jsxs)("div",{className:"form-control",children:[(0,m.jsx)("label",{htmlFor:"password2",children:"Confirm Password"}),(0,m.jsx)("input",{type:"password",id:"password2",placeholder:"Enter password again"}),(0,m.jsx)("small",{children:"Error message"})]}),(0,m.jsx)("button",{type:"button",onClick:function(){return s.apply(this,arguments)},children:"Submit"})]})})})}},4978:function(e,r,t){"use strict";var n=t(1664),s=t(7294),a=t(9164),i=t(5893);r.Z=function(e){var r=e.pageHeading,t=e.active,c=e.thankupage,u=e.id;return(0,s.useEffect)((function(){(0,a.CC)()}),[]),(0,i.jsx)("section",{className:"breadcrumb-area","data-background":"/img/bg/page-title.png",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-xl-12",children:(0,i.jsxs)("div",{className:"breadcrumb-text text-center",children:[c&&(0,i.jsx)("i",{className:"fa fa-check-circle text-success fs-100 mb-3","aria-hidden":"true"}),(0,i.jsx)("h1",{className:c?"mb-2":"",children:r}),c&&(0,i.jsxs)("p",{className:"fs-20",children:["Payment is successfully processsed and your order is on the way ",(0,i.jsx)("br",{})," Transaction ID:",u]}),(0,i.jsxs)("ul",{className:"breadcrumb-menu",children:[(0,i.jsx)("li",{children:(0,i.jsx)(n.default,{href:"/",children:(0,i.jsx)("a",{children:"home"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:t})})]})]})})})})})}},5764:function(e,r,t){"use strict";t.d(r,{A:function(){return o},W:function(){return l}});var n=t(2809),s=t(266),a=t(809),i=t.n(a);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var o=function(){var e=(0,s.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(r));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return","http://api.saadia.uz/api/products"===r?null===n||void 0===n?void 0:n.data:n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,s.Z)(i().mark((function e(r,t,n,s,a){var c,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r,{method:t,body:JSON.stringify(n),headers:u(u({},s),{},{"Content-Type":a?"application/x-www-form-urlencoded":"application/json"})});case 3:return c=e.sent,e.next=6,c.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r,t,n,s,a){return e.apply(this,arguments)}}()},601:function(e,r,t){"use strict";var n=t(2705),s=t.n(n);r.Z={registerValidation:function(e){var r=s().object({user_first_name:s().string().min(3).max(30).required(),user_last_name:s().string().min(3).max(30),user_phone:s().string().pattern(new RegExp("^998[389][012345789][0-9]{7}$")).required(),user_password:s().string().min(6).required()});try{return r.validate(e).error?{status:!1,message:r.validate(e).error.details[0].message}:{status:!0}}catch(t){return t}},loginValidation:function(e){var r=s().object({user_phone:s().string().pattern(new RegExp("^998[389][012345789][0-9]{7}$")).required(),user_password:s().string().min(6).required(),user_telegram_id:s().string().min(7)});try{return r.validate(e).error?{status:!1,message:r.validate(e).error.details[0].message}:{status:!0}}catch(t){return t}}}},8740:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return t(9249)}])}},function(e){e.O(0,[774,3,305,851,888,179],(function(){return r=8740,e(e.s=r);var r}));var r=e.O();_N_E=r}]);