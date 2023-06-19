declare interface Product {
    productId: string;
    label: string;
    thumb?: string;
    cost: number;
    categoryId?: string;
    description: string;
    monitorWidth?: number;
    monitorHeight?: number;
    processor?: string;
    memory?: number;
    storage?: number;
    sizeWidth?: number;
    sizeHeight?: number;
    color?: string;
    notSell: boolean;
    dealId?: string;
}
