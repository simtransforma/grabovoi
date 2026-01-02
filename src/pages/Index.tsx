import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import DeliverablesSection from "@/components/landing/DeliverablesSection";
import MethodSection from "@/components/landing/MethodSection";
import ContentSection from "@/components/landing/ContentSection";
import PriceSection from "@/components/landing/PriceSection";
import StackSection from "@/components/landing/StackSection";
import FAQSection from "@/components/landing/FAQSection";
import AboutSection from "@/components/landing/AboutSection";
import Footer from "@/components/landing/Footer";
import StickyFooter from "@/components/landing/StickyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ForWhoSection />
        <DeliverablesSection />
        <MethodSection />
        <ContentSection />
        <PriceSection />
        <StackSection />
        <FAQSection />
        <AboutSection />
      </main>
      <Footer />
      <StickyFooter />
    </div>
  );
};

export default Index;
