import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatBadge } from '@angular/material/badge';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu'
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-header-actions',
  imports: [MatButtonModule, MatIconModule, RouterLink, MatBadge, MatMenu, MatMenuItem, MatMenuTrigger, MatDivider],
  templateUrl: './header-actions.html',
  styleUrl: './header-actions.scss',
})
export class HeaderActions {
  protected store = inject(EcommerceStore);
}
