import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Login from './Login'
import Signup from './Signup'

const Navbar = () => {
   const [role, setRole] = useState("user");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/40 transition-all duration-500">
      <div className="w-full px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-lg font-extrabold tracking-tight bg-gradient-to-r from-healthcare-primary to-healthcare-secondary bg-clip-text text-transparent">HealthCare+</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <HashLink smooth to="/#home" className="text-base font-semibold text-gray-700 hover:text-healthcare-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-healthcare-primary after:to-healthcare-secondary after:transition-all after:duration-300">
              Home
            </HashLink>
            <HashLink smooth to="/#services" className="text-base font-semibold text-gray-700 hover:text-healthcare-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-healthcare-primary after:to-healthcare-secondary after:transition-all after:duration-300">
              Services
            </HashLink>
            <HashLink smooth to="/#about" className="text-base font-semibold text-gray-700 hover:text-healthcare-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-healthcare-primary after:to-healthcare-secondary after:transition-all after:duration-300">
              About
            </HashLink>
            <HashLink smooth to="/#contact" className="text-base font-semibold text-gray-700 hover:text-healthcare-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-healthcare-primary after:to-healthcare-secondary after:transition-all after:duration-300">
              Contact
            </HashLink>
                <Link to="/login" className="text-base font-semibold text-gray-700">
                  <button className="px-4 py-2 rounded-full border border-healthcare-primary/30 hover:border-healthcare-primary bg-white hover:bg-healthcare-bg shadow-sm hover:shadow-md transition-all">Login</button>
                </Link>
                <Link to="/signup" className="text-base font-semibold text-gray-700">
                  <button className="px-5 py-2 rounded-full bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-white shadow-glow hover:brightness-110 transition-all">Get Started</button>
                </Link>            
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 active:scale-95 transition-all"
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
            <div className="px-3 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 mb-4 animate-fadeInDown">
              <HashLink
                smooth to="/#home" onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-gray-700 hover:text-healthcare-primary hover:bg-healthcare-bg rounded-lg transition-all duration-200"
              >
                Home
              </HashLink>
              <HashLink
                smooth to="/#services" onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-gray-700 hover:text-healthcare-primary hover:bg-healthcare-bg rounded-lg transition-all duration-200"
              >
                Services
              </HashLink>
              <HashLink
                smooth to="/#about" onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-gray-700 hover:text-healthcare-primary hover:bg-healthcare-bg rounded-lg transition-all duration-200"
              >
                About
              </HashLink>
              <HashLink
                smooth to="/#contact" onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-gray-700 hover:text-healthcare-primary hover:bg-healthcare-bg rounded-lg transition-all duration-200"
              >
                Contact
              </HashLink>

              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-healthcare-primary hover:bg-healthcare-bg rounded-lg transition-all duration-200"><button className="w-full py-2 rounded-xl border border-healthcare-primary/30">Login</button></Link>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-healthcare-primary hover:bg-healthcare-bg rounded-lg transition-all duration-200"><button className="w-full py-2 rounded-xl bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-white">Get Started</button></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
