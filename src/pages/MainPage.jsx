import React from "react";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import TopButton from "../components/TopButton";
import BackgroundSection from "../sections/BackgroundSection";
import DiseaseScroller from "../sections/DiseaseScroller";
import HeroSection from "../sections/HeroSection";
import PersonaSection from "../sections/PersonaSection";
import ProblemSolutionSection from "../sections/ProblemSolutionSection";
import ResearchIntroSection from "../sections/ResearchIntroSection";
import SpeechSection from "../sections/SpeechSection";
import VideoSection from "../sections/VideoSection";
import { ProcessSections } from "./ProcessDetailPage";
import { DesignSystemSections } from "./DesignSystemDetailPage";
import { LastVisualSection, ServiceSections } from "./ServiceDetailPage";

function MainPage() {
  return (
    <main className="main-page detail-page">
      <MainHeader />
      <HeroSection />
      <VideoSection />
      <BackgroundSection />
      <ResearchIntroSection />
      <DiseaseScroller />
      <PersonaSection />
      <ProblemSolutionSection />
      <SpeechSection />
      <ProcessSections />
      <DesignSystemSections />
      <ServiceSections includeHero={false} />
      <LastVisualSection />
      <Footer />
      <TopButton />
    </main>
  );
}

export default MainPage;
