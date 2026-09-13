import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import VolunteerSection from "@/components/VolunteerSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import SectionIntroAnimation from "@/components/SectionIntroAnimation";

const Index = () => {
  const [homeReady, setHomeReady] = useState(false);
  const completeHomeIntro = useCallback(() => setHomeReady(true), []);

  return (
    <div className="min-h-screen bg-background relative">
      <CustomCursor />
      <Navigation />
      {!homeReady && <SectionIntroAnimation section="home" onComplete={completeHomeIntro} />}
      <AnimatePresence>
        {homeReady ? (
          <motion.div
            key="home-content"
            initial={{ opacity: 0, scale: 1.012 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroSection />
          </motion.div>
        ) : (
          <div key="home-placeholder" className="min-h-screen bg-[#050816]" aria-hidden="true" />
        )}
      </AnimatePresence>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <VolunteerSection />
      <ContactSection />
    </div>
  );
};

export default Index;
