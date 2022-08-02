"use strict";
exports.id = 5764;
exports.ids = [5764];
exports.modules = {

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ fatchData),
/* harmony export */   "W": () => (/* binding */ request)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const fatchData = async url => {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return url === "http://api.saadia.uz/api/products" ? data === null || data === void 0 ? void 0 : data.data : data;
  } catch (err) {
    return err.message;
  } // const res = await fetch(`${url}`);
  // const data = await res.json();

};
const request = async (url, method, body, headerData, formDataStatus) => {
  try {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: _objectSpread(_objectSpread({}, headerData), {}, {
        "Content-Type": formDataStatus ? "application/x-www-form-urlencoded" : "application/json"
      })
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
}; // export const getsCarts = async (url, headers) => {
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//         method: "POST",
//         headers,
//     };
//     await fetch(url, requestOptions)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             return data;
//         });
// };

/***/ })

};
;