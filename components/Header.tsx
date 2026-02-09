import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-royal-800 text-white p-2 font-serif text-2xl font-bold tracking-tight rounded-sm">
              H
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-serif font-bold text-royal-800 tracking-tight leading-none">
                HILLSIDE
              </h1>
              <span className="text-xs text-gray-500 font-semibold tracking-widest uppercase">
                English School
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-gray-700 hover:text-royal-800 transition-colors flex items-center group"
              >
                {item.label}
                {item.children && <ChevronDown size={14} className="ml-1 opacity-50 group-hover:opacity-100" />}
              </a>
            ))}
            
            <button className="text-gray-400 hover:text-royal-800 transition-colors">
              <Search size={20} />
            </button>
            
            <a href="#apply" className="bg-royal-800 text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-royal-900 transition-colors shadow-sm">
              Apply Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
             <button className="mr-4 text-gray-600">
                <Search size={24} />
             </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl py-4 px-4 flex flex-col space-y-4 animate-fade-in-down">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#apply"
            className="bg-royal-800 text-white text-center py-3 rounded-sm font-bold mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;