import Link from "next/link";

export default function Links({ categories }) {
  return (
    <div className="h-auto bg-gray-50 shadow-sm font-serif font-light">
      <nav className="container mx-auto flex justify-around">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div className="flex-1 max-w-xl">
          <ul className="flex justify-around">
            {categories.map((category) => (
              <li key={category._id}>
                <Link href={`/${category.slug}`}>
                  <a className="uppercase hover:underline">{category.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
}
