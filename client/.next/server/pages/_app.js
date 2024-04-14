/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/filter.tsx":
/*!****************************!*\
  !*** ./context/filter.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProvideFilter: () => (/* binding */ ProvideFilter),\n/* harmony export */   filterContext: () => (/* binding */ filterContext),\n/* harmony export */   useFilter: () => (/* binding */ useFilter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst filterContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    searchText: \"\",\n    postLanguage: \"All\"\n});\nconst ProvideFilter = ({ children })=>{\n    const value = useProvideFilter();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(filterContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/nevdread/dev/portfolio/client/context/filter.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\nconst useFilter = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(filterContext);\nconst useProvideFilter = ()=>{\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [postLanguage, setPostLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const onSearch = (val)=>{\n        setSearchText(val);\n    };\n    const onLanguageChange = (val)=>{\n        setPostLanguage(val);\n    };\n    return {\n        searchText,\n        postLanguage,\n        onSearch,\n        onLanguageChange\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2ZpbHRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUU7QUFXNUQsTUFBTUksOEJBQWdCSCxvREFBYUEsQ0FBb0I7SUFDNURJLFlBQVk7SUFDWkMsY0FBYztBQUNoQixHQUFHO0FBRUksTUFBTUMsZ0JBQWdCLENBQUMsRUFBRUMsUUFBUSxFQUFpQztJQUN2RSxNQUFNQyxRQUFRQztJQUNkLHFCQUNFLDhEQUFDTixjQUFjTyxRQUFRO1FBQUNGLE9BQU9BO2tCQUFRRDs7Ozs7O0FBRTNDLEVBQUU7QUFFSyxNQUFNSSxZQUFZLElBQU1WLGlEQUFVQSxDQUFDRSxlQUFlO0FBRXpELE1BQU1NLG1CQUFtQjtJQUN2QixNQUFNLENBQUNMLFlBQVlRLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDRyxjQUFjUSxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQWU7SUFFL0QsTUFBTVksV0FBVyxDQUFDQztRQUNoQkgsY0FBY0c7SUFDaEI7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0Q7UUFDeEJGLGdCQUFnQkU7SUFDbEI7SUFFQSxPQUFPO1FBQ0xYO1FBQ0FDO1FBQ0FTO1FBQ0FFO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RldmVuZHJhZGhheWFsLmNvbS8uL2NvbnRleHQvZmlsdGVyLnRzeD80NWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgRmlsdGVySW5pdGlhbFR5cGUge1xuICBzZWFyY2hUZXh0OiBzdHJpbmc7XG4gIHBvc3RMYW5ndWFnZTogTGFuZ3VhZ2VUeXBlO1xuICBvblNlYXJjaD86ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgb25MYW5ndWFnZUNoYW5nZT86ICh2YWw6IExhbmd1YWdlVHlwZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgTGFuZ3VhZ2VUeXBlID0gXCJBbGxcIiB8IFwiRW5nbGlzaFwiIDtcblxuZXhwb3J0IGNvbnN0IGZpbHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEZpbHRlckluaXRpYWxUeXBlPih7XG4gIHNlYXJjaFRleHQ6IFwiXCIsXG4gIHBvc3RMYW5ndWFnZTogXCJBbGxcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgUHJvdmlkZUZpbHRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gdXNlUHJvdmlkZUZpbHRlcigpO1xuICByZXR1cm4gKFxuICAgIDxmaWx0ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvZmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VGaWx0ZXIgPSAoKSA9PiB1c2VDb250ZXh0KGZpbHRlckNvbnRleHQpO1xuXG5jb25zdCB1c2VQcm92aWRlRmlsdGVyID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bvc3RMYW5ndWFnZSwgc2V0UG9zdExhbmd1YWdlXSA9IHVzZVN0YXRlPExhbmd1YWdlVHlwZT4oXCJBbGxcIik7XG5cbiAgY29uc3Qgb25TZWFyY2ggPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWFyY2hUZXh0KHZhbCk7XG4gIH07XG5cbiAgY29uc3Qgb25MYW5ndWFnZUNoYW5nZSA9ICh2YWw6IExhbmd1YWdlVHlwZSkgPT4ge1xuICAgIHNldFBvc3RMYW5ndWFnZSh2YWwpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VhcmNoVGV4dCxcbiAgICBwb3N0TGFuZ3VhZ2UsXG4gICAgb25TZWFyY2gsXG4gICAgb25MYW5ndWFnZUNoYW5nZSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiZmlsdGVyQ29udGV4dCIsInNlYXJjaFRleHQiLCJwb3N0TGFuZ3VhZ2UiLCJQcm92aWRlRmlsdGVyIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInVzZVByb3ZpZGVGaWx0ZXIiLCJQcm92aWRlciIsInVzZUZpbHRlciIsInNldFNlYXJjaFRleHQiLCJzZXRQb3N0TGFuZ3VhZ2UiLCJvblNlYXJjaCIsInZhbCIsIm9uTGFuZ3VhZ2VDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/filter.tsx\n");

