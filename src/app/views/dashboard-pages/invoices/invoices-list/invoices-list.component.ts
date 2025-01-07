import { Component, inject } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Invoice } from '../../../../models/invoice.model';
import { InvoicesService } from '../../../../services/invoices.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoices-list',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './invoices-list.component.html',
  styleUrl: './invoices-list.component.css'
})
export class InvoicesListComponent {
  faPenToSquare = faPenToSquare;
  selectAll = false;

  private invoicesService = inject(InvoicesService);

  invoices: Invoice[] = [];

  ngOnInit() {
    this.getInvoices();
  }

  getInvoices() {
    this.invoicesService.getInvoices().subscribe({
      next: (data) => {
        this.invoices = data;
      },
    });

  }

  toggleSelectAll() {
    this.invoices.forEach((invoice) => (invoice.checkbox = this.selectAll));
  }

  checkboxChanged() {
    if (this.checkboxesSelected()) {
      this.selectAll = true;
    } else {
      this.selectAll = false;
    }
  }

  checkboxesSelected() {
    return this.invoices.every((invoice) => invoice.checkbox);
  }

  submit() {
    if (this.selectedCheckboxes.length == 0) {
      console.log('Empty selection');
    } else {
      let selectedCheckboxes = this.selectedCheckboxes;
      console.log(selectedCheckboxes);
    }
  }

  get selectedCheckboxes() {
    return this.invoices.filter((invoice) => invoice.checkbox);
  }
}
