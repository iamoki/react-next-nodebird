webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  mainPosts: [{
    // 다른정보와 합쳐서 주는것들은 대문자로 시작
    id: 1,
    User: {
      id: 1,
      nickname: '닉네임1'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Imaged: [{
      src: 'https://dummyimage.com/200x200/000/fff&text=dummy1'
    }, {
      src: 'https://dummyimage.com/200x200/000/fff&text=dummy2'
    }, {
      src: 'https://dummyimage.com/200x200/000/fff&text=dummy3'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '우와 댓글1'
    }, {
      User: {
        nickname: 'bero'
      },
      content: '우와우와 댓글2'
    }]
  }],
  imagePaths: [],
  postAdded: false
}; // 변수로 액션값을 지정해주면 값을 재활용 할 수 있다.

var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: '제제'
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)) //앞에 추가되는 포스터를 등록해야 게시글위에 올라간다.

      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZWQiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwiSW1hZ2VzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNSO0FBQ0FDLE1BQUUsRUFBRSxDQUZJO0FBR1JDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxjQUFRLEVBQUU7QUFGUixLQUhFO0FBT1JDLFdBQU8sRUFBRSx1QkFQRDtBQVFSQyxVQUFNLEVBQUUsQ0FDSjtBQUNJQyxTQUFHLEVBQUU7QUFEVCxLQURJLEVBSUo7QUFDSUEsU0FBRyxFQUFFO0FBRFQsS0FKSSxFQU9KO0FBQ0lBLFNBQUcsRUFBRTtBQURULEtBUEksQ0FSQTtBQW1CUkMsWUFBUSxFQUFFLENBQ047QUFDSUwsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURWO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBRE0sRUFPTjtBQUNJRixVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BRFY7QUFJSUMsYUFBTyxFQUFFO0FBSmIsS0FQTTtBQW5CRixHQUFELENBRGE7QUFtQ3hCSSxZQUFVLEVBQUUsRUFuQ1k7QUFvQ3hCQyxXQUFTLEVBQUU7QUFwQ2EsQ0FBckIsQyxDQXVDUDs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDTyxJQUFNQyxPQUFPLEdBQUc7QUFDbkJDLE1BQUksRUFBRUY7QUFEYSxDQUFoQjtBQUdQLElBQU1HLFNBQVMsR0FBRztBQUNkWixJQUFFLEVBQUUsQ0FEVTtBQUVkRyxTQUFPLEVBQUUsT0FGSztBQUdkRixNQUFJLEVBQUU7QUFDRkQsTUFBRSxFQUFFLENBREY7QUFFRkUsWUFBUSxFQUFFO0FBRlIsR0FIUTtBQU9kVyxRQUFNLEVBQUUsRUFQTTtBQVFkUCxVQUFRLEVBQUU7QUFSSSxDQUFsQjs7QUFXQSxJQUFNUSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJqQixZQUF5QjtBQUFBLE1BQVhrQixNQUFXOztBQUM5QyxVQUFRQSxNQUFNLENBQUNMLElBQWY7QUFDSSxTQUFLRixRQUFMO0FBQ0ksNkNBQ09NLEtBRFA7QUFFSWhCLGlCQUFTLEdBQUdhLFNBQUgsc0dBQWlCRyxLQUFLLENBQUNoQixTQUF2QixFQUZiLENBRWdEOztBQUZoRDs7QUFLSjtBQUNJLGFBQU9nQixLQUFQO0FBUlI7QUFVSCxDQVhEOztBQWFlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjZkMTRiZWM3MDk0NzBlMTUzMWNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIC8vIOuLpOuluOygleuztOyZgCDtlanss5DshJwg7KO864qU6rKD65Ok7J2AIOuMgOusuOyekOuhnCDsi5zsnpFcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+uLieuEpOyehDEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZWQ6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9kdW1teWltYWdlLmNvbS8yMDB4MjAwLzAwMC9mZmYmdGV4dD1kdW1teTEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL2R1bW15aW1hZ2UuY29tLzIwMHgyMDAvMDAwL2ZmZiZ0ZXh0PWR1bW15MicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZHVtbXlpbWFnZS5jb20vMjAweDIwMC8wMDAvZmZmJnRleHQ9ZHVtbXkzJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg64yT6riAMScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2Jlcm8nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYDsmrDsmYAg64yT6riAMicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgcG9zdEFkZGVkOiBmYWxzZSxcclxufVxyXG5cclxuLy8g67OA7IiY66GcIOyVoeyFmOqwkuydhCDsp4DsoJXtlbTso7zrqbQg6rCS7J2EIOyerO2ZnOyaqSDtlaAg7IiYIOyeiOuLpC5cclxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICAgIHR5cGU6IEFERF9QT1NULFxyXG59XHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgY29udGVudDogJ+uNlOuvuOuNsOydtO2EsCcsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsoJzsoJwnLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sIC8v7JWe7JeQIOy2lOqwgOuQmOuKlCDtj6zsiqTthLDrpbwg65Ox66Gd7ZW07JW8IOqyjOyLnOq4gOychOyXkCDsmKzrnbzqsITri6QuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9