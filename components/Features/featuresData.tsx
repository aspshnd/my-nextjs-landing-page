import { Feature } from "@/types/feature";
import { IoCalendarOutline, IoPeopleOutline, IoCameraOutline } from "react-icons/io5";
import { FaCarrot, FaLemon, FaTint } from "react-icons/fa";
import { GiCorn, GiWheat, GiGrain, GiFarmTractor } from "react-icons/gi";


const featuresData: Feature[] = [

  // --- KARTU 1: EVENT MANAGEMENT (EO) ---
  {
    id: 1,
    icon: (
      <IoCalendarOutline size={40} className="fill-current" />
    ),
    title: "Event Organizer (EO)",
    paragraph:
      "Tim EO profesional kami mengelola semua kebutuhan acara berskala besar, konferensi, festival, dan gathering. Didukung oleh Acerpro, kami menjamin kualitas pelaksanaan yang optimal dan dukungan teknis menyeluruh, memastikan kesuksesan setiap event Anda.",
  },
  {
    id: 2,
    icon: (
      <IoPeopleOutline size={40} className="fill-current" />
    ),
    title: "Eksekusi Acara & Dukungan Teknis (Acerpro)",
    paragraph:
      "Tim Acerpro adalah divisi spesialis kami yang fokus pada kelancaran operasional dan dukungan teknis menyeluruh. Kami mengelola logistik, memastikan setup yang presisi, dan eksekusi acara yang efisien.",
  },
  {
    id: 3,
    icon: (
      <IoCameraOutline size={40} className="fill-current" />
    ),
    title: "Dokumentasi Visual - Bintuneo Media",
    paragraph:
      "Bintuneo Media mengubah event Anda menjadi kenangan sinematik yang tak terlupakan. Kami menyediakan layanan foto dan video dengan sentuhan visual yang unik dan memukau.",
  },
  {
    id: 4,
    icon: (
      <FaLemon size={40} className="fill-current" />
    ),
    title: "Komoditas Buah Pala Asli Papua",
    paragraph:
      "Kami menyediakan Buah Pala terbaik, siap untuk ekspor atau diproses oleh industri Anda. Kami jamin kesegaran dan kemurnian komoditas dari Bintuni.",
  },
  {
    id: 5,
    icon: (
      <GiCorn size={40} className="fill-current" />
    ),
    title: "Komoditas Buah Merah Asli Papua",
    paragraph:
      "Bahan baku utama untuk Minyak Buah Merah dan produk nutrisi. Komoditas mentah segar dari Papua ini dijamin asli dan memiliki kandungan alami yang optimal.",
  },
  {
    id: 6,
    icon: (
      <FaTint size={40} className="fill-current" />
    ),
    title: "Minyak Buah Merah Asli Papua",
    paragraph:
      "Komoditas Buah Merah mentah ini adalah bahan baku utama yang terbukti efektif digunakan oleh produsen untuk proses ekstraksi Minyak Buah Merah.",
  },
];
export default featuresData;
