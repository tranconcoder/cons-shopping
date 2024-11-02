(()=>{"use strict";const e=(e,t=document)=>t.querySelector(e);(new class{constructor(){this.currentIndex=0,this.imageSlide=e("#product-image-slide"),this.imageSlideList=e(".image-slide__list",this.imageSlide),this.prevButton=e(".prev-button",this.imageSlide),this.nextButton=e(".next-button",this.imageSlide),this.imageSlidePreview=e("#product-image-slide + .image-slide-preview"),this.imageSlidePreviewItems=[...this.imageSlidePreview.children],this.MAX_INDEX=this.imageSlideList.childElementCount-1,this.resetStyle()}listenEvent(){this.prevButton.addEventListener("click",(e=>{this.handlePrev()})),this.nextButton.addEventListener("click",(e=>{this.handleNext()})),this.imageSlidePreviewItems.forEach((e=>{e.addEventListener("click",this.handleClickPreviewItem.bind(this))}))}handleClickPreviewItem(e){let t=e.target;for(;"LI"!==t.tagName&&t.parentNode;)t=t.parentNode;this.handleChangeIndex(Number(null==t?void 0:t.dataset.index)||0)}handleChangeIndex(e){e<0?this.currentIndex=this.MAX_INDEX:e>this.MAX_INDEX?this.currentIndex=0:this.currentIndex=e,this.resetStyle()}handleNext(){this.handleChangeIndex(this.currentIndex+1)}handlePrev(){this.handleChangeIndex(this.currentIndex-1)}resetStyle(){const e=100*this.currentIndex;this.imageSlideList.style.transform=`translateX(-${e}%)`;const t=this.imageSlidePreview.querySelector("li.active");null==t||t.classList.remove("active");const i=this.imageSlidePreview.querySelector(`li[data-index="${this.currentIndex}"]`);null==i||i.classList.add("active"),null==i||i.scrollIntoView({behavior:"smooth",inline:"center"})}}).listenEvent()})();