import { Component, inject } from '@angular/core';
import {CdkVirtualForOf, ScrollingModule} from '@angular/cdk/scrolling';

import { ButtonComponent } from '../../../../shared-components/button/button.component';
import { Product } from '../../../../models/product.model';
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

  products: Product[] = [];

  ngOnInit() {
    this.getProducts( 1, 'no seleccionada');    
  }

  getProducts(providerId: number, uploadStatus: string) {
    this.productService.getProducts(providerId, uploadStatus).subscribe({
      next: (data) => {
        this.products = data;        
      }
    })
  }

  


//   products: Product[] = [{
//     SKU:'1234512',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312342312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312234312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'123112122312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312654312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312332312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'135622312312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'1231236523312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'127634312312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312334612',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312377812',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'1231235712',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312323412',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12316452312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312234312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312373412',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312452312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12765312312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'123185672312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'123157452312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'123745612312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12313452312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312865312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12312385612',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'12314562312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'1231233412',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'1231342312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
//   {
//     SKU:'1233312312',
//     description: 'Una descripcion',
//     imgUrl1: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl2: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl3: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//     imgUrl4: 'https://casaandina.com.co/media/catalog/product/cache/41a7221ab6abf5cdb1e2413a96985b18/1/9/190_1.jpg',
//   },
// ]
}
