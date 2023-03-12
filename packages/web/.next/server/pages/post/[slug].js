"use strict";
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
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./lib/sanityClient.ts":
/*!*****************************!*\
  !*** ./lib/sanityClient.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst projectId = \"hrwr0yts\";\nconst dataset = \"production\";\nconst apiVersion = \"2023-03-12\";\nconst client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    projectId,\n    dataset,\n    apiVersion,\n    useCdn: false\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2FuaXR5Q2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBRTNDLE1BQU1DLFlBQVlDLFVBQXlDO0FBQzNELE1BQU1HLFVBQVVILFlBQXNDO0FBQ3RELE1BQU1LLGFBQWFMLFlBQTBDO0FBRTdELE1BQU1PLFNBQVNULHlEQUFZQSxDQUFDO0lBQ3hCQztJQUNBSTtJQUNBRTtJQUNBRyxRQUFRLEtBQUs7QUFDakI7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL2xpYi9zYW5pdHlDbGllbnQudHM/NjQyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICduZXh0LXNhbml0eSc7XG5cbmNvbnN0IHByb2plY3RJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEO1xuY29uc3QgZGF0YXNldCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUO1xuY29uc3QgYXBpVmVyc2lvbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9BUElfVkVSU0lPTjtcblxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICBwcm9qZWN0SWQsXG4gICAgZGF0YXNldCxcbiAgICBhcGlWZXJzaW9uLCAvLyBodHRwczovL3d3dy5zYW5pdHkuaW8vZG9jcy9hcGktdmVyc2lvbmluZ1xuICAgIHVzZUNkbjogZmFsc2UsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsImRhdGFzZXQiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsImFwaVZlcnNpb24iLCJORVhUX1BVQkxJQ19TQU5JVFlfQVBJX1ZFUlNJT04iLCJjbGllbnQiLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/sanityClient.ts\n");

/***/ }),

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/sanityClient */ \"./lib/sanityClient.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([groq__WEBPACK_IMPORTED_MODULE_1__, _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__]);\n([groq__WEBPACK_IMPORTED_MODULE_1__, _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n//import { PortableText } from '@portabletext/react';\n\nasync function getStaticPaths() {\n    const paths = await _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_1__[\"default\"]`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_1__[\"default\"]`*[_type == \"post\" && slug.current == $slug][0]{ title, date, timezone, location, address, content }`, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            if (!value?.asset?._ref) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/kmavis/Desktop/Personal/kayleesroadtrip-2023/packages/web/pages/post/[slug].tsx\",\n                lineNumber: 40,\n                columnNumber: 17\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ post  })=>{\n    const { title , date , timezone , location , address , content  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: title\n        }, void 0, false, {\n            fileName: \"/Users/kmavis/Desktop/Personal/kayleesroadtrip-2023/packages/web/pages/post/[slug].tsx\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kmavis/Desktop/Personal/kayleesroadtrip-2023/packages/web/pages/post/[slug].tsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUN3QjtBQUNoRCxxREFBcUQ7QUFDSDtBQUUzQyxlQUFlRyxpQkFBaUI7SUFDbkMsTUFBTUMsUUFBUSxNQUFNRiwrREFBa0IsQ0FBQ0YsNENBQUksQ0FBQywwREFBMEQsQ0FBQztJQUV2RyxPQUFPO1FBQ0hJLE9BQU9BLE1BQU1FLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO2dCQUFFQyxRQUFRO29CQUFFRDtnQkFBSztZQUFFO1FBQy9DRSxVQUFVLElBQUk7SUFDbEI7QUFDSixDQUFDO0FBRU0sZUFBZUMsZUFBZUMsT0FBTyxFQUFFO0lBQzFDLDJFQUEyRTtJQUMzRSxNQUFNLEVBQUVKLE1BQU8sR0FBRSxFQUFFLEdBQUdJLFFBQVFILE1BQU07SUFDcEMsTUFBTUksT0FBTyxNQUFNViwrREFBa0IsQ0FDakNGLDRDQUFJLENBQUMsbUdBQW1HLENBQUMsRUFDekc7UUFBRU87SUFBSztJQUVYLE9BQU87UUFDSE0sT0FBTztZQUNIRDtRQUNKO0lBQ0o7QUFDSixDQUFDO0FBRUQsU0FBU0UsT0FBT0MsTUFBTSxFQUFFO0lBQ3BCLE9BQU9kLHdEQUFlQSxDQUFDQyx5REFBWUEsRUFBRWMsS0FBSyxDQUFDRDtBQUMvQztBQUVBLE1BQU1FLGVBQWU7SUFDakJDLE9BQU87UUFDSEYsT0FBTyxDQUFDLEVBQUVHLE1BQUssRUFBRSxHQUFLO1lBQ2xCLElBQUksQ0FBQ0EsT0FBT0MsT0FBT0MsTUFBTTtnQkFDckIsT0FBTyxJQUFJO1lBQ2YsQ0FBQztZQUNELHFCQUNJLDhEQUFDQztnQkFDR0MsS0FBS0osTUFBTUksR0FBRyxJQUFJO2dCQUNsQkMsU0FBUTtnQkFDUkMsS0FBS1gsT0FBT0ssT0FBT08sS0FBSyxDQUFDLEtBQUtDLE1BQU0sQ0FBQyxLQUFLQyxHQUFHLENBQUMsT0FBT0MsSUFBSSxDQUFDOzs7Ozs7UUFHdEU7SUFDSjtBQUNKO0FBYUEsTUFBTUMsT0FBNEIsQ0FBQyxFQUFFbEIsS0FBSSxFQUFFLEdBQUs7SUFDNUMsTUFBTSxFQUFFbUIsTUFBSyxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFQyxRQUFPLEVBQUVDLFFBQU8sRUFBRSxHQUFHeEI7SUFDOUQscUJBQ0ksOERBQUN5QjtrQkFDRyw0RUFBQ0M7c0JBQUlQOzs7Ozs7Ozs7OztBQUlqQjtBQUVBLGlFQUFlRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4PzMwMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcbi8vaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJy4uLy4uL2xpYi9zYW5pdHlDbGllbnQnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgcGF0aHMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2goZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpLFxuICAgICAgICBmYWxsYmFjazogdHJ1ZSxcbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXG4gICAgY29uc3QgeyBzbHVnID0gJycgfSA9IGNvbnRleHQucGFyYW1zO1xuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2goXG4gICAgICAgIGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBdeyB0aXRsZSwgZGF0ZSwgdGltZXpvbmUsIGxvY2F0aW9uLCBhZGRyZXNzLCBjb250ZW50IH1gLFxuICAgICAgICB7IHNsdWcgfSxcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0LFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKHNhbml0eUNsaWVudCkuaW1hZ2Uoc291cmNlKTtcbn1cblxuY29uc3QgcHRDb21wb25lbnRzID0ge1xuICAgIHR5cGVzOiB7XG4gICAgICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD17dmFsdWUuYWx0IHx8ICcgJ31cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSkud2lkdGgoMzIwKS5oZWlnaHQoMjQwKS5maXQoJ21heCcpLmF1dG8oJ2Zvcm1hdCcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgICBwb3N0OiB7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGRhdGU6IHN0cmluZztcbiAgICAgICAgdGltZXpvbmU6IHN0cmluZztcbiAgICAgICAgbG9jYXRpb246IHN0cmluZztcbiAgICAgICAgYWRkcmVzczogc3RyaW5nO1xuICAgICAgICBjb250ZW50OiB1bmtub3duO1xuICAgIH07XG59XG5cbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPFBvc3RQcm9wcz4gPSAoeyBwb3N0IH0pID0+IHtcbiAgICBjb25zdCB7IHRpdGxlLCBkYXRlLCB0aW1lem9uZSwgbG9jYXRpb24sIGFkZHJlc3MsIGNvbnRlbnQgfSA9IHBvc3Q7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICB7Lyo8UG9ydGFibGVUZXh0IHZhbHVlPXtib2R5fSBjb21wb25lbnRzPXtwdENvbXBvbmVudHN9IC8+Ki99XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJncm9xIiwiaW1hZ2VVcmxCdWlsZGVyIiwic2FuaXR5Q2xpZW50IiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZldGNoIiwibWFwIiwic2x1ZyIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicG9zdCIsInByb3BzIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJwdENvbXBvbmVudHMiLCJ0eXBlcyIsInZhbHVlIiwiYXNzZXQiLCJfcmVmIiwiaW1nIiwiYWx0IiwibG9hZGluZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsIlBvc3QiLCJ0aXRsZSIsImRhdGUiLCJ0aW1lem9uZSIsImxvY2F0aW9uIiwiYWRkcmVzcyIsImNvbnRlbnQiLCJhcnRpY2xlIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("groq");;

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].tsx"));
module.exports = __webpack_exports__;

})();