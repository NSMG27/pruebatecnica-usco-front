import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../core/services/register/register.service';
import { UserRole, USER_ROLE_LABELS } from '../../core/models/user-role';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private fb = inject(FormBuilder);
  private registerService = inject(RegisterService);
  private router = inject(Router);

  readonly roles = Object.keys(USER_ROLE_LABELS) as UserRole[];
  readonly roleLabels = USER_ROLE_LABELS;

  registerForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rol: ['STUDENT' as UserRole, Validators.required]
  });

  submit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.registerService
      .register(this.registerForm.getRawValue())
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: (err) => console.error('Error en registro', err)
      });
  }
}
