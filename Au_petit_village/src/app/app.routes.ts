
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { product} from './components/product/product';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'product/:id', component: product },
  { path: '**', redirectTo: '' }
];


export class AppRoutingModule { }