/***/ }),

/***/ "./context/section.tsx":
/*!*****************************!*\
  !*** ./context/section.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProvideSection: () => (/* binding */ ProvideSection),\n/* harmony export */   sectionContext: () => (/* binding */ sectionContext),\n/* harmony export */   useSection: () => (/* binding */ useSection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst sectionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    currentSection: \"\"\n});\nconst ProvideSection = ({ children })=>{\n    const value = useProvideSection();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sectionContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/nevdread/dev/portfolio/client/context/section.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\nconst useSection = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(sectionContext);\nconst useProvideSection = ()=>{\n    const [currentSection, setCurrentSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onSectionChange = (val)=>{\n        setCurrentSection(val);\n    };\n    return {\n        currentSection,\n        onSectionChange\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1FO0FBTzVELE1BQU1JLCtCQUFpQkgsb0RBQWFBLENBQXFCO0lBQzlESSxnQkFBZ0I7QUFDbEIsR0FBRztBQUVJLE1BQU1DLGlCQUFpQixDQUFDLEVBQUVDLFFBQVEsRUFBaUM7SUFDeEUsTUFBTUMsUUFBUUM7SUFDZCxxQkFDRSw4REFBQ0wsZUFBZU0sUUFBUTtRQUFDRixPQUFPQTtrQkFBUUQ7Ozs7OztBQUU1QyxFQUFFO0FBRUssTUFBTUksYUFBYSxJQUFNVCxpREFBVUEsQ0FBQ0UsZ0JBQWdCO0FBRTNELE1BQU1LLG9CQUFvQjtJQUN4QixNQUFNLENBQUNKLGdCQUFnQk8sa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFDO0lBRXJELE1BQU1VLGtCQUFrQixDQUFDQztRQUN2QkYsa0JBQWtCRTtJQUNwQjtJQUVBLE9BQU87UUFDTFQ7UUFDQVE7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2ZW5kcmFkaGF5YWwuY29tLy4vY29udGV4dC9zZWN0aW9uLnRzeD85MzFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgU2VjdGlvbkluaXRpYWxUeXBlIHtcbiAgY3VycmVudFNlY3Rpb246IHN0cmluZztcbiAgb25TZWN0aW9uQ2hhbmdlPzogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3Qgc2VjdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFNlY3Rpb25Jbml0aWFsVHlwZT4oe1xuICBjdXJyZW50U2VjdGlvbjogXCJcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgUHJvdmlkZVNlY3Rpb24gPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHVzZVByb3ZpZGVTZWN0aW9uKCk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvc2VjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlU2VjdGlvbiA9ICgpID0+IHVzZUNvbnRleHQoc2VjdGlvbkNvbnRleHQpO1xuXG5jb25zdCB1c2VQcm92aWRlU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRTZWN0aW9uLCBzZXRDdXJyZW50U2VjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBvblNlY3Rpb25DaGFuZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBzZXRDdXJyZW50U2VjdGlvbih2YWwpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3VycmVudFNlY3Rpb24sXG4gICAgb25TZWN0aW9uQ2hhbmdlLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJzZWN0aW9uQ29udGV4dCIsImN1cnJlbnRTZWN0aW9uIiwiUHJvdmlkZVNlY3Rpb24iLCJjaGlsZHJlbiIsInZhbHVlIiwidXNlUHJvdmlkZVNlY3Rpb24iLCJQcm92aWRlciIsInVzZVNlY3Rpb24iLCJzZXRDdXJyZW50U2VjdGlvbiIsIm9uU2VjdGlvbkNoYW5nZSIsInZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/section.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var context_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/filter */ \"./context/filter.tsx\");\n/* harmony import */ var context_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/section */ \"./context/section.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"mousemove\", (e)=>{\n            const mouseX = e.clientX;\n            const mouseY = e.clientY;\n            gsap__WEBPACK_IMPORTED_MODULE_7___default().to(cursorRef.current, {\n                x: mouseX,\n                y: mouseY,\n                opacity: 1,\n                delay: 0\n            });\n        });\n        const hideCursor = ()=>{\n            gsap__WEBPACK_IMPORTED_MODULE_7___default().to(cursorRef.current, {\n                opacity: 0\n            });\n        };\n        const showCursor = ()=>{\n            gsap__WEBPACK_IMPORTED_MODULE_7___default().to(cursorRef.current, {\n                opacity: 1\n            });\n        };\n        document.addEventListener(\"mouseleave\", hideCursor);\n        document.addEventListener(\"mousedown\", hideCursor);\n        document.addEventListener(\"mouseup\", showCursor);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {\n                id: \"google-analytics\",\n                strategy: \"lazyOnload\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`\n            }, void 0, false, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/pages/_app.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {\n                id: \"google-analytics-script\",\n                strategy: \"lazyOnload\",\n                children: `\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {\n        page_path: window.location.pathname,\n        });\n    `\n            }, void 0, false, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/pages/_app.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"/Users/nevdread/dev/portfolio/client/pages/_app.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/pages/_app.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: cursorRef,\n                className: \"hidden lg:block w-12 h-12 opacity-0 pointer-events-none rounded-full border-2 border-marrsgreen dark:border-carrigreen z-[9999] fixed -translate-x-1/2 -translate-y-1/2\"\n            }, void 0, false, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/pages/_app.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                attribute: \"class\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context_filter__WEBPACK_IMPORTED_MODULE_4__.ProvideFilter, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context_section__WEBPACK_IMPORTED_MODULE_5__.ProvideSection, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/nevdread/dev/portfolio/client/pages/_app.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nevdread/dev/portfolio/client/pages/_app.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nevdread/dev/portfolio/client/pages/_app.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nevdread/dev/portfolio/client/pages/_app.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDYjtBQUVlO0FBQ0c7QUFDRTtBQUVsQjtBQUVQO0FBQ1M7QUFFakMsU0FBU1EsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxNQUFNQyxZQUFZViw2Q0FBTUEsQ0FBQztJQUV6QkQsZ0RBQVNBLENBQUM7UUFDUlksU0FBU0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDQztZQUN0QyxNQUFNQyxTQUFTRCxFQUFFRSxPQUFPO1lBQ3hCLE1BQU1DLFNBQVNILEVBQUVJLE9BQU87WUFDeEJaLDhDQUFPLENBQUNLLFVBQVVTLE9BQU8sRUFBRTtnQkFDekJDLEdBQUdOO2dCQUNITyxHQUFHTDtnQkFDSE0sU0FBUztnQkFDVEMsT0FBTztZQUNUO1FBQ0Y7UUFFQSxNQUFNQyxhQUFhO1lBQ2pCbkIsOENBQU8sQ0FBQ0ssVUFBVVMsT0FBTyxFQUFFO2dCQUFFRyxTQUFTO1lBQUU7UUFDMUM7UUFFQSxNQUFNRyxhQUFhO1lBQ2pCcEIsOENBQU8sQ0FBQ0ssVUFBVVMsT0FBTyxFQUFFO2dCQUFFRyxTQUFTO1lBQUU7UUFDMUM7UUFFQVgsU0FBU0MsZ0JBQWdCLENBQUMsY0FBY1k7UUFDeENiLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFZO1FBQ3ZDYixTQUFTQyxnQkFBZ0IsQ0FBQyxXQUFXYTtJQUN2QyxHQUFHLEVBQUU7SUFDTCxxQkFDRTs7MEJBQ0UsOERBQUNuQixvREFBTUE7Z0JBQ0xvQixJQUFHO2dCQUNIQyxVQUFTO2dCQUNUQyxLQUFLLENBQUMsNENBQTRDLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsNEJBQTRCLENBQUMsQ0FBQzs7Ozs7OzBCQUdoRyw4REFBQ3pCLG9EQUFNQTtnQkFBQ29CLElBQUc7Z0JBQTBCQyxVQUFTOzBCQUMzQyxDQUFDOzs7O3dCQUljLEVBQUVFLFFBQVFDLEdBQUcsQ0FBQ0MsNEJBQTRCLENBQUM7OztJQUcvRCxDQUFDOzs7Ozs7MEJBRUMsOERBQUM5QixrREFBSUE7MEJBQ0gsNEVBQUMrQjtvQkFBS0MsTUFBSztvQkFBV0MsU0FBUTs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDQztnQkFDQ0MsS0FBSzFCO2dCQUNMMkIsV0FBVTs7Ozs7OzBCQUVaLDhEQUFDbkMsc0RBQWFBO2dCQUFDb0MsV0FBVTswQkFDdkIsNEVBQUNuQyx5REFBYUE7OEJBQ1osNEVBQUNDLDJEQUFjQTtrQ0FDYiw0RUFBQ0k7NEJBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RldmVuZHJhZGhheWFsLmNvbS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB7IFByb3ZpZGVGaWx0ZXIgfSBmcm9tIFwiY29udGV4dC9maWx0ZXJcIjtcbmltcG9ydCB7IFByb3ZpZGVTZWN0aW9uIH0gZnJvbSBcImNvbnRleHQvc2VjdGlvblwiO1xuXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgY3Vyc29yUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgbW91c2VYID0gZS5jbGllbnRYO1xuICAgICAgY29uc3QgbW91c2VZID0gZS5jbGllbnRZO1xuICAgICAgZ3NhcC50byhjdXJzb3JSZWYuY3VycmVudCwge1xuICAgICAgICB4OiBtb3VzZVgsXG4gICAgICAgIHk6IG1vdXNlWSxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhpZGVDdXJzb3IgPSAoKSA9PiB7XG4gICAgICBnc2FwLnRvKGN1cnNvclJlZi5jdXJyZW50LCB7IG9wYWNpdHk6IDAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dDdXJzb3IgPSAoKSA9PiB7XG4gICAgICBnc2FwLnRvKGN1cnNvclJlZi5jdXJyZW50LCB7IG9wYWNpdHk6IDEgfSk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVDdXJzb3IpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGlkZUN1cnNvcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc2hvd0N1cnNvcik7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNjcmlwdFxuICAgICAgICBpZD1cImdvb2dsZS1hbmFseXRpY3NcIlxuICAgICAgICBzdHJhdGVneT1cImxhenlPbmxvYWRcIlxuICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDU31gfVxuICAgICAgLz5cblxuICAgICAgPFNjcmlwdCBpZD1cImdvb2dsZS1hbmFseXRpY3Mtc2NyaXB0XCIgc3RyYXRlZ3k9XCJsYXp5T25sb2FkXCI+XG4gICAgICAgIHtgXG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgIGd0YWcoJ2NvbmZpZycsICcke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1N9Jywge1xuICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgfSk7XG4gICAgYH1cbiAgICAgIDwvU2NyaXB0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17Y3Vyc29yUmVmfVxuICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgdy0xMiBoLTEyIG9wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItbWFycnNncmVlbiBkYXJrOmJvcmRlci1jYXJyaWdyZWVuIHotWzk5OTldIGZpeGVkIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMlwiXG4gICAgICAvPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgYXR0cmlidXRlPVwiY2xhc3NcIj5cbiAgICAgICAgPFByb3ZpZGVGaWx0ZXI+XG4gICAgICAgICAgPFByb3ZpZGVTZWN0aW9uPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvUHJvdmlkZVNlY3Rpb24+XG4gICAgICAgIDwvUHJvdmlkZUZpbHRlcj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiSGVhZCIsIlRoZW1lUHJvdmlkZXIiLCJQcm92aWRlRmlsdGVyIiwiUHJvdmlkZVNlY3Rpb24iLCJnc2FwIiwiU2NyaXB0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJzb3JSZWYiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibW91c2VYIiwiY2xpZW50WCIsIm1vdXNlWSIsImNsaWVudFkiLCJ0byIsImN1cnJlbnQiLCJ4IiwieSIsIm9wYWNpdHkiLCJkZWxheSIsImhpZGVDdXJzb3IiLCJzaG93Q3Vyc29yIiwiaWQiLCJzdHJhdGVneSIsInNyYyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwiYXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();