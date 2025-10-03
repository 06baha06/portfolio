'use client';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Navbar />
      <Hero />
      <About /> 
      <Technologies />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </main>
  );
}