import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bintuneo – Fotografer, WO, EO & Produk Agromos Bintuni",
  description:
    "Bintuneo adalah landing page layanan fotografer, Wedding Organizer (WO), Event Organizer (EO) dan tempat memperkenalkan produk Agromos khas Bintuni seperti sirup pala, sirup nanas, selai nanas, bubuk pala, dan stik buah merah.",
  keywords: [
    "Fotografer Bintuni",
    "Wedding Organizer Papua Barat",
    "WO Bintuni",
    "EO Papua Barat",
    "Event Organizer Bintuni",
    "Produk Agromos",
    "Sirup buah pala",
    "Sirup buah nanas",
    "UMKM Bintuni",
    "Bintuneo"
  ],
  openGraph: {
    title: "Bintuneo – Layanan Fotografi, WO, EO & Produk Agromos Bintuni",
    description:
      "Platform untuk memudahkan warga Papua Barat menemukan fotografer, Wedding Organizer (WO), Event Organizer (EO) serta memperkenalkan produk lokal Agromos.",
    url: "https://bintuneo.com", // nanti bisa diubah setelah punya domain
    images: [
      {
        url: "/images/logo b.jpg",
        width: 800,
        height: 800,
        alt: "Logo Bintuneo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: { icon: "/images/logo b.jpg" },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Blog />
      <Contact />
    </>
  );
}
