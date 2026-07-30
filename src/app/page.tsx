import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import OurVision from "@/components/OurVision";
import OurMission from "@/components/OurMission";
import Inquiry from "@/components/Inquiry";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <OurVision />
      <OurMission />
      <Inquiry />
      <Contact />
      <Footer />
    </main>
  );
}
