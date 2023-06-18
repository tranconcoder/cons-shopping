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
                const productId: string = product.dataset.id as string;
                const url = "/api/remove-product";

                fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ productId }),
                }).then(res => res.json()).then(data =>console.log(data)).catch(err => console.log(err))
            });
        });
    }
}
