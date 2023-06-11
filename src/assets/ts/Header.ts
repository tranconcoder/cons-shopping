if (location.href.includes("login-success=false")) {
	alert("Đăng nhập thất bại!");
}

class SearchBar {
	private searchInput: HTMLInputElement;
	private submitButton: HTMLButtonElement;

	// Event state
	private focusing = false;

	public constructor() {
		this.searchInput = $(".search-input");
		this.submitButton = $(".search-input ~ .submit-button");
	}

	public listenAndHandleSubmit() {
		// Submit while press enter
		this.searchInput.addEventListener("focusin", (e) => {
			window.addEventListener(
				"keypress",
				this.handleSubmitByKeyPress.bind(this)
			);
		});

		this.searchInput.addEventListener("focusout", (e) => {
			window.removeEventListener(
				"keypress",
				this.handleSubmitByKeyPress.bind(this)
			);
		});

		// Submit while click submit button
		this.submitButton.addEventListener(
			"click",
			this.handleSubmit.bind(this)
		);
	}

	private handleSubmitByKeyPress(e: KeyboardEvent) {
		if (e.code === "Enter") this.handleSubmit();
	}

	private handleSubmit() {
		this.searchInput.value = this.searchInput.value.replace(
			/[^\w\s]/gi,
			""
		);

		if (this.searchInput.value.trim().length) {
			window.location.href = "/search?q=" + this.searchInput.value;
		}
	}
}
const searchBar = new SearchBar();
searchBar.listenAndHandleSubmit();

type ValidateFormConfig = Partial<{
	required: boolean;
	equalLength: number;
	minLength: number;
	maxLength: number;
	numberOnly: boolean;
	notSymbol: boolean;
	secureLevel1: boolean;
	isEmail: boolean;
	equalInputValue: {
		inputToCompare: HTMLInputElement;
		inputLabel: string;
	};
}>;

class ValidateForm {
	protected readonly notify = {
		required: "Không được để trống trường này!",
		minLength: (n: number) => "Độ dài tối thiểu từ " + n + " ký tự!",
		maxLength: (n: number) => "Độ dài tối đa là " + n + " ký tự!",
		equalLength: (n: number) => "Độ dài phải là " + n + "!",
		secureLevel1: "Phải bao gồm số, ký tự hoa, thường và ký tự đặc biệt",
		numberOnly: "Chỉ cho phép nhập số!",
		notSymbolCheck: "Không nhập ký tự đặc biệt vào trường này",
		isEmail: "Không đúng định dạng Email, vui lòng nhập lại!",
		requiredSymbol: "Trường này bắt buộc chứa ký tự đặc biệt",
		requiredUpper: "Trường này bắt buộc chứa ký tự in ho",
		requiredLower: "Trường này bắt buộc chứa ký tự in thường",
		requiredNumber: "Trường này bắt buộc chứa chữ số",
		equalInputValue: (label: string) =>
			"Giá trị vừa nhập không khớp với trường " + label + "!",
	};

	constructor() {}

	private required(value: String) {
		if (value.length == 0) return this.notify.required;
		else return false;
	}

	private lengthCheck(
		value: string,
		type: "min" | "max" | "equal",
		range: number
	) {
		if (type === "min" && value.length < range)
			return this.notify.minLength(range);
		if (type === "max" && value.length > range)
			return this.notify.maxLength(range);
		if (type === "equal" && value.length !== range)
			return this.notify.equalLength(range);
		return false;
	}

	private notSymbolCheck(value: string) {
		const regex = new RegExp(/^[A-Za-z0-9]*$/);
		return regex.test(value) ? false : this.notify.notSymbolCheck;
	}

	private requiredSymbol(value: string) {
		const regex_symbols = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;
		return regex_symbols.test(value) ? false : this.notify.requiredSymbol;
	}

	private requiredLower(value: string) {
		const regex_lower = /[a-z]/;
		return regex_lower.test(value) ? false : this.notify.requiredLower;
	}

	private requiredUpper(value: string) {
		const regex_upper = /[A-Z]/;
		return regex_upper.test(value) ? false : this.notify.requiredUpper;
	}

	private requiredNumber(value: string) {
		const regex_number = /[0-9]/;
		return regex_number.test(value) ? false : this.notify.requiredNumber;
	}

	private numberOnly(value: string) {
		const regex_number_only = /^[0-9]*$/;
		return regex_number_only.test(value) ? false : this.notify.numberOnly;
	}

