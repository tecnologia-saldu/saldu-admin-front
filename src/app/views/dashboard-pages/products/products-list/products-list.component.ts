import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared-components/button/button.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

}
