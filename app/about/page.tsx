import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Bintuneo – Fotografer, Videografer, EO & Produk lokal Bintuni",
  description:
    "Bintuneo adalah landing page layanan fotografer, Event Organizer (EO) dan tempat memperkenalkan produk Bintuni seperti Pala, Buah Merah, Minyak Buah Merah.",
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
    "UMKM Bintuni",
    "Bintuneo",
    "Bintuneo Media",
    "Acerpro"
  ],
  icons: {
    icon: "/images/logo b.jpg",
  },
  openGraph: {
    title: "Tentang Bintuneo – Photographer, Videographer, EO & Produk lokal  Bintuni",
    description:
      "Kenali profil Bintuneo sebagai penyedia jasa fotografer, Event Organizer serta pengembangan produk khas Bintuni.",
    url: "https://bintuneo.com/about", // nanti diganti setelah punya domain
    images: "/images/logo b.jpg",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tentang Kami"
        description="Bintuneo adalah sebuah entitas yang didirikan dengan tujuan mengintegrasikan potensi lokal Papua Barat dengan penyediaan jasa profesional berstandar tinggi. Kami bersemangat untuk mengangkat nilai komoditas unggulan daerah sekaligus memastikan kualitas eksekusi terbaik dalam setiap proyek yang kami tangani."
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
