import { $ } from "../Common/selectElm";

class ImageSlide {
    // DOM element
    private readonly imageSlideElm: HTMLDivElement;
    private readonly imageListElm: HTMLUListElement;
    private readonly progressBarElm: HTMLUListElement;
    private readonly prevButton: HTMLButtonElement;
    private readonly nextButton: HTMLButtonElement;

    private currentImageIndex = 0;
    // Auto next image each 10s
    private readonly TIME_CHANGE_IMAGE = 10 * 1000;
    private readonly IMAGE_COUNT: number;

    // Environment variable
    private autoChangeImageIntervalId: NodeJS.Timer | undefined;

    constructor() {
        this.imageSlideElm = $(".image-slide-ctn");
        this.imageListElm = $(".image-list", this.imageSlideElm);
        this.progressBarElm = $(".progress-bar", this.imageSlideElm);
        this.prevButton = $(".prev-button", this.imageSlideElm);
        this.nextButton = $(".next-button", this.imageSlideElm);

        this.IMAGE_COUNT = this.imageListElm.childElementCount;

        this.listenEventButton();
        this.setIntervalAutoChangeImage();
    }

    public clearEventButton() {
        this.prevButton.removeEventListener(
            "click",
            this.handlePrevImage.bind(this)
        );
        // Next button
        this.nextButton.removeEventListener(
            "click",
            this.handleNextImage.bind(this)
        );

        // Progress bar
        this.progressBarElm.addEventListener(
            "click",
            this.handleClickProgressBar.bind(this)
        );
    }

    public listenEventButton() {
        // Clear before listener
        this.clearEventButton();

        // Prev button
        this.prevButton.addEventListener(
            "click",
            this.handlePrevImage.bind(this)
        );
        // Next button
        this.nextButton.addEventListener(
            "click",
            this.handleNextImage.bind(this)
        );

        // Progress bar
        this.progressBarElm.addEventListener(
            "click",
            this.handleClickProgressBar.bind(this)
        );
    }

    public setIntervalAutoChangeImage() {
        clearInterval(Number(this.autoChangeImageIntervalId));

        this.autoChangeImageIntervalId = setInterval(
            this.handleNextImage.bind(this),
            this.TIME_CHANGE_IMAGE
        );
    }

    private handlePrevImage() {
        if (this.currentImageIndex === 0) {
            this.currentImageIndex = this.IMAGE_COUNT - 1;
        } else this.currentImageIndex--;

        this.resetSlideStyle();
    }

    private handleNextImage() {
        if (this.currentImageIndex === this.IMAGE_COUNT - 1) {
            this.currentImageIndex = 0;
        } else this.currentImageIndex++;

        this.resetSlideStyle();
    }

    private handleJumpImage(newPosition: number) {
        // Validate input data
        if (newPosition >= this.IMAGE_COUNT) newPosition = this.IMAGE_COUNT - 1;
        if (newPosition < 0) newPosition = 0;

        // Update new index
        this.currentImageIndex = newPosition;

        // Reset style
        this.resetSlideStyle();
    }

    private resetSlideStyle() {
        // Reset auto next image interval
        this.setIntervalAutoChangeImage();

        // Set new image list position
        this.imageListElm.style.transform = `translateX(-${
            this.currentImageIndex * 100
        }%)`;

        // Reset dot list style
        // Remove current active dot
        const currentActiveDot = $(".dot.active", this.progressBarElm);
        currentActiveDot.classList.remove("active");

        // Set new active dot
        const newActiveDot = $(
            `.dot[data-index="${this.currentImageIndex}"`,
            this.imageSlideElm
        );
        newActiveDot.classList.add("active");
    }

    private handleClickProgressBar(e: MouseEvent) {
        const target = e.target as HTMLElement | null;

        if (target?.hasAttribute("data-index")) {
            this.handleJumpImage(Number(target.dataset.index));
        }
    }
}

const imageSlide = new ImageSlide();
