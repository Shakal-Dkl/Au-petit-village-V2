import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, Product } from '../../services/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class product implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsService.getProductById(id);
  }
}
