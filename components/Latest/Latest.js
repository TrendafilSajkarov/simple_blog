import Image from "next/image";

import { getDate } from "../../utils/utils";
import { getCategoryName } from "../../utils/utils";

export default function Latest({ categories, featuredPosts }) {
  return (
    <main className="container mx-auto py-8 grid grid-cols-2 gap-2 h-screen max-h-760 w-full">
      <div className="relative group">
        <Image
          objectFit="cover"
          src={featuredPosts[0].featuredImage}
          layout="fill"
        />
        <div className="absolute bottom-0 h-2/5 max-h-200 w-full flex items-start">
          <div className="flex flex-col items-center bg-gray-600 bg-opacity-50 w py-2 px-6 mx-6 shadow-lg">
            <div className="text-4xl font-extrabold text-white ">
              {getDate(featuredPosts[0].createdAt)[0]}
            </div>
            <div className="text-base font-medium h-auto text-white">
              {getDate(featuredPosts[0].createdAt)[1]}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="bg-gray-100 bg-opacity-70 shadow-lg">
              <h4 className="uppercase text-yellow-600 text-xs px-2">
                {getCategoryName(categories, featuredPosts[0].fromCategory)}
              </h4>
            </div>
            <h3 className="text-xl font-light font-serif text-white prose-sm group-hover:underline">
              {featuredPosts[0].title}
            </h3>
            <p className="prose-sm font-serif text-white font-extralight line-clamp-3">
              {featuredPosts[0].excerpt}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-2">
        <div className="relative group">
          <Image
            objectFit="cover"
            src={featuredPosts[1].featuredImage}
            layout="fill"
          />
          <div className="absolute bottom-0 h-2/5 max-h-36 w-full flex items-start">
            <div className="flex flex-col items-center bg-gray-600 bg-opacity-50 w py-1 px-4 mx-4 shadow-lg">
              <div className="text-3xl font-extrabold text-white">
                {getDate(featuredPosts[1].createdAt)[0]}
              </div>
              <div className="text-base font-medium h-auto text-white">
                {getDate(featuredPosts[1].createdAt)[1]}
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-gray-100 bg-opacity-70 shadow-lg">
                <h4 className="uppercase text-yellow-600 text-xs px-2">
                  {getCategoryName(categories, featuredPosts[1].fromCategory)}
                </h4>
              </div>
              <h3 className="text-xl font-light font-serif text-white prose-sm group-hover:underline">
                {featuredPosts[1].title}
              </h3>
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
            <div className="flex flex-col items-center bg-gray-600 bg-opacity-50 w py-1 px-4 mx-4 shadow-lg">
              <div className="text-3xl font-extrabold text-white">
                {getDate(featuredPosts[2].createdAt)[0]}
              </div>
              <div className="text-base font-medium h-auto text-white">
                {getDate(featuredPosts[2].createdAt)[1]}
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-gray-100 bg-opacity-70 shadow-lg">
                <h4 className="uppercase text-yellow-600 text-xs px-2">
                  {getCategoryName(categories, featuredPosts[2].fromCategory)}
                </h4>
              </div>
              <h3 className="text-xl font-light font-serif text-white group-hover:underline">
                {featuredPosts[2].title}
              </h3>
            </div>
          </div>
        </div>
        <div className="relative row-span-2 group">
          <Image
            objectFit="cover"
            src={featuredPosts[3].featuredImage}
            layout="fill"
          />
          <div className="absolute bottom-0 h-2/5 max-h-200 w-full flex items-start">
            <div className="flex flex-col items-center bg-gray-600 bg-opacity-50 w py-1 px-4 mx-4 shadow-lg">
              <div className="text-3xl font-extrabold text-white">
                {getDate(featuredPosts[3].createdAt)[0]}
              </div>
              <div className="text-base font-medium h-auto text-white">
                {getDate(featuredPosts[3].createdAt)[1]}
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-gray-100 bg-opacity-70 shadow-lg">
                <h4 className="uppercase text-yellow-600 text-xs px-2">
                  {getCategoryName(categories, featuredPosts[3].fromCategory)}
                </h4>
              </div>
              <h3 className="text-xl font-light font-serif text-white text-shadow group-hover:underline">
                {featuredPosts[3].title}
              </h3>
              <p className="prose-sm font-serif text-white font-extralight line-clamp-3">
                {featuredPosts[3].excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
