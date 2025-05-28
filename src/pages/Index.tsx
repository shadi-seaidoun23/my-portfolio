
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import TypedText from "@/components/TypedText";
import ResumeCard from "@/components/ResumeCard";
import SkillsSection from "@/components/SkillsSection";
import WorkStatusToggle from "@/components/WorkStatusToggle";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const typingPhrases = [
    "Graduated from Western Computer Science with Honors",
    "Work in automating processes with the Government of Canada",
    "Integrated a POS payment system with TireNow"
  ];

  const educationData = [
    {
      id: "western-cs",
      title: "Bachelor of Computer Science",
      subtitle: "University of Western Ontario",
      duration: "2018 - 2022",
      description: [
        "Graduated with Honors distinction",
        "Specialized in Software Engineering and Algorithms",
        "Relevant coursework: Data Structures, Software Engineering, Database Systems, Computer Networks",
        "Participated in hackathons and programming competitions",
        "Member of the Computer Science Society"
      ]
    }
  ];

  const workData = [
    {
      id: "gov-canada",
      title: "Software Developer",
      subtitle: "Government of Canada",
      duration: "2022 - Present",
      description: [
        "Developed and maintained automated workflow systems improving process efficiency by 40%",
        "Built internal tools using React and Node.js for department operations",
        "Collaborated with cross-functional teams to implement digital transformation initiatives",
        "Optimized legacy systems and migrated to modern cloud-based solutions",
        "Ensured compliance with government security standards and accessibility requirements"
      ]
    },
    {
      id: "tirenow",
      title: "Full Stack Developer",
      subtitle: "TireNow",
      duration: "2021 - 2022",
      description: [
        "Integrated Stripe POS payment system into existing e-commerce platform",
        "Developed real-time inventory management system reducing stock discrepancies by 30%",
        "Built customer portal for order tracking and service history",
        "Implemented responsive design ensuring mobile compatibility",
        "Collaborated with UI/UX team to improve customer experience"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-primary shadow-2xl animate-fade-in flex items-center justify-center">
            <span className="text-4xl font-bold text-primary-foreground">SS</span>
          </div>
          
          {/* Introduction */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Hi! My name is Shadi Seaidoun
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              <span>A software engineer who has </span>
              <br className="hidden md:block" />
              <TypedText phrases={typingPhrases} speed={80} pauseDuration={3000} />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12 animate-slide-up">
            <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </div>

          {/* Work Status Toggle */}
          <div className="max-w-md mx-auto mb-12">
            <WorkStatusToggle />
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Professional Background</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <ResumeCard title="Education" items={educationData} />
            <ResumeCard title="Work Experience" items={workData} />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Skills & Technologies</h2>
          <SkillsSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground">
            © 2024 Shadi Seaidoun. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
