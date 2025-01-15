import { Component, inject } from '@angular/core';
import { Invoice } from '../../../models/invoice.model';
import { InvoicesService } from '../../../services/invoices.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private invoicesService = inject(InvoicesService);

  invoices: Invoice[] = [];

  getInvoices() {
    this.invoicesService.getInvoices().subscribe({
      next: (data) => {
        this.invoices = data;
      }
    });
  }

  ngOnInit() {
    this.getInvoices();
  }
}
