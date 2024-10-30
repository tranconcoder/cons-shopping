export default class Storage {
    private static CART_STORAGE_KEY = "cons_shopping_cart";

    public static getCartList(): Array<string> {
        return JSON.parse(localStorage.getItem(this.CART_STORAGE_KEY) || "[]");
    }

    public static addCart(productId: string) {
        const newData = this.getCartList();
        newData.push(productId);

        localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(newData));
    }
}
