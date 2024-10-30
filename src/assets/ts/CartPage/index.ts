import { $ } from "../utils/selectElm";
import Storage from "../utils/storage";
import { currencyFormatter } from "../utils/currency.util";
import { CartStorage } from "../../types/cart";
import {event} from "../utils/event.util";

class CartPage {
    private productIdList: Array<string>;
    private productList: Array<Product>;
    private cartList: CartStorage;
    private cartListCtn: HTMLUListElement;
    private cartItemList: Array<HTMLLIElement>;

    constructor() {
        // Set default value
        this.productIdList = [];
        this.productList = [];
        this.cartListCtn = document.createElement("ul");
        this.cartItemList = [];
        this.cartList = {};

        this.initData();
    }

    private async initData() {
        this.cartList = Storage.getCartList();
        this.productIdList = Object.keys(this.cartList);

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
                    <input type="number" min="1" id="" value="${
                        this.cartList[product.productId]
                    }">
                    <button class="add">+</button>
                </span>

                <span class="price">${currencyFormatter.format(
                    product.cost
                )}</span>

                <span class="cost">${currencyFormatter.format(
                    product.cost * this.cartList[product.productId]
                )}</span>
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
            const productId = this.productList[index].productId;

            const handleChangeInput = () => {
                const count = +input.value;
                const totalPriceOfProduct =
                    count * this.productList[index].cost;
                const newValue = +input.value;

                Storage.setProductCount(productId, newValue);

                productPriceElm.textContent =
                    currencyFormatter.format(totalPriceOfProduct);

                document.dispatchEvent(event)
            };

            add.addEventListener("click", () => {
                input.value = +input.value + 1 + "";
                handleChangeInput();
            });
            sub.addEventListener("click", () => {
                if (
                    input.value === "1" &&
                    confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?")
                ) {
                    item.remove();
                    input.value = "0";
                }

                input.value = input.value != "1" ? +input.value - 1 + "" : "1";
                handleChangeInput();
            });
            input.addEventListener("change", () => {
                if (+input.value < 1) input.value = "1";
                handleChangeInput();
            });
        });
    }
}

const cartPage = new CartPage();
