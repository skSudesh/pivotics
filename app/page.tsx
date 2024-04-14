import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
   return (
      <main>

         <Navbar />
         <Hero />
         <HowItWorks />
         <Benefits /> 
         <Testimonial />
         <Pricing />
         <Faq />
         <Cta />
         <Contact />
         <Footer />


      </main>
   );
}
