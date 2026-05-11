import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Inquiry from "@/components/Inquiry";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Inquiry />
      <Contact />
      <Footer />
    </main>
  );
}
