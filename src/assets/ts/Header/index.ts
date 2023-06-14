import AuthenticateBox from './authenticateBox';
import { LoginForm, RegisterForm } from './loginAndRegisterForm';
import SearchBar from './searchBar';

const searchBar = new SearchBar();

const loginForm = new LoginForm();
loginForm.listenEvent();

const registerForm = new RegisterForm();
registerForm.listenEvent();

const authenticateBox = new AuthenticateBox();
authenticateBox.listenChangeFormInput();
authenticateBox.listenEventToShowAndHideBox();
