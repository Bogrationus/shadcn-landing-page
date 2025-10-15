import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Rooms } from "./components/Rooms";
import { ScrollToTop } from "./components/ScrollToTop";
import { StickyPromobar } from "./components/StickyPromobar";
import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Rooms />
      <Testimonials />
      <FAQ />
      <Footer />
      <StickyPromobar />
      <ScrollToTop />
    </>
  );
}

export default App;
