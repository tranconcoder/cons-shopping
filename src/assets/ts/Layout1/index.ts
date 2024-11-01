import { $ } from "../utils/selectElm";
import Storage from "../utils/storage";

// HTML element
const cartTitleElm = $<HTMLParagraphElement>(".header-wrapper .cart");

if (cartTitleElm)
    cartTitleElm.innerText = `Giỏ hàng: ${Storage.getCartCount()}`;

document.addEventListener(
    "cart-change",
    () => {
        if (cartTitleElm)
            cartTitleElm.textContent = `Giỏ hàng: ${Storage.getCartCount()}`;
    },
    false
);
