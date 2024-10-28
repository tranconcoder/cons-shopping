import { $$ } from "../Common/selectElm";
import Storage from "../Common/storage";

const cartButtonList = $$(".popular-product-list button.add-to-cart");

cartButtonList.forEach((button) => {
    button.addEventListener("click", () => {
        Storage.addCart("123456")
    });
});
