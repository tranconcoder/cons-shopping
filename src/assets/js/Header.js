"use strict";
class ValidateForm {
    constructor() {
        this.notify = {
            required: "Không được để trống trường này!",
            minLength: (n) => "Độ dài tối thiểu từ " + n + " ký tự!",
            maxLength: (n) => "Độ dài tối đa là " + n + " ký tự!",
            secureLevel1: "Phải bao gồm số, ký tự hoa, thường và ký tự đặc biệt",
            notSymbolCheck: "Không nhập ký tự đặc biệt vào trường này",
            requiredSymbol: "Trường này bắt buộc chứa ký tự đặc biệt",
            requiredUpper: "Trường này bắt buộc chứa ký tự in ho",
            requiredLower: "Trường này bắt buộc chứa ký tự in thường",
            requiredNumber: "Trường này bắt buộc chứa chữ số",
        };
        const $ = (query, bindElm = document) => bindElm.querySelector(query);
        this.formElm = $(".authenticate-ctn .form-ctn");
        console.log(this.formElm);
        this.usernameInput = $(".username input", this.formElm);
        this.passwordInput = $(".password input", this.formElm);
    }
    listenEvent() {
        this.usernameInput.addEventListener("focusout", (e) => {
            const inputElm = e.target;
            this.checkInputValues(inputElm, {
                minLength: 6,
                maxLength: 24,
                notSymbol: true,
            });
        });
        this.passwordInput.addEventListener("focusout", (e) => {
            const inputElm = e.target;
            this.checkInputValues(inputElm, {
                secureLevel1: true,
            });
        });
        this.formElm.addEventListener("submit", (e) => {
            const usernameCheckResult = this.checkInputValues(this.usernameInput, {
                minLength: 6,
                maxLength: 24,
                notSymbol: true,
            });
            const passwordCheckResult = this.checkInputValues(this.passwordInput, {
                secureLevel1: true,
            });
            const allowSubmit = usernameCheckResult && passwordCheckResult;
            if (!allowSubmit)
                e.preventDefault();
        });
    }
    required(value) {
        if (value.length == 0)
            return this.notify.required;
        else
            return false;
    }
    lengthCheck(value, type = "min", range) {
        if (type === "min" && value.length < range)
            return this.notify.minLength(range);
        if (type === "max" && value.length > range)
            return this.notify.maxLength(range);
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
        this.removeError(inputElm);
        return true;
    }
}
class AuthenticateBox {
    constructor() {
        const $ = (query, bindElm = document) => bindElm.querySelector(query);
        this.checkboxToShowBox = $("#box-visible-state");
    }
    listenEventToShowAndHideBox() { }
}
const validate = new ValidateForm();
validate.listenEvent();
