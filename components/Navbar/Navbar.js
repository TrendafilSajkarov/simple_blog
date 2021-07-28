import Links from "./Links";
import Banner from "./Banner";

export default function Navbar({ categories, aboutUs }) {
  return (
    <header>
      <Links categories={categories} aboutUs={aboutUs} />
      <Banner />
    </header>
  );
}
