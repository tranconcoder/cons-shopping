import { $ } from "../Common/index";

export default class AddProduct {
    private addProductForm: HTMLFormElement;
    private addProductButton: HTMLButtonElement;
    private imageFilesInput: HTMLInputElement;
    private imageListPreview: HTMLUListElement;

    public constructor() {
        this.addProductForm = $("form.add-product-box-ctn");
        this.addProductButton = $(".add-product-button");
        this.imageFilesInput = $('input[name="file[]"]');
        this.imageListPreview = $("ul.image-list");
    }

    public listenEvent() {
        this.addProductButton.addEventListener(
            "click",
            this.handleOpenBox.bind(this)
        );
        this.imageFilesInput.addEventListener(
            "change",
            this.handleChangeInputFiles.bind(this)
        );
    }

    private async handleOpenBox() {
        this.addProductForm.reset();
    }

    private handleChangeInputFiles(e: any) {
        // Reset image list preview
        this.imageListPreview.innerHTML = "";

        const target = e.target as HTMLInputElement;
        const accepts = ["image/jpeg", "image/png", "image/jpg"];
        let files = [...(target.files as FileList)] as File[];

        files = files.filter((file) => accepts.includes(file.type));

        for (let file of files) {
            const url = URL.createObjectURL(file);
            const liItem = document.createElement("li");
            const imgElm = document.createElement("img");

            imgElm.src = url;
            liItem.appendChild(imgElm);
            this.imageListPreview.appendChild(liItem);
        }
    }
}
