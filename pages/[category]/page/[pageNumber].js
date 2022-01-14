import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import AsideContent from "../../../components/Site/AsideContent";
import CategoriesPageMainContent from "../../../components/Site/CategoriesPageMainContent";

export default function CategoryPageWithNumber({
  data,
  categories,
  currentCategory,
  pages,
  currentPage,
}) {
  return (
    <div>
      <Navbar categories={categories.categories} aboutUs={categories.aboutUs} />
      <section className="container grid grid-cols-2 auto-rows-auto w-11/12 lg:grid-cols-3 gap-4 xl:w-3/4 max-w-screen-xl mx-auto my-6">
        <CategoriesPageMainContent
          latestPosts={data.posts}
          currentCategory={currentCategory}
          pages={pages}
          currentPage={currentPage}
        />
        <AsideContent
          aboutUs={categories.aboutUs}
          olderFeaturedPosts={categories.featuredPosts}
          categories={categories.categories}
        />
      </section>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/posts?category=${context.params.category}&page=${context.params.pageNumber}`
  );
  const data = await res.json();

  const res1 = await fetch(`http://localhost:3000/api/categories`);

  const categories = await res1.json();

  const currentCategory = categories.categories.filter(
    (category) => category.slug === context.params.category
  )[0];

  const pages = Math.floor(currentCategory.posts.length / 10);
  const currentPage = context.params.pageNumber;

  console.log(pages, currentPage);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, categories, currentCategory, pages, currentPage }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  const res = await fetch(`http://localhost:3000/api/categories`);
  const categories = await res.json();

  let pagesParams = [];

  const catWithPosts = categories.categories.filter(
    (category) => category.slug !== "about"
  );

  catWithPosts.map((cat) => {
    let pagesPerCat = cat.posts.length / 10;
    const pagesNum = Math.floor(pagesPerCat);
    if (pagesNum > 0) {
      for (let index = 1; index <= pagesNum; index++) {
        pagesParams.push({
          params: { category: cat.slug, pageNumber: index.toString() },
        });
      }
      return;
    }
    return pagesParams;
  });

  return {
    paths: pagesParams,
    fallback: false,
  };
}
