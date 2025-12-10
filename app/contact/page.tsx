import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Bintuneo | Fotografi, EO, Videografi & Produk Lokal Bintuni",
  description:
    "Hubungi Bintuneo untuk pemesanan jasa Fotografi, Videografi, Wedding Organizer (WO), Event Organizer (EO), serta produk komoditas Teluk Bintuni seperti pala, buah merah, sirup, selai, bubuk pala, dan stik buah merah. Siap melayani Papua Barat, khususnya Bintuni.",
  keywords: [
    "Kontak Bintuneo",
    "Hubungi Bintuneo",
    "Kontak Fotografer Bintuni",
    "Kontak Event Organizer Bintuni",
    "Videografer Papua Barat",
    "Wedding Organizer Bintuni",
    "Fotografer Bintuni",
    "Videografer Bintuni",
    "Pala Bintuni",
    "Buah Merah Bintuni",
    "UMKM Teluk Bintuni",
    "Produk lokal Papua Barat",
    "Minyak Buah Merah Papua Barat",
    "Bintuneo Media"
  ],
  openGraph: {
    title: "Hubungi Bintuneo — Layanan Foto, Video, EO & Produk Lokal Bintuni",
    description:
      "Terhubung dengan tim Bintuneo untuk konsultasi dan pemesanan jasa dokumentasi acara serta produk komoditas unggulan Bintuni. Respons cepat melalui WhatsApp.",
    url: "https://bintuneo.id/contact",
    type: "website",
    images: [
      {
        url: "/images/logo-b.jpg",
        width: 800,
        height: 800,
        alt: "Hubungi Bintuneo",
      },
    ],
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo-b.jpg" },
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
