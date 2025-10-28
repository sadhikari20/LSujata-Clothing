
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import StyleAdvisor from './components/StyleAdvisor';
import { Product } from './types';

const App: React.FC = () => {
  const featuredProducts: Product[] = [
    { id: 1, name: 'Classic Linen Shirt', price: 79.99, imageUrl: 'https://picsum.photos/seed/p1/400/500', category: "Men's" },
    { id: 2, name: 'Floral Sundress', price: 129.99, imageUrl: 'https://picsum.photos/seed/p2/400/500', category: "Women's" },
    { id: 3, name: 'Graphic Tee', price: 39.99, imageUrl: 'https://picsum.photos/seed/p3/400/500', category: "Kid's" },
    { id: 4, name: 'Denim Jacket', price: 149.99, imageUrl: 'https://picsum.photos/seed/p4/400/500', category: "Women's" },
  ];

  const summerCollection: Product[] = [
    { id: 5, name: 'Board Shorts', price: 59.99, imageUrl: 'https://picsum.photos/seed/p5/400/500', category: "Men's" },
    { id: 6, name: 'Lightweight Scarf', price: 45.00, imageUrl: 'https://picsum.photos/seed/p6/400/500', category: "Women's" },
    { id: 7, name: 'Sun Hat', price: 35.00, imageUrl: 'https://picsum.photos/seed/p7/400/500', category: "Kid's" },
    { id: 8, name: 'Espadrilles', price: 89.99, imageUrl: 'https://picsum.photos/seed/p8/400/500', category: "Women's" },
  ];

  return (
    <div className="bg-stone-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <ProductGrid title="Featured Products" products={featuredProducts} />
        <ProductGrid title="Summer Essentials" products={summerCollection} />
      </main>
      <Footer />
      <StyleAdvisor />
    </div>
  );
};

export default App;
