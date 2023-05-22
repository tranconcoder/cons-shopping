class ValidateForm {
	private formElm: HTMLFormElement;
	private usernameInput: HTMLInputElement;
	private passwordInput: HTMLInputElement;
	private readonly notify = {
		required: "Không được để trống trường này!",
		minLength: (n: number) => "Độ dài tối thiểu từ " + n + " ký tự!",
		maxLength: (n: number) => "Độ dài tối đa là " + n + " ký tự!",
		secureLevel1: "Phải bao gồm số, ký tự hoa, thường và ký tự đặc biệt",
		notSymbolCheck: "Không nhập ký tự đặc biệt vào trường này",
		requiredSymbol: "Trường này bắt buộc chứa ký tự đặc biệt",
		requiredUpper: "Trường này bắt buộc chứa ký tự in ho",
		requiredLower: "Trường này bắt buộc chứa ký tự in thường",
		requiredNumber: "Trường này bắt buộc chứa chữ số",
	};

	constructor() {
		const $ = (query: string, bindElm: Document | HTMLElement = document) =>
			bindElm.querySelector(query) as HTMLElement;

		this.formElm = $(".authenticate-ctn .form-ctn") as HTMLFormElement;
		console.log(this.formElm);
		this.usernameInput = $(
			".username input",
			this.formElm
		) as HTMLInputElement;
		this.passwordInput = $(
			".password input",
			this.formElm
		) as HTMLInputElement;
	}

	public listenEvent() {
		this.usernameInput.addEventListener("focusout", (e) => {
			const inputElm = e.target as HTMLInputElement;
			this.checkInputValues(inputElm, {
				minLength: 6,
				maxLength: 24,
				notSymbol: true,
			});
		});

		this.passwordInput.addEventListener("focusout", (e) => {
			const inputElm = e.target as HTMLInputElement;
			this.checkInputValues(inputElm, {
				secureLevel1: true,
			});
		});

		this.formElm.addEventListener("submit", (e) => {
			const usernameCheckResult = this.checkInputValues(
				this.usernameInput,
				{
					minLength: 6,
					maxLength: 24,
					notSymbol: true,
				}
			);
			const passwordCheckResult = this.checkInputValues(
				this.passwordInput,
				{
					secureLevel1: true,
				}
			);

			const allowSubmit = usernameCheckResult && passwordCheckResult;

			if (!allowSubmit) e.preventDefault();
		});
	}

	public required(value: String) {
		if (value.length == 0) return this.notify.required;
		else return false;
	}

	public lengthCheck(value: string, type = "min", range: number) {
		if (type === "min" && value.length < range)
			return this.notify.minLength(range);
		if (type === "max" && value.length > range)
			return this.notify.maxLength(range);
		return false;
	}

	public notSymbolCheck(value: string) {
		const regex = new RegExp(/^[A-Za-z0-9]*$/);
		return regex.test(value) ? false : this.notify.notSymbolCheck;
	}

	public requiredSymbol(value: string) {
		const regex_symbols = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;
		return regex_symbols.test(value) ? false : this.notify.requiredSymbol;
	}

	public requiredLower(value: string) {
		const regex_lower = /[a-z]/;
		return regex_lower.test(value) ? false : this.notify.requiredLower;
	}

	public requiredUpper(value: string) {
		const regex_upper = /[A-Z]/;
		return regex_upper.test(value) ? false : this.notify.requiredUpper;
	}

	public requiredNumber(value: string) {
		const regex_number = /[0-9]/;
		return regex_number.test(value) ? false : this.notify.requiredNumber;
	}

	// Min length: 8
	// Have: symbol, number, uppercase, lowercase
	public secureLevel1(value: string) {
		const lengthCheckResult = this.lengthCheck(value, "min", 8);
		if (lengthCheckResult) return lengthCheckResult;

		const symbolCheckResult = this.requiredSymbol(value);
		const numberCheckResult = this.requiredNumber(value);
		const lowerCheckResult = this.requiredLower(value);
		const upperCheckResult = this.requiredUpper(value);

		const result =
			symbolCheckResult ||
			numberCheckResult ||
			lowerCheckResult ||
			upperCheckResult;

		return result ? this.notify.secureLevel1 : false;
	}

	public setError(inputElm: HTMLInputElement, errorMessage: string) {
		const parent = inputElm.parentElement?.parentElement as HTMLDivElement;
		const errorElm = parent.querySelector(
			".error-message"
		) as HTMLParagraphElement;

		parent.classList.add("error");
		errorElm.textContent = errorMessage;

		return false;
	}

	public removeError(inputElm: HTMLInputElement) {
		const parent = inputElm.parentElement?.parentElement as HTMLDivElement;
		const errorMessageElm = parent.querySelector(
			".error-message"
		) as HTMLParagraphElement;

		errorMessageElm.textContent = "";
		parent.classList.remove("error");
	}

	public checkInputValues(
		inputElm: HTMLInputElement,
		config: Partial<{
			required: boolean;
			minLength: number;
			maxLength: number;
			notSymbol: boolean;
			secureLevel1: boolean;
		}>
	) {
		const inputValue = inputElm.value;

		// Required check
		if (config.required) {
			const requiredCheckResult = this.required(inputValue);
			if (requiredCheckResult)
				return this.setError(inputElm, requiredCheckResult);
		}

		// Min length check
		if (config.minLength) {
			const minLengthCheckResult = this.lengthCheck(
				inputValue,
				"min",
				config.minLength
			);
			if (minLengthCheckResult)
				return this.setError(inputElm, minLengthCheckResult);
		}

		// Max length check
		if (config.maxLength) {
			const maxLengthCheckResult = this.lengthCheck(
				inputValue,
				"max",
				config.maxLength
			);

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
	private checkboxToShowBox: HTMLInputElement;

	constructor() {
		const $ = (query: string, bindElm: Document | HTMLElement = document) =>
			bindElm.querySelector(query) as HTMLElement;

		this.checkboxToShowBox = $("#box-visible-state") as HTMLInputElement;
	}

	public listenEventToShowAndHideBox() {}
}

const validate = new ValidateForm();
validate.listenEvent();
