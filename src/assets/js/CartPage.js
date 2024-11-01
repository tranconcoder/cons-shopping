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

/***/ "./src/assets/ts/CartPage/index.ts":
/*!*****************************************!*\
  !*** ./src/assets/ts/CartPage/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_selectElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/selectElm */ \"./src/assets/ts/utils/selectElm.ts\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ \"./src/assets/ts/utils/storage.ts\");\n/* harmony import */ var _utils_currency_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/currency.util */ \"./src/assets/ts/utils/currency.util.ts\");\n/* harmony import */ var _utils_event_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/event.util */ \"./src/assets/ts/utils/event.util.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nclass CartPage {\n    constructor() {\n        //\n        // Set default value\n        //\n        this.productIdList = [];\n        this.productList = [];\n        this.cartItemList = [];\n        this.cartList = {};\n        // DOM element\n        this.cartListCtn = document.createElement(\"ul\");\n        this.buyButton = document.createElement(\"button\");\n        this.noteText = document.createElement(\"textarea\");\n        this.addressText = document.createElement(\"textarea\");\n        this.initData();\n    }\n    initData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.cartList = _utils_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCartList();\n            this.productIdList = Object.keys(this.cartList);\n            yield this.updateProductList(this.productIdList);\n            this.initElm();\n            this.initView();\n            this.initEvent();\n        });\n    }\n    initElm() {\n        this.cartListCtn = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\"#cart-list\");\n        this.buyButton = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\"#buy-button\");\n        this.noteText = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\"#note\");\n        this.addressText = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\"#address\");\n    }\n    initView() {\n        this.cartItemList = this.productList.map((product) => {\n            const item = document.createElement(\"li\");\n            item.classList.add(\"cart-item\");\n            item.innerHTML = `\n                <input type=\"checkbox\">\n\n                <img src=\"${product.thumb}\" alt=\"\" class=\"thumb\">\n\n                <span class=\"name\">${product.label}</span>\n\n                <span class=\"count\">\n                    <button class=\"sub\">-</button>\n                    <input type=\"number\" min=\"1\" id=\"\" value=\"${this.cartList[product.productId]}\">\n                    <button class=\"add\">+</button>\n                </span>\n\n                <span class=\"price\">${_utils_currency_util__WEBPACK_IMPORTED_MODULE_2__.currencyFormatter.format(product.cost)}</span>\n\n                <span class=\"cost\">${_utils_currency_util__WEBPACK_IMPORTED_MODULE_2__.currencyFormatter.format(product.cost * this.cartList[product.productId])}</span>\n            `;\n            return item;\n        });\n        // Append all item to container\n        this.cartItemList.forEach((item) => this.cartListCtn.appendChild(item));\n    }\n    initEvent() {\n        //\n        // Cart item element\n        //\n        this.cartItemList.forEach((item, index) => {\n            const sub = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\".sub\", item);\n            const add = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\".add\", item);\n            const input = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\"input[type=number]\", item);\n            const productPriceElm = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)(\".cost\", item);\n            const productId = this.productList[index].productId;\n            const handleChangeInput = () => {\n                const count = +input.value;\n                const totalPriceOfProduct = count * this.productList[index].cost;\n                const newValue = +input.value;\n                _utils_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setProductCount(productId, newValue);\n                productPriceElm.textContent =\n                    _utils_currency_util__WEBPACK_IMPORTED_MODULE_2__.currencyFormatter.format(totalPriceOfProduct);\n                document.dispatchEvent(_utils_event_util__WEBPACK_IMPORTED_MODULE_3__.event);\n            };\n            add.addEventListener(\"click\", () => {\n                input.value = +input.value + 1 + \"\";\n                handleChangeInput();\n            });\n            sub.addEventListener(\"click\", () => {\n                if (input.value === \"1\" &&\n                    confirm(\"Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?\")) {\n                    item.remove();\n                    input.value = \"0\";\n                }\n                input.value = input.value != \"1\" ? +input.value - 1 + \"\" : \"1\";\n                handleChangeInput();\n            });\n            input.addEventListener(\"change\", () => {\n                if (+input.value < 1)\n                    input.value = \"1\";\n                handleChangeInput();\n            });\n        });\n        //\n        // Update cart list\n        //\n        document.addEventListener(\"cart-change\", () => {\n            this.cartList = _utils_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCartList();\n        });\n        //\n        // Buy Button\n        //\n        const handleClickBuyButton = (e) => {\n            const product = this.cartList;\n            const note = this.noteText.value;\n            const address = this.addressText.value;\n            const payload = new FormData();\n            payload.append(\"product\", JSON.stringify(product));\n            payload.append(\"address\", address);\n            payload.append(\"note\", note);\n            fetch(\"/api/add-order\", { method: \"POST\", body: payload })\n                .then((res) => res.json())\n                .then((data) => console.log(data));\n        };\n        this.buyButton.addEventListener(\"click\", handleClickBuyButton);\n    }\n    updateProductList(productIdList) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const productIdSet = [...new Set(productIdList)];\n            const resArr = yield Promise.all(productIdSet.map((id) => fetch(`/api/get-product?productId=${id}`)));\n            this.productList = yield Promise.all(resArr.map((res) => res.json()));\n        });\n    }\n}\nnew CartPage();\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/CartPage/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/ts/CartPage/index.ts");
/******/ 	
/******/ })()
;