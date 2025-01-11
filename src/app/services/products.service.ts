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

  fileUpload(providerId: number) {
    return this.http.post<UploadResponse>(`${this.apiUrl}/${providerId}`, '');
  }

  getProducts(providerId?: number, uploadStatus?: string) {
    let params = new HttpParams();

    // Agregar providerId si se pasa
    if (providerId !== undefined) {
      params = params.append('providerId', providerId.toString());
    }

    // Agregar uploadStatus si se pasa
    if (uploadStatus) {
      params = params.append('uploadStatus', uploadStatus);
    }

    // Realizar la solicitud GET con los parámetros
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  // getOneInvoice(id: string) {
  //   return this.http.get<Invoice>(`${this.apiUrl}/${id}`);
  // }

  // uploadToSiigo(id: number) {
  //   return this.http.post<Invoice>(`${this.apiUrl}/siigo/${id}`, '')
  // }

  // updateInvoiceInfo(id: number, commission: number) {
  //   return this.http.put<Invoice>(`${this.apiUrl}/${id}`, { commission })
  // }

}
