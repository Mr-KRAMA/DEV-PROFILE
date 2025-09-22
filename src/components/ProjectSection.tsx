import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";



import ChatAppImg from"./img/ChatApp.png";
import NetFlix from "./img/Netflix.png";
import Quiz from "./img/Quiz.png";
import weather from "./img/Weather.png";
import Bhakti from "./img/BhaktiFaram.png";





export function ProjectsSection() {
const projects = [
  {
    title: "ChatApp",
    description: "A real-time chat application built with the MERN stack featuring user authentication, group chats, and instant messaging.",
    image: ChatAppImg,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", ],
    github: "https://github.com/Mr-KRAMA/Chat-App.git",
    liveDemo: "#",
    featured: true
  },
  {
    title: "Weather-Dashboard",
    description: "A weather dashboard providing current weather conditions and forecasts for any city using a weather API.",
    image: weather,
    technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
    github: "https://github.com/Mr-KRAMA/Weather-Dashboard.git",
    liveDemo: "#",
    featured: true
  },
  {
    title: "Quiz-Application",
    description: "An interactive quiz application allowing users to test their knowledge with a timer and scoring system.",
    image: Quiz,
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Mr-KRAMA/Quiz-Application.git",
    liveDemo: "#",
    featured: false
  },
  {
    title: "Bhakti_Ecommerce_Website",
    description: "An e-commerce website showcasing products with features like product listings, shopping cart, and user authentication.",
    image: Bhakti,
    technologies: ["HTML", "Tailwind CSS","React", "JavaScript"],
    github: "https://github.com/Mr-KRAMA/Bhakti_Ecomerce_website.git",
    liveDemo: "#",
    featured: false
  },
  {
    title: "Netflix-Clone",
    description: "A clone of Netflix streaming platform allowing users to browse and watch movies and TV shows.",
    image: NetFlix,
    technologies: ["React", "JavaScript", "CSS","Firebase"],
    github: "https://github.com/Mr-KRAMA/Netflix-clone.git",
    liveDemo: "https://rameshwar-streaming-app.netlify.app/login",
    featured: false
  }
];


  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development and web applications.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                  <Badge>Featured</Badge>
                </div>
                <CardDescription className="line-clamp-3">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    className="btn btn-sm flex items-center"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    className="btn btn-outline btn-sm flex items-center"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      className="btn btn-outline btn-sm flex-1 flex items-center justify-center"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                    
                    <a
                      className="btn btn-sm flex-1 flex items-center justify-center"
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
