import { useEffect, useState } from 'react';
import { Building2, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// Tip tanımı (supabase olmadan kendimiz yazıyoruz)
type SuccessStory = {
  id: string;
  company_name: string;
  company_logo: string;
  image_url: string;
  story_text: string;
  industry: string;
  employees_count: number;
  order_index: number;
};
// Sahte veri (mock data)
const mockStories = [
  {
    id: "1",
    company_name: "Grand Hotel Istanbul",
    company_logo: "🏨",
    image_url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    story_text: "120 çalışanımızın devamsızlık takibi tamamen otomatikleşti. Vardiya sisteminde büyük kolaylık sağladı.",
    industry: "Otelcilik",
    employees_count: 120,
    order_index: 1,
  },
  {
    id: "2",
    company_name: "TechPro Yazılım",
    company_logo: "💻",
    image_url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    story_text: "Startup olarak hızlı büyüyoruz. İşe alım süreci %60 hızlandı, 200+ CV otomatik değerlendirildi.",
    industry: "Teknoloji",
    employees_count: 55,
    order_index: 2,
  },
  {
    id: "3",
    company_name: "Mega Üretim A.Ş.",
    company_logo: "🏭",
    image_url: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
    story_text: "3 vardiyada 180 personelin takibi artık otomatik. Fazla mesailer hesaplanıyor, bordro sistemine entegre çalışıyor.",
    industry: "Üretim",
    employees_count: 180,
    order_index: 3,
  },
];

export default function SuccessStoriesPage() {
  const { t } = useLanguage();
  const [stories, setStories] = useState<typeof mockStories>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Supabase yerine mock veriyi yükle
    setTimeout(() => {
      setStories(mockStories);
      setLoading(false);
    }, 1000); // 1 saniyelik sahte yüklenme efekti
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('success_stories_title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('success_stories_subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Yükleniyor...</p>
            </div>
          ) : stories.length === 0 ? (
            <div className="text-center py-20">
              <Building2 size={64} className="mx-auto text-gray-400 mb-4" />
              <p className="text-xl text-gray-600">{t('success_stories_empty')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    {story.image_url ? (
                      <img
                        src={story.image_url}
                        alt={story.company_name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <Building2 size={64} className="text-white" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {story.company_name}
                      </h3>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <Users size={16} />
                          {story.employees_count} Çalışan
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp size={16} />
                          {story.industry}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {story.story_text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
