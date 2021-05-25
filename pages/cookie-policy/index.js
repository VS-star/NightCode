import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Cookie } from "../../components/Cookie";
import { ScrollToTop } from "../../components/ScrollToTop";

const currentPage = "cookie";

export default function CookiePolicyPage() {
  return (
    <>
      <Head>
        <title>My Website | Cookies </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentPage={currentPage} />
      <Cookie />
      <ScrollToTop />
      <Footer />
    </>
  );
}
