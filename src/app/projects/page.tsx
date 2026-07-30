import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
}