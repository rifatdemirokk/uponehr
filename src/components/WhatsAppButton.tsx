import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/905436037190', '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 group"
      aria-label="WhatsApp Support"
    >
      <MessageCircle size={28} className="text-white group-hover:scale-110 transition-transform" />

      <div className="absolute -top-12 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        WhatsApp Destek
        <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
      </div>

      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </button>
  );
}
