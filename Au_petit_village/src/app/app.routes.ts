import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { product} from './components/product/product';
import { SortByPricePipe } from './pipes/sort-by-price-pipe';
import { FilterByNamePipe } from './pipes/filter-by-name-pipe';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'product/:id', component: product },
  { path: '**', redirectTo: '' }
];

@NgModule({
   declarations: [
    App,
    Header,
    Footer,
    Home,
    About,
    product,
    SortByPricePipe,
    FilterByNamePipe
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule,
    AppRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }