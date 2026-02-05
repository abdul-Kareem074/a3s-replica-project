import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ISOSection } from "@/components/ISOSection";
import { SolarSection } from "@/components/SolarSection";
import { NewsSection } from "@/components/NewsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ExperienceSection />
        <ProductsSection />
        <ISOSection />
        <SolarSection />
        <NewsSection />
        <PartnersSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
