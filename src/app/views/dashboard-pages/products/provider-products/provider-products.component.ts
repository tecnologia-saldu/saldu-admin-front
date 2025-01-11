import { Component, inject } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling' 

import { ButtonComponent } from '../../../../shared-components/button/button.component';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-provider-products',
  standalone: true,
  imports: [ButtonComponent, ScrollingModule, ReactiveFormsModule],
  templateUrl: './provider-products.component.html',
  styleUrl: './provider-products.component.css'
})
export class ProviderProductsComponent {

  users: User[] = [];
  formProvider: FormGroup;
  
  private userService = inject(UserService);

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
}
