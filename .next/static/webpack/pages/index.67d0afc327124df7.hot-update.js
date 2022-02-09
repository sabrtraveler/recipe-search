"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CookieBanner.js":
/*!************************************!*\
  !*** ./components/CookieBanner.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CookieBanner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/CardActions/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import modules\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction CookieBanner() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_2__.Store), state = ref.state, dispatch = ref.dispatch;\n    var cookiesBool = state.cookiesBool;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var handleAccept = function() {\n        dispatch({\n            type: \"ACCEPT_COOKIES\"\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            minWidth: 275,\n            position: \"fixed\",\n            bottom: 0,\n            display: cookiesBool ? \"none\" : \"block\",\n            zIndex: 999\n        },\n        __source: {\n            fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    color: \"primary.dark\",\n                    __source: {\n                        fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        \"Recipe Book uses cookies to improve your experience, according to the Privacy Policy. \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                            __source: {\n                                fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                                lineNumber: 34,\n                                columnNumber: 27\n                            },\n                            __self: this\n                        }),\n                        \" By continuing to browse you agree to these conditions.\"\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    padding: \"0rem 1rem 1rem 1rem\"\n                },\n                __source: {\n                    fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"contained\",\n                        onClick: handleAccept,\n                        __source: {\n                            fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"ACCEPT\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"contained\",\n                        __source: {\n                            fileName: \"/Users/shareefrossetti/Desktop/recipe/components/CookieBanner.js\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"PRIVACY POLICY\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(CookieBanner, \"HedWEmzADlnhtOEM7d3OXHBnVxs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CookieBanner;\nvar _c;\n$RefreshReg$(_c, \"CookieBanner\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvb2tpZUJhbm5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFnQjtBQUV5QjtBQUNKO0FBQ2M7QUFDQTtBQUNWO0FBQ1E7QUFDWDtBQUNDOztBQUV4QixRQUFRLENBQUNTLFlBQVksR0FBRyxDQUFDOztJQUN0QyxHQUFLLENBQXVCUixHQUFpQixHQUFqQkEsaURBQVUsQ0FBQ00sK0NBQUssR0FBcENHLEtBQUssR0FBZVQsR0FBaUIsQ0FBckNTLEtBQUssRUFBRUMsUUFBUSxHQUFLVixHQUFpQixDQUE5QlUsUUFBUTtJQUN2QixHQUFLLENBQUdDLFdBQVcsR0FBS0YsS0FBSyxDQUFyQkUsV0FBVztJQUNuQixHQUFLLENBQUNDLE1BQU0sR0FBR0wsc0RBQVM7SUFFeEIsR0FBSyxDQUFDTSxZQUFZLEdBQUcsUUFDdkIsR0FENkIsQ0FBQztRQUMxQkgsUUFBUSxDQUFDLENBQUM7WUFBQ0ksSUFBSSxFQUFFLENBQWdCO1FBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTSx1RUFDSGIsMERBQUk7UUFDSGMsRUFBRSxFQUFFLENBQUM7WUFDSEMsUUFBUSxFQUFFLEdBQUc7WUFDYkMsUUFBUSxFQUFFLENBQU87WUFDakJDLE1BQU0sRUFBRSxDQUFDO1lBQ1RDLE9BQU8sRUFBRVIsV0FBVyxHQUFHLENBQU0sUUFBRyxDQUFPO1lBQ3ZDUyxNQUFNLEVBQUUsR0FBRztRQUNiLENBQUM7Ozs7Ozs7O2lGQUVBakIsaUVBQVc7Ozs7Ozs7Z0dBQ1RFLGdFQUFVO29CQUFDZ0IsS0FBSyxFQUFDLENBQWM7Ozs7Ozs7O3dCQUFDLENBRWY7NkZBQUNDLENBQUU7Ozs7Ozs7O3dCQUFHLENBRXhCOzs7O2tGQUVEcEIsaUVBQVc7Z0JBQUNhLEVBQUUsRUFBRSxDQUFDO29CQUFDUSxPQUFPLEVBQUUsQ0FBcUI7Z0JBQUMsQ0FBQzs7Ozs7Ozs7eUZBQ2hEbkIsNERBQU07d0JBQUNvQixPQUFPLEVBQUMsQ0FBVzt3QkFBQ0MsT0FBTyxFQUFFWixZQUFZOzs7Ozs7O2tDQUFFLENBRW5EOzt5RkFDQ1QsNERBQU07d0JBQUNvQixPQUFPLEVBQUMsQ0FBVzs7Ozs7OztrQ0FBQyxDQUFjOzs7Ozs7QUFJbEQsQ0FBQztHQWxDdUJoQixZQUFZOztRQUduQkQsa0RBQVM7OztLQUhGQyxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29va2llQmFubmVyLmpzP2FkODYiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgbW9kdWxlc1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi91dGlscy9TdG9yZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvb2tpZUJhbm5lcigpIHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RvcmUpO1xuICBjb25zdCB7IGNvb2tpZXNCb29sIH0gPSBzdGF0ZTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQWNjZXB0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJBQ0NFUFRfQ09PS0lFU1wiIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIHN4PXt7XG4gICAgICAgIG1pbldpZHRoOiAyNzUsXG4gICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgZGlzcGxheTogY29va2llc0Jvb2wgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIixcbiAgICAgICAgekluZGV4OiA5OTksXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5LmRhcmtcIj5cbiAgICAgICAgICBSZWNpcGUgQm9vayB1c2VzIGNvb2tpZXMgdG8gaW1wcm92ZSB5b3VyIGV4cGVyaWVuY2UsIGFjY29yZGluZyB0byB0aGVcbiAgICAgICAgICBQcml2YWN5IFBvbGljeS4gPGJyIC8+IEJ5IGNvbnRpbnVpbmcgdG8gYnJvd3NlIHlvdSBhZ3JlZSB0byB0aGVzZVxuICAgICAgICAgIGNvbmRpdGlvbnMuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8Q2FyZEFjdGlvbnMgc3g9e3sgcGFkZGluZzogXCIwcmVtIDFyZW0gMXJlbSAxcmVtXCIgfX0+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUFjY2VwdH0+XG4gICAgICAgICAgQUNDRVBUXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5QUklWQUNZIFBPTElDWTwvQnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiU3RvcmUiLCJ1c2VSb3V0ZXIiLCJDb29raWVCYW5uZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY29va2llc0Jvb2wiLCJyb3V0ZXIiLCJoYW5kbGVBY2NlcHQiLCJ0eXBlIiwic3giLCJtaW5XaWR0aCIsInBvc2l0aW9uIiwiYm90dG9tIiwiZGlzcGxheSIsInpJbmRleCIsImNvbG9yIiwiYnIiLCJwYWRkaW5nIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CookieBanner.js\n");

/***/ })

});