import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Invoice } from '../../../../models/invoice.model';
import { InvoicesService } from '../../../../services/invoices.service';
import { ButtonComponent } from '../../../../shared-components/button/button.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.css'
})
export class InvoiceDetailComponent {
  @Input() id!: string;

  private invoicesService = inject(InvoicesService);
  private toastr = inject(ToastrService);

  editMode = signal(false);
  invoice = signal<Invoice | null>(null);
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
            this.toastr.error('Error al cargar la factura')
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
  }

  updateInvoiceInfo(event: Event) {
    const invoiceId = this.invoice()?.id;
    const commission = this.invoice()?.salduInlineProducts.find(product => product.salduProduct.id == 4)?.taxedPrice;
    if (invoiceId && commission != undefined && commission >= 0) {
      this.invoicesService.updateInvoiceInfo(invoiceId, commission).subscribe({
        next: (data) => {
          this.invoice.set(data);
          this.calculateTotals(data);
          this.toastr.success('Factura actualizada correctamente')
        },
        error: (error) => {
          this.toastr.error('Error actualizando la factura');
        }
      });
    }
    this.toggleEditMode(event);
  }

  submit() {
    const currentInvoice = this.invoice();
    if (currentInvoice && currentInvoice.id) {
      this.invoicesService.uploadToSiigo(currentInvoice.id).subscribe({
        next: (data) => {
          this.toastr.success('Factura enviada correctamente')
        },
        error: (err) => {
          this.toastr.error('Error al enviar la factura')
        }
      });
    } else {
      this.toastr.error('Error del servidor')
    }
  }


  constructor(
  ) { }



}

