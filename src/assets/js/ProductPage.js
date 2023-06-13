"use strict";
class ProductImageSlide {
    constructor() {
        this.currentIndex = 0;
        this.imageSlide = $("#product-image-slide");
        this.imageSlideList = $(".image-slide__list", this.imageSlide);
        this.prevButton = $(".prev-button", this.imageSlide);
        this.nextButton = $(".next-button", this.imageSlide);
        this.imageSlidePreview = $("#product-image-slide + .image-slide-preview");
        this.imageSlidePreviewItems = [
            ...this.imageSlidePreview.children,
        ];
        this.MAX_INDEX = this.imageSlideList.childElementCount - 1;
        this.listenEvent();
        this.resetStyle();
    }
    listenEvent() {
        this.prevButton.addEventListener("click", (e) => {
            this.handlePrev();
        });
        this.nextButton.addEventListener("click", (e) => {
            this.handleNext();
        });
        // Click preview item
        this.imageSlidePreviewItems.forEach((previewItem) => {
            previewItem.addEventListener("click", this.handleClickPreviewItem.bind(this));
        });
    }
    handleClickPreviewItem(e) {
        let target = e.target;
        while (target.tagName !== "LI" && target.parentNode)
            target = target.parentNode;
        this.handleChangeIndex(Number(target === null || target === void 0 ? void 0 : target.dataset.index) || 0);
    }
    handleChangeIndex(newIndex) {
        if (newIndex < 0)
            this.currentIndex = this.MAX_INDEX;
        else if (newIndex > this.MAX_INDEX)
            this.currentIndex = 0;
        else
            this.currentIndex = newIndex;
        this.resetStyle();
    }
    handleNext() {
        this.handleChangeIndex(this.currentIndex + 1);
    }
    handlePrev() {
        this.handleChangeIndex(this.currentIndex - 1);
    }
    resetStyle() {
        // Image slide style
        const transitionXPercent = this.currentIndex * 100;
        this.imageSlideList.style.transform = `translateX(-${transitionXPercent}%)`;
        // Image slide preview style
        const oldPreviewActiveItem = this.imageSlidePreview.querySelector("li.active");
        oldPreviewActiveItem === null || oldPreviewActiveItem === void 0 ? void 0 : oldPreviewActiveItem.classList.remove("active");
        const newPreviewActiveItem = this.imageSlidePreview.querySelector(`li[data-index="${this.currentIndex}"]`);
        newPreviewActiveItem === null || newPreviewActiveItem === void 0 ? void 0 : newPreviewActiveItem.classList.add("active");
        // Scroll newPreviewActiveItem to view
        newPreviewActiveItem === null || newPreviewActiveItem === void 0 ? void 0 : newPreviewActiveItem.scrollIntoView({
            behavior: "smooth",
            inline: "center",
        });
    }
}
const productImageSlide = new ProductImageSlide();
