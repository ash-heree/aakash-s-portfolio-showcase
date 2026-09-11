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
import SectionReveal from "@/components/SectionReveal";

import aboutImg from "@/assets/about-tech-bg.jpg";
import skillsImg from "@/assets/skills-tech-bg.jpg";
import projectsImg from "@/assets/projects-tech-bg.jpg";
import experienceImg from "@/assets/experience-tech-bg.jpg";
import educationImg from "@/assets/education-tech-bg.jpg";
import achievementsImg from "@/assets/achievements-tech-bg.jpg";
import contactImg from "@/assets/contact-tech-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <SectionReveal image={aboutImg} label="about_me">
        <AboutSection />
      </SectionReveal>
      <SectionReveal image={skillsImg} label="skills">
        <SkillsSection />
      </SectionReveal>
      <SectionReveal image={projectsImg} label="projects">
        <ProjectsSection />
      </SectionReveal>
      <SectionReveal image={experienceImg} label="internships">
        <ExperienceSection />
      </SectionReveal>
      <SectionReveal image={educationImg} label="education">
        <EducationSection />
      </SectionReveal>
      <SectionReveal image={achievementsImg} label="achievements">
        <AchievementsSection />
      </SectionReveal>
      <SectionReveal image={projectsImg} label="volunteer">
        <VolunteerSection />
      </SectionReveal>
      <SectionReveal image={contactImg} label="contact">
        <ContactSection />
      </SectionReveal>
    </div>
  );
};

export default Index;
