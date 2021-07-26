import Image from "next/image";

export default function Footer(props) {
  return (
    <footer className="bg-gray-50 w-full mt-10 py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative h-32 w-52">
          <Image
            className="object-fill"
            src="/SimpleBloglogo.png"
            layout="fill"
          />
        </div>
        <p className="prose-sm font-serif text-xs w-2/5 text-center border-b-2 border-gray-300 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <p className="py-4">Copyright ©2021 All rights reserved</p>
      </div>
    </footer>
  );
}
