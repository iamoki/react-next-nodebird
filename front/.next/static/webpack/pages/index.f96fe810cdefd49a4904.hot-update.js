webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostForm */ \"./components/PostForm.js\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/oki-an/Desktop/project/react-next-nodebird/front/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      mainPosts = _useSelector2.mainPosts,\n      hasMorePost = _useSelector2.hasMorePost;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_POSTS_REQUEST\"]\n    });\n  }, []); // 스크롤 내려서 끝까지 갔을 때 로딩하게 하기\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    function onScroll() {\n      //현재스크롤위치, 화면에 보이는 영역높이, 스크롤총길이\n      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);\n\n      if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight - 300) {\n        if (hasMorePost) {\n          dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_POSTS_REQUEST\"]\n          });\n        }\n      }\n    } // useEffect에서 window.addEventListener선언할 땐 꼭 리턴해서 리무브 해주기 안그러면 메모리에 쌓임\n\n\n    window.addEventListener('scroll', onScroll);\n    return function () {\n      window.removeEventListener('scroll', onScroll);\n    };\n  }, [hasMorePost]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 20\n    }, _this), mainPosts.map(function (post) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        post: post\n      }, post.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 38\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"t5W3f13kdHJN+C4GYAtNP8Viywk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLHFCQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUExQjtBQUFBLE1BQVFDLEVBQVIsZ0JBQVFBLEVBQVI7O0FBQ0Esc0JBQW1DSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEsR0FBRCxDQUE5QztBQUFBLE1BQVFDLFNBQVIsaUJBQVFBLFNBQVI7QUFBQSxNQUFtQkMsV0FBbkIsaUJBQW1CQSxXQUFuQjs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pULFlBQVEsQ0FBQztBQUNMVSxVQUFJLEVBQUVDLGlFQUFrQkE7QUFEbkIsS0FBRCxDQUFSO0FBR0gsR0FKUSxFQUlOLEVBSk0sQ0FBVCxDQUxlLENBV2Y7O0FBQ0FGLHlEQUFTLENBQUMsWUFBTTtBQUNaLGFBQVNHLFFBQVQsR0FBb0I7QUFDaEI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsT0FBbkIsRUFBNEJDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBckQsRUFBbUVGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBNUY7O0FBQ0EsVUFBR0wsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTFDLEtBQTJERixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQXpCLEdBQXdDLEdBQXRHLEVBQTJHO0FBQ3ZHLFlBQUdaLFdBQUgsRUFBZ0I7QUFDWlIsa0JBQVEsQ0FBQztBQUNMVSxnQkFBSSxFQUFFQyxpRUFBa0JBO0FBRG5CLFdBQUQsQ0FBUjtBQUdIO0FBQ0o7QUFDSixLQVhXLENBWVo7OztBQUNBSSxVQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDVCxRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNURyxZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDVixRQUFyQztBQUNILEtBRkQ7QUFHSCxHQWpCUSxFQWlCTixDQUFDSixXQUFELENBakJNLENBQVQ7QUFvQkEsc0JBQ0kscUVBQUMsNkRBQUQ7QUFBQSxlQUNLSCxFQUFFLGlCQUFJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEWCxFQUVLRSxTQUFTLENBQUNnQixHQUFWLENBQWMsVUFBQ2pCLElBQUQ7QUFBQSwwQkFBVSxxRUFBQyw0REFBRDtBQUF3QixZQUFJLEVBQUVBO0FBQTlCLFNBQWVBLElBQUksQ0FBQ2tCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVjtBQUFBLEtBQWQsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBdENEOztHQUFNekIsSTtVQUNlRSx1RCxFQUNGQyx1RCxFQUNvQkEsdUQ7OztLQUhqQ0gsSTtBQXdDU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gICAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyDsiqTtgazroaQg64K066Ck7IScIOuBneq5jOyngCDqsJTsnYQg65WMIOuhnOuUqe2VmOqyjCDtlZjquLBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgICAgICAgIC8v7ZiE7J6s7Iqk7YGs66Gk7JyE7LmYLCDtmZTrqbTsl5Ag67O07J2064qUIOyYgeyXreuGkuydtCwg7Iqk7YGs66Gk7LSd6ri47J20XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcbiAgICAgICAgICAgICAgICBpZihoYXNNb3JlUG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1c2VFZmZlY3Tsl5DshJwgd2luZG93LmFkZEV2ZW50TGlzdGVuZXLshKDslrjtlaAg65WQIOq8rSDrpqzthLTtlbTshJwg66as66y067iMIO2VtOyjvOq4sCDslYjqt7jrn6zrqbQg66mU66qo66as7JeQIOyMk+yehFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaGFzTW9yZVBvc3RdKTtcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxuICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cbiAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})