'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Globe, LogOut, Settings, BarChart3, Home } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/visa-check', label: 'Visa Check', icon: Globe },
    { href: '/services', label: 'Services' },
    { href: '/countries', label: 'Countries' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-r from-primary-600 to-primary-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl md:text-3xl font-bold text-white flex items-center space-x-1">
              <Globe className="w-8 h-8" />
              <span>M TRAVELS</span>
            </div>
            <span className="text-xs md:text-sm font-semibold text-primary-100 hidden sm:block">
              Visa Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(item.href)
                    ? isScrolled
                      ? 'bg-primary-100 text-primary-800'
                      : 'bg-white text-primary-800'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                {user.role === 'admin' && (
                  <Link
                    href="/admin/dashboard"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      isScrolled
                        ? 'text-primary-600 hover:bg-primary-50'
                        : 'text-white hover:bg-white hover:bg-opacity-20'
                    }`}
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span>Admin</span>
                  </Link>
                )}
                <Link
                  href="/dashboard"
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isScrolled
                      ? 'text-primary-600 hover:bg-primary-50'
                      : 'text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isScrolled
                      ? 'text-red-600 hover:bg-red-50'
                      : 'text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isScrolled
                      ? 'text-primary-600 hover:text-primary-800'
                      : 'text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 bg-white text-primary-800 rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white hover:bg-opacity-20'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(item.href)
                    ? 'bg-white text-primary-800'
                    : isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-white border-opacity-20">
              {isAuthenticated && user ? (
                <>
                  {user.role === 'admin' && (
                    <Link
                      href="/admin/dashboard"
                      className="block px-4 py-2 rounded-lg font-medium text-white hover:bg-white hover:bg-opacity-20 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 rounded-lg font-medium text-white hover:bg-white hover:bg-opacity-20 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    My Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 rounded-lg font-medium text-red-300 hover:bg-red-500 hover:bg-opacity-20 transition-all"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-4 py-2 rounded-lg font-medium text-white hover:bg-white hover:bg-opacity-20 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="block px-4 py-2 bg-white text-primary-800 rounded-lg font-bold text-center hover:shadow-lg transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
