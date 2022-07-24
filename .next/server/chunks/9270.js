exports.id = 9270;
exports.ids = [9270];
exports.modules = {

/***/ 9851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/redux/action/utilis.js
var utilis = __webpack_require__(4363);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(6533);
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(9164);
// EXTERNAL MODULE: ./node_modules/next/dist/client/image.js
var client_image = __webpack_require__(9917);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/layouts/CompareIcon.js










const CompareIcon = ({
  removeCart,
  getCarts
}) => {
  (0,external_react_.useEffect)(() => {
    getCarts();
  }, []);
  const carts = (0,external_react_redux_.useSelector)(state => state.utilis.carts);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "wishlist-container compare",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: "d-shop-cart",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: "icon",
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          className: `flaticon-shopping-cart`
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "cart-count-shop",
          children: carts && carts.length
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "minicart",
        children: [carts && carts.length > 0 ? carts.map(cart => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "cart-img",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `/shop/${cart.id}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: cart.img1,
                  alt: "Cart"
                })
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "cart-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `/shop/${cart.id}`,
                children: cart.name
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cart-price",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                className: "new",
                children: ["$", cart.mainPrice, " * ", cart.qty]
              }), " =", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                className: "new ml-1 ",
                children: ["$", cart.totalPrice]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "del-icon",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              onClick: e => {
                e.preventDefault();
                removeCart(cart.id);
                external_react_hot_toast_default().error("Remove item from carts");
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "far fa-trash-alt"
              })
            })
          })]
        }, cart.id)) : /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Product Not Found"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "total-price",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "f-left",
              children: "Total:"
            }), carts && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "f-right",
              children: ["$", (0,utils/* totalPrice */.X_)(carts)]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "checkout-link",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/cart",
              children: "Shopping Cart"
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/checkout",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "red-color",
                children: "Checkout"
              })
            })]
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const layouts_CompareIcon = ((0,external_react_redux_.connect)(null, {
  removeCart: utilis/* removeCart */.N6,
  getCarts: utilis/* getCarts */.N5
})(CompareIcon));
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/img/banner/add.jpg
/* harmony default export */ const add = ({"src":"/_next/static/image/public/img/banner/add.e9816f83f83926c529cc15dad13a5851.jpg","height":235,"width":405,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAAEL/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAbEAACAwADAAAAAAAAAAAAAAADEQECEwAEYf/aAAgBAQABPwCwjT2RE3nOrtmvEuf/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIxcf/aAAgBAgEBPwCKvT//xAAZEQACAwEAAAAAAAAAAAAAAAABAgAREmH/2gAIAQMBAT8Adic8Wp//2Q=="});
;// CONCATENATED MODULE: ./public/img/icon/time.png
/* harmony default export */ const time = ({"src":"/_next/static/image/public/img/icon/time.84f4cf33bdf53dca06042df7e47bce57.png","height":40,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAp0lEQVR4nDXPMQrCQBCF4begCFpoWlEEEYKdzYJVGoOYyjN4Bi9j5zG0jLWF2NjbWCkoxMok5p8iCx/z2J1dZl0RezkpktRBgBdKpJJ+rox9RPjginrN0MXJGhLCAWN8MUcqySOzhg1hD7uxxQ4PrBFYw4pwhK3hX5o66Ux9U0MbMiHcOLwjRBM9tDGyFxqEBTJcYLMMUCC3BvGcfbVPWaKFJ3s5e5MK74Mqmkx1+ncAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/img/logo/footer-logo.png
/* harmony default export */ const footer_logo = ({"src":"/_next/static/image/public/img/logo/footer-logo.8825a854842fdc50b39dddb165fee32b.png","height":22,"width":75,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQUlEQVR4nGPkF5RtZWBgeAbExkA8h+E/QzyQ5mJhZPz49v2jQpCCPKCAGBCfAGIvRgZGJk4Ghn/Pf/+7+81M4gkAuTMQy3zAvCgAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/layouts/Footer.js








const Footer = ({
  container,
  footerBg,
  textCenter
}) => {
  return /*#__PURE__*/_jsxs("footer", {
    children: [/*#__PURE__*/_jsx("div", {
      className: `${!container ? "footer-area box-90 pt-100 pb-60" : "footer-area pl-100 pr-100 mt-100"}`,
      children: /*#__PURE__*/_jsx("div", {
        className: footerBg ? "footer-area box-90 pt-100 pb-60" : "",
        "data-background": footerBg ? "/img/bg/footer.jpg" : "",
        style: {
          backgroundImage: footerBg ? 'url("/img/bg/footer.jpg")' : ""
        },
        children: /*#__PURE__*/_jsx("div", {
          className: `${container ? "container" : "container-fluid"}`,
          children: /*#__PURE__*/_jsxs("div", {
            className: "row",
            children: [/*#__PURE__*/_jsx("div", {
              className: "col-xl-3 col-lg-5 col-md-6 ",
              children: /*#__PURE__*/_jsxs("div", {
                className: "footer-widget mb-40",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "footer-logo",
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/",
                    children: /*#__PURE__*/_jsx("a", {
                      children: /*#__PURE__*/_jsx("img", {
                        src: Logo,
                        alt: "Logo"
                      })
                    })
                  })
                }), /*#__PURE__*/_jsx("p", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }), /*#__PURE__*/_jsxs("div", {
                  className: "footer-time d-flex mt-30",
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "time-icon",
                    children: /*#__PURE__*/_jsx("img", {
                      src: Time,
                      alt: ""
                    })
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "time-text",
                    children: [/*#__PURE__*/_jsx("span", {
                      children: "Got Questions ? Call us 24/7!"
                    }), /*#__PURE__*/_jsx("h2", {
                      children: "(0600) 874 548"
                    })]
                  })]
                })]
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block",
              children: /*#__PURE__*/_jsxs("div", {
                className: "footer-widget pl-50 mb-40",
                children: [/*#__PURE__*/_jsx("h3", {
                  children: "Social Media"
                }), /*#__PURE__*/_jsxs("ul", {
                  className: "footer-link",
                  children: [/*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Facebook"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Twitter"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Behance"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsxs("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: [" ", "Dribbble"]
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Linkedin"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Youtube"
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block",
              children: /*#__PURE__*/_jsxs("div", {
                className: "footer-widget pl-30 mb-40",
                children: [/*#__PURE__*/_jsx("h3", {
                  children: "Location"
                }), /*#__PURE__*/_jsxs("ul", {
                  className: "footer-link",
                  children: [/*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "New York"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Tokyo"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Dhaka"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsxs("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: [" ", "Chittagong"]
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "China"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Japan"
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "col-xl-2 col-lg-2 col-md-3",
              children: /*#__PURE__*/_jsxs("div", {
                className: "footer-widget mb-40",
                children: [/*#__PURE__*/_jsx("h3", {
                  children: "About"
                }), /*#__PURE__*/_jsxs("ul", {
                  className: "footer-link",
                  children: [/*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Terms & Conditions"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsxs("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: [" ", "Privacy Policy"]
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Contact Us"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "FAQ"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Wholesale"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Direction"
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "col-xl-3 col-lg-5 col-md-6",
              children: /*#__PURE__*/_jsx("div", {
                className: "footer-widget mb-40",
                children: /*#__PURE__*/_jsx("div", {
                  className: "footer-banner",
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/shop",
                    children: /*#__PURE__*/_jsx("a", {
                      children: /*#__PURE__*/_jsx("img", {
                        src: Banner,
                        alt: "Banner"
                      })
                    })
                  })
                })
              })
            })]
          })
        })
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "copyright-area box-105",
      children: /*#__PURE__*/_jsx("div", {
        className: "container-fluid",
        children: /*#__PURE__*/_jsx("div", {
          className: `${footerBg ? "" : "copyright-border"} pt-30 pb-30`,
          children: /*#__PURE__*/_jsxs("div", {
            className: "row",
            children: [/*#__PURE__*/_jsx("div", {
              className: `${textCenter ? "col-xl-12" : "col-xl-6 col-lg-6 col-md-6"}`,
              children: /*#__PURE__*/_jsx("div", {
                className: `copyright text-center  ${textCenter ? "" : "text-md-left"}`,
                children: /*#__PURE__*/_jsxs("p", {
                  children: ["Copyright \xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/_jsx("a", {
                    href: "#",
                    onClick: e => e.preventDefault(),
                    children: "BasicTheme"
                  }), ". All Rights Reserved"]
                })
              })
            }), !textCenter && /*#__PURE__*/_jsx("div", {
              className: "col-xl-6 col-lg-6 col-md-6",
              children: /*#__PURE__*/_jsxs("div", {
                className: "footer-icon text-center text-md-right ",
                children: [/*#__PURE__*/_jsx("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: /*#__PURE__*/_jsx("i", {
                    className: "fab fa-facebook-f"
                  })
                }), /*#__PURE__*/_jsx("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: /*#__PURE__*/_jsx("i", {
                    className: "fab fa-twitter"
                  })
                }), /*#__PURE__*/_jsx("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: /*#__PURE__*/_jsx("i", {
                    className: "fab fa-behance"
                  })
                }), /*#__PURE__*/_jsx("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: /*#__PURE__*/_jsx("i", {
                    className: "fab fa-linkedin-in"
                  })
                }), /*#__PURE__*/_jsx("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: /*#__PURE__*/_jsx("i", {
                    className: "fab fa-youtube"
                  })
                })]
              })
            })]
          })
        })
      })
    })]
  });
};

/* harmony default export */ const layouts_Footer = ((/* unused pure expression or super */ null && (Footer)));
;// CONCATENATED MODULE: ./src/layouts/header/Catagory.js
// import Image from "next/image";


 // import logoWhite from "/img/logo/logo-white.png";
// import logo from "/img/logo/logo.png";




const Catagory_Catagory = ({
  whiteMenu
}) => {
  const {
    0: catMenu,
    1: setCatMenu
  } = useState(false);
  let category = ["furniture", "ladies", "gent", "Clothing", "jacket", "tshart", "lamp", "chair"];
  return /*#__PURE__*/_jsxs(Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      className: "d-flex",
      children: /*#__PURE__*/_jsxs("div", {
        className: "basic-bar cat-toggle",
        onClick: () => setCatMenu(!catMenu),
        children: [/*#__PURE__*/_jsx("span", {
          className: "bar1"
        }), /*#__PURE__*/_jsx("span", {
          className: "bar2"
        }), /*#__PURE__*/_jsx("span", {
          className: "bar3"
        })]
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "logo mt-2",
      children: /*#__PURE__*/_jsx(Link, {
        href: "/",
        children: /*#__PURE__*/_jsx("a", {
          children: /*#__PURE__*/_jsx("img", {
            src: whiteMenu ? "/img/logo/logo-white.png" : "/img/logo/logo.png",
            alt: "Logo"
          })
        })
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: `category-menu d-block ${catMenu ? "block" : ""}`,
      children: [/*#__PURE__*/_jsx("h4", {
        children: "Category"
      }), /*#__PURE__*/_jsx("ul", {
        children: category && category.map(category => /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx(Link, {
            href: "/shop",
            children: /*#__PURE__*/_jsxs("a", {
              className: "text-capitalize",
              children: [/*#__PURE__*/_jsx("i", {
                className: "flaticon-shopping-cart-1"
              }), " ", category]
            })
          })
        }, category))
      })]
    })]
  });
};

/* harmony default export */ const header_Catagory = ((/* unused pure expression or super */ null && (Catagory_Catagory)));
;// CONCATENATED MODULE: ./src/layouts/header/DasktopHeader1.js




const DasktopHeader = ({
  whiteMenu
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: `main-menu text-center ${whiteMenu ? "menu-white" : ""}`,
    children: /*#__PURE__*/_jsx("nav", {
      id: "mobile-menu",
      children: /*#__PURE__*/_jsxs("ul", {
        children: [/*#__PURE__*/_jsxs("li", {
          children: [/*#__PURE__*/_jsx(Link, {
            href: "/",
            children: /*#__PURE__*/_jsx("a", {
              children: "Home"
            })
          }), /*#__PURE__*/_jsxs("ul", {
            className: "submenu",
            children: [/*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Home Style 1"
                })
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/index-2",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Home Style 2"
                })
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/index-3",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Home Style 3"
                })
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/index-4",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Home Style 4"
                })
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/index-5",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Home Style 5"
                })
              })
            })]
          })]
        }), /*#__PURE__*/_jsxs("li", {
          className: "mega-menu",
          children: [/*#__PURE__*/_jsx(Link, {
            href: "/shop",
            children: "Shop"
          }), /*#__PURE__*/_jsxs("ul", {
            className: "submenu ",
            children: [/*#__PURE__*/_jsxs("li", {
              children: [/*#__PURE__*/_jsx("a", {
                href: "#",
                onClick: e => e.preventDefault(),
                children: "Category View"
              }), /*#__PURE__*/_jsxs("ul", {
                className: "submenu  level-1",
                children: [/*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/shop",
                    children: "Shop 2 Column"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/products",
                    children: "Shop Filter Style"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/products",
                    children: "Shop Full"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/shop/col-3",
                    children: "Shop 3 Column"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/shop/list",
                    children: "List View"
                  })
                })]
              })]
            }), /*#__PURE__*/_jsxs("li", {
              children: [/*#__PURE__*/_jsx("a", {
                href: "#",
                onClick: e => e.preventDefault(),
                children: "Category View"
              }), /*#__PURE__*/_jsxs("ul", {
                className: "submenu",
                children: [/*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/shop/left-sidebar",
                    children: "Sidebar Left"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/shop/sidebar-right",
                    children: "Sidebar Right"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/cart",
                    children: "Shopping Cart"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/checkout",
                    children: "Checkout"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/wishlist",
                    children: "My Wishlist"
                  })
                })]
              })]
            }), /*#__PURE__*/_jsxs("li", {
              children: [/*#__PURE__*/_jsx("a", {
                href: "#",
                onClick: e => e.preventDefault(),
                children: "Products Types"
              }), /*#__PURE__*/_jsxs("ul", {
                className: "submenu",
                children: [/*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/shop/1",
                    children: "Simple Product"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/shop/19",
                    children: "Variable Product"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/shop/upcoming/16",
                    children: "Product Upcoming"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/shop/up-thumb/16",
                    children: "Thumb Top Product"
                  })
                }), /*#__PURE__*/_jsx("li", {
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/compare",
                    children: "Compare"
                  })
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx(Link, {
            href: "/products",
            children: "Products "
          })
        }), /*#__PURE__*/_jsxs("li", {
          children: [/*#__PURE__*/_jsx(Link, {
            href: "/blog",
            children: /*#__PURE__*/_jsx("a", {
              children: "Blog"
            })
          }), /*#__PURE__*/_jsxs("ul", {
            className: "submenu",
            children: [/*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/blog/col-2",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Blog 2 Column"
                })
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/blog/col-mas-2",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Blog 2 Col Masonry"
                })
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/blog/col-3",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Blog 3 Column"
                })
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/blog/col-mas-3",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Blog 3 Col Masonry"
                })
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/blog/1",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Blog Details"
                })
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/blog/10",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Blog Details Video"
                })
              })
            })]
          })]
        }), /*#__PURE__*/_jsxs("li", {
          children: [/*#__PURE__*/_jsx("a", {
            href: "#",
            onClick: e => e.preventDefault(),
            children: "Pages"
          }), /*#__PURE__*/_jsxs("ul", {
            className: "submenu",
            children: [/*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/about",
                children: "About Us"
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/contact",
                children: "Contact Us"
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/login",
                children: "login"
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/register",
                children: "Register"
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/cart",
                children: "Shoping Cart"
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/checkout",
                children: "Checkout"
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/wishlist",
                children: "Wishlist"
              })
            }), " ", /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/compare",
                children: "Compare"
              })
            }), /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx(Link, {
                href: "/order-success",
                children: "Order Success"
              })
            })]
          })]
        }), /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx(Link, {
            href: "/contact",
            children: "Contact"
          })
        })]
      })
    })
  });
};

/* harmony default export */ const header_DasktopHeader1 = ((/* unused pure expression or super */ null && (DasktopHeader)));
;// CONCATENATED MODULE: ./src/layouts/header/MobileHeader.js





const MobileHeader_MobileHeader = () => {
  const {
    0: mainHeader,
    1: setMainHeader
  } = useState(false);
  const {
    0: subMenu,
    1: setSubMenu
  } = useState(false);
  const {
    0: multiMenu,
    1: setMultiMenu
  } = useState(false);
  return /*#__PURE__*/_jsx("div", {
    className: "mobile-menu mean-container",
    children: /*#__PURE__*/_jsxs("div", {
      className: "mean-bar",
      children: [/*#__PURE__*/_jsx("a", {
        href: "#nav",
        className: `meanmenu-reveal ${mainHeader ? "d-flex align-items-center justify-content-center fs-18" : ""}`,
        onClick: e => {
          setMainHeader(!mainHeader);
          e.preventDefault();
        },
        children: mainHeader ? "X" : /*#__PURE__*/_jsxs(Fragment, {
          children: [/*#__PURE__*/_jsx("span", {}), /*#__PURE__*/_jsx("span", {}), /*#__PURE__*/_jsx("span", {})]
        })
      }), /*#__PURE__*/_jsx("nav", {
        className: `mean-nav mobile-header ${mainHeader ? "block" : ""}`,
        children: /*#__PURE__*/_jsxs("ul", {
          children: [/*#__PURE__*/_jsxs("li", {
            children: [/*#__PURE__*/_jsx(Link, {
              href: "/",
              children: /*#__PURE__*/_jsx("a", {
                children: "Home"
              })
            }), /*#__PURE__*/_jsx("a", {
              className: "mean-expand",
              href: "#",
              onClick: e => {
                setSubMenu(subMenu === "home" ? false : "home");
                e.preventDefault();
              },
              children: subMenu === "home" ? "-" : "+"
            }), /*#__PURE__*/_jsxs("ul", {
              className: `submenu ${subMenu === "home" ? "block" : ""}`,
              children: [/*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Home Style 1"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/index-2",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Home Style 2"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/index-3",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Home Style 3"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/index-4",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Home Style 4"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/index-5",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Home Style 5"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/_jsxs("li", {
            className: "mega-menu",
            children: [/*#__PURE__*/_jsx(Link, {
              href: "/shop",
              children: "Shop"
            }), /*#__PURE__*/_jsx("a", {
              className: "mean-expand",
              href: "#",
              onClick: e => {
                setSubMenu(subMenu === "shop" ? false : "shop");
                e.preventDefault();
              },
              children: subMenu === "shop" ? "-" : "+"
            }), /*#__PURE__*/_jsxs("ul", {
              className: `submenu ${subMenu === "shop" ? "block" : ""}`,
              children: [/*#__PURE__*/_jsxs("li", {
                children: [/*#__PURE__*/_jsx("a", {
                  href: "#",
                  children: "Category View"
                }), /*#__PURE__*/_jsxs("ul", {
                  className: `submenu ${multiMenu === "1" ? "block" : ""}`,
                  children: [/*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/shop",
                      children: "Shop 2 Column"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/products",
                      children: "Shop Filter Style"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/products",
                      children: "Shop Full"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/shop/col-3",
                      children: "Shop 3 Column"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/shop/list",
                      children: "List View"
                    })
                  })]
                }), /*#__PURE__*/_jsx("a", {
                  className: "mean-expand",
                  href: "#",
                  onClick: e => {
                    setMultiMenu(multiMenu === "1" ? false : "1");
                    e.preventDefault();
                  },
                  children: multiMenu === "1" ? "-" : "+"
                })]
              }), /*#__PURE__*/_jsxs("li", {
                children: [/*#__PURE__*/_jsx("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: "Category View"
                }), /*#__PURE__*/_jsxs("ul", {
                  className: `submenu ${multiMenu === "2" ? "block" : ""}`,
                  children: [/*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/shop/left-sidebar",
                      children: "Sidebar Left"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/shop/sidebar-right",
                      children: "Sidebar Right"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/cart",
                      children: "Shopping Cart"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/checkout",
                      children: "Checkout"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/wishlist",
                      children: "My Wishlist"
                    })
                  })]
                }), /*#__PURE__*/_jsx("a", {
                  className: "mean-expand",
                  href: "#",
                  onClick: e => {
                    setMultiMenu(multiMenu === "2" ? false : "2");
                    e.preventDefault();
                  },
                  children: multiMenu === "2" ? "-" : "+"
                })]
              }), /*#__PURE__*/_jsxs("li", {
                children: [/*#__PURE__*/_jsx("a", {
                  href: "#",
                  children: "Products Types"
                }), /*#__PURE__*/_jsxs("ul", {
                  className: `submenu ${multiMenu === "3" ? "block" : ""}`,
                  children: [/*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/shop/1",
                      children: "Simple Product"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/shop/19",
                      children: "Variable Product"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/shop/upcoming/16",
                      children: "Product Upcoming"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/shop/up-thumb/16",
                      children: "Thumb Top Product"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/compare",
                      children: "Compare"
                    })
                  })]
                }), /*#__PURE__*/_jsx("a", {
                  className: "mean-expand",
                  href: "#",
                  onClick: e => {
                    setMultiMenu(multiMenu === "3" ? false : "3");
                    e.preventDefault();
                  },
                  children: multiMenu === "3" ? "-" : "+"
                })]
              })]
            })]
          }), /*#__PURE__*/_jsx("li", {
            children: /*#__PURE__*/_jsx(Link, {
              href: "/products",
              children: "Products "
            })
          }), /*#__PURE__*/_jsxs("li", {
            children: [/*#__PURE__*/_jsx(Link, {
              href: "/blog",
              children: /*#__PURE__*/_jsx("a", {
                children: "Blog"
              })
            }), /*#__PURE__*/_jsxs("ul", {
              className: `submenu ${subMenu === "blog" ? "block" : ""}`,
              children: [/*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog/col-2",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Blog 2 Column"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog/col-mas-2",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Blog 2 Col Masonry"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog/col-3",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Blog 3 Column"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog/col-mas-3",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Blog 3 Col Masonry"
                  })
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog/1",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Blog Details"
                  })
                })
              }), " ", /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog/10",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Blog Details Video"
                  })
                })
              })]
            }), /*#__PURE__*/_jsx("a", {
              className: "mean-expand",
              href: "#",
              onClick: () => setSubMenu(subMenu === "blog" ? false : "blog"),
              children: subMenu === "blog" ? "-" : "+"
            })]
          }), /*#__PURE__*/_jsxs("li", {
            children: [/*#__PURE__*/_jsx("a", {
              href: "#",
              children: "Pages"
            }), /*#__PURE__*/_jsxs("ul", {
              className: `submenu ${subMenu === "page" ? "block" : ""}`,
              children: [/*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/about",
                  children: "About Us"
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/contact",
                  children: "Contact Us"
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/login",
                  children: "login"
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/register",
                  children: "Register"
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/cart",
                  children: "Shoping Cart"
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/checkout",
                  children: "Checkout"
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/wishlist",
                  children: "Wishlist"
                })
              }), " ", /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/compare",
                  children: "Compare"
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/order-success",
                  children: "Order Success"
                })
              })]
            }), /*#__PURE__*/_jsx("a", {
              className: "mean-expand",
              href: "#",
              onClick: () => setSubMenu(subMenu === "page" ? false : "page"),
              children: subMenu === "page" ? "-" : "+"
            })]
          }), /*#__PURE__*/_jsx("li", {
            className: "mean-last",
            children: /*#__PURE__*/_jsx(Link, {
              href: "/contact",
              children: "Contact"
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const header_MobileHeader = ((/* unused pure expression or super */ null && (MobileHeader_MobileHeader)));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./src/redux/action/filter.js
var filter = __webpack_require__(162);
;// CONCATENATED MODULE: ./src/layouts/header/SearchTrigger.js







const SearchTrigger_SearchTrigger = ({
  filterByName
}) => {
  const {
    0: isSearch,
    1: setIsSearch
  } = (0,external_react_.useState)(false);
  const {
    0: text,
    1: setText
  } = (0,external_react_.useState)(false);

  if (text) {
    router_default().push({
      pathname: "/shop" // query: { sortBy: 'price' }

    }, undefined, {
      shallow: true
    });
  }

  const onSubmit = e => {
    e.preventDefault();
    setText(true);
    setIsSearch(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      className: "search-btn",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "search-btn nav-search search-trigger",
        href: "#",
        onClick: e => {
          setIsSearch(true);
          e.preventDefault();
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fas fa-search"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `search-wrap ${isSearch ? "d-block" : ""}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "search-inner",
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fas fa-times search-close",
          id: "search-close",
          onClick: () => setIsSearch(false)
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "search-cell",
          children: /*#__PURE__*/jsx_runtime_.jsx("form", {
            method: "get",
            onSubmit: e => onSubmit(e),
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "search-field-holder",
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "search",
                className: "main-search-input",
                placeholder: "Search Entire Store...",
                onChange: e => filterByName(e.target.value)
              })
            })
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const header_SearchTrigger = ((0,external_react_redux_.connect)(null, {
  filterByName: filter/* filterByName */.TV
})(SearchTrigger_SearchTrigger));
;// CONCATENATED MODULE: ./src/layouts/header/ShopCart.js









const ShopCart_ShopCart = ({
  removeCart,
  getCarts
}) => {
  (0,external_react_.useEffect)(() => {
    getCarts();
  }, []);
  const carts = (0,external_react_redux_.useSelector)(state => state.utilis.carts);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: "d-shop-cart",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "flaticon-shopping-cart"
      }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "cart-count",
        children: carts && carts.length
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "minicart",
      children: [carts && carts.length > 0 ? carts.map(cart => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "cart-img",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/shop/${cart.id}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: cart.img1,
                alt: "Cart"
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "cart-content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `/shop/${cart.id}`,
              children: cart.name
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "cart-price",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "new",
              children: ["$", cart.mainPrice, " * ", cart.qty]
            }), " =", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "new ml-1 ",
              children: ["$", cart.totalPrice]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "del-icon",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            onClick: e => {
              e.preventDefault();
              removeCart(cart.id);
              external_react_hot_toast_default().error("Remove item from carts");
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "far fa-trash-alt"
            })
          })
        })]
      }, cart.id)) : /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Product Not Found"
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "total-price",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "f-left",
            children: "Total:"
          }), carts && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "f-right",
            children: ["$", (0,utils/* totalPrice */.X_)(carts)]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "checkout-link",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/cart",
            children: "Shopping Cart"
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/checkout",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "red-color",
              children: "Checkout"
            })
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const header_ShopCart = ((0,external_react_redux_.connect)(null, {
  removeCart: utilis/* removeCart */.N6,
  getCarts: utilis/* getCarts */.N5
})(ShopCart_ShopCart));
;// CONCATENATED MODULE: ./src/layouts/Header.js











