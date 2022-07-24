"use strict";
exports.id = 1021;
exports.ids = [1021];
exports.modules = {

/***/ 4001:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Blogs = ({
  blogs,
  container
}) => {
  // const { img, title, date, author, comments, des, id } = blog;
  return /*#__PURE__*/_jsx("section", {
    className: "latest-blog-area pt-95 pb-60 box-90",
    children: /*#__PURE__*/_jsxs("div", {
      className: `${container ? "container" : "container-fluid"}`,
      children: [/*#__PURE__*/_jsx("div", {
        className: "row",
        children: /*#__PURE__*/_jsx("div", {
          className: "col-xl-12",
          children: /*#__PURE__*/_jsxs("div", {
            className: "area-title text-center mb-50",
            children: [/*#__PURE__*/_jsx("h2", {
              children: "News Feeds"
            }), /*#__PURE__*/_jsx("p", {
              children: "Check it out every updates"
            })]
          })
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "row",
        children: blogs && blogs.map(blog => /*#__PURE__*/_jsx("div", {
          className: "col-xl-4 col-lg-6 col-md-6",
          children: /*#__PURE__*/_jsxs("div", {
            className: "latest-news mb-40",
            children: [/*#__PURE__*/_jsx("div", {
              className: "news__thumb mb-25",
              children: /*#__PURE__*/_jsx("img", {
                src: blog.img,
                alt: blog.title
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "news__caption white-bg",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "news-meta mb-15",
                children: [/*#__PURE__*/_jsxs("span", {
                  children: [/*#__PURE__*/_jsx("i", {
                    className: "far fa-calendar-check"
                  }), " ", blog.date, " "]
                }), /*#__PURE__*/_jsx("span", {
                  children: /*#__PURE__*/_jsxs("a", {
                    href: "#",
                    children: [/*#__PURE__*/_jsx("i", {
                      className: "far fa-user"
                    }), " ", blog.author && blog.author.name.split(" ")[0]]
                  })
                }), /*#__PURE__*/_jsx("span", {
                  children: /*#__PURE__*/_jsxs("a", {
                    href: "#",
                    children: [/*#__PURE__*/_jsx("i", {
                      className: "far fa-comments"
                    }), " ", blog.comments && blog.comments.length, " ", "Comments"]
                  })
                })]
              }), /*#__PURE__*/_jsx("h2", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: `/blog/${blog.id}`,
                  children: /*#__PURE__*/_jsx("a", {
                    children: blog.title
                  })
                })
              }), /*#__PURE__*/_jsxs("p", {
                children: [blog.des && blog.des.div.p[1].slice(1, 322), "..."]
              })]
            })]
          })
        }, blog.id))
      })]
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Blogs)));

/***/ }),

/***/ 1832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9080);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const HomeSlider = ({
  sliders,
  children,
  noArrow
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .dataImage */ .CC)();
  }, [sliders]);

  function NextArrow(props) {
    const {
      className,
      onClick
    } = props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      type: "button",
      className: className,
      onClick: onClick,
      children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
        className: "fas fa-arrow-right"
      })]
    });
  }

  function PrevArrow(props) {
    const {
      onClick,
      className
    } = props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      type: "button",
      className: className,
      onClick: onClick,
      children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
        className: "fas fa-arrow-left"
      }), " "]
    });
  }

  var settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    cssEase: "linear",
    prevArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(PrevArrow, {}),
    nextArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(NextArrow, {}),
    arrows: noArrow ? false : true
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, settings), {}, {
    children: children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeSlider);

/***/ }),

/***/ 409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9080);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MultipleRowsSlider = ({
  children,
  slideShow
}) => {
  function NextArrow(props) {
    const {
      onClick
    } = props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "owl-prev arrow-icon right",
      onClick: onClick,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("i", {
        className: "fas fa-arrow-right"
      })
    });
  }

  function PrevArrow(props) {
    const {
      onClick
    } = props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "owl-prev arrow-icon left",
      onClick: onClick,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("i", {
        className: "fas fa-arrow-left"
      })
    });
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideShow ? slideShow : 4,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(PrevArrow, {}),
    nextArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(NextArrow, {}),
    rows: 1,
    responsive: [{
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        rows: 1
      }
    }, {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 1190,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }]
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_0___default()), _objectSpread(_objectSpread({}, settings), {}, {
    children: children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipleRowsSlider);

/***/ }),

/***/ 7446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$1": () => (/* binding */ getHome1),
/* harmony export */   "Lc": () => (/* binding */ getHome2),
/* harmony export */   "dy": () => (/* binding */ getHome4),
/* harmony export */   "Qs": () => (/* binding */ getHome5)
/* harmony export */ });
/* unused harmony export getHome3 */
/* harmony import */ var _utils_fatchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5764);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1885);


const getHome1 = () => async dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .HOME_1 */ .v1,
    payload: await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A)("/static/home1.json")
  });
};
const getHome2 = () => async dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .HOME_2 */ .Z5,
    payload: await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A)("/static/home2.json")
  });
};
const getHome3 = () => async dispath => {
  dispath({
    type: HOME_3,
    payload: await fatchData("/static/home3.json")
  });
};
const getHome4 = () => async dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .HOME_4 */ .IR,
    payload: await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A)("/static/home4.json")
  });
};
const getHome5 = () => async dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .HOME_5 */ .A$,
    payload: await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A)("/static/home5.json")
  });
};

/***/ }),

/***/ 6438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ filterBlog)
/* harmony export */ });
const filterBlog = (key, arr) => {
  let isArr = typeof key !== "string" ? true : false;
  var sorted = isArr ? key.map(function (value) {
    return value.toLowerCase();
  }).sort() : [key.toLowerCase()];
  return arr && arr.filter(arr => arr.categorie.find(e => sorted.join(",").toLowerCase().includes(e.toLowerCase())));
};

/***/ })

};
;