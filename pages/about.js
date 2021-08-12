import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

export default function AboutPage({ categories }) {
  return (
    <div>
      <Navbar categories={categories.categories} aboutUs={categories.aboutUs} />
      <section className="container mx-auto pt-5 space-y-5 flex flex-col prose font-serif">
        <div className="relative w-full h-96">
          <Image
            src={categories.aboutUs.featuredImage}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>{categories.aboutUs.content}</div>
      </section>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const res1 = await fetch(`http://localhost:3000/api/categories`);

  const categories = await res1.json();

  if (!categories) {
    return {
      notFound: true,
    };
  }

  return {
    props: { categories }, // will be passed to the page component as props
  };
}
