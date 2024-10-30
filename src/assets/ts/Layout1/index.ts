import { $ } from "../utils/selectElm";
import Storage from "../utils/storage";

// HTML element
const cartTitleElm = $<HTMLParagraphElement>(".header-wrapper .cart");

cartTitleElm.innerText = `Giỏ hàng: ${Storage.getCartCount()}`;

document.addEventListener(
    "cart-change",
    (e) => {
        cartTitleElm.innerText = `Giỏ hàng: ${Storage.getCartCount()}`;
    },
    false
);
