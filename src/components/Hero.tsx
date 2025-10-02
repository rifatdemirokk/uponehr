import { MessageCircle, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/905436037190', '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero_subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={handleWhatsApp}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                {t('hero_cta_primary')}
              </button>
              <button
                onClick={handleWhatsApp}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {t('hero_cta_secondary')}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              {[
                { icon: '✓', text: t('trust_1') },
                { icon: '✓', text: t('trust_2') },
                { icon: '✓', text: t('trust_3') },
                { icon: '✓', text: t('trust_4') },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/90 text-sm"
                >
                  <span className="text-green-400 font-bold text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <div className="text-gray-600 font-medium">Dashboard Preview</div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                <div className="h-3 bg-white/20 rounded-full w-1/2"></div>
                <div className="h-3 bg-white/20 rounded-full w-5/6"></div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
