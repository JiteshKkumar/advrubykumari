import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Scale, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track which dropdown is open
  const location = useLocation();
  
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Reference to the dropdown to detect clicks outside

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Practice Areas', href: '/Praticearea' },
    { 
      name: 'Services', 
      href: '/services',
      subItems: [
        { name: 'Corporate Law', href: '/services/CorporateLaw' },
        { name: 'Criminal Defense', href: '/services/CriminalDefense' },
        { name: 'Family Law', href: '/services/FamilyLaw' },
        { name: 'Civil Litigation', href: '/services/CivilLitigation' }
      ]
    },
     { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/Aboutus' },
    
    { name: 'Contact us', href: '/Contactus' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null); // Close dropdown if clicked outside
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle dropdown toggle
  const handleDropdownToggle = (itemName: string) => {
    if (openDropdown === itemName) {
      setOpenDropdown(null); // Close if already open
    } else {
      setOpenDropdown(itemName); // Open the clicked dropdown
    }
  };

  // Handle item selection (closes dropdown)
  const handleItemClick = () => {
    setOpenDropdown(null); // Close dropdown when an item is selected
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
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <div
                    className="flex items-center cursor-pointer text-gray-700 hover:text-blue-700"
                    onClick={() => handleDropdownToggle(item.name)} // Toggle specific dropdown
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition duration-300 ${isActive(item.href) ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'}`}
                  >
                    {item.name}
                  </Link>
                )}

                {item.subItems && openDropdown === item.name && (
                  <div ref={dropdownRef} className="absolute z-10 mt-2 bg-white shadow-lg rounded-md border border-gray-200 py-2 w-48">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={handleItemClick} // Close dropdown after item selection
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
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
                  <div
                    className="block py-2 font-medium text-gray-700 cursor-pointer"
                    onClick={() => handleDropdownToggle(item.name)} // Toggle specific dropdown
                  >
                    {item.name}
                    <ChevronDown className="inline-block ml-2 h-4 w-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block py-2 font-medium ${isActive(item.href) ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'}`}
                  >
                    {item.name}
                  </Link>
                )}

                {item.subItems && openDropdown === item.name && (
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block py-2 text-gray-600 hover:text-blue-700"
                        onClick={handleItemClick} // Close dropdown after item selection
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
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
