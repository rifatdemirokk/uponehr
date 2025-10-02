import { MessageCircle, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FinalCTA() {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/905436037190', '_blank');
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {t('cta_title')}
        </h2>

        <p className="text-xl text-white/90 mb-12">
          {t('cta_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <MessageCircle size={24} />
            <div className="text-left">
              <div className="text-sm opacity-90">{t('cta_whatsapp')}</div>
              <div className="text-xs opacity-75">{t('footer_phone')}</div>
            </div>
          </button>

          <button
            onClick={scrollToPricing}
            className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <TrendingUp size={20} />
            {t('cta_secondary')}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>{t('trust_1')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>{t('trust_2')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>{t('trust_4')}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
}
