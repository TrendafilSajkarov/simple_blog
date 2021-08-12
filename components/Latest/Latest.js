import Image from "next/image";
import Link from "next/link";

import { getCategorySlug, getDate } from "../../utils/utils";
import { getCategoryName } from "../../utils/utils";

export default function Latest({ categories, featuredPosts }) {
  return (
    <main className="xl:container mx-auto py-8 grid md:grid-rows-2 min-h-700 h-xxxxl md:h-xxxl lg:grid-cols-2 lg:grid-rows-1 gap-2 lg:h-screen lg:max-h-760 w-full">
      <div className="relative group">
        <Image
          objectFit="cover"
          src={featuredPosts[0].featuredImage}
          layout="fill"
        />
        <div className="absolute bottom-0 h-2/5 max-h-200 w-full flex items-start">
          <div className="hidden md:flex flex-col items-center bg-gray-600 bg-opacity-50 w py-2 px-6 mx-6 shadow-lg">
            <div className="text-3xl font-extrabold text-white ">
              {getDate(featuredPosts[0].createdAt)[0]}
            </div>
            <div className="text-base font-medium h-auto text-white">
              {getDate(featuredPosts[0].createdAt)[1]}
            </div>
          </div>
          <div className="pl-2 md:pl-0 flex flex-col items-start">
            <div className="bg-gray-100 bg-opacity-70 shadow-lg">
              <h4 className="uppercase text-yellow-600 text-xs px-2">
                {getCategoryName(categories, featuredPosts[0].fromCategory)}
              </h4>
            </div>
            <Link
              href={`/${getCategorySlug(
                categories,
                featuredPosts[0].fromCategory
              )}/${featuredPosts[0].slug}`}
            >
              <a>
                <h3 className="text-xl font-light font-serif text-white prose-sm group-hover:underline">
                  {featuredPosts[0].title}
                </h3>
              </a>
            </Link>
            <div>
              <p className="md:max-w-screen-sm prose-sm text-base font-serif text-white font-extralight line-clamp-3">
                {featuredPosts[0].excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row grid-rows-3 md:grid-flow-col grid-cols-2 md:grid-rows-2 gap-2">
        <div className="relative group">
          <Image
            objectFit="cover"
            src={featuredPosts[1].featuredImage}
            layout="fill"
          />
          <div className="absolute bottom-0 h-2/5 max-h-36 w-full flex items-start">
            <div className="hidden md:flex flex-col items-center bg-gray-600 bg-opacity-50 w py-1 px-4 mx-4 shadow-lg">
              <div className="text-3xl font-extrabold text-white">
                {getDate(featuredPosts[1].createdAt)[0]}
              </div>
              <div className="text-base font-medium h-auto text-white">
                {getDate(featuredPosts[1].createdAt)[1]}
              </div>
            </div>
            <div className="pl-2 md:pl-0 flex flex-col items-start">
              <div className="bg-gray-100 bg-opacity-70 shadow-lg">
                <h4 className="uppercase text-yellow-600 text-xs px-2">
                  {getCategoryName(categories, featuredPosts[1].fromCategory)}
                </h4>
              </div>
              <Link
                href={`/${getCategorySlug(
                  categories,
                  featuredPosts[1].fromCategory
                )}/${featuredPosts[1].slug}`}
              >
                <a>
                  <h3 className="text-xl font-light font-serif text-white prose-sm group-hover:underline">
                    {featuredPosts[1].title}
                  </h3>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Image
            objectFit="cover"
            src={featuredPosts[2].featuredImage}
            layout="fill"
          />
          <div className="absolute bottom-0 h-2/5 max-h-36 w-full flex items-start">
            <div className="hidden md:flex flex-col items-center bg-gray-600 bg-opacity-50 w py-1 px-4 mx-4 shadow-lg">
              <div className="text-3xl font-extrabold text-white">
                {getDate(featuredPosts[2].createdAt)[0]}
              </div>
              <div className="text-base font-medium h-auto text-white">
                {getDate(featuredPosts[2].createdAt)[1]}
              </div>
            </div>
            <div className="pl-2 md:pl-0 flex flex-col items-start">
              <div className="bg-gray-100 bg-opacity-70 shadow-lg">
                <h4 className="uppercase text-yellow-600 text-xs px-2">
                  {getCategoryName(categories, featuredPosts[2].fromCategory)}
                </h4>
              </div>
              <Link
                href={`/${getCategorySlug(
                  categories,
                  featuredPosts[2].fromCategory
                )}/${featuredPosts[2].slug}`}
              >
                <a>
                  <h3 className="text-xl font-light font-serif text-white group-hover:underline">
                    {featuredPosts[2].title}
                  </h3>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative col-span-2 row-span-2 md:col-span-1 group">
          <Image
            objectFit="cover"
            src={featuredPosts[3].featuredImage}
            layout="fill"
          />
          <div className="absolute bottom-0 right-0 h-2/4 max-h-200 w-full flex items-start">
            <div className="hidden md:flex flex-col items-center bg-gray-600 bg-opacity-50 w py-1 px-4 mx-4 shadow-lg">
              <div className="text-3xl font-extrabold text-white">
                {getDate(featuredPosts[3].createdAt)[0]}
              </div>
              <div className="text-base font-medium h-auto text-white">
                {getDate(featuredPosts[3].createdAt)[1]}
              </div>
            </div>
            <div className="pl-2 md:pl-0 flex flex-col items-start">
              <div className="bg-gray-100 bg-opacity-70 shadow-lg">
                <h4 className="uppercase text-yellow-600 text-xs px-2">
                  {getCategoryName(categories, featuredPosts[3].fromCategory)}
                </h4>
              </div>
              <Link
                href={`/${getCategorySlug(
                  categories,
                  featuredPosts[3].fromCategory
                )}/${featuredPosts[3].slug}`}
              >
                <a>
                  <h3 className="text-xl font-light font-serif text-white text-shadow group-hover:underline">
                    {featuredPosts[3].title}
                  </h3>
                </a>
              </Link>

              <p className="lg:hidden prose-sm text-base font-serif text-white font-extralight line-clamp-3">
                {featuredPosts[3].excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
