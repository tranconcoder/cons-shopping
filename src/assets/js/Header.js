"use strict";
class ValidateForm {
    constructor() {
        this.notify = {
            required: "Không được để trống trường này!",
            minLength: (n) => "Độ dài tối thiểu từ " + n + " ký tự!",
            maxLength: (n) => "Độ dài tối đa là " + n + " ký tự!",
            equalLength: (n) => "Độ dài phải là " + n + "!",
            secureLevel1: "Phải bao gồm số, ký tự hoa, thường và ký tự đặc biệt",
            numberOnly: "Chỉ cho phép nhập số!",
            notSymbolCheck: "Không nhập ký tự đặc biệt vào trường này",
            isEmail: "Không đúng định dạng Email, vui lòng nhập lại!",
            requiredSymbol: "Trường này bắt buộc chứa ký tự đặc biệt",
            requiredUpper: "Trường này bắt buộc chứa ký tự in ho",
            requiredLower: "Trường này bắt buộc chứa ký tự in thường",
            requiredNumber: "Trường này bắt buộc chứa chữ số",
        };
    }
    required(value) {
        if (value.length == 0)
            return this.notify.required;
        else
            return false;
    }
    lengthCheck(value, type, range) {
        if (type === "min" && value.length < range)
            return this.notify.minLength(range);
        if (type === "max" && value.length > range)
            return this.notify.maxLength(range);
        if (type === "equal" && value.length !== range)
            return this.notify.equalLength(range);
        return false;
    }
    notSymbolCheck(value) {
        const regex = new RegExp(/^[A-Za-z0-9]*$/);
        return regex.test(value) ? false : this.notify.notSymbolCheck;
    }
    requiredSymbol(value) {
        const regex_symbols = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;
        return regex_symbols.test(value) ? false : this.notify.requiredSymbol;
    }
    requiredLower(value) {
        const regex_lower = /[a-z]/;
        return regex_lower.test(value) ? false : this.notify.requiredLower;
    }
    requiredUpper(value) {
        const regex_upper = /[A-Z]/;
        return regex_upper.test(value) ? false : this.notify.requiredUpper;
    }
    requiredNumber(value) {
        const regex_number = /[0-9]/;
        return regex_number.test(value) ? false : this.notify.requiredNumber;
    }
    numberOnly(value) {
        const regex_number_only = /^[0-9]*$/;
        return regex_number_only.test(value) ? false : this.notify.numberOnly;
    }
    isEmail(value) {
        const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex_email.test(value.toLowerCase())
            ? false
            : this.notify.isEmail;
    }
    // Min length: 8
    // Have: symbol, number, uppercase, lowercase
    secureLevel1(value) {
        const lengthCheckResult = this.lengthCheck(value, "min", 8);
        if (lengthCheckResult)
            return lengthCheckResult;
        const symbolCheckResult = this.requiredSymbol(value);
        const numberCheckResult = this.requiredNumber(value);
        const lowerCheckResult = this.requiredLower(value);
        const upperCheckResult = this.requiredUpper(value);
        const result = symbolCheckResult ||
            numberCheckResult ||
            lowerCheckResult ||
            upperCheckResult;
        return result ? this.notify.secureLevel1 : false;
    }
    setError(inputElm, errorMessage) {
        var _a;
        const parent = (_a = inputElm.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        const errorElm = parent.querySelector(".error-message");
        parent.classList.add("error");
        errorElm.textContent = errorMessage;
        return false;
    }
    removeError(inputElm) {
        var _a;
        const parent = (_a = inputElm.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        const errorMessageElm = parent.querySelector(".error-message");
        errorMessageElm.textContent = "";
        parent.classList.remove("error");
    }
    checkInputValues(inputElm, config) {
        const inputValue = inputElm.value;
        // Required check
        if (config.required) {
            const requiredCheckResult = this.required(inputValue);
            if (requiredCheckResult)
                return this.setError(inputElm, requiredCheckResult);
        }
        // isGmail check
        if (config.isEmail) {
            const isGmailCheckResult = this.isEmail(inputValue);
            if (isGmailCheckResult)
                return this.setError(inputElm, isGmailCheckResult);
        }
        if (config.numberOnly) {
            // Number only check
            const numberOnlyCheckResult = this.numberOnly(inputValue);
            if (numberOnlyCheckResult)
                return this.setError(inputElm, numberOnlyCheckResult);
        }
        // Not symbol check
        if (config.notSymbol) {
            const notSymbolCheckResult = this.notSymbolCheck(inputValue);
            if (notSymbolCheckResult)
                return this.setError(inputElm, notSymbolCheckResult);
        }
        // Secure level 1 for password
        if (config.secureLevel1) {
            const secureLevel1CheckResult = this.secureLevel1(inputValue);
            if (secureLevel1CheckResult)
                return this.setError(inputElm, secureLevel1CheckResult);
        }
        // Equal length check
        if (config.equalLength) {
            const equalLengthCheckResult = this.lengthCheck(inputValue, "equal", config.equalLength);
            if (equalLengthCheckResult)
                return this.setError(inputElm, equalLengthCheckResult);
        }
        // Min length check
        if (config.minLength) {
            const minLengthCheckResult = this.lengthCheck(inputValue, "min", config.minLength);
            if (minLengthCheckResult)
                return this.setError(inputElm, minLengthCheckResult);
        }
        // Max length check
        if (config.maxLength) {
            const maxLengthCheckResult = this.lengthCheck(inputValue, "max", config.maxLength);
            if (maxLengthCheckResult)
                return this.setError(inputElm, maxLengthCheckResult);
        }
        this.removeError(inputElm);
        return true;
    }
    listenAndValidateInput(inputElm, config) {
        inputElm.addEventListener("focusout", (e) => {
            this.checkInputValues(inputElm, config);
        });
    }
}
class LoginForm extends ValidateForm {
    constructor() {
        super();
        this.formElm = $(".authenticate-ctn .form-ctn.login");
        this.usernameInput = $("#username-input");
        this.passwordInput = $("#password-input");
    }
    listenEvent() {
        // Validate config
        const usernameConfig = {
            minLength: 6,
            maxLength: 24,
            notSymbol: true,
        };
        const passwordConfig = {
            secureLevel1: true,
        };
        // Listen focusout event and validate username input
        this.listenAndValidateInput(this.usernameInput, usernameConfig);
        // Password input
        this.listenAndValidateInput(this.passwordInput, passwordConfig);
        this.formElm.addEventListener("submit", (e) => {
            const usernameCheckResult = this.checkInputValues(this.usernameInput, usernameConfig);
            const passwordCheckResult = this.checkInputValues(this.passwordInput, passwordConfig);
            const allowSubmit = usernameCheckResult && passwordCheckResult;
            if (!allowSubmit)
                e.preventDefault();
        });
    }
}
class RegisterForm extends ValidateForm {
    constructor() {
        super();
        this.formElm = $(".authenticate-ctn .form-ctn.register");
        this.firstNameInput = $("#first-name-input");
        this.lastNameInput = $("#last-name-input");
        this.addressInput = $("#address-input");
        this.phoneNumberInput = $("#phone-number-input");
        this.gmailInput = $("#gmail-input");
    }
    listenEvent() {
        // Validate config
        const fistNameConfig = {
            required: true,
            minLength: 2,
            maxLength: 8,
            notSymbol: true,
        };
        const lastNameConfig = {
            required: true,
            minLength: 1,
            maxLength: 8,
            notSymbol: true,
        };
        const addressConfig = {
            required: true,
            minLength: 10,
            maxLength: 120,
        };
        const phoneNumberConfig = {
            required: true,
            numberOnly: true,
            equalLength: 10,
        };
        const gmailConfig = {
            required: true,
            isEmail: true,
        };
        // Listen and validate input on focusout
        this.listenAndValidateInput(this.firstNameInput, fistNameConfig);
        this.listenAndValidateInput(this.lastNameInput, lastNameConfig);
        this.listenAndValidateInput(this.addressInput, addressConfig);
        this.listenAndValidateInput(this.phoneNumberInput, phoneNumberConfig);
        this.listenAndValidateInput(this.gmailInput, gmailConfig);
    }
}
class AuthenticateBox {
    constructor() {
        this.loginForm = new LoginForm();
        this.registerForm = new RegisterForm();
        this.checkboxToShowBox = $("#toggle-register-auth-box");
    }
    listenChangeFormInput() {
        this.loginForm.listenEvent();
        this.registerForm.listenEvent();
    }
    listenEventToShowAndHideBox() {
        this.checkboxToShowBox.addEventListener("change", () => { });
    }
}
const authenticateBox = new AuthenticateBox();
authenticateBox.listenChangeFormInput();
authenticateBox.listenEventToShowAndHideBox();
authenticateBox.listenEventToShowAndHideBox();
