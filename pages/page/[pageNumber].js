import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Site from "../../components/Site/Site";

export default function Page({ data, skipedPosts, currentPage, pages }) {
  return (
    <div>
      <Head>
        <title>Simple Blog</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Navbar categories={data.categories} aboutUs={data.aboutUs} />
      <Site
        currentPage={currentPage}
        pages={pages}
        latestPosts={skipedPosts}
        categories={data.categories}
        aboutUs={data.aboutUs}
        olderFeaturedPosts={data.featuredPosts}
      />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const res2 = await fetch(
    `http://localhost:3000/api/pagination?page=${context.params.pageNumber}`
  );
  const data2 = await res2.json();
  const skipedPosts = data2.skipedPosts;

  const res1 = await fetch("http://localhost:3000/api/allPosts");
  const data1 = await res1.json();

  let count = data1.allPosts.length / 10;
  const pages = Math.floor(count);

  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();

  const currentPage = parseInt(context.params.pageNumber);

  return {
    props: { data, skipedPosts, currentPage, pages }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  const res = await fetch("http://localhost:3000/api/allPosts");
  const data = await res.json();

  let count = data.allPosts.length / 10;
  const pages = Math.floor(count);

  let pagesParams = [];

  for (let index = 1; index <= pages; index++) {
    pagesParams.push({ params: { pageNumber: index.toString() } });
  }

  return {
    paths: pagesParams,
    fallback: false,
  };
}
