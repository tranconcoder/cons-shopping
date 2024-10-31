/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/ts/Layout1/index.ts":
/*!****************************************!*\
  !*** ./src/assets/ts/Layout1/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_selectElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/selectElm */ \"./src/assets/ts/utils/selectElm.ts\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ \"./src/assets/ts/utils/storage.ts\");\n\n\n// HTML element\nconst cartTitleElm = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\".header-wrapper .cart\");\ncartTitleElm.innerText = `Giỏ hàng: ${_utils_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCartCount()}`;\ndocument.addEventListener(\"cart-change\", (e) => {\n    cartTitleElm.innerText = `Giỏ hàng: ${_utils_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCartCount()}`;\n}, false);\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/Layout1/index.ts?");

/***/ }),

/***/ "./src/assets/ts/utils/selectElm.ts":
/*!******************************************!*\
  !*** ./src/assets/ts/utils/selectElm.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $: () => (/* binding */ $),\n/* harmony export */   $$: () => (/* binding */ $$)\n/* harmony export */ });\nconst $ = (selector, bindElm = document) => bindElm.querySelector(selector);\nconst $$ = (selector, bindElm = document) => bindElm.querySelectorAll(selector);\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/utils/selectElm.ts?");

/***/ }),

/***/ "./src/assets/ts/utils/storage.ts":
/*!****************************************!*\
  !*** ./src/assets/ts/utils/storage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Storage {\n    static getCartList() {\n        return JSON.parse(localStorage.getItem(this.CART_STORAGE_KEY) || \"{}\");\n    }\n    static addToCart(productId) {\n        const newData = this.getCartList();\n        if (newData.hasOwnProperty(productId))\n            newData[productId]++;\n        else\n            newData[productId] = 1;\n        this.setStorage(newData);\n    }\n    static removeFromCart(productId) {\n        const newData = this.getCartList();\n        if (newData.hasOwnProperty(productId) && newData[productId] >= 1)\n            newData[productId]--;\n        if (newData[productId] === 0)\n            delete newData[productId];\n        this.setStorage(newData);\n    }\n    static getCartCount() {\n        const cartList = this.getCartList();\n        return Object.keys(cartList).reduce((acc, curr) => acc + cartList[curr], 0);\n    }\n    static setProductCount(productId, newCount) {\n        const newData = this.getCartList();\n        if (newCount <= 0)\n            delete newData[productId];\n        else\n            newData[productId] = newCount;\n        this.setStorage(newData);\n    }\n    static setStorage(data) {\n        localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(data));\n    }\n}\nStorage.CART_STORAGE_KEY = \"cons_shopping_cart\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/utils/storage.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/ts/Layout1/index.ts");
/******/ 	
/******/ })()
;