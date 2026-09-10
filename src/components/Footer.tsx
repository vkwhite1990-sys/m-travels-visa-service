'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Visa Check', href: '/visa-check' },
        { label: 'Services', href: '/services' },
        { label: 'Countries', href: '/countries' },
      ],
    },
    {
      title: 'Information',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms-conditions' },
        { label: 'Cookie Policy', href: '/cookie-policy' },
        { label: 'Disclaimer', href: '/disclaimer' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="w-8 h-8 text-primary-400" />
              <h3 className="text-2xl font-bold text-white">M TRAVELS</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner in visa services and international travel guidance. We make visa applications simple and stress-free.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/mtravelsvisa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/mtravelsvisa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/mtravelsvisa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/mtravelsvisa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Email Support</p>
                <a href="mailto:support@m-travels.com" className="text-gray-400 hover:text-primary-400 text-sm">
                  support@m-travels.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Phone Support</p>
                <a href="tel:+18008474235" className="text-gray-400 hover:text-primary-400 text-sm">
                  +1-800-VISA-HELP
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Office Address</p>
                <p className="text-gray-400 text-sm">123 Travel Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} M TRAVELS Visa Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
