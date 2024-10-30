import { $ } from "../utils/selectElm";
import Storage from "../utils/storage";

// HTML element
const cartList = Storage.getCartList();
const cartTitleElm = $<HTMLParagraphElement>(".header-wrapper .cart");

cartTitleElm.innerText = `Giỏ hàng: ${cartList.length}`;
