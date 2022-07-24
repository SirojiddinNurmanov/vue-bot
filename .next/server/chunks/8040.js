"use strict";
exports.id = 8040;
exports.ids = [8040];
exports.modules = {

/***/ 8040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x3": () => (/* binding */ getBlog),
/* harmony export */   "uJ": () => (/* binding */ getMasBlog),
/* harmony export */   "VK": () => (/* binding */ getSingleBlog)
/* harmony export */ });
/* unused harmony exports nextPost, prevPost */
/* harmony import */ var _utils_fatchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5764);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1885);


const getBlog = () => async dispatch => {
  const data = await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_0__/* .fatchData */ .A)("/static/blog.json");
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_BLOG */ .C4,
    payload: data.blogs
  });
};
const getMasBlog = () => async dispatch => {
  const data = await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_0__/* .fatchData */ .A)("/static/blog.json");
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_MAS_BLOG */ .OC,
    payload: data.mas
  });
};
const getSingleBlog = id => async dispatch => {
  const data = await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_0__/* .fatchData */ .A)("/static/blog.json");
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__/* .GET_SINGLE_BLOG */ .n6,
    payload: {
      single: data.blogs.find(d => Number(d.id) === Number(id)),
      blogs: data.blogs
    }
  });
};
const nextPost = id => async dispatch => {
  const data = await fatchData("/static/blog.json");
  dispatch({
    type: NEXT_POST,
    payload: data.blogs.find(d => Number(d.id) === Number(id))
  });
};
const prevPost = id => async dispatch => {
  const data = await fatchData("/static/blog.json");
  dispatch({
    type: PREV_POST,
    payload: data.blogs.find(d => Number(d.id) === Number(id))
  });
};

/***/ })

};
;