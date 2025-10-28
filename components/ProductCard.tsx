
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
        <p className="mt-1 text-gray-600">${product.price.toFixed(2)}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <button className="bg-white text-gray-900 font-bold py-2 px-6 rounded-full uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
