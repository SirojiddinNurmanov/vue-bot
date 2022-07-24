"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25],{4025:function(e,s,i){i.d(s,{Z:function(){return w}});var r=i(1664),a=i(1163),t=i(7294),c=i(6841),n=i(1502),l=i(7184),d=i(160),o=i(8216),m=i(9851),u=i(1475),h=i(4363),x=i(3971),j=i(2809),p=i(6066),f=i(5893);function v(e,s){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),i.push.apply(i,r)}return i}function N(e){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{};s%2?v(Object(i),!0).forEach((function(s){(0,j.Z)(e,s,i[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(i,s))}))}return e}var g=function(e){var s=e.children;return(0,f.jsx)("section",{className:"product-area pb-100",children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("div",{className:"row",children:(0,f.jsx)("div",{className:"col-xl-12",children:(0,f.jsxs)("div",{className:"area-title text-center mb-50",children:[(0,f.jsx)("h2",{children:"Releted Products"}),(0,f.jsx)("p",{children:"Browse the huge variety of our products"})]})})}),(0,f.jsx)("div",{className:"product-slider-2 owl-carousel",children:(0,f.jsx)(p.Z,N(N({},{dots:!1,arrows:!1,infinite:!0,autoPlay:!0,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:700,settings:{slidesToShow:3,slidesToScroll:1,arrows:!1}},{breakpoint:990,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1190,settings:{slidesToShow:3,slidesToScroll:1}}]}),{},{children:s}))})]})})},b=i(5374),w=(0,o.$j)((function(e){return{products:e.product.products,product:e.product.singleProduct,carts:e.utilis.carts,wishlists:e.utilis.wishlist}}),{addToCart:h.Xq,decreaseCart:h.Bq,getCarts:h.N5,getSingleProduct:u._,addWishlist:h.bj,getWishlist:h.sA,getProducts:u.X})((function(e){var s=e.addToCart,i=(e.decreaseCart,e.getSingleProduct),o=e.getCarts,u=e.addWishlist,h=e.getWishlist,j=e.product,p=e.products,v=e.carts,N=e.wishlists,w=e.getProducts,y=e.upcoming,C=e.upthumb,k=(0,a.useRouter)().query.id;(0,t.useEffect)((function(){i(k),o(),h(),w()}),[k]);j&&v&&v.find((function(e){return e.id===j.product_id}));var Z=j&&N&&N.find((function(e){return e.id===j.product_id})),_=(0,t.useState)(!0),D=(_[0],_[1],(0,t.useState)(!1)),O=(D[0],D[1]);return(0,f.jsxs)(m.Z,{sticky:!0,container:!0,footerBg:!0,textCenter:!0,children:[(0,f.jsxs)("main",{children:[(0,f.jsx)("section",{className:"shop-details-area pt-100 pb-100",children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-xl-6 col-lg-4",children:(0,f.jsxs)(c.Z.Container,{defaultActiveKey:"tum-0",children:[C&&(0,f.jsx)("div",{className:"shop-thumb-tab",children:(0,f.jsx)(n.Z,{as:"ul",children:j&&j.product_images.map((function(e,s){return(0,f.jsx)(n.Z.Item,{as:"li",children:(0,f.jsxs)(n.Z.Link,{as:"a",href:"#",onClick:function(e){return e.preventDefault()},eventKey:"tum-".concat(s),children:[(0,f.jsx)("img",{src:e,alt:"Tum"})," "]})},s)}))})}),(0,f.jsx)("div",{className:"product-details-img mb-10",children:(0,f.jsx)(c.Z.Content,{id:"myTabContentpro",children:j&&j.product_images.map((function(e,s){return(0,f.jsx)(c.Z.Pane,{eventKey:"tum-".concat(s),children:(0,f.jsx)("div",{className:"product-large-img",children:(0,f.jsx)("img",{src:e,alt:"tum"})})},s)}))})}),!C&&(0,f.jsx)("div",{className:"shop-thumb-tab mb-30",children:(0,f.jsx)(n.Z,{as:"ul",children:j&&j.product_images.map((function(e,s){return(0,f.jsx)(n.Z.Item,{as:"li",children:(0,f.jsxs)(n.Z.Link,{as:"a",href:"#",onClick:function(e){return e.preventDefault()},eventKey:"tum-".concat(s),children:[(0,f.jsx)("img",{src:e.src,alt:"Tum"})," "]})},s)}))})})]})}),(0,f.jsx)("div",{className:"col-xl-6 col-lg-8",children:(0,f.jsxs)("div",{className:"product-details mb-30 pl-30",children:[(0,f.jsxs)("div",{className:"details-cat mb-20",children:[(0,f.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:"decor,"}),(0,f.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:j&&j.brand_name})]}),(0,f.jsx)("h2",{className:"pro-details-title mb-15",children:j&&j.product_name}),(0,f.jsxs)("div",{className:"details-price mb-20",children:[(0,f.jsxs)("span",{children:["$",Number(j&&j.product_price).toFixed(2)]}),j&&j.product_price&&(0,f.jsxs)("span",{className:"old-price",children:["$",Number(j.product_price).toFixed(2)]})]}),(0,f.jsxs)("div",{className:"product-variant",children:[j&&j.product_colors&&j.product_colors.length>0&&(0,f.jsxs)("div",{className:"product-color variant-item",children:[(0,f.jsx)("div",{className:"variant-name",children:(0,f.jsx)("span",{children:"Colors"})}),(0,f.jsx)("ul",{className:"shop-link shop-color",children:j.product_colors.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,f.jsx)("span",{className:e})})},e)}))})]}),y&&(0,f.jsxs)("div",{className:"product-coming variant-item",children:[(0,f.jsx)("div",{className:"variant-name",children:(0,f.jsx)("span",{children:"time left"})}),(0,f.jsx)("div",{className:"event-timer details-timer",children:(0,f.jsxs)("div",{"data-countdown":"2019/04/01",children:[(0,f.jsxs)("span",{className:"cdown days",children:[(0,f.jsx)("span",{className:"time-count",children:"0"})," ",(0,f.jsx)("p",{children:"Days"})]})," ",(0,f.jsxs)("span",{className:"cdown hour",children:[(0,f.jsx)("span",{className:"time-count",children:"0"})," ",(0,f.jsx)("p",{children:"Hour"})]})," ",(0,f.jsxs)("span",{className:"cdown minutes",children:[(0,f.jsx)("span",{className:"time-count",children:"00"})," ",(0,f.jsx)("p",{children:"Min"})]})," ",(0,f.jsxs)("span",{className:"cdown second",children:[" ",(0,f.jsxs)("span",{children:[(0,f.jsx)("span",{className:"time-count",children:"00"})," ",(0,f.jsx)("p",{children:"Sec"})]})]})]})})]}),(0,f.jsx)("div",{className:"product-desc variant-item",children:(0,f.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."})})]})]})})]}),(0,f.jsx)("div",{className:"row mt-50",children:(0,f.jsx)("div",{className:"col-xl-8 col-lg-8",children:(0,f.jsx)("div",{className:"product-review",children:(0,f.jsxs)(l.Z,{defaultActiveKey:"dec",children:[(0,f.jsx)(n.Z,{as:"ul",className:"review-tab",children:(0,f.jsx)(n.Z.Item,{as:"li",children:(0,f.jsx)(n.Z.Link,{as:"a",href:"#",onClick:function(e){return e.preventDefault()},eventKey:"review",children:"Reviews (2)"})})}),(0,f.jsx)(c.Z.Content,{id:"myTabContent2",children:(0,f.jsx)(c.Z.Pane,{eventKey:"review",children:(0,f.jsxs)("div",{className:"desc-text review-text",children:[(0,f.jsxs)("div",{className:"product-commnets",children:[(0,f.jsxs)("div",{className:"product-commnets-list mb-25 pb-15",children:[(0,f.jsx)("div",{className:"pro-comments-img",children:(0,f.jsx)("img",{src:"/img/product/comments/01.png",alt:"img"})}),(0,f.jsxs)("div",{className:"pro-commnets-text",children:[(0,f.jsxs)("h4",{children:["Roger West -",(0,f.jsx)("span",{children:"June 5, 2018"})]}),(0,f.jsxs)("div",{className:"pro-rating",children:[(0,f.jsx)("i",{className:"far fa-star"}),(0,f.jsx)("i",{className:"far fa-star"}),(0,f.jsx)("i",{className:"far fa-star"}),(0,f.jsx)("i",{className:"far fa-star"})]}),(0,f.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."})]})]}),(0,f.jsxs)("div",{className:"product-commnets-list mb-25 pb-15",children:[(0,f.jsx)("div",{className:"pro-comments-img",children:(0,f.jsx)("img",{src:"/img/product/comments/02.png",alt:"img"})}),(0,f.jsxs)("div",{className:"pro-commnets-text",children:[(0,f.jsxs)("h4",{children:["Roger West -",(0,f.jsx)("span",{children:"June 5, 2018"})]}),(0,f.jsxs)("div",{className:"pro-rating",children:[(0,f.jsx)("i",{className:"far fa-star"}),(0,f.jsx)("i",{className:"far fa-star"}),(0,f.jsx)("i",{className:"far fa-star"}),(0,f.jsx)("i",{className:"far fa-star"})]}),(0,f.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."})]})]})]}),(0,f.jsxs)("div",{className:"review-box mt-50",children:[(0,f.jsx)("h4",{children:"Add a Review"}),(0,f.jsxs)("div",{className:"your-rating mb-40",children:[(0,f.jsx)("span",{children:"Your Rating:"}),(0,f.jsxs)("div",{className:"rating-list",children:[(0,f.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,f.jsx)("i",{className:"far fa-star"})}),(0,f.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,f.jsx)("i",{className:"far fa-star"})}),(0,f.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,f.jsx)("i",{className:"far fa-star"})}),(0,f.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,f.jsx)("i",{className:"far fa-star"})}),(0,f.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,f.jsx)("i",{className:"far fa-star"})})]})]}),(0,f.jsx)("form",{className:"review-form",onSubmit:function(e){return e.preventDefault()},children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsxs)("div",{className:"col-xl-12",children:[(0,f.jsx)("label",{htmlFor:"message",children:"YOUR REVIEW"}),(0,f.jsx)("textarea",{name:"message",id:"message",cols:30,rows:10,defaultValue:""})]}),(0,f.jsxs)("div",{className:"col-xl-6",children:[(0,f.jsx)("label",{htmlFor:"r-name",children:"Name"}),(0,f.jsx)("input",{type:"text",id:"r-name"})]}),(0,f.jsxs)("div",{className:"col-xl-6",children:[(0,f.jsx)("label",{htmlFor:"r-email",children:"Email"}),(0,f.jsx)("input",{type:"email",id:"r-email"})]}),(0,f.jsx)("div",{className:"col-xl-12",children:(0,f.jsx)("button",{className:"btn theme-btn",children:"Add your Review"})})]})})]})]})})})]})})})})]})}),(0,f.jsx)(g,{children:p&&(0,x.rK)(j&&j.category_name,p).map((function(e){return(0,f.jsx)(b.Z,{product:e},e.producty_id)}))})]}),(0,f.jsxs)("div",{className:"s-shop bottom-navbar",children:[(0,f.jsx)(r.default,{href:"/checkout",children:(0,f.jsx)("div",{className:"buy-now",children:(0,f.jsx)("span",{children:"Sotib olish"})})}),(0,f.jsx)("div",{className:"s-cart",children:(0,f.jsx)("button",{className:"".concat(Z?"active":""," details-action-icon"),type:"submit",onClick:function(){return s(j)},children:(0,f.jsx)("i",{className:"flaticon-shopping-cart"})})}),(0,f.jsx)("div",{className:"s-wishlist",children:(0,f.jsx)("button",{className:"".concat(Z?"active":""," details-action-icon"),type:"submit",onClick:function(e){return function(e){e.preventDefault(),u(j),O(!0),Z?d.Am.error("Remove item in wishlist."):d.Am.success("Add item in wishlist.")}(e)},children:(0,f.jsx)("i",{className:"fas fa-heart"})})})]})]})}))}}]);