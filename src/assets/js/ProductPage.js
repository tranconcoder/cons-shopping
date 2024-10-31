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

/***/ "./src/assets/ts/ProductPage/imageSlide.ts":
/*!*************************************************!*\
  !*** ./src/assets/ts/ProductPage/imageSlide.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_selectElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/selectElm */ \"./src/assets/ts/utils/selectElm.ts\");\n\nclass ProductImageSlide {\n    constructor() {\n        this.currentIndex = 0;\n        this.imageSlide = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('#product-image-slide');\n        this.imageSlideList = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('.image-slide__list', this.imageSlide);\n        this.prevButton = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('.prev-button', this.imageSlide);\n        this.nextButton = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('.next-button', this.imageSlide);\n        this.imageSlidePreview = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('#product-image-slide + .image-slide-preview');\n        this.imageSlidePreviewItems = [\n            ...this.imageSlidePreview.children,\n        ];\n        this.MAX_INDEX = this.imageSlideList.childElementCount - 1;\n        this.resetStyle();\n    }\n    listenEvent() {\n        this.prevButton.addEventListener('click', (e) => {\n            this.handlePrev();\n        });\n        this.nextButton.addEventListener('click', (e) => {\n            this.handleNext();\n        });\n        // Click preview item\n        this.imageSlidePreviewItems.forEach((previewItem) => {\n            previewItem.addEventListener('click', this.handleClickPreviewItem.bind(this));\n        });\n    }\n    handleClickPreviewItem(e) {\n        let target = e.target;\n        while (target.tagName !== 'LI' && target.parentNode)\n            target = target.parentNode;\n        this.handleChangeIndex(Number(target === null || target === void 0 ? void 0 : target.dataset.index) || 0);\n    }\n    handleChangeIndex(newIndex) {\n        if (newIndex < 0)\n            this.currentIndex = this.MAX_INDEX;\n        else if (newIndex > this.MAX_INDEX)\n            this.currentIndex = 0;\n        else\n            this.currentIndex = newIndex;\n        this.resetStyle();\n    }\n    handleNext() {\n        this.handleChangeIndex(this.currentIndex + 1);\n    }\n    handlePrev() {\n        this.handleChangeIndex(this.currentIndex - 1);\n    }\n    resetStyle() {\n        // Image slide style\n        const transitionXPercent = this.currentIndex * 100;\n        this.imageSlideList.style.transform = `translateX(-${transitionXPercent}%)`;\n        // Image slide preview style\n        const oldPreviewActiveItem = this.imageSlidePreview.querySelector('li.active');\n        oldPreviewActiveItem === null || oldPreviewActiveItem === void 0 ? void 0 : oldPreviewActiveItem.classList.remove('active');\n        const newPreviewActiveItem = this.imageSlidePreview.querySelector(`li[data-index=\"${this.currentIndex}\"]`);\n        newPreviewActiveItem === null || newPreviewActiveItem === void 0 ? void 0 : newPreviewActiveItem.classList.add('active');\n        // Scroll newPreviewActiveItem to view\n        newPreviewActiveItem === null || newPreviewActiveItem === void 0 ? void 0 : newPreviewActiveItem.scrollIntoView({\n            behavior: 'smooth',\n            inline: 'center',\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductImageSlide);\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/ProductPage/imageSlide.ts?");

/***/ }),

/***/ "./src/assets/ts/ProductPage/index.ts":
/*!********************************************!*\
  !*** ./src/assets/ts/ProductPage/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _imageSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageSlide */ \"./src/assets/ts/ProductPage/imageSlide.ts\");\n\nconst imageSlide = new _imageSlide__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nimageSlide.listenEvent();\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/ProductPage/index.ts?");

/***/ }),

/***/ "./src/assets/ts/utils/selectElm.ts":
/*!******************************************!*\
  !*** ./src/assets/ts/utils/selectElm.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $: () => (/* binding */ $),\n/* harmony export */   $$: () => (/* binding */ $$)\n/* harmony export */ });\nconst $ = (selector, bindElm = document) => bindElm.querySelector(selector);\nconst $$ = (selector, bindElm = document) => bindElm.querySelectorAll(selector);\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/utils/selectElm.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/ts/ProductPage/index.ts");
/******/ 	
/******/ })()
;