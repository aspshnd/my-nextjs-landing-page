import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Komoditas Blog",
  description: "Detail blog Komoditas",
  icons: {
    icon: '/images/logo b.jpg',
  },
};

const KomoditasPage = () => {
  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              Komoditas: Analisis Pasar 2025
            </h2>
            <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
              <div className="flex items-center mb-5">
                <div className="mr-4 relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={getImagePath("/images/blog/logo-bintuneo.jpg")}
                    alt="author"
                    fill
                  />
                </div>
                <span className="text-base font-medium text-body-color">
                  By <span>Market Analyst</span>
                </span>
              </div>
              <p className="text-base font-medium text-body-color">20 Mar 2025</p>
            </div>
            <div className="mb-10">
              <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
                Insight into the commodities market, trends for 2025, and tips for investors and business owners.
              </p>
              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={getImagePath("/images/blog/logo-bintuneo.jpg")}
                    alt="Komoditas"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
                Explore insights on supply chains, pricing, and market opportunities for various commodities in the coming year.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <TagButton text="Market" />
                <TagButton text="Investment" />
                <TagButton text="Trends" />
              </div>
                <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        Share this post :
                    </h5>
                    <div className="flex items-center sm:justify-end">
                        <SharePost />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KomoditasPage;
