import { MatIcon } from '@angular/material/icon';
import { Component, inject, signal } from '@angular/core';
import { MatIconButton, MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatDialogClose } from '@angular/material/dialog';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';
import { SignInParams } from '../../entities/models/user';

@Component({
  selector: 'app-sign-in-dialog',
  imports: [
    MatIconButton,
    MatIcon,
    MatDialogClose,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSuffix,
    MatPrefix,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './sign-in-dialog.html',
  styleUrl: './sign-in-dialog.scss',
})
export class SignInDialog {
  protected fb = inject(NonNullableFormBuilder);
  protected store = inject(EcommerceStore)

  protected signInForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  protected passwordVisible = signal<boolean>(false);

  signIn() {
    if(!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    const {email, password} = this.signInForm.value
    this.store.signIn({email, password} as SignInParams) 
  }
}
