import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AsideContent from "../../components/Site/AsideContent";
import { getCategorySlug, getDate, getCategoryName } from "../../utils/utils";

import Image from "next/image";

export default function PostPage({ categories, singlePost }) {
  return (
    <div>
      <Navbar categories={categories.categories} aboutUs={categories.aboutUs} />

      <section className="container max-w-screen-xl mx-auto my-6">
        <article className="prose-lg px-1 md:px-4 flex flex-col">
          <div className="relative w-full h-screen max-h-600 shadow-md">
            <Image
              src={singlePost.singlePost[0].featuredImage}
              layout="fill"
              objectFit="cover"
              quality={100}
            />

            <div className="absolute shadow-sm border-gray-200 border bg-white py-0 -bottom-6 left-5 right-5 md:left-20 md:right-20 lg:left-32 lg:right-32 flex items-center">
              <div className="hidden top-4 md:flex flex-col items-center bg-gray-100 bg-opacity-50 w py-2 px-6 mx-6 shadow-lg">
                <div className="text-4xl font-extrabold text-gray-700 ">
                  {getDate(singlePost.singlePost[0].createdAt)[0]}
                </div>
                <div className="text-base font-medium h-auto text-gray-700">
                  {getDate(singlePost.singlePost[0].createdAt)[1]}
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center font-serif">
                <h4 className="uppercase text-yellow-600 text-base flex-grow-0">
                  {getCategoryName(
                    categories.categories,
                    singlePost.singlePost[0].fromCategory
                  )}
                </h4>
                <h3 className="font-light">{singlePost.singlePost[0].title}</h3>
                <p className="text-xs text-gray-400">By Admin | 3 min read</p>
              </div>
            </div>
          </div>
          <p className="text-base pt-5">{singlePost.singlePost[0].content}</p>
        </article>
        {/* <AsideContent
          aboutUs={categories.aboutUs}
          olderFeaturedPosts={categories.featuredPosts}
          categories={categories.categories}
        /> */}
      </section>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/singlePost?post=${context.params.post}`
  );
  const singlePost = await res.json();

  const res1 = await fetch(`http://localhost:3000/api/categories`);

  const categories = await res1.json();

  if (!categories) {
    return {
      notFound: true,
    };
  }

  return {
    props: { categories, singlePost }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res1 = await fetch("http://localhost:3000/api/categories");
  const data1 = await res1.json();

  const res = await fetch("http://localhost:3000/api/allPosts");
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const allPosts = data.allPosts.map((post) => ({
    params: {
      post: post.slug,
      category: getCategorySlug(data1.categories, post.fromCategory),
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // return { categories, fallback: false };
  return { paths: allPosts, fallback: false };
}