	private isEmail(value: string) {
		const regex_email =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-za-z\-0-9]+\.)+[a-za-z]{2,}))$/;
		return regex_email.test(value.toLowerCase())
			? false
			: this.notify.isEmail;
	}

	// Min length: 8
	// Have: symbol, number, uppercase, lowercase
	private secureLevel1(value: string) {
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

	private equalInputValue(
		value: string,
		inputToCompare: HTMLInputElement,
		inputLabel: string
	) {
		if (value !== inputToCompare.value) {
			return this.notify.equalInputValue(inputLabel);
		} else return false;
	}

	protected setError(inputElm: HTMLInputElement, errorMessage: string) {
		const parent = inputElm.parentElement?.parentElement as HTMLDivElement;
		const errorElm = parent.querySelector(
			".error-message"
		) as HTMLParagraphElement;

		parent.classList.add("error");
		errorElm.textContent = errorMessage;

		return false;
	}

	protected removeError(inputElm: HTMLInputElement) {
		const parent = inputElm.parentElement?.parentElement as HTMLDivElement;
		const errorMessageElm = parent.querySelector(
			".error-message"
		) as HTMLParagraphElement;

		errorMessageElm.textContent = "";
		parent.classList.remove("error");
	}

	protected checkInputValues(
		inputElm: HTMLInputElement,
		config: ValidateFormConfig
	) {
		const inputValue = inputElm.value;

		// Required check
		if (config.required) {
			const requiredCheckResult = this.required(inputValue);
			if (requiredCheckResult)
				return this.setError(inputElm, requiredCheckResult);
		} else {
			if (inputValue.length === 0) {
				this.removeError(inputElm);
				return true;
			}
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
			const equalLengthCheckResult = this.lengthCheck(
				inputValue,
				"equal",
				config.equalLength
			);
			if (equalLengthCheckResult)
				return this.setError(inputElm, equalLengthCheckResult);
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

		// Equal input value check
		if (config.equalInputValue) {
			const equalInputValueCheckResult = this.equalInputValue(
				inputValue,
				config.equalInputValue.inputToCompare,
				config.equalInputValue.inputLabel
			);

			if (equalInputValueCheckResult) {
				return this.setError(inputElm, equalInputValueCheckResult);
			}
		}

		this.removeError(inputElm);
		return true;
	}

	protected listenAndValidateInput(
		inputElm: HTMLInputElement,
		config: ValidateFormConfig
	) {
		inputElm.addEventListener("focusout", (e) => {
			this.checkInputValues(inputElm, config);
		});
	}

	public resetForm() {
		const keyList: string[] = Object.getOwnPropertyNames(this);
		// Reset form
		const formElmList = keyList
			// Filter keyof form element
			.filter((key) => {
				return (
					(this[key as keyof ValidateForm] as any) instanceof
					HTMLFormElement
				);
			})
			// Get form element
			.map((formElmKey) => this[formElmKey as keyof ValidateForm] as any)
			// Reset form element
			.forEach((formElm: HTMLFormElement) => {
				formElm.reset();
			});

		// Reset input
		const inputElmList = keyList
			// Filter keyof input element
			.filter((key) => {
				return (
					(this[key as keyof ValidateForm] as any) instanceof
					HTMLInputElement
				);
			})
			// Get input element
			.map(
				(inputElmKey) => this[inputElmKey as keyof ValidateForm] as any
			)
			// Remove error input element
			.forEach((inputElm: HTMLInputElement) => {
				this.removeError(inputElm);
			});
	}
}

class LoginForm extends ValidateForm {
	private formElm: HTMLFormElement;
	private usernameInput: HTMLInputElement;
	private passwordInput: HTMLInputElement;

	constructor() {
		super();

		this.formElm = $(".authenticate-ctn .form-ctn.login");
		this.usernameInput = $("#username-input");
		this.passwordInput = $("#password-input");
	}

	public listenEvent() {
		// Validate config
		const usernameConfig = {
			required: true,
			minLength: 6,
			maxLength: 24,
			notSymbol: true,
		};
		const passwordConfig = {
			required: true,
			secureLevel1: true,
		};

		// Listen focusout event and validate username input
		this.listenAndValidateInput(this.usernameInput, usernameConfig);

		// Password input
		this.listenAndValidateInput(this.passwordInput, passwordConfig);

		this.formElm.addEventListener("submit", (e) => {
			const usernameCheckResult = this.checkInputValues(
				this.usernameInput,
				usernameConfig
			);
			const passwordCheckResult = this.checkInputValues(
				this.passwordInput,
				passwordConfig
			);

			const allowSubmit = usernameCheckResult && passwordCheckResult;

			if (!allowSubmit) e.preventDefault();
		});
	}
}

class RegisterForm extends ValidateForm {
	private formElm: HTMLFormElement;
	private usernameInput: HTMLInputElement;
	private passwordInput: HTMLInputElement;
	private retypePasswordInput: HTMLInputElement;
	private firstNameInput: HTMLInputElement;
	private lastNameInput: HTMLInputElement;
	private addressInput: HTMLInputElement;
	private phoneNumberInput: HTMLInputElement;
	private gmailInput: HTMLInputElement;

	constructor() {
		super();

		this.formElm = $(".authenticate-ctn .form-ctn.register");
		this.usernameInput = $("#username-register-input");
		this.passwordInput = $("#password-register-input");
		this.retypePasswordInput = $("#retype-password-input");
		this.firstNameInput = $("#first-name-input");
		this.lastNameInput = $("#last-name-input");
		this.addressInput = $("#address-input");
		this.phoneNumberInput = $("#phone-number-input");
		this.gmailInput = $("#gmail-input");
	}

	public listenEvent() {
		// Validate config
		const usernameConfig = {
			required: true,
			minLength: 6,
			maxLength: 16,
			notSymbol: true,
		};
		const passwordConfig = {
			required: true,
			minLength: 8,
			maxLength: 36,
			secureLevel1: true,
		};
		const retypePasswordConfig = {
			...passwordConfig,
			equalInputValue: {
				value: this.retypePasswordInput.value,
				inputLabel: "mật khẩu",
				inputToCompare: this.passwordInput,
			},
		} as ValidateFormConfig;
		const firstNameConfig = {
			required: true,
			minLength: 2,
			maxLength: 8,
			notSymbol: true,
		};
		const lastNameConfig = {
			required: true,
			minLength: 2,
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
			isEmail: true,
		};

		// Listen and validate input on focusout
		this.listenAndValidateInput(this.usernameInput, usernameConfig);
		this.listenAndValidateInput(this.passwordInput, passwordConfig);
		this.listenAndValidateInput(
			this.retypePasswordInput,
			retypePasswordConfig
		);
		this.listenAndValidateInput(this.firstNameInput, firstNameConfig);
		this.listenAndValidateInput(this.lastNameInput, lastNameConfig);
		this.listenAndValidateInput(this.addressInput, addressConfig);
		this.listenAndValidateInput(this.phoneNumberInput, phoneNumberConfig);
		this.listenAndValidateInput(this.gmailInput, gmailConfig);

		this.formElm.addEventListener("submit", (e) => {
			const usernameCheckResult = this.checkInputValues(
				this.usernameInput,
				usernameConfig
			);
			const passwordCheckResult = this.checkInputValues(
				this.passwordInput,
				passwordConfig
			);
			const retypePasswordCheckResult = this.checkInputValues(
				this.retypePasswordInput,
				retypePasswordConfig
			);
			const firstNameCheckResult = this.checkInputValues(
				this.firstNameInput,
				firstNameConfig
			);
			const lastNameCheckResult = this.checkInputValues(
				this.lastNameInput,
				lastNameConfig
			);
			const addressCheckResult = this.checkInputValues(
				this.addressInput,
				addressConfig
			);
			const phoneNumberCheckResult = this.checkInputValues(
				this.phoneNumberInput,
				phoneNumberConfig
			);
			const gmailCheckResult = this.checkInputValues(
				this.gmailInput,
				gmailConfig
			);

			if (
				!usernameCheckResult ||
				!passwordCheckResult ||
				!retypePasswordCheckResult ||
				!firstNameCheckResult ||
				!lastNameCheckResult ||
				!addressCheckResult ||
				!phoneNumberCheckResult ||
				!gmailCheckResult
			) {
				e.preventDefault();
			}
		});
	}
}

class AuthenticateBox {
	private loginForm: LoginForm;
	private registerForm: RegisterForm;

	private checkboxToShowBox: HTMLInputElement;

	constructor() {
		this.loginForm = new LoginForm();
		this.registerForm = new RegisterForm();
		this.checkboxToShowBox = $("#toggle-register-auth-box");
	}

	public listenChangeFormInput() {
		this.loginForm.listenEvent();
		this.registerForm.listenEvent();
	}

	public listenEventToShowAndHideBox() {
		this.checkboxToShowBox.addEventListener("change", () => {
			this.loginForm.resetForm();
			this.registerForm.resetForm();
		});
	}
}

const authenticateBox = new AuthenticateBox();
authenticateBox.listenChangeFormInput();
authenticateBox.listenEventToShowAndHideBox();
