import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login {

  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router);

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  submit(): void {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  this.loginService.login(this.loginForm.getRawValue()).subscribe({
    next: (res) => {
      //this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      console.error('Error de autenticación', err);
    }
  });
}
}
