import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AsideContent from "../../components/Site/AsideContent";
import CategoriesPageMainContent from "../../components/Site/CategoriesPageMainContent";

export default function CategoryPage({ data, categories }) {
  return (
    <div>
      <Navbar categories={categories.categories} aboutUs={categories.aboutUs} />
      <section className="container grid grid-cols-3 gap-4 w-3/4 mx-auto my-6">
        <CategoriesPageMainContent
          latestPosts={data.posts}
          categories={categories.categories}
        />
        <AsideContent
          aboutUs={categories.aboutUs}
          olderFeaturedPosts={categories.featuredPosts}
          categories={categories.categories}
        />
      </section>
      {/* <h1>{`This is ${data.category[0].name} Category page`}</h1>
      <ul>
        {data.posts &&
          data.posts.map((post) => {
            return <li key={post._id}>{post.title}</li>;
          })}
      </ul> */}
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/posts?category=${context.params.category}`
  );
  const data = await res.json();

  const res1 = await fetch(`http://localhost:3000/api/categories`);

  const categories = await res1.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, categories }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/categories");
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const categories = data.categories.map((category) => ({
    params: { category: category.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // return { categories, fallback: false };
  return { paths: categories, fallback: false };
}
