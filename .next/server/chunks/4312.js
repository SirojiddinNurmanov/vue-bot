"use strict";
exports.id = 4312;
exports.ids = [4312];
exports.modules = {

/***/ 4312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_filterProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3971);
/* harmony import */ var _slider_MultipleRowsSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(409);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5374);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const HomePageProducts = ({
  products,
  bot
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "product-area box-90 pt-70 pb-10 slick-slider",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.TabContainer, {
        defaultActiveKey: "all",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-xl-5 col-lg-12",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "area-title mb-20",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
                children: "Yangi Mahsulotlar"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-xl-7 col-lg-12",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "product-tab mb-10",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav, {
                as: "ul",
                className: "nav product-nav  justify-content-xl-end",
                id: "myTab1",
                role: "tablist",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav.Link, {
                    as: "a",
                    href: "#",
                    onClick: e => e.preventDefault(),
                    className: "nav-link",
                    id: "home-tab",
                    "data-toggle": "tab",
                    eventKey: "all",
                    role: "tab",
                    "aria-controls": "home",
                    "aria-selected": "true",
                    children: "Barchasi"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav.Link, {
                    as: "a",
                    href: "#",
                    onClick: e => e.preventDefault(),
                    className: "nav-link",
                    id: "profile-tab",
                    "data-toggle": "tab",
                    eventKey: "furniture",
                    role: "tab",
                    "aria-controls": "profile",
                    "aria-selected": "false",
                    children: "Smartfonlar"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav.Link, {
                    as: "a",
                    href: "#",
                    onClick: e => e.preventDefault(),
                    className: "nav-link",
                    id: "contact-tab",
                    "data-toggle": "tab",
                    eventKey: "gent",
                    role: "tab",
                    "aria-controls": "contact",
                    "aria-selected": "false",
                    children: "Aksesuarlar"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav.Link, {
                    as: "a",
                    href: "#",
                    onClick: e => e.preventDefault(),
                    className: "nav-link",
                    id: "contact-tab1",
                    "data-toggle": "tab",
                    eventKey: "ladies",
                    role: "tab",
                    "aria-controls": "contact",
                    "aria-selected": "false",
                    children: "Tikuv Mashinalari"
                  })
                })]
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "row",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-xl-12",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "product-tab-content",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.TabContent, {
                className: "tab-content",
                id: "myTabContent",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.TabPane, {
                  eventKey: "all",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "product-slider owl-carousel",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_slider_MultipleRowsSlider__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                      children: products && products.length > 0 && products.map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Product__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                        product: product
                      }, product.product_id))
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.TabPane, {
                  eventKey: "furniture",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "product-slider owl-carousel ",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_slider_MultipleRowsSlider__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                      children: products && products.length && (0,_utils_filterProduct__WEBPACK_IMPORTED_MODULE_4__/* .simpleProductFilter */ .rK)("SmartPhones", products).map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Product__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                        product: product
                      }, product.product_id))
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.TabPane, {
                  eventKey: "gent",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "product-slider owl-carousel ",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_slider_MultipleRowsSlider__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                      bot: bot,
                      children: products && products.length && (0,_utils_filterProduct__WEBPACK_IMPORTED_MODULE_4__/* .simpleProductFilter */ .rK)("Accessories", products).map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Product__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                        product: product
                      }, product.product_id))
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.TabPane, {
                  eventKey: "ladies",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "product-slider owl-carousel ",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_slider_MultipleRowsSlider__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                      children: products && products.length && (0,_utils_filterProduct__WEBPACK_IMPORTED_MODULE_4__/* .simpleProductFilter */ .rK)("Sewing Machine", products).map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Product__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                        product: product
                      }, product.product_id))
                    })
                  })
                })]
              })
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePageProducts);

/***/ })

};
;