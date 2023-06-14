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

/***/ "./src/assets/ts/Common/index.ts":
/*!***************************************!*\
  !*** ./src/assets/ts/Common/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $: () => (/* binding */ $),\n/* harmony export */   $$: () => (/* binding */ $$)\n/* harmony export */ });\nconst $ = (selector, bindElm = document) => bindElm.querySelector(selector);\nconst $$ = (selector, bindElm = document) => bindElm.querySelectorAll(selector);\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/Common/index.ts?");

/***/ }),

/***/ "./src/assets/ts/HomePage/imageSlide.ts":
/*!**********************************************!*\
  !*** ./src/assets/ts/HomePage/imageSlide.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Common/index */ \"./src/assets/ts/Common/index.ts\");\n\nclass ImageSlide {\n    constructor() {\n        this.currentImageIndex = 0;\n        // Auto next image each 10s\n        this.TIME_CHANGE_IMAGE = 10 * 1000;\n        this.imageSlideElm = (0,_Common_index__WEBPACK_IMPORTED_MODULE_0__.$)('.image-slide-ctn');\n        this.imageListElm = (0,_Common_index__WEBPACK_IMPORTED_MODULE_0__.$)('.image-list', this.imageSlideElm);\n        this.progressBarElm = (0,_Common_index__WEBPACK_IMPORTED_MODULE_0__.$)('.progress-bar', this.imageSlideElm);\n        this.prevButton = (0,_Common_index__WEBPACK_IMPORTED_MODULE_0__.$)('.prev-button', this.imageSlideElm);\n        this.nextButton = (0,_Common_index__WEBPACK_IMPORTED_MODULE_0__.$)('.next-button', this.imageSlideElm);\n        this.IMAGE_COUNT = this.imageListElm.childElementCount;\n        this.listenEventButton();\n        this.setIntervalAutoChangeImage();\n    }\n    clearEventButton() {\n        this.prevButton.removeEventListener('click', this.handlePrevImage.bind(this));\n        // Next button\n        this.nextButton.removeEventListener('click', this.handleNextImage.bind(this));\n        // Progress bar\n        this.progressBarElm.addEventListener('click', this.handleClickProgressBar.bind(this));\n    }\n    listenEventButton() {\n        // Clear before listener\n        this.clearEventButton();\n        // Prev button\n        this.prevButton.addEventListener('click', this.handlePrevImage.bind(this));\n        // Next button\n        this.nextButton.addEventListener('click', this.handleNextImage.bind(this));\n        // Progress bar\n        this.progressBarElm.addEventListener('click', this.handleClickProgressBar.bind(this));\n    }\n    setIntervalAutoChangeImage() {\n        clearInterval(this.autoChangeImageIntervalId);\n        this.autoChangeImageIntervalId = setInterval(this.handleNextImage.bind(this), this.TIME_CHANGE_IMAGE);\n    }\n    handlePrevImage() {\n        if (this.currentImageIndex === 0) {\n            this.currentImageIndex = this.IMAGE_COUNT - 1;\n        }\n        else\n            this.currentImageIndex--;\n        this.resetSlideStyle();\n    }\n    handleNextImage() {\n        if (this.currentImageIndex === this.IMAGE_COUNT - 1) {\n            this.currentImageIndex = 0;\n        }\n        else\n            this.currentImageIndex++;\n        this.resetSlideStyle();\n    }\n    handleJumpImage(newPosition) {\n        // Validate input data\n        if (newPosition >= this.IMAGE_COUNT)\n            newPosition = this.IMAGE_COUNT - 1;\n        if (newPosition < 0)\n            newPosition = 0;\n        // Update new index\n        this.currentImageIndex = newPosition;\n        // Reset style\n        this.resetSlideStyle();\n    }\n    resetSlideStyle() {\n        // Reset auto next image interval\n        this.setIntervalAutoChangeImage();\n        // Set new image list position\n        this.imageListElm.style.transform = `translateX(-${this.currentImageIndex * 100}%)`;\n        // Reset dot list style\n        // Remove current active dot\n        const currentActiveDot = (0,_Common_index__WEBPACK_IMPORTED_MODULE_0__.$)('.dot.active', this.progressBarElm);\n        currentActiveDot.classList.remove('active');\n        // Set new active dot\n        const newActiveDot = (0,_Common_index__WEBPACK_IMPORTED_MODULE_0__.$)(`.dot[data-index=\"${this.currentImageIndex}\"`, this.imageSlideElm);\n        newActiveDot.classList.add('active');\n    }\n    handleClickProgressBar(e) {\n        const target = e.target;\n        if (target === null || target === void 0 ? void 0 : target.hasAttribute('data-index')) {\n            this.handleJumpImage(Number(target.dataset.index));\n        }\n    }\n}\nconst imageSlide = new ImageSlide();\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/HomePage/imageSlide.ts?");

/***/ }),

/***/ "./src/assets/ts/HomePage/index.ts":
/*!*****************************************!*\
  !*** ./src/assets/ts/HomePage/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _imageSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageSlide */ \"./src/assets/ts/HomePage/imageSlide.ts\");\n\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/HomePage/index.ts?");

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