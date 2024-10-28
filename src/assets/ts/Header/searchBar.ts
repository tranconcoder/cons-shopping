// <reference path="../../types/product.d"/>
import { $, $$ } from '../Common/selectElm';

class SearchBar {
	private searchInput: HTMLInputElement;
	private submitButton: HTMLButtonElement;
	private searchBox: HTMLDivElement;
	private searchProductListElm: HTMLUListElement;

	// Event state
	private focusing = false;
	private timeoutIdSubmitAfterStopInputSearch: NodeJS.Timer | undefined;

	public constructor() {
		this.searchBox = $('#search-box');
		this.searchInput = $('.search-input');
		this.submitButton = $('.search-input ~ .submit-button');
		this.searchProductListElm = $('.search-products__list', this.searchBox);

		this.listenAndHandleEvent();
	}

	public listenAndHandleEvent() {
		this.listenAndHandleSubmit();
		this.listenAndHandleSearch();
	}

	private listenAndHandleSearch() {
		this.handleSearchProduct();

		this.searchInput.addEventListener(
			'input',
			this.handleSearchProduct.bind(this)
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

	private handleSearchProduct() {
		clearInterval(Number(this.timeoutIdSubmitAfterStopInputSearch));

		this.timeoutIdSubmitAfterStopInputSearch = setTimeout(async () => {
			if (!this.searchInput.value) {
				return (this.searchProductListElm.innerHTML = '');
			}

			const url = `/api/search-product?q=${this.searchInput.value}`;

			const productList: Product[] = await fetch(url, {
				method: 'GET',
			}).then((res) => res.json());

			this.renderSearchProducts(productList);
		}, 500);
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

	private renderSearchProducts(products: Product[]) {
		this.searchProductListElm.innerHTML = '';

		products.forEach((product) => {
			const itemElm = document.createElement('li');

			itemElm.innerHTML = `
                <a href="/product?id=${product.productId}">
                    <img
                        src="${product.thumb || ''}"
                        alt="thumb"
                    >
                        
                    <h4>${product.label}</h4>
                </a>
            `;

			this.searchProductListElm.appendChild(itemElm);
		});
	}
}

export default SearchBar;
