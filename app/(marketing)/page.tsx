import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BusinessSolutions from "@/components/sections/BusinessSolutions";
import DriverRecruitment from "@/components/sections/DriverRecruitment";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import TrustStrip from "@/components/sections/TrustStrip";
import WhyHalfTime from "@/components/sections/WhyHalfTime";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-18">
        <Hero />
        <TrustStrip />
        <BusinessSolutions />
        <DriverRecruitment />
        <HowItWorks />
        <WhyHalfTime />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}