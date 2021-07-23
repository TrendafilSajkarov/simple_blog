import Image from "next/image";

import { getCategoryName, getDate } from "../../utils/utils";

export default function MainContent({ latestPost, latestPosts, categories }) {
  return (
    <main className="col-span-2 grid grid-cols-1 auto-rows-auto">
      <article className="prose-sm text-center row-span-1 h-screen max-h-760 flex flex-col items-center justify-center">
        <div className="relative w-full h-2/3 shadow-md">
          <Image
            src={latestPost.featuredImage}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-4 flex flex-col items-center bg-gray-100 bg-opacity-50 w py-2 px-6 mx-6 shadow-lg">
            <div className="text-4xl font-extrabold text-gray-700 ">
              {getDate(latestPost.createdAt)[0]}
            </div>
            <div className="text-base font-medium h-auto text-gray-700">
              {getDate(latestPost.createdAt)[1]}
            </div>
          </div>
        </div>
        <div className="flex-col items-center font-serif">
          <h4 className="uppercase text-yellow-600 text-xs ">
            {getCategoryName(categories, latestPost.fromCategory)}
          </h4>
          <h3 className="font-light">{latestPost.title}</h3>
          <p className="text-xs text-gray-400">By Admin | 3 min read</p>
          <p className="text-xs line-clamp-5">{latestPosts[0].excerpt}</p>
          <button className="border-2 border-yellow-600 uppercase hover:underline shadow-md px-6 py-1 text-gray-600 text-xs">
            Read More
          </button>
        </div>
      </article>
      <section className="grid grid-cols-2 ">
        {latestPosts.map((post) => {
          return (
            <div key={post._id} className="h-64">
              <div className="relative w-min">
                <Image
                  src={post.featuredImage}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* <div className="flex flex-col items-center font-serif">
                <h4 className="uppercase text-yellow-600 text-xs ">
                  {getCategoryName(categories, post.fromCategory)}
                </h4>
                <h3 className="font-light">{post.title}</h3>
                <p className="text-xs text-gray-400">By Admin | 3 min read</p>
                <p className="text-xs line-clamp-3">{post.excerpt}</p>
                <button className="border-2 border-yellow-600 uppercase hover:underline shadow-md px-6 py-1 text-gray-600 text-xs">
                  Read More
                </button>
              </div> */}
            </div>
          );
        })}
      </section>
    </main>
  );
}
