import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products';



@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private productsService: ProductsService) { } 
  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }
  onSearchChange(event: any): void {
    this.searchTerm = event.target.value;
  }

  sortByPriceAsc(): void {
    this.sortOrder = 'asc';
  }

  sortByPriceDesc(): void {
    this.sortOrder = 'desc';
  }

}
