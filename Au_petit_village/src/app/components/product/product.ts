import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quote?: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class product implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id']);
      if (!isNaN(id)) {
        this.product = this.productsService.getProductById(id);
      }
    });
  }

  addToCart(): void {
    if (this.product) {
      console.log(`Produit ajouté au panier : ${this.product.name}`);
      // Ajoutez ici la logique pour ajouter au panier
    }
  }
}
