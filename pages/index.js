import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Latest from "../components/Latest/Latest";
import Site from "../components/Site/Site";
import Footer from "../components/Footer/Footer";

export default function Home(props) {
  const featuredFourPosts = props.data.featuredPosts.filter(
    (post, i) => i <= 3
  );

  const olderFeaturedPosts = props.data.featuredPosts.filter(
    (post, i) => i > 3
  );

  return (
    <div>
      <Head>
        <title>Simple Blog</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Navbar categories={props.data.categories} />
      <Latest
        featuredPosts={featuredFourPosts}
        categories={props.data.categories}
      />
      <Site
        latestPosts={props.data.latestPosts}
        categories={props.data.categories}
        aboutUs={props.data.aboutUs}
        olderFeaturedPosts={olderFeaturedPosts}
      />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
