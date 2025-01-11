import { Component, inject } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling'

import { ButtonComponent } from '../../../../shared-components/button/button.component';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../models/product.model';


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

  private userService = inject(UserService);
  private productService = inject(ProductsService);

  constructor(private fb: FormBuilder) {
    this.formProvider = this.fb.group({
      selectProvider: ['default'],
    });

  }

  ngOnInit() {
    this.getUser()
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
        console.log(data);
      }
    })
  }

  downloadProductsCsv(providerId: number) {
    this.productService.downloadProductsCsv(providerId).subscribe({
      next: (response: Blob) => {
        console.log('Su archivo ha sido descargado con exito')
        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        link.href = url;

        // Establecer el nombre del archivo descargado
        link.download = `products_${providerId}.csv`;
        // Simular clic para descargar
        document.body.appendChild(link);
        link.click();

        // Limpiar recursos
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

      }
    })
  }

}
