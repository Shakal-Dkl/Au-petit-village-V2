import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from '../../pipes/filter-by-name-pipe';
import { SortByPricePipe } from '../../pipes/sort-by-price-pipe';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FilterByNamePipe,
    SortByPricePipe,
    FormsModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  products: Product[] = [];
  searchText: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private productsService: ProductsService) { } 
  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }
  onSearchChange(event: any): void {
    this.searchText = event.target.value;
  }

  sortByPriceAsc(): void {
    this.sortOrder = 'asc';
    this.products = [...this.products].sort((a, b) => a.price - b.price);
  }

  sortByPriceDesc(): void {
    this.sortOrder = 'desc';
    this.products = [...this.products].sort((a, b) => b.price - a.price);
  }
}
