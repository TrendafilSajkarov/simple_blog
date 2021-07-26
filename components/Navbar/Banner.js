import Image from "next/image";

export default function Banner() {
  return (
    <div className="container mx-auto mt-3 flex h-24 justify-around items-center">
      <div className="flex-1 flex justify-center">
        <button className="border-2 font-serif border-yellow-600 uppercase hover:underline shadow-md px-4">
          Subscribe
        </button>
      </div>
      <div className="relative h-full w-48">
        <Image
          className="object-fill"
          src="/SimpleBloglogo.png"
          layout="fill"
        />
      </div>
      <div className="flex-1 flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
}
