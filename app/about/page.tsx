import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Bintuneo – Produk, Photographer, Videographer & Event Organizer",
  description:
    "Halaman About Bintuneo berisi profil layanan fotografer, Wedding Organizer (WO), Event Organizer (EO) serta informasi perkembangan produk seperti sirup pala, sirup nanas, selai nanas, bubuk pala, dan stik buah merah di wilayah Bintuni, Papua Barat.",
  keywords: [
    "Tentang Bintuneo",
    "About Bintuneo",
    "Wedding Organizer Bintuni",
    "EO Bintuni",
    "Fotografer Papua Barat",
    "Tentang Agromos",
    "UMKM Bintuni",
    "Sirup Pala",
    "Sirup Nanas",
  ],
  icons: {
    icon: "/images/logo b.jpg",
  },
  openGraph: {
    title: "Tentang Bintuneo – Photographer, Videographer, WO, EO & Produk Agromos Bintuni",
    description:
      "Kenali profil Bintuneo sebagai penyedia jasa fotografer, WO dan EO serta pengembangan produk Agromos khas Bintuni.",
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
        description="Kenali lebih dekat Bintuneo. Kami fokus pada pengembangan produk lokal Agromos (Pala, Buah Merah, Minyak Buah Merah) serta penyedia jasa profesional. Jasa meliputi Event Organizer (EO) oleh Acerpro dan Photographer/Videographer oleh Bintuneo Media."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
