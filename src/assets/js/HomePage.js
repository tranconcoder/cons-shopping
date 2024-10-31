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

/***/ "./src/assets/ts/HomePage/imageSlide.ts":
/*!**********************************************!*\
  !*** ./src/assets/ts/HomePage/imageSlide.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_selectElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/selectElm */ \"./src/assets/ts/utils/selectElm.ts\");\n\nclass ImageSlide {\n    constructor() {\n        this.currentImageIndex = 0;\n        // Auto next image each 10s\n        this.TIME_CHANGE_IMAGE = 10 * 1000;\n        this.imageSlideElm = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\".image-slide-ctn\");\n        this.imageListElm = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\".image-list\", this.imageSlideElm);\n        this.progressBarElm = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\".progress-bar\", this.imageSlideElm);\n        this.prevButton = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\".prev-button\", this.imageSlideElm);\n        this.nextButton = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\".next-button\", this.imageSlideElm);\n        this.IMAGE_COUNT = this.imageListElm.childElementCount;\n        this.listenEventButton();\n        this.setIntervalAutoChangeImage();\n    }\n    clearEventButton() {\n        this.prevButton.removeEventListener(\"click\", this.handlePrevImage.bind(this));\n        // Next button\n        this.nextButton.removeEventListener(\"click\", this.handleNextImage.bind(this));\n        // Progress bar\n        this.progressBarElm.addEventListener(\"click\", this.handleClickProgressBar.bind(this));\n    }\n    listenEventButton() {\n        // Clear before listener\n        this.clearEventButton();\n        // Prev button\n        this.prevButton.addEventListener(\"click\", this.handlePrevImage.bind(this));\n        // Next button\n        this.nextButton.addEventListener(\"click\", this.handleNextImage.bind(this));\n        // Progress bar\n        this.progressBarElm.addEventListener(\"click\", this.handleClickProgressBar.bind(this));\n    }\n    setIntervalAutoChangeImage() {\n        clearInterval(Number(this.autoChangeImageIntervalId));\n        this.autoChangeImageIntervalId = setInterval(this.handleNextImage.bind(this), this.TIME_CHANGE_IMAGE);\n    }\n    handlePrevImage() {\n        if (this.currentImageIndex === 0) {\n            this.currentImageIndex = this.IMAGE_COUNT - 1;\n        }\n        else\n            this.currentImageIndex--;\n        this.resetSlideStyle();\n    }\n    handleNextImage() {\n        if (this.currentImageIndex === this.IMAGE_COUNT - 1) {\n            this.currentImageIndex = 0;\n        }\n        else\n            this.currentImageIndex++;\n        this.resetSlideStyle();\n    }\n    handleJumpImage(newPosition) {\n        // Validate input data\n        if (newPosition >= this.IMAGE_COUNT)\n            newPosition = this.IMAGE_COUNT - 1;\n        if (newPosition < 0)\n            newPosition = 0;\n        // Update new index\n        this.currentImageIndex = newPosition;\n        // Reset style\n        this.resetSlideStyle();\n    }\n    resetSlideStyle() {\n        // Reset auto next image interval\n        this.setIntervalAutoChangeImage();\n        // Set new image list position\n        this.imageListElm.style.transform = `translateX(-${this.currentImageIndex * 100}%)`;\n        // Reset dot list style\n        // Remove current active dot\n        const currentActiveDot = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\".dot.active\", this.progressBarElm);\n        currentActiveDot.classList.remove(\"active\");\n        // Set new active dot\n        const newActiveDot = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(`.dot[data-index=\"${this.currentImageIndex}\"`, this.imageSlideElm);\n        newActiveDot.classList.add(\"active\");\n    }\n    handleClickProgressBar(e) {\n        const target = e.target;\n        if (target === null || target === void 0 ? void 0 : target.hasAttribute(\"data-index\")) {\n            this.handleJumpImage(Number(target.dataset.index));\n        }\n    }\n}\nconst imageSlide = new ImageSlide();\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/HomePage/imageSlide.ts?");

/***/ }),

