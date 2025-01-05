import { Component, inject, Input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../../../models/invoice.model';
import { InvoicesService } from '../../../../services/invoices.service';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [],
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.css'
})
export class InvoiceDetailComponent {
  @Input() id!: string;

  invoice = signal<Invoice | null>(null);
  private invoicesService = inject(InvoicesService);

  async ngOnInit() {
    if (this.id !== undefined) {
      await new Promise<void>((resolve) => {
        this.invoicesService.getOneInvoice(this.id!).subscribe({
          next: (data) => {
            this.invoice.set(data);
            resolve();
          },
          error: (err) => {
            console.error('Error fetching invoice:', err);
            resolve();
          }
        });
      });
    }
  }

  submit() {
    console.log(this.invoice());
  }
}
