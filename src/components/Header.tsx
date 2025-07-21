import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Scale, ChevronDown } from 'lucide-react';
import FamilyLaw from './services/FamilyLaw';
import CorporateLaw from './services/CorporateLaw';
import CriminalDefense from './services/CriminalDefense';
import CivilLitigation from './services/CivilLitigation';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Practice Areas', href: '/Praticearea' },
    {
      name: 'Services',
      href: '/services',
      subItems: [
       { name: 'Corporate Law', href: '/services/corporate-law', component: CorporateLaw },
       { name: 'Criminal Defense', href: '/services/criminal-defense', component: CriminalDefense },
       { name: 'Family Law', href: '/services/family-law', component: FamilyLaw },
       { name: 'Civil Litigation', href: '/services/civil-litigation', component: CivilLitigation },
      ],
    },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact us', href: '/contact-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown((prev) => (prev === itemName ? null : itemName));
  };

  const handleItemClick = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-blue-700" />
            <a href="/" className="flex items-center">
              <span className="ml-2 text-2xl font-bold text-gray-900">Adv. Ruby Kumari</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <div
                    className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700"
                    onClick={() => handleDropdownToggle(item.name)}
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition duration-300 ${
                      isActive(item.href) ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.subItems && openDropdown === item.name && (
                  <div
                    ref={dropdownRef}
                    className="absolute z-10 mt-2 bg-white shadow-lg rounded-md border border-gray-200 py-2 w-48"
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={handleItemClick}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu toggle button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <div>
                    <div
                      className="flex items-center justify-between py-2 font-medium text-gray-700 cursor-pointer"
                      onClick={() => handleDropdownToggle(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    {openDropdown === item.name && (
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block py-2 text-gray-600 hover:text-blue-700"
                            onClick={() => {
                              handleItemClick();
                              setIsMenuOpen(false); // Close mobile menu after selection
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block py-2 font-medium ${
                      isActive(item.href) ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
