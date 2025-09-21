import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import{ExperienceSection} from"./components/ExperienceSection";
import{SkillsSection}from"./components/SkillsSeaction";
import{ProjectsSection}from"./components/ProjectSection";



export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
<EducationSection/>
<ExperienceSection/>
<SkillsSection/>
<ProjectsSection/>



<ContactSection/>

        </main>
        <Footer />
        




      </div>
    </ThemeProvider>



  );
}