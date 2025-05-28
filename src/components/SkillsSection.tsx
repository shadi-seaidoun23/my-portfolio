
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const programmingLanguages = [
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "SQL", level: "Advanced" }
  ];

  const frameworks = [
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "Express", level: "Intermediate" },
    { name: "Django", level: "Intermediate" },
    { name: "Spring Boot", level: "Intermediate" }
  ];

  const tools = [
    { name: "Git", level: "Advanced" },
    { name: "Docker", level: "Intermediate" },
    { name: "AWS", level: "Intermediate" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "MongoDB", level: "Intermediate" }
  ];

  const languages = [
    { name: "English", flag: "🇺🇸", level: "Native" },
    { name: "French", flag: "🇫🇷", level: "Fluent" },
    { name: "Arabic", flag: "🇸🇦", level: "Fluent" }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
      case "Native":
        return "bg-primary/20 text-primary border-primary/30 font-semibold";
      case "Intermediate":
      case "Fluent":
        return "bg-accent/20 text-accent-foreground border-accent/30 font-medium";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="animate-slide-up shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Programming Languages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {programmingLanguages.map((lang) => (
            <div key={lang.name} className="flex items-center justify-between">
              <span className="text-sm font-medium">{lang.name}</span>
              <Badge variant="outline" className={`border ${getLevelColor(lang.level)}`}>
                {lang.level}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="animate-slide-up shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Frameworks & Libraries</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {frameworks.map((framework) => (
            <div key={framework.name} className="flex items-center justify-between">
              <span className="text-sm font-medium">{framework.name}</span>
              <Badge variant="outline" className={`border ${getLevelColor(framework.level)}`}>
                {framework.level}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="animate-slide-up shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Tools & Technologies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {tools.map((tool) => (
            <div key={tool.name} className="flex items-center justify-between">
              <span className="text-sm font-medium">{tool.name}</span>
              <Badge variant="outline" className={`border ${getLevelColor(tool.level)}`}>
                {tool.level}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="animate-slide-up shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Languages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {languages.map((language) => (
            <div key={language.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
              </div>
              <Badge variant="outline" className={`border ${getLevelColor(language.level)}`}>
                {language.level}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsSection;
