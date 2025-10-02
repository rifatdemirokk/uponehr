import { useLanguage } from '../contexts/LanguageContext';

export default function References() {
  const { t } = useLanguage();

  const references = [
    { name: 'Bosch', logo: '🏭' },
    { name: 'Mercedes-Benz', logo: '🚗' },
    { name: 'Siemens', logo: '⚡' },
    { name: 'Turkcell', logo: '📱' },
    { name: 'Garanti BBVA', logo: '🏦' },
    { name: 'Eczacıbaşı', logo: '🏢' },
    { name: 'Koç Holding', logo: '🏭' },
    { name: 'Sabancı Holding', logo: '🏢' },
    { name: 'Anadolu Efes', logo: '🍺' },
    { name: 'Turkish Airlines', logo: '✈️' },
    { name: 'BİM', logo: '🛒' },
    { name: 'Migros', logo: '🛍️' },
    { name: 'LC Waikiki', logo: '👕' },
    { name: 'Arçelik', logo: '🔌' },
    { name: 'Vestel', logo: '📺' },
    { name: 'Zorlu Holding', logo: '🏢' },
    { name: 'Doğuş Holding', logo: '🏭' },
    { name: 'Enerjisa', logo: '⚡' },
    { name: 'Yıldız Holding', logo: '🍫' },
    { name: 'Ülker', logo: '🍪' },
    { name: 'Akbank', logo: '🏦' },
    { name: 'Yapı Kredi', logo: '💳' },
    { name: 'İş Bankası', logo: '🏦' },
    { name: 'Vakıfbank', logo: '🏦' },
    { name: 'Halkbank', logo: '🏦' },
    { name: 'Ziraat Bankası', logo: '🌾' },
    { name: 'Şişecam', logo: '🪟' },
    { name: 'Turk Telekom', logo: '📞' },
    { name: 'Vodafone', logo: '📱' },
    { name: 'Coca-Cola', logo: '🥤' },
    { name: 'Unilever', logo: '🧴' },
    { name: 'P&G', logo: '🧼' },
    { name: 'Nestlé', logo: '☕' },
    { name: 'Danone', logo: '🥛' },
    { name: 'Ford Otosan', logo: '🚙' },
    { name: 'Oyak Renault', logo: '🚗' },
    { name: 'Tofaş', logo: '🚘' },
    { name: 'Kibar Holding', logo: '⚙️' },
    { name: 'Tekfen', logo: '🏗️' },
    { name: 'Çalık Holding', logo: '🏢' },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('references_title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('references_subtitle')}
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex animate-scroll gap-8">
          <div className="flex gap-8 shrink-0">
            {references.map((ref, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white border-2 border-gray-100 rounded-2xl p-8 w-48 h-32 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-2">{ref.logo}</div>
                <div className="text-sm font-semibold text-gray-700 text-center">
                  {ref.name}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-8 shrink-0" aria-hidden="true">
            {references.map((ref, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex flex-col items-center justify-center bg-white border-2 border-gray-100 rounded-2xl p-8 w-48 h-32 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-2">{ref.logo}</div>
                <div className="text-sm font-semibold text-gray-700 text-center">
                  {ref.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
