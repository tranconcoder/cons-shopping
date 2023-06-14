import { $, $$ } from '../Common/index';
import { LoginForm, RegisterForm } from './loginAndRegisterForm';

class AuthenticateBox {
	private loginForm: LoginForm;
	private registerForm: RegisterForm;

	private checkboxToShowBox: HTMLInputElement;

	constructor() {
		this.loginForm = new LoginForm();
		this.registerForm = new RegisterForm();
		this.checkboxToShowBox = $('#toggle-register-auth-box');
	}

	public listenChangeFormInput() {
		this.loginForm.listenEvent();
		this.registerForm.listenEvent();
	}

	public listenEventToShowAndHideBox() {
		this.checkboxToShowBox.addEventListener('change', () => {
			this.loginForm.resetForm();
			this.registerForm.resetForm();
		});
	}
}

export default AuthenticateBox;
