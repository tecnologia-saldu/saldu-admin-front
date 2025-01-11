import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling' 

import { ButtonComponent } from '../../../../shared-components/button/button.component';

@Component({
  selector: 'app-provider-products',
  standalone: true,
  imports: [ButtonComponent, ScrollingModule],
  templateUrl: './provider-products.component.html',
  styleUrl: './provider-products.component.css'
})
export class ProviderProductsComponent {
  
}
