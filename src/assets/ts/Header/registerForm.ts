import ValidateForm from './validateFormMethod';
import type { ValidateFormConfig } from './validateFormMethod';
import { $, $$ } from '../Common/selectElm';

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

		this.formElm = $('.authenticate-ctn .form-ctn.register');
		this.usernameInput = $('#username-register-input');
		this.passwordInput = $('#password-register-input');
		this.retypePasswordInput = $('#retype-password-input');
		this.firstNameInput = $('#first-name-input');
		this.lastNameInput = $('#last-name-input');
		this.addressInput = $('#address-input');
		this.phoneNumberInput = $('#phone-number-input');
		this.gmailInput = $('#gmail-input');
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
				inputLabel: 'mật khẩu',
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

		this.formElm.addEventListener('submit', (e) => {
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

export default RegisterForm;
