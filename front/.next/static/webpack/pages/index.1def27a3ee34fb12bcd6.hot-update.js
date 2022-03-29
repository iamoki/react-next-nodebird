webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\nvar initialState = {\n  mainPosts: [{\n    // 다른정보와 합쳐서 주는것들은 대문자로 시작\n    id: 1,\n    User: {\n      id: 1,\n      nickname: '닉네임1'\n    },\n    content: '첫 번째 게시글 #해시태그 #익스프레스',\n    Images: [{\n      src: 'https://dummyimage.com/200x200/000/fff&text=dummy1'\n    }, {\n      src: 'https://dummyimage.com/200x200/000/fff&text=dummy2'\n    }, {\n      src: 'https://dummyimage.com/200x200/000/fff&text=dummy3'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'nero'\n      },\n      content: '우와 댓글1'\n    }, {\n      User: {\n        nickname: 'bero'\n      },\n      content: '우와우와 댓글2'\n    }]\n  }],\n  imagePaths: [],\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n}; // 변수로 액션값을 지정해주면 값을 재활용 할 수 있다.\n\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE'; // export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';\n// export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';\n// export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';\n// export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';\n// export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';\n// export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';\n\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; // export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';\n// export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';\n// export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';\n// export const RETWEET_REQUEST = 'RETWEET_REQUEST';\n// export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';\n// export const RETWEET_FAILURE = 'RETWEET_FAILURE';\n// export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';\n// export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';\n// export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';\n\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\n\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: '제제'\n    },\n    Images: [],\n    Comments: []\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //앞에 추가되는 포스터를 등록해야 게시글위에 올라간다. 뒤로하면 아래로 포스팅이 쌓임\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        addPostLoading: false,\n        addPostDone: true\n      });\n\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: false,\n        addPostError: action.error\n      });\n\n    case ADD_COMMENT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentDone: false,\n        addCommentError: null\n      });\n\n    case ADD_COMMENT_SUCCESS:\n      var postIndex = state.mainPosts.findIndex(function (v) {\n        return v.id === action.data.postId;\n      });\n      var post = state.mainPosts[postIndex];\n      var Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments));\n\n      var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n      mainPosts[postIndex] = _objectSpread(_objectSpread({}, post), {}, {\n        Comments: Comments\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: false,\n        addCommentDone: true\n      });\n\n    case ADD_COMMENT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: false,\n        addCommentError: action.error\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiLCJkdW1teUNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNSO0FBQ0FDLE1BQUUsRUFBRSxDQUZJO0FBR1JDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxjQUFRLEVBQUU7QUFGUixLQUhFO0FBT1JDLFdBQU8sRUFBRSx1QkFQRDtBQVFSQyxVQUFNLEVBQUUsQ0FDSjtBQUNJQyxTQUFHLEVBQUU7QUFEVCxLQURJLEVBSUo7QUFDSUEsU0FBRyxFQUFFO0FBRFQsS0FKSSxFQU9KO0FBQ0lBLFNBQUcsRUFBRTtBQURULEtBUEksQ0FSQTtBQW1CUkMsWUFBUSxFQUFFLENBQ047QUFDSUwsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURWO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBRE0sRUFPTjtBQUNJRixVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BRFY7QUFJSUMsYUFBTyxFQUFFO0FBSmIsS0FQTTtBQW5CRixHQUFELENBRGE7QUFtQ3hCSSxZQUFVLEVBQUUsRUFuQ1k7QUFvQ3hCQyxnQkFBYyxFQUFFLEtBcENRO0FBcUN4QkMsYUFBVyxFQUFFLEtBckNXO0FBc0N4QkMsY0FBWSxFQUFFLElBdENVO0FBdUN4QkMsbUJBQWlCLEVBQUUsS0F2Q0s7QUF3Q3hCQyxnQkFBYyxFQUFFLEtBeENRO0FBeUN4QkMsaUJBQWUsRUFBRTtBQXpDTyxDQUFyQixDLENBNENQOztBQUNPLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QixDLENBRVA7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVPLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QixDLENBRVA7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVPLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQ7QUFBQSxTQUFXO0FBQzlCQyxRQUFJLEVBQUVSLGdCQUR3QjtBQUU5Qk8sUUFBSSxFQUFKQTtBQUY4QixHQUFYO0FBQUEsQ0FBaEI7QUFLQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDRixJQUFEO0FBQUEsU0FBVztBQUNqQ0MsUUFBSSxFQUFFTCxtQkFEMkI7QUFFakNJLFFBQUksRUFBSkE7QUFGaUMsR0FBWDtBQUFBLENBQW5COztBQU1QLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNILElBQUQ7QUFBQSxTQUFXO0FBQ3pCckIsTUFBRSxFQUFFeUIsOENBQU8sQ0FBQ0MsUUFBUixFQURxQjtBQUV6QnZCLFdBQU8sRUFBRWtCLElBRmdCO0FBR3pCcEIsUUFBSSxFQUFFO0FBQ0ZELFFBQUUsRUFBRSxDQURGO0FBRUZFLGNBQVEsRUFBRTtBQUZSLEtBSG1CO0FBT3pCRSxVQUFNLEVBQUUsRUFQaUI7QUFRekJFLFlBQVEsRUFBRTtBQVJlLEdBQVg7QUFBQSxDQUFsQjs7QUFXQSxJQUFNcUIsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCOUIsWUFBeUI7QUFBQSxNQUFYK0IsTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDUCxJQUFmO0FBQ0ksU0FBS1IsZ0JBQUw7QUFDSSw2Q0FDT2MsS0FEUDtBQUVJcEIsc0JBQWMsRUFBRSxJQUZwQjtBQUdJQyxtQkFBVyxFQUFFLEtBSGpCO0FBSUlDLG9CQUFZLEVBQUU7QUFKbEI7O0FBTUosU0FBS0ssZ0JBQUw7QUFDSSw2Q0FDT2EsS0FEUDtBQUVJO0FBQ0E3QixpQkFBUyxHQUFHeUIsU0FBUyxDQUFDSyxNQUFNLENBQUNSLElBQVIsQ0FBWixzR0FBOEJPLEtBQUssQ0FBQzdCLFNBQXBDLEVBSGI7QUFJSVMsc0JBQWMsRUFBRSxLQUpwQjtBQUtJQyxtQkFBVyxFQUFFO0FBTGpCOztBQU9KLFNBQUtPLGdCQUFMO0FBQ0ksNkNBQ09ZLEtBRFA7QUFFSXBCLHNCQUFjLEVBQUUsS0FGcEI7QUFHSUUsb0JBQVksRUFBRW1CLE1BQU0sQ0FBQ0M7QUFIekI7O0FBS0osU0FBS2IsbUJBQUw7QUFDSSw2Q0FDT1csS0FEUDtBQUVJakIseUJBQWlCLEVBQUUsSUFGdkI7QUFHSUMsc0JBQWMsRUFBRSxLQUhwQjtBQUlJQyx1QkFBZSxFQUFFO0FBSnJCOztBQU1KLFNBQUtLLG1CQUFMO0FBQ0ksVUFBTWEsU0FBUyxHQUFHSCxLQUFLLENBQUM3QixTQUFOLENBQWdCaUMsU0FBaEIsQ0FBMEIsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ2pDLEVBQUYsS0FBUzZCLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZYSxNQUE1QjtBQUFBLE9BQTFCLENBQWxCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHUCxLQUFLLENBQUM3QixTQUFOLENBQWdCZ0MsU0FBaEIsQ0FBYjtBQUNBLFVBQU16QixRQUFRLElBQUk4QixZQUFZLENBQUNQLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZbEIsT0FBYixDQUFoQixzR0FBMENnQyxJQUFJLENBQUM3QixRQUEvQyxFQUFkOztBQUNBLFVBQU1QLFNBQVMsR0FBRyw2RkFBSTZCLEtBQUssQ0FBQzdCLFNBQWIsQ0FBZjs7QUFDQUEsZUFBUyxDQUFDZ0MsU0FBRCxDQUFULG1DQUE0QkksSUFBNUI7QUFBa0M3QixnQkFBUSxFQUFSQTtBQUFsQztBQUNBLDZDQUNPc0IsS0FEUDtBQUVJakIseUJBQWlCLEVBQUUsS0FGdkI7QUFHSUMsc0JBQWMsRUFBRTtBQUhwQjs7QUFLSixTQUFLTyxtQkFBTDtBQUNJLDZDQUNPUyxLQURQO0FBRUlqQix5QkFBaUIsRUFBRSxLQUZ2QjtBQUdJRSx1QkFBZSxFQUFFZ0IsTUFBTSxDQUFDQztBQUg1Qjs7QUFLSjtBQUNJLGFBQU9GLEtBQVA7QUEvQ1I7QUFpREgsQ0FsREQ7O0FBb0RlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBtYWluUG9zdHM6IFt7XG4gICAgICAgIC8vIOuLpOuluOygleuztOyZgCDtlanss5DshJwg7KO864qU6rKD65Ok7J2AIOuMgOusuOyekOuhnCDsi5zsnpFcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmlja25hbWU6ICfri4nrhKTsnoQxJ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcbiAgICAgICAgSW1hZ2VzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9kdW1teWltYWdlLmNvbS8yMDB4MjAwLzAwMC9mZmYmdGV4dD1kdW1teTEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL2R1bW15aW1hZ2UuY29tLzIwMHgyMDAvMDAwL2ZmZiZ0ZXh0PWR1bW15MicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZHVtbXlpbWFnZS5jb20vMjAweDIwMC8wMDAvZmZmJnRleHQ9ZHVtbXkzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIENvbW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+yasOyZgCDrjJPquIAxJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2Jlcm8nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+yasOyZgOyasOyZgCDrjJPquIAyJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1dLFxuICAgIGltYWdlUGF0aHM6IFtdLFxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxufVxuXG4vLyDrs4DsiJjroZwg7JWh7IWY6rCS7J2EIOyngOygle2VtOyjvOuptCDqsJLsnYQg7J6s7Zmc7JqpIO2VoCDsiJgg7J6I64ukLlxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xuXG4vLyBleHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xuLy8gZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcbi8vIGV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XG5cbi8vIGV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xuLy8gZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XG4vLyBleHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xuXG4vLyBleHBvcnQgY29uc3QgTE9BRF9DT01NRU5UX1JFUVVFU1QgPSAnTE9BRF9DT01NRU5UX1JFUVVFU1QnO1xuLy8gZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVF9TVUNDRVNTID0gJ0xPQURfQ09NTUVOVF9TVUNDRVNTJztcbi8vIGV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRfRkFJTFVSRSA9ICdMT0FEX0NPTU1FTlRfRkFJTFVSRSc7XG5cbi8vIGV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcbi8vIGV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcbi8vIGV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcblxuLy8gZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XG4vLyBleHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcbi8vIGV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXG4gICAgZGF0YSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gICAgZGF0YSxcbn0pO1xuXG5cbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgY29udGVudDogZGF0YSxcbiAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogJ+ygnOygnCcsXG4gICAgfSxcbiAgICBJbWFnZXM6IFtdLFxuICAgIENvbW1lbnRzOiBbXSxcbn0pO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLy/slZ7sl5Ag7LaU6rCA65CY64qUIO2PrOyKpO2EsOulvCDrk7HroZ3tlbTslbwg6rKM7Iuc6riA7JyE7JeQIOyYrOudvOqwhOuLpC4g65Kk66Gc7ZWY66m0IOyVhOuemOuhnCDtj6zsiqTtjIXsnbQg7IyT7J6EXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XG4gICAgICAgICAgICBjb25zdCBDb21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xuICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XG4gICAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHsgLi4ucG9zdCwgQ29tbWVudHMgfTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})