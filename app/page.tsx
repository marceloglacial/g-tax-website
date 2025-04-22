import { Contact } from "@/components/contact/Contact";
import { Documents } from "@/components/documents/Documents";
import { Faq } from "@/components/faq/Faq";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/navbar/Navbar";
import { Services } from "@/components/services/Services";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-4 px-8">
      <Navbar />
      <Hero />
      <Services />
      <Documents />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
