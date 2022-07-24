"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 6788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(6533);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/AllToaser.js



const AllToaster = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_hot_toast_.Toaster, {
    position: "top-left",
    toastOptions: {
      duration: 5000 // style: {
      //   background: "#363636",
      //   color: "#fff",
      // },
      // error: {},

    }
  });
};

/* harmony default export */ const AllToaser = (AllToaster);
;// CONCATENATED MODULE: ./src/layouts/PreLoader.js



const PreLoader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "preloader",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "preloader",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
    })
  });
};

/* harmony default export */ const layouts_PreLoader = (PreLoader);
;// CONCATENATED MODULE: ./src/layouts/ScrollTop.js


const ScrollTop = () => {
  const {
    0: scrollTop,
    1: setScrollTop
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let offset = window.scrollY;
    const sticky = document.getElementById("scrollUp");

    if (sticky) {
      if (offset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  return (// <a
    //   id="scrollUp"
    //   href="#top"
    //   style={{
    //     position: "fixed",
    //     zIndex: 2147483647,
    //     display: scrollTop ? "block" : "none",
    //   }}
    // >
    //   <i className="fas fa-arrow-up" />
    // </a>
    true
  );
};

/* harmony default export */ const layouts_ScrollTop = (ScrollTop);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./src/redux/action/type.js
var action_type = __webpack_require__(1885);
;// CONCATENATED MODULE: ./src/redux/reducer/blog.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const blog = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case action_type/* GET_BLOG */.C4:
      return _objectSpread(_objectSpread({}, state), {}, {
        blogs: payload
      });

    case action_type/* GET_MAS_BLOG */.OC:
      return _objectSpread(_objectSpread({}, state), {}, {
        blogs: payload
      });

    case action_type/* GET_SINGLE_BLOG */.n6:
      return _objectSpread(_objectSpread({}, state), {}, {
        singleBlog: payload.single,
        blogs: payload.blogs
      });

    default:
      return state;
  }
};

/* harmony default export */ const reducer_blog = (blog);
;// CONCATENATED MODULE: ./src/redux/reducer/features.js


const features = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case action_type/* GET_FEATURES */.A3:
      return payload;

    default:
      return state;
  }
};

