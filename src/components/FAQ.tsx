import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t('faq_1_q'),
      answer: t('faq_1_a'),
    },
    {
      question: t('faq_2_q'),
      answer: t('faq_2_a'),
    },
    {
      question: t('faq_3_q'),
      answer: t('faq_3_a'),
    },
    {
      question: t('faq_4_q'),
      answer: t('faq_4_a'),
    },
    {
      question: t('faq_5_q'),
      answer: t('faq_5_a'),
    },
    {
      question: t('faq_6_q'),
      answer: t('faq_6_a'),
    },
    {
      question: t('faq_7_q'),
      answer: t('faq_7_a'),
    },
    {
      question: t('faq_8_q'),
      answer: t('faq_8_a'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('faq_title')}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
