import { Component, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderActions } from '../header-actions/header-actions';
import { RouterLink } from '@angular/router';
import { SearchBar } from '../../features/search-bar/search-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, HeaderActions, RouterLink, SearchBar, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  searchTerm = '';

  



}
