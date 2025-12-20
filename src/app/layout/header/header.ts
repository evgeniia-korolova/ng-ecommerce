import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderActions } from '../header-actions/header-actions';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SidebarService } from '../services/sidebar-service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, HeaderActions, RouterLink, MatIconModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  sidebarService = inject(SidebarService);
}
