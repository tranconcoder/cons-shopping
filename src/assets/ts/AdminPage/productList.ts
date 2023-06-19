import { $, $$ } from "../Common/index";

export default class ProductList {
    private productImagesRow: HTMLTableRowElement;
    private productListItem: HTMLLIElement[];

    public constructor() {
        this.productImagesRow = $("section.section-2 table tbody tr");
        this.productListItem = $$(".product-list-container .product-item");
    }

    public listenEvent() {
        // Listen handle remove item
        this.productListItem.forEach((product) => {
            const deleteButton = $("button.delete", product);

            // Listen remove event
            deleteButton.addEventListener(
                "click",
                this.handleRemoveItem.bind(this)
            );
        });

        // Listen handle change info
        this.productListItem.forEach((input) => {
            const changeProductInfoButton = $("label.change-info", input);

            changeProductInfoButton.addEventListener(
                "click",
                this.handleOpenChangeBox.bind(this)
            );
        });

        // Listen change image
        this.productImagesRow.addEventListener(
            "change",
            this.handleChangeImage.bind(this)
        );
    }

    private handleRemoveItem(e: any) {
        const confirmDelete = confirm(
            "Bạn có muốn XÓA sản phẩm khỏi danh sách không?"
        );
        if (!confirmDelete) return;

        const target = e.target;
        const product = target.parentElement as HTMLLIElement;
        const url = "/api/remove-product";
        const productId: string = product.dataset.id as string;
        const formData = new FormData();

        formData.append("productId", productId);

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) product.remove();
            })
            .catch((err) => console.log(err));
    }

    private async handleOpenChangeBox(e: any) {
        const target = e.target;
        let productItem = target;
        while (!(productItem instanceof HTMLLIElement))
            productItem = productItem.parentElement;
        const productId = productItem.dataset.id as string;
        const changeProductBox = $(
            "#change-product-info-state + .change-product-info"
        );

        // Get product info to view
        const productInfo = (await this.getProductInfo(productId)) as Product;
        const dealList = await this.getAllDeal();
        const productImages = (await this.getProductImages(
            productId
        )) as Image[];

        // Init data to view
        const inputProductId: HTMLInputElement = $('input[name="productId"]');
        const productThumbImg: HTMLImageElement = $(
            "img.thumb",
            changeProductBox
        );
        const productLabel: HTMLInputElement = $(
            'input[name="label"]',
            changeProductBox
        );
        const productCost: HTMLInputElement = $('input[name="cost"]');
        const selectDeal: HTMLSelectElement = $('select[name="deal"]');

        productThumbImg.src = productInfo.thumb || "";
        productCost.value = productInfo.cost.toString();
        productLabel.value = productInfo.label;
        dealList.forEach((deal) => {
            const optionElm = document.createElement("option");
            optionElm.value = deal.dealId;
            optionElm.innerText = deal.title;

            if (deal.dealId === productInfo.dealId) optionElm.selected = true;

            selectDeal.appendChild(optionElm);
        });
        inputProductId.value = productId;

        // Show product images
        this.productImagesRow.innerHTML = "<th>Hình ảnh</th>"; // Reset data
        productImages.forEach((image) => {
            const tdElm = document.createElement("td");

            tdElm.innerHTML = `
                <label>
                    <input
                        type="file"
                        data-id="${image.imageId}"
                        accept="image/png, image/jpg, image/jpeg"
                        hidden
                    />
                    <img src="${image.source}" />
                </label>
            `;

            this.productImagesRow.appendChild(tdElm);
        });

        // Set product info detail
        const sizeWidth = $('input[name="sizeWidth"]') as HTMLInputElement;
        const sizeHeight = $('input[name="sizeHeight"]') as HTMLInputElement;
        const monitorWidth = $(
            'input[name="monitorWidth"]'
        ) as HTMLInputElement;
        const monitorHeight = $(
            'input[name="monitorHeight"]'
        ) as HTMLInputElement;
        const processor = $('input[name="processor"]') as HTMLInputElement;
        const memory = $('input[name="memory"]') as HTMLInputElement;
        const storage = $('input[name="storage"]') as HTMLInputElement;
        const color = $('input[name="color"]') as HTMLInputElement;

        sizeWidth.value = productInfo.sizeWidth?.toString() || "";
        sizeHeight.value = productInfo.sizeHeight?.toString() || "";
        monitorWidth.value = productInfo.monitorWidth?.toString() || "";
        monitorHeight.value = productInfo.monitorHeight?.toString() || "";
        processor.value = productInfo.processor?.toString() || "";
        memory.value = productInfo.memory?.toString() || "";
        storage.value = productInfo.storage?.toString() || "";
        color.value = productInfo.color?.toString() || "";
    }

    private handleChangeImage(e: any) {
        const target = e.target as HTMLInputElement;
        const imageId = target.dataset.id;
        const file = (target?.files as FileList)[0];
        const formData = new FormData();
        const url = "/api/change-image";

        formData.append("imageFile", file);
        formData.append("imageId", imageId as string);

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if(!data.error) {
                }
            })
            .catch((err) => console.log(err));
    }

    private async getAllDeal() {
        const url = "/api/get-all-deal";

        return fetch(url)
            .then((res) => res.json())
            .then((data: Deal[]) => data);
    }

    private async getProductImages(productId: string) {
        const url = "/api/get-product-images?productId=" + productId;
        return fetch(url)
            .then((res) => res.json())
            .then((data: Image[]) => data)
            .catch((err) => console.log(err));
    }

    private async getProductInfo(productId: string) {
        const url = "/api/get-product?productId=" + productId;
        return await fetch(url)
            .then((res) => res.json())
            .then((data) => data[0])
            .catch((err) => console.error(err));
    }
}
