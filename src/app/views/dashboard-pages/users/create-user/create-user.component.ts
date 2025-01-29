import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared-components/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  showPassword = false;
  faEyeSlash = faEyeSlash;
  faEye = faEye;

  newUserForm = new FormGroup({
    randomPassword: new FormControl('')
  });

  generatePassword() {
    const newPassword = this.generateRandomPassword();
    this.newUserForm.controls.randomPassword.setValue(newPassword);    
  }

  private generateRandomPassword() {
    let password = '';
    password = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$").map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return password;
  }
}