/***/ "./src/assets/ts/HomePage/index.ts":
/*!*****************************************!*\
  !*** ./src/assets/ts/HomePage/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _imageSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageSlide */ \"./src/assets/ts/HomePage/imageSlide.ts\");\n/* harmony import */ var _popularProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popularProduct */ \"./src/assets/ts/HomePage/popularProduct.ts\");\n\n\nconst popularProduct = new _popularProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/HomePage/index.ts?");

/***/ }),

/***/ "./src/assets/ts/HomePage/popularProduct.ts":
/*!**************************************************!*\
  !*** ./src/assets/ts/HomePage/popularProduct.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PopularProduct)\n/* harmony export */ });\n/* harmony import */ var _utils_currency_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/currency.util */ \"./src/assets/ts/utils/currency.util.ts\");\n/* harmony import */ var _utils_selectElm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/selectElm */ \"./src/assets/ts/utils/selectElm.ts\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/storage */ \"./src/assets/ts/utils/storage.ts\");\n/* harmony import */ var _utils_event_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/event.util */ \"./src/assets/ts/utils/event.util.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nclass PopularProduct {\n    constructor() {\n        const elmInit = this.initElement();\n        this.popularProductList = [];\n        this.popularProductItemList = [];\n        this.popularProductCtn = elmInit.popularProductCtn;\n        this.initData();\n    }\n    initElement() {\n        return {\n            popularProductCtn: (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_1__.$)(\".popular-product-list\"),\n        };\n    }\n    initEvent() {\n        this.popularProductItemList.forEach((item) => {\n            const cartButton = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_1__.$)(\"button.add-to-cart\", item);\n            cartButton.addEventListener(\"click\", (e) => {\n                document.dispatchEvent(_utils_event_util__WEBPACK_IMPORTED_MODULE_3__.event);\n                _utils_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addToCart(item.dataset.id);\n            });\n        });\n    }\n    initUI() {\n        this.popularProductCtn.innerHTML = \"\";\n        this.popularProductItemList = this.popularProductList.map((product) => {\n            const elm = document.createElement(\"li\");\n            elm.classList.add(\"item-container\");\n            elm.dataset.id = product.productId;\n            elm.innerHTML = `\n                <div class=\"thumb-ctn\">\n                    <img src=\"${product.thumb}\" alt=\"\" class=\"thumb\" />\n                </div>\n\n                <p class=\"name\">${product.label}</p>\n                <p class=\"price\">${_utils_currency_util__WEBPACK_IMPORTED_MODULE_0__.currencyFormatter.format(product.cost)}</p>\n\n                <div class=\"detail\">\n                    <p class=\"memory\">RAM: ${product.memory}</p>\n                    <p class=\"storage\">ROM: ${product.storage}</p>\n                    <p class=\"monitor\">Màn hình: ${product.monitorWidth}x${product.monitorHeight}</p>\n                    <p class=\"battery\">Pin: 5000mah</p>\n                </div>\n\n\n                <div class=\"button-list\">\n                    <button class=\"add-to-cart\">\n                        <p><i class=\"fa-solid fa-cart-plus\"></i></p>\n                    </button>\n\n                    <button class=\"buy-now\">\n                        <p>Mua ngay</p>\n                    </button>\n                </div>\n            `;\n            return elm;\n        });\n        this.popularProductItemList.forEach((item) => this.popularProductCtn.append(item));\n    }\n    initData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.popularProductList = yield fetch(\"/api/get-all-product\").then((res) => res.json());\n            this.initUI();\n            this.initElement();\n            this.initEvent();\n        });\n    }\n}\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/HomePage/popularProduct.ts?");

/***/ }),

/***/ "./src/assets/ts/utils/currency.util.ts":
/*!**********************************************!*\
  !*** ./src/assets/ts/utils/currency.util.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currencyFormatter: () => (/* binding */ currencyFormatter)\n/* harmony export */ });\nconst currencyFormatter = new Intl.NumberFormat(\"vi-VN\", {\n    style: \"currency\",\n    currency: \"VND\",\n});\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/utils/currency.util.ts?");

/***/ }),

/***/ "./src/assets/ts/utils/event.util.ts":
/*!*******************************************!*\
  !*** ./src/assets/ts/utils/event.util.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   event: () => (/* binding */ event)\n/* harmony export */ });\nconst event = new Event(\"cart-change\");\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/utils/event.util.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/ts/HomePage/index.ts");
/******/ 	
/******/ })()
;