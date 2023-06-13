const $ = <T = HTMLElement>(
	selector: string,
	bindElm: HTMLElement | Document = document
) => bindElm.querySelector(selector) as T;

const $$ = <T = HTMLElement[]>(
	selector: string,
	bindElm: HTMLElement | Document = document
) => bindElm.querySelectorAll(selector) as T;

