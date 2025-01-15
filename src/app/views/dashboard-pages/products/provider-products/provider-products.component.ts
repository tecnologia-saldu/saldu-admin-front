import { Component, inject } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling'

import { ButtonComponent } from '../../../../shared-components/button/button.component';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsService } from '../../../../services/products.service';
import { Load, Product } from '../../../../models/product.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-provider-products',
  standalone: true,
  imports: [ButtonComponent, ScrollingModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './provider-products.component.html',
  styleUrl: './provider-products.component.css'
})
export class ProviderProductsComponent {

  faMagnifyingGlass = faMagnifyingGlass;

  users: User[] = [];
  formProvider: FormGroup;
  products: Product[] = [];
  loads: Load[] = [];

  private userService = inject(UserService);
  private productService = inject(ProductsService);
  private toastr = inject(ToastrService);


  constructor(private fb: FormBuilder) {
    this.formProvider = this.fb.group({
      selectProvider: ['default'],
      selectLoad: ['default'],
    });

  }

  ngOnInit() {
    this.getUser()
  }

  ngOnChanges() {
    console.log();
  }

  getUser() {
    this.userService.getUsers('vendedor').subscribe({
      next: (data) =>
        this.users = data
    })
  }

  getProducts(providerId: number) {
    this.productService.getProducts(providerId, 'seleccionada').subscribe({
      next: (data) => {
        this.products = data;
        if (data.length == 0) {
          this.toastr.error('No se encontraron productos')
        }
      },
      error: (error) => {
        this.toastr.error('Seleccione un proveedor')
      }
    })
    this.getLoads(providerId);
  }

  getLoads(providerId: number) {
    this.productService.getLoads(providerId).subscribe({
      next: (load) => {
        this.loads = load;
      }
    })
  }

  downloadProductsCsv(providerId: number) {
    this.productService.downloadProductsCsv(providerId).subscribe({
      next: (response: Blob) => {
        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        link.href = url;
        link.download = `products_${providerId}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        this.toastr.success('Archivo descargado con éxito');
      }
    })
  }

}
