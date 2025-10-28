
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-[60vh] md:h-[80vh] flex items-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1600/900')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 leading-tight">Effortless Style, Redefined</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Discover our new collection, crafted for the modern individual.</p>
        <a href="#" className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
