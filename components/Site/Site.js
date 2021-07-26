import MainContent from "./MainContent";
import AsideContent from "./AsideContent";

export default function Site({
  latestPosts,
  categories,
  aboutUs,
  olderFeaturedPosts,
}) {
  const latestPost = latestPosts[0];
  return (
    <section className="container grid grid-cols-3 gap-4 w-3/4 mx-auto">
      <MainContent
        latestPost={latestPost}
        latestPosts={latestPosts}
        categories={categories}
      />
      <AsideContent
        aboutUs={aboutUs}
        olderFeaturedPosts={olderFeaturedPosts}
        categories={categories}
      />
    </section>
  );
}
