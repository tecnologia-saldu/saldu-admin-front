export interface Invoice {
    id: number;
    orderId: number;
    orderTotal: number;
    documentType: string;
    document: string;
    businessName: string;
    firstname: string;
    lastname: string;
    address: string;
    phone: string;
    email: string;
    taxedPrice: number;
    siigoId: string;
    siigoStatus: string;
    siigoName: string;
    cufe: string;
    siigoDate: string;
    customerMailed: boolean;
    publicUrl: string;
    createdAt: string;
    updatedAt: string;
    paymentOption: PaymentOption;
    salduInlineProducts: SalduInlineProduct[];
    checkbox: boolean;
}

export interface SalduInlineProduct {
    id: number;
    taxedPrice: number;
    createdAt: string;
    updatedAt: string;
    salduProduct: SalduProduct;
}

export interface SalduProduct {
    id: number;
    internalCode: number;
    siigoId: string;
    name: string;
    description: string;
    charges: Charges[];
}

export interface Charges {
    isActive: boolean;
    taxDiscount: TaxDiscount;
}

export interface TaxDiscount {
    siigoId: number;
    category: string;
    name: string;
    value: number;
}

export interface PaymentOption {
    id: number;
    siigoId: number;
    name: string;
    type: string;
    isActive: boolean;
}

export interface IOrders {
    id: number
    number: string
    status: string
    total: number
    customer: {
        documentType: string
        document: string
        businessName: string
        firstname: string
        lastname: string
        address: string
        phone: string
        email: string
    }
    date_created: string
    date_modified: string
    date_paid: string
    line_items: ILineItem[]
}

export interface ILineItem {
    product_id: number
    name: string
    quantity: number
    price: number
    total: number
    meta_data: IMetaData[]
}

export interface IMetaData {
    key: string
    value: string
}

export default IOrders