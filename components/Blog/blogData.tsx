import { getImagePath } from "@/lib/utils";
import { Blog } from "@/types/blog";

const getBlogData = (): Blog[] => [
  {
    id: 1,
    title: "Acerpro Event Organizer: Jaminan Eksekusi Acara Sempurna.",
    paragraph:
      "Jelajahi portofolio lengkap event yang telah sukses kami eksekusi. Bukti nyata perencanaan dan kelancaran pelaksanaan.",
    image: getImagePath("/images/blog/event-01.jpg"),
    author: {
      name: "Acerpro",
      image: getImagePath("/images/blog/logo-acerpro.jpg"),
      designation: "Event Organizer",
    },
    tags: ["Event Organizer (Acerpro)"],
    publishDate: "2025",
    url: "/blog-details/acerpro"
  },
  {
    id: 2,
    title: "Katalog Komoditas: Pala, Buah Merah, dan Minyak Buah Merah Asli Papua",
    paragraph:
      "Dapatkan spesifikasi teknis, detail produk, dan manfaat komoditas. Informasi penting untuk keputusan pembelian industri Anda.",
    image: getImagePath("/images/blog/pala-01.jpeg"),
    author: {
      name: "Bintuneo",
      image: getImagePath("/images/blog/logo-bintuneo.jpg"),
      designation: "Komoditas Bintuni",
    },
    tags: ["Produk Komoditas"],
    publishDate: "2025",
    url: "/blog-details/komoditas"
  },
  {
    id: 3,
    title: "Visual Sinematik: Galeri Karya Bintuneo Media",
    paragraph:
      "Lihat bagaimana setiap momen diubah menjadi narasi visual sinematik. Mencakup dokumentasi proyek bisnis, acara spesial, dan kebutuhan visual pribadi.",
    image: getImagePath("/images/blog/visual-01.jpg"),
    author: {
      name: "Bintuneo Media",
      image: getImagePath("/images/blog/logo-bintuneo1.png"),
      designation: "Visual Media",
    },
    tags: ["Visual Media (Bintuneo Media)"],
    publishDate: "2025",
    url: "/blog-details/bintuneo-media"
  },
];
export default getBlogData;
