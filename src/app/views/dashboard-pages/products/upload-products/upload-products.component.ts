import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared-components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-upload-products',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './upload-products.component.html',
  styleUrl: './upload-products.component.css'
})
export class UploadProductsComponent {

  constructor() { }

}
