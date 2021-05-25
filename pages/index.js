import Head from "next/head";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

// Example Components
import { CTAHeader } from "../components/CTAHeader";
import { FeaturedSection } from "../components/FeaturedSection";
import { Grids } from "../components/Grids";
import { FreeTrial } from "../components/FreeTrial";
import { CookieBanner } from "../components/CookieBanner";

// This is used so that the NavBar can
// style a specific link to let the
// user know which page they're on.

// We're going to pass this into the Navbar
const currentPage = "home";

export default function Home() {
  return (
    <div id="top">
      <Head>
        <title>My Website | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieBanner />
      <Navbar currentPage={currentPage} />

      {/* Examples */}
      <CTAHeader />
      <FeaturedSection />
      <FeaturedSection />
      <Grids />
      <FreeTrial />

      <ScrollToTop />
      <Footer />
    </div>
  );
}
