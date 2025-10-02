import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/905436037190', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">UpOne</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t('footer_about')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer_product')}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('footer_features')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('footer_pricing')}
                </button>
              </li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('footer_demo')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer_company')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer_about_us')}
                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('footer_contact_us')}
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer_blog')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer_careers')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer_support')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer_help')}
                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('footer_whatsapp')}
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer_docs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer_faq')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer_contact')}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <MessageCircle size={16} className="text-green-500 group-hover:scale-110 transition-transform" />
                  {t('footer_phone')}
                </button>
              </li>
              <li>
                <a
                  href="mailto:info@upone.ai"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} />
                  {t('footer_email')}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-400 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  {t('footer_address')}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              {t('footer_rights')}
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer_privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer_terms')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer_cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
