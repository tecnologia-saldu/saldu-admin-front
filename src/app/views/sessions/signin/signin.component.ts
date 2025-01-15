import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  form!: FormGroup;
  showPassword = false;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  status: 'init' | 'loading' | 'success' | 'failed' = 'init';

  private toastr = inject(ToastrService);
  private authService = inject(AuthService);
  private router = inject(Router);

  
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      this.authService.login(email, password)
        .subscribe({
          next: () => {
            this.status = 'success';
            this.router.navigate(['/dashboard']);
          },
          error: () => {
            this.status = 'failed';
            this.toastr.error('El email o la contraseña son incorrectos');
          }
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
