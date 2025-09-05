import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md border-b border-white/30 transition-all duration-500">
      <div className="w-full px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl shadow-lg bg-white/90 backdrop-blur-sm">
                <svg
                  className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">HealthCare+</h1>
                <p className="text-xs text-gray-700">Your Health, Our Priority</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <HashLink smooth to="/#home" className="text-base font-semibold text-gray-700 transition-colors duration-300 hover:text-healthcare-primary">
              Home
            </HashLink>
            <HashLink smooth to="/#services"className="text-base font-semibold text-gray-700 transition-colors duration-300 hover:text-healthcare-primary">
              Services
            </HashLink>
            <HashLink smooth to="/#about" className="text-base font-semibold text-gray-700 transition-colors duration-300 hover:text-healthcare-primary">
              About
            </HashLink>
            <HashLink smooth to="/#contact" className="text-base font-semibold text-gray-700 transition-colors duration-300 hover:text-healthcare-primary">
              Contact
            </HashLink>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Get Started</button></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-3 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 mb-4">
              <HashLink
                smooth to="/#home"
                className="block py-2 text-base font-medium text-gray-700 hover:text-healthcare-primary hover:bg-healthcare-bg rounded-lg transition-colors duration-200"
              >
                Home
              </HashLink>
              <HashLink
                smooth to="/#services"
                className="block py-2 text-base font-medium text-gray-700 hover:text-healthcare-primary hover:bg-healthcare-bg rounded-lg transition-colors duration-200"
              >
                Services
              </HashLink>
              <HashLink
                smooth to="/#about"
                className="block py-2 text-base font-medium text-gray-700 hover:text-healthcare-primary hover:bg-healthcare-bg rounded-lg transition-colors duration-200"
              >
                About
              </HashLink>
              <HashLink
                smooth to="/#contact"
                className="block py-2 text-base font-medium text-gray-700 hover:text-healthcare-primary hover:bg-healthcare-bg rounded-lg transition-colors duration-200"
              >
                Contact
              </HashLink>
              
              <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Get Started</button></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
