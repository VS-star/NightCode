import { Blog } from "../../../components/Blog";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { ScrollToTop } from "../../../components/ScrollToTop";
import { CookieBanner } from "../../../components/CookieBanner";
import { blogs } from "../../../constants";

// This is used so that the NavBar can
// style a specific link to let the
// user know which page they're on.

// We're going to pass this into the Navbar
const currentPage = blogs[3];

export default function Blog3Page() {
  return (
    <>
      <CookieBanner />
      <Navbar currentPage={currentPage} />
      <Blog />
      <ScrollToTop />
      <Footer />
    </>
  );
}
