import Links from "./Links";
import Banner from "./Banner";

export default function Navbar({ categories }) {
  return (
    <header>
      <Links categories={categories} />
      <Banner />
    </header>
  );
}
