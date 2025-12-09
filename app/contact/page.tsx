import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami | Bintuneo",
  description:
    "Hubungi Bintuneo untuk layanan Fotografi, Wedding Organizer (WO), Event Organizer (EO), serta pemesanan produk Agromos seperti sirup pala, sirup nanas, selai nanas, bubuk pala, dan stik buah merah. Kami siap melayani warga Papua Barat khususnya Bintuni.",
  keywords: [
    "Kabupaten Teluk Bintuni",
    "Fotografer Bintuni",
    "Videografer Bintuni",
    "Buah Pala Bintuni",
    "Buah Pala Papua Barat",
    "Buah Merah Papua Barat",
    "Buah Merah Bintuni",
    "Minyak Buah Merah Papua Barat",
    "Minyak Buah Merah Bintuni",
    "Event Organizer Papua Barat",
    "Event Organizer Bintuni",
    "Kontak Bintuneo",
    "UMKM Bintuni",
    "Bintuneo",
    "Bintuneo Media",
    "Acerpro"
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
