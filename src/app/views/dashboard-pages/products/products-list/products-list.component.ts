import { Component, inject } from '@angular/core';
import { CdkVirtualForOf, ScrollingModule } from '@angular/cdk/scrolling';

import { ButtonComponent } from '../../../../shared-components/button/button.component';
import { Product, UpdateImageResponse } from '../../../../models/product.model';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ButtonComponent, ScrollingModule, CdkVirtualForOf],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  private productService = inject(ProductsService);
  updateImageResponse!: UpdateImageResponse;
  products: Product[] = [];
  selectedImage: { [key: string]: string } = {};

  ngOnInit() {
    this.getProducts(1, 'no seleccionada');
  }

  getProducts(providerId: number, uploadStatus: string) {
    this.productService.getProducts(providerId, uploadStatus).subscribe({
      next: (data) => {
        this.products = data;
      }
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
