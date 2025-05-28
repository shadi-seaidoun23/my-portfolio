
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Download, Mail, MapPin, Calendar, Star, Zap, Users, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import TypedText from "@/components/TypedText";
import ResumeCard from "@/components/ResumeCard";
import SkillsSection from "@/components/SkillsSection";
import WorkStatusToggle from "@/components/WorkStatusToggle";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [achievementCounts, setAchievementCounts] = useState({
    projects: 0,
    users: 0,
    uptime: 0
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const targets = { projects: 25, users: 60000, uptime: 99.9 };
      const startTime = Date.now();

      const updateCounters = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setAchievementCounts({
          projects: Math.floor(targets.projects * progress),
          users: Math.floor(targets.users * progress),
          uptime: Math.floor(targets.uptime * progress * 100) / 100
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
    "Work in automating processes with the Government of Canada",
    "Integrated a POS payment system with TireNow",
    "Built systems serving 60,000+ users daily"
  ];

  const educationData = [
    {
      id: "western-cs",
      title: "Bachelor of Computer Science",
      subtitle: "University of Western Ontario",
      duration: "2018 - 2022",
      description: [
        "🎓 Graduated with Honors distinction (Dean's List: 2020, 2021, 2022)",
        "🔬 Specialized in Software Engineering and Advanced Algorithms",
        "📚 Core Coursework: Data Structures & Algorithms, Software Engineering Principles, Database Systems, Computer Networks, Operating Systems, Computer Graphics",
        "🏆 Participated in 8+ hackathons and programming competitions (2 wins, 3 top-3 finishes)",
        "👥 Active member of Computer Science Society - organized tech talks and coding workshops",
        "🧠 Capstone Project: Developed a distributed file system with 99.9% uptime using Java and Docker",
        "💡 Academic Research: Published paper on 'Optimizing Graph Algorithms for Social Network Analysis'",
        "🎯 GPA: 3.8/4.0 - Consistent academic excellence throughout degree"
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
        "🚀 Architected and deployed automated workflow systems serving 10,000+ users, improving process efficiency by 40% and reducing manual processing time from 8 hours to 2 hours",
        "⚛️ Built scalable internal tools using React, TypeScript, and Node.js for critical department operations, handling 50,000+ transactions daily",
        "🤝 Led cross-functional teams of 8+ developers, designers, and analysts to implement digital transformation initiatives worth $2M+ budget",
        "☁️ Migrated 15+ legacy COBOL systems to modern microservices architecture using Docker, Kubernetes, and AWS, reducing infrastructure costs by 35%",
        "🔒 Ensured strict compliance with government security standards (PBMM/Protected B) and WCAG 2.1 AA accessibility requirements",
        "📊 Implemented comprehensive monitoring and logging systems, reducing system downtime by 60% and improving incident response time",
        "🛠️ Tech Stack: React, TypeScript, Node.js, Python, PostgreSQL, Docker, Kubernetes, AWS, Jenkins CI/CD"
      ]
    },
    {
      id: "tirenow",
      title: "Full Stack Developer",
      subtitle: "TireNow",
      duration: "2021 - 2022",
      description: [
        "💳 Successfully integrated Stripe POS payment system into existing e-commerce platform, processing $500K+ in monthly transactions with 99.9% uptime",
        "📦 Developed real-time inventory management system using React and Socket.io, reducing stock discrepancies by 30% and preventing $50K+ in lost sales",
        "🖥️ Built comprehensive customer portal for order tracking and service history, improving customer satisfaction scores by 25%",
        "📱 Implemented responsive design ensuring seamless mobile compatibility across iOS and Android devices, increasing mobile conversions by 40%",
        "🎨 Collaborated closely with UI/UX team to redesign customer experience, resulting in 20% increase in customer retention",
        "⚡ Optimized database queries and implemented Redis caching, improving page load times by 50%",
        "🔧 Tech Stack: React, JavaScript, Node.js, Express, MongoDB, Stripe API, Socket.io, Redis, Heroku"
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
          onClick={() => window.location.href = 'mailto:shadi.seaidoun@example.com'}
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
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl animate-fade-in flex items-center justify-center relative overflow-hidden group">
            <span className="text-4xl font-bold text-primary-foreground relative z-10">SS</span>
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Location & Availability Badge */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <Badge variant="outline" className="gap-2 px-4 py-2 border-primary/30">
              <MapPin className="w-4 h-4" />
              London, Ontario
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
                {achievementCounts.projects}+
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Zap className="w-4 h-4" />
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {achievementCounts.users.toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Users className="w-4 h-4" />
                Users Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {achievementCounts.uptime}%
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                System Uptime
              </div>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-4 mb-8 animate-slide-up">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-primary/30"
              onClick={() => window.open('https://github.com/shadi-seaidoun', '_blank')}
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-primary/30"
              onClick={() => window.open('https://linkedin.com/in/shadi-seaidoun', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              className="gap-2 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>

          {/* Work Status Toggle */}
          <div className="max-w-md mx-auto mb-12">
            <WorkStatusToggle />
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
            <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
              <Star className="w-4 h-4 mr-2" />
              Professional Journey
            </Badge>
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
      <section className="py-16 px-4 bg-muted/30 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            background: 'radial-gradient(circle at 70% 80%, hsl(var(--primary)) 0%, transparent 50%)'
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2 border-accent/30">
              <Zap className="w-4 h-4 mr-2" />
              Technical Expertise
            </Badge>
            <h2 className="text-3xl font-bold animate-fade-in bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </div>
          <div className="transform hover:scale-[1.02] transition-transform duration-500">
            <SkillsSection />
          </div>
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
