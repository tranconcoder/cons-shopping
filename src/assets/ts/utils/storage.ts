import type { CartStorage } from "../../types/cart";

export default class Storage {
    private static CART_STORAGE_KEY = "cons_shopping_cart";

    public static getCartList(): CartStorage {
        return JSON.parse(localStorage.getItem(this.CART_STORAGE_KEY) || "{}");
    }

    public static addToCart(productId: string) {
        const newData = this.getCartList();

        if (newData.hasOwnProperty(productId)) newData[productId]++;
        else newData[productId] = 1;

        this.setStorage(newData);
    }

    public static removeFromCart(productId: string) {
        const newData = this.getCartList();

        if (newData.hasOwnProperty(productId) && newData[productId] >= 1)
            newData[productId]--;

        if (newData[productId] === 0) delete newData[productId];

        this.setStorage(newData);
    }

    public static getCartCount() {
        const cartList = this.getCartList();

        return Object.keys(cartList).reduce(
            (acc, curr) => acc + cartList[curr],
            0
        );
    }

    public static setProductCount(productId: string, newCount: number) {
        const newData = this.getCartList();
        if (newCount <= 0) delete newData[productId];
        else newData[productId] = newCount;

        this.setStorage(newData)
    }

    private static setStorage(data: CartStorage) {
        localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(data));
    }
}
