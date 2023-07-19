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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/products */ \"(app-client)/./app/helpers/products.ts\");\n/* harmony import */ var _Lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lightbox */ \"(app-client)/./app/components/Lightbox.tsx\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive */ \"(app-client)/./node_modules/react-responsive/dist/react-responsive.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Gallery = ()=>{\n    _s();\n    const [selectedPhoto, setSelectedPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_helpers_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"][0].image);\n    const [isLightboxOpen, setIsLightboxOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const isMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)({\n        maxWidth: 640\n    });\n    const handlePhotoClick = (image)=>{\n        setSelectedPhoto(image);\n    };\n    const handleCloseLightbox = ()=>{\n        setIsLightboxOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-1 p-2 justify-center items-center w-1/2 flex-col mt-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"rounded-xl cursor-pointer\",\n                            width: 450,\n                            height: 450,\n                            src: selectedPhoto,\n                            alt: \"Product\",\n                            onClick: ()=>setIsLightboxOpen(true)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:flex justify-center space-x-4 mt-8\",\n                            children: _helpers_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative rounded-xl cursor-pointer\",\n                                    onMouseEnter: ()=>handlePhotoClick(product.image),\n                                    onMouseLeave: ()=>selectedPhoto !== product.image && setSelectedPhoto(selectedPhoto),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"rounded-xl\",\n                                            src: product.thumb,\n                                            alt: \"Thumbnail\",\n                                            width: 80,\n                                            height: 80\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        selectedPhoto === product.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 left-0 bg-gray-200 bg-opacity-50 w-full h-full rounded-xl hover:border-orange-primary hover:border-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, product.thumb, true, {\n                                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined),\n                        isLightboxOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Lightbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            onClose: handleCloseLightbox,\n                            lightboxPhoto: selectedPhoto\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined),\n            isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-1 p-2 justify-center items-center w-1/2 flex-col mt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"rounded-xl cursor-pointer\",\n                                    width: 450,\n                                    height: 450,\n                                    src: selectedPhoto,\n                                    alt: \"Product\",\n                                    onClick: ()=>setIsLightboxOpen(true)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-1  absolute top-[35%]  right-0 left-0 justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-white p-6 rounded-full -translate-x-8\",\n                                    onClick: goToPreviousPhoto,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        width: \"12\",\n                                        height: \"18\",\n                                        className: \"stroke-[#1D2026] hover:stroke-orange-primary\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M11 1 3 9l8 8\",\n                                            \"stroke-width\": \"3\",\n                                            fill: \"none\",\n                                            \"fill-rule\": \"evenodd\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-white p-6 rounded-full translate-x-8\",\n                                    onClick: goToNextPhoto,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            width: \"13\",\n                                            height: \"18\",\n                                            className: \"stroke-[#1D2026] hover:stroke-orange-primary\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"m2 1 8 8-8 8\",\n                                                \"stroke-width\": \"3\",\n                                                fill: \"none\",\n                                                \"fill-rule\": \"evenodd\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                                lineNumber: 119,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\migue\\\\Desktop\\\\Rennan\\\\frontendmentor\\\\e-commerce-landing-page\\\\app\\\\components\\\\Gallery.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true);\n};\n_s(Gallery, \"I/3RyUZ5XbN2n/LK/4hQ2xpDs34=\", false, function() {\n    return [\n        react_responsive__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery\n    ];\n});\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvR2FsbGVyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ0Y7QUFDWTtBQUNUO0FBQ2U7QUFFakQsTUFBTUssVUFBVTs7SUFDZCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQ0UseURBQVEsQ0FBQyxFQUFFLENBQUNNLEtBQUs7SUFDcEUsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHViwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNVyxXQUFXUCwrREFBYUEsQ0FBQztRQUFFUSxVQUFVO0lBQUk7SUFFL0MsTUFBTUMsbUJBQW1CLENBQUNMO1FBQ3hCRCxpQkFBaUJDO0lBQ25CO0lBRUEsTUFBTU0sc0JBQXNCO1FBQzFCSixrQkFBa0I7SUFDcEI7SUFFQSxxQkFDRTs7WUFDRyxDQUFDQywwQkFDQSw4REFBQ0k7Z0JBQVFDLFdBQVU7MEJBQ2pCLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNmLG1EQUFLQTs0QkFDSmUsV0FBVTs0QkFDVkUsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsS0FBS2Q7NEJBQ0xlLEtBQUk7NEJBQ0pDLFNBQVMsSUFBTVosa0JBQWtCOzs7Ozs7c0NBR25DLDhEQUFDTzs0QkFBSUQsV0FBVTtzQ0FDWmQseURBQVFBLENBQUNxQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNQO29DQUVDRCxXQUFVO29DQUNWUyxjQUFjLElBQU1aLGlCQUFpQlcsUUFBUWhCLEtBQUs7b0NBQ2xEa0IsY0FBYyxJQUNacEIsa0JBQWtCa0IsUUFBUWhCLEtBQUssSUFDL0JELGlCQUFpQkQ7O3NEQUduQiw4REFBQ0wsbURBQUtBOzRDQUNKZSxXQUFVOzRDQUNWSSxLQUFLSSxRQUFRRyxLQUFLOzRDQUNsQk4sS0FBSTs0Q0FDSkgsT0FBTzs0Q0FDUEMsUUFBUTs7Ozs7O3dDQUVUYixrQkFBa0JrQixRQUFRaEIsS0FBSyxrQkFDOUIsOERBQUNTOzRDQUFJRCxXQUFVOzs7Ozs7O21DQWhCWlEsUUFBUUcsS0FBSzs7Ozs7Ozs7Ozt3QkFzQnZCbEIsZ0NBQ0MsOERBQUNOLGlEQUFRQTs0QkFDUHlCLFNBQVNkOzRCQUNUZSxlQUFldkI7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT3hCSywwQkFDQzswQkFDRSw0RUFBQ0k7b0JBQVFDLFdBQVU7O3NDQUNqQiw4REFBQ0M7NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDZixtREFBS0E7b0NBQ0plLFdBQVU7b0NBQ1ZFLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUtkO29DQUNMZSxLQUFJO29DQUNKQyxTQUFTLElBQU1aLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLdkMsOERBQUNPOzRCQUFJRCxXQUFVOzs4Q0FFYiw4REFBQ2M7b0NBQ0NkLFdBQVU7b0NBQ1ZNLFNBQVNTOzhDQUVULDRFQUFDQzt3Q0FDQ2QsT0FBTTt3Q0FDTkMsUUFBTzt3Q0FDUEgsV0FBVTt3Q0FDVmlCLE9BQU07a0RBRU4sNEVBQUNDOzRDQUNDQyxHQUFFOzRDQUNGQyxnQkFBYTs0Q0FDYkMsTUFBSzs0Q0FDTEMsYUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FLaEIsOERBQUNSO29DQUNDZCxXQUFVO29DQUNWTSxTQUFTaUI7O3NEQUVULDhEQUFDUDs0Q0FDQ2QsT0FBTTs0Q0FDTkMsUUFBTzs0Q0FDUEgsV0FBVTs0Q0FDVmlCLE9BQU07c0RBRU4sNEVBQUNDO2dEQUNDQyxHQUFFO2dEQUNGQyxnQkFBYTtnREFDYkMsTUFBSztnREFDTEMsYUFBVTs7Ozs7Ozs7Ozs7d0NBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkI7R0E1SE1qQzs7UUFJYUQsMkRBQWFBOzs7S0FKMUJDO0FBOEhOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0dhbGxlcnkudHN4Pzc0MzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi9oZWxwZXJzL3Byb2R1Y3RzXCI7XHJcbmltcG9ydCBMaWdodGJveCBmcm9tIFwiLi9MaWdodGJveFwiO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmVcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkUGhvdG8sIHNldFNlbGVjdGVkUGhvdG9dID0gdXNlU3RhdGUocHJvZHVjdHNbMF0uaW1hZ2UpO1xyXG4gIGNvbnN0IFtpc0xpZ2h0Ym94T3Blbiwgc2V0SXNMaWdodGJveE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkoeyBtYXhXaWR0aDogNjQwIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQaG90b0NsaWNrID0gKGltYWdlOiBzdHJpbmcpID0+IHtcclxuICAgIHNldFNlbGVjdGVkUGhvdG8oaW1hZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTGlnaHRib3ggPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xpZ2h0Ym94T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHshaXNNb2JpbGUgJiYgKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC0xIHAtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy0xLzIgZmxleC1jb2wgbXQtMTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezQ1MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezQ1MH1cclxuICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkUGhvdG99XHJcbiAgICAgICAgICAgICAgYWx0PVwiUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNMaWdodGJveE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNCBtdC04XCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QudGh1bWJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZVBob3RvQ2xpY2socHJvZHVjdC5pbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBob3RvICE9PSBwcm9kdWN0LmltYWdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRQaG90byhzZWxlY3RlZFBob3RvKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYn1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJUaHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQaG90byA9PT0gcHJvZHVjdC5pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgYmctZ3JheS0yMDAgYmctb3BhY2l0eS01MCB3LWZ1bGwgaC1mdWxsIHJvdW5kZWQteGwgaG92ZXI6Ym9yZGVyLW9yYW5nZS1wcmltYXJ5IGhvdmVyOmJvcmRlci0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtpc0xpZ2h0Ym94T3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpZ2h0Ym94XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUxpZ2h0Ym94fVxyXG4gICAgICAgICAgICAgICAgbGlnaHRib3hQaG90bz17c2VsZWN0ZWRQaG90b31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2lzTW9iaWxlICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgcC0yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMiBmbGV4LWNvbCBtdC0xNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDUwfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQ1MH1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFBob3RvfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNMaWdodGJveE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgIGFic29sdXRlIHRvcC1bMzUlXSAgcmlnaHQtMCBsZWZ0LTAganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgey8qIFByZXZpb3VzIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC1mdWxsIC10cmFuc2xhdGUteC04XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9QcmV2aW91c1Bob3RvfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Ryb2tlLVsjMUQyMDI2XSBob3ZlcjpzdHJva2Utb3JhbmdlLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTExIDEgMyA5bDggOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgey8qIE5leHQgQnV0dG9uICovfVxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWZ1bGwgdHJhbnNsYXRlLXgtOFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtnb1RvTmV4dFBob3RvfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxM1wiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Ryb2tlLVsjMUQyMDI2XSBob3ZlcjpzdHJva2Utb3JhbmdlLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBkPVwibTIgMSA4IDgtOCA4XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltYWdlIiwicHJvZHVjdHMiLCJMaWdodGJveCIsInVzZU1lZGlhUXVlcnkiLCJHYWxsZXJ5Iiwic2VsZWN0ZWRQaG90byIsInNldFNlbGVjdGVkUGhvdG8iLCJpbWFnZSIsImlzTGlnaHRib3hPcGVuIiwic2V0SXNMaWdodGJveE9wZW4iLCJpc01vYmlsZSIsIm1heFdpZHRoIiwiaGFuZGxlUGhvdG9DbGljayIsImhhbmRsZUNsb3NlTGlnaHRib3giLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwibWFwIiwicHJvZHVjdCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInRodW1iIiwib25DbG9zZSIsImxpZ2h0Ym94UGhvdG8iLCJidXR0b24iLCJnb1RvUHJldmlvdXNQaG90byIsInN2ZyIsInhtbG5zIiwicGF0aCIsImQiLCJzdHJva2Utd2lkdGgiLCJmaWxsIiwiZmlsbC1ydWxlIiwiZ29Ub05leHRQaG90byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Gallery.tsx\n"));

/***/ })

});