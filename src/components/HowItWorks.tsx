import { FileUp, MessageSquare, UserPlus, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '1',
      icon: FileUp,
      title: t('how_step_1_title'),
      description: t('how_step_1_desc'),
      color: 'blue',
    },
    {
      number: '2',
      icon: MessageSquare,
      title: t('how_step_2_title'),
      description: t('how_step_2_desc'),
      color: 'purple',
    },
    {
      number: '3',
      icon: UserPlus,
      title: t('how_step_3_title'),
      description: t('how_step_3_desc'),
      color: 'green',
    },
    {
      number: '4',
      icon: Rocket,
      title: t('how_step_4_title'),
      description: t('how_step_4_desc'),
      color: 'orange',
    },
  ];

  const colorMap = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-600',
      gradient: 'from-blue-500 to-cyan-500',
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      border: 'border-purple-600',
      gradient: 'from-purple-500 to-pink-500',
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      border: 'border-green-600',
      gradient: 'from-green-500 to-emerald-500',
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      border: 'border-orange-600',
      gradient: 'from-orange-500 to-red-500',
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('how_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colors = colorMap[step.color as keyof typeof colorMap];

            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                >
                  {step.number}
                </div>

                <div className={`inline-flex p-4 rounded-xl ${colors.bg} mb-6`}>
                  <Icon size={32} className={colors.text} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full">
            <span className="text-blue-600 font-semibold">
              {t('trust_1')}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 font-semibold">
              {t('trust_2')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
