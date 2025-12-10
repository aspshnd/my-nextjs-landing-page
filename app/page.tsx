import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bintuneo – Fotografer & Videografer Profesional, Event Organizer (EO) & Produk Lokal Papua Barat",
  description:
    "Bintuneo menyediakan layanan fotografer dan videografer profesional, Event Organizer (EO), serta memasarkan komoditas unggulan Teluk Bintuni: Pala, Buah Merah & Minyak Buah Merah. Satu platform untuk dokumentasi event dan produk lokal Papua Barat.",
  keywords: [
    "Fotografer Bintuni",
    "Videografer Bintuni",
    "Jasa Foto Bintuni",
    "Dokumentasi Event Papua Barat",
    "Event Organizer Bintuni",
    "EO Papua Barat",
    "WO Bintuni",
    "Wedding Organizer Bintuni",
    "Produk Lokal Bintuni",
    "Buah Merah Bintuni",
    "Buah Merah Papua Barat",
    "Minyak Buah Merah",
    "Minyak Buah Merah Bintuni",
    "Minyak Buah Merah Papua Barat",
    "Buah Pala Bintuni",
    "Buah Pala Papua Barat",
    "UMKM Teluk Bintuni",
    "Bintuneo Media",
    "Acerpro EO",
    "Bintuni Papua Barat"
  ],

  openGraph: {
    title:
      "Bintuneo – Dokumentasi Foto/Video, Event Organizer & Produk Lokal Teluk Bintuni",
    description:
      "Layanan lengkap untuk kebutuhan visual profesional, penyelenggaraan event, dan pemasaran produk lokal Papua Barat. Eksplorasi dokumentasi, komoditas, dan portofolio Bintuneo.",
    url: "https://bintuneo.id",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/logo-b.jpg",
        width: 1200,
        height: 630,
        alt: "Bintuneo – Media, EO & Produk Lokal",
      },
    ],
  },

  icons: { icon: "/images/logo-b.jpg" },

  robots: { index: true, follow: true },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Blog />
      <Contact />
    </>
  );
}
