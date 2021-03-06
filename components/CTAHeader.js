export const CTAHeader = () => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-indigo-400 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">

          </span>{" "}

          <span className="block text-indigo-600 xl:inline">

          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">

        </p>
        <div className="mt-5 sm:mt-8 lg:flex lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="#"
              // remove hidden to show
              className="hidden  w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >

            </a>
          </div>

          <div className="mt-3 lg:mt-0 lg:ml-3">
            <a
              href="#"
              // remove hidden to show
              className="hidden  w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >

            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
