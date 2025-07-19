import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SubjectsGrid } from "@/components/SubjectsGrid";
import { AIBotSection } from "@/components/AIBotSection";
import { FeaturesSection } from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SubjectsGrid />
      <AIBotSection />
    </div>
  );
};

export default Index;
