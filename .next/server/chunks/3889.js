"use strict";
exports.id = 3889;
exports.ids = [3889];
exports.modules = {

/***/ 4714:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Banner = ({
  banner
}) => {
  return /*#__PURE__*/_jsx("section", {
    className: "banner-area pt-30 box-90",
    children: /*#__PURE__*/_jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/_jsxs("div", {
        className: "row",
        children: [/*#__PURE__*/_jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/_jsxs("div", {
            className: "banner-2 pos-relative mb-30",
            children: [/*#__PURE__*/_jsx(Link, {
              href: "/shop",
              children: /*#__PURE__*/_jsx("a", {
                children: /*#__PURE__*/_jsx("img", {
                  src: banner && banner.one.img,
                  alt: "Banner image"
                })
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "banner-trend",
              children: [/*#__PURE__*/_jsx("span", {
                children: banner && banner.one.subTitle
              }), /*#__PURE__*/_jsx("h2", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/shop",
                  children: /*#__PURE__*/_jsxs("a", {
                    children: [banner && banner.one.title, " ", new Date().getFullYear()]
                  })
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "discover-link",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/shop",
                  children: /*#__PURE__*/_jsx("a", {
                    children: banner && banner.one.link
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/_jsxs("div", {
            className: "banner-2 pos-relative mb-30",
            children: [/*#__PURE__*/_jsx(Link, {
              href: "/shop",
              children: /*#__PURE__*/_jsx("a", {
                children: /*#__PURE__*/_jsx("img", {
                  g: true,
                  src: banner && banner.two.img,
                  alt: "Banner"
                })
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "banner-look",
              children: [/*#__PURE__*/_jsx("span", {
                children: banner && banner.two.subTitle
              }), /*#__PURE__*/_jsx("h2", {
                children: banner && banner.two.title
              }), /*#__PURE__*/_jsx("img", {
                src: banner && banner.two.lookImg,
                alt: "Look"
              }), /*#__PURE__*/_jsx("p", {
                children: banner && banner.two.text
              }), /*#__PURE__*/_jsx(Link, {
                href: "/shop",
                children: /*#__PURE__*/_jsx("a", {
                  className: "btn theme-btn",
                  children: banner && banner.two.link
                })
              })]
            })]
          })
        })]
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Banner)));

/***/ }),

/***/ 4936:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Features = ({
  features
}) => {
  return /*#__PURE__*/_jsx("section", {
    className: "features-area box-90",
    children: /*#__PURE__*/_jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/_jsxs("div", {
        className: "theme-soft-bg fix pt-100 pb-50",
        children: [/*#__PURE__*/_jsx("div", {
          className: "row",
          children: /*#__PURE__*/_jsx("div", {
            className: "col-xl-12",
            children: /*#__PURE__*/_jsxs("div", {
              className: "area-title text-center mb-50",
              children: [/*#__PURE__*/_jsx("h2", {
                children: "Special Features"
              }), /*#__PURE__*/_jsx("p", {
                children: "Get special services from our shop."
              })]
            })
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "features",
          children: features && features.map((feature, i) => /*#__PURE__*/_jsxs("div", {
            className: "single-seatures width-20 mb-50 text-center",
            children: [/*#__PURE__*/_jsx("i", {
              className: feature.icon
            }), /*#__PURE__*/_jsx("span", {
              children: feature.text
            }), /*#__PURE__*/_jsx("h3", {
              children: feature.title
            })]
          }, i))
        })]
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Features)));

/***/ }),

/***/ 7394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getFeatures)
/* harmony export */ });
/* harmony import */ var _utils_fatchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5764);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1885);


const getFeatures = () => async dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_FEATURES */ .A3,
    payload: await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A)("/static/features.json")
  });
};

/***/ })

};
;