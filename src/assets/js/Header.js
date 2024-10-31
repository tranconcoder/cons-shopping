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

/***/ "./src/assets/ts/Header/authenticateBox.ts":
/*!*************************************************!*\
  !*** ./src/assets/ts/Header/authenticateBox.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_selectElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/selectElm */ \"./src/assets/ts/utils/selectElm.ts\");\n/* harmony import */ var _loginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginForm */ \"./src/assets/ts/Header/loginForm.ts\");\n/* harmony import */ var _registerForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerForm */ \"./src/assets/ts/Header/registerForm.ts\");\n\n\n\nclass AuthenticateBox {\n    constructor() {\n        this.loginForm = new _loginForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.registerForm = new _registerForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        this.checkboxToShowBox = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('#toggle-register-auth-box');\n    }\n    listenChangeFormInput() {\n        this.loginForm.listenEvent();\n        this.registerForm.listenEvent();\n    }\n    listenEventToShowAndHideBox() {\n        this.checkboxToShowBox.addEventListener('change', () => {\n            this.loginForm.resetForm();\n            this.registerForm.resetForm();\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthenticateBox);\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/Header/authenticateBox.ts?");

/***/ }),

/***/ "./src/assets/ts/Header/index.ts":
/*!***************************************!*\
  !*** ./src/assets/ts/Header/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _authenticateBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticateBox */ \"./src/assets/ts/Header/authenticateBox.ts\");\n/* harmony import */ var _loginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginForm */ \"./src/assets/ts/Header/loginForm.ts\");\n/* harmony import */ var _registerForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerForm */ \"./src/assets/ts/Header/registerForm.ts\");\n/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchBar */ \"./src/assets/ts/Header/searchBar.ts\");\n\n\n\n\nconst searchBar = new _searchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst loginForm = new _loginForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nloginForm.listenEvent();\nconst registerForm = new _registerForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nregisterForm.listenEvent();\nconst authenticateBox = new _authenticateBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nauthenticateBox.listenChangeFormInput();\nauthenticateBox.listenEventToShowAndHideBox();\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/Header/index.ts?");

/***/ }),

/***/ "./src/assets/ts/Header/loginForm.ts":
/*!*******************************************!*\
  !*** ./src/assets/ts/Header/loginForm.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_selectElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/selectElm */ \"./src/assets/ts/utils/selectElm.ts\");\n/* harmony import */ var _validateFormMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateFormMethod */ \"./src/assets/ts/Header/validateFormMethod.ts\");\n\n\nclass LoginForm extends _validateFormMethod__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor() {\n        super();\n        this.formElm = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('.authenticate-ctn .form-ctn.login');\n        this.usernameInput = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('#username-input');\n        this.passwordInput = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('#password-input');\n    }\n    listenEvent() {\n        // Validate config\n        const usernameConfig = {\n            required: true,\n            minLength: 6,\n            maxLength: 24,\n            notSymbol: true,\n        };\n        const passwordConfig = {\n            required: true,\n            secureLevel1: true,\n        };\n        // Listen focusout event and validate username input\n        this.listenAndValidateInput(this.usernameInput, usernameConfig);\n        // Password input\n        this.listenAndValidateInput(this.passwordInput, passwordConfig);\n        this.formElm.addEventListener('submit', (e) => {\n            const usernameCheckResult = this.checkInputValues(this.usernameInput, usernameConfig);\n            const passwordCheckResult = this.checkInputValues(this.passwordInput, passwordConfig);\n            const allowSubmit = usernameCheckResult && passwordCheckResult;\n            if (!allowSubmit)\n                e.preventDefault();\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/Header/loginForm.ts?");

/***/ }),

