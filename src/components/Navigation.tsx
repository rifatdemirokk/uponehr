import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`text-2xl font-bold transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
              }`}
            >
              <img src="/logo.png" alt="Logo" className="w-20 h-auto mb-4"/>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`transition-colors hover:text-blue-600 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav_home')}
            </Link>
            <button
              onClick={() => scrollToSection('features')}
              className={`transition-colors hover:text-blue-600 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav_features')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`transition-colors hover:text-blue-600 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav_pricing')}
            </button>
            <Link
              to="/success-stories"
              className={`transition-colors hover:text-blue-600 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav_success_stories')}
            </Link>
            <Link
              to="/about"
              className={`transition-colors hover:text-blue-600 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav_about')}
            </Link>
            <Link
              to="/why-us"
              className={`transition-colors hover:text-blue-600 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav_why_us')}
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors hover:text-blue-600 ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav_contact')}
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('tr')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'tr'
                    ? 'bg-blue-600 text-white'
                    : isScrolled || !isHomePage
                    ? 'text-gray-600 hover:bg-gray-100'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                🇹🇷 TR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : isScrolled || !isHomePage
                    ? 'text-gray-600 hover:bg-gray-100'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            <button
              onClick={() => scrollToSection('pricing')}
              className="px-6 py-2.5 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {t('nav_cta')}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {t('nav_home')}
            </Link>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {t('nav_features')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {t('nav_pricing')}
            </button>
            <Link
              to="/success-stories"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {t('nav_success_stories')}
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {t('nav_about')}
            </Link>
            <Link
              to="/why-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {t('nav_why_us')}
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {t('nav_contact')}
            </button>

            <div className="flex items-center space-x-2 px-4 py-2">
              <button
                onClick={() => setLanguage('tr')}
                className={`flex-1 px-3 py-2 rounded-lg transition-colors ${
                  language === 'tr'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                🇹🇷 TR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 px-3 py-2 rounded-lg transition-colors ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            <button
              onClick={() => scrollToSection('pricing')}
              className="w-full px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300"
            >
              {t('nav_cta')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
