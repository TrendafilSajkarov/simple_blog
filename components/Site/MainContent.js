import Image from "next/image";

import { getCategoryName, getDate } from "../../utils/utils";

export default function MainContent({ latestPost, latestPosts, categories }) {
  return (
    <main className="col-span-2 grid grid-cols-1 auto-rows-auto">
      <h4 className="uppercase font-serif text-yellow-600 text-xs mb-3 px-4">
        Latest Posts
      </h4>
      {latestPost && (
        <article className="prose-sm group px-4 text-center row-span-1 h-screen max-h-760 flex flex-col items-center justify-center">
          <div className="relative w-full h-2/3 shadow-md">
            <Image
              src={latestPost.featuredImage}
              layout="fill"
              objectFit="cover"
              quality={100}
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
            <h3 className="text- font-light group-hover:underline">
              {latestPost.title}
            </h3>
            <p className="text-xs text-gray-400">By Admin | 3 min read</p>
            <p className="text-base line-clamp-5">{latestPosts[0].excerpt}</p>
            <button className="border-2 border-yellow-600 uppercase hover:underline shadow-md px-6 py-1 text-gray-600 text-xs">
              Read More
            </button>
          </div>
        </article>
      )}
      <section className="row-span-2 pt-5 flex flex-wrap justify-between items-center">
        {latestPosts.map((post, i) => {
          if (latestPost !== null && i === 0) {
            return null;
          }
          return (
            <div key={post._id} className="w-2/4 mt-9 px-3 group">
              <div
                className={`relative ${i % 3 === 0 ? "h-52" : "h-80"} w-full`}
              >
                <Image
                  src={post.featuredImage}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-2 flex flex-col items-center bg-gray-100 bg-opacity-50 px-3 mx-3 shadow-lg">
                  <div className="text-2xl font-extrabold text-gray-700 ">
                    {getDate(post.createdAt)[0]}
                  </div>
                  <div className="text-base font-medium h-auto text-gray-700">
                    {getDate(post.createdAt)[1]}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center font-serif">
                <h4 className="uppercase text-yellow-600 text-xs ">
                  {getCategoryName(categories, post.fromCategory)}
                </h4>
                <h3 className="text-lg font-medium group-hover:underline">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400">By Admin | 3 min read</p>
                <p className="text-base line-clamp-3">{post.excerpt}</p>
                <button className="border-2 border-yellow-600 uppercase hover:underline shadow-md px-6 py-1 mt-3 text-gray-600 text-xs">
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
