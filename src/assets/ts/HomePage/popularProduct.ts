import { currencyFormatter } from "../utils/currency.util";
import { $, $$ } from "../utils/selectElm";
import Storage from "../utils/storage";

const cartButtonList = $$(".popular-product-list button.add-to-cart");

cartButtonList.forEach((button) => {
    button.addEventListener("click", () => {
        Storage.addCart("123456");
    });
});

export default class PopularProduct {
    private popularProductList: Array<Product>;
    private popularProductCtn: HTMLElement;
    private popularProductItemList: Array<HTMLLIElement>;

    public constructor() {
        const elmInit = this.initElement();

        this.popularProductList = [];
        this.popularProductItemList = [];

        this.popularProductCtn = elmInit.popularProductCtn;

        this.initData();
    }

    private initElement() {
        return {
            popularProductCtn: $(".popular-product-list"),
        };
    }

    private initEvent() {
        this.popularProductItemList.forEach((item) => {
            const cartButton = $("button.add-to-cart", item);

            cartButton.addEventListener("click", (e) => {
                Storage.addCart(item.dataset.id as string);
            });
        });
    }

    private initUI() {
        this.popularProductCtn.innerHTML = "";

        this.popularProductItemList = this.popularProductList.map((product) => {
            const elm = document.createElement("li");
            elm.classList.add("item-container");
            elm.dataset.id = product.productId;

            elm.innerHTML = `
                <div class="thumb-ctn">
                    <img src="${product.thumb}" alt="" class="thumb" />
                </div>

                <p class="name">${product.label}</p>
                <p class="price">${currencyFormatter.format(product.cost)}</p>

                <div class="detail">
                    <p class="memory">RAM: ${product.memory}</p>
                    <p class="storage">ROM: ${product.storage}</p>
                    <p class="monitor">Màn hình: ${product.monitorWidth}x${
                product.monitorHeight
            }</p>
                    <p class="battery">Pin: 5000mah</p>
                </div>


                <div class="button-list">
                    <button class="add-to-cart">
                        <p><i class="fa-solid fa-cart-plus"></i></p>
                    </button>

                    <button class="buy-now">
                        <p>Mua ngay</p>
                    </button>
                </div>
            `;

            return elm;
        });

        this.popularProductItemList.forEach((item) =>
            this.popularProductCtn.append(item)
        );
    }

    private async initData() {
        this.popularProductList = await fetch("/api/get-all-product").then(
            (res) => res.json()
        );

        this.initUI();
        this.initElement();
        this.initEvent();
    }
}
