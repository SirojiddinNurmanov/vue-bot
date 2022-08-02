"use strict";
exports.id = 5851;
exports.ids = [5851];
exports.modules = {

/***/ 5851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ product_Details)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(6533);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/layouts/Layout.js + 15 modules
var Layout = __webpack_require__(9851);
// EXTERNAL MODULE: ./src/redux/action/product.js
var product = __webpack_require__(1475);
// EXTERNAL MODULE: ./src/redux/action/utilis.js
var utilis = __webpack_require__(4363);
// EXTERNAL MODULE: ./src/utils/filterProduct.js
var filterProduct = __webpack_require__(3971);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/slider/RelatedProduct.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const RelatedProduct = ({
  children
}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "product-area pb-100",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "area-title text-center mb-50",
            children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "O`xshash mahsulotlar"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "product-slider-2 owl-carousel",
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
          children: children
        }))
      })]
    })
  });
};

/* harmony default export */ const slider_RelatedProduct = (RelatedProduct);
// EXTERNAL MODULE: ./src/components/product/Product.js
var Product = __webpack_require__(5374);
// EXTERNAL MODULE: ./apiContext/index.js
var apiContext = __webpack_require__(1850);
;// CONCATENATED MODULE: ./src/components/slider/ImageDetailSlider.js
function ImageDetailSlider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ImageDetailSlider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ImageDetailSlider_ownKeys(Object(source), true).forEach(function (key) { ImageDetailSlider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ImageDetailSlider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ImageDetailSlider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ImageDetailSlider = ({
  children,
  slideShow
}) => {
  function NextArrow(props) {
    const {
      onClick
    } = props;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "owl-prev arrow-icon right",
      onClick: onClick,
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "fas fa-arrow-right"
      })
    });
  }

  function PrevArrow(props) {
    const {
      onClick
    } = props;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "owl-prev arrow-icon left",
      onClick: onClick,
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
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
    prevArrow: /*#__PURE__*/jsx_runtime_.jsx(PrevArrow, {}),
    nextArrow: /*#__PURE__*/jsx_runtime_.jsx(NextArrow, {}),
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
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), ImageDetailSlider_objectSpread(ImageDetailSlider_objectSpread({}, settings), {}, {
    children: children
  }));
};

/* harmony default export */ const slider_ImageDetailSlider = (ImageDetailSlider);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(5777);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(4336);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: ./node_modules/next/dist/client/link.js
var client_link = __webpack_require__(2167);
;// CONCATENATED MODULE: ./src/components/Modal.js
function Modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Modal_ownKeys(Object(source), true).forEach(function (key) { Modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function RegisterModal(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Modal_default()), Modal_objectSpread(Modal_objectSpread({}, props), {}, {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Header, {
      closeButton: true,
      children: /*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Title, {
        id: "contained-modal-title-vcenter",
        children: "Saadia online market"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Body, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Xizmatdan foydalanish uchun iltimos", " ", /*#__PURE__*/jsx_runtime_.jsx(client_link.default, {
          href: "/register",
          children: "ro`yhatdan o`ting"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Footer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(client_link.default, {
        href: "/register",
        children: /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          children: "Close"
        })
      })
    })]
  }));
}

/* harmony default export */ const Modal = (RegisterModal);
;// CONCATENATED MODULE: ./src/components/product/Details.js


















