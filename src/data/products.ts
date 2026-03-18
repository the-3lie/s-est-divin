export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Lapin ',
    price: '5000 FCFA',
    description: 'Lapin blanc de race pure, élevé dans des conditions optimales. Idéal pour la reproduction ou comme animal de compagnie.',
    image: './lapin 1.jpg',
    category: 'Lapins'
  },
  {
    id: 2,
    name: 'Lapin ',
    price: '5000 FCFA',
    description: 'Race géante, parfaite pour la viande. Très docile et facile à élever. Excellente qualité.',
    image: './lapin 2.jpg',
    category: 'Lapins'
  },
  {
    id: 3,
    name: 'Lapin',
    price: '5000 FCFA',
    description: 'Adorable lapin nain au pelage long et soyeux. Parfait comme animal de compagnie pour toute la famille.',
    image: './lapin 3.jpg',
    category: 'Lapins'
  },
  {
    id: 4,
    name: 'Lapin',
    price: '5000 FCFA',
    description: 'Tissu wax authentique aux motifs traditionnels africains. Qualité supérieure, couleurs vives et durables.',
    image: './lapin 4.jpg',
    category: 'Lapins'
  },
  {
    id: 5,
    name: 'Poulet',
    price: '3000 FCFA',
    description: 'Magnifique pagne Ankara avec motifs modernes. Tissu de haute qualité, parfait pour toutes occasions.',
    image: './POULET 1.jpg',
    category: 'Pagnes'
  },
  {
    id: 6,
    name: 'Pagne',
    price: '5000 FCFA',
    description: 'Pagne Kente traditionnel tissé à la main. Design unique et élégant, idéal pour les cérémonies.',
    image: './pagne3.jpg',
    category: 'Pagnes'
  },
  {
    id: 7,
    name: 'Pagne',
    price: '5000 FCFA',
    description: 'Panier tressé à la main par des artisans locaux. Robuste, esthétique et écologique.',
    image: './pagne5.jpg',
    category: 'pagne'
  },
  {
    id: 8,
    name: 'Pagne',
    price: '2000 FCFA',
    description: 'Ensemble de bijoux africains authentiques. Parfait pour compléter votre tenue traditionnelle.',
    image: './pagne5.jpg',
    category: 'pagne'
  },
  {
    id: 9,
    name: 'Sac à Main Artisanal',
    price: '10 000 FCFA',
    description: 'Sac à main unique fait à la main avec des matériaux locaux. Style ethnique chic et moderne.',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pagne'
  }
];
