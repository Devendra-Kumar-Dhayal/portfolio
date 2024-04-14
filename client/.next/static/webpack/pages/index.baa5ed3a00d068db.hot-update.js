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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_rough_notation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rough-notation */ \"./node_modules/react-rough-notation/dist/module.es.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ProjectCard */ \"./components/ProjectCard.tsx\");\n/* harmony import */ var context_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/section */ \"./context/section.tsx\");\n/* harmony import */ var hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useOnScreen */ \"./hooks/useOnScreen.ts\");\n/* harmony import */ var hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks/useScrollActive */ \"./hooks/useScrollActive.ts\");\n/* harmony import */ var public_projects_astro_paper_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! public/projects/astro-paper.webp */ \"./public/projects/astro-paper.webp\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ProjectSection = ()=>{\n    _s();\n    const { theme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const isOnScreen = (0,hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(elementRef);\n    // Set active link for project section\n    const projectSection = (0,hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(sectionRef);\n    const { onSectionChange } = (0,context_section__WEBPACK_IMPORTED_MODULE_6__.useSection)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        projectSection && onSectionChange(\"projects\");\n    }, [\n        onSectionChange,\n        projectSection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: sectionRef,\n        id: \"projects\",\n        className: \"section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"project-title text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_rough_notation__WEBPACK_IMPORTED_MODULE_3__.RoughNotation, {\n                    type: \"underline\",\n                    color: \"\".concat(theme === \"light\" ? \"rgb(0, 122, 122)\" : \"rgb(5 206 145)\"),\n                    strokeWidth: 2,\n                    order: 1,\n                    show: isOnScreen,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"section-heading\",\n                        children: \"Featured Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"project-desc text-center block mb-4\",\n                ref: elementRef,\n                children: [\n                    \"“Talk is cheap. Show me the code”? I got you. \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 55\n                    }, undefined),\n                    \"Here are some of my projects you shouldn't misss\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        index: index,\n                        project: project\n                    }, project.title, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"others text-center mb-16\",\n                children: [\n                    \"Other projects can be explored in\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/devendra-kumar-dhayal/\",\n                        className: \"font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap\",\n                        children: \"my github profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectSection, \"8Heb86wCV0Fy38KlS/PhJmjK3z0=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme,\n        hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        context_section__WEBPACK_IMPORTED_MODULE_6__.useSection\n    ];\n});\n_c = ProjectSection;\nconst projects = [\n    {\n        title: \"Design Studio\",\n        type: \"End to End\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: public_projects_astro_paper_webp__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            sizes: \"100vw\",\n            fill: true,\n            alt: \"AstroPaper\",\n            className: \"transition-transform duration-500 hover:scale-110 object-cover\"\n        }, void 0, false, {\n            fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, undefined),\n        desc: \"Web-based editor to model the individual data flows between applications. Team of applications collaborating to make a business function smoothly.\",\n        tags: [\n            \"React\",\n            \"TypeScript\",\n            \"NodeJs\",\n            \"TailwindCSS\",\n            \"MongoDB\",\n            \"ZOD\"\n        ],\n        liveUrl: \"\",\n        codeUrl: \"https://github.com/Devendra-Kumar-Dhayal/designStudio\",\n        bgColor: \"bg-[#9FD0E3]\",\n        githubApi: \"https://github.com/Devendra-Kumar-Dhayal/designStudio\"\n    },\n    {\n        title: \"Social Media Application\",\n        type: \"End to End\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: public_projects_astro_paper_webp__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            sizes: \"100vw\",\n            fill: true,\n            alt: \"AstroPaper\",\n            className: \"transition-transform duration-500 hover:scale-110 object-cover\"\n        }, void 0, false, {\n            fileName: \"/Users/nevdread/dev/portfolio/client/sections/ProjectSection.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, undefined),\n        desc: \"Platform to discuss Games Information, strategies, and Statuses.\",\n        tags: [\n            \"React\",\n            \"JavaScript\",\n            \"NodeJs\",\n            \"TailwindCSS\",\n            \"MongoDB\",\n            \"ZOD\"\n        ],\n        liveUrl: \"\",\n        codeUrl: \"https://github.com/Devendra-Kumar-Dhayal/homeMainBranch\",\n        bgColor: \"bg-[#9FD0E3]\",\n        githubApi: \"https://github.com/Devendra-Kumar-Dhayal/designStudio\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9Qcm9qZWN0U2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNXO0FBQ1c7QUFDZDtBQUVZO0FBQ047QUFDRDtBQUNRO0FBS007QUFJMUQsTUFBTVUsaUJBQTJCOztJQUMvQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHUCxxREFBUUE7SUFFMUIsTUFBTVEsYUFBYVYsNkNBQU1BLENBQWlCO0lBRTFDLE1BQU1XLGFBQWFYLDZDQUFNQSxDQUFpQjtJQUMxQyxNQUFNWSxhQUFhUCw2REFBV0EsQ0FBQ007SUFFL0Isc0NBQXNDO0lBQ3RDLE1BQU1FLGlCQUFpQlAsaUVBQWVBLENBQUNJO0lBQ3ZDLE1BQU0sRUFBRUksZUFBZSxFQUFFLEdBQUdWLDJEQUFVQTtJQUN0Q0wsZ0RBQVNBLENBQUM7UUFDUmMsa0JBQWtCQyxnQkFBaUI7SUFDckMsR0FBRztRQUFDQTtRQUFpQkQ7S0FBZTtJQUVwQyxxQkFDRSw4REFBQ0U7UUFBUUMsS0FBS047UUFBWU8sSUFBRztRQUFXQyxXQUFVOzswQkFDaEQsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDakIsK0RBQWFBO29CQUNabUIsTUFBSztvQkFDTEMsT0FBTyxHQUE2RCxPQUExRFosVUFBVSxVQUFVLHFCQUFxQjtvQkFDbkRhLGFBQWE7b0JBQ2JDLE9BQU87b0JBQ1BDLE1BQU1aOzhCQUVOLDRFQUFDYTt3QkFBR1AsV0FBVTtrQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3BDLDhEQUFDUTtnQkFBS1IsV0FBVTtnQkFBc0NGLEtBQUtMOztvQkFBWTtrQ0FDdkIsOERBQUNnQjs7Ozs7b0JBQUs7Ozs7Ozs7MEJBR3RELDhEQUFDUjtnQkFBSUQsV0FBVTswQkFDWlUsU0FBU0MsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQzVCLCtEQUFXQTt3QkFBcUI0QixPQUFPQTt3QkFBT0QsU0FBU0E7dUJBQXRDQSxRQUFRRSxLQUFLOzs7Ozs7Ozs7OzBCQUduQyw4REFBQ2I7Z0JBQUlELFdBQVU7O29CQUEyQjtvQkFDTjtrQ0FDbEMsOERBQUNlO3dCQUNDQyxNQUFLO3dCQUNMaEIsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0FoRE1WOztRQUNjTixpREFBUUE7UUFLUEcseURBQVdBO1FBR1BDLDZEQUFlQTtRQUNWRix1REFBVUE7OztLQVZsQ0k7QUFrRE4sTUFBTW9CLFdBQVc7SUFDZjtRQUNFSSxPQUFPO1FBQ1BaLE1BQU07UUFDTmUscUJBQ0UsOERBQUNyQyxtREFBS0E7WUFDSnNDLEtBQUs3Qix3RUFBVUE7WUFDZjhCLE9BQU07WUFDTkMsSUFBSTtZQUNKQyxLQUFJO1lBQ0pyQixXQUFVOzs7Ozs7UUFHZHNCLE1BQU07UUFDTkMsTUFBTTtZQUFDO1lBQVM7WUFBYztZQUFVO1lBQWU7WUFBVTtTQUFNO1FBQ3ZFQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7SUFDQTtRQUNFYixPQUFPO1FBQ1BaLE1BQU07UUFDTmUscUJBQ0UsOERBQUNyQyxtREFBS0E7WUFDSnNDLEtBQUs3Qix3RUFBVUE7WUFDZjhCLE9BQU07WUFDTkMsSUFBSTtZQUNKQyxLQUFJO1lBQ0pyQixXQUFVOzs7Ozs7UUFHZHNCLE1BQU07UUFDTkMsTUFBTTtZQUFDO1lBQVM7WUFBYztZQUFVO1lBQWU7WUFBVTtTQUFNO1FBQ3ZFQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7Q0FJRDtBQUVELCtEQUFlckMsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9Qcm9qZWN0U2VjdGlvbi50c3g/MTljZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3VnaE5vdGF0aW9uIH0gZnJvbSBcInJlYWN0LXJvdWdoLW5vdGF0aW9uXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlU2VjdGlvbiB9IGZyb20gXCJjb250ZXh0L3NlY3Rpb25cIjtcbmltcG9ydCB1c2VPblNjcmVlbiBmcm9tIFwiaG9va3MvdXNlT25TY3JlZW5cIjtcbmltcG9ydCB1c2VTY3JvbGxBY3RpdmUgZnJvbSBcImhvb2tzL3VzZVNjcm9sbEFjdGl2ZVwiO1xuXG5pbXBvcnQgdGVybWluYWxQb3J0Zm9saW8gZnJvbSBcInB1YmxpYy9wcm9qZWN0cy90ZXJtaW5hbC1wb3J0Zm9saW8ud2VicFwiO1xuaW1wb3J0IGhhcnVGYXNoaW9uIGZyb20gXCJwdWJsaWMvcHJvamVjdHMvaGFydS1mYXNoaW9uLndlYnBcIjtcbmltcG9ydCBoYXJ1QXBpIGZyb20gXCJwdWJsaWMvcHJvamVjdHMvaGFydS1hcGkud2VicFwiO1xuaW1wb3J0IGFzdHJvUGFwZXIgZnJvbSBcInB1YmxpYy9wcm9qZWN0cy9hc3Ryby1wYXBlci53ZWJwXCI7XG5pbXBvcnQgbmV4dEJvb2tzdG9yZSBmcm9tIFwicHVibGljL3Byb2plY3RzL25leHQtYm9va3N0b3JlLndlYnBcIjtcbmltcG9ydCBzaGFkY25BZG1pbiBmcm9tIFwicHVibGljL3Byb2plY3RzL3NoYWRjbi1hZG1pbi53ZWJwXCI7XG5cbmNvbnN0IFByb2plY3RTZWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBzZWN0aW9uUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgaXNPblNjcmVlbiA9IHVzZU9uU2NyZWVuKGVsZW1lbnRSZWYpO1xuXG4gIC8vIFNldCBhY3RpdmUgbGluayBmb3IgcHJvamVjdCBzZWN0aW9uXG4gIGNvbnN0IHByb2plY3RTZWN0aW9uID0gdXNlU2Nyb2xsQWN0aXZlKHNlY3Rpb25SZWYpO1xuICBjb25zdCB7IG9uU2VjdGlvbkNoYW5nZSB9ID0gdXNlU2VjdGlvbigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb2plY3RTZWN0aW9uICYmIG9uU2VjdGlvbkNoYW5nZSEoXCJwcm9qZWN0c1wiKTtcbiAgfSwgW29uU2VjdGlvbkNoYW5nZSwgcHJvamVjdFNlY3Rpb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHJlZj17c2VjdGlvblJlZn0gaWQ9XCJwcm9qZWN0c1wiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aXRsZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8Um91Z2hOb3RhdGlvblxuICAgICAgICAgIHR5cGU9XCJ1bmRlcmxpbmVcIlxuICAgICAgICAgIGNvbG9yPXtgJHt0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJyZ2IoMCwgMTIyLCAxMjIpXCIgOiBcInJnYig1IDIwNiAxNDUpXCJ9YH1cbiAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICBvcmRlcj17MX1cbiAgICAgICAgICBzaG93PXtpc09uU2NyZWVufVxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPkZlYXR1cmVkIFByb2plY3RzPC9oMj5cbiAgICAgICAgPC9Sb3VnaE5vdGF0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LWRlc2MgdGV4dC1jZW50ZXIgYmxvY2sgbWItNFwiIHJlZj17ZWxlbWVudFJlZn0+XG4gICAgICAgIOKAnFRhbGsgaXMgY2hlYXAuIFNob3cgbWUgdGhlIGNvZGXigJ0/IEkgZ290IHlvdS4gPGJyIC8+XG4gICAgICAgIEhlcmUgYXJlIHNvbWUgb2YgbXkgcHJvamVjdHMgeW91IHNob3VsZG4ndCBtaXNzc1xuICAgICAgPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxQcm9qZWN0Q2FyZCBrZXk9e3Byb2plY3QudGl0bGV9IGluZGV4PXtpbmRleH0gcHJvamVjdD17cHJvamVjdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzIHRleHQtY2VudGVyIG1iLTE2XCI+XG4gICAgICAgIE90aGVyIHByb2plY3RzIGNhbiBiZSBleHBsb3JlZCBpbntcIiBcIn1cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RldmVuZHJhLWt1bWFyLWRoYXlhbC9cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHVuZGVybGluZSBsaW5rLW91dGxpbmUgdGV4dC1tYXJyc2dyZWVuIGRhcms6dGV4dC1jYXJyaWdyZWVuIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgPlxuICAgICAgICAgIG15IGdpdGh1YiBwcm9maWxlXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGVzaWduIFN0dWRpb1wiLFxuICAgIHR5cGU6IFwiRW5kIHRvIEVuZFwiLFxuICAgIGltYWdlOiAoXG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXthc3Ryb1BhcGVyfVxuICAgICAgICBzaXplcz1cIjEwMHZ3XCJcbiAgICAgICAgZmlsbFxuICAgICAgICBhbHQ9XCJBc3Ryb1BhcGVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGhvdmVyOnNjYWxlLTExMCBvYmplY3QtY292ZXJcIlxuICAgICAgLz5cbiAgICApLFxuICAgIGRlc2M6IFwiV2ViLWJhc2VkIGVkaXRvciB0byBtb2RlbCB0aGUgaW5kaXZpZHVhbCBkYXRhIGZsb3dzIGJldHdlZW4gYXBwbGljYXRpb25zLiBUZWFtIG9mIGFwcGxpY2F0aW9ucyBjb2xsYWJvcmF0aW5nIHRvIG1ha2UgYSBidXNpbmVzcyBmdW5jdGlvbiBzbW9vdGhseS5cIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIlR5cGVTY3JpcHRcIiwgXCJOb2RlSnNcIiwgXCJUYWlsd2luZENTU1wiLCBcIk1vbmdvREJcIixcIlpPRFwiXSxcbiAgICBsaXZlVXJsOiBcIlwiLFxuICAgIGNvZGVVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RldmVuZHJhLUt1bWFyLURoYXlhbC9kZXNpZ25TdHVkaW9cIixcbiAgICBiZ0NvbG9yOiBcImJnLVsjOUZEMEUzXVwiLFxuICAgIGdpdGh1YkFwaTogXCJodHRwczovL2dpdGh1Yi5jb20vRGV2ZW5kcmEtS3VtYXItRGhheWFsL2Rlc2lnblN0dWRpb1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU29jaWFsIE1lZGlhIEFwcGxpY2F0aW9uXCIsXG4gICAgdHlwZTogXCJFbmQgdG8gRW5kXCIsXG4gICAgaW1hZ2U6IChcbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2FzdHJvUGFwZXJ9XG4gICAgICAgIHNpemVzPVwiMTAwdndcIlxuICAgICAgICBmaWxsXG4gICAgICAgIGFsdD1cIkFzdHJvUGFwZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgaG92ZXI6c2NhbGUtMTEwIG9iamVjdC1jb3ZlclwiXG4gICAgICAvPlxuICAgICksXG4gICAgZGVzYzogXCJQbGF0Zm9ybSB0byBkaXNjdXNzIEdhbWVzIEluZm9ybWF0aW9uLCBzdHJhdGVnaWVzLCBhbmQgU3RhdHVzZXMuXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJKYXZhU2NyaXB0XCIsIFwiTm9kZUpzXCIsIFwiVGFpbHdpbmRDU1NcIiwgXCJNb25nb0RCXCIsXCJaT0RcIl0sXG4gICAgbGl2ZVVybDogXCJcIixcbiAgICBjb2RlVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXZlbmRyYS1LdW1hci1EaGF5YWwvaG9tZU1haW5CcmFuY2hcIixcbiAgICBiZ0NvbG9yOiBcImJnLVsjOUZEMEUzXVwiLFxuICAgIGdpdGh1YkFwaTogXCJodHRwczovL2dpdGh1Yi5jb20vRGV2ZW5kcmEtS3VtYXItRGhheWFsL2Rlc2lnblN0dWRpb1wiLFxuICB9LFxuICBcbiAgXG4gIFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFNlY3Rpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJSb3VnaE5vdGF0aW9uIiwidXNlVGhlbWUiLCJQcm9qZWN0Q2FyZCIsInVzZVNlY3Rpb24iLCJ1c2VPblNjcmVlbiIsInVzZVNjcm9sbEFjdGl2ZSIsImFzdHJvUGFwZXIiLCJQcm9qZWN0U2VjdGlvbiIsInRoZW1lIiwic2VjdGlvblJlZiIsImVsZW1lbnRSZWYiLCJpc09uU2NyZWVuIiwicHJvamVjdFNlY3Rpb24iLCJvblNlY3Rpb25DaGFuZ2UiLCJzZWN0aW9uIiwicmVmIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJ0eXBlIiwiY29sb3IiLCJzdHJva2VXaWR0aCIsIm9yZGVyIiwic2hvdyIsImgyIiwic3BhbiIsImJyIiwicHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJ0aXRsZSIsImEiLCJocmVmIiwiaW1hZ2UiLCJzcmMiLCJzaXplcyIsImZpbGwiLCJhbHQiLCJkZXNjIiwidGFncyIsImxpdmVVcmwiLCJjb2RlVXJsIiwiYmdDb2xvciIsImdpdGh1YkFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/ProjectSection.tsx\n"));

/***/ })

});