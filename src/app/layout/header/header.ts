import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderActions } from '../header-actions/header-actions';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SidebarService } from '../services/sidebar-service';
import { SearchBar } from '../../features/search-bar/search-bar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, HeaderActions, RouterLink, MatIconModule, MatIconModule, SearchBar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  sidebarService = inject(SidebarService);
}
