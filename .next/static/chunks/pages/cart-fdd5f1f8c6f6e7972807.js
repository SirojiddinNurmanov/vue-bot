(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{7720:function(e,s,c){"use strict";c.r(s);var a=c(1664),r=c(7294),n=c(160),i=c(8216),t=c(9851),l=(c(4978),c(4363)),d=c(9164),o=c(5893);s.default=(0,i.$j)(null,{removeCart:l.N6,addToCart:l.Xq,decreaseCart:l.Bq})((function(e){var s=e.removeCart,c=e.addToCart,l=e.decreaseCart,u=(0,i.v9)((function(e){return e.utilis.carts})),h=(0,r.useState)(0),m=(h[0],h[1],(0,r.useState)(!1)),x=(m[0],m[1]);return(0,o.jsx)(t.Z,{sticky:!0,footerBg:!0,container:!0,textCenter:!0,children:(0,o.jsx)("main",{children:u&&u.length>0?(0,o.jsx)("section",{className:"cart-area pt-100 pb-100",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-12",children:(0,o.jsxs)("form",{action:"#",children:[(0,o.jsx)("div",{className:"table-content table-responsive",children:(0,o.jsx)("div",{children:u&&u.map((function(e){return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-4 product-thumbnail",children:(0,o.jsx)("a",{href:"#",children:(0,o.jsx)("img",{src:e.img1,alt:"cart"})})}),(0,o.jsxs)("div",{className:"col-6",children:[(0,o.jsx)("div",{className:"product-name",children:(0,o.jsx)("a",{href:"#",children:e.name})}),(0,o.jsx)("div",{className:"product-price",children:(0,o.jsxs)("span",{className:"amount",children:["$",Number(e.mainPrice).toFixed(2)]})}),(0,o.jsx)("div",{className:"product-quantity",children:(0,o.jsxs)("div",{className:"cart-plus-minus",children:[(0,o.jsx)("p",{children:e.qty}),(0,o.jsx)("div",{className:"dec qtybutton",onClick:function(s){return 1!==e.qty&&function(e,s){e.preventDefault(),l(s),x(!0),n.Am.error("Remove item from Cart.")}(s,e)},children:"-"}),(0,o.jsx)("div",{className:"inc qtybutton",onClick:function(s){return function(e,s){e.preventDefault(),c(s),x(!0),n.Am.success("Add item in Cart.")}(s,e)},children:"+"})]})}),(0,o.jsx)("div",{className:"product-subtotal",children:(0,o.jsxs)("span",{className:"amount",children:["$",Number(e.totalPrice).toFixed(2)]})})]}),(0,o.jsx)("div",{className:"col-2 product-remove",children:(0,o.jsx)("a",{href:"#",onClick:function(c){s(e.id),x(!0),n.Am.error("Remove Item from cart."),c.preventDefault()},children:(0,o.jsx)("i",{className:"fa fa-trash"})})})]},e.id)}))})}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-5 ml-auto",children:(0,o.jsxs)("div",{className:"cart-page-total",children:[(0,o.jsx)("h2",{children:"Cart totals"}),(0,o.jsxs)("ul",{className:"mb-20",children:[(0,o.jsxs)("li",{children:["Subtotal"," ",(0,o.jsxs)("span",{children:["$",(0,d.X_)(u)]})]}),(0,o.jsxs)("li",{children:["Total"," ",(0,o.jsxs)("span",{children:["$",(0,d.X_)(u)]})]})]}),(0,o.jsx)(a.default,{href:"/checkout",children:(0,o.jsx)("a",{className:"btn theme-btn",children:"Proceed to checkout"})})]})})})]})})})})}):(0,o.jsx)("h2",{className:"pt-100 pb-50 text-center w-100",children:"No Product Found"})})})}))},4978:function(e,s,c){"use strict";var a=c(1664),r=c(7294),n=c(9164),i=c(5893);s.Z=function(e){var s=e.pageHeading,c=e.active,t=e.thankupage,l=e.id;return(0,r.useEffect)((function(){(0,n.CC)()}),[]),(0,i.jsx)("section",{className:"breadcrumb-area","data-background":"/img/bg/page-title.png",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-xl-12",children:(0,i.jsxs)("div",{className:"breadcrumb-text text-center",children:[t&&(0,i.jsx)("i",{className:"fa fa-check-circle text-success fs-100 mb-3","aria-hidden":"true"}),(0,i.jsx)("h1",{className:t?"mb-2":"",children:s}),t&&(0,i.jsxs)("p",{className:"fs-20",children:["Payment is successfully processsed and your order is on the way ",(0,i.jsx)("br",{})," Transaction ID:",l]}),(0,i.jsxs)("ul",{className:"breadcrumb-menu",children:[(0,i.jsx)("li",{children:(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{children:"home"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:c})})]})]})})})})})}},4701:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return c(7720)}])}},function(e){e.O(0,[774,3,851,888,179],(function(){return s=4701,e(e.s=s);var s}));var s=e.O();_N_E=s}]);