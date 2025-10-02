import { Factory, Hotel, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Industries() {
  const { t } = useLanguage();

  const industries = [
    {
      icon: Factory,
      title: t('industry_1_title'),
      description: t('industry_1_desc'),
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Hotel,
      title: t('industry_2_title'),
      description: t('industry_2_desc'),
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Rocket,
      title: t('industry_3_title'),
      description: t('industry_3_desc'),
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('industries_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className={`${industry.bgColor} rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${industry.gradient} mb-6`}>
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
