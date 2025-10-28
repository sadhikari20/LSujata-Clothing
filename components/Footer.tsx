
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">LaSujata</h3>
            <p className="text-gray-400">Timeless fashion for every occasion.</p>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Men</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Women</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Kids</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">Stay Connected</h4>
            <p className="text-gray-400 mb-4">Get updates on new arrivals and special offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your Email" className="bg-gray-800 border border-gray-700 rounded-l-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500" />
              <button type="submit" className="bg-gray-700 text-white px-4 rounded-r-md hover:bg-gray-600">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} LaSujata Clothing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
