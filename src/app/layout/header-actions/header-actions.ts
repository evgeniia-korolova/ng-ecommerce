import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatBadge } from '@angular/material/badge';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu'
import { MatDivider } from "@angular/material/divider";
import { MatDialog } from '@angular/material/dialog';
import { SignInDialog } from '../../features/sign-in-dialog/sign-in-dialog';
import { SignUpDialog } from '../../features/sign-up-dialog/sign-up-dialog';

@Component({
  selector: 'app-header-actions',
  imports: [MatButtonModule, MatIconModule, RouterLink, MatBadge, MatMenu, MatMenuItem, MatMenuTrigger, MatDivider],
  templateUrl: './header-actions.html',
  styleUrl: './header-actions.scss',
})
export class HeaderActions {
  protected store = inject(EcommerceStore);
  protected matDialog = inject(MatDialog);

  openSignInDialog() {
    this.matDialog.open(SignInDialog, {
      disableClose: true,      
    })
  }

  openSignUpDialog() {
    this.matDialog.open(SignUpDialog, {
      disableClose: true,      
    })
  }
}
