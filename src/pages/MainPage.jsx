import React from "react";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import TopButton from "../components/TopButton";
import BackgroundSection from "../sections/BackgroundSection";
import HeroSection from "../sections/HeroSection";
import MarketResearchSection from "../sections/MarketResearchSection";
import PersonaSection from "../sections/PersonaSection";
import ProblemSolutionSection from "../sections/ProblemSolutionSection";
import ResearchIntroSection from "../sections/ResearchIntroSection";
import VideoSection from "../sections/VideoSection";
import { ProcessSections } from "./ProcessDetailPage";
import { DesignSystemSections } from "./DesignSystemDetailPage";
import { LastVisualSection, ServiceSections } from "./ServiceDetailPage";

function MainPage() {
  return (
    <main className="main-page detail-page">
      <MainHeader />

      {/* Intro */}
      <HeroSection />
      <VideoSection />
      <BackgroundSection />

      {/* Research */}
      <ResearchIntroSection />
      <PersonaSection />
      <MarketResearchSection />

      {/* Problem & solution */}
      <ProblemSolutionSection />

      {/* Process */}
      <ProcessSections />

      {/* Design system */}
      <DesignSystemSections />

      {/* Service */}
      <ServiceSections includeHero={false} />
      <LastVisualSection />

      {/* Global */}
      <Footer />
      <TopButton />
    </main>
  );
}

export default MainPage;
