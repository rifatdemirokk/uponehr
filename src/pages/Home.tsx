import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import References from '../components/References';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Industries from '../components/Industries';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <References />
      <Pricing />
      <Testimonials />
      <Industries />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
