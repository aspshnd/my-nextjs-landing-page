import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bintuneo – Fotografer, Videografer, EO & Produk lokal Bintuni",
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
  openGraph: {
    title: "Bintuneo – Layanan Fotografi, Videografi, Event Organizer & Produk Lokal Bintuni",
    description:
      "Platform untuk memudahkan warga Papua Barat menemukan fotografer, Videografi, Event Organizer (EO) serta memperkenalkan produk lokal Bintuni.",
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
      <Blog />
      <Contact />
    </>
  );
}
