import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderActions } from '../header-actions/header-actions';
import { RouterLink } from '@angular/router';
import { SearchBar } from '../../features/search-bar/search-bar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, HeaderActions, RouterLink, SearchBar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  searchTerm = '';

}
