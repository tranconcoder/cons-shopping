import { $, $$ } from "../Common/index";

class HomeImageSlide {
    private inputFileImageList: HTMLInputElement[];
    private removeImageButtonList: HTMLButtonElement[];
    private updateImageBoxStateInput: HTMLInputElement;
    private updateImagePreviewImg: HTMLImageElement;
    private updateImageBoxAcceptButton: HTMLButtonElement;
    private imageInfoInputList: HTMLInputElement[];

    public constructor() {
        this.updateImageBoxStateInput = $("#update-image-box-state");
        this.inputFileImageList = $$(".home-image-slide tbody .thumb input");
        this.updateImagePreviewImg = $("#preview-img");
        this.updateImageBoxAcceptButton = $(
            ".update-image-box .button-list .accept"
        );
        this.removeImageButtonList = $$(
            ".home-image-slide tbody tr .action > button"
        );
        this.imageInfoInputList = $$(
            '.home-image-slide tbody tr td input[type="text"] , .home-image-slide tbody tr td input[type="number"]'
        );
    }

    public listenEvent() {
        this.inputFileImageList.forEach((inputFileImage) => {
            inputFileImage.addEventListener(
                "change",
                this.handleChangeFileInput.bind(this)
            );
        });

        // Remove image
        this.removeImageButtonList.forEach((removeButton) => {
            removeButton.addEventListener(
                "click",
                this.removeImageSlide.bind(this)
            );
        });

        // Handle click accept button -> submit
        this.updateImageBoxAcceptButton.addEventListener("click", (e) => {
            const inputFileToSubmit: HTMLInputElement = $(
                `input[data-id="${this.updateImagePreviewImg.dataset.id}"]`
            );

            if (
                inputFileToSubmit.files?.length &&
                this.updateImagePreviewImg.dataset.id?.length
            ) {
                this.submitNewImage(
                    inputFileToSubmit?.files[0],
                    inputFileToSubmit.dataset.id as string
                );
            }
        });

        // Listen change info image slide
        this.imageInfoInputList.forEach((input) => {
            input.addEventListener("change", this.changeImageInfo.bind(this));
        });
    }

    private handleChangeFileInput(e: any) {
        // Get file and display on image element
        const file = e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        const imgElm = (e.target as HTMLInputElement)
            .previousElementSibling as HTMLImageElement;

        // Show update image box
        this.updateImageBoxStateInput.checked = true;
        this.updateImagePreviewImg.src = imgUrl;
        this.updateImagePreviewImg.dataset.id = e.target.dataset.id;

        // Set new image to preview image
        imgElm.src = imgUrl;
    }

    private submitNewImage(file: File, id: string) {
        // Upload file to php server
        const formData = new FormData();
        const url = "/api/change-image-slider";

        formData.append("id", id);
        formData.append("file", file);

        fetch(url, {
            method: "POST",
            body: formData,
        } as RequestInit)
            .then((res) => res.json())
            .then((success) => {
                if (success === true) {
                    alert("Success!");

                    // Close update image slider box
                    this.updateImageBoxStateInput.checked = false;
                }
            })
            .catch((err) => console.log(err));
    }

    private removeImageSlide(e: any) {
        const imageId = e.target.dataset.id;
        const url = "/api/remove-image-slider";
        const formData = new FormData();

        formData.append("imageId", imageId);

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.error && data) {
                    const imageSlideRow = e.target.parentElement
                        .parentElement as HTMLTableRowElement;

                    imageSlideRow.remove();
                }
            });
    }

    private changeImageInfo(e: any) {
        const target = e.target;
        const field = target.name;
        const newValue = target.value as string | number;

        let rowElement = target as HTMLElement;
        while (!(rowElement instanceof HTMLTableRowElement)) {
            rowElement = rowElement.parentNode as HTMLElement;
        }

        const imageId = rowElement.dataset.id;

        const url = "/api/update-info-image-slider";
        const formData = new FormData();

        formData.append("imageId", imageId as string);
        formData.append("field", target.name);
        formData.append("newValue", newValue.toString());

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.text())
            .then((result) => {
                console.log("Result: " + result);
            })
            .catch((err) => console.log(err));
    }
}

class AddImageSlide {
    private addNewImageForm: HTMLFormElement;
    private imageNameInput: HTMLInputElement;
    private imageFileInput: HTMLInputElement;
    private submitNewImageButton: HTMLButtonElement;

    public constructor() {
        this.addNewImageForm = $(".home-image-slide form.add-new-image");
        this.imageNameInput = $('input[type="text"]', this.addNewImageForm);
        this.imageFileInput = $('input[type="file"]', this.addNewImageForm);
        this.submitNewImageButton = $("button.submit", this.addNewImageForm);
    }

    public listenEvent() {
        // Kiểm tra dữ liệu tên hình ảnh trước khi tải lên
        this.imageNameInput.addEventListener("focusout", (e) => {
            const target = e.target as HTMLInputElement;
            const inputContainer = target.parentElement
                ?.parentElement as HTMLDivElement;
            const errorMessage = $(".error-message", inputContainer);

            if (!target.value.length) {
                inputContainer.classList.add("error");
                errorMessage.textContent = "Vui lòng nhập tên hình ảnh!";
            } else {
                inputContainer.classList.remove("error");
            }
        });

        this.addNewImageForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const target = e.target as HTMLFormElement;
            const inputContainer = this.imageNameInput.parentElement
                ?.parentElement as HTMLDivElement;
            const errorMessage = $(".error-message", inputContainer);

            if (!this.imageNameInput.value.length) {
                inputContainer.classList.add("error");
                errorMessage.textContent = "Vui lòng nhập tên hình ảnh!";
            } else {
                target.submit();
            }
        });
    }
}

export default HomeImageSlide;
export { AddImageSlide };
