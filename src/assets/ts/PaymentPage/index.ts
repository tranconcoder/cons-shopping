import { $ } from "../utils/selectElm";

class PaymentPage {
    private note: string;
    private params: URLSearchParams;
    private bodyCtn: HTMLDivElement;

    public constructor() {
        this.bodyCtn = document.createElement("div");
        this.params = new URLSearchParams(window.location.search);
        this.note = "";

        this.initData();
    }

    private initData() {
        this.note = this.params.get("note") || "";

        this.initElm();
        this.renderUI();
    }

    private initElm() {
        this.bodyCtn = $(".payment-ctn .body");
    }

    private renderUI() {
        this.bodyCtn.innerHTML += `
            <p>${this.note}</p>
        `;
    }
}

new PaymentPage();
