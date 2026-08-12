import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Cursor from "@/components/cursor";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scrolltotop";
import Services from "@/components/services";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <Services />
      <Highlights />
      <Projects />
      <Testimonials />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
