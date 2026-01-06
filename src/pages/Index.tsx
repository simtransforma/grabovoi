import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import WhatAreGrabovoiSection from "@/components/landing/WhatAreGrabovoiSection";
import PresentingSection from "@/components/landing/PresentingSection";
import DeliverablesSection from "@/components/landing/DeliverablesSection";
import ValueSection from "@/components/landing/ValueSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import AboutSection from "@/components/landing/AboutSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalOfferSection from "@/components/landing/FinalOfferSection";
import Footer from "@/components/landing/Footer";
import StickyFooter from "@/components/landing/StickyFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatAreGrabovoiSection />
        <PresentingSection />
        <DeliverablesSection />
        <ValueSection />
        <ForWhoSection />
        <AboutSection />
        <FAQSection />
        <FinalOfferSection />
      </main>
      <Footer />
      <StickyFooter />
    </div>
  );
};

export default Index;
