import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PawPrint as Paw } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Paw className="h-8 w-8" />
            <span className="font-bold text-xl">Melhor Amigo</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-green-200 transition-colors">Produtos</Link>
            <Link to="/gallery" className="hover:text-green-200 transition-colors">Galeria</Link>
            <Link to="/contact" className="hover:text-green-200 transition-colors">Contato</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-green-200 transition-colors py-2">Home</Link>
              <Link to="/products" className="hover:text-green-200 transition-colors py-2">Produtos</Link>
              <Link to="/gallery" className="hover:text-green-200 transition-colors py-2">Galeria</Link>
              <Link to="/contact" className="hover:text-green-200 transition-colors py-2">Contato</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;