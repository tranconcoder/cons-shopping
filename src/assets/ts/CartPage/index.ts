import { $ } from "../utils/selectElm";
import Storage from "../utils/storage";
import { currencyFormatter } from "../utils/currency.util";

class CartPage {
    private productIdList: Array<string>;
    private productList: Array<Product>;
    private cartListCtn: HTMLUListElement;
    private cartItemList: Array<HTMLLIElement>;

    constructor() {
        // Set default value
        this.productIdList = [];
        this.productList = [];
        this.cartListCtn = document.createElement("ul");
        this.cartItemList = [];

        this.initData();
    }

    private async initData() {
        this.productIdList = Storage.getCartList();
        const productIdSet = [...new Set(this.productIdList)];

        const resArr = await Promise.all(
            productIdSet.map((id) => fetch(`/api/get-product?productId=${id}`))
        );
        this.productList = await Promise.all(resArr.map((res) => res.json()));

        this.initElm();
        this.initView();
        this.initEvent();
    }

    private initElm() {
        this.cartListCtn = $(".cart-list-wrapper .cart-list");
    }

    private initView() {
        this.cartItemList = this.productList.map((product) => {
            const item = document.createElement("li");

            item.classList.add("cart-item");
            item.innerHTML = `
                <input type="checkbox">

                <img src="${product.thumb}" alt="" class="thumb">

                <span class="name">${product.label}</span>

                <span class="count">
                    <button class="sub">-</button>
                    <input type="number" min="1" id="" value="1">
                    <button class="add">+</button>
                </span>

                <span class="price">${currencyFormatter.format(
                    product.cost
                )}</span>

                <span class="cost">${currencyFormatter.format(
                    product.cost
                )}đ</span>
            `;

            return item;
        });

        // Append all item to container
        this.cartItemList.forEach((item) => this.cartListCtn.appendChild(item));
    }

    private initEvent() {
        this.cartItemList.forEach((item, index) => {
            const sub = $(".sub", item);
            const add = $(".add", item);
            const input: HTMLInputElement = $("input[type=number]", item);
            const productPriceElm = $(".cost", item);

            const handleChangeInput = () => {
                const count = +input.value;
                const totalPriceOfProduct =
                    count * this.productList[index].cost;

                productPriceElm.textContent =
                    currencyFormatter.format(totalPriceOfProduct);
            };

            add.addEventListener("click", () => {
                input.value = +input.value + 1 + "";
                handleChangeInput();
            });
            sub.addEventListener("click", () => {
                input.value = input.value != "1" ? +input.value - 1 + "" : "1";
                handleChangeInput();
            });
            input.addEventListener("input", () => {
                if (+input.value < 1) input.value = "1";
            });
            input.addEventListener("change", handleChangeInput);
        });
    }
}

const cartPage = new CartPage();
