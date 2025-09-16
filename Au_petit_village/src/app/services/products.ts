import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quote: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Astérix',
      price: 29.99,
      image: 'asterix.png',
      description: 'Figurine d\'Astérix, le plus célèbre des Gaulois ! Petit mais courageux, il tire sa force surhumaine de la potion magique de Panoramix.',
      quote: 'Ils sont fous ces Romains !'
    },
    {
      id: 2,
      name: 'Jules César',
      price: 34.99,
      image: 'cesar.png',
      description: 'Figurine de Jules César avec sa phrase culte. L\'empereur romain qui rêve de conquérir la Gaule tout entière.',
      quote: 'Veni, vidi, vici !'
    },
    {
      id: 3,
      name: 'Astérix épée',
      price: 32.99,
      image: 'asterix-epee.png',
      description: 'Astérix prêt au combat avec son épée. Une figurine d\'action pour revivre les plus belles aventures.',
      quote: 'En avant pour l\'aventure !'
    },
    {
      id: 4,
      name: 'Abraracourcix',
      price: 36.99,
      image: 'chef.png',
      description: 'Le chef du village gaulois sur son bouclier. Abraracourcix dirige le village avec autorité et bravoure.',
      quote: 'Le chef ici, c\'est moi !'
    },
    {
      id: 5,
      name: 'Assurancetourix',
      price: 31.99,
      image: 'barde.png',
      description: 'Le barde du village avec sa lyre. Assurancetourix est convaincu d\'être un grand musicien, mais ses chants font fuir tout le monde.',
      quote: 'Écoutez ma dernière composition !'
    },
    {
      id: 6,
      name: 'Astérix énervé',
      price: 30.99,
      image: 'asterix-enerve.png',
      description: 'Astérix dans un moment de colère. Même les héros ont leurs moments d\'énervement !',
      quote: 'Ça m\'énerve !'
    },
    {
      id: 7,
      name: 'Cléopâtre',
      price: 38.99,
      image: 'cleopatre.png',
      description: 'La reine d\'Égypte dans toute sa splendeur. Cléopâtre, belle et capricieuse, règne sur l\'Égypte.',
      quote: 'Qu\'on serve l\'apéritif aux crocodiles sacrés !'
    },
    {
      id: 8,
      name: 'Idéfix amoureux',
      price: 24.99,
      image: 'idefix-coeur.png',
      description: 'Le fidèle compagnon d\'Obélix tombé amoureux. Idéfix exprime ses sentiments avec ce cœur.',
      quote: 'Wouaf wouaf ! ♥'
    },
    {
      id: 9,
      name: 'Obélix',
      price: 35.99,
      image: 'obelix.png',
      description: 'Obélix, le meilleur ami d\'Astérix, portant un tonneau. Fort comme un taureau grâce à sa chute dans la potion magique étant bébé.',
      quote: 'Je ne suis pas gros !'
    },
    {
      id: 10,
      name: 'Obélix boudeur',
      price: 33.99,
      image: 'obelix-boude.png',
      description: 'Obélix dans un moment de bouderie. Même les plus forts ont parfois le moral dans les chaussettes.',
      quote: 'Où je boude, et alors ?'
    },
    {
      id: 11,
      name: 'Panoramix',
      price: 39.99,
      image: 'panoramix.png',
      description: 'Le druide du village avec sa faucille d\'or. Panoramix prépare la fameuse potion magique qui donne une force surhumaine.',
      quote: 'C\'est prêt !'
    },
    {
      id: 12,
      name: 'Légionnaire romain',
      price: 28.99,
      image: 'romain.png',
      description: 'Un légionnaire romain prêt au combat. Représente l\'ennemi traditionnel des Gaulois dans leurs aventures.',
      quote: 'Engagez-vous, rengagez-vous qu\'y disaient !'
    }
  ];

  constructor() { }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}