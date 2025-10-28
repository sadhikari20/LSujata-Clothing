
import React, { useState } from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { UserIcon } from './icons/UserIcon';
import { CartIcon } from './icons/CartIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Men", "Women", "Kids", "Summer", "Winter"];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-serif font-bold text-gray-900">LaSujata</a>
          </div>

          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium tracking-wider uppercase">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-900">
              <SearchIcon />
            </button>
            <button className="text-gray-500 hover:text-gray-900">
              <UserIcon />
            </button>
            <button className="text-gray-500 hover:text-gray-900">
              <CartIcon />
            </button>
            <button className="md:hidden text-gray-500 hover:text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
            <div className="md:hidden py-4">
                <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a key={link} href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium tracking-wider uppercase text-center">
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        )}
      </div>
    </header>
  );
};

export default Header;
