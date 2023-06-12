class ProductImageSlide {
	private imageSlide: HTMLDivElement;
	private imageSlideList: HTMLUListElement;
	private prevButton: HTMLButtonElement;
	private nextButton: HTMLButtonElement;

	private readonly MAX_INDEX: number;
	private currentIndex: number = 0;

	constructor() {
		this.imageSlide = $("#product-image-slide");
		this.imageSlideList = $(".image-slide__list", this.imageSlide);
		this.prevButton = $(".prev-button", this.imageSlide);
		this.nextButton = $(".next-button", this.imageSlide);

		this.MAX_INDEX = this.imageSlideList.childElementCount - 1;

		this.listenEvent();
	}

	public listenEvent() {
		this.prevButton.addEventListener("click", (e) => {
			this.handlePrev();
		});

		this.nextButton.addEventListener("click", (e) => {
			this.handleNext();
		});
	}

	private handleNext() {
		if (this.currentIndex === this.MAX_INDEX) this.currentIndex = 0;
		else this.currentIndex++;

		this.resetStyle();
	}

	private handlePrev() {
		if (this.currentIndex === 0) this.currentIndex = this.MAX_INDEX;
		else this.currentIndex--;

		console.log(this.currentIndex);

		this.resetStyle();
	}

	private resetStyle() {
		const transitionPercent = this.currentIndex * 100;

		this.imageSlideList.style.transform = `translateX(-${transitionPercent}%)`;
	}
}

const productImageSlide = new ProductImageSlide();
