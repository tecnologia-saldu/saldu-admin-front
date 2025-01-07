import { inject, Injectable } from '@angular/core';
import { Invoice } from '../models/invoice.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface StripeResponse {
  data: Invoice[];
}

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  private http = inject(HttpClient);
  private apiUrl = 'http://ec2-3-144-209-131.us-east-2.compute.amazonaws.com:3001/invoice';
  private apiKey = ''



  constructor() { }

  getInvoices() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });

    return this.http.post<Invoice[]>(`${this.apiUrl}/all-pending`, { headers });
  }

  getOneInvoice(id: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });

    return this.http.get<Invoice>(`${this.apiUrl}/${id}`, { headers });
  }

  uploadToSiigo(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });
    return this.http.post<Invoice>(`${this.apiUrl}/siigo/${id}`, { headers })
  }

  updateInvoiceInfo(id: number, commission: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });
    return this.http.put<Invoice>(`${this.apiUrl}/${id}`, { commission }, { headers })
  }
}
