import { $, $$ } from '../Common/index';

class SearchBar {
	private searchInput: HTMLInputElement;
	private submitButton: HTMLButtonElement;
	private searchBox: HTMLDivElement;

	// Event state
	private focusing = false;

	public constructor() {
		this.searchBox = $('#search-box');
		this.searchInput = $('.search-input');
		this.submitButton = $('.search-input ~ .submit-button');

		this.listenAndHandleEvent();
	}

	public listenAndHandleEvent() {
		this.listenAndHandleSubmit();
	}

	private listenAndHandleSearch() {
		this.searchInput.addEventListener(
			'change',
			this.handleChangeSearchInput.bind(this)
		);
	}

	private listenAndHandleSubmit() {
		// Submit while press enter
		this.searchInput.addEventListener('focusin', () => {
			window.addEventListener(
				'keypress',
				this.handleSubmitByKeyPress.bind(this)
			);
		});

		this.searchInput.addEventListener('focusout', () => {
			window.removeEventListener(
				'keypress',
				this.handleSubmitByKeyPress.bind(this)
			);
		});

		// Submit while click submit button
		this.submitButton.addEventListener(
			'click',
			this.handleSubmit.bind(this)
		);
	}

	private handleChangeSearchInput(e: any) {
		console.log(e.target.value);
	}

	private handleSubmitByKeyPress(e: KeyboardEvent) {
		if (e.code === 'Enter') this.handleSubmit();
	}

	private handleSubmit() {
		this.searchInput.value = this.searchInput.value.replace(
			/[^\w\s]/gi,
			''
		);

		if (this.searchInput.value.trim().length) {
			window.location.href = '/search?q=' + this.searchInput.value;
		}
	}
}

export default SearchBar;
