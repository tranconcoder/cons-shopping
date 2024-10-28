import { $, $$ } from '../Common/selectElm';

class ProductImageSlide {
	private imageSlide: HTMLDivElement;
	private imageSlideList: HTMLUListElement;
	private prevButton: HTMLButtonElement;
	private nextButton: HTMLButtonElement;
	private imageSlidePreview: HTMLUListElement;
	private imageSlidePreviewItems: HTMLLIElement[];

	private readonly MAX_INDEX: number;
	private currentIndex: number = 0;

	constructor() {
		this.imageSlide = $('#product-image-slide');
		this.imageSlideList = $('.image-slide__list', this.imageSlide);
		this.prevButton = $('.prev-button', this.imageSlide);
		this.nextButton = $('.next-button', this.imageSlide);
		this.imageSlidePreview = $(
			'#product-image-slide + .image-slide-preview'
		);
		this.imageSlidePreviewItems = [
			...this.imageSlidePreview.children,
		] as HTMLLIElement[];

		this.MAX_INDEX = this.imageSlideList.childElementCount - 1;

		this.resetStyle();
	}

	public listenEvent() {
		this.prevButton.addEventListener('click', (e) => {
			this.handlePrev();
		});

		this.nextButton.addEventListener('click', (e) => {
			this.handleNext();
		});

		// Click preview item
		this.imageSlidePreviewItems.forEach((previewItem) => {
			previewItem.addEventListener(
				'click',
				this.handleClickPreviewItem.bind(this)
			);
		});
	}

	private handleClickPreviewItem(e: any) {
		let target: HTMLElement = e.target;

		while (target.tagName !== 'LI' && target.parentNode)
			target = target.parentNode as HTMLElement;

		this.handleChangeIndex(Number(target?.dataset.index) || 0);
	}

	private handleChangeIndex(newIndex: number) {
		if (newIndex < 0) this.currentIndex = this.MAX_INDEX;
		else if (newIndex > this.MAX_INDEX) this.currentIndex = 0;
		else this.currentIndex = newIndex;

		this.resetStyle();
	}

	private handleNext() {
		this.handleChangeIndex(this.currentIndex + 1);
	}

	private handlePrev() {
		this.handleChangeIndex(this.currentIndex - 1);
	}

	private resetStyle() {
		// Image slide style
		const transitionXPercent = this.currentIndex * 100;

		this.imageSlideList.style.transform = `translateX(-${transitionXPercent}%)`;

		// Image slide preview style
		const oldPreviewActiveItem =
			this.imageSlidePreview.querySelector('li.active');
		oldPreviewActiveItem?.classList.remove('active');

		const newPreviewActiveItem = this.imageSlidePreview.querySelector(
			`li[data-index="${this.currentIndex}"]`
		);
		newPreviewActiveItem?.classList.add('active');
		// Scroll newPreviewActiveItem to view
		newPreviewActiveItem?.scrollIntoView({
			behavior: 'smooth',
			inline: 'center',
		});
	}
}

export default ProductImageSlide;
