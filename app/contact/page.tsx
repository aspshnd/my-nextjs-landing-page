import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami | Bintuneo",
  description:
    "Hubungi Bintuneo untuk layanan Fotografi, Wedding Organizer (WO), Event Organizer (EO), serta pemesanan produk Agromos seperti sirup pala, sirup nanas, selai nanas, bubuk pala, dan stik buah merah. Kami siap melayani warga Papua Barat khususnya Bintuni.",
  keywords: [
    "Bintuneo",
    "Jasa Fotografi Bintuni",
    "Wedding Organizer Papua Barat",
    "Event Organizer Bintuni",
    "Agromos",
    "Sirup Pala",
    "Sirup Nanas",
    "Selai Nanas",
    "Bubuk Pala",
    "Stik Buah Merah",
    "Kontak Bintuneo"
  ],
  icons: {
    icon: "/images/logo b.jpg",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hubungi Kami"
        description="Kami terbuka untuk menerima kritik, saran, maupun peluang kerja sama dalam pengembangan layanan dan kolaborasi bisnis. Silakan hubungi kami melalui formulir atau WhatsApp. Masukan Anda sangat berarti bagi perkembangan kami dan produk lokal Bintuni."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
