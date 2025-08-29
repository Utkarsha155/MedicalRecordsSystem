import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
        : 'bg-white/90 backdrop-blur-sm shadow-md border-b border-white/30'
    }`}>
      <div className="w-full px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-2xl shadow-lg transition-all duration-500 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-healthcare-primary to-healthcare-secondary' 
                  : 'bg-white/90 backdrop-blur-sm'
              }`}>
                <svg className={`w-8 h-8 transition-colors duration-500 ${
                  isScrolled ? 'text-white' : 'text-blue-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h1 className={`text-2xl font-bold transition-colors duration-500 ${
                  isScrolled ? 'text-gray-900' : 'text-gray-800'
                }`}>
                  HealthCare+
                </h1>
                <p className={`text-xs transition-colors duration-500 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-700'
                }`}>
                  Your Health, Our Priority
                </p>
              </div>
            </div>
          </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={`text-base font-semibold transition-colors duration-300 hover:text-healthcare-primary ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}>
              Home
            </NavLink>
            <NavLink to="/services" className={`text-base font-semibold transition-colors duration-300 hover:text-healthcare-primary ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}>
              Services
            </NavLink>
            <NavLink to="/about" className={`text-base font-semibold transition-colors duration-300 hover:text-healthcare-primary ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}>
              About
            </NavLink>
            <NavLink to="/contact" className={`text-base font-semibold transition-colors duration-300 hover:text-healthcare-primary ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}>
              Contact
            </NavLink>
            <NavLink to="/hospital" className={`text-base font-semibold transition-colors duration-300 hover:text-healthcare-primary ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}>
              Hospital
            </NavLink>
          </div>

          

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

    </nav>
  );
};

export default Navbar;