import { useState, useEffect } from 'react';
import { Link, To, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Shield, ChevronDown, Home, Info, BookOpen, Mail, 
  Layers, Users, Code, ShieldAlert, FileText, ArrowUp 
} from 'lucide-react';
import img from '../logo.png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isSubItemActive = (subItems?: { to: string; label: string; icon?: JSX.Element }[]) => {
    if (!subItems) return false;
    return subItems.some(subItem => isActive(subItem.to));
  };

  const navLinks = [
    {
      label: 'Home',
      to: '/',
      icon: <Home className="h-4 w-4 mr-2" />,
      type: 'link' as const
    },
    {
      label: 'About',
      icon: <Info className="h-4 w-4 mr-2" />,
      type: 'dropdown' as const,
      subItems: [
        {
          label: 'About Us',
          to: '/About',
          icon: <Users className="h-4 w-4 mr-2" />
        },
        {
          label: 'Our Technology',
          to: '/About/technology',
          icon: <Code className="h-4 w-4 mr-2" />
        }
      ]
    },
    {
      label: 'Knowledge Base',
      icon: <BookOpen className="h-4 w-4 mr-2" />,
      type: 'dropdown' as const,
      subItems: [
        {
          label: 'Scam Education',
          to: '/Blog',
          icon: <ShieldAlert className="h-4 w-4 mr-2" />
        },
        {
          label: 'Prevention Guide',
          to: '/scam-education/prevention',
          icon: <FileText className="h-4 w-4 mr-2" />
        }
      ]
    },
    {
      label: 'Services',
      to: '/services',
      icon: <Layers className="h-4 w-4 mr-2" />,
      type: 'link' as const
    },
    {
      label: 'Contact',
      to: '/contact',
      icon: <Mail className="h-4 w-4 mr-2" />,
      type: 'link' as const
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container') && !target.closest('.mobile-dropdown')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
         <Link 
            to="/" 
            className="flex items-center space-x-2 group" 
            onClick={() => {
              closeAllMenus();
              if (location.pathname === '/') {
                scrollToTop();
              }
            }}
          >
            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
              <img src={img} alt="ChainTrace Logo" className="h-8 w-8" />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              ChainTrace
            </span>
          </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <div 
                  key={link.label}
                  className="relative dropdown-container"
                >
                  {link.type === 'dropdown' ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className={`relative px-3 py-2 text-sm font-semibold transition-colors flex items-center ${
                          isSubItemActive(link.subItems)
                            ? 'text-blue-600'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        {link.icon}
                        {link.label}
                        <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>

                      {openDropdown === link.label && link.subItems && (
                        <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.to}
                              to={subItem.to as To}
                              className={`flex items-center px-4 py-3 text-sm ${
                                isActive(subItem.to)
                                  ? 'bg-blue-50 text-blue-600'
                                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                              } border-b border-gray-100 last:border-b-0`}
                              onClick={() => {
                                setOpenDropdown(null);
                                closeAllMenus();
                              }}
                            >
                              {subItem.icon}
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.to as To}
                      className={`relative px-3 py-2 text-sm font-semibold transition-colors flex items-center ${
                        isActive(link.to || '')
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                      onClick={() => {
                        if (location.pathname === link.to) {
                          scrollToTop();
                        }
                        closeAllMenus();
                      }}
                    >
                      {link.icon}
                      {link.label}
                      {isActive(link.to || '') && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => {
                  navigate('/contact');
                  closeAllMenus();
                }}
              >
                Request Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-2">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-gray-100 last:border-b-0">
                  {link.type === 'dropdown' ? (
                    <div className="mobile-dropdown">
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className={`w-full px-4 py-3 text-left flex items-center justify-between ${
                          isSubItemActive(link.subItems)
                            ? 'text-blue-600'
                            : 'text-gray-700'
                        }`}
                      >
                        <div className="flex items-center">
                          {link.icon}
                          <span className="ml-2">{link.label}</span>
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === link.label && (
                        <div className="pl-8 bg-gray-50">
                          {link.subItems?.map((subItem) => (
                            <Link
                              key={subItem.to}
                              to={subItem.to as To}
                              className={`block px-4 py-3 text-sm ${
                                isActive(subItem.to)
                                  ? 'text-blue-600'
                                  : 'text-gray-700'
                              }`}
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center">
                                {subItem.icon}
                                <span className="ml-2">{subItem.label}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.to as To}
                      className={`block px-4 py-3 flex items-center ${
                        isActive(link.to || '')
                          ? 'text-blue-600'
                          : 'text-gray-700'
                      }`}
                      onClick={closeAllMenus}
                    >
                      {link.icon}
                      <span className="ml-2">{link.label}</span>
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 py-3">
                <button 
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    navigate('/contact');
                    closeAllMenus();
                  }}
                >
                  Request Demo
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default Header;