const Header = ({
  sticky,
  container,
  transparent,
  whiteMenu,
  extraTransparentClass
}) => {
  useEffect(() => {
    sticky && window.addEventListener("scroll", scroll);
  }, []);
  return /*#__PURE__*/_jsx("header", {
    className: `${transparent ? `transparent-header ${extraTransparentClass ? extraTransparentClass : ""}` : ""}`,
    children: /*#__PURE__*/_jsx("div", {
      className: "header-area box-90",
      id: `${sticky ? "header-sticky" : ""}`,
      children: /*#__PURE__*/_jsx("div", {
        className: `${container ? "container" : "container-fluid"}`,
        children: /*#__PURE__*/_jsxs("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/_jsx("div", {
            className: "col-xl-2 col-lg-6 col-md-6 col-7 col-sm-3 d-flex align-items-center",
            children: /*#__PURE__*/_jsx(Catagory, {
              whiteMenu: whiteMenu
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-xl-7 col-lg-6 col-md-8 col-8 d-none d-xl-block",
            children: /*#__PURE__*/_jsx(DasktopHeader1, {
              whiteMenu: whiteMenu
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-xl-3 col-lg-6 col-md-6 col-5 col-sm-9 pl-0",
            children: /*#__PURE__*/_jsx("div", {
              className: "header-right f-right",
              children: /*#__PURE__*/_jsxs("ul", {
                children: [/*#__PURE__*/_jsx(SearchTrigger, {}), /*#__PURE__*/_jsx("li", {
                  className: "login-btn",
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/login",
                    children: /*#__PURE__*/_jsx("a", {
                      children: /*#__PURE__*/_jsx("i", {
                        className: "far fa-user"
                      })
                    })
                  })
                }), /*#__PURE__*/_jsx(ShopCart, {})]
              })
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-12 d-xl-none",
            children: /*#__PURE__*/_jsx(MobileHeader, {})
          })]
        })
      })
    })
  });
};

