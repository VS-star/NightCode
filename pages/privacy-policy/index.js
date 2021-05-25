import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Privacy } from "../../components/Privacy";
import { ScrollToTop } from "../../components/ScrollToTop";

const currentPage = "privacy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>My Website | Privacy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentPage={currentPage} />
      <Privacy />
      <ScrollToTop />
      <Footer />
    </>
  );
}
