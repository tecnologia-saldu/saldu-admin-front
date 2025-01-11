export interface Product {
    sku: string;
    description: string;
    urlImage1: string;
    urlImage2: string;
    urlImage3: string;
    urlImage4: string;
}

export interface UploadResponse {
    total: number;
    processed: number;
    rejected: number;
    rejectedProducts: any;
}