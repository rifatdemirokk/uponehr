import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonial_1_text'),
      name: t('testimonial_1_name'),
      role: t('testimonial_1_role'),
      company: t('testimonial_1_company'),
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      text: t('testimonial_2_text'),
      name: t('testimonial_2_name'),
      role: t('testimonial_2_role'),
      company: t('testimonial_2_company'),
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      text: t('testimonial_3_text'),
      name: t('testimonial_3_name'),
      role: t('testimonial_3_role'),
      company: t('testimonial_3_company'),
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('testimonials_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Quote size={24} className="text-blue-600" />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 mt-4">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
