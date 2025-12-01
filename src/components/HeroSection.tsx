import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-tech-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Aakash S
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Entry-Level IT Professional
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about technology, programming, and problem-solving. 
            Driven to create innovative solutions and continuously expand my technical expertise.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="default"
              size="lg"
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="shadow-glow"
            >
              Get In Touch
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <ArrowDown className="h-6 w-6 text-white/80" />
      </div>
    </section>
  );
};

export default HeroSection;
