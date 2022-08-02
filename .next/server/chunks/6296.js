"use strict";
exports.id = 6296;
exports.ids = [6296];
exports.modules = {

/***/ 2685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ product_HomePageSingleProduct)
});

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./src/utils/filterProduct.js
var filterProduct = __webpack_require__(3971);
// EXTERNAL MODULE: ./src/components/slider/MultipleRowsSlider.js
var MultipleRowsSlider = __webpack_require__(409);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/slider/SingleProductSlider.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SingleProductSlider = ({
  children
}) => {
  function NextArrow(props) {
    const {
      className,
      onClick
    } = props;
    return /*#__PURE__*/_jsx("div", {
      className: "owl-prev arrow-icon right",
      onClick: onClick,
      children: /*#__PURE__*/_jsx("i", {
        className: "fas fa-arrow-right"
      })
    });
  }

  function PrevArrow(props) {
    const {
      onClick,
      className
    } = props;
    return /*#__PURE__*/_jsx("div", {
      className: "owl-prev arrow-icon left",
      onClick: onClick,
      children: /*#__PURE__*/_jsx("i", {
        className: "fas fa-arrow-left"
      })
    });
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/_jsx(PrevArrow, {}),
    nextArrow: /*#__PURE__*/_jsx(NextArrow, {}),
    responsive: [{
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    }, {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1190,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/_jsx(Slider, _objectSpread(_objectSpread({}, settings), {}, {
    children: children
  }));
};

/* harmony default export */ const slider_SingleProductSlider = ((/* unused pure expression or super */ null && (SingleProductSlider)));
// EXTERNAL MODULE: ./src/components/product/Product.js
var Product = __webpack_require__(5374);
;// CONCATENATED MODULE: ./src/components/product/HomePageSingleProduct.js








const HomePageSingleProduct = ({
  products,
  bot
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "product-area box-90 pt-45 pb-30 slick-slider",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.TabContainer, {
        defaultActiveKey: "all2",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-5 col-lg-12",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "area-title mb-20",
              children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: "Qaynoq mahsulotlar"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-7 col-lg-12",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "product-tab mb-10",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
                as: "ul",
                className: "nav product-nav  justify-content-xl-end",
                id: "myTab1",
                role: "tablist",
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                    as: "a",
                    href: "#",
                    className: "nav-link",
                    onClick: e => e.preventDefault(),
                    id: "home-tab",
                    "data-toggle": "tab",
                    eventKey: "all2",
                    role: "tab",
                    "aria-controls": "home",
                    "aria-selected": "true",
                    children: "Barchasi"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                    as: "a",
                    href: "#",
                    className: "nav-link",
                    onClick: e => e.preventDefault(),
                    id: "profile-tab",
                    "data-toggle": "tab",
                    eventKey: "furniture2",
                    role: "tab",
                    "aria-controls": "profile",
                    "aria-selected": "false",
                    children: "Smartfonlar"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                    as: "a",
                    href: "#",
                    className: "nav-link",
                    onClick: e => e.preventDefault(),
                    id: "contact-tab",
                    "data-toggle": "tab",
                    eventKey: "gent2",
                    role: "tab",
                    "aria-controls": "contact",
                    "aria-selected": "false",
                    children: "Aksesuarlar"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                    as: "a",
                    href: "#",
                    onClick: e => e.preventDefault(),
                    className: "nav-link",
                    id: "contact-tab1",
                    "data-toggle": "tab",
                    eventKey: "ladies2",
                    role: "tab",
                    "aria-controls": "contact",
                    "aria-selected": "false",
                    children: "tikuv mashinalari"
                  })
                })]
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-xl-12",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "product-tab-content",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.TabContent, {
                className: "tab-content",
                id: "myTabContent",
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.TabPane, {
                  eventKey: "all2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "product-slider owl-carousel",
                    children: /*#__PURE__*/jsx_runtime_.jsx(MultipleRowsSlider/* default */.Z, {
                      children: products && products.map(product => /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
                        product: product
                      }, product.product_id))
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.TabPane, {
                  eventKey: "furniture2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "product-slider owl-carousel ",
                    children: /*#__PURE__*/jsx_runtime_.jsx(MultipleRowsSlider/* default */.Z, {
                      children: products && (0,filterProduct/* simpleProductFilter */.rK)("furniture", products).map(product => /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
                        product: product
                      }, product.product_id))
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.TabPane, {
                  eventKey: "gent2",
                  children: /*#__PURE__*/jsx_runtime_.jsx(MultipleRowsSlider/* default */.Z, {
                    children: products && (0,filterProduct/* simpleProductFilter */.rK)("gent", products).map(product => /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
                      product: product
                    }, product.product_id))
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.TabPane, {
                  eventKey: "ladies2",
                  children: /*#__PURE__*/jsx_runtime_.jsx(MultipleRowsSlider/* default */.Z, {
                    children: products && (0,filterProduct/* simpleProductFilter */.rK)("ladies", products).map(product => /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
                      product: product
                    }, product.product_id))
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

/* harmony default export */ const product_HomePageSingleProduct = (HomePageSingleProduct);

/***/ }),

/***/ 4611:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const UpcomingProduct = ({
  upcomingProduct
}) => {
  useEffect(() => {
    dataImage();
  }, [upcomingProduct]);
  return /*#__PURE__*/_jsxs("section", {
    className: "upcoming-product-area pos-relative box-90 pt-120 pb-120",
    "data-background": upcomingProduct && upcomingProduct.img // style={{ backgroundImage: 'url("img/bg/bg2.jpg")' }}
    ,
    children: [/*#__PURE__*/_jsx("div", {
      className: "upc-shape d-none d-xl-block",
      children: upcomingProduct && upcomingProduct.map.map((map, i) => /*#__PURE__*/_jsxs("div", {
        className: `bakix-marker map-c${i + 1} ${map.class}`,
        children: [/*#__PURE__*/_jsx("div", {
          className: "bakix-map-icon",
          children: /*#__PURE__*/_jsx("i", {
            className: "flaticon-add"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "bakix-map-address",
          children: /*#__PURE__*/_jsx("p", {
            children: map.text.includes("/n") ? map.text.split("/n").map((text, i) => /*#__PURE__*/_jsxs(Fragment, {
              children: [text, " ", /*#__PURE__*/_jsx("br", {}), " "]
            }, i)) : map.text
          })
        })]
      }, i))
    }), /*#__PURE__*/_jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/_jsx("div", {
        className: "row",
        children: /*#__PURE__*/_jsx("div", {
          className: "col-xl-6 offset-xl-6",
          children: /*#__PURE__*/_jsxs("div", {
            className: "upcoming-product",
            children: [/*#__PURE__*/_jsx("div", {
              className: "upc-price",
              children: "$500.00"
            }), /*#__PURE__*/_jsx("h1", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/product-details",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Lodge Flush Mount"
                })
              })
            }), /*#__PURE__*/_jsxs("ul", {
              className: "upc-pro-info fix",
              children: [/*#__PURE__*/_jsxs("li", {
                className: "d-flex",
                children: [/*#__PURE__*/_jsx("i", {
                  className: "flaticon-layers"
                }), /*#__PURE__*/_jsxs("div", {
                  className: "upc-info",
                  children: [/*#__PURE__*/_jsx("h4", {
                    children: "Origin From"
                  }), /*#__PURE__*/_jsx("span", {
                    children: "Sweden"
                  })]
                })]
              }), /*#__PURE__*/_jsxs("li", {
                className: "d-flex",
                children: [/*#__PURE__*/_jsx("i", {
                  className: "flaticon-layers"
                }), /*#__PURE__*/_jsxs("div", {
                  className: "upc-info",
                  children: [/*#__PURE__*/_jsx("h4", {
                    children: "Material"
                  }), /*#__PURE__*/_jsx("span", {
                    children: "Aluminum"
                  })]
                })]
              }), /*#__PURE__*/_jsxs("li", {
                className: "d-flex",
                children: [/*#__PURE__*/_jsx("i", {
                  className: "flaticon-layers"
                }), /*#__PURE__*/_jsxs("div", {
                  className: "upc-info",
                  children: [/*#__PURE__*/_jsx("h4", {
                    children: "Designer"
                  }), /*#__PURE__*/_jsx("span", {
                    children: "Basictheme"
                  })]
                })]
              })]
            }), /*#__PURE__*/_jsx("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla."
            }), /*#__PURE__*/_jsxs("div", {
              className: "upc-btn",
              children: [/*#__PURE__*/_jsx(Link, {
                href: "/shop",
                children: /*#__PURE__*/_jsx("a", {
                  className: "btn theme-btn",
                  "data-animation": "fadeInLeft",
                  "data-delay": ".7s",
                  children: "shop now"
                })
              }), /*#__PURE__*/_jsx(Link, {
                href: "/shop",
                children: /*#__PURE__*/_jsx("a", {
                  className: "btn white-btn",
                  "data-animation": "fadeInRight",
                  "data-delay": ".9s",
                  children: "Details"
                })
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "event-timer",
              children: /*#__PURE__*/_jsxs("div", {
                className: "mt-40",
                "data-countdown": "2019/04/01",
                children: [/*#__PURE__*/_jsxs("span", {
                  className: "cdown days",
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "time-count",
                    children: "0"
                  }), " ", /*#__PURE__*/_jsx("p", {
                    children: "Days"
                  })]
                }), " ", /*#__PURE__*/_jsxs("span", {
                  className: "cdown hour",
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "time-count",
                    children: "0"
                  }), " ", /*#__PURE__*/_jsx("p", {
                    children: "Hour"
                  })]
                }), " ", /*#__PURE__*/_jsxs("span", {
                  className: "cdown minutes",
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "time-count",
                    children: "00"
                  }), " ", /*#__PURE__*/_jsx("p", {
                    children: "Min"
                  })]
                }), " ", /*#__PURE__*/_jsxs("span", {
                  className: "cdown second",
                  children: [" ", /*#__PURE__*/_jsxs("span", {
                    children: [/*#__PURE__*/_jsx("span", {
                      className: "time-count",
                      children: "00"
                    }), " ", /*#__PURE__*/_jsx("p", {
                      children: "Sec"
                    })]
                  })]
                })]
              })
            })]
          })
        })
      })
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (UpcomingProduct)));

/***/ }),

/***/ 6588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ getTopSeller)
/* harmony export */ });
/* harmony import */ var _utils_fatchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5764);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1885);


const getTopSeller = () => async dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .TOP_SELLER */ .Fm,
    payload: await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A)("/static/seller.json")
  });
};

/***/ }),

/***/ 3189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ getUpcomingProduct)
/* harmony export */ });
/* harmony import */ var _utils_fatchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5764);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1885);


const getUpcomingProduct = () => async dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_UPCOMING_PRODUCT */ .ef,
    payload: await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A)("/static/upcomingProduct.json")
  });
};

/***/ })

};
;