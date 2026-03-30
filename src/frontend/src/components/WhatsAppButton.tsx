import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      data-ocid="whatsapp.button"
    >
      <div className="relative flex items-center justify-end">
        {/* Tooltip */}
        <span className="absolute right-14 bg-deep-green text-cream text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-card">
          Order on WhatsApp
        </span>
        {/* Button */}
        <div className="w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>
      </div>
    </a>
  );
}
