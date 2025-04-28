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
exports.id = "app/api/liveblocks-auth/route";
exports.ids = ["app/api/liveblocks-auth/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=C%3A%5CUsers%5Cibrah%5CDocuments%5CComputing%5CYear%203%5CComputing%20Project%5CNew%20folder%5Cwritetogether%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cibrah%5CDocuments%5CComputing%5CYear%203%5CComputing%20Project%5CNew%20folder%5Cwritetogether&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=C%3A%5CUsers%5Cibrah%5CDocuments%5CComputing%5CYear%203%5CComputing%20Project%5CNew%20folder%5Cwritetogether%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cibrah%5CDocuments%5CComputing%5CYear%203%5CComputing%20Project%5CNew%20folder%5Cwritetogether&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ibrah_Documents_Computing_Year_3_Computing_Project_New_folder_writetogether_app_api_liveblocks_auth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/liveblocks-auth/route.ts */ \"(rsc)/./app/api/liveblocks-auth/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/liveblocks-auth/route\",\n        pathname: \"/api/liveblocks-auth\",\n        filename: \"route\",\n        bundlePath: \"app/api/liveblocks-auth/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ibrah\\\\Documents\\\\Computing\\\\Year 3\\\\Computing Project\\\\New folder\\\\writetogether\\\\app\\\\api\\\\liveblocks-auth\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ibrah_Documents_Computing_Year_3_Computing_Project_New_folder_writetogether_app_api_liveblocks_auth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/liveblocks-auth/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsaXZlYmxvY2tzLWF1dGglMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmxpdmVibG9ja3MtYXV0aCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmxpdmVibG9ja3MtYXV0aCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNpYnJhaCU1Q0RvY3VtZW50cyU1Q0NvbXB1dGluZyU1Q1llYXIlMjAzJTVDQ29tcHV0aW5nJTIwUHJvamVjdCU1Q05ldyUyMGZvbGRlciU1Q3dyaXRldG9nZXRoZXIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2licmFoJTVDRG9jdW1lbnRzJTVDQ29tcHV0aW5nJTVDWWVhciUyMDMlNUNDb21wdXRpbmclMjBQcm9qZWN0JTVDTmV3JTIwZm9sZGVyJTVDd3JpdGV0b2dldGhlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDaUY7QUFDOUo7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cml0ZXRvZ2V0aGVyLz80YmIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGlicmFoXFxcXERvY3VtZW50c1xcXFxDb21wdXRpbmdcXFxcWWVhciAzXFxcXENvbXB1dGluZyBQcm9qZWN0XFxcXE5ldyBmb2xkZXJcXFxcd3JpdGV0b2dldGhlclxcXFxhcHBcXFxcYXBpXFxcXGxpdmVibG9ja3MtYXV0aFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbGl2ZWJsb2Nrcy1hdXRoL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbGl2ZWJsb2Nrcy1hdXRoXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9saXZlYmxvY2tzLWF1dGgvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxpYnJhaFxcXFxEb2N1bWVudHNcXFxcQ29tcHV0aW5nXFxcXFllYXIgM1xcXFxDb21wdXRpbmcgUHJvamVjdFxcXFxOZXcgZm9sZGVyXFxcXHdyaXRldG9nZXRoZXJcXFxcYXBwXFxcXGFwaVxcXFxsaXZlYmxvY2tzLWF1dGhcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2xpdmVibG9ja3MtYXV0aC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=C%3A%5CUsers%5Cibrah%5CDocuments%5CComputing%5CYear%203%5CComputing%20Project%5CNew%20folder%5Cwritetogether%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cibrah%5CDocuments%5CComputing%5CYear%203%5CComputing%20Project%5CNew%20folder%5Cwritetogether&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/database.ts":
/*!*****************************!*\
  !*** ./app/api/database.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllUsers: () => (/* binding */ getAllUsers),\n/* harmony export */   getRandomUser: () => (/* binding */ getRandomUser),\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   getUsers: () => (/* binding */ getUsers)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nfunction colorFromEmail(email) {\n    const hash = [\n        ...email\n    ].reduce((h, c)=>h * 31 + c.charCodeAt(0) >>> 0, 0);\n    return \"#\" + (hash & 0xffffff).toString(16).padStart(6, \"0\");\n}\nconst DEFAULT_AVATAR = \"https://liveblocks.io/avatars/avatar-1.png\";\nasync function getAllUsers() {\n    const users = await prisma.user.findMany({\n        select: {\n            email: true,\n            name: true\n        }\n    });\n    return users.map((u)=>({\n            id: u.email,\n            info: {\n                name: u.name,\n                color: colorFromEmail(u.email),\n                avatar: DEFAULT_AVATAR\n            }\n        }));\n}\nasync function getUser(id) {\n    const u = await prisma.user.findUnique({\n        where: {\n            email: id\n        },\n        select: {\n            email: true,\n            name: true\n        }\n    });\n    if (!u) return undefined;\n    return {\n        id: u.email,\n        info: {\n            name: u.name,\n            color: colorFromEmail(u.email),\n            avatar: DEFAULT_AVATAR\n        }\n    };\n}\nasync function getUsers(ids) {\n    const users = await prisma.user.findMany({\n        where: {\n            email: {\n                in: ids\n            }\n        },\n        select: {\n            email: true,\n            name: true\n        }\n    });\n    return users.map((u)=>({\n            id: u.email,\n            info: {\n                name: u.name,\n                color: colorFromEmail(u.email),\n                avatar: DEFAULT_AVATAR\n            }\n        }));\n}\nasync function getRandomUser() {\n    const users = await prisma.user.findMany({\n        select: {\n            email: true,\n            name: true\n        }\n    });\n    if (users.length === 0) return undefined;\n    const u = users[Math.floor(Math.random() * users.length)];\n    return {\n        id: u.email,\n        info: {\n            name: u.name,\n            color: colorFromEmail(u.email),\n            avatar: DEFAULT_AVATAR\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2RhdGFiYXNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQVcvQixTQUFTRSxlQUFlQyxLQUFhO0lBQ25DLE1BQU1DLE9BQU87V0FBSUQ7S0FBTSxDQUFDRSxNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTSxJQUFLLEtBQUtBLEVBQUVDLFVBQVUsQ0FBQyxPQUFRLEdBQUc7SUFDM0UsT0FBTyxNQUFNLENBQUNKLE9BQU8sUUFBTyxFQUFHSyxRQUFRLENBQUMsSUFBSUMsUUFBUSxDQUFDLEdBQUc7QUFDMUQ7QUFFQSxNQUFNQyxpQkFBaUI7QUFFaEIsZUFBZUM7SUFDcEIsTUFBTUMsUUFBUSxNQUFNWixPQUFPYSxJQUFJLENBQUNDLFFBQVEsQ0FBQztRQUFFQyxRQUFRO1lBQUViLE9BQU87WUFBTWMsTUFBTTtRQUFLO0lBQUU7SUFDL0UsT0FBT0osTUFBTUssR0FBRyxDQUFDLENBQUNDLElBQU87WUFDdkJDLElBQUlELEVBQUVoQixLQUFLO1lBQ1hrQixNQUFNO2dCQUNKSixNQUFNRSxFQUFFRixJQUFJO2dCQUNaSyxPQUFPcEIsZUFBZWlCLEVBQUVoQixLQUFLO2dCQUM3Qm9CLFFBQVFaO1lBQ1Y7UUFDRjtBQUNGO0FBRU8sZUFBZWEsUUFBUUosRUFBVTtJQUN0QyxNQUFNRCxJQUFJLE1BQU1sQixPQUFPYSxJQUFJLENBQUNXLFVBQVUsQ0FBQztRQUNyQ0MsT0FBTztZQUFFdkIsT0FBT2lCO1FBQUc7UUFDbkJKLFFBQVE7WUFBRWIsT0FBTztZQUFNYyxNQUFNO1FBQUs7SUFDcEM7SUFDQSxJQUFJLENBQUNFLEdBQUcsT0FBT1E7SUFDZixPQUFPO1FBQ0xQLElBQUlELEVBQUVoQixLQUFLO1FBQ1hrQixNQUFNO1lBQ0pKLE1BQU1FLEVBQUVGLElBQUk7WUFDWkssT0FBT3BCLGVBQWVpQixFQUFFaEIsS0FBSztZQUM3Qm9CLFFBQVFaO1FBQ1Y7SUFDRjtBQUNGO0FBRU8sZUFBZWlCLFNBQVNDLEdBQWE7SUFDMUMsTUFBTWhCLFFBQVEsTUFBTVosT0FBT2EsSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFDdkNXLE9BQU87WUFBRXZCLE9BQU87Z0JBQUUyQixJQUFJRDtZQUFJO1FBQUU7UUFDNUJiLFFBQVE7WUFBRWIsT0FBTztZQUFNYyxNQUFNO1FBQUs7SUFDcEM7SUFDQSxPQUFPSixNQUFNSyxHQUFHLENBQUMsQ0FBQ0MsSUFBTztZQUN2QkMsSUFBSUQsRUFBRWhCLEtBQUs7WUFDWGtCLE1BQU07Z0JBQ0pKLE1BQU1FLEVBQUVGLElBQUk7Z0JBQ1pLLE9BQU9wQixlQUFlaUIsRUFBRWhCLEtBQUs7Z0JBQzdCb0IsUUFBUVo7WUFDVjtRQUNGO0FBQ0Y7QUFFTyxlQUFlb0I7SUFDcEIsTUFBTWxCLFFBQVEsTUFBTVosT0FBT2EsSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFBRUMsUUFBUTtZQUFFYixPQUFPO1lBQU1jLE1BQU07UUFBSztJQUFFO0lBQy9FLElBQUlKLE1BQU1tQixNQUFNLEtBQUssR0FBRyxPQUFPTDtJQUMvQixNQUFNUixJQUFJTixLQUFLLENBQUNvQixLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS3RCLE1BQU1tQixNQUFNLEVBQUU7SUFDekQsT0FBTztRQUNMWixJQUFJRCxFQUFFaEIsS0FBSztRQUNYa0IsTUFBTTtZQUNKSixNQUFNRSxFQUFFRixJQUFJO1lBQ1pLLE9BQU9wQixlQUFlaUIsRUFBRWhCLEtBQUs7WUFDN0JvQixRQUFRWjtRQUNWO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dyaXRldG9nZXRoZXIvLi9hcHAvYXBpL2RhdGFiYXNlLnRzP2ExMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyTWV0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIGluZm86IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBhdmF0YXI6IHN0cmluZztcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29sb3JGcm9tRW1haWwoZW1haWw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGhhc2ggPSBbLi4uZW1haWxdLnJlZHVjZSgoaCwgYykgPT4gKGggKiAzMSArIGMuY2hhckNvZGVBdCgwKSkgPj4+IDAsIDApO1xuICByZXR1cm4gXCIjXCIgKyAoaGFzaCAmIDB4ZmZmZmZmKS50b1N0cmluZygxNikucGFkU3RhcnQoNiwgXCIwXCIpO1xufVxuXG5jb25zdCBERUZBVUxUX0FWQVRBUiA9IFwiaHR0cHM6Ly9saXZlYmxvY2tzLmlvL2F2YXRhcnMvYXZhdGFyLTEucG5nXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpOiBQcm9taXNlPFVzZXJNZXRhW10+IHtcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kTWFueSh7IHNlbGVjdDogeyBlbWFpbDogdHJ1ZSwgbmFtZTogdHJ1ZSB9IH0pO1xuICByZXR1cm4gdXNlcnMubWFwKCh1KSA9PiAoe1xuICAgIGlkOiB1LmVtYWlsLFxuICAgIGluZm86IHtcbiAgICAgIG5hbWU6IHUubmFtZSxcbiAgICAgIGNvbG9yOiBjb2xvckZyb21FbWFpbCh1LmVtYWlsKSxcbiAgICAgIGF2YXRhcjogREVGQVVMVF9BVkFUQVIsXG4gICAgfSxcbiAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihpZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyTWV0YSB8IHVuZGVmaW5lZD4ge1xuICBjb25zdCB1ID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgZW1haWw6IGlkIH0sXG4gICAgc2VsZWN0OiB7IGVtYWlsOiB0cnVlLCBuYW1lOiB0cnVlIH0sXG4gIH0pO1xuICBpZiAoIXUpIHJldHVybiB1bmRlZmluZWQ7XG4gIHJldHVybiB7XG4gICAgaWQ6IHUuZW1haWwsXG4gICAgaW5mbzoge1xuICAgICAgbmFtZTogdS5uYW1lLFxuICAgICAgY29sb3I6IGNvbG9yRnJvbUVtYWlsKHUuZW1haWwpLFxuICAgICAgYXZhdGFyOiBERUZBVUxUX0FWQVRBUixcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcnMoaWRzOiBzdHJpbmdbXSk6IFByb21pc2U8VXNlck1ldGFbXT4ge1xuICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcbiAgICB3aGVyZTogeyBlbWFpbDogeyBpbjogaWRzIH0gfSxcbiAgICBzZWxlY3Q6IHsgZW1haWw6IHRydWUsIG5hbWU6IHRydWUgfSxcbiAgfSk7XG4gIHJldHVybiB1c2Vycy5tYXAoKHUpID0+ICh7XG4gICAgaWQ6IHUuZW1haWwsXG4gICAgaW5mbzoge1xuICAgICAgbmFtZTogdS5uYW1lLFxuICAgICAgY29sb3I6IGNvbG9yRnJvbUVtYWlsKHUuZW1haWwpLFxuICAgICAgYXZhdGFyOiBERUZBVUxUX0FWQVRBUixcbiAgICB9LFxuICB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSYW5kb21Vc2VyKCk6IFByb21pc2U8VXNlck1ldGEgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kTWFueSh7IHNlbGVjdDogeyBlbWFpbDogdHJ1ZSwgbmFtZTogdHJ1ZSB9IH0pO1xuICBpZiAodXNlcnMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCB1ID0gdXNlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdXNlcnMubGVuZ3RoKV07XG4gIHJldHVybiB7XG4gICAgaWQ6IHUuZW1haWwsXG4gICAgaW5mbzoge1xuICAgICAgbmFtZTogdS5uYW1lLFxuICAgICAgY29sb3I6IGNvbG9yRnJvbUVtYWlsKHUuZW1haWwpLFxuICAgICAgYXZhdGFyOiBERUZBVUxUX0FWQVRBUixcbiAgICB9LFxuICB9O1xufVxuXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiY29sb3JGcm9tRW1haWwiLCJlbWFpbCIsImhhc2giLCJyZWR1Y2UiLCJoIiwiYyIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiREVGQVVMVF9BVkFUQVIiLCJnZXRBbGxVc2VycyIsInVzZXJzIiwidXNlciIsImZpbmRNYW55Iiwic2VsZWN0IiwibmFtZSIsIm1hcCIsInUiLCJpZCIsImluZm8iLCJjb2xvciIsImF2YXRhciIsImdldFVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJ1bmRlZmluZWQiLCJnZXRVc2VycyIsImlkcyIsImluIiwiZ2V0UmFuZG9tVXNlciIsImxlbmd0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/database.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/liveblocks-auth/route.ts":
/*!******************************************!*\
  !*** ./app/api/liveblocks-auth/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _liveblocks_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @liveblocks/node */ \"(rsc)/./node_modules/@liveblocks/node/dist/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database */ \"(rsc)/./app/api/database.ts\");\n\n\n\nconst secretKey = process.env.LIVEBLOCKS_SECRET_KEY;\nif (!secretKey) {\n    console.error(\"Missing LIVEBLOCKS_SECRET_KEY\");\n}\nconst liveblocks = new _liveblocks_node__WEBPACK_IMPORTED_MODULE_0__.Liveblocks({\n    secret: secretKey\n});\nasync function POST(request) {\n    if (!secretKey) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Missing LIVEBLOCKS_SECRET_KEY\", {\n            status: 403\n        });\n    }\n    // Await getRandomUser (it returns a Promise)\n    const user = await (0,_database__WEBPACK_IMPORTED_MODULE_2__.getRandomUser)();\n    if (!user) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"No users available\", {\n            status: 500\n        });\n    }\n    // Prepare and authorize a session for this user\n    const session = liveblocks.prepareSession(user.id, {\n        userInfo: user.info\n    });\n    // Grant full access under your namespace\n    session.allow(\"userspace:*\", session.FULL_ACCESS);\n    const { status, body } = await session.authorize();\n    return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(body, {\n        status\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xpdmVibG9ja3MtYXV0aC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThDO0FBQ1U7QUFDWjtBQUU1QyxNQUFNRyxZQUFZQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQjtBQUNuRCxJQUFJLENBQUNILFdBQVc7SUFDZEksUUFBUUMsS0FBSyxDQUFDO0FBQ2hCO0FBQ0EsTUFBTUMsYUFBYSxJQUFJVCx3REFBVUEsQ0FBQztJQUFFVSxRQUFRUDtBQUFXO0FBRWhELGVBQWVRLEtBQUtDLE9BQW9CO0lBQzdDLElBQUksQ0FBQ1QsV0FBVztRQUNkLE9BQU8sSUFBSUYscURBQVlBLENBQUMsaUNBQWlDO1lBQUVZLFFBQVE7UUFBSTtJQUN6RTtJQUVBLDZDQUE2QztJQUM3QyxNQUFNQyxPQUFPLE1BQU1aLHdEQUFhQTtJQUNoQyxJQUFJLENBQUNZLE1BQU07UUFDVCxPQUFPLElBQUliLHFEQUFZQSxDQUFDLHNCQUFzQjtZQUFFWSxRQUFRO1FBQUk7SUFDOUQ7SUFFQSxnREFBZ0Q7SUFDaEQsTUFBTUUsVUFBVU4sV0FBV08sY0FBYyxDQUFDRixLQUFLRyxFQUFFLEVBQUU7UUFDakRDLFVBQVVKLEtBQUtLLElBQUk7SUFDckI7SUFFQSx5Q0FBeUM7SUFDekNKLFFBQVFLLEtBQUssQ0FBQyxlQUFlTCxRQUFRTSxXQUFXO0lBRWhELE1BQU0sRUFBRVIsTUFBTSxFQUFFUyxJQUFJLEVBQUUsR0FBRyxNQUFNUCxRQUFRUSxTQUFTO0lBQ2hELE9BQU8sSUFBSXRCLHFEQUFZQSxDQUFDcUIsTUFBTTtRQUFFVDtJQUFPO0FBQ3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3JpdGV0b2dldGhlci8uL2FwcC9hcGkvbGl2ZWJsb2Nrcy1hdXRoL3JvdXRlLnRzPzQ5M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl2ZWJsb2NrcyB9IGZyb20gXCJAbGl2ZWJsb2Nrcy9ub2RlXCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21Vc2VyIH0gZnJvbSBcIi4uL2RhdGFiYXNlXCI7XG5cbmNvbnN0IHNlY3JldEtleSA9IHByb2Nlc3MuZW52LkxJVkVCTE9DS1NfU0VDUkVUX0tFWTtcbmlmICghc2VjcmV0S2V5KSB7XG4gIGNvbnNvbGUuZXJyb3IoXCJNaXNzaW5nIExJVkVCTE9DS1NfU0VDUkVUX0tFWVwiKTtcbn1cbmNvbnN0IGxpdmVibG9ja3MgPSBuZXcgTGl2ZWJsb2Nrcyh7IHNlY3JldDogc2VjcmV0S2V5ISB9KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgaWYgKCFzZWNyZXRLZXkpIHtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIk1pc3NpbmcgTElWRUJMT0NLU19TRUNSRVRfS0VZXCIsIHsgc3RhdHVzOiA0MDMgfSk7XG4gIH1cblxuICAvLyBBd2FpdCBnZXRSYW5kb21Vc2VyIChpdCByZXR1cm5zIGEgUHJvbWlzZSlcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFJhbmRvbVVzZXIoKTtcbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJObyB1c2VycyBhdmFpbGFibGVcIiwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxuXG4gIC8vIFByZXBhcmUgYW5kIGF1dGhvcml6ZSBhIHNlc3Npb24gZm9yIHRoaXMgdXNlclxuICBjb25zdCBzZXNzaW9uID0gbGl2ZWJsb2Nrcy5wcmVwYXJlU2Vzc2lvbih1c2VyLmlkLCB7XG4gICAgdXNlckluZm86IHVzZXIuaW5mbyxcbiAgfSk7XG5cbiAgLy8gR3JhbnQgZnVsbCBhY2Nlc3MgdW5kZXIgeW91ciBuYW1lc3BhY2VcbiAgc2Vzc2lvbi5hbGxvdyhcInVzZXJzcGFjZToqXCIsIHNlc3Npb24uRlVMTF9BQ0NFU1MpO1xuXG4gIGNvbnN0IHsgc3RhdHVzLCBib2R5IH0gPSBhd2FpdCBzZXNzaW9uLmF1dGhvcml6ZSgpO1xuICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShib2R5LCB7IHN0YXR1cyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJMaXZlYmxvY2tzIiwiTmV4dFJlc3BvbnNlIiwiZ2V0UmFuZG9tVXNlciIsInNlY3JldEtleSIsInByb2Nlc3MiLCJlbnYiLCJMSVZFQkxPQ0tTX1NFQ1JFVF9LRVkiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXZlYmxvY2tzIiwic2VjcmV0IiwiUE9TVCIsInJlcXVlc3QiLCJzdGF0dXMiLCJ1c2VyIiwic2Vzc2lvbiIsInByZXBhcmVTZXNzaW9uIiwiaWQiLCJ1c2VySW5mbyIsImluZm8iLCJhbGxvdyIsIkZVTExfQUNDRVNTIiwiYm9keSIsImF1dGhvcml6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/liveblocks-auth/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@liveblocks","vendor-chunks/fast-sha256","vendor-chunks/@stablelib"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=C%3A%5CUsers%5Cibrah%5CDocuments%5CComputing%5CYear%203%5CComputing%20Project%5CNew%20folder%5Cwritetogether%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cibrah%5CDocuments%5CComputing%5CYear%203%5CComputing%20Project%5CNew%20folder%5Cwritetogether&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();