const Details = ({
  getSingleProduct,
  getCarts,
  getWishlist,
  product,
  products,
  getProducts,
  upcoming,
  upthumb
}) => {
  const router = (0,router_.useRouter)();
  const {
    id
  } = router.query;
  (0,external_react_.useEffect)(() => {
    getSingleProduct(id);
    getCarts();
    getWishlist();
    getProducts();
  }, [id]);
  const {
    isCartIncludes,
    carts,
    getAllCarts
  } = (0,apiContext/* useCarts */.v)();
  const {
    0: cartqty,
    1: setCartqty
  } = (0,external_react_.useState)(1);
  const {
    0: modalShow,
    1: setModalShow
  } = (0,external_react_.useState)(false);
  const {
    0: cart,
    1: setCart
  } = (0,external_react_.useState)(carts);
  console.log("sfhdssn", product);

  const addCart = async (id, qty) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo5LCJ1c2VyX3JvbGUiOiJ1c2VyIiwiaWF0IjoxNjU5NDI3ODg1LCJleHAiOjE2NTk1MTQyODV9.XV2tQwBFkaJ5cJAe_-sndTAo3Ab_ez-VdqnZIpmUy6o`
      },
      body: JSON.stringify({
        cart_user_id: 1,
        cart_product_id: id,
        cart_quantity: qty
      })
    };
    fetch("http://api.saadia.uz/api/carts", requestOptions).then(response => response.json()).then(data => {
      getAllCarts();
      setCart([...cart, data.data]);
      external_react_hot_toast_.toast.success("Add item succesfully in cart.");
    });
  };

  console.log(product);
  const Colors = product && product.product_colors;
  console.log(Colors);
  product && Colors.map(color => console.log(color));
  product && (product.product_qty = cartqty);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    sticky: true,
    container: true,
    footerBg: true,
    textCenter: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Modal, {
      show: modalShow,
      onHide: () => setModalShow(false)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "shop-details-area pt-10 pb-20",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-xl-6 col-lg-4",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tab.Container, {
                defaultActiveKey: "tum-0",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "product-details-img",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Tab.Content, {
                    id: "myTabContentpro",
                    children: product && product.product_images.map((img, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Tab.Pane, {
                      eventKey: `tum-${i}`,
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "product-large-img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: img,
                          alt: "tum"
                        })
                      })
                    }, i))
                  })
                }), !upthumb && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "shop-thumb-tab",
                  children: /*#__PURE__*/jsx_runtime_.jsx(slider_ImageDetailSlider, {
                    children: product && product.product_images.map((img, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                      as: "li",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
                        as: "a",
                        href: "#",
                        onClick: e => e.preventDefault(),
                        eventKey: `tum-${i}`,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: img,
                          alt: "Tum"
                        }), " "]
                      })
                    }, i))
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-xl-6 col-lg-8",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "product-details mb-10 pl-10",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "details-cat mb-10",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    onClick: e => e.preventDefault(),
                    children: product && product.brand_name
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "pro-details-title",
                  children: product && product.product_name
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "details-price",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    children: [Number(product && product.product_price), " ", "so'm"]
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "product-variant",
                  children: [product && product.product_colors && product.product_colors.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "product-color variant-item",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "variant-name",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "Colors"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "shop-link shop-color",
                      children: product && Colors.map((color, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "product-color",
                        style: {
                          backgroundColor: color
                        }
                      }, i))
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "product-desc variant-item",
                    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: product && product.product_description
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "product-action-details variant-item",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "product-details-action d-flex",
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "product-quantity ",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "cart-plus-minus",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: product ? cartqty : 1
                          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                            disabled: product ? false : true,
                            className: "dec qtybutton",
                            onClick: e => product && product.product_qty !== 1 && setCartqty(cartqty - 1),
                            children: "-"
                          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                            disabled: product ? false : true,
                            className: "inc qtybutton",
                            onClick: e => setCartqty(cartqty + 1),
                            children: "+"
                          })]
                        })
                      })
                    })
                  })]
                })]
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row mt-10",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-xl-8 col-lg-8",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "product-review",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                  children: "Izohlar(2)"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "desc-text review-text",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "product-commnets",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "product-commnets-list mb-25 pb-15",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "pro-comments-img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/img/product/comments/01.png",
                          alt: "img"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "pro-commnets-text",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                          children: ["Roger West -", /*#__PURE__*/jsx_runtime_.jsx("span", {
                            children: "June 5, 2018"
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "pro-rating",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                          children: product && product.product_description
                        })]
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "product-commnets-list mb-25 pb-15",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "pro-comments-img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/img/product/comments/02.png",
                          alt: "img"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "pro-commnets-text",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                          children: ["Roger West -", /*#__PURE__*/jsx_runtime_.jsx("span", {
                            children: "June 5, 2018"
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "pro-rating",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                          children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "review-box mt-50",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                      children: "Add a Review"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "your-rating mb-40",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "Your Rating:"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "rating-list",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          onClick: e => e.preventDefault(),
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          onClick: e => e.preventDefault(),
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          onClick: e => e.preventDefault(),
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          onClick: e => e.preventDefault(),
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          onClick: e => e.preventDefault(),
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "far fa-star"
                          })
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("form", {
                      className: "review-form",
                      onSubmit: e => e.preventDefault(),
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "col-xl-12",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                            htmlFor: "message",
                            children: "YOUR REVIEW"
                          }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                            name: "message",
                            id: "message",
                            cols: 30,
                            rows: 10,
                            defaultValue: ""
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "col-xl-6",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                            htmlFor: "r-name",
                            children: "Name"
                          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                            type: "text",
                            id: "r-name"
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "col-xl-6",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                            htmlFor: "r-email",
                            children: "Email"
                          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                            type: "email",
                            id: "r-email"
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "col-xl-12",
                          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                            className: "btn theme-btn",
                            children: "Add your Review"
                          })
                        })]
                      })
                    })]
                  })]
                })]
              })
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(slider_RelatedProduct, {
        children: products && (0,filterProduct/* simpleProductFilter */.rK)(product && product.category_name, products).map(product => /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
          product: product
        }, product.product_id))
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "s-shop bottom-navbar",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: {
          pathname: "/checkout",
          query: product && product // the data

        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "buy-now",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Sotib olish"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => setModalShow(true),
        children: "S"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "s-cart",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: `${isCartIncludes(product && product.product_id) ? "active" : ""} details-action-icon`,
          type: "submit",
          onClick: !isCartIncludes(product && product.product_id) ? () => addCart(id, cartqty) : () => external_react_hot_toast_.toast.success("item already exist in cart"),
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/img/icon/carts.png",
            alt: ""
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "s-wishlist",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: `${ true ? "active" : 0} details-action-icon`,
          type: "submit",
          onClick: e => onClickWishlist(e),
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-heart"
          })
        })
      })]
    })]
  });
};

const mapStateToProps = state => ({
  products: state.product.products,
  product: state.product.singleProduct // carts: state.utilis.carts,
  //wishlists: state.utilis.wishlist,

});

/* harmony default export */ const product_Details = ((0,external_react_redux_.connect)(mapStateToProps, {
  addToCart: utilis/* addToCart */.Xq,
  decreaseCart: utilis/* decreaseCart */.Bq,
  getCarts: utilis/* getCarts */.N5,
  getSingleProduct: product/* getSingleProduct */._,
  addWishlist: utilis/* addWishlist */.bj,
  getWishlist: utilis/* getWishlist */.sA,
  getProducts: product/* getProducts */.X
})(Details));

/***/ })

};
;