import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";


export function HeroSection() {
  return (
    <section className="pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-border">
               <img src="/src/components/img/Me.jpg" alt="Alex Johnson" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Badge variant="secondary">Available for Internships</Badge>
            </div>
            
            <h1 className="mb-4">Hi, I'm Khande Rameshwar</h1>
            <h2 className="text-muted-foreground mb-6">
              Computer Science Student & Aspiring Software Developer
            </h2>
            
            <p className="text-muted-foreground mb-6 max-w-lg">
              Passionate about creating innovative solutions through code. Currently pursuing my Bachelor's in Computer Science 
              with a focus on full-stack development .
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Pune</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <Button variant="outline" size="icon">
                <a
              href="https://github.com/Mr-KRAMA"
              target="_blank"
              rel="noopener noreferrer"
              
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 " />
            </a>
              </Button>
              <Button variant="outline" size="icon">
                <a
              href="https://www.linkedin.com/in/rameshwar-khande-81abbb257/"
              target="_blank"
              rel="noopener noreferrer"
              
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
              </Button>
              <Button variant="outline" size="icon">
                <a
              href="mailto:rameshwark802@gmail.com"
              
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}