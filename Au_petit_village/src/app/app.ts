import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { SortByPricePipe } from './pipes/sort-by-price-pipe';
import { FilterByNamePipe } from './pipes/filter-by-name-pipe';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { product } from './components/product/product';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'product/:id', component: product },
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
    SortByPricePipe,
    FilterByNamePipe
  ],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class App { }
