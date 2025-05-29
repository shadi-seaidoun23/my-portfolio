import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Download, Mail, MapPin, Calendar, Star, Zap, Users, TrendingUp, FileText, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import TypedText from "@/components/TypedText";
import ResumeCard from "@/components/ResumeCard";
import SkillsSection from "@/components/SkillsSection";
import WorkStatusToggle from "@/components/WorkStatusToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [achievementCounts, setAchievementCounts] = useState({
    experience: 0,
    requests: 0,
    performance: 0
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const targets = { experience: 3, requests: 1000, performance: 76 };
      const startTime = Date.now();

      const updateCounters = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setAchievementCounts({
          experience: Math.floor(targets.experience * progress),
          requests: Math.floor(targets.requests * progress),
          performance: Math.floor(targets.performance * progress * 100) / 100
        });

        if (progress < 1) {
          requestAnimationFrame(updateCounters);
        }
      };
      
      requestAnimationFrame(updateCounters);
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  const typingPhrases = [
    "Graduated from Western Computer Science with Honors",
    "Created automated document processing workflows for government operations",
    "Automated business workflows using Power Automate and SharePoint",
    "Led a team of 5 students at Shared Services Canada",
    "Built interactive visualization systems with C++ and OpenGL",
    "Optimized NP-hard computational problems through innovative approaches"
  ];

  const educationData = [
    {
      id: "western-cs",
      title: "Bachelor of Computer Science",
      subtitle: "University of Western Ontario",
      duration: "2021 - 2025",
      description: [
        "🎓 Graduated with Honors distinction (Dean's List: 2023, 2024)",
        "🔬 Specialized in Software Engineering and Advanced Algorithms",
        "📚 Core Coursework: Data Structures & Algorithms, Machine Learning/AI, Databases, Computer Networks, Operating Systems, Computer Graphics, Computer Architecture",
        "🧠 Capstone Project: Built interactive 3D visualization system with C++, OpenGL, GLFW, GLM and ImGui, achieving 76% performance boost via parallelization",
        "💡 Academic Research: Authored research on 'Shortest Path Between Two Points in 3D space in the Presence of Obstacles'"
      ]
    },
    {
      id: "western-math",
      title: "Minor in Mathematics",
      subtitle: "University of Western Ontario",
      duration: "2021 - 2025",
      description: [
        "🎓 Graduated with Honors distinction (Dean's List: 2023, 2024)",
        "📚 Core Coursework: Calculus, Linear Algebra, Probability & Statistics, Discrete Math"
      ]
    }
  ];

  const workData = [
    {
      id: "shared-services-canada",
      title: "Team Lead / Cloud Data Analyst",
      subtitle: "Shared Services Canada",
      duration: "Jul 2022 - Apr 2025",
      description: [
        "👥 Led a team of 5 students, ensuring task completion and providing support to maintain productivity and quality standards",
        "📊 Conducted weekly touchpoints to monitor progress, address challenges, and align efforts with project goals",
        "🤖 Automated business request handling by pulling data from BITS database as Excel files and using Power Automate to transfer data to SharePoint lists",
        "📋 Developed Microsoft Forms workflow that generates SharePoint folders upon submission and organizes required signing documents",
        "📈 Created real-time status tracking system using MS Lists for candidate document processing",
        "🔔 Implemented automated notification system to alert managers of new business requests",
        "🛠️ Tech Stack: Power Automate, SharePoint, Microsoft Forms, Excel, MS Lists, BITS Database"
      ]
    },
    {
      id: "private-tutoring",
      title: "Private Tutoring Instructor",
      subtitle: "Private Tutoring Services",
      duration: "Jul 2024 - Aug 2024",
      description: [
        "📚 Conducted one-on-one tutoring sessions for university students in Calculus 2, covering integration techniques, sequences, series, parametric equations and polar coordinates",
        "📋 Organized weekly study plans tailored to students requiring individualized attention to ensure comprehension of key concepts",
        "⏰ Developed time management strategies to help students stay on task and work efficiently",
        "📊 Created assessments and evaluations to track student progression and identify areas needing improvement",
        "🔄 Modified future study programs based on assessment results and student feedback",
        "🎯 Ensured all students maintained academic progress through personalized learning approaches"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          onClick={() => window.location.href = 'mailto:shadiseaidoun@gmail.com'}
        >
          <Mail className="w-6 h-6" />
        </Button>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: 'radial-gradient(circle at 30% 20%, hsl(var(--primary)) 0%, transparent 50%)'
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Avatar with enhanced styling */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-40 h-40 border-4 border-primary/20">
              <AvatarImage src="/profile-picture.png" alt="Shadi Seaidoun" className="object-cover" />
              <AvatarFallback className="text-4xl font-bold text-primary-foreground">SS</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Location & Availability Badge */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <Badge variant="outline" className="gap-2 px-4 py-2 border-primary/30">
              <MapPin className="w-4 h-4" />
              Barrie, Ontario
            </Badge>
            <Badge variant="outline" className="gap-2 px-4 py-2 border-accent/30">
              <Calendar className="w-4 h-4" />
              Available Immediately
            </Badge>
          </div>
          
          {/* Introduction */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hi! My name is Shadi Seaidoun
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              <span>A software engineer who has </span>
              <br className="hidden md:block" />
              <TypedText phrases={typingPhrases} speed={80} pauseDuration={3000} />
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {achievementCounts.experience}+
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Zap className="w-4 h-4" />
                Years of Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {achievementCounts.requests.toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Users className="w-4 h-4" />
                Business Requests Automated
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {achievementCounts.performance}%
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Performance Improvement
              </div>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-primary/30"
              onClick={() => window.open('https://github.com/shadi-seaidoun23', '_blank')}
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-primary/30"
              onClick={() => window.open('https://linkedin.com/in/shadiseaidoun', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => window.open('/resume.html', '_blank')}
            >
              <FileText className="w-5 h-5" />
              Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-primary/30"
              onClick={() => window.open('/research-paper.html', '_blank')}
            >
              <GraduationCap className="w-5 h-5" />
              Research Paper
            </Button>
          </div>

        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16 px-4 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            background: 'linear-gradient(45deg, hsl(var(--accent)) 0%, transparent 50%)'
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold animate-fade-in bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Professional Background
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <ResumeCard title="Education" items={educationData} />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <ResumeCard title="Work Experience" items={workData} />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            background: 'radial-gradient(circle at 70% 80%, hsl(var(--primary)) 0%, transparent 50%)'
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold animate-fade-in bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </div>
          <div className="transform hover:scale-[1.02] transition-transform duration-500">
            <SkillsSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
