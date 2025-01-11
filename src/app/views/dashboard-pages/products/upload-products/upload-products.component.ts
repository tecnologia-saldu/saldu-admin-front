import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UserService } from '../../../../services/user.service';
import { ButtonComponent } from '../../../../shared-components/button/button.component';
import { User } from '../../../../models/user.model';
import { ProductsService } from '../../../../services/products.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UploadResponse } from '../../../../models/product.model';


@Component({
  selector: 'app-upload-products',
  standalone: true,
  imports: [ButtonComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './upload-products.component.html',
  styleUrl: './upload-products.component.css'
})
export class UploadProductsComponent {

  users: User[] = [];
  formProvider: FormGroup;
  selectedFile: File | null = null;
  response!: UploadResponse;

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

  fileUpload(providerId: number) {
    this.productService.fileUpload(providerId, this.selectedFile).subscribe({
      next: (data) => {
        this.response = data;
        console.log(data);

      }
    })
  }

  getUser() {
    this.userService.getUsers('vendedor').subscribe({
      next: (data) =>
        this.users = data
    })
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    // Guardamos el archivo
  }

}