/* harmony default export */ const reducer_features = (features);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(9164);
;// CONCATENATED MODULE: ./src/redux/reducer/filter.js
function filter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function filter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { filter_ownKeys(Object(source), true).forEach(function (key) { filter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { filter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function filter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  search: "",
  price: {
    min: 0,
    max: 200
  },
  brand: [],
  size: [],
  colors: [],
  tags: [],
  category: []
};

const filter = (state = initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case action_type/* FILTER_NAME */.S4:
      return filter_objectSpread(filter_objectSpread({}, state), {}, {
        search: payload
      });

    case action_type/* FILTER_BRAND */.Aw:
      return filter_objectSpread(filter_objectSpread({}, state), {}, {
        brand: (0,utils/* updateState */.xq)(state.brand, payload)
      });

    case action_type/* FILTER_CATAGORY */.T1:
      return filter_objectSpread(filter_objectSpread({}, state), {}, {
        category: (0,utils/* updateState */.xq)(state.category, payload)
      });

    case action_type/* FILTER_SIZE */.Ao:
      return filter_objectSpread(filter_objectSpread({}, state), {}, {
        size: (0,utils/* updateState */.xq)(state.size, payload)
      });

    case action_type/* FILTER_COLOR */.KE:
      return filter_objectSpread(filter_objectSpread({}, state), {}, {
        colors: (0,utils/* updateState */.xq)(state.colors, payload)
      });

    case action_type/* FILTER_TAG */.xu:
      return filter_objectSpread(filter_objectSpread({}, state), {}, {
        tags: (0,utils/* updateState */.xq)(state.tags, payload)
      });

    case action_type/* FILTER_PRICE */.L8:
      return filter_objectSpread(filter_objectSpread({}, state), {}, {
        price: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const reducer_filter = (filter);
;// CONCATENATED MODULE: ./src/redux/reducer/home.js
function home_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function home_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { home_ownKeys(Object(source), true).forEach(function (key) { home_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { home_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function home_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const home = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case action_type/* HOME_1 */.v1:
      return home_objectSpread(home_objectSpread({}, state), {}, {
        home1: payload
      });

    case action_type/* HOME_2 */.Z5:
      return home_objectSpread(home_objectSpread({}, state), {}, {
        home2: payload
      });

    case action_type/* HOME_3 */.u0:
      return home_objectSpread(home_objectSpread({}, state), {}, {
        home3: payload
      });

    case action_type/* HOME_4 */.IR:
      return home_objectSpread(home_objectSpread({}, state), {}, {
        home4: payload
      });

    case action_type/* HOME_5 */.A$:
      return home_objectSpread(home_objectSpread({}, state), {}, {
        home5: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const reducer_home = (home);
;// CONCATENATED MODULE: ./src/redux/reducer/product.js
function product_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function product_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_ownKeys(Object(source), true).forEach(function (key) { product_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const product = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case action_type/* GET_PRODUCT */.N4:
      return product_objectSpread(product_objectSpread({}, state), {}, {
        products: payload
      });

    case action_type/* GET_SINGLE */.Ug:
      return product_objectSpread(product_objectSpread({}, state), {}, {
        singleProduct: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const reducer_product = (product);
;// CONCATENATED MODULE: ./src/redux/reducer/seller.js


const seller = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case action_type/* TOP_SELLER */.Fm:
      return {
        topSeller: payload.topSellers
      };

    default:
      return state;
  }
};

/* harmony default export */ const reducer_seller = (seller);
;// CONCATENATED MODULE: ./src/redux/reducer/upcomingProduct.js


const upcomingProduct = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case action_type/* GET_UPCOMING_PRODUCT */.ef:
      return payload;

    default:
      return state;
  }
};

/* harmony default export */ const reducer_upcomingProduct = (upcomingProduct);
// EXTERNAL MODULE: ./src/utils/filterProduct.js
var filterProduct = __webpack_require__(3971);
// EXTERNAL MODULE: ./src/utils/localstorage.js
var localstorage = __webpack_require__(3970);
;// CONCATENATED MODULE: ./src/redux/reducer/utilis.js
function utilis_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function utilis_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { utilis_ownKeys(Object(source), true).forEach(function (key) { utilis_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { utilis_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function utilis_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const utilis_initialState = {
  carts: [],
  compares: [],
  wishlist: []
};

const utilis = (state = utilis_initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case action_type/* GET_CARTS */.Rp:
      return utilis_objectSpread(utilis_objectSpread({}, state), {}, {
        carts: payload
      });

    case action_type/* ADD_TO_CART */.G2:
      return (0,filterProduct/* updateCart */.xu)(state, payload, "+");

    case action_type/* DECREASE_CART */.cE:
      return (0,filterProduct/* updateCart */.xu)(state, payload, "-");

    case action_type/* REMOVE_CART */.AB:
      const removeItem = state.carts.filter(cart => cart.id !== payload);
      (0,localstorage/* setLocalStorage */.q)("vue-ecommerce", removeItem);
      return utilis_objectSpread(utilis_objectSpread({}, state), {}, {
        carts: removeItem
      });

    case action_type/* ADD_WISHLIST */.Qs:
      const wishlist = state.wishlist.find(wishlist => wishlist.id === payload.id) ? state.wishlist.filter(wishlist => wishlist.id !== payload.id) : [...state.wishlist, payload];
      (0,localstorage/* setLocalStorage */.q)("vue-wishlist", wishlist);
      return utilis_objectSpread(utilis_objectSpread({}, state), {}, {
        wishlist: wishlist
      });

    case action_type/* GET_WISHLIST */.n_:
      return utilis_objectSpread(utilis_objectSpread({}, state), {}, {
        wishlist: payload
      });

    case action_type/* GET_COMPARE */.Xo:
      return utilis_objectSpread(utilis_objectSpread({}, state), {}, {
        compares: payload
      });

    case action_type/* COMPARE */.oJ:
      const compare = state.compares.find(compares => compares.id === payload.id) ? state.compares.filter(compares => compares.id !== payload.id) : [...state.compares, payload];
      (0,localstorage/* setLocalStorage */.q)("vue-compares", compare);
      return utilis_objectSpread(utilis_objectSpread({}, state), {}, {
        compares: compare
      });

    case action_type/* REMOVE_COMPARE */.qG:
      const compareremove = state.compares.filter(compare => compare.id !== payload.id);
      (0,localstorage/* setLocalStorage */.q)("vue-compares", compareremove);
      return utilis_objectSpread(utilis_objectSpread({}, state), {}, {
        compares: compareremove
      });

    case action_type/* CHECKOUT_USER */.WX:
      return utilis_objectSpread(utilis_objectSpread({}, state), {}, {
        chcekoutData: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const reducer_utilis = (utilis);
;// CONCATENATED MODULE: ./src/redux/reducer/index.js









/* harmony default export */ const reducer = ((0,external_redux_namespaceObject.combineReducers)({
  blog: reducer_blog,
  seller: reducer_seller,
  features: reducer_features,
  upcomingProduct: reducer_upcomingProduct,
  product: reducer_product,
  filter: reducer_filter,
  home: reducer_home,
  utilis: reducer_utilis
}));
;// CONCATENATED MODULE: ./src/redux/store.js




const store_initialState = {};
const middleware = [(external_redux_thunk_default())];
const store = (0,external_redux_namespaceObject.createStore)(reducer, store_initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));
/* harmony default export */ const redux_store = (store);
;// CONCATENATED MODULE: ./pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  const {
    0: preloader,
    1: setPreloader
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      redux_store && setPreloader(false);
    }, 2000);
    setTimeout(() => {
      if (false) {}

      new WOW.WOW().init();
    }, 2000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
    store: redux_store,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Vue - Clean Minimal eCommerce Redux Template"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: true
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
        integrity: "sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==",
        crossOrigin: "anonymous",
        referrerpolicy: "no-referrer"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/img/favicon.png"
      })]
    }), preloader ? /*#__PURE__*/jsx_runtime_.jsx(layouts_PreLoader, {}) : /*#__PURE__*/jsx_runtime_.jsx(layouts_ScrollTop, {}), /*#__PURE__*/jsx_runtime_.jsx(AllToaser, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6533:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9337,3971], () => (__webpack_exec__(6788)));
module.exports = __webpack_exports__;

})();