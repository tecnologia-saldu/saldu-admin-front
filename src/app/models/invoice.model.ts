export interface Invoice {
    id: string;
    customer_email: string | null;
    total: number;
    status: string;
    created: number;
    checkbox?: boolean;
    customer_name: string;
    due_date: Date;
    customer_phone: number;
    customer_address: string;
    customer: string;
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