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
  private apiUrl = 'https://api.stripe.com/v1/invoices';
  private apiKey = 'sk_test_CGGvfNiIPwLXiDwaOfZ3oX6Y'
  
  

  constructor() { }

  getInvoices() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });

    return this.http.get<StripeResponse>(this.apiUrl, { headers });
  }

  getOneInvoice(id: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });

    return this.http.get<Invoice>(`${this.apiUrl}/${id}`, { headers });
  }
}
