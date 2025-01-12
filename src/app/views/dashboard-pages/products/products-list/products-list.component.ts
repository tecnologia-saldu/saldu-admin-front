import { Component, inject } from '@angular/core';
import { CdkVirtualForOf, ScrollingModule } from '@angular/cdk/scrolling';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from '../../../../shared-components/button/button.component';
import { Product, UpdateImageResponse } from '../../../../models/product.model';
import { ProductsService } from '../../../../services/products.service';
import { User } from '../../../../models/user.model';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ButtonComponent, ScrollingModule, CdkVirtualForOf, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  faMagnifyingGlass = faMagnifyingGlass;

  private productService = inject(ProductsService);
  private userService = inject(UserService);

  updateImageResponse!: UpdateImageResponse;
  users: User[] = [];
  products: Product[] = [];
  selectedImage: { [key: string]: string } = {};
  formProvider: FormGroup;


  constructor(private fb: FormBuilder) {
    this.formProvider = this.fb.group({
      selectProvider: ['default'],
    });
  }

  ngOnInit() {
    this.getProducts(undefined, 'no seleccionada');
    this.getUser();
  }

  getProducts(providerId?: number, uploadStatus?: string) {
    this.productService.getProducts(providerId, uploadStatus).subscribe({
      next: (data) => {
        this.products = data;
      }
    })
  }

  getUser() {
    this.userService.getUsers('vendedor').subscribe({
      next: (data) =>
        this.users = data
    })
  }

  onImageSelect(sku: string, imageUrl: string): void {
    this.selectedImage[sku] = imageUrl;
  }

  saveImage(productId: number, urlImage: string) {
    console.log(productId, urlImage);
    this.productService.saveProductImage(productId.toString(), urlImage).subscribe({
      next: (data) => {
        this.updateImageResponse = data;
        console.log(this.updateImageResponse);
      }
    })
  }
}
