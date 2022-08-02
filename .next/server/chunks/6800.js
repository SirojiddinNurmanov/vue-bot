"use strict";
exports.id = 6800;
exports.ids = [6800];
exports.modules = {

/***/ 6800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Shop)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/components/Paggination.js
var Paggination = __webpack_require__(5511);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/dist/client/image.js
var client_image = __webpack_require__(9917);
// EXTERNAL MODULE: ./src/redux/action/filter.js
var filter = __webpack_require__(162);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/product/filter/ColorFilter.js





const ColorFilter = ({
  filterByColor,
  setActive_
}) => {
  const colors = ["black", "green", "blue", "white", "red", "gray"];
  const {
    0: active,
    1: setActive
  } = useState([]);

  const activeFun = value => {
    filterByColor(value);
    setActive_();
    clickToActive(active, value, setActive);
  };

  return /*#__PURE__*/_jsxs("div", {
    className: "shop-widget",
    children: [/*#__PURE__*/_jsx("h3", {
      className: "shop-title",
      children: "color"
    }), /*#__PURE__*/_jsx("ul", {
      className: "shop-link",
      children: colors && colors.map(color => /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsxs("a", {
          className: "text-capitalize c-pointer",
          onClick: () => activeFun(color),
          children: [/*#__PURE__*/_jsx("span", {
            className: `${color} ${active.includes(color) ? "" : "box-shadow-none"}`
          }), " ", color]
        })
      }, color))
    })]
  });
};

/* harmony default export */ const filter_ColorFilter = ((/* unused pure expression or super */ null && (ColorFilter)));
;// CONCATENATED MODULE: ./src/components/product/filter/FilterByCheckBox.js



const FilterByCheckBox = ({
  title,
  arr,
  funtion,
  setActive_
}) => {
  return /*#__PURE__*/_jsxs("div", {
    className: "shop-widget",
    children: [/*#__PURE__*/_jsx("h3", {
      className: "shop-title",
      children: title
    }), /*#__PURE__*/_jsx("ul", {
      className: "shop-link",
      children: arr && arr.map((b, i) => /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsxs("a", {
          className: "checkBox",
          children: [/*#__PURE__*/_jsx("input", {
            type: "checkbox",
            id: b,
            name: b,
            defaultValue: "Bike",
            onClick: e => {
              funtion(e.target.name);
              setActive_();
            }
          }), " ", /*#__PURE__*/_jsx("label", {
            htmlFor: b,
            children: b
          })]
        })
      }, i))
    })]
  });
};

/* harmony default export */ const filter_FilterByCheckBox = ((/* unused pure expression or super */ null && (FilterByCheckBox)));
;// CONCATENATED MODULE: ./src/components/product/filter/FilterByTags.js





const FilterByTags = ({
  filterByTags,
  setActive_
}) => {
  const tags = ["furniture", "ladies", "gent", "Clothing", "jacket", "tshart", "lamp", "chair"];
  const {
    0: active,
    1: setActive
  } = useState([]);

  const activeFun = value => {
    filterByTags(value);
    setActive_();
    clickToActive(active, value, setActive);
  };

  return /*#__PURE__*/_jsxs("div", {
    className: "shop-widget",
    children: [/*#__PURE__*/_jsx("h3", {
      className: "shop-title",
      children: "Tags"
    }), /*#__PURE__*/_jsx("ul", {
      className: "shop-tag",
      children: tags && tags.map(tag => /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsxs("a", {
          href: "#",
          className: `text-capitalize ${active.includes(tag) ? "activeTag" : ""}`,
          onClick: e => {
            activeFun(tag);
            e.preventDefault();
          },
          children: [" ", tag]
        })
      }, tag))
    })]
  });
};

/* harmony default export */ const filter_FilterByTags = ((/* unused pure expression or super */ null && (FilterByTags)));
// EXTERNAL MODULE: external "react-input-range"
var external_react_input_range_ = __webpack_require__(4766);
;// CONCATENATED MODULE: ./src/components/product/filter/PriceFilter.js





