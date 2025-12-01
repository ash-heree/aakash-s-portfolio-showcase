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

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <VolunteerSection />
      <ContactSection />
      
      <footer className="relative py-8 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl border-t border-white/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-white/80">
            © 2025 Aakash S. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
