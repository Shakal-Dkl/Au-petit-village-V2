import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FilterByNamePipe } from '../../pipes/filter-by-name-pipe';
import { SortByPricePipe } from '../../pipes/sort-by-price-pipe';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FilterByNamePipe,
    SortByPricePipe
  ],
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