/* harmony default export */ const layouts_Header = ((/* unused pure expression or super */ null && (Header)));
;// CONCATENATED MODULE: ./public/img/logo/logo-white.png
/* harmony default export */ const logo_white = ({"src":"/_next/static/image/public/img/logo/logo-white.1c374e0b66279e8975e74290a6b05a46.png","height":22,"width":76,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPElEQVR4nGP89+9fKwMDwwsg1gXiJYyMjP5AWuD///8/gewCkIICoIAgEJ8FYh8g/gDEHEDJx//T4x8BAJMEEx//Wrx6AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/layouts/header/DasktopHeader2.js







const DasktopHeader3 = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = useState(false);
  return /*#__PURE__*/_jsxs(Fragment, {
    children: [/*#__PURE__*/_jsxs("div", {
      className: "basic-bar info-bar",
      onClick: () => setIsOpen(true),
      children: [/*#__PURE__*/_jsx("span", {
        className: "bar1"
      }), /*#__PURE__*/_jsx("span", {
        className: "bar2"
      }), /*#__PURE__*/_jsx("span", {
        className: "bar3"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: `extra-info ${isOpen ? "info-open" : ""}`,
      children: [/*#__PURE__*/_jsx("div", {
        className: "close-icon",
        onClick: () => setIsOpen(false),
        children: /*#__PURE__*/_jsx("button", {
          children: /*#__PURE__*/_jsx("i", {
            className: "far fa-window-close"
          })
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "logo-side",
        children: /*#__PURE__*/_jsx(Link, {
          href: "/",
          children: /*#__PURE__*/_jsx("img", {
            src: Logo,
            alt: ""
          })
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "side-info mb-30",
        children: /*#__PURE__*/_jsx("div", {
          className: "main-menu side-menu",
          children: /*#__PURE__*/_jsx("nav", {
            id: "mobile-menu-3",
            style: {
              display: "block"
            },
            children: /*#__PURE__*/_jsxs("ul", {
              children: [/*#__PURE__*/_jsxs("li", {
                children: [/*#__PURE__*/_jsx(Link, {
                  href: "/",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Home"
                  })
                }), /*#__PURE__*/_jsxs("ul", {
                  className: "submenu",
                  children: [/*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/",
                      children: /*#__PURE__*/_jsx("a", {
                        children: "Home Style 1"
                      })
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/index-2",
                      children: /*#__PURE__*/_jsx("a", {
                        children: "Home Style 2"
                      })
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/index-3",
                      children: /*#__PURE__*/_jsx("a", {
                        children: "Home Style 3"
                      })
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/index-4",
                      children: /*#__PURE__*/_jsx("a", {
                        children: "Home Style 4"
                      })
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/index-5",
                      children: /*#__PURE__*/_jsx("a", {
                        children: "Home Style 5"
                      })
                    })
                  })]
                })]
              }), /*#__PURE__*/_jsxs("li", {
                className: "mega-menu",
                children: [/*#__PURE__*/_jsx(Link, {
                  href: "/shop",
                  children: "Shop"
                }), /*#__PURE__*/_jsxs("ul", {
                  className: "submenu ",
                  children: [/*#__PURE__*/_jsxs("li", {
                    children: [/*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Category View"
                    }), /*#__PURE__*/_jsxs("ul", {
                      className: "submenu  level-1",
                      children: [/*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/shop",
                          children: "Shop 2 Column"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/products",
                          children: "Shop Filter Style"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/products",
                          children: "Shop Full"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/shop/col-3",
                          children: "Shop 3 Column"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/shop/list",
                          children: "List View"
                        })
                      })]
                    })]
                  }), /*#__PURE__*/_jsxs("li", {
                    children: [/*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Category View"
                    }), /*#__PURE__*/_jsxs("ul", {
                      className: "submenu",
                      children: [/*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/shop/left-sidebar",
                          children: "Sidebar Left"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/shop/sidebar-right",
                          children: "Sidebar Right"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/cart",
                          children: "Shopping Cart"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/checkout",
                          children: "Checkout"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/wishlist",
                          children: "My Wishlist"
                        })
                      })]
                    })]
                  }), /*#__PURE__*/_jsxs("li", {
                    children: [/*#__PURE__*/_jsx("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Products Types"
                    }), /*#__PURE__*/_jsxs("ul", {
                      className: "submenu",
                      children: [/*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/shop/1",
                          children: "Simple Product"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/shop/19",
                          children: "Variable Product"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/shop/upcoming/16",
                          children: "Product Upcoming"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/shop/up-thumb/16",
                          children: "Thumb Top Product"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx(Link, {
                          href: "/compare",
                          children: "Compare"
                        })
                      })]
                    })]
                  })]
                })]
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/products",
                  children: "Products "
                })
              }), /*#__PURE__*/_jsxs("li", {
                children: [/*#__PURE__*/_jsx(Link, {
                  href: "/blog",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Blog"
                  })
                }), /*#__PURE__*/_jsxs("ul", {
                  className: "submenu",
                  children: [/*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/blog/col-2",
                      children: /*#__PURE__*/_jsx("a", {
                        children: "Blog 2 Column"
                      })
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/blog/col-mas-2",
                      children: /*#__PURE__*/_jsx("a", {
                        children: "Blog 2 Col Masonry"
                      })
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/blog/col-3",
                      children: /*#__PURE__*/_jsx("a", {
                        children: "Blog 3 Column"
                      })
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/blog/col-mas-3",
                      children: /*#__PURE__*/_jsx("a", {
                        children: "Blog 3 Col Masonry"
                      })
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/blog/1",
                      children: /*#__PURE__*/_jsx("a", {
                        children: "Blog Details"
                      })
                    })
                  }), " ", /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/blog/10",
                      children: /*#__PURE__*/_jsx("a", {
                        children: "Blog Details Video"
                      })
                    })
                  })]
                })]
              }), /*#__PURE__*/_jsxs("li", {
                children: [/*#__PURE__*/_jsx("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: "Pages"
                }), /*#__PURE__*/_jsxs("ul", {
                  className: "submenu",
                  children: [/*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/about",
                      children: "About Us"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/contact",
                      children: "Contact Us"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/login",
                      children: "login"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/register",
                      children: "Register"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/cart",
                      children: "Shoping Cart"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/checkout",
                      children: "Checkout"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/wishlist",
                      children: "Wishlist"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/compare",
                      children: "Compare"
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsx(Link, {
                      href: "/order-success",
                      children: "Order Success"
                    })
                  })]
                })]
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/contact",
                  children: "Contact"
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "side-info-bottom",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "side-cta",
          children: [/*#__PURE__*/_jsx("p", {
            children: "info@example.com"
          }), /*#__PURE__*/_jsx("h4", {
            children: "+(090) 8765 86543 85"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "social-icon-right mt-20",
          children: [/*#__PURE__*/_jsx("a", {
            href: "#",
            onClick: e => e.preventDefault(),
            children: /*#__PURE__*/_jsx("i", {
              className: "fab fa-facebook-f"
            })
          }), /*#__PURE__*/_jsx("a", {
            href: "#",
            onClick: e => e.preventDefault(),
            children: /*#__PURE__*/_jsx("i", {
              className: "fab fa-twitter"
            })
          }), /*#__PURE__*/_jsx("a", {
            href: "#",
            onClick: e => e.preventDefault(),
            children: /*#__PURE__*/_jsx("i", {
              className: "fab fa-google-plus-g"
            })
          }), /*#__PURE__*/_jsx("a", {
            href: "#",
            onClick: e => e.preventDefault(),
            children: /*#__PURE__*/_jsx("i", {
              className: "fab fa-instagram"
            })
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const header_DasktopHeader2 = ((/* unused pure expression or super */ null && (DasktopHeader3)));
;// CONCATENATED MODULE: ./src/layouts/Header2.js










const Header2 = () => {
  return /*#__PURE__*/_jsxs("header", {
    children: [/*#__PURE__*/_jsx("div", {
      className: "header-area header-3 pt-35 pb-35",
      children: /*#__PURE__*/_jsx("div", {
        className: "container",
        children: /*#__PURE__*/_jsxs("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/_jsx("div", {
            className: "col-xl-4 col-lg-3 col-md-3 col-7 d-none d-lg-block d-flex align-items-center d-xs-disable",
            children: /*#__PURE__*/_jsx(DasktopHeader2, {})
          }), /*#__PURE__*/_jsx("div", {
            className: "col-xl-4 col-lg-5 col-md-4 col-5",
            children: /*#__PURE__*/_jsx("div", {
              className: "logo text-left text-md-center",
              children: /*#__PURE__*/_jsx(Link, {
                href: "/shop",
                children: /*#__PURE__*/_jsx("a", {
                  children: /*#__PURE__*/_jsx("img", {
                    src: "img/logo/logo.png",
                    alt: "img"
                  })
                })
              })
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-xl-4 col-lg-4 col-md-8 col-7 pl-0",
            children: /*#__PURE__*/_jsx("div", {
              className: "header-right header-right-3 f-right",
              children: /*#__PURE__*/_jsxs("ul", {
                children: [/*#__PURE__*/_jsx(SearchTrigger, {}), /*#__PURE__*/_jsx("li", {
                  className: "login-btn",
                  children: /*#__PURE__*/_jsx(Link, {
                    href: "/login",
                    children: /*#__PURE__*/_jsx("a", {
                      children: /*#__PURE__*/_jsx("i", {
                        className: "far fa-user"
                      })
                    })
                  })
                }), /*#__PURE__*/_jsx(ShopCart, {})]
              })
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-12 d-lg-none",
            children: /*#__PURE__*/_jsx(MobileHeader, {})
          })]
        })
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "header-sep",
      "data-background": "img/bg/header-sep.png",
      style: {
        backgroundImage: 'url("img/bg/header-sep.png")'
      }
    })]
  });
};

/* harmony default export */ const layouts_Header2 = ((/* unused pure expression or super */ null && (Header2)));
// EXTERNAL MODULE: external "react-draggable"
var external_react_draggable_ = __webpack_require__(1783);
;// CONCATENATED MODULE: ./src/layouts/WishListIcon.js








const WishListIcon = ({
  getWishlist
}) => {
  (0,external_react_.useEffect)(() => {
    getWishlist();
  }, []);
  const wishlist = (0,external_react_redux_.useSelector)(state => state.utilis.wishlist);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "wishlist-container",
    id: "wishlist",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/wishlist",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: "icon",
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          className: `fas fa-heart  ${wishlist.length === 0 ? "mt-1 mr-1" : "mt-2 mr-2"}`
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "count",
          children: wishlist && wishlist.length <= 9 && wishlist.length !== 0 ? `0${wishlist.length}` : wishlist.length
        })]
      })
    })]
  });
};

/* harmony default export */ const layouts_WishListIcon = ((0,external_react_redux_.connect)(null, {
  getWishlist: utilis/* getWishlist */.sA
})(WishListIcon));
;// CONCATENATED MODULE: ./src/layouts/Layout.js














const Layout = ({
  children,
  search,
  sticky,
  container,
  footerBg,
  transparent,
  extraTransparentClass,
  header2,
  textCenter,
  whiteMenu,
  getWishlist,
  getCompare,
  filterByName
}) => {
  (0,external_react_.useEffect)(() => {
    getWishlist();
    getCompare();
  }, []);
  const {
    0: isSearch,
    1: setIsSearch
  } = (0,external_react_.useState)(false); // const navigate = useNavigate();

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(layouts_WishListIcon, {}), /*#__PURE__*/jsx_runtime_.jsx(layouts_CompareIcon, {}), children, /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: isSearch ? "fixed-search active" : "fixed-search",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "shop-widget fixed-search-input",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          action: "#",
          className: "shop-search",
          onSubmit: e => e.preventDefault(),
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            value: search,
            onChange: e => filterByName(e.target.value),
            placeholder: "Your keyword...."
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/img/icon/cancel.png",
            alt: "img",
            onClick: () => setIsSearch(false)
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "fixed-search-btn",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/shop",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/img/icon/search.png",
          alt: "img"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "fixed-back",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "../img/icon/back.png",
          alt: "alt"
        })
      })
    })]
  });
};

const mapStateToProps = state => ({
  search: state.filter.search
});

/* harmony default export */ const layouts_Layout = ((0,external_react_redux_.connect)(null, {
  getWishlist: utilis/* getWishlist */.sA,
  getCompare: utilis/* getCompare */._$,
  filterByName: filter/* filterByName */.TV
})(Layout));

/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TV": () => (/* binding */ filterByName),
/* harmony export */   "$3": () => (/* binding */ filterByBrand),
/* harmony export */   "lj": () => (/* binding */ filterByCatagory),
/* harmony export */   "eY": () => (/* binding */ filterBySize),
/* harmony export */   "ID": () => (/* binding */ filterByPrice),
/* harmony export */   "ty": () => (/* binding */ filterByColor),
/* harmony export */   "$N": () => (/* binding */ filterByTags)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1885);

const filterByName = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_NAME */ .S4,
    payload: value
  });
};
const filterByBrand = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_BRAND */ .Aw,
    payload: value
  });
};
const filterByCatagory = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_CATAGORY */ .T1,
    payload: value
  });
};
const filterBySize = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_SIZE */ .Ao,
    payload: value
  });
};
const filterByPrice = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_PRICE */ .L8,
    payload: value
  });
};
const filterByColor = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_COLOR */ .KE,
    payload: value
  });
};
const filterByTags = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .FILTER_TAG */ .xu,
    payload: value
  });
};

/***/ }),

