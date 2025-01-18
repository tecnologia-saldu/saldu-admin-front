import { Component, inject } from '@angular/core';
import { InvoicesService } from '../../../../services/invoices.service';
import { Invoice } from '../../../../models/invoice.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-done-invoices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './done-invoices.component.html',
  styleUrl: './done-invoices.component.css'
})
export class DoneInvoicesComponent {

  private invoicesService = inject(InvoicesService);  
  private toastr = inject(ToastrService);
  
  invoices: Invoice[] = [];

  ngOnInit() {
    this.getDoneInvoices();
  }

  getDoneInvoices() {
    this.invoicesService.getDoneInvoices().subscribe({
      next: (data) => 
        this.invoices = data,
      error: (error) => 
        this.toastr.error('No se encontraron órdenes')
    })
  }
}
