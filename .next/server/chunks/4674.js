"use strict";
exports.id = 4674;
exports.ids = [4674];
exports.modules = {

/***/ 5374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6533);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_utilis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4363);
/* harmony import */ var _ProductModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6032);
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










const Product = ({
  product,
  wrapperPadding0,
  addToCart,
  addWishlist,
  compare,
  removeCompare
}) => {
  const wishlist = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.utilis.wishlist);
  const compares = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.utilis.compares);
  const {
    0: quickView,
    1: setQuickView
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: addCompare,
    1: setAddCompare
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: addCart,
    1: setaddCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isActive,
    1: setIsActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: addWishlist_,
    1: setAddWishlist_
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onClickCompare = e => {
    e.preventDefault();
    setAddCompare(true);
    const exitsItem = compares.find(compare => compare.id === product.product_id);

    if (compares.length < 3) {
      if (exitsItem) {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("Remove item from compare.");
        compare(product);
      } else {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success("Add item in Compare.");
        compare(product);
      }
    } else {
      if (exitsItem) {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("Remove item from compare.");
        removeCompare(product);
      } else {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("Compare is full please remove item from compare list.");
      }
    }
  };

  const onClickCart = e => {
    e.preventDefault();
    addToCart(product);
    setaddCart(true);
    react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success("Add item in Cart.");
  };

  const onClickWishlist = e => {
    e.preventDefault();
    addWishlist(product);
    setAddWishlist_(true);
    const wishlist_ = wishlist.find(wishlist => wishlist.id === product.product_id);

    if (wishlist_) {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("Remove item in wishlist.");
    } else {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success("Add item in wishlist.");
    }
  };

  const showCalc = () => {
    setIsActive(true);
  };

  const {
    0: countProduct,
    1: setCountProduct
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);

  const addProduct = () => {
    setCountProduct(+countProduct + 1);
  };

  const removeProduct = () => {
    countProduct > 1 ? setCountProduct(+countProduct - 1) : countProduct;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: `product-wrapper mb-20 ${wrapperPadding0 ? "p-0" : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "product-img",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
        href: `/shop/${product.product_id}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
            src: product.product_images[0],
            alt: "img 1"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
            className: "secondary-img",
            src: product.product_images[1],
            alt: "imge 2"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "sale-tag",
        children: [product.status_new && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          className: "new",
          children: "new"
        }), product.status_sale && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          className: "sale",
          children: "sale"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
        className: isActive ? "s-count" : "s-count collapse",
        children: countProduct
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "product-content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "pro-cat",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
          href: `/shop/${product.product_id}`,
          children: product.brand_name
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h4", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
          href: `/shop/${product.product_id}`,
          children: product.product_name
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "product-meta",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "pro-price",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            children: `${Number(product.product_price)}so'm `
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: isActive ? "s-cart collapse" : "s-cart",
      onClick: showCalc,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "s-cart-btn",
        children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
          src: "/img/icon/carts.png",
          alt: ""
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: "Savatga"
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: isActive ? "s-calc" : "s-calc collapse",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "cart-plus",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          onClick: removeProduct,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
            className: "fa-solid fa-minus"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          onClick: addProduct,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
            className: "fa-solid fa-plus"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
  addToCart: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_7__/* .addToCart */ .Xq,
  addWishlist: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_7__/* .addWishlist */ .bj,
  getWishlist: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_7__/* .getWishlist */ .sA,
  compare: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_7__/* .compare */ .qu,
  removeCompare: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_7__/* .removeCompare */ .JY
})(Product));

/***/ }),

