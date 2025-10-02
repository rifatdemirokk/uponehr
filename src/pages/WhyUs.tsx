import { Clock, MessageSquare, Zap, Bot, DollarSign, Headphones, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function WhyUsPage() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Clock,
      title: t('why_us_reason_1_title'),
      description: t('why_us_reason_1_desc'),
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: MessageSquare,
      title: t('why_us_reason_2_title'),
      description: t('why_us_reason_2_desc'),
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Zap,
      title: t('why_us_reason_3_title'),
      description: t('why_us_reason_3_desc'),
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Bot,
      title: t('why_us_reason_4_title'),
      description: t('why_us_reason_4_desc'),
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: DollarSign,
      title: t('why_us_reason_5_title'),
      description: t('why_us_reason_5_desc'),
      gradient: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Headphones,
      title: t('why_us_reason_6_title'),
      description: t('why_us_reason_6_desc'),
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
  ];

  const comparisons = [
    { feature: 'Kurulum Süresi', us: '5 Dakika', others: '2-4 Hafta' },
    { feature: 'Telegram Entegrasyonu', us: '✓', others: '✗' },
    { feature: 'Yapay Zeka Asistan', us: '✓', others: '✗' },
    { feature: 'Otomatik İzin Onayı', us: '✓', others: 'Manuel' },
    { feature: 'Mobil Uygulama Gereksinimi', us: 'Yok', others: 'Gerekli' },
    { feature: 'Fiyatlandırma', us: '$59.99/ay', others: '$200+/ay' },
    { feature: 'Destek', us: '7/24 WhatsApp', others: 'E-posta' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('why_us_title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('why_us_subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className={`${reason.bgColor} rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300`}
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${reason.gradient} mb-6`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              UpOne vs Geleneksel İK Sistemleri
            </h2>
            <p className="text-xl text-gray-600">
              Neden daha fazla işletme UpOne'ı tercih ediyor?
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="py-4 px-6 text-left font-semibold">Özellik</th>
                    <th className="py-4 px-6 text-center font-semibold">UpOne</th>
                    <th className="py-4 px-6 text-center font-semibold">Diğerleri</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comp, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      } hover:bg-blue-50 transition-colors`}
                    >
                      <td className="py-4 px-6 font-medium text-gray-900">
                        {comp.feature}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
                          {comp.us === '✓' ? (
                            <Check size={20} className="text-green-600" />
                          ) : (
                            comp.us
                          )}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-600 rounded-full">
                          {comp.others}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                const pricing = document.getElementById('pricing');
                if (pricing) {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    window.location.href = '/#pricing';
                  }, 500);
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Hemen Başla
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
