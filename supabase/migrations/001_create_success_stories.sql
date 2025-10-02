/*
  # Create Success Stories Table

  1. New Tables
    - `success_stories`
      - `id` (uuid, primary key)
      - `company_name` (text) - Company name
      - `company_logo` (text) - URL to company logo
      - `image_url` (text) - URL to story image/photo
      - `story_text` (text) - Full success story text
      - `industry` (text) - Industry/sector
      - `employees_count` (integer) - Number of employees
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `success_stories` table
    - Add policy for public read access (anyone can view success stories)
    - Add policy for authenticated users to manage stories
*/
/*
console.log("SUPABASE_URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("SUPABASE_KEY:", import.meta.env.VITE_SUPABASE_KEY);

CREATE TABLE IF NOT EXISTS success_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  company_logo text DEFAULT '',
  image_url text DEFAULT '',
  story_text text NOT NULL,
  industry text NOT NULL,
  employees_count integer DEFAULT 0,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Success stories are viewable by everyone"
  ON success_stories
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert success stories"
  ON success_stories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update success stories"
  ON success_stories
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete success stories"
  ON success_stories
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS success_stories_order_idx ON success_stories(order_index);

INSERT INTO success_stories (company_name, company_logo, image_url, story_text, industry, employees_count, order_index) VALUES
('Grand Hotel Istanbul', '🏨', 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800', 'UpOne sistemini kullanmaya başladığımızdan beri 120 çalışanımızın devamsızlık takibi tamamen otomatikleşti. Özellikle vardiyalı çalışma sistemimizde, lokasyon bazlı giriş-çıkış takibi bize büyük kolaylık sağladı. Aylık raporlama işlemleri 5 günden 2 saate düştü. AI asistanın otomatik izin onayları sayesinde yöneticilerimizin iş yükü %70 azaldı.', 'Otelcilik', 120, 1),
('TechPro Yazılım', '💻', 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800', 'Startup olarak hızlı büyüyoruz ve UpOne bizimle birlikte büyüdü. 6 ayda 15 kişiden 55 kişiye çıktık. İşe alım asistanı sayesinde 200+ CV''yi otomatik değerlendirdik ve en uygun adayları bulduk. Mülakat sürecimiz %60 hızlandı. Telegram üzerinden çalışması takımımız için büyük avantaj, yeni uygulama öğrenmeye gerek kalmadı.', 'Teknoloji', 55, 2),
('Mega Üretim A.Ş.', '🏭', 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800', 'Fabrikamızda 3 vardiya sistemiyle çalışan 180 personelimizin takibi çok zordu. UpOne ile her vardiya başlangıcında otomatik yoklama yapılıyor, geç kalanlar anında bildiriliyor. Fazla mesai hesaplamaları otomatik yapılıyor ve bordro sistemimizle entegre çalışıyor. İK departmanımız artık stratejik işlere odaklanabiliyor.', 'Üretim', 180, 3);
*/