const PriceFilter = ({
  filterByPrice,
  setActive_
}) => {
  const {
    0: price,
    1: setPrice
  } = useState({
    value: {
      min: 0,
      max: 200
    }
  });
  const prices = [{
    min: "0",
    max: "50"
  }, {
    min: "50",
    max: "100"
  }, {
    min: "100",
    max: "150"
  }, {
    min: "150",
    max: "200"
  }, {
    min: "200"
  }];
  return /*#__PURE__*/_jsx(Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "shop-widget",
      children: [/*#__PURE__*/_jsx("h3", {
        className: "shop-title",
        children: "Filter selection"
      }), /*#__PURE__*/_jsx(InputRange, {
        formatLabel: value => ``,
        maxValue: 300,
        minValue: 0,
        value: price.value,
        onChange: value => {
          setPrice({
            value
          });
          filterByPrice(value);
          setActive_();
        }
      }), /*#__PURE__*/_jsxs("span", {
        className: "mt-20 d-block",
        children: ["$", price.value.min, " - $", price.value.max]
      })]
    })
  });
};

/* harmony default export */ const filter_PriceFilter = ((/* unused pure expression or super */ null && (PriceFilter)));
;// CONCATENATED MODULE: ./src/components/product/filter/Filter.js











const Filter = ({
  filterByName,
  search,
  filterByBrand,
  filterByCatagory,
  filterBySize,
  filterByPrice,
  filterByColor,
  setActive_,
  filterByTags,
  products
}) => {
  const size = ["L", "M", "X", "XL", "XXL"],
        brand = ["ikea", "steelcase", "stickley", "nike", "everlane", "asos", "gucci", "dior", "chanel"],
        category = ["furniture", "ladies", "gent", "Clothing", "jacket", "tshart", "lamp", "chair"];
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-xl-4 col-lg-4",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sidebar-box",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "shop-widget",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "shop-title",
          children: "Search by"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          action: "#",
          className: "shop-search",
          onSubmit: e => e.preventDefault(),
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            value: search,
            onChange: e => filterByName(e.target.value),
            placeholder: "Your keyword...."
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fa fa-search"
            })
          })]
        })]
      })
    })
  });
};

const mapStateToProps = state => ({
  search: state.filter.search,
  products: state.product.products
});

/* harmony default export */ const filter_Filter = ((0,external_react_redux_.connect)(mapStateToProps, {
  filterByName: filter/* filterByName */.TV,
  filterByBrand: filter/* filterByBrand */.$3,
  filterByCatagory: filter/* filterByCatagory */.lj,
  filterBySize: filter/* filterBySize */.eY,
  filterByPrice: filter/* filterByPrice */.ID,
  filterByColor: filter/* filterByColor */.ty,
  filterByTags: filter/* filterByTags */.$N
})(Filter));
// EXTERNAL MODULE: ./src/components/product/Product.js
var Product = __webpack_require__(5374);
// EXTERNAL MODULE: ./src/components/product/ProductListView.js
var ProductListView = __webpack_require__(5383);
// EXTERNAL MODULE: ./src/redux/action/product.js
var product = __webpack_require__(1475);
// EXTERNAL MODULE: ./src/utils/filterProduct.js
var filterProduct = __webpack_require__(3971);
// EXTERNAL MODULE: ./src/layouts/Layout.js + 15 modules
var Layout = __webpack_require__(9851);
;// CONCATENATED MODULE: ./src/layouts/Shop.js














const Shop = ({
  products,
  getProducts,
  col,
  banner,
  defultActive,
  leftSideBar
}) => {
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)(0);
  let sort = 6;
  (0,external_react_.useEffect)(() => {
    getProducts();
  }, []);
  console.log(products && "shop filter", products);
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    footerBg: true,
    container: true,
    textCenter: true,
    sticky: true,
    children: /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "shop-area",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [!leftSideBar && /*#__PURE__*/jsx_runtime_.jsx(filter_Filter, {
              setActive_: () => setActive(0)
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-xl-8 col-lg-8",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "row",
                children: products && products.length > 0 && products.map((product, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: `col-4 ${(active, i, sort)}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
                    wrapperPadding0: true,
                    product: product
                  })
                }, product.id)) // ) : (
                //     <h2 className="text-center d-block w-100 mt-5">
                //         No Product Found
                //     </h2>
                // )

              }), /*#__PURE__*/jsx_runtime_.jsx(Paggination/* default */.Z, {
                active: active,
                setActive: setActive,
                sort: sort,
                length: products && products.length
              })]
            })]
          })
        })
      })
    })
  });
};

const Shop_mapStateToProps = state => ({
  products: (0,filterProduct/* getProductByFilter */.oL)(state.product.products, state.filter)
});

/* harmony default export */ const layouts_Shop = ((0,external_react_redux_.connect)(Shop_mapStateToProps, {
  getProducts: product/* getProducts */.X
})(Shop));

/***/ })

};
;