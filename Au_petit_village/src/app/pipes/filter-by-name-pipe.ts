import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/products';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    if (!products || !searchTerm) {
      return products;
    }
    
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}