(()=>{"use strict";var e,t={858:(e,t,a)=>{a.d(t,{$:()=>i,$$:()=>n});const i=(e,t=document)=>t.querySelector(e),n=(e,t=document)=>t.querySelectorAll(e)}},a={};function i(e){var n=a[e];if(void 0!==n)return n.exports;var s=a[e]={exports:{}};return t[e](s,s.exports,i),s.exports}i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=i(858),(new class{constructor(){this.updateImageBoxStateInput=(0,e.$)("#update-image-box-state"),this.inputFileImageList=(0,e.$$)(".home-image-slide tbody .thumb input"),this.updateImagePreviewImg=(0,e.$)("#preview-img"),this.updateImageBoxAcceptButton=(0,e.$)(".update-image-box .button-list .accept")}listenEvent(){this.inputFileImageList.forEach((e=>{e.addEventListener("change",this.handleChangeFileInput.bind(this))})),this.updateImageBoxAcceptButton.addEventListener("click",(t=>{var a,i;const n=(0,e.$)(`input[data-id="${this.updateImagePreviewImg.dataset.id}"]`);(null===(a=n.files)||void 0===a?void 0:a.length)&&(null===(i=this.updateImagePreviewImg.dataset.id)||void 0===i?void 0:i.length)&&this.submitNewImage(null==n?void 0:n.files[0],n.dataset.id)}))}handleChangeFileInput(e){const t=e.target.files[0],a=URL.createObjectURL(t),i=e.target.previousElementSibling;this.updateImageBoxStateInput.checked=!0,this.updateImagePreviewImg.src=a,this.updateImagePreviewImg.dataset.id=e.target.dataset.id,i.src=a}submitNewImage(e,t){const a=new FormData;a.append("id",t),a.append("file",e),fetch("/api/change-image-slider",{method:"POST",body:a}).then((e=>e.json())).then((e=>{!0===e&&(alert("Success!"),this.updateImageBoxStateInput.checked=!1)})).catch((e=>console.log(e)))}}).listenEvent(),(new class{constructor(){this.addNewImageForm=(0,e.$)(".home-image-slide form.add-new-image"),this.imageNameInput=(0,e.$)('input[type="text"]',this.addNewImageForm),this.imageFileInput=(0,e.$)('input[type="file"]',this.addNewImageForm),this.submitNewImageButton=(0,e.$)("button.submit",this.addNewImageForm),console.log(this.imageNameInput)}listenEvent(){this.imageNameInput.addEventListener("focusout",(t=>{var a;const i=t.target,n=null===(a=i.parentElement)||void 0===a?void 0:a.parentElement,s=(0,e.$)(".error-message",n);i.value.length||(n.classList.add("error"),s.textContent="Vui lòng nhập tên hình ảnh!")}))}}).listenEvent()})();