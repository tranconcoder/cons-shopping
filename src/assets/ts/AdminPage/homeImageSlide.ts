import { $, $$ } from "../Common/index";

class HomeImageSlide {
    private updateImageBoxStateInput: HTMLInputElement;
    private inputFileImageList: HTMLInputElement[];

    public constructor() {
        this.updateImageBoxStateInput = $("#update-image-box-state");
        this.inputFileImageList = $$(".home-image-slide tbody .thumb input");
    }

    public listenEvent() {
        this.inputFileImageList.forEach((inputFileImage) => {
            inputFileImage.addEventListener(
                "change",
                this.handleChangeImageSlideThumb.bind(this)
            );
        });
    }

    private handleChangeImageSlideThumb(e: any) {
        // Get file and display on image element
        const file = e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        const imgElm = (e.target as HTMLInputElement)
            .previousElementSibling as HTMLImageElement;

        imgElm.src = imgUrl;

        // Upload file to php server
        const formData = new FormData();
        const url = "/api/change-image-slider";
        formData.append("id", e.target.dataset.id);
        formData.append("file", file);
        console.log(e.target);

        fetch(url, {
            method: "POST",
            body: formData,
        } as RequestInit)
            .then((res) => res.text())
            .then((data) => console.log(data));
    }
}

export default HomeImageSlide;