/***/ 4363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N5": () => (/* binding */ getCarts),
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "N6": () => (/* binding */ removeCart),
/* harmony export */   "Bq": () => (/* binding */ decreaseCart),
/* harmony export */   "bj": () => (/* binding */ addWishlist),
/* harmony export */   "sA": () => (/* binding */ getWishlist),
/* harmony export */   "_$": () => (/* binding */ getCompare),
/* harmony export */   "qu": () => (/* binding */ compare),
/* harmony export */   "JY": () => (/* binding */ removeCompare),
/* harmony export */   "$P": () => (/* binding */ setCheckoutData)
/* harmony export */ });
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3970);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1885);


const getCarts = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_CARTS */ .Rp,
    payload: (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .getLocalStorage */ .$)("vue-ecommerce")
  });
};
const addToCart = product => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TO_CART */ .G2,
    payload: product
  });
};
const removeCart = id => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_CART */ .AB,
    payload: id
  });
};
const decreaseCart = product => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .DECREASE_CART */ .cE,
    payload: product
  });
};
const addWishlist = product => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .ADD_WISHLIST */ .Qs,
    payload: product
  });
};
const getWishlist = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_WISHLIST */ .n_,
    payload: (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .getLocalStorage */ .$)("vue-wishlist")
  });
};
const getCompare = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_COMPARE */ .Xo,
    payload: (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .getLocalStorage */ .$)("vue-compares")
  });
};
const compare = product => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .COMPARE */ .oJ,
    payload: product
  });
};
const removeCompare = product => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_COMPARE */ .qG,
    payload: product
  });
};
const setCheckoutData = data => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .CHECKOUT_USER */ .WX,
    payload: data
  });
};

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;