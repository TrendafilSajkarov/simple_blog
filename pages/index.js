import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Latest from "../components/Latest/Latest";
import Site from "../components/Site/Site";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Simple Blog</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Navbar categories={props.data.categories} />
      <Latest
        featuredPosts={props.data.featuredPosts}
        categories={props.data.categories}
      />
      <Site
        latestPosts={props.data.latestPosts}
        categories={props.data.categories}
      />
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
