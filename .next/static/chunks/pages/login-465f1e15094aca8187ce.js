(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{1130:function(e,r){"use strict";r.Z={BACK_END_URL:"http://api.saadia.uz"}},1162:function(e,r,t){"use strict";t.r(r);var n=t(2809),s=t(266),a=t(809),i=t.n(a),c=t(1664),o=t(7294),u=t(9851),l=t(4978),d=t(6627),p=t.n(d),h=t(1130),m=t(1163),f=t(601),x=t(5893);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.default=function(){var e=(0,o.useState)(!1),r=(e[0],e[1],(0,o.useState)()),t=r[0],n=r[1];function a(){return(a=(0,s.Z)(i().mark((function e(){var r,n,a,c,o,u,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=function(){return(u=(0,s.Z)(i().mark((function e(r,t,n,s,a){var c,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r,{method:t,body:JSON.stringify(n),headers:j(j({},s),{},{"Content-Type":a?"application/x-www-form-urlencoded":"application/json"})});case 3:return c=e.sent,e.next=6,c.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)},o=function(e,r,t,n,s){return u.apply(this,arguments)},n=null===(r=document.getElementById("loginpassword"))||void 0===r?void 0:r.value,a={user_phone:t.split(" ").join("").slice(1),user_password:n},(c=f.Z.loginValidation(a)).status){e.next=7;break}return e.abrupt("return",alert(c.message));case 7:return e.next=9,o(h.Z.BACK_END_URL+"/api/auth/login","POST",a);case 9:if(200==(l=e.sent).status){e.next=12;break}return e.abrupt("return",alert(l.message));case 12:return alert("Success logged your account!")||console.log(l),localStorage.setItem("token",l.token),e.abrupt("return",m.default.push("/"));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,x.jsx)(u.Z,{sticky:!0,textCenter:!0,footerBg:!0,container:!0,children:(0,x.jsxs)("main",{children:[(0,x.jsx)(l.Z,{active:"Login",pageHeading:"Login"}),(0,x.jsx)("section",{className:"login-area pt-100 pb-100",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-lg-8 offset-lg-2",children:(0,x.jsx)("div",{className:"basic-login",children:(0,x.jsxs)("form",{className:"form",id:"form",children:[(0,x.jsx)("h2",{children:"Login From Here"}),(0,x.jsxs)("div",{className:"form-control",children:[(0,x.jsx)("label",{htmlFor:"pnumber",children:"Phone Number"}),(0,x.jsx)(p(),{mask:"+99 8xx xxx xx xx",value:t,maskChar:"_",formatChars:{x:"[0-9]"},onChange:function(e){return n(e.target.value)}})]}),(0,x.jsxs)("div",{className:"form-control",children:[(0,x.jsx)("label",{htmlFor:"password",children:"Password"}),(0,x.jsx)("input",{type:"password",id:"loginpassword",placeholder:"Enter password"})]}),(0,x.jsx)("button",{type:"button",className:"btn theme-btn w-100",onClick:function(){return a.apply(this,arguments)},children:"Login Now"}),(0,x.jsx)("div",{className:"or-divide",children:(0,x.jsx)("span",{children:"or"})}),(0,x.jsx)(c.default,{href:"/register",children:(0,x.jsx)("a",{className:"btn theme-btn w-100",children:"Register Now"})})]})})})})})})]})})}},4978:function(e,r,t){"use strict";var n=t(1664),s=t(7294),a=t(9164),i=t(5893);r.Z=function(e){var r=e.pageHeading,t=e.active,c=e.thankupage,o=e.id;return(0,s.useEffect)((function(){(0,a.CC)()}),[]),(0,i.jsx)("section",{className:"breadcrumb-area","data-background":"/img/bg/page-title.png",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-xl-12",children:(0,i.jsxs)("div",{className:"breadcrumb-text text-center",children:[c&&(0,i.jsx)("i",{className:"fa fa-check-circle text-success fs-100 mb-3","aria-hidden":"true"}),(0,i.jsx)("h1",{className:c?"mb-2":"",children:r}),c&&(0,i.jsxs)("p",{className:"fs-20",children:["Payment is successfully processsed and your order is on the way ",(0,i.jsx)("br",{})," Transaction ID:",o]}),(0,i.jsxs)("ul",{className:"breadcrumb-menu",children:[(0,i.jsx)("li",{children:(0,i.jsx)(n.default,{href:"/",children:(0,i.jsx)("a",{children:"home"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:t})})]})]})})})})})}},601:function(e,r,t){"use strict";var n=t(2705),s=t.n(n);r.Z={registerValidation:function(e){var r=s().object({user_first_name:s().string().min(3).max(30).required(),user_last_name:s().string().min(3).max(30),user_phone:s().string().pattern(new RegExp("^998[389][012345789][0-9]{7}$")).required(),user_password:s().string().min(6).required()});try{return r.validate(e).error?{status:!1,message:r.validate(e).error.details[0].message}:{status:!0}}catch(t){return t}},loginValidation:function(e){var r=s().object({user_phone:s().string().pattern(new RegExp("^998[389][012345789][0-9]{7}$")).required(),user_password:s().string().min(6).required(),user_telegram_id:s().string().min(7)});try{return r.validate(e).error?{status:!1,message:r.validate(e).error.details[0].message}:{status:!0}}catch(t){return t}}}},7156:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(1162)}])}},function(e){e.O(0,[774,3,305,851,888,179],(function(){return r=7156,e(e.s=r);var r}));var r=e.O();_N_E=r}]);