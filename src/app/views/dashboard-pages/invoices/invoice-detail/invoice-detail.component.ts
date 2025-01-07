import { Component, inject, Input, signal } from '@angular/core';
import { Invoice } from '../../../../models/invoice.model';
import { InvoicesService } from '../../../../services/invoices.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.css'
})
export class InvoiceDetailComponent {
  @Input() id!: string;

  editMode = signal(false);
  invoice = signal<Invoice | null>(null);
  private invoicesService = inject(InvoicesService);
  subtotal = signal(0);
  iva = signal(0);
  total = signal(0);

  async ngOnInit() {
    if (this.id !== undefined) {
      await new Promise<void>((resolve) => {
        this.invoicesService.getOneInvoice(this.id!).subscribe({
          next: (data) => {
            this.invoice.set(data);
            this.calculateTotals(data);
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

  calculateTotals(data: Invoice) {
    let subtotalValue = 0;
    let ivaValue = 0;

    data.salduInlineProducts.forEach((product) => {
      subtotalValue += product.taxedPrice;
      ivaValue += product.taxedPrice * product.salduProduct.charges[0].taxDiscount.value;
    });

    this.subtotal.set(subtotalValue);
    this.iva.set(ivaValue);
    this.total.set(subtotalValue + ivaValue);
  }

  updateProductTaxedPrice(productIndex: number, event: Event) {
    const currentInvoice = this.invoice();
    if (currentInvoice) {
      const product = currentInvoice.salduInlineProducts[productIndex];
      const inputValue = (event.target as HTMLInputElement).value;
      product.taxedPrice = parseFloat(inputValue);
      this.calculateTotals(currentInvoice);
    }
  }

  toggleEditMode(event: Event) {
    event.preventDefault();
    this.editMode.update((prevState) => !prevState);
    this.updateInvoiceInfo();
  }

  updateInvoiceInfo() {
    const invoiceId = this.invoice()?.id;
    const commission = this.invoice()?.salduInlineProducts.find((product) => {
      product.salduProduct.name == "Comisión SALDU";
    })?.taxedPrice;
    console.log(invoiceId, commission);
  }

  submit() {
    const currentInvoice = this.invoice();
    if (currentInvoice && currentInvoice.id) {
      this.invoicesService.uploadToSiigo(currentInvoice.id).subscribe({
        next: (data) => {
          console.log('Invoice uploaded successfully:', data);
        },
        error: (err) => {
          console.error('Error uploading invoice:', err);
        }
      });
    } else {
      console.error('No invoice available to upload');
    }
  }

}