/***/ "./src/assets/ts/Header/registerForm.ts":
/*!**********************************************!*\
  !*** ./src/assets/ts/Header/registerForm.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validateFormMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateFormMethod */ \"./src/assets/ts/Header/validateFormMethod.ts\");\n/* harmony import */ var _utils_selectElm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/selectElm */ \"./src/assets/ts/utils/selectElm.ts\");\n\n\nclass RegisterForm extends _validateFormMethod__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        this.formElm = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_1__.$)('.authenticate-ctn .form-ctn.register');\n        this.usernameInput = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_1__.$)('#username-register-input');\n        this.passwordInput = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_1__.$)('#password-register-input');\n        this.retypePasswordInput = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_1__.$)('#retype-password-input');\n        this.firstNameInput = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_1__.$)('#first-name-input');\n        this.lastNameInput = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_1__.$)('#last-name-input');\n        this.addressInput = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_1__.$)('#address-input');\n        this.phoneNumberInput = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_1__.$)('#phone-number-input');\n        this.gmailInput = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_1__.$)('#gmail-input');\n    }\n    listenEvent() {\n        // Validate config\n        const usernameConfig = {\n            required: true,\n            minLength: 6,\n            maxLength: 16,\n            notSymbol: true,\n        };\n        const passwordConfig = {\n            required: true,\n            minLength: 8,\n            maxLength: 36,\n            secureLevel1: true,\n        };\n        const retypePasswordConfig = Object.assign(Object.assign({}, passwordConfig), { equalInputValue: {\n                value: this.retypePasswordInput.value,\n                inputLabel: 'mật khẩu',\n                inputToCompare: this.passwordInput,\n            } });\n        const firstNameConfig = {\n            required: true,\n            minLength: 2,\n            maxLength: 8,\n            notSymbol: true,\n        };\n        const lastNameConfig = {\n            required: true,\n            minLength: 2,\n            maxLength: 8,\n            notSymbol: true,\n        };\n        const addressConfig = {\n            required: true,\n            minLength: 10,\n            maxLength: 120,\n        };\n        const phoneNumberConfig = {\n            required: true,\n            numberOnly: true,\n            equalLength: 10,\n        };\n        const gmailConfig = {\n            isEmail: true,\n        };\n        // Listen and validate input on focusout\n        this.listenAndValidateInput(this.usernameInput, usernameConfig);\n        this.listenAndValidateInput(this.passwordInput, passwordConfig);\n        this.listenAndValidateInput(this.retypePasswordInput, retypePasswordConfig);\n        this.listenAndValidateInput(this.firstNameInput, firstNameConfig);\n        this.listenAndValidateInput(this.lastNameInput, lastNameConfig);\n        this.listenAndValidateInput(this.addressInput, addressConfig);\n        this.listenAndValidateInput(this.phoneNumberInput, phoneNumberConfig);\n        this.listenAndValidateInput(this.gmailInput, gmailConfig);\n        this.formElm.addEventListener('submit', (e) => {\n            const usernameCheckResult = this.checkInputValues(this.usernameInput, usernameConfig);\n            const passwordCheckResult = this.checkInputValues(this.passwordInput, passwordConfig);\n            const retypePasswordCheckResult = this.checkInputValues(this.retypePasswordInput, retypePasswordConfig);\n            const firstNameCheckResult = this.checkInputValues(this.firstNameInput, firstNameConfig);\n            const lastNameCheckResult = this.checkInputValues(this.lastNameInput, lastNameConfig);\n            const addressCheckResult = this.checkInputValues(this.addressInput, addressConfig);\n            const phoneNumberCheckResult = this.checkInputValues(this.phoneNumberInput, phoneNumberConfig);\n            const gmailCheckResult = this.checkInputValues(this.gmailInput, gmailConfig);\n            if (!usernameCheckResult ||\n                !passwordCheckResult ||\n                !retypePasswordCheckResult ||\n                !firstNameCheckResult ||\n                !lastNameCheckResult ||\n                !addressCheckResult ||\n                !phoneNumberCheckResult ||\n                !gmailCheckResult) {\n                e.preventDefault();\n            }\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/Header/registerForm.ts?");

/***/ }),

/***/ "./src/assets/ts/Header/searchBar.ts":
/*!*******************************************!*\
  !*** ./src/assets/ts/Header/searchBar.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_selectElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/selectElm */ \"./src/assets/ts/utils/selectElm.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nclass SearchBar {\n    constructor() {\n        // Event state\n        this.focusing = false;\n        this.searchBox = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('#search-box');\n        this.searchInput = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('.search-input');\n        this.submitButton = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('.search-input ~ .submit-button');\n        this.searchProductListElm = (0,_utils_selectElm__WEBPACK_IMPORTED_MODULE_0__.$)('.search-products__list', this.searchBox);\n        this.listenAndHandleEvent();\n    }\n    listenAndHandleEvent() {\n        this.listenAndHandleSubmit();\n        this.listenAndHandleSearch();\n    }\n    listenAndHandleSearch() {\n        this.handleSearchProduct();\n        this.searchInput.addEventListener('input', this.handleSearchProduct.bind(this));\n    }\n    listenAndHandleSubmit() {\n        // Submit while press enter\n        this.searchInput.addEventListener('focusin', () => {\n            window.addEventListener('keypress', this.handleSubmitByKeyPress.bind(this));\n        });\n        this.searchInput.addEventListener('focusout', () => {\n            window.removeEventListener('keypress', this.handleSubmitByKeyPress.bind(this));\n        });\n        // Submit while click submit button\n        this.submitButton.addEventListener('click', this.handleSubmit.bind(this));\n    }\n    handleSearchProduct() {\n        clearInterval(Number(this.timeoutIdSubmitAfterStopInputSearch));\n        this.timeoutIdSubmitAfterStopInputSearch = setTimeout(() => __awaiter(this, void 0, void 0, function* () {\n            if (!this.searchInput.value) {\n                return (this.searchProductListElm.innerHTML = '');\n            }\n            const url = `/api/search-product?q=${this.searchInput.value}`;\n            const productList = yield fetch(url, {\n                method: 'GET',\n            }).then((res) => res.json());\n            this.renderSearchProducts(productList);\n        }), 500);\n    }\n    handleSubmitByKeyPress(e) {\n        if (e.code === 'Enter')\n            this.handleSubmit();\n    }\n    handleSubmit() {\n        this.searchInput.value = this.searchInput.value.replace(/[^\\w\\s]/gi, '');\n        if (this.searchInput.value.trim().length) {\n            window.location.href = '/search?q=' + this.searchInput.value;\n        }\n    }\n    renderSearchProducts(products) {\n        this.searchProductListElm.innerHTML = '';\n        products.forEach((product) => {\n            const itemElm = document.createElement('li');\n            itemElm.innerHTML = `\n                <a href=\"/product?id=${product.productId}\">\n                    <img\n                        src=\"${product.thumb || ''}\"\n                        alt=\"thumb\"\n                    >\n                        \n                    <h4>${product.label}</h4>\n                </a>\n            `;\n            this.searchProductListElm.appendChild(itemElm);\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/Header/searchBar.ts?");

