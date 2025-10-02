import { MapPin, Bot, Calendar, Sparkles, Users, Target, Settings, Wrench, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon1: MapPin,
      icon2: Bot,
      title: t('feature_1_title'),
      description: t('feature_1_desc'),
      bullets: [
        t('feature_1_bullet_1'),
        t('feature_1_bullet_2'),
        t('feature_1_bullet_3'),
        t('feature_1_bullet_4'),
        t('feature_1_bullet_5'),
      ],
      imagePosition: 'right',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon1: Calendar,
      icon2: Sparkles,
      title: t('feature_2_title'),
      description: t('feature_2_desc'),
      bullets: [
        t('feature_2_bullet_1'),
        t('feature_2_bullet_2'),
        t('feature_2_bullet_3'),
        t('feature_2_bullet_4'),
        t('feature_2_bullet_5'),
      ],
      imagePosition: 'left',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon1: Users,
      icon2: Target,
      title: t('feature_3_title'),
      description: t('feature_3_desc'),
      bullets: [
        t('feature_3_bullet_1'),
        t('feature_3_bullet_2'),
        t('feature_3_bullet_3'),
        t('feature_3_bullet_4'),
        t('feature_3_bullet_5'),
      ],
      imagePosition: 'right',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon1: Settings,
      icon2: Wrench,
      title: t('feature_4_title'),
      description: t('feature_4_desc'),
      bullets: [
        t('feature_4_bullet_1'),
        t('feature_4_bullet_2'),
        t('feature_4_bullet_3'),
        t('feature_4_bullet_4'),
        t('feature_4_bullet_5'),
      ],
      imagePosition: 'left',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('features_title')}
          </h2>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const Icon1 = feature.icon1;
            const Icon2 = feature.icon2;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  feature.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`${
                    feature.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient}`}>
                      <Icon1 size={32} className="text-white" />
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient}`}>
                      <Icon2 size={32} className="text-white" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <Check size={14} className="text-green-600" />
                        </div>
                        <span className="text-gray-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`${
                    feature.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative">
                    <div className={`rounded-2xl bg-gradient-to-br ${feature.gradient} p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500`}>
                      <div className="aspect-video bg-white rounded-xl shadow-inner flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                            <Icon1 size={40} className="text-white" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-200 rounded-full w-3/4 mx-auto"></div>
                            <div className="h-2 bg-gray-200 rounded-full w-1/2 mx-auto"></div>
                            <div className="h-2 bg-gray-200 rounded-full w-5/6 mx-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl opacity-30`}></div>
                    <div className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl opacity-30`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
