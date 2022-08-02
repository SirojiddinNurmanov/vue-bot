"use strict";
exports.id = 3971;
exports.ids = [3971];
exports.modules = {

/***/ 3971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oL": () => (/* binding */ getProductByFilter),
/* harmony export */   "rK": () => (/* binding */ simpleProductFilter),
/* harmony export */   "xu": () => (/* binding */ updateCart)
/* harmony export */ });
/* unused harmony export exitsProduct */
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3970);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const getProductByFilter = (data, filters) => {
  let filteredList = data && [...data];

  for (const key in filters) {
    if (key !== "price") {
      if (key === "search") {
        true; // filteredList =
        //     filteredList &&
        //     filteredList.filter((data) =>
        //         data.name
        //             .toString()
        //             .toLowerCase()
        //             .includes(filters[key].toString().toLowerCase())
        //     );
      } else {
        if (key === "colors" || key === "category" || key === "tags") {
          filteredList = filterInArray(filteredList, filters[key], key);
        } else {
          filteredList = filterByKey(filteredList, filters[key], key);
        }
      }
    } else {
      filteredList = filterByPrice(filteredList, filters[key]);
    }
  }

  return filteredList;
};

function filterByKey(filteredList, size, key) {
  let list = [];
  if (!size || size.length === 0) return filteredList;

  for (let index = 0; index < filteredList.length; index++) {
    const product = filteredList[index];
    const isOk = size.indexOf(product[key]);

    if (isOk !== -1) {
      list.push(product);
    }
  }

  return list;
}

function filterByPrice(filteredList, price) {
  return filteredList = filteredList && filteredList.filter(product => Number(product.mainPrice) >= price.min && Number(product.mainPrice) <= price.max);
}

function filterInArray(filteredList, value, key) {
  return filteredList && value.length > 0 ? filteredList.filter(data => data[key] && data[key].find(f => value.includes(f))) : filteredList;
}

const simpleProductFilter = (key, arr) => {
  const sortedArr = [];
  arr.map(el => {
    if (el.category_name == key) {
      sortedArr.push(el);
    }
  });
  return sortedArr;
};
const exitsProduct = (state, item) => {
  let value = state && state.find(product => Number(product.id) === Number(item.id));
  return value;
};
const updateCart = (state, item, type) => {
  const exitsCarts = state.carts && state.carts.find(product => Number(product.id) === Number(item.id));
  let result = {};

  if (state.carts) {
    if (exitsCarts) {
      exitsCarts.qty = type === "+" ? exitsCarts.qty += 1 : exitsCarts.qty -= 1;
      exitsCarts.totalPrice = Number(exitsCarts.qty) * Number(exitsCarts.mainPrice);
      (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__/* .setLocalStorage */ .q)("vue-ecommerce", state.carts);
      result = _objectSpread(_objectSpread({}, state), {}, {
        carts: [...state.carts]
      });
    } else {
      item.qty = 1;
      item.totalPrice = Number(item.mainPrice);
      (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__/* .setLocalStorage */ .q)("vue-ecommerce", [...state.carts, item]);
      result = _objectSpread(_objectSpread({}, state), {}, {
        carts: [...state.carts, item]
      });
    }
  }

  return result;
};

/***/ })

};
;