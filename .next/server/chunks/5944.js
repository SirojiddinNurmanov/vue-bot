"use strict";
exports.id = 5944;
exports.ids = [5944];
exports.modules = {

/***/ 5944:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9080);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ImageSlider = ({
  imageSlider
}) => {
  var settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    fade: false,
    cssEase: "linear",
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 778,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/_jsxs("section", {
    className: "instagram-area pos-relative",
    children: [/*#__PURE__*/_jsx("div", {
      className: "instagram-active ",
      children: /*#__PURE__*/_jsx(Slider, _objectSpread(_objectSpread({}, settings), {}, {
        children: imageSlider && imageSlider.map((img, i) => /*#__PURE__*/_jsx("div", {
          className: "instagram-item",
          children: /*#__PURE__*/_jsx("img", {
            src: img,
            alt: "Image",
            style: {
              width: "100%"
            }
          })
        }, i))
      }))
    }), /*#__PURE__*/_jsx("div", {
      className: "instagram-btn",
      children: /*#__PURE__*/_jsxs("a", {
        href: "#",
        className: "btn white-btn",
        children: [/*#__PURE__*/_jsx("i", {
          className: "fab fa-instagram"
        }), " vue.store"]
      })
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ImageSlider)));

/***/ })

};
;