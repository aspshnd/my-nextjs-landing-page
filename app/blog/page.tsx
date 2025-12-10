import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Layanan & Produk – Bintuneo | Foto & Video Profesional, EO, Produk Lokal Bintuni",
  description:
    "Temukan layanan fotografi, videografi, Event Organizer (EO), serta komoditas unggulan Teluk Bintuni seperti Pala, Buah Merah, dan Minyak Buah Merah dalam satu platform.",
  keywords: [
    "Layanan Fotografi Bintuni",
    "Videografer Bintuni",
    "Jasa Dokumentasi Papua Barat",
    "Event Organizer Bintuni",
    "EO Papua Barat",
    "Foto Video Bintuni",
    "Branding Visual Papua",
    "Buah Pala Bintuni",
    "Pala Papua Barat",
    "Buah Merah Bintuni",
    "Minyak Buah Merah Bintuni",
    "Produk Lokal Bintuni",
    "UMKM Papua Barat",
    "Bintuneo Media",
    "Acerpro",
    "Bintuneo"
  ],

  authors: [{ name: "Bintuneo" }],

  openGraph: {
    title:
      "Layanan & Produk Bintuneo – Foto, Video, EO & Komoditas Lokal Bintuni",
    description:
      "Lihat layanan profesional kami dalam fotografi, videografi, Event Organizer (EO) hingga produk komoditas unggulan Bintuni. Dokumentasi visual kreatif dan produk lokal berkualitas ada di sini.",
    url: "https://bintuneo.id/blog",
    type: "website",
    images: [
      {
        url: "/images/logo-b.jpg",
        width: 1200,
        height: 630,
        alt: "Bintuneo Portfolio & Produk"
      }
    ],
  },

  icons: { icon: "/images/logo-b.jpg" },

  robots: { index: true, follow: true }
};



const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Layanan & Produk"
        description="Bintuneo Group: Solusi Terintegrasi Papua Barat. Kami menyediakan eksekusi acara yang presisi, layanan media visual sinematik, dan pasokan komoditas unggulan dengan jaminan mutu dan keaslian."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData().map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