/***/ 6032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6533);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4363);
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9917);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const ProductModal = ({
  show,
  handleClose,
  product,
  carts,
  wishlists,
  addToCart,
  addWishlist,
  decreaseCart
}) => {
  const size = ["L", "M", "X", "XL", "XXL"];
  const cart = product && carts && carts.find(cart => cart.id === product.product_id);
  const wishlist = product && wishlists && wishlists.find(wishlist => wishlist.id === product.product_id);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    show: show,
    onHide: handleClose,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal.Body, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "col-xl-6 col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Tab.Container, {
            defaultActiveKey: "tum-0",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "product-details-img mb-10",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Tab.Content, {
                id: "myTabContentpro",
                children: product && product.product_images.map((img, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Tab.Pane, {
                  eventKey: `tum-${i}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "product-large-img",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                      src: img,
                      alt: "tum"
                    })
                  })
                }, i))
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "shop-thumb-tab ",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav, {
                as: "ul",
                children: product && product.product_images.map((img, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Nav.Link, {
                    as: "a",
                    href: "#",
                    onClick: e => e.preventDefault(),
                    eventKey: `tum-${i}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                      src: img,
                      alt: "Tum"
                    }), " "]
                  })
                }, i))
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "col-xl-6 col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "product-details ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "details-cat mb-10 d-flex align-items-center justify-content-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "#",
                  children: "decor,"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                  href: "#",
                  children: product && product.brand_name
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                className: "fa fa-times modal-icon ",
                onClick: () => handleClose()
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
              className: "pro-details-title mb-15 fs-30",
              children: product && product.product_name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "details-price mb-10 fs-25",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                children: ["$", Number(product && product.product_price).toFixed(2)]
              }), product && product.product_price && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                className: "old-price",
                children: ["$", Number(product.product_price).toFixed(2)]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "product-variant ",
              children: [product && product.product_colors && product.product_colors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "product-color variant-item modal-p-15",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "variant-name",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Colors"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("ul", {
                  className: "shop-link shop-color",
                  children: product.product_colors.map(color => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                        className: color
                      })
                    })
                  }, color))
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "product-desc variant-item modal-p-15",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                  children: product.product_description
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "product-info-list variant-item modal-p-15",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                    className: "text-capitalize",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                      children: "Brands:"
                    }), " ", product && product.brand_name]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                      children: "Product Code:"
                    }), " ", product && product.product_id]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                      children: "Reward Points:"
                    }), " 100"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                      children: "Stock:"
                    }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                      className: "in-stock",
                      children: product && product.product_stock ? "In Stock" : "Out Of Stock"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "product-action-details variant-item modal-p-15",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "product-details-action d-flex",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "product-quantity",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "cart-plus-minus",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                        children: "cart.qty"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                        className: "dec qtybutton",
                        onClick: () => {
                          cart && // cart.qty !== 1 &&
                          decreaseCart(cart);
                        },
                        children: "-"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                        className: "inc qtybutton",
                        onClick: () => {
                          addToCart(product);
                          react_hot_toast__WEBPACK_IMPORTED_MODULE_1___default().success("Successfully add to cart.");
                        },
                        children: "+"
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                    className: `${wishlist ? "active" : ""} details-action-icon`,
                    type: "submit",
                    onClick: () => {
                      addWishlist(product);
                      react_hot_toast__WEBPACK_IMPORTED_MODULE_1___default().success("Successfully add item in wishlist.");
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                      className: "fas fa-heart"
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                    className: "details-action-icon",
                    type: "submit",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                      className: "fas fa-hourglass"
                    })
                  })]
                }), !cart && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "details-cart mt-20",
                  onClick: () => {
                    addToCart(product);
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_1___default().success("Successfully add to cart.");
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                    className: "btn theme-btn",
                    children: "purchase now"
                  })
                })]
              })]
            })]
          })
        })]
      })
    })
  });
};

const mapStateToProps = state => ({
  carts: state.utilis.carts,
  wishlists: state.utilis.wishlist
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, {
  addToCart: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__/* .addToCart */ .Xq,
  addWishlist: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__/* .addWishlist */ .bj,
  decreaseCart: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__/* .decreaseCart */ .Bq
})(ProductModal));

/***/ }),

/***/ 1475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getProducts),
/* harmony export */   "_": () => (/* binding */ getSingleProduct)
/* harmony export */ });
/* harmony import */ var _utils_fatchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5764);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1885);


const getProducts = () => async dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_PRODUCT */ .N4,
    payload: await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A)("http://api.saadia.uz/api/products")
  });
};
const getSingleProduct = id => async dispatch => {
  const data = await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A)(`http://api.saadia.uz/api/products/${id}`);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_SINGLE */ .Ug,
    payload: data === null || data === void 0 ? void 0 : data.data
  });
};

/***/ })

};
;