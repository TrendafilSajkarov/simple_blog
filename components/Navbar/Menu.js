import Image from "next/image";

export default function Menu({ setOpenMenu, aboutUs }) {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      className="fixed inset-0 overflow-hidden z-50"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          {/* <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      --> */}
          <div className="relative w-screen max-w-md">
            {/* <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        --> */}
            <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
              <button
                onClick={() => setOpenMenu(false)}
                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Close panel</span>
                {/* <!-- Heroicon name: outline/x --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="px-4 sm:px-6">
                <h2
                  className="text-lg font-medium text-gray-900"
                  id="slide-over-title"
                >
                  Menu
                </h2>
              </div>
              <div className="mt-6 relative flex-1 px-4 sm:px-6">
                {/* <!-- Replace with your content --> */}
                <div className="absolute inset-0 px-4 sm:px-6">
                  <div
                    className="h-full flex flex-col items-center"
                    aria-hidden="true"
                  >
                    <article className="w-full md:w-3/4">
                      <h4 className="uppercase font-serif text-yellow-600 text-xs mb-3">
                        About Us
                      </h4>
                      <div className="prose-sm font-serif text-xs">
                        <div className="relative w-full h-48">
                          <Image src={aboutUs.featuredImage} layout="fill" />
                        </div>
                        <div className="text-sm">
                          <p>{aboutUs.content}</p>
                        </div>
                      </div>
                    </article>
                    <section className="my-10 w-full md:w-3/4">
                      <h4 className="uppercase font-serif text-yellow-600 text-xs mb-3">
                        Subscribe
                      </h4>
                      <div className="prose-sm font-serif font-light bg-gray-50 p-4 rounded-md shadow">
                        <p>
                          Subscribe to our newsletter and get our newest updates
                          right on your inbox.
                        </p>
                        <form>
                          <input
                            className="border-gray-300 rounded-lg shadow-sm w-full focus:ring-1 "
                            type="email"
                            placeholder="Your Email"
                          />
                          <label htmlFor="terms" className="block mt-3">
                            <input
                              className="border-gray-300 rounded shadow-sm mr-2 focus:ring-1 focus:ring-yellow-400"
                              id="terms"
                              type="checkbox"
                            />
                            I agree to the terms & conditions
                          </label>
                          <button className="border-2 border-yellow-600 bg-yellow-600 text-white uppercase shadow-md px-6 py-1 mt-6">
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </section>
                  </div>
                </div>
                {/* <!-- /End replace --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
