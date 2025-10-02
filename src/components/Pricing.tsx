import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/905436037190', '_blank');
  };

  const plans = [
    {
      name: t('plan_1_name'),
      badge: t('plan_1_badge'),
      badgeColor: 'bg-blue-100 text-blue-600',
      monthlyPrice: t('plan_1_price'),
      yearlyPrice: t('plan_1_yearly_price'),
      period: t('plan_1_period'),
      yearlySave: t('plan_1_yearly_save'),
      cta: t('plan_1_cta'),
      ctaStyle: 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600',
      features: [
        { text: t('plan_1_feat_1'), included: true },
        { text: t('plan_1_feat_2'), included: true },
        { text: t('plan_1_feat_3'), included: true },
        { text: t('plan_1_feat_4'), included: true },
        { text: t('plan_1_feat_5'), included: true },
        { text: t('plan_1_feat_6'), included: true },
        { text: t('plan_1_feat_7'), included: false },
      ],
    },
    {
      name: t('plan_2_name'),
      badge: t('plan_2_badge'),
      badgeColor: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
      monthlyPrice: t('plan_2_price'),
      yearlyPrice: t('plan_2_yearly_price'),
      period: t('plan_2_period'),
      yearlySave: t('plan_2_yearly_save'),
      cta: t('plan_2_cta'),
      ctaStyle: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl transform hover:scale-105',
      popular: true,
      features: [
        { text: t('plan_2_feat_1'), included: true },
        { text: t('plan_2_feat_2'), included: true },
        { text: t('plan_2_feat_3'), included: true },
        { text: t('plan_2_feat_4'), included: true },
        { text: t('plan_2_feat_5'), included: true },
        { text: t('plan_2_feat_6'), included: false },
      ],
    },
    {
      name: t('plan_3_name'),
      badge: t('plan_3_badge'),
      badgeColor: 'bg-purple-100 text-purple-600',
      monthlyPrice: t('plan_3_price'),
      yearlyPrice: t('plan_3_yearly_price'),
      period: t('plan_3_period'),
      yearlySave: t('plan_3_yearly_save'),
      cta: t('plan_3_cta'),
      ctaStyle: 'border-2 border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600',
      features: [
        { text: t('plan_3_feat_1'), included: true },
        { text: t('plan_3_feat_2'), included: true },
        { text: t('plan_3_feat_3'), included: true },
        { text: t('plan_3_feat_4'), included: true },
        { text: t('plan_3_feat_5'), included: true },
        { text: t('plan_3_feat_6'), included: true },
        { text: t('plan_3_feat_7'), included: true },
        { text: t('plan_3_feat_8'), included: true },
      ],
    },
    {
      name: t('plan_4_name'),
      badge: t('plan_4_badge'),
      badgeColor: 'bg-gray-100 text-gray-600',
      monthlyPrice: t('plan_4_price'),
      yearlyPrice: t('plan_4_price'),
      period: t('plan_4_period'),
      yearlySave: '',
      cta: t('plan_4_cta'),
      ctaStyle: 'bg-gray-900 text-white hover:bg-gray-800',
      features: [
        { text: t('plan_4_feat_1'), included: true },
        { text: t('plan_4_feat_2'), included: true },
        { text: t('plan_4_feat_3'), included: true },
        { text: t('plan_4_feat_4'), included: true },
        { text: t('plan_4_feat_5'), included: true },
        { text: t('plan_4_feat_6'), included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('pricing_title')}
          </h2>

          <div className="inline-flex items-center gap-3 bg-gray-100 p-1.5 rounded-full mt-8">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                !isYearly
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-600'
              }`}
            >
              {t('pricing_monthly')}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                isYearly
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-600'
              }`}
            >
              {t('pricing_yearly')}
            </button>
          </div>

          {isYearly && (
            <div className="mt-4 inline-block">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                🎉 %17 {t('pricing_save')}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'ring-2 ring-blue-600 shadow-2xl transform scale-105'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${plan.badgeColor}`}>
                {plan.badge}
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    {isYearly && plan.yearlyPrice !== plan.monthlyPrice
                      ? plan.yearlyPrice
                      : plan.monthlyPrice}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600">{plan.period}</span>
                  )}
                </div>
                {isYearly && plan.yearlySave && (
                  <div className="mt-2 text-sm text-green-600 font-medium">
                    {plan.yearlySave}
                  </div>
                )}
              </div>

              <button
                onClick={handleWhatsApp}
                className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 mb-8 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-green-600" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                        <X size={12} className="text-gray-400" />
                      </div>
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
