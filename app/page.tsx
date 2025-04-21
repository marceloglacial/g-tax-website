import { Documents } from "@/components/documents/Documents";
import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/navbar/Navbar";
import { Services } from "@/components/services/Services";

export default function Home() {
  return (
    <header className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Services />
      <Documents />
    </header>
  );
}
