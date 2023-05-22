"use strict";
const $ = (selector, bindElm = document) => bindElm.querySelector(selector);
class ImageSlide {
    constructor() {
        this.currentImageIndex = 0;
        // Auto next image each 10s
        this.TIME_CHANGE_IMAGE = 3 * 1000;
        // Enviroment variable
        this.autoChangeImageIntervalId = 0;
        this.imageSlideElm = $('.image-slide-ctn');
        this.imageListElm = $('.image-list', this.imageSlideElm);
        this.progressBarElm = $('.progress-bar', this.imageSlideElm);
        this.prevButton = $('.prev-button', this.imageSlideElm);
        this.nextButton = $('.next-button', this.imageSlideElm);
        this.IMAGE_COUNT = this.imageListElm.childElementCount;
        this.listenEventButton();
        this.setIntervalAutoChangeImage();
    }
    clearEventButton() {
        this.prevButton.removeEventListener('click', this.handlePrevImage.bind(this));
        // Next button
        this.nextButton.removeEventListener('click', this.handleNextImage.bind(this));
        // Progress bar
        this.progressBarElm.addEventListener('click', this.handleClickProgressBar.bind(this));
    }
    listenEventButton() {
        // Clear before listener
        this.clearEventButton();
        // Prev button
        this.prevButton.addEventListener('click', this.handlePrevImage.bind(this));
        // Next button
        this.nextButton.addEventListener('click', this.handleNextImage.bind(this));
        // Progress bar
        this.progressBarElm.addEventListener('click', this.handleClickProgressBar.bind(this));
    }
    setIntervalAutoChangeImage() {
        clearInterval(this.autoChangeImageIntervalId);
        this.autoChangeImageIntervalId = setInterval(this.handleNextImage.bind(this), this.TIME_CHANGE_IMAGE);
    }
    handlePrevImage() {
        if (this.currentImageIndex === 0) {
            this.currentImageIndex = this.IMAGE_COUNT - 1;
        }
        else
            this.currentImageIndex--;
        this.resetSlideStyle();
    }
    handleNextImage() {
        if (this.currentImageIndex === this.IMAGE_COUNT - 1) {
            this.currentImageIndex = 0;
        }
        else
            this.currentImageIndex++;
        this.resetSlideStyle();
    }
    handleJumpImage(newPosition) {
        // Validate input data
        if (newPosition >= this.IMAGE_COUNT)
            newPosition = this.IMAGE_COUNT - 1;
        if (newPosition < 0)
            newPosition = 0;
        // Update new index
        this.currentImageIndex = newPosition;
        // Reset style
        this.resetSlideStyle();
    }
    resetSlideStyle() {
        // Reset auto next image interval
        this.setIntervalAutoChangeImage();
        // Set new image list postion
        this.imageListElm.style.transform = `translateX(-${this.currentImageIndex * 100}%)`;
        // Reset dot list style
        // Remove current active dot
        const currentActiveDot = $('.dot.active', this.progressBarElm);
        currentActiveDot.classList.remove('active');
        // Set new active dot
        const newAcitveDot = $(`.dot[data-index="${this.currentImageIndex}"`, this.imageSlideElm);
        newAcitveDot.classList.add('active');
    }
    handleClickProgressBar(e) {
        const target = e.target;
        if (target === null || target === void 0 ? void 0 : target.hasAttribute('data-index')) {
            this.handleJumpImage(Number(target.dataset.index));
        }
    }
}
const imageSlide = new ImageSlide();
