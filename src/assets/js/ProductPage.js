"use strict";
class ProductImageSlide {
    constructor() {
        this.currentIndex = 0;
        this.imageSlide = $("#product-image-slide");
        this.imageSlideList = $(".image-slide__list", this.imageSlide);
        this.prevButton = $(".prev-button", this.imageSlide);
        this.nextButton = $(".next-button", this.imageSlide);
        this.MAX_INDEX = this.imageSlideList.childElementCount - 1;
        this.listenEvent();
    }
    listenEvent() {
        this.prevButton.addEventListener("click", (e) => {
            this.handlePrev();
        });
        this.nextButton.addEventListener("click", (e) => {
            this.handleNext();
        });
    }
    handleNext() {
        if (this.currentIndex === this.MAX_INDEX)
            this.currentIndex = 0;
        else
            this.currentIndex++;
        this.resetStyle();
    }
    handlePrev() {
        if (this.currentIndex === 0)
            this.currentIndex = this.MAX_INDEX;
        else
            this.currentIndex--;
        console.log(this.currentIndex);
        this.resetStyle();
    }
    resetStyle() {
        const transitionPercent = this.currentIndex * 100;
        this.imageSlideList.style.transform = `translateX(-${transitionPercent}%)`;
    }
}
const productImageSlide = new ProductImageSlide();
