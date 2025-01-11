import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared-components/button/button.component';

@Component({
  selector: 'app-provider-products',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './provider-products.component.html',
  styleUrl: './provider-products.component.css'
})
export class ProviderProductsComponent {

}
