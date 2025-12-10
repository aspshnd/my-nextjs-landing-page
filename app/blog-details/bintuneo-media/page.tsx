import WhatsappMedia from '@/components/whatsapp/WhatsappMedia';
import TagButton from "@/components/Blog/TagButton";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bintuneo Media — Portofolio Produksi Kreatif & Dokumentasi Event",
  description:
    "Lihat rangkaian karya produksi kreatif Bintuneo Media, mulai dari fotografi, videografi, hingga dokumentasi event di Teluk Bintuni dan Papua Barat.",
  keywords: [
    "Bintuneo Media",
    "Portofolio Bintuneo",
    "Produksi Kreatif Bintuni",
    "Dokumentasi Event Bintuni",
    "Fotografi Bintuni",
    "Videografi Bintuni",
    "Event Organizer Bintuni",
    "Karya Visual Bintuneo"
  ],
  openGraph: {
    title: "Bintuneo Media — Portofolio Produksi Kreatif",
    description:
      "Kumpulan karya terbaik Bintuneo Media dalam produksi konten visual dan dokumentasi event.",
    url: "https://bintuneo.id/blog-details/bintuneo-media",
    images: [
      {
        url: "/images/logo-b.jpg",
        width: 800,
        height: 800,
        alt: "Bintuneo Media Portofolio"
      }
    ],
    locale: "id_ID",
    type: "article",
  },
  icons: { icon: "/images/logo-b.jpg" },
  robots: { index: true, follow: true },
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


