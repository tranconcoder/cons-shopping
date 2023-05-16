const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const formElm = document.querySelector(".form-ctn");

const requiredNotify = "Không được để trống trường này!";
const minLengthNotify = (n) => "Độ dài tối thiểu từ " + n + " ký tự!";
const maxLengthNotify = (n) => "Độ dài tối đa là " + n + " ký tự!";
const secureLevel1Notify =
	"Phải bao gồm số, ký tự hoa, thường và ký tự đặc biệt";
const notSymbolCheckNotify = "Không nhập ký tự đặc biệt vào trường này";
const requiredSymbolNotify = "Trường này bắt buộc chứa ký tự đặc biệt";
const requiredUpperNotify = "Trường này bắt buộc chứa ký tự in hoa";
const requiredLowerNotify = "Trường này bắt buộc chứa ký tự in thường";
const requiredNumberNotify = "Trường này bắt buộc chứa chữ số";

function required(value) {
	if (value.length == 0) return requiredNotify;
	else return false;
}

function lengthCheck(value, type = "min", range) {
	if (type === "min" && value.length < range) return minLengthNotify(range);
	if (type === "max" && value.length > range) return maxLengthNotify(range);
	return false;
}

function notSymbolCheck(value) {
	const regex = new RegExp(/^[A-Za-z0-9]*$/);
	return regex.test(value) ? false : notSymbolCheckNotify;
}

function requiredSymbol(value) {
	const regex_symbols = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;
	return regex_symbols.test(value) ? false : requiredSymbolNotify;
}

function requiredLower(value) {
	const regex_lower = /[a-z]/;
	return regex_lower.test(value) ? false : requiredLowerNotify;
}

function requiredUpper(value) {
	const regex_upper = /[A-Z]/;
	return regex_upper.test(value) ? false : requiredUpperNotify;
}

function requiredNumber(value) {
	const regex_number = /[0-9]/;
	return regex_number.test(value) ? false : requiredNumberNotify;
}

// Min length: 8
// Have: symbol, number, uppercase, lowercase
function secureLevel1(value) {
	const lengthCheckResult = lengthCheck(value, "min", 8);
	if (lengthCheckResult) return lengthCheckResult;

	const symbolCheckResult = requiredSymbol(value);
	const numberCheckResult = requiredNumber(value);
	const lowerCheckResult = requiredLower(value);
	const upperCheckResult = requiredUpper(value);

	const result =
		symbolCheckResult ||
		numberCheckResult ||
		lowerCheckResult ||
		upperCheckResult;

	return result ? secureLevel1Notify : false;
}

function setError(inputElm, errorMessage) {
	const errorElm =
		inputElm.parentNode.parentNode.querySelector(".error-message");

	inputElm.parentNode.parentNode.classList.add("error");
	errorElm.textContent = errorMessage;

	return false;
}

function removeError(inputElm) {
	const errorMessageElm =
		inputElm.parentNode.parentNode.querySelector(".error-message");
	errorMessageElm.textContent = "";
	inputElm.parentNode.parentNode.classList.remove("error");
}

function checkInputValues(
	elm,
	config = {
		required: true,
		minLength: 4,
		maxLength: 30,
		notSymbol: true,
		secureLevel1: true,
	}
) {
	const inputValue = elm.value;

	// Required check
	if (config.required) {
		const requiredCheckResult = required(inputValue);
		if (requiredCheckResult) return setError(elm, requiredCheckResult);
	}

	// Min length check
	if (config.minLength) {
		const minLengthCheckResult = lengthCheck(
			inputValue,
			"min",
			config.minLength
		);
		if (minLengthCheckResult) return setError(elm, minLengthCheckResult);
	}

	// Max length check
	if (config.maxLength) {
		const maxLengthCheckResult = lengthCheck(
			inputValue,
			"max",
			config.maxLength
		);

		if (maxLengthCheckResult) return setError(elm, maxLengthCheckResult);
	}

	// Not symbol check
	if (config.notSymbol) {
		const notSymbolCheckResult = notSymbolCheck(inputValue);
		if (notSymbolCheckResult) return setError(elm, notSymbolCheckResult);
	}

	// Secure level 1 for password
	if (config.secureLevel1) {
		const secureLevel1CheckResult = secureLevel1(inputValue);
		if (secureLevel1CheckResult)
			return setError(elm, secureLevel1CheckResult);
	}

	removeError(elm);
	return true;
}

usernameInput.addEventListener("focusout", (e) => {
	checkInputValues(e.target, {
		minLength: 6,
		maxLength: 24,
		notSymbol: true,
	});
});

passwordInput.addEventListener("focusout", (e) => {
	checkInputValues(e.target, {
		secureLevel1: true,
	});
});

formElm.addEventListener("submit", (e) => {
	const usernameCheckResult = checkInputValues(usernameInput, {
		minLength: 6,
		maxLength: 24,
		notSymbol: true,
	});
	const passwordCheckResult = checkInputValues(passwordInput, {
		secureLevel1: true,
	});

	const allowSubmit = usernameCheckResult && passwordCheckResult;

	if (!allowSubmit) e.preventDefault();
});
