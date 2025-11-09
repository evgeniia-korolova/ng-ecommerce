import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatIconButton, MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule, MatSuffix, MatPrefix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';
import { SignUpParams } from '../../entities/models/user';
import { SignInDialog } from '../sign-in-dialog/sign-in-dialog';

@Component({
  selector: 'app-sign-up-dialog',
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
  templateUrl: './sign-up-dialog.html',
  styleUrl: './sign-up-dialog.scss',
})
export class SignUpDialog {
  protected fb = inject(NonNullableFormBuilder);
  protected store = inject(EcommerceStore);
  dialogRef = inject(MatDialogRef);
  matDialog = inject(MatDialog);
  data = inject<{ checkout: boolean }>(MAT_DIALOG_DATA);

  protected signUpForm = this.fb.group({
    name: ['John D', Validators.required],
    email: ['john@test.com', Validators.required],
    password: ['john@test.com', Validators.required],
    confirmPassword: ['john@test.com', Validators.required],
  });

  protected passwordVisible = signal<boolean>(false);

  signUp() {
    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    const { name, email, password } = this.signUpForm.value;
    this.store.signUp({
      name,
      email,
      password,
      checkout: this.data?.checkout,
      dialogId: this.dialogRef.id,
    } as SignUpParams);
  }

  openSignInDialog() {
    this.dialogRef.close();
    this.matDialog.open(SignInDialog, {
      disableClose: true,
      data: {
        checkout: this.data?.checkout,
        // dialogId: this.dialogRef.id,
      },
    });
  }
}
