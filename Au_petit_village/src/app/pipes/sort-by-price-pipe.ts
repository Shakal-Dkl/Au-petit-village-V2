import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/products';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
  transform(products: Product[], order: 'asc' | 'desc' = 'asc'): Product[] {
    if (!products) return [];
    
    return products.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }
}
