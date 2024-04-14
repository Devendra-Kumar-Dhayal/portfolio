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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_rough_notation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rough-notation */ \"./node_modules/react-rough-notation/dist/module.es.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ProjectCard */ \"./components/ProjectCard.tsx\");\n/* harmony import */ var context_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/section */ \"./context/section.tsx\");\n/* harmony import */ var hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useOnScreen */ \"./hooks/useOnScreen.ts\");\n/* harmony import */ var hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks/useScrollActive */ \"./hooks/useScrollActive.ts\");\n/* harmony import */ var public_projects_astro_paper_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! public/projects/astro-paper.webp */ \"./public/projects/astro-paper.webp\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ProjectSection = ()=>{\n    _s();\n    const { theme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const isOnScreen = (0,hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(elementRef);\n    // Set active link for project section\n    const projectSection = (0,hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(sectionRef);\n    const { onSectionChange } = (0,context_section__WEBPACK_IMPORTED_MODULE_6__.useSection)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        projectSection && onSectionChange(\"projects\");\n    }, [\n        onSectionChange,\n        projectSection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: sectionRef,\n        id: \"projects\",\n        className: \"section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"project-title text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_rough_notation__WEBPACK_IMPORTED_MODULE_3__.RoughNotation, {\n                    type: \"underline\",\n                    color: \"\".concat(theme === \"light\" ? \"rgb(0, 122, 122)\" : \"rgb(5 206 145)\"),\n                    strokeWidth: 2,\n                    order: 1,\n                    show: isOnScreen,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"section-heading\",\n                        children: \"Featured Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"project-desc text-center block mb-4\",\n                ref: elementRef,\n                children: [\n                    \"“Talk is cheap. Show me the code”? I got you. \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 55\n                    }, undefined),\n                    \"Here are some of my projects you shouldn't misss\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        index: index,\n                        project: project\n                    }, project.title, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"others text-center mb-16\",\n                children: [\n                    \"Other projects can be explored in\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/devendra-kumar-dhayal/\",\n                        className: \"font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap\",\n                        children: \"my github profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectSection, \"8Heb86wCV0Fy38KlS/PhJmjK3z0=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme,\n        hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        context_section__WEBPACK_IMPORTED_MODULE_6__.useSection\n    ];\n});\n_c = ProjectSection;\nconst projects = [\n    {\n        title: \"Design Studio\",\n        type: \"Frontend\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: public_projects_astro_paper_webp__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            sizes: \"100vw\",\n            fill: true,\n            alt: \"AstroPaper\",\n            className: \"transition-transform duration-500 hover:scale-110 object-cover\"\n        }, void 0, false, {\n            fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, undefined),\n        desc: \"Web-based editor to model the individual data flows between applications. Team of applications collaborating to make a business function smoothly.\",\n        tags: [\n            \"React\",\n            \"TypeScript\",\n            \"NodeJs\",\n            \"TailwindCSS\"\n        ],\n        liveUrl: \"\",\n        codeUrl: \"https://github.com/Devendra-Kumar-Dhayal/designStudio\",\n        bgColor: \"bg-[#9FD0E3]\",\n        githubApi: \"https://github.com/Devendra-Kumar-Dhayal/designStudio\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9Qcm9qZWN0U2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNXO0FBQ1c7QUFDZDtBQUVZO0FBQ047QUFDRDtBQUNRO0FBS007QUFJMUQsTUFBTVUsaUJBQTJCOztJQUMvQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHUCxxREFBUUE7SUFFMUIsTUFBTVEsYUFBYVYsNkNBQU1BLENBQWlCO0lBRTFDLE1BQU1XLGFBQWFYLDZDQUFNQSxDQUFpQjtJQUMxQyxNQUFNWSxhQUFhUCw2REFBV0EsQ0FBQ007SUFFL0Isc0NBQXNDO0lBQ3RDLE1BQU1FLGlCQUFpQlAsaUVBQWVBLENBQUNJO0lBQ3ZDLE1BQU0sRUFBRUksZUFBZSxFQUFFLEdBQUdWLDJEQUFVQTtJQUN0Q0wsZ0RBQVNBLENBQUM7UUFDUmMsa0JBQWtCQyxnQkFBaUI7SUFDckMsR0FBRztRQUFDQTtRQUFpQkQ7S0FBZTtJQUVwQyxxQkFDRSw4REFBQ0U7UUFBUUMsS0FBS047UUFBWU8sSUFBRztRQUFXQyxXQUFVOzswQkFDaEQsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDakIsK0RBQWFBO29CQUNabUIsTUFBSztvQkFDTEMsT0FBTyxHQUE2RCxPQUExRFosVUFBVSxVQUFVLHFCQUFxQjtvQkFDbkRhLGFBQWE7b0JBQ2JDLE9BQU87b0JBQ1BDLE1BQU1aOzhCQUVOLDRFQUFDYTt3QkFBR1AsV0FBVTtrQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3BDLDhEQUFDUTtnQkFBS1IsV0FBVTtnQkFBc0NGLEtBQUtMOztvQkFBWTtrQ0FDdkIsOERBQUNnQjs7Ozs7b0JBQUs7Ozs7Ozs7MEJBR3RELDhEQUFDUjtnQkFBSUQsV0FBVTswQkFDWlUsU0FBU0MsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQzVCLCtEQUFXQTt3QkFBcUI0QixPQUFPQTt3QkFBT0QsU0FBU0E7dUJBQXRDQSxRQUFRRSxLQUFLOzs7Ozs7Ozs7OzBCQUduQyw4REFBQ2I7Z0JBQUlELFdBQVU7O29CQUEyQjtvQkFDTjtrQ0FDbEMsOERBQUNlO3dCQUNDQyxNQUFLO3dCQUNMaEIsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0FoRE1WOztRQUNjTixpREFBUUE7UUFLUEcseURBQVdBO1FBR1BDLDZEQUFlQTtRQUNWRix1REFBVUE7OztLQVZsQ0k7QUFrRE4sTUFBTW9CLFdBQVc7SUFDZjtRQUNFSSxPQUFPO1FBQ1BaLE1BQU07UUFDTmUscUJBQ0UsOERBQUNyQyxtREFBS0E7WUFDSnNDLEtBQUs3Qix3RUFBVUE7WUFDZjhCLE9BQU07WUFDTkMsSUFBSTtZQUNKQyxLQUFJO1lBQ0pyQixXQUFVOzs7Ozs7UUFHZHNCLE1BQU07UUFDTkMsTUFBTTtZQUFDO1lBQVM7WUFBYztZQUFVO1NBQWM7UUFDdERDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtDQUtEO0FBRUQsK0RBQWVyQyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL1Byb2plY3RTZWN0aW9uLnRzeD8xOWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdWdoTm90YXRpb24gfSBmcm9tIFwicmVhY3Qtcm91Z2gtbm90YXRpb25cIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5cbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VTZWN0aW9uIH0gZnJvbSBcImNvbnRleHQvc2VjdGlvblwiO1xuaW1wb3J0IHVzZU9uU2NyZWVuIGZyb20gXCJob29rcy91c2VPblNjcmVlblwiO1xuaW1wb3J0IHVzZVNjcm9sbEFjdGl2ZSBmcm9tIFwiaG9va3MvdXNlU2Nyb2xsQWN0aXZlXCI7XG5cbmltcG9ydCB0ZXJtaW5hbFBvcnRmb2xpbyBmcm9tIFwicHVibGljL3Byb2plY3RzL3Rlcm1pbmFsLXBvcnRmb2xpby53ZWJwXCI7XG5pbXBvcnQgaGFydUZhc2hpb24gZnJvbSBcInB1YmxpYy9wcm9qZWN0cy9oYXJ1LWZhc2hpb24ud2VicFwiO1xuaW1wb3J0IGhhcnVBcGkgZnJvbSBcInB1YmxpYy9wcm9qZWN0cy9oYXJ1LWFwaS53ZWJwXCI7XG5pbXBvcnQgYXN0cm9QYXBlciBmcm9tIFwicHVibGljL3Byb2plY3RzL2FzdHJvLXBhcGVyLndlYnBcIjtcbmltcG9ydCBuZXh0Qm9va3N0b3JlIGZyb20gXCJwdWJsaWMvcHJvamVjdHMvbmV4dC1ib29rc3RvcmUud2VicFwiO1xuaW1wb3J0IHNoYWRjbkFkbWluIGZyb20gXCJwdWJsaWMvcHJvamVjdHMvc2hhZGNuLWFkbWluLndlYnBcIjtcblxuY29uc3QgUHJvamVjdFNlY3Rpb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuXG4gIGNvbnN0IHNlY3Rpb25SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBpc09uU2NyZWVuID0gdXNlT25TY3JlZW4oZWxlbWVudFJlZik7XG5cbiAgLy8gU2V0IGFjdGl2ZSBsaW5rIGZvciBwcm9qZWN0IHNlY3Rpb25cbiAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSB1c2VTY3JvbGxBY3RpdmUoc2VjdGlvblJlZik7XG4gIGNvbnN0IHsgb25TZWN0aW9uQ2hhbmdlIH0gPSB1c2VTZWN0aW9uKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvamVjdFNlY3Rpb24gJiYgb25TZWN0aW9uQ2hhbmdlIShcInByb2plY3RzXCIpO1xuICB9LCBbb25TZWN0aW9uQ2hhbmdlLCBwcm9qZWN0U2VjdGlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gcmVmPXtzZWN0aW9uUmVmfSBpZD1cInByb2plY3RzXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRpdGxlIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxSb3VnaE5vdGF0aW9uXG4gICAgICAgICAgdHlwZT1cInVuZGVybGluZVwiXG4gICAgICAgICAgY29sb3I9e2Ake3RoZW1lID09PSBcImxpZ2h0XCIgPyBcInJnYigwLCAxMjIsIDEyMilcIiA6IFwicmdiKDUgMjA2IDE0NSlcIn1gfVxuICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgIG9yZGVyPXsxfVxuICAgICAgICAgIHNob3c9e2lzT25TY3JlZW59XG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+RmVhdHVyZWQgUHJvamVjdHM8L2gyPlxuICAgICAgICA8L1JvdWdoTm90YXRpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3QtZGVzYyB0ZXh0LWNlbnRlciBibG9jayBtYi00XCIgcmVmPXtlbGVtZW50UmVmfT5cbiAgICAgICAg4oCcVGFsayBpcyBjaGVhcC4gU2hvdyBtZSB0aGUgY29kZeKAnT8gSSBnb3QgeW91LiA8YnIgLz5cbiAgICAgICAgSGVyZSBhcmUgc29tZSBvZiBteSBwcm9qZWN0cyB5b3Ugc2hvdWxkbid0IG1pc3NzXG4gICAgICA8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFByb2plY3RDYXJkIGtleT17cHJvamVjdC50aXRsZX0gaW5kZXg9e2luZGV4fSBwcm9qZWN0PXtwcm9qZWN0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlcnMgdGV4dC1jZW50ZXIgbWItMTZcIj5cbiAgICAgICAgT3RoZXIgcHJvamVjdHMgY2FuIGJlIGV4cGxvcmVkIGlue1wiIFwifVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGV2ZW5kcmEta3VtYXItZGhheWFsL1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdW5kZXJsaW5lIGxpbmstb3V0bGluZSB0ZXh0LW1hcnJzZ3JlZW4gZGFyazp0ZXh0LWNhcnJpZ3JlZW4gd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICA+XG4gICAgICAgICAgbXkgZ2l0aHViIHByb2ZpbGVcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEZXNpZ24gU3R1ZGlvXCIsXG4gICAgdHlwZTogXCJGcm9udGVuZFwiLFxuICAgIGltYWdlOiAoXG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXthc3Ryb1BhcGVyfVxuICAgICAgICBzaXplcz1cIjEwMHZ3XCJcbiAgICAgICAgZmlsbFxuICAgICAgICBhbHQ9XCJBc3Ryb1BhcGVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGhvdmVyOnNjYWxlLTExMCBvYmplY3QtY292ZXJcIlxuICAgICAgLz5cbiAgICApLFxuICAgIGRlc2M6IFwiV2ViLWJhc2VkIGVkaXRvciB0byBtb2RlbCB0aGUgaW5kaXZpZHVhbCBkYXRhIGZsb3dzIGJldHdlZW4gYXBwbGljYXRpb25zLiBUZWFtIG9mIGFwcGxpY2F0aW9ucyBjb2xsYWJvcmF0aW5nIHRvIG1ha2UgYSBidXNpbmVzcyBmdW5jdGlvbiBzbW9vdGhseS5cIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIlR5cGVTY3JpcHRcIiwgXCJOb2RlSnNcIiwgXCJUYWlsd2luZENTU1wiXSxcbiAgICBsaXZlVXJsOiBcIlwiLFxuICAgIGNvZGVVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RldmVuZHJhLUt1bWFyLURoYXlhbC9kZXNpZ25TdHVkaW9cIixcbiAgICBiZ0NvbG9yOiBcImJnLVsjOUZEMEUzXVwiLFxuICAgIGdpdGh1YkFwaTogXCJodHRwczovL2dpdGh1Yi5jb20vRGV2ZW5kcmEtS3VtYXItRGhheWFsL2Rlc2lnblN0dWRpb1wiLFxuICB9LFxuICBcbiAgXG4gIFxuICBcbl07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RTZWN0aW9uO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiUm91Z2hOb3RhdGlvbiIsInVzZVRoZW1lIiwiUHJvamVjdENhcmQiLCJ1c2VTZWN0aW9uIiwidXNlT25TY3JlZW4iLCJ1c2VTY3JvbGxBY3RpdmUiLCJhc3Ryb1BhcGVyIiwiUHJvamVjdFNlY3Rpb24iLCJ0aGVtZSIsInNlY3Rpb25SZWYiLCJlbGVtZW50UmVmIiwiaXNPblNjcmVlbiIsInByb2plY3RTZWN0aW9uIiwib25TZWN0aW9uQ2hhbmdlIiwic2VjdGlvbiIsInJlZiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwidHlwZSIsImNvbG9yIiwic3Ryb2tlV2lkdGgiLCJvcmRlciIsInNob3ciLCJoMiIsInNwYW4iLCJiciIsInByb2plY3RzIiwibWFwIiwicHJvamVjdCIsImluZGV4IiwidGl0bGUiLCJhIiwiaHJlZiIsImltYWdlIiwic3JjIiwic2l6ZXMiLCJmaWxsIiwiYWx0IiwiZGVzYyIsInRhZ3MiLCJsaXZlVXJsIiwiY29kZVVybCIsImJnQ29sb3IiLCJnaXRodWJBcGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/ProjectSection.tsx\n"));

/***/ })

});