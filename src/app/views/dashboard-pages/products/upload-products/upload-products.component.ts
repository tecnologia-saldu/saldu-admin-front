import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { faCheck, faX, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from '../../../../services/user.service';
import { ButtonComponent } from '../../../../shared-components/button/button.component';
import { User } from '../../../../models/user.model';
import { ProductsService } from '../../../../services/products.service';
import { UploadResponse } from '../../../../models/product.model';
import { ScrollingModule, CdkVirtualForOf } from '@angular/cdk/scrolling';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-upload-products',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, FontAwesomeModule, ScrollingModule, CdkVirtualForOf],
  templateUrl: './upload-products.component.html',
  styleUrl: './upload-products.component.css'
})
export class UploadProductsComponent {

  faCheck = faCheck;
  faCircleInfo = faCircleInfo;
  faX = faX;

  users: User[] = [];
  formProvider: FormGroup;
  selectedFile: File | null = null;
  response!: UploadResponse;

  private userService = inject(UserService);
  private productService = inject(ProductsService);
  private toastr = inject(ToastrService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.formProvider = this.fb.group({
      selectProvider: ['default'],
    });

  }

  ngOnInit() {
    this.getUser();
  }

  fileUpload(providerId: number) {
    this.productService.fileUpload(providerId, this.selectedFile).subscribe({
      next: (data) => {
        this.response = data;
      },
      error: (error) => {
        if (error.error.trigger == 'file') {
          this.toastr.error('Seleccione un archivo');
        } else if (error.error.trigger == 'providerId') {
          this.toastr.error('Seleccione un proveedor');
        } else {
          this.toastr.error('Error del servidor')
        }
      }
    })
  }

  // downloadRejected(rejectedProducts: any) {
  //   this.productService.downloadRejected(rejectedProducts).subscribe({
  //     next: (response: Blob) => {
  //       const url = window.URL.createObjectURL(response);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = `massiveUploadRejectedProducts.csv`;
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //       window.URL.revokeObjectURL(url);
  //       this.toastr.success('Archivo descargado con éxito');
  //     }
  //   })
  // }

  getUser() {
    this.userService.getUsers('vendedor').subscribe({
      next: (data) =>
        this.users = data
    })
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  refresh() {
    window.location.reload()
  }
}
