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
            data.salduInlineProducts.forEach((product) =>{
              this.subtotal.update((currentSubtotal) => {
                return currentSubtotal + product.taxedPrice;
              })
            })
            data.salduInlineProducts.forEach((product) =>{
              this.iva.update((currentIva) => {
                return currentIva + product.taxedPrice*product.salduProduct.charges[0].taxDiscount.value;
              })
            })
            this.total.set(this.subtotal() + this.iva());
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

  

  toggleEditMode(event: Event) {
    event.preventDefault();
    this.editMode.update((prevState) => !prevState);
  }

  // submit() {
  //   if (this.invoice().id) {
  //     this.invoicesService.uploadToSiigo(this.invoice().id).subscribe({
  //       next: (data) => {
  //       }
  //     })
  //   }
  // }

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