/***/ }),

/***/ "./src/assets/ts/Header/validateFormMethod.ts":
/*!****************************************************!*\
  !*** ./src/assets/ts/Header/validateFormMethod.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ValidateForm {\n    constructor() {\n        this.notify = {\n            required: 'Không được để trống trường này!',\n            minLength: (n) => 'Độ dài tối thiểu từ ' + n + ' ký tự!',\n            maxLength: (n) => 'Độ dài tối đa là ' + n + ' ký tự!',\n            equalLength: (n) => 'Độ dài phải là ' + n + '!',\n            secureLevel1: 'Phải bao gồm số, ký tự hoa, thường và ký tự đặc biệt',\n            numberOnly: 'Chỉ cho phép nhập số!',\n            notSymbolCheck: 'Không nhập ký tự đặc biệt vào trường này',\n            isEmail: 'Không đúng định dạng Email, vui lòng nhập lại!',\n            requiredSymbol: 'Trường này bắt buộc chứa ký tự đặc biệt',\n            requiredUpper: 'Trường này bắt buộc chứa ký tự in ho',\n            requiredLower: 'Trường này bắt buộc chứa ký tự in thường',\n            requiredNumber: 'Trường này bắt buộc chứa chữ số',\n            equalInputValue: (label) => 'Giá trị vừa nhập không khớp với trường ' + label + '!',\n        };\n    }\n    required(value) {\n        if (value.length == 0)\n            return this.notify.required;\n        else\n            return false;\n    }\n    lengthCheck(value, type, range) {\n        if (type === 'min' && value.length < range)\n            return this.notify.minLength(range);\n        if (type === 'max' && value.length > range)\n            return this.notify.maxLength(range);\n        if (type === 'equal' && value.length !== range)\n            return this.notify.equalLength(range);\n        return false;\n    }\n    notSymbolCheck(value) {\n        const regex = new RegExp(/^[A-Za-z0-9]*$/);\n        return regex.test(value) ? false : this.notify.notSymbolCheck;\n    }\n    requiredSymbol(value) {\n        const regex_symbols = /[-!$%^&*()_+|~=`{}\\[\\]:\\/;<>?,.@#]/;\n        return regex_symbols.test(value) ? false : this.notify.requiredSymbol;\n    }\n    requiredLower(value) {\n        const regex_lower = /[a-z]/;\n        return regex_lower.test(value) ? false : this.notify.requiredLower;\n    }\n    requiredUpper(value) {\n        const regex_upper = /[A-Z]/;\n        return regex_upper.test(value) ? false : this.notify.requiredUpper;\n    }\n    requiredNumber(value) {\n        const regex_number = /[0-9]/;\n        return regex_number.test(value) ? false : this.notify.requiredNumber;\n    }\n    numberOnly(value) {\n        const regex_number_only = /^[0-9]*$/;\n        return regex_number_only.test(value) ? false : this.notify.numberOnly;\n    }\n    isEmail(value) {\n        const regex_email = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|.(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-za-z\\-0-9]+\\.)+[a-za-z]{2,}))$/;\n        return regex_email.test(value.toLowerCase())\n            ? false\n            : this.notify.isEmail;\n    }\n    // Min length: 8\n    // Have: symbol, number, uppercase, lowercase\n    secureLevel1(value) {\n        const lengthCheckResult = this.lengthCheck(value, 'min', 8);\n        if (lengthCheckResult)\n            return lengthCheckResult;\n        const symbolCheckResult = this.requiredSymbol(value);\n        const numberCheckResult = this.requiredNumber(value);\n        const lowerCheckResult = this.requiredLower(value);\n        const upperCheckResult = this.requiredUpper(value);\n        const result = symbolCheckResult ||\n            numberCheckResult ||\n            lowerCheckResult ||\n            upperCheckResult;\n        return result ? this.notify.secureLevel1 : false;\n    }\n    equalInputValue(value, inputToCompare, inputLabel) {\n        if (value !== inputToCompare.value) {\n            return this.notify.equalInputValue(inputLabel);\n        }\n        else\n            return false;\n    }\n    setError(inputElm, errorMessage) {\n        var _a;\n        const parent = (_a = inputElm.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;\n        const errorElm = parent.querySelector('.error-message');\n        parent.classList.add('error');\n        errorElm.textContent = errorMessage;\n        return false;\n    }\n    removeError(inputElm) {\n        var _a;\n        const parent = (_a = inputElm.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;\n        const errorMessageElm = parent.querySelector('.error-message');\n        errorMessageElm.textContent = '';\n        parent.classList.remove('error');\n    }\n    checkInputValues(inputElm, config) {\n        const inputValue = inputElm.value;\n        // Required check\n        if (config.required) {\n            const requiredCheckResult = this.required(inputValue);\n            if (requiredCheckResult)\n                return this.setError(inputElm, requiredCheckResult);\n        }\n        else {\n            if (inputValue.length === 0) {\n                this.removeError(inputElm);\n                return true;\n            }\n        }\n        // isGmail check\n        if (config.isEmail) {\n            const isGmailCheckResult = this.isEmail(inputValue);\n            if (isGmailCheckResult)\n                return this.setError(inputElm, isGmailCheckResult);\n        }\n        if (config.numberOnly) {\n            // Number only check\n            const numberOnlyCheckResult = this.numberOnly(inputValue);\n            if (numberOnlyCheckResult)\n                return this.setError(inputElm, numberOnlyCheckResult);\n        }\n        // Not symbol check\n        if (config.notSymbol) {\n            const notSymbolCheckResult = this.notSymbolCheck(inputValue);\n            if (notSymbolCheckResult)\n                return this.setError(inputElm, notSymbolCheckResult);\n        }\n        // Secure level 1 for password\n        if (config.secureLevel1) {\n            const secureLevel1CheckResult = this.secureLevel1(inputValue);\n            if (secureLevel1CheckResult)\n                return this.setError(inputElm, secureLevel1CheckResult);\n        }\n        // Equal length check\n        if (config.equalLength) {\n            const equalLengthCheckResult = this.lengthCheck(inputValue, 'equal', config.equalLength);\n            if (equalLengthCheckResult)\n                return this.setError(inputElm, equalLengthCheckResult);\n        }\n        // Min length check\n        if (config.minLength) {\n            const minLengthCheckResult = this.lengthCheck(inputValue, 'min', config.minLength);\n            if (minLengthCheckResult)\n                return this.setError(inputElm, minLengthCheckResult);\n        }\n        // Max length check\n        if (config.maxLength) {\n            const maxLengthCheckResult = this.lengthCheck(inputValue, 'max', config.maxLength);\n            if (maxLengthCheckResult)\n                return this.setError(inputElm, maxLengthCheckResult);\n        }\n        // Equal input value check\n        if (config.equalInputValue) {\n            const equalInputValueCheckResult = this.equalInputValue(inputValue, config.equalInputValue.inputToCompare, config.equalInputValue.inputLabel);\n            if (equalInputValueCheckResult) {\n                return this.setError(inputElm, equalInputValueCheckResult);\n            }\n        }\n        this.removeError(inputElm);\n        return true;\n    }\n    listenAndValidateInput(inputElm, config) {\n        inputElm.addEventListener('focusout', (e) => {\n            this.checkInputValues(inputElm, config);\n        });\n    }\n    resetForm() {\n        const keyList = Object.getOwnPropertyNames(this);\n        // Reset form\n        const formElmList = keyList\n            // Filter keyof form element\n            .filter((key) => {\n            return (this[key] instanceof\n                HTMLFormElement);\n        })\n            // Get form element\n            .map((formElmKey) => this[formElmKey])\n            // Reset form element\n            .forEach((formElm) => {\n            formElm.reset();\n        });\n        // Reset input\n        const inputElmList = keyList\n            // Filter keyof input element\n            .filter((key) => {\n            return (this[key] instanceof\n                HTMLInputElement);\n        })\n            // Get input element\n            .map((inputElmKey) => this[inputElmKey])\n            // Remove error input element\n            .forEach((inputElm) => {\n            this.removeError(inputElm);\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidateForm);\n\n\n//# sourceURL=webpack://cons-shopping/./src/assets/ts/Header/validateFormMethod.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/ts/Header/index.ts");
/******/ 	
/******/ })()
;