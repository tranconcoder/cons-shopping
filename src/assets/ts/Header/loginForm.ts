import { $, $$ } from '../Common/selectElm';
import ValidateForm from './validateFormMethod';

class LoginForm extends ValidateForm {
	private formElm: HTMLFormElement;
	private usernameInput: HTMLInputElement;
	private passwordInput: HTMLInputElement;

	constructor() {
		super();

		this.formElm = $('.authenticate-ctn .form-ctn.login');
		this.usernameInput = $('#username-input');
		this.passwordInput = $('#password-input');
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

		this.formElm.addEventListener('submit', (e) => {
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

export default LoginForm;
