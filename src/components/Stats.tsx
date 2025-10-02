import { Users, BarChart3, Zap, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: t('stat_1_value'),
      label: t('stat_1_label'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: BarChart3,
      value: t('stat_2_value'),
      label: t('stat_2_label'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Zap,
      value: t('stat_3_value'),
      label: t('stat_3_label'),
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Bot,
      value: t('stat_4_value'),
      label: t('stat_4_label'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl ${stat.bgColor} mb-4`}>
                  <Icon size={32} className={stat.color} />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
