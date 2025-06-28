import React, { useState } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import Logo from './common/Logo';
import NavigationLink from './navigation/NavigationLink';
import MobileMenu from './navigation/MobileMenu';
import UserMenu from './auth/UserMenu';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { isActiveRoute } from '../utils/navigation';

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleSwitchToRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo />
            
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <NavigationLink
                  key={item.name}
                  to={item.path}
                  isActive={isActiveRoute(location.pathname, item.path)}
                >
                  {item.name}
                </NavigationLink>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <div className="hidden md:flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    onClick={() => setShowLoginModal(true)}
                    className="flex items-center space-x-2"
                  >
                    <LogIn size={16} />
                    <span>Sign In</span>
                  </Button>
                  <Button
                    onClick={() => setShowRegisterModal(true)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center space-x-2"
                  >
                    <UserPlus size={16} />
                    <span>Sign Up</span>
                  </Button>
                </div>
              )}

              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          <MobileMenu
            isOpen={isMobileMenuOpen}
            currentPath={location.pathname}
            onClose={closeMobileMenu}
          />
        </div>
      </header>

      {/* Auth Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={handleSwitchToRegister}
      />
      
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
};

export default Header;