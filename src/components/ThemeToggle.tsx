
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: "light" | "dark") => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(newTheme);
    
    // Force immediate style application
    html.style.setProperty("--background", newTheme === "light" ? "248 248 255" : "25 25 112");
    html.style.setProperty("--foreground", newTheme === "light" ? "25 25 112" : "248 250 252");
    
    document.body.style.backgroundColor = newTheme === "light" ? "rgb(248, 248, 255)" : "rgb(25, 25, 112)";
    document.body.style.color = newTheme === "light" ? "rgb(25, 25, 112)" : "rgb(248, 250, 252)";
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50"
      style={{
        backgroundColor: theme === "light" ? "rgb(248, 248, 255)" : "rgb(25, 25, 112)",
        color: theme === "light" ? "rgb(25, 25, 112)" : "rgb(248, 250, 252)",
        borderColor: theme === "light" ? "rgb(25, 25, 112)" : "rgb(248, 250, 252)"
      }}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-all" />
      ) : (
        <Sun className="h-5 w-5 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
