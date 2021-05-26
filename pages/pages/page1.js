import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { ScrollToTop } from "../../components/ScrollToTop";

// This is used so that the NavBar can
// style a specific link to let the
// user know which page they're on.

// We're going to pass this into the Navbar
const currentPage = "page1";

export default function Page1() {
  return (
    <>
      <Head>
        <title>My Website | Page1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar currentPage={currentPage} />
      <div className="h-screen text-center"><p className="text-xl font-semibold text-blue-700 dark:text-white">Page1</p></div>
      <ScrollToTop />
      <Footer />
    </>
  );
}
