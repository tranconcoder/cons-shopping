import { $, $$ } from "../Common/index";

export default class ProductList {
    private productListItem: HTMLLIElement[];

    public constructor() {
        this.productListItem = $$(".product-list-container .product-item");
    }

    public listenEvent() {
        this.productListItem.forEach((product) => {
            const deleteButton = $("button.delete", product);

            // Listen remove event
            deleteButton.addEventListener("click", (e) => {
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
                        if (!data.error){
                            product.remove();
                        }
                    })
                    .catch((err) => console.log(err));
            });
        });
    }
}
