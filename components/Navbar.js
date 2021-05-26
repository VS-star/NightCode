import Link from "next/link";
import { useEffect, useState } from "react";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { blogs } from "../constants";
import { Languages } from "../constants/Languages";

const SearchBox = () => {
  return (
    <div className="relative mx-auto mt-4 lg:mt-0 text-gray-600 dark:text-gray-600 block">
      <input
        className="border-2 mr-2 border-gray-300 h-10 w-full lg:w-36 pl-4 pr-2 rounded-full text-sm focus:outline-none bg-gray-300"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-3 mr-3 lg:mr-4"
      >
        <svg
          className="text-gray-600 dark:text-gray-600 h-4 w-4 fill-current"
          xmlns="https://www.w3.org/2000/svg"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          width="512px"
          height="512px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
  );
};

const NAV = {
  HOME: "home",
  PAGE_1: "#1",
  PAGE_2: "#2",
  PAGE_3: "#3",
  BLOG: "blog",
};

// Push new Blog here
const blogItems = [
  { value: blogs[1], name: "Blog 1" },
  { value: blogs[2], name: "Blog 2" },
  { value: blogs[3], name: "Blog 3" },
];

export const Navbar = ({ currentPage }) => {
  const [navActive, setNavActive] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const getCurrentPage = () => {
      let page = null;
      switch (true) {
        case currentPage.includes("blog-"):
          page = NAV.BLOG;
          break;
        default:
          page = currentPage;
          break;
      }
      setNavActive(page);
    };
    if (currentPage) getCurrentPage();
  }, [currentPage]);

  return (
    <nav className="sticky inset-0 z-20 bg-white dark:bg-gray-900 py-4 shadow border-solid border-t-2 border-blue-700">
      <div className="w-full lg:container lg:mx-auto lg:flex lg:px-4 items-center justify-between">
        <div className="container mx-auto flex justify-between w-full px-8 pb-5 lg:pb-0 lg:px-0 lg:w-auto">
          <div className="pl-1 lg:pl-0 flex items-center flex-shrink-0 text-gray-800 dark:text-gray-100 cursor-pointer">
            <Link href="/">
              <img className="w-72" src="/logo.svg"/>
            </Link>
          </div>
          <div
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="block lg:hidden"
          >
            <button
              id="nav"
              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="https://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full border-solid border-b-2 border-gray-300 lg:border-b-0 lg:hidden"></div>
        <div className="container mx-auto px-8 lg:hidden">
          <SearchBox />
        </div>

        <div
          className={`${
            mobileNavOpen ? "" : "hidden "
          }menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:pl-3 lg:pr-0 px-8`}
        >
          <div className="min-w-max text-sm  font-bold text-gray-700 dark:text-blue-300 lg:flex-grow">
            {/* <Link href="/">
              <p
                className={`${navActive === NAV.HOME ? "text-blue-700 " : ""
                  }block mt-4 lg:inline-block lg:mt-0 px-2 py-2 rounded mr-1 hover:text-blue-700 cursor-pointer`}
              >
                Home
              </p>
            </Link> */}
            <Link href="/pages/page1">
              <p
                className={` lg:border-b-0 lg:py-2 border-gray-200 border-opacity-20   ${
                  navActive === NAV.PAGE_1 ? "text-blue-700 " : ""
                }block lg:inline-block lg:mt-0 px-1 py-5 mr-1 hover:text-blue-700 cursor-pointer  border-b-2 mt-6 `}
              >
                Page 1
              </p>
            </Link>
            <Link href="/pages/page2">
              <p
                className={` lg:border-b-0 lg:py-2 border-gray-200 border-opacity-20  border-b-2  ${
                  navActive === NAV.PAGE_2 ? "text-blue-700 " : ""
                }
                block lg:inline-block lg:mt-0 px-1 py-5 mr-1 hover:text-blue-700 cursor-pointer `}
              >
                Page 2
              </p>
            </Link>
            <Link href="/pages/page3">
              <p
                className={` lg:border-b-0 lg:py-2 border-gray-200 border-opacity-20  border-b-2  ${
                  navActive === NAV.PAGE_3 ? "text-blue-700 " : ""
                }block lg:inline-block lg:mt-0 px-1 py-5 mr-1 hover:text-blue-700 cursor-pointer `}
              >
                Page 3
              </p>
            </Link>
            <Link href="/pages/page4">
              <p
                className={` lg:py-2 lg:mb-0 ${
                  navActive === NAV.PAGE_4 ? "text-blue-700 " : ""
                }block lg:inline-block lg:mt-0 px-1 py-5 mr-1 hover:text-blue-700 cursor-pointer mb-6`}
              >
                Page 4
              </p>
            </Link>

            {/* <div className=" relative inline-block text-left dropdown">
              <a href="#" href="#responsive-header">
                <p
                  className={`${navActive === NAV.BLOG ? "text-blue-700 " : ""
                    }block mt-4 lg:inline-block lg:mt-0 px-2 py-2 rounded hover:text-blue-700 cursor-pointer`}
                >
                  <span>Blog</span>
                  <span className="ml-2 font-size inline-block">
                    {" "}
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </p>
              </a>
              <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div className="absolute w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                  <ul className="list-reset">
                    {blogItems.map((item, index) => (
                      <li className="relative" key={index}>
                        <Link href={`/blogs/${item.value}`}>
                          <div className={`${currentPage === item.value ? 'text-blue-700 ' : ''
                            }px-4 py-2 inline flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer`}>
                            <span className="flex-1">{item.name}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                    {-- <li className="relative">
                      <Link href="/title-1">
                        <div className={`${currentPage === PAGE.LINK1 ? 'text-blue-700 ' : ''
                          }px-4 py-2 inline flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer`}>
                          <span className="flex-1">Blog 1</span>
                        </div>
                      </Link>
                    </li> --}
                  </ul>
                </div>
              </div>
            </div> */}
          </div>

          {/* Edit margin right: lg:mr-2 */}
          <div className="relative w-full lg:w-auto mx-auto mt-4 lg:mt-0 inline-flex">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 mr-3 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
            <select className="text-sm w-full lg:min-w-max border-2 border-gray-300 rounded-full text-gray-600 h-10 pl-2 pr-5 bg-gray-300 hover:border-gray-400 focus:outline-none appearance-none text-last-center">
              {Languages.map((item, index) => (
                <option key={index} className="px-4 py-4">
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2 lg:mt-0 lg:mr-2">
            <DarkModeToggle />
          </div>
          <div className="hidden lg:block">
            <SearchBox />
          </div>

          <div className="text-center lg:flex">
            <Link href="/sign-in">
              <p className="w-full lg:min-w-max block text-sm  px-3 py-3 dark:text-blue-300 font-bold mt-2 hover:text-blue-700 dark:hover:text-blue-700 lg:mt-0 cursor-pointer">
                Sign in
              </p>
            </Link>

            <Link href="/free-trial">
              <p className="w-full lg:min-w-max block text-sm  px-3 py-3 rounded text-white dark:text-white bg-blue-700 font-bold mt-2 hover:bg-blue-800 lg:ml-2 lg:mt-0 cursor-pointer">
                {/* <span className="lg:hidden xl:inline">Start </span> */}
                Free Trial
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
