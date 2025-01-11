import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, UploadResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);
  private apiUrl = 'http://ec2-3-144-209-131.us-east-2.compute.amazonaws.com:3001/upload-product';


  constructor() { }

  fileUpload(providerId: number, file: File | null) {
    const formData = new FormData();
    formData.append('providerId', providerId.toString());
    if(file) {
      formData.append('file', file)
    };
    return this.http.post<UploadResponse>(`${this.apiUrl}/massive-upload/${providerId}`, formData);
  }

  getProducts(providerId?: number, uploadStatus?: string) {
    let params = new HttpParams();
    if (providerId !== undefined) {
      params = params.append('providerId', providerId.toString());
    }
    if (uploadStatus) {
      params = params.append('uploadStatus', uploadStatus);
    }
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  saveProductImage(productId: string, urlImage: string) {
    return this.http.put<Product>(`${this.apiUrl}/${productId}`, { imagesUrl: urlImage })
  }

}
