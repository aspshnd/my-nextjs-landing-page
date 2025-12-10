import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Bintuneo – Media Produksi Foto/Video & Pengembangan Produk Lokal Bintuni",
  description:
    "Profil Bintuneo sebagai penyedia layanan Foto & Videografi profesional, Event Organizer (EO), serta pengembangan komoditas unggulan Bintuni seperti Pala, Buah Merah, dan Minyak Buah Merah.",
  keywords: [
    "Bintuneo",
    "Bintuneo Media",
    "Acerpro",
    "Papua Barat",
    "Kabupaten Teluk Bintuni",
    "Fotografer Bintuni",
    "Videografer Bintuni",
    "Event Organizer Bintuni",
    "EO Papua Barat",
    "Dokumentasi Event Papua Barat",
    "Konten Kreatif Papua",
    "Buah Pala Bintuni",
    "Pala Papua Barat",
    "Buah Merah Papua Barat",
    "Minyak Buah Merah Bintuni",
    "UMKM Papua Barat",
    "Produk Lokal Bintuni"
  ],
  icons: {
    icon: "/images/logo-b.jpg",
  },
  openGraph: {
    title:
      "Tentang Bintuneo – Jasa Foto/Video Profesional, EO & Komoditas Lokal Bintuni",
    description:
      "Kenali perjalanan Bintuneo dalam pengembangan industri kreatif dan komoditas lokal Papua Barat melalui layanan produksi visual dan penyediaan komoditas unggulan.",
    url: "https://bintuneo.id/about",
    images: "/images/logo-b.jpg",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://bintuneo.id/#organization",
      "name": "Bintuneo",
      "alternateName": "Bintuneo Media & Acerpro Event Organizer",
      "url": "https://bintuneo.id",
      "logo": "https://bintuneo.id/images/logo-b.jpg",
      "description":
        "Layanan fotografer, videografer, Event Organizer & pemasaran produk lokal Papua Barat seperti Pala, Buah Merah dan Minyak Buah Merah.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Teluk Bintuni",
        "addressRegion": "Papua Barat",
        "addressCountry": "ID"
      },
      "areaServed": "Papua Barat",
      "sameAs": [
        "https://www.instagram.com/bintuneo"
      ]
    })
  }
};


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tentang Kami"
        description="Bintuneo berdiri sebagai ruang kreatif dan produksi visual yang mendukung geliat ekonomi kreatif serta pengembangan komoditas di Teluk Bintuni. Selain menyediakan jasa foto dan videografi profesional untuk event, produk, hingga dokumentasi kegiatan, Bintuneo juga berperan dalam memperkenalkan komoditas unggulan daerah seperti pala dan buah merah yang menjadi identitas lokal Papua Barat. Melalui produksi konten dan branding, kami membantu UMKM Bintuni meningkatkan daya saing di pasar digital."
      />
      <AboutSectionOne content={aboutContent}/>
      {/* <AboutSectionTwo content={aboutContent}/> */}
    </>
  );
};

// Data konten yang direkomendasikan untuk digunakan dalam AboutSectionOne dan AboutSectionTwo
const aboutContent = {
  // 1. Pengantar Identitas Bintuneo Group
  introduction:
    "Bintuneo Group adalah sebuah entitas yang unik, didirikan dengan tujuan mengintegrasikan potensi lokal Papua Barat dengan penyediaan jasa profesional berstandar tinggi. Kami bersemangat untuk mengangkat nilai komoditas unggulan daerah sekaligus memastikan kualitas eksekusi terbaik dalam setiap proyek yang kami tangani.",

  // 2. Visi dan Misi
  vision: "Menjadi penyedia solusi terintegrasi terdepan di Papua Barat yang dikenal karena kualitas produk komoditas dan standar profesionalisme jasa.",
  mission: [
    "Mendukung pengembangan dan distribusi komoditas lokal (Pala, Buah Merah) dengan jaminan mutu dan keaslian.",
    "Menyediakan jasa Event Organizer (EO) dan Dokumentasi Visual dengan perencanaan presisi dan eksekusi yang mulus.",
    "Membangun kemitraan jangka panjang berdasarkan kepercayaan dan hasil yang konkret.",
  ],

  // 3. Pilar Bisnis
  pillars: [
    {
      title: "Acerpro (Event Organizer)",
      description:
        "Acerpro adalah divisi Event Organizer kami yang fokus pada eksekusi acara berskala besar. Spesialisasi kami mencakup konser, gathering publik, dan event olahraga ekstrem (seperti gastrack). Kami menjamin kelancaran logistik dan pelaksanaan acara yang sempurna tanpa kendala.",
    },
    {
      title: "Komoditas (Pala & Buah Merah)",
      description:
        "Kami berdedikasi pada penyediaan komoditas bahan baku unggulan. Produk utama kami meliputi Buah Merah Mentah, Pala, dan produk turunannya. Kami memastikan setiap komoditas memiliki mutu tertinggi, keaslian dari Papua, dan pasokan yang stabil untuk kebutuhan industri.",
    },
    {
      title: "Bintuneo Media (Visual Media)",
      description:
        "Bintuneo Media berfokus pada Visual Sinematik. Kami menyediakan layanan fotografer dan videografer profesional untuk dokumentasi proyek bisnis, liputan acara spesial, dan kebutuhan visual pribadi, dengan komitmen pada kualitas storytelling dan standar sinematik tinggi.",
    },
  ],
};

export default AboutPage;
