(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{8207:function(e,t,i){"use strict";i.r(t);var s=i(6800),c=i(5893);t.default=function(){return(0,c.jsx)(s.Z,{col:"col-lg-6 col-md-6",leftSideBar:!0,banner:"/img/bg/shop-banner.jpg"})}},5511:function(e,t,i){"use strict";var s=i(5893);t.Z=function(e){var t=e.setActive,i=e.active,c=e.length,a=e.sort;return(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)("div",{className:"basic-pagination basic-pagination-2 text-center",children:c?(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",onClick:function(e){t(0),e.preventDefault()},children:(0,s.jsx)("i",{className:"fas fa-angle-double-left"})})}),Array(Math.ceil(c/a)).fill("p").map((function(e,c){return(0,s.jsx)("li",{className:"".concat(i===c?"active":""),children:(0,s.jsx)("a",{href:"#",onClick:function(e){t(c),e.preventDefault()},children:c<9?"0".concat(c+1):c+1})},c)})),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",onClick:function(e){t(Array(Math.ceil(c/a)).length-1),e.preventDefault()},children:(0,s.jsx)("i",{className:"fas fa-angle-double-right"})})})]}):""})})})}},5383:function(e,t,i){"use strict";var s=i(1664),c=i(7294),a=i(160),n=i(8216),r=i(4363),l=i(6032),o=(i(9917),i(5893));t.Z=(0,n.$j)(null,{addToCart:r.Xq,addWishlist:r.bj})((function(e){var t=e.product,i=e.col5,n=e.addToCart,r=e.addWishlist,d=(0,c.useState)(!1),u=d[0],h=d[1],f=(0,c.useState)(!1),m=(f[0],f[1]),p=(0,c.useState)(!1),x=(p[0],p[1]);return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)(l.Z,{show:u,handleClose:function(){return h(!1)},product:t}),(0,o.jsx)("div",{className:"col-xl-".concat(i?5:4," col-lg-").concat(i?5:4),children:(0,o.jsx)("div",{className:"product-wrapper mb-30",children:(0,o.jsxs)("div",{className:"product-img",children:[(0,o.jsx)(s.default,{href:"/shop/".concat(t.id),children:(0,o.jsxs)("a",{children:[(0,o.jsx)("img",{src:t.img1,alt:"img 1"}),(0,o.jsx)("img",{className:"secondary-img",src:t.img2,alt:"imge 2"})]})}),(0,o.jsxs)("div",{className:"sale-tag",children:[t.new&&(0,o.jsx)("span",{className:"new",children:"new"}),t.sale&&(0,o.jsx)("span",{className:"sale",children:"sale"})]})]})})}),(0,o.jsx)("div",{className:"col-xl-".concat(i?7:8," col-lg-").concat(i?7:8),children:(0,o.jsxs)("div",{className:"product-content pro-list-content pr-0 mb-50",children:[(0,o.jsxs)("div",{className:"pro-cat mb-10",children:[(0,o.jsx)(s.default,{href:"/shop/".concat(t.id),children:"decor, "}),(0,o.jsx)(s.default,{href:"/shop/".concat(t.id),children:t.brand})]}),(0,o.jsx)("h4",{children:(0,o.jsx)(s.default,{href:"/shop/".concat(t.id),children:t.name})}),(0,o.jsx)("div",{className:"product-meta mb-10",children:(0,o.jsx)("div",{className:"pro-price",children:(0,o.jsx)("span",{children:"$".concat(Number(t.mainPrice).toFixed(2)," USD")})})}),(0,o.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),(0,o.jsxs)("div",{className:"product-action",children:[(0,o.jsx)("a",{href:"#",title:"Shoppingb Cart",onClick:function(e){return function(e){e.preventDefault(),n(t),m(!0),a.Am.success("Add item in Cart.")}(e)},children:(0,o.jsx)("i",{className:"flaticon-shopping-cart"})}),(0,o.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),h(!0)},children:(0,o.jsx)("i",{className:"flaticon-eye"})}),(0,o.jsx)("a",{href:"#",className:" ".concat(wishlist&&wishlist.find((function(e){return e.id===t.product_id}))?"active":""," "),onClick:function(e){return function(e){e.preventDefault(),r(t),x(!0),wishlist.find((function(e){return e.id===t.id}))?a.Am.error("Remove item in wishlist."):a.Am.success("Add item in wishlist.")}(e)},children:(0,o.jsx)("i",{className:"flaticon-like"})})]})]})})]})}))},6800:function(e,t,i){"use strict";i.d(t,{Z:function(){return f}});var s=i(7294),c=i(8216),a=i(5511),n=(i(1664),i(9917),i(162)),r=i(5893),l=(i(9322),(0,c.$j)((function(e){return{search:e.filter.search,products:e.product.products}}),{filterByName:n.TV,filterByBrand:n.$3,filterByCatagory:n.lj,filterBySize:n.eY,filterByPrice:n.ID,filterByColor:n.ty,filterByTags:n.$N})((function(e){var t=e.filterByName,i=e.search;e.filterByBrand,e.filterByCatagory,e.filterBySize,e.filterByPrice,e.filterByColor,e.setActive_,e.filterByTags,e.products;return(0,r.jsx)("div",{className:"col-xl-4 col-lg-4",children:(0,r.jsx)("div",{className:"sidebar-box",children:(0,r.jsxs)("div",{className:"shop-widget",children:[(0,r.jsx)("h3",{className:"shop-title",children:"Search by"}),(0,r.jsxs)("form",{action:"#",className:"shop-search",onSubmit:function(e){return e.preventDefault()},children:[(0,r.jsx)("input",{type:"text",value:i,onChange:function(e){return t(e.target.value)},placeholder:"Your keyword...."}),(0,r.jsx)("button",{children:(0,r.jsx)("i",{className:"fa fa-search"})})]})]})})})}))),o=i(5374),d=(i(5383),i(1475)),u=i(3971),h=i(9851),f=(0,c.$j)((function(e){return{products:(0,u.oL)(e.product.products,e.filter)}}),{getProducts:d.X})((function(e){var t=e.products,i=e.getProducts,c=(e.col,e.banner,e.defultActive,e.leftSideBar),n=(0,s.useState)(0),d=n[0],u=n[1];return(0,s.useEffect)((function(){i()}),[]),console.log(t&&"shop filter",t),(0,r.jsx)(h.Z,{footerBg:!0,container:!0,textCenter:!0,sticky:!0,children:(0,r.jsx)("main",{children:(0,r.jsx)("section",{className:"shop-area",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[!c&&(0,r.jsx)(l,{setActive_:function(){return u(0)}}),(0,r.jsxs)("div",{className:"col-xl-8 col-lg-8",children:[(0,r.jsx)("div",{className:"row",children:t&&t.length>0&&t.map((function(e,t){return(0,r.jsx)("div",{className:"col-4 ".concat(6),children:(0,r.jsx)(o.Z,{wrapperPadding0:!0,product:e})},e.id)}))}),(0,r.jsx)(a.Z,{active:d,setActive:u,sort:6,length:t&&t.length})]})]})})})})})}))},84:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/left-sidebar",function(){return i(8207)}])}},function(e){e.O(0,[774,3,691,322,851,674,888,179],(function(){return t=84,e(e.s=t);var t}));var t=e.O();_N_E=t}]);