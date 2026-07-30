import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <Services />
      <Footer />
    </main>
  );
}