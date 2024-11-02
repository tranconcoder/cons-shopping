import { $, $$ } from "../utils/selectElm";

class OrderPage {
    // Data

    // Element
    private orderTable: HTMLTableElement;
    private orderTBody: HTMLTableSectionElement;
    private orderItemList: Array<HTMLTableRowElement>;

    public constructor() {
        // HTML Element
        this.orderTable = document.createElement("table");
        this.orderTBody = document.createElement("tbody");
        this.orderItemList = [];

        this.initElm();
        this.initEvent();
    }

    private initElm() {
        this.orderTable = $("table.order-table");
        this.orderTBody = $("tbody", this.orderTable);
        this.orderItemList = $$("tr", this.orderTBody);
    }

    private initEvent() {
        this.orderItemList.forEach((item) => {
            const acceptButton = $(".accept-button", item);
            const removeButton = $(".remove-button", item);

            removeButton.addEventListener("click", () => {
                const orderId = item.dataset.orderId as string;

                fetch(`/api/remove-order?orderId=${orderId}`)
                    .then(() => {
                        location.reload();
                    })
                    .catch(console.error);
            });
        });
    }
}

new OrderPage();
