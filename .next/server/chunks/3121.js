"use strict";
exports.id = 3121;
exports.ids = [3121];
exports.modules = {

/***/ 1130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  BACK_END_URL: "http://api.saadia.uz"
});

/***/ }),

/***/ 601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4320);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);


function registerValidation(data) {
  const schema = joi__WEBPACK_IMPORTED_MODULE_0___default().object({
    user_first_name: joi__WEBPACK_IMPORTED_MODULE_0___default().string().min(3).max(30).required(),
    user_last_name: joi__WEBPACK_IMPORTED_MODULE_0___default().string().min(3).max(30),
    user_phone: joi__WEBPACK_IMPORTED_MODULE_0___default().string().pattern(new RegExp("^998[389][012345789][0-9]{7}$")).required(),
    user_password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().min(6).required()
  });

  try {
    if (schema.validate(data).error) {
      return {
        status: false,
        message: schema.validate(data).error.details[0].message
      };
    }

    return {
      status: true
    };
  } catch (err) {
    return err;
  }
}

function loginValidation(data) {
  const schema = joi__WEBPACK_IMPORTED_MODULE_0___default().object({
    user_phone: joi__WEBPACK_IMPORTED_MODULE_0___default().string().pattern(new RegExp("^998[389][012345789][0-9]{7}$")).required(),
    user_password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().min(6).required(),
    user_telegram_id: joi__WEBPACK_IMPORTED_MODULE_0___default().string().min(7)
  });

  try {
    if (schema.validate(data).error) {
      return {
        status: false,
        message: schema.validate(data).error.details[0].message
      };
    }

    return {
      status: true
    };
  } catch (err) {
    return err;
  }
} // eslint-disable-next-line import/no-anonymous-default-export


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  registerValidation,
  loginValidation
});

/***/ })

};
;