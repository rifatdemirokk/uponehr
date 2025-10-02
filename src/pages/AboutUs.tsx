import { Target, Eye, Heart, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function AboutUsPage() {
  const { t } = useLanguage();

  const sections = [
    {
      icon: Target,
      title: t('about_section_1_title'),
      text: t('about_section_1_text'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Eye,
      title: t('about_section_2_title'),
      text: t('about_section_2_text'),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: t('about_section_3_title'),
      text: t('about_section_3_text'),
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('about_title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('about_subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${section.gradient} mb-6`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                <Users size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('about_team_title')}
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              {t('about_team_text')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2024</div>
              <div className="text-gray-600">Kuruluş Yılı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1,000+</div>
              <div className="text-gray-600">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Aktif Kullanıcı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">%95</div>
              <div className="text-gray-600">Memnuniyet</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
