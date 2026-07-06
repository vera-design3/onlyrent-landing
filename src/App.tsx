import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import AppFeatures from "@/components/sections/AppFeatures";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Skills />
      <AppFeatures />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
