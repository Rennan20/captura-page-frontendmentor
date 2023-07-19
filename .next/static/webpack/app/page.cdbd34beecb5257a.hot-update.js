"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/Gallery.tsx":
/*!************************************!*\
  !*** ./app/components/Gallery.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/products */ \"(app-client)/./app/helpers/products.ts\");\n/* harmony import */ var _Lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lightbox */ \"(app-client)/./app/components/Lightbox.tsx\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive */ \"(app-client)/./node_modules/react-responsive/dist/react-responsive.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Gallery = ()=>{\n    _s();\n    const [selectedPhoto, setSelectedPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_helpers_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"][0].image);\n    const [isLightboxOpen, setIsLightboxOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const isMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)({\n        maxWidth: 640\n    });\n    const handlePhotoClick = (image)=>{\n        setSelectedPhoto(image);\n    };\n    const handleCloseLightbox = ()=>{\n        setIsLightboxOpen(false);\n    };\n    const goToPreviousPhoto = ()=>{\n        // Find the index of the current selected photo\n        const currentIndex = _helpers_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findIndex((product)=>product.image === selectedPhoto);\n        // Find the index of the previous photo\n        const previousIndex = (currentIndex - 1 + _helpers_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length) % _helpers_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length;\n        // Set the selectedPhoto to the previous photo\n        setSelectedPhoto(_helpers_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previousIndex].image);\n    };\n    const goToNextPhoto = ()=>{\n        // Find the index of the current selected photo\n        const currentIndex = _helpers_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findIndex((product)=>product.image === selectedPhoto);\n        // Find the index of the next photo\n        const nextIndex = (currentIndex + 1) % _helpers_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length;\n        // Set the selectedPhoto to the next photo\n        setSelectedPhoto(_helpers_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"][nextIndex].image);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-1 p-2 justify-center items-center w-1/2 flex-col mt-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"rounded-xl cursor-pointer\",\n                            width: 450,\n                            height: 450,\n                            src: selectedPhoto,\n                            alt: \"Product\",\n                            onClick: ()=>setIsLightboxOpen(true)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:flex justify-center space-x-4 mt-8\",\n                            children: _helpers_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative rounded-xl cursor-pointer\",\n                                    onMouseEnter: ()=>handlePhotoClick(product.image),\n                                    onMouseLeave: ()=>selectedPhoto !== product.image && setSelectedPhoto(selectedPhoto),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"rounded-xl\",\n                                            src: product.thumb,\n                                            alt: \"Thumbnail\",\n                                            width: 80,\n                                            height: 80\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        selectedPhoto === product.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 left-0 bg-gray-200 bg-opacity-50 w-full h-full rounded-xl hover:border-orange-primary hover:border-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, product.thumb, true, {\n                                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined),\n                        isLightboxOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Lightbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            onClose: handleCloseLightbox,\n                            lightboxPhoto: selectedPhoto\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined),\n            isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"relative flex flex-1 p-2 justify-center items-center w-full mt-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"cursor-pointer\",\n                                    width: 450,\n                                    height: 450,\n                                    src: selectedPhoto,\n                                    alt: \"Product\",\n                                    onClick: ()=>setIsLightboxOpen(true)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-white p-6 rounded-full \",\n                                            onClick: goToPreviousPhoto,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                width: \"12\",\n                                                height: \"18\",\n                                                className: \"stroke-[#1D2026] hover:stroke-orange-primary\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M11 1 3 9l8 8\",\n                                                    \"stroke-width\": \"3\",\n                                                    fill: \"none\",\n                                                    \"fill-rule\": \"evenodd\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                                    lineNumber: 124,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                                lineNumber: 118,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-white p-3 rounded-full \",\n                                            onClick: goToNextPhoto,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    width: \"13\",\n                                                    height: \"18\",\n                                                    className: \"stroke-[#1D2026] hover:stroke-orange-primary\",\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"m2 1 8 8-8 8\",\n                                                        \"stroke-width\": \"3\",\n                                                        fill: \"none\",\n                                                        \"fill-rule\": \"evenodd\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                                        lineNumber: 143,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                                    lineNumber: 137,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true);\n};\n_s(Gallery, \"I/3RyUZ5XbN2n/LK/4hQ2xpDs34=\", false, function() {\n    return [\n        react_responsive__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery\n    ];\n});\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtnREFDQ1osT0FBTTtnREFDTkMsUUFBTztnREFDUEgsV0FBVTtnREFDVmUsT0FBTTswREFFTiw0RUFBQ0M7b0RBQ0NDLEdBQUU7b0RBQ0ZDLGdCQUFhO29EQUNiQyxNQUFLO29EQUNMQyxhQUFVOzs7Ozs7Ozs7Ozs7Ozs7O3NEQUtoQiw4REFBQ1A7NENBQ0NiLFdBQVU7NENBQ1ZNLFNBQVNUOzs4REFFVCw4REFBQ2lCO29EQUNDWixPQUFNO29EQUNOQyxRQUFPO29EQUNQSCxXQUFVO29EQUNWZSxPQUFNOzhEQUVOLDRFQUFDQzt3REFDQ0MsR0FBRTt3REFDRkMsZ0JBQWE7d0RBQ2JDLE1BQUs7d0RBQ0xDLGFBQVU7Ozs7Ozs7Ozs7O2dEQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUzQjtHQXRKTXZDOztRQUlhRCwyREFBYUE7OztLQUoxQkM7QUF3Sk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvR2FsbGVyeS50c3g/NzQzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL2hlbHBlcnMvcHJvZHVjdHNcIjtcclxuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCIuL0xpZ2h0Ym94XCI7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xyXG5cclxuY29uc3QgR2FsbGVyeSA9ICgpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRQaG90bywgc2V0U2VsZWN0ZWRQaG90b10gPSB1c2VTdGF0ZShwcm9kdWN0c1swXS5pbWFnZSk7XHJcbiAgY29uc3QgW2lzTGlnaHRib3hPcGVuLCBzZXRJc0xpZ2h0Ym94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh7IG1heFdpZHRoOiA2NDAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBob3RvQ2xpY2sgPSAoaW1hZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRQaG90byhpbWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VMaWdodGJveCA9ICgpID0+IHtcclxuICAgIHNldElzTGlnaHRib3hPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnb1RvUHJldmlvdXNQaG90byA9ICgpID0+IHtcclxuICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHNlbGVjdGVkIHBob3RvXHJcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBwcm9kdWN0cy5maW5kSW5kZXgoXHJcbiAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmltYWdlID09PSBzZWxlY3RlZFBob3RvXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBwcmV2aW91cyBwaG90b1xyXG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9XHJcbiAgICAgIChjdXJyZW50SW5kZXggLSAxICsgcHJvZHVjdHMubGVuZ3RoKSAlIHByb2R1Y3RzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBTZXQgdGhlIHNlbGVjdGVkUGhvdG8gdG8gdGhlIHByZXZpb3VzIHBob3RvXHJcbiAgICBzZXRTZWxlY3RlZFBob3RvKHByb2R1Y3RzW3ByZXZpb3VzSW5kZXhdLmltYWdlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnb1RvTmV4dFBob3RvID0gKCkgPT4ge1xyXG4gICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgcGhvdG9cclxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHByb2R1Y3RzLmZpbmRJbmRleChcclxuICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaW1hZ2UgPT09IHNlbGVjdGVkUGhvdG9cclxuICAgICk7XHJcblxyXG4gICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIG5leHQgcGhvdG9cclxuICAgIGNvbnN0IG5leHRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIHByb2R1Y3RzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBTZXQgdGhlIHNlbGVjdGVkUGhvdG8gdG8gdGhlIG5leHQgcGhvdG9cclxuICAgIHNldFNlbGVjdGVkUGhvdG8ocHJvZHVjdHNbbmV4dEluZGV4XS5pbWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHshaXNNb2JpbGUgJiYgKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC0xIHAtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy0xLzIgZmxleC1jb2wgbXQtMTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezQ1MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezQ1MH1cclxuICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkUGhvdG99XHJcbiAgICAgICAgICAgICAgYWx0PVwiUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNMaWdodGJveE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNCBtdC04XCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QudGh1bWJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZVBob3RvQ2xpY2socHJvZHVjdC5pbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBob3RvICE9PSBwcm9kdWN0LmltYWdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRQaG90byhzZWxlY3RlZFBob3RvKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYn1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJUaHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQaG90byA9PT0gcHJvZHVjdC5pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgYmctZ3JheS0yMDAgYmctb3BhY2l0eS01MCB3LWZ1bGwgaC1mdWxsIHJvdW5kZWQteGwgaG92ZXI6Ym9yZGVyLW9yYW5nZS1wcmltYXJ5IGhvdmVyOmJvcmRlci0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtpc0xpZ2h0Ym94T3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpZ2h0Ym94XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUxpZ2h0Ym94fVxyXG4gICAgICAgICAgICAgICAgbGlnaHRib3hQaG90bz17c2VsZWN0ZWRQaG90b31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2lzTW9iaWxlICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LTEgcC0yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbXQtMTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDUwfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQ1MH1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFBob3RvfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNMaWdodGJveE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIFByZXZpb3VzIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWZ1bGwgXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnb1RvUHJldmlvdXNQaG90b31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Ryb2tlLVsjMUQyMDI2XSBob3ZlcjpzdHJva2Utb3JhbmdlLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMSAxIDMgOWw4IDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7LyogTmV4dCBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTMgcm91bmRlZC1mdWxsIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Z29Ub05leHRQaG90b31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Ryb2tlLVsjMUQyMDI2XSBob3ZlcjpzdHJva2Utb3JhbmdlLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0yIDEgOCA4LTggOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltYWdlIiwicHJvZHVjdHMiLCJMaWdodGJveCIsInVzZU1lZGlhUXVlcnkiLCJHYWxsZXJ5Iiwic2VsZWN0ZWRQaG90byIsInNldFNlbGVjdGVkUGhvdG8iLCJpbWFnZSIsImlzTGlnaHRib3hPcGVuIiwic2V0SXNMaWdodGJveE9wZW4iLCJpc01vYmlsZSIsIm1heFdpZHRoIiwiaGFuZGxlUGhvdG9DbGljayIsImhhbmRsZUNsb3NlTGlnaHRib3giLCJnb1RvUHJldmlvdXNQaG90byIsImN1cnJlbnRJbmRleCIsImZpbmRJbmRleCIsInByb2R1Y3QiLCJwcmV2aW91c0luZGV4IiwibGVuZ3RoIiwiZ29Ub05leHRQaG90byIsIm5leHRJbmRleCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJtYXAiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJ0aHVtYiIsIm9uQ2xvc2UiLCJsaWdodGJveFBob3RvIiwiYnV0dG9uIiwic3ZnIiwieG1sbnMiLCJwYXRoIiwiZCIsInN0cm9rZS13aWR0aCIsImZpbGwiLCJmaWxsLXJ1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Gallery.tsx\n"));

/***/ })

});