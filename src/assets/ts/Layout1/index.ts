import { $ } from "../Common/selectElm";
import Storage from "../Common/storage";

// HTML element
const cartList = Storage.getCartList();
const cartTitleElm = $<HTMLParagraphElement>(".header-wrapper .cart");

cartTitleElm.innerText = `Giỏ hàng: ${cartList.length}`;