const BintuneoMediaPage = () => {
  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
               Visual Sinematik: Galeri Karya Bintuneo Media
            </h2>
            <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
              <div className="flex flex-wrap items-center">
                  <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={getImagePath("/images/blog/logo-bintuneo1.png")}
                            alt="author"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          By <span>Bintuneo Media</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                            <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                            <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                            <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                          </svg>
                        </span>
                        01 Januari 2026
                      </p>
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="18"
                            height="13"
                            viewBox="0 0 18 13"
                            className="fill-current"
                          >
                            <path d="M15.6375 0H1.6875C0.759375 0 0 0.759375 0 1.6875V10.6875C0 11.3062 0.309375 11.8406 0.84375 12.15C1.09687 12.2906 1.40625 12.375 1.6875 12.375C1.96875 12.375 2.25 12.2906 2.53125 12.15L5.00625 10.7156C5.11875 10.6594 5.23125 10.6312 5.34375 10.6312H15.6094C16.5375 10.6312 17.2969 9.87187 17.2969 8.94375V1.6875C17.325 0.759375 16.5656 0 15.6375 0ZM16.3406 8.94375C16.3406 9.3375 16.0312 9.64687 15.6375 9.64687H5.37187C5.09062 9.64687 4.78125 9.73125 4.52812 9.87187L2.05313 11.3063C1.82812 11.4187 1.575 11.4187 1.35 11.3063C1.125 11.1938 1.0125 10.9688 1.0125 10.7156V1.6875C1.0125 1.29375 1.32188 0.984375 1.71563 0.984375H15.6656C16.0594 0.984375 16.3687 1.29375 16.3687 1.6875V8.94375H16.3406Z" />
                            <path d="M12.2342 3.375H4.69668C4.41543 3.375 4.19043 3.6 4.19043 3.88125C4.19043 4.1625 4.41543 4.3875 4.69668 4.3875H12.2623C12.5435 4.3875 12.7685 4.1625 12.7685 3.88125C12.7685 3.6 12.5154 3.375 12.2342 3.375Z" />
                            <path d="M11.0529 6.55322H4.69668C4.41543 6.55322 4.19043 6.77822 4.19043 7.05947C4.19043 7.34072 4.41543 7.56572 4.69668 7.56572H11.0811C11.3623 7.56572 11.5873 7.34072 11.5873 7.05947C11.5873 6.77822 11.3342 6.55322 11.0529 6.55322Z" />
                          </svg>
                        </span>
                        50
                      </p>
                      <p className="flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="20"
                            height="12"
                            viewBox="0 0 20 12"
                            className="fill-current"
                          >
                            <path d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z" />
                            <path d="M19.7559 5.625C17.6934 2.375 14.1309 0.4375 10.2559 0.4375C6.38086 0.4375 2.81836 2.375 0.755859 5.625C0.630859 5.84375 0.630859 6.125 0.755859 6.34375C2.81836 9.59375 6.38086 11.5312 10.2559 11.5312C14.1309 11.5312 17.6934 9.59375 19.7559 6.34375C19.9121 6.125 19.9121 5.84375 19.7559 5.625ZM10.2559 10.4375C6.84961 10.4375 3.69336 8.78125 1.81836 5.96875C3.69336 3.1875 6.84961 1.53125 10.2559 1.53125C13.6621 1.53125 16.8184 3.1875 18.6934 5.96875C16.8184 8.78125 13.6621 10.4375 10.2559 10.4375Z" />
                          </svg>
                        </span>
                        35
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      Galeri Bintuneo Media
                    </a>
                </div>
            </div>
            <div>
              <p className="mb-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify">
                <b>Bintuneo Media</b> merupakan divisi kreatif di bawah Bintuneo Group yang memadukan ide, emosi, dan estetika dalam setiap karya visual. 
                Layanan Fotografi dan Videografi profesional disajikan melalui proses yang menyeluruh—mulai dari perencanaan konsep, 
                pengambilan gambar yang terarah, hingga penyuntingan dan finishing yang detail. 
                Dengan karakter sinematik dan standar kualitas tinggi, setiap momen diangkat menjadi visual yang tidak hanya indah, 
                tetapi juga bercerita, berkarakter, serta kuat dalam mendukung kebutuhan branding maupun dokumentasi.
              </p>
              <p className="mb-9 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark text-justify">
                Mari menelusuri rekam jejak karya kami—visual yang berbicara, menampilkan momen, ekspresi, dan detail yang tertangkap secara otentik dan penuh makna.
              </p>

            {/* Foto Karya Bintuneo Media */}
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/wisuda-01.jpeg")}
                    alt="Momen wisuda Azizah bersama keluarga"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/wisuda-02.jpeg")}
                    alt="Momen wisuda Azizah bersama keluarga"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <p className="mb-3 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify">
                <b>Momen wisuda Azizah bersama keluarga — hangat, penuh haru, dan tak terlupakan.</b> Bintuneo Media menangkap 
                setiap detail dan emosi dalam visual sinematik yang bercerita, menghasilkan 
                dokumentasi personal yang indah, bermakna, dan layak dikenang selamanya.
            </p>
            
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify">
                Di samping momen personal yang hangat, Bintuneo Media juga unggul dalam menangkap aksi dan tempo cepat. Berikutnya, kami sajikan <b>Dokumentasi kegiatan olahraga</b> yang memerlukan kecepatan dan ketajaman visual.
            </p>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/bola-01.jpeg")}
                    alt="Dokumentasi kegiatan olahraga oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/bola-02.jpeg")}
                    alt="Dokumentasi kegiatan olahraga oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/bola-03.jpeg")}
                    alt="Dokumentasi kegiatan olahraga oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/bola-04.jpeg")}
                    alt="Dokumentasi kegiatan olahraga oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <p className="mb-3 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify">
                Dokumentasi kegiatan olahraga yang dinamis membutuhkan presisi, ketepatan momen, dan kualitas visual yang konsisten — dan itulah yang kami hadirkan. 
                Foto ini merekam aksi saat bermain bola dengan fokus tajam, detail jelas, dan komposisi yang tertata. Bintuneo Media menyediakan 
                layanan dokumentasi profesional untuk beragam kebutuhan, mulai dari event olahraga, kegiatan komunitas, hingga proyek dokumentasi 
                perusahaan. Setiap visual dihasilkan melalui alur kerja yang rapi dan terukur, memastikan hasil akhir yang informatif, kuat secara visual, dan siap untuk publikasi.
            </p>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify">
              Tak hanya fokus pada momen sosial dan personal, Bintuneo Media juga hadir sebagai partner dokumentasi resmi dalam kegiatan formal organisasi dan instansi. Berikut potret <b>Rapat Kerja Cabang (Rekercab) ke-II Ikatan Apoteker Indonesia Kabupaten Teluk Bintuni</b>, yang kami abadikan dengan pendekatan visual profesional untuk mendukung kebutuhan arsip, publikasi, serta identitas lembaga.
            </p>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/farmasi-01.jpeg")}
                    alt="Dokumentasi kegiatan rapat apoteker oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/farmasi-02.jpeg")}
                    alt="Dokumentasi kegiatan rapat apoteker oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color text-justify">
              Dokumentasi foto bersama peserta <b>Rekercab ke-II Ikatan Apoteker Indonesia Kabupaten Teluk Bintuni</b>. 
              Momen ini menjadi simbol kolaborasi, komitmen, dan sinergi organisasi dalam pengembangan layanan kesehatan di daerah.
            </p>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color text-justify">
              Dari birunya laut hingga senja di antara gugusan pulau, dokumentasi <b>Trip Raja Ampat</b> merekam perjalanan penuh kagum, tawa, dan petualangan. Visual diolah dengan pendekatan sinematik untuk menghadirkan kembali rasa takjub yang sama ketika berada di lokasi.
            </p>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/rajaampat-01.jpeg")}
                    alt="Dokumentasi kegiatan olahraga oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/rajaampat-02.jpeg")}
                    alt="Dokumentasi kegiatan olahraga oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/rajaampat-03.jpeg")}
                    alt="Dokumentasi kegiatan olahraga oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/rajaampat-04.jpeg")}
                    alt="Dokumentasi kegiatan olahraga oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
                        <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/rajaampat-05.jpeg")}
                    alt="Dokumentasi kegiatan olahraga oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <div className="mb-3 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/blog-details/bintuneo-media/rajaampat-06.jpeg")}
                    alt="Dokumentasi kegiatan olahraga oleh Bintuneo Media"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
            </div>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify">
              Ekspedisi ke Raja Ampat kami rekam dengan pendekatan visual sinematik yang menonjolkan keindahan alam Papua Barat Daya secara utuh. Bintuneo Media menggabungkan pengambilan gambar dari darat dan udara dalam satu rangkaian visual yang memukau. Shot aerial menampilkan formasi ikan, panorama Piaynemo, hingga gradasi laut sebening kristal—membangun cerita yang kuat, estetis, dan tak mudah terlupakan.
            </p>
            <p className="mb-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify">
                <b>Setiap momen memiliki cerita — dan kami ada untuk menjadikannya karya visual yang bernyawa.</b>
            </p>
            <p className="mb-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify">
                Bintuneo Media hadir untuk menangkap emosi, mengangkat karakter, dan membangun identitas visual 
                yang kuat melalui karya yang sinematik. Baik untuk dokumentasi, branding, maupun event visual, 
                kami merancang setiap adegan dengan detail, meramu konsep yang relevan, dan mengeksekusi proses 
                produksi secara profesional hingga menghasilkan visual yang tidak sekadar indah — tetapi 
                <b>bercerita, berkesan, dan berdampak.</b>
                Hubungi kami melalui tombol WhatsApp untuk mulai menciptakan cerita visual Anda.
            </p>
                <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Fotografi Profesional" />
                        <TagButton text="Videografi Sinematik" />
                        <TagButton text="Dokumentasi Event" />
                      </div>
                    </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
        <WhatsappMedia />
    </section>
  );
};

export default BintuneoMediaPage;
