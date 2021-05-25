import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Terms } from "../../components/Terms";
import { ScrollToTop } from "../../components/ScrollToTop";

const currentPage = "terms";

export default function TermsOfUsePage() {
  return (
    <>
      <Head>
        <title>My Website | Terms of Use</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentPage={currentPage}/>
      <Terms />
      <ScrollToTop />
      <Footer />
    </>
  );
}
