import { Component, inject, Input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

