webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/oki-an/Desktop/project/react-next-nodebird/front/components/CommentForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CommentForm = function CommentForm(_ref) {\n  _s();\n\n  var post = _ref.post;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    var _state$user$me;\n\n    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;\n  });\n\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(''),\n      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 3),\n      commentText = _useInput2[0],\n      onChangeCommentText = _useInput2[1],\n      setCommentText = _useInput2[2];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      addCommentDone = _useSelector.addCommentDone,\n      addCommentLoaging = _useSelector.addCommentLoaging;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (addCommentDone) {\n      setCommentText('');\n    }\n  }, [addCommentDone]);\n  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__[\"ADD_COMMENT_REQUEST\"],\n      data: {\n        content: commentText,\n        postId: post.id,\n        userId: id\n      }\n    });\n  }, [commentText, id]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n    onFinish: onSubmitComment,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Form\"].Item, {\n      style: {\n        position: 'relative',\n        margin: 0\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Input\"].TextArea, {\n        value: commentText,\n        onChange: onChangeCommentText,\n        rows: 4\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        style: {\n          position: 'absolute',\n          right: 0,\n          bottom: -40,\n          zIndex: 1\n        },\n        type: \"primary\",\n        htmlType: \"submit\",\n        loading: addCommentLoaging,\n        children: \"\\uC090\\uC57D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(CommentForm, \"cs+79Yd1qIvhrKMGJYNz3OSiXik=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"]];\n});\n\n_c = CommentForm;\nCommentForm.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcz80ZDAyIl0sIm5hbWVzIjpbIkNvbW1lbnRGb3JtIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VJbnB1dCIsImNvbW1lbnRUZXh0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50TG9hZ2luZyIsInVzZUVmZmVjdCIsIm9uU3VibWl0Q29tbWVudCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsInBvc3RJZCIsInVzZXJJZCIsInBvc2l0aW9uIiwibWFyZ2luIiwicmlnaHQiLCJib3R0b20iLCJ6SW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDOUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsNkJBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxFQUF0QixtREFBVyxlQUFlSixFQUExQjtBQUFBLEdBQUQsQ0FBdEI7O0FBQ0Esa0JBQTJESywrREFBUSxDQUFDLEVBQUQsQ0FBbkU7QUFBQTtBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsbUJBQXBCO0FBQUEsTUFBeUNDLGNBQXpDOztBQUNBLHFCQUE4Q1AsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDTCxJQUFqQjtBQUFBLEdBQUQsQ0FBekQ7QUFBQSxNQUFRWSxjQUFSLGdCQUFRQSxjQUFSO0FBQUEsTUFBd0JDLGlCQUF4QixnQkFBd0JBLGlCQUF4Qjs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0YsY0FBSCxFQUFtQjtBQUNmRCxvQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNIO0FBQ0osR0FKUSxFQUlOLENBQUNDLGNBQUQsQ0FKTSxDQUFUO0FBTUEsTUFBTUcsZUFBZSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdENmLFlBQVEsQ0FBQztBQUNMZ0IsVUFBSSxFQUFFQyxrRUFERDtBQUVMQyxVQUFJLEVBQUU7QUFBRUMsZUFBTyxFQUFFWCxXQUFYO0FBQXdCWSxjQUFNLEVBQUVyQixJQUFJLENBQUNHLEVBQXJDO0FBQXlDbUIsY0FBTSxFQUFFbkI7QUFBakQ7QUFGRCxLQUFELENBQVI7QUFJSCxHQUxrQyxFQUtoQyxDQUFDTSxXQUFELEVBQWNOLEVBQWQsQ0FMZ0MsQ0FBbkM7QUFPQSxzQkFDSSxxRUFBQyx5Q0FBRDtBQUFNLFlBQVEsRUFBRVksZUFBaEI7QUFBQSwyQkFDSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxXQUFLLEVBQUU7QUFBRVEsZ0JBQVEsRUFBRSxVQUFaO0FBQXdCQyxjQUFNLEVBQUU7QUFBaEMsT0FBbEI7QUFBQSw4QkFDSSxxRUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFBZ0IsYUFBSyxFQUFFZixXQUF2QjtBQUFvQyxnQkFBUSxFQUFFQyxtQkFBOUM7QUFBbUUsWUFBSSxFQUFFO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLHFFQUFDLDJDQUFEO0FBQ0ksYUFBSyxFQUFFO0FBQUVhLGtCQUFRLEVBQUUsVUFBWjtBQUF3QkUsZUFBSyxFQUFFLENBQS9CO0FBQWtDQyxnQkFBTSxFQUFFLENBQUMsRUFBM0M7QUFBK0NDLGdCQUFNLEVBQUU7QUFBdkQsU0FEWDtBQUVJLFlBQUksRUFBQyxTQUZUO0FBR0ksZ0JBQVEsRUFBQyxRQUhiO0FBSUksZUFBTyxFQUFFZCxpQkFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWFILENBaENEOztHQUFNZCxXO1VBQ2VHLHVELEVBQ05FLHVELEVBQ2dESSx1RCxFQUNiSix1RDs7O0tBSjVDTCxXO0FBa0NOQSxXQUFXLENBQUM2QixTQUFaLEdBQXVCO0FBQ25CNUIsTUFBSSxFQUFFNkIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESixDQUF2QjtBQUllaEMsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFERF9DT01NRU5UX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcblxuXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IHBvc3QgfSkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xuICAgIGNvbnN0IFtjb21tZW50VGV4dCwgb25DaGFuZ2VDb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlSW5wdXQoJycpO1xuICAgIGNvbnN0IHsgYWRkQ29tbWVudERvbmUsIGFkZENvbW1lbnRMb2FnaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoYWRkQ29tbWVudERvbmUpIHtcbiAgICAgICAgICAgIHNldENvbW1lbnRUZXh0KCcnKTtcbiAgICAgICAgfVxuICAgIH0sIFthZGRDb21tZW50RG9uZV0pO1xuXG4gICAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxuICAgICAgICAgICAgZGF0YTogeyBjb250ZW50OiBjb21tZW50VGV4dCwgcG9zdElkOiBwb3N0LmlkLCB1c2VySWQ6IGlkIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW2NvbW1lbnRUZXh0LCBpZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW46IDAgfX0+XG4gICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIHZhbHVlPXtjb21tZW50VGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9IHJvd3M9ezR9Lz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMCwgYm90dG9tOiAtNDAsIHpJbmRleDogMSB9fSBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXthZGRDb21tZW50TG9hZ2luZ31cbiAgICAgICAgICAgICAgICA+7IKQ7JW9PC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgPC9Gb3JtPlxuICAgICk7XG59O1xuXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPXtcbiAgICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentForm.js\n");

/***/ })

})