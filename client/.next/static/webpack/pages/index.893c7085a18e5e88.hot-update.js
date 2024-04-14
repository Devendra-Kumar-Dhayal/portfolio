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

/***/ "./sections/ProjectSection.tsx":
/*!*************************************!*\
  !*** ./sections/ProjectSection.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_rough_notation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rough-notation */ \"./node_modules/react-rough-notation/dist/module.es.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ProjectCard */ \"./components/ProjectCard.tsx\");\n/* harmony import */ var context_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/section */ \"./context/section.tsx\");\n/* harmony import */ var hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useOnScreen */ \"./hooks/useOnScreen.ts\");\n/* harmony import */ var hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks/useScrollActive */ \"./hooks/useScrollActive.ts\");\n/* harmony import */ var public_projects_astro_paper_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! public/projects/astro-paper.webp */ \"./public/projects/astro-paper.webp\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ProjectSection = ()=>{\n    _s();\n    const { theme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const isOnScreen = (0,hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(elementRef);\n    // Set active link for project section\n    const projectSection = (0,hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(sectionRef);\n    const { onSectionChange } = (0,context_section__WEBPACK_IMPORTED_MODULE_6__.useSection)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        projectSection && onSectionChange(\"projects\");\n    }, [\n        onSectionChange,\n        projectSection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: sectionRef,\n        id: \"projects\",\n        className: \"section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"project-title text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_rough_notation__WEBPACK_IMPORTED_MODULE_3__.RoughNotation, {\n                    type: \"underline\",\n                    color: \"\".concat(theme === \"light\" ? \"rgb(0, 122, 122)\" : \"rgb(5 206 145)\"),\n                    strokeWidth: 2,\n                    order: 1,\n                    show: isOnScreen,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"section-heading\",\n                        children: \"Featured Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"project-desc text-center block mb-4\",\n                ref: elementRef,\n                children: [\n                    \"“Talk is cheap. Show me the code”? I got you. \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 55\n                    }, undefined),\n                    \"Here are some of my projects you shouldn't misss\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        index: index,\n                        project: project\n                    }, project.title, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"others text-center mb-16\",\n                children: [\n                    \"Other projects can be explored in\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/devendra-kumar-dhayal/\",\n                        className: \"font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap\",\n                        children: \"my github profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectSection, \"8Heb86wCV0Fy38KlS/PhJmjK3z0=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme,\n        hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        context_section__WEBPACK_IMPORTED_MODULE_6__.useSection\n    ];\n});\n_c = ProjectSection;\nconst projects = [\n    {\n        title: \"Design Studio\",\n        type: \"End to End\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: public_projects_astro_paper_webp__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            sizes: \"100vw\",\n            fill: true,\n            alt: \"AstroPaper\",\n            className: \"transition-transform duration-500 hover:scale-110 object-cover\"\n        }, void 0, false, {\n            fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined),\n        desc: \"Web-based editor to model the individual data flows between applications. Team of applications collaborating to make a business function smoothly.\",\n        tags: [\n            \"React\",\n            \"TypeScript\",\n            \"NodeJs\",\n            \"TailwindCSS\",\n            \"MongoDB\",\n            \"ZOD\"\n        ],\n        liveUrl: \"\",\n        codeUrl: \"https://github.com/Devendra-Kumar-Dhayal/designStudio\",\n        bgColor: \"bg-[#9FD0E3]\",\n        githubApi: \"https://github.com/Devendra-Kumar-Dhayal/designStudio\"\n    },\n    {\n        title: \"Social Media Application\",\n        type: \"End to End\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: public_projects_astro_paper_webp__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            sizes: \"100vw\",\n            fill: true,\n            alt: \"AstroPaper\",\n            className: \"transition-transform duration-500 hover:scale-110 object-cover\"\n        }, void 0, false, {\n            fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n            lineNumber: 93,\n            columnNumber: 7\n        }, undefined),\n        desc: \"Platform to discuss Games Information, strategies, and Statuses.\",\n        tags: [\n            \"Html\",\n            \"JavaScript\",\n            \"Django\",\n            \"TailwindCSS\",\n            \"PostgreSQL\"\n        ],\n        liveUrl: \"\",\n        codeUrl: \"https://github.com/Devendra-Kumar-Dhayal/homeMainBranch\",\n        bgColor: \"bg-[#9FD0E3]\",\n        githubApi: \"https://github.com/Devendra-Kumar-Dhayal/homeMainBranch\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9Qcm9qZWN0U2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNXO0FBQ1c7QUFDZDtBQUVZO0FBQ047QUFDRDtBQUNRO0FBS007QUFLMUQsTUFBTVUsaUJBQTJCOztJQUMvQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHUCxxREFBUUE7SUFFMUIsTUFBTVEsYUFBYVYsNkNBQU1BLENBQWlCO0lBRTFDLE1BQU1XLGFBQWFYLDZDQUFNQSxDQUFpQjtJQUMxQyxNQUFNWSxhQUFhUCw2REFBV0EsQ0FBQ007SUFFL0Isc0NBQXNDO0lBQ3RDLE1BQU1FLGlCQUFpQlAsaUVBQWVBLENBQUNJO0lBQ3ZDLE1BQU0sRUFBRUksZUFBZSxFQUFFLEdBQUdWLDJEQUFVQTtJQUN0Q0wsZ0RBQVNBLENBQUM7UUFDUmMsa0JBQWtCQyxnQkFBaUI7SUFDckMsR0FBRztRQUFDQTtRQUFpQkQ7S0FBZTtJQUVwQyxxQkFDRSw4REFBQ0U7UUFBUUMsS0FBS047UUFBWU8sSUFBRztRQUFXQyxXQUFVOzswQkFDaEQsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDakIsK0RBQWFBO29CQUNabUIsTUFBSztvQkFDTEMsT0FBTyxHQUE2RCxPQUExRFosVUFBVSxVQUFVLHFCQUFxQjtvQkFDbkRhLGFBQWE7b0JBQ2JDLE9BQU87b0JBQ1BDLE1BQU1aOzhCQUVOLDRFQUFDYTt3QkFBR1AsV0FBVTtrQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3BDLDhEQUFDUTtnQkFBS1IsV0FBVTtnQkFBc0NGLEtBQUtMOztvQkFBWTtrQ0FDdkIsOERBQUNnQjs7Ozs7b0JBQUs7Ozs7Ozs7MEJBR3RELDhEQUFDUjtnQkFBSUQsV0FBVTswQkFDWlUsU0FBU0MsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQzVCLCtEQUFXQTt3QkFBcUI0QixPQUFPQTt3QkFBT0QsU0FBU0E7dUJBQXRDQSxRQUFRRSxLQUFLOzs7Ozs7Ozs7OzBCQUduQyw4REFBQ2I7Z0JBQUlELFdBQVU7O29CQUEyQjtvQkFDTjtrQ0FDbEMsOERBQUNlO3dCQUNDQyxNQUFLO3dCQUNMaEIsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0FoRE1WOztRQUNjTixpREFBUUE7UUFLUEcseURBQVdBO1FBR1BDLDZEQUFlQTtRQUNWRix1REFBVUE7OztLQVZsQ0k7QUFrRE4sTUFBTW9CLFdBQVc7SUFDZjtRQUNFSSxPQUFPO1FBQ1BaLE1BQU07UUFDTmUscUJBQ0UsOERBQUNyQyxtREFBS0E7WUFDSnNDLEtBQUs3Qix3RUFBVUE7WUFDZjhCLE9BQU07WUFDTkMsSUFBSTtZQUNKQyxLQUFJO1lBQ0pyQixXQUFVOzs7Ozs7UUFHZHNCLE1BQU07UUFDTkMsTUFBTTtZQUFDO1lBQVM7WUFBYztZQUFVO1lBQWU7WUFBVTtTQUFNO1FBQ3ZFQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7SUFDQTtRQUNFYixPQUFPO1FBQ1BaLE1BQU07UUFDTmUscUJBQ0UsOERBQUNyQyxtREFBS0E7WUFDSnNDLEtBQUs3Qix3RUFBVUE7WUFDZjhCLE9BQU07WUFDTkMsSUFBSTtZQUNKQyxLQUFJO1lBQ0pyQixXQUFVOzs7Ozs7UUFHZHNCLE1BQU07UUFDTkMsTUFBTTtZQUFDO1lBQVE7WUFBYztZQUFVO1lBQWU7U0FBYTtRQUNuRUMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsV0FBVztJQUNiO0NBSUQ7QUFFRCwrREFBZXJDLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvUHJvamVjdFNlY3Rpb24udHN4PzE5Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91Z2hOb3RhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3VnaC1ub3RhdGlvblwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcblxuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvamVjdENhcmRcIjtcbmltcG9ydCB7IHVzZVNlY3Rpb24gfSBmcm9tIFwiY29udGV4dC9zZWN0aW9uXCI7XG5pbXBvcnQgdXNlT25TY3JlZW4gZnJvbSBcImhvb2tzL3VzZU9uU2NyZWVuXCI7XG5pbXBvcnQgdXNlU2Nyb2xsQWN0aXZlIGZyb20gXCJob29rcy91c2VTY3JvbGxBY3RpdmVcIjtcblxuaW1wb3J0IHRlcm1pbmFsUG9ydGZvbGlvIGZyb20gXCJwdWJsaWMvcHJvamVjdHMvdGVybWluYWwtcG9ydGZvbGlvLndlYnBcIjtcbmltcG9ydCBoYXJ1RmFzaGlvbiBmcm9tIFwicHVibGljL3Byb2plY3RzL2hhcnUtZmFzaGlvbi53ZWJwXCI7XG5pbXBvcnQgaGFydUFwaSBmcm9tIFwicHVibGljL3Byb2plY3RzL2hhcnUtYXBpLndlYnBcIjtcbmltcG9ydCBhc3Ryb1BhcGVyIGZyb20gXCJwdWJsaWMvcHJvamVjdHMvYXN0cm8tcGFwZXIud2VicFwiO1xuaW1wb3J0IGNyYWNrV2F0Y2ggZnJvbSBcInB1YmxpYy9wcm9qZWN0cy9cIlxuaW1wb3J0IG5leHRCb29rc3RvcmUgZnJvbSBcInB1YmxpYy9wcm9qZWN0cy9uZXh0LWJvb2tzdG9yZS53ZWJwXCI7XG5pbXBvcnQgc2hhZGNuQWRtaW4gZnJvbSBcInB1YmxpYy9wcm9qZWN0cy9zaGFkY24tYWRtaW4ud2VicFwiO1xuXG5jb25zdCBQcm9qZWN0U2VjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3Qgc2VjdGlvblJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGlzT25TY3JlZW4gPSB1c2VPblNjcmVlbihlbGVtZW50UmVmKTtcblxuICAvLyBTZXQgYWN0aXZlIGxpbmsgZm9yIHByb2plY3Qgc2VjdGlvblxuICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IHVzZVNjcm9sbEFjdGl2ZShzZWN0aW9uUmVmKTtcbiAgY29uc3QgeyBvblNlY3Rpb25DaGFuZ2UgfSA9IHVzZVNlY3Rpb24oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9qZWN0U2VjdGlvbiAmJiBvblNlY3Rpb25DaGFuZ2UhKFwicHJvamVjdHNcIik7XG4gIH0sIFtvblNlY3Rpb25DaGFuZ2UsIHByb2plY3RTZWN0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiByZWY9e3NlY3Rpb25SZWZ9IGlkPVwicHJvamVjdHNcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtdGl0bGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPFJvdWdoTm90YXRpb25cbiAgICAgICAgICB0eXBlPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICBjb2xvcj17YCR7dGhlbWUgPT09IFwibGlnaHRcIiA/IFwicmdiKDAsIDEyMiwgMTIyKVwiIDogXCJyZ2IoNSAyMDYgMTQ1KVwifWB9XG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgb3JkZXI9ezF9XG4gICAgICAgICAgc2hvdz17aXNPblNjcmVlbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmdcIj5GZWF0dXJlZCBQcm9qZWN0czwvaDI+XG4gICAgICAgIDwvUm91Z2hOb3RhdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdC1kZXNjIHRleHQtY2VudGVyIGJsb2NrIG1iLTRcIiByZWY9e2VsZW1lbnRSZWZ9PlxuICAgICAgICDigJxUYWxrIGlzIGNoZWFwLiBTaG93IG1lIHRoZSBjb2Rl4oCdPyBJIGdvdCB5b3UuIDxiciAvPlxuICAgICAgICBIZXJlIGFyZSBzb21lIG9mIG15IHByb2plY3RzIHlvdSBzaG91bGRuJ3QgbWlzc3NcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UHJvamVjdENhcmQga2V5PXtwcm9qZWN0LnRpdGxlfSBpbmRleD17aW5kZXh9IHByb2plY3Q9e3Byb2plY3R9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVycyB0ZXh0LWNlbnRlciBtYi0xNlwiPlxuICAgICAgICBPdGhlciBwcm9qZWN0cyBjYW4gYmUgZXhwbG9yZWQgaW57XCIgXCJ9XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbmRyYS1rdW1hci1kaGF5YWwvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB1bmRlcmxpbmUgbGluay1vdXRsaW5lIHRleHQtbWFycnNncmVlbiBkYXJrOnRleHQtY2FycmlncmVlbiB3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgID5cbiAgICAgICAgICBteSBnaXRodWIgcHJvZmlsZVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRlc2lnbiBTdHVkaW9cIixcbiAgICB0eXBlOiBcIkVuZCB0byBFbmRcIixcbiAgICBpbWFnZTogKFxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17YXN0cm9QYXBlcn1cbiAgICAgICAgc2l6ZXM9XCIxMDB2d1wiXG4gICAgICAgIGZpbGxcbiAgICAgICAgYWx0PVwiQXN0cm9QYXBlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBob3ZlcjpzY2FsZS0xMTAgb2JqZWN0LWNvdmVyXCJcbiAgICAgIC8+XG4gICAgKSxcbiAgICBkZXNjOiBcIldlYi1iYXNlZCBlZGl0b3IgdG8gbW9kZWwgdGhlIGluZGl2aWR1YWwgZGF0YSBmbG93cyBiZXR3ZWVuIGFwcGxpY2F0aW9ucy4gVGVhbSBvZiBhcHBsaWNhdGlvbnMgY29sbGFib3JhdGluZyB0byBtYWtlIGEgYnVzaW5lc3MgZnVuY3Rpb24gc21vb3RobHkuXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJUeXBlU2NyaXB0XCIsIFwiTm9kZUpzXCIsIFwiVGFpbHdpbmRDU1NcIiwgXCJNb25nb0RCXCIsXCJaT0RcIl0sXG4gICAgbGl2ZVVybDogXCJcIixcbiAgICBjb2RlVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXZlbmRyYS1LdW1hci1EaGF5YWwvZGVzaWduU3R1ZGlvXCIsXG4gICAgYmdDb2xvcjogXCJiZy1bIzlGRDBFM11cIixcbiAgICBnaXRodWJBcGk6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RldmVuZHJhLUt1bWFyLURoYXlhbC9kZXNpZ25TdHVkaW9cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNvY2lhbCBNZWRpYSBBcHBsaWNhdGlvblwiLFxuICAgIHR5cGU6IFwiRW5kIHRvIEVuZFwiLFxuICAgIGltYWdlOiAoXG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXthc3Ryb1BhcGVyfVxuICAgICAgICBzaXplcz1cIjEwMHZ3XCJcbiAgICAgICAgZmlsbFxuICAgICAgICBhbHQ9XCJBc3Ryb1BhcGVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGhvdmVyOnNjYWxlLTExMCBvYmplY3QtY292ZXJcIlxuICAgICAgLz5cbiAgICApLFxuICAgIGRlc2M6IFwiUGxhdGZvcm0gdG8gZGlzY3VzcyBHYW1lcyBJbmZvcm1hdGlvbiwgc3RyYXRlZ2llcywgYW5kIFN0YXR1c2VzLlwiLFxuICAgIHRhZ3M6IFtcIkh0bWxcIiwgXCJKYXZhU2NyaXB0XCIsIFwiRGphbmdvXCIsIFwiVGFpbHdpbmRDU1NcIiwgXCJQb3N0Z3JlU1FMXCJdLFxuICAgIGxpdmVVcmw6IFwiXCIsXG4gICAgY29kZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV2ZW5kcmEtS3VtYXItRGhheWFsL2hvbWVNYWluQnJhbmNoXCIsXG4gICAgYmdDb2xvcjogXCJiZy1bIzlGRDBFM11cIixcbiAgICBnaXRodWJBcGk6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RldmVuZHJhLUt1bWFyLURoYXlhbC9ob21lTWFpbkJyYW5jaFwiLFxuICB9LFxuICBcbiAgXG4gIFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFNlY3Rpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJSb3VnaE5vdGF0aW9uIiwidXNlVGhlbWUiLCJQcm9qZWN0Q2FyZCIsInVzZVNlY3Rpb24iLCJ1c2VPblNjcmVlbiIsInVzZVNjcm9sbEFjdGl2ZSIsImFzdHJvUGFwZXIiLCJQcm9qZWN0U2VjdGlvbiIsInRoZW1lIiwic2VjdGlvblJlZiIsImVsZW1lbnRSZWYiLCJpc09uU2NyZWVuIiwicHJvamVjdFNlY3Rpb24iLCJvblNlY3Rpb25DaGFuZ2UiLCJzZWN0aW9uIiwicmVmIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJ0eXBlIiwiY29sb3IiLCJzdHJva2VXaWR0aCIsIm9yZGVyIiwic2hvdyIsImgyIiwic3BhbiIsImJyIiwicHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJ0aXRsZSIsImEiLCJocmVmIiwiaW1hZ2UiLCJzcmMiLCJzaXplcyIsImZpbGwiLCJhbHQiLCJkZXNjIiwidGFncyIsImxpdmVVcmwiLCJjb2RlVXJsIiwiYmdDb2xvciIsImdpdGh1YkFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/ProjectSection.tsx\n"));

/***/ })

});