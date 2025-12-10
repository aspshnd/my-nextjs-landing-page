import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

const WA_NUMBER = "6281357351025"; 
// Pesan awal yang akan terisi di WA
const WA_MESSAGE = "Halo Bintuneo, saya tertarik untuk mendiskusikan layanan Event Organizer (Acerpro).";

const WhatsappAcerpro = () => {
  const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <div className="fixed bottom-8 right-6 z-50">
      <Link 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Hubungi kami via WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-105"
      >
        <FaWhatsapp size={32} />
      </Link>
    </div>
  ); 
};

export default WhatsappAcerpro;