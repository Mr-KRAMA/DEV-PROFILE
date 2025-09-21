import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
const experiences = [
  {
    title: "Web Development Intern",
    company: "Elite Software",
    location: "Remote",
    period: "Jan 2025 - Mar 2025",
    type: "Internship",
    description: "Worked remotely on full-stack web development projects for 2 months. Developed responsive websites and implemented backend APIs while collaborating with mentors to improve coding practices.",
    achievements: [
      "Built responsive web pages using React and Tailwind CSS",
      "Integrated RESTful APIs with backend services",
      "Learned Git version control and project collaboration",
      "Completed assigned tasks on time and improved coding efficiency"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git"]
  },
  {
    title: "Full Stack Developer Projects",
    company: "Self-Study & Projects",
    location: "Remote",
    period: "2025 - Present",
    type: "Freelance",
    description: "Building full-stack applications including frontend, backend, DevOps pipelines, and Web3 integration. Focused on practical application of technologies learned.",
    achievements: [
      "Developed MERN stack projects with real-time features",
      "Implemented DevOps pipelines using Docker and GitHub Actions",
      "Built Web3 projects with Ethereum and Solidity",
      "Completed multiple full-stack projects integrating frontend and backend"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Solidity", "Docker", "GitHub Actions"]
  },
  {
    title: "100xDevs Harkirat Cohort 3.0",
    company: "Harkirat Singh",
    location: "Online",
    period: "2025 - Ongoing",
    type: "Training",
    description: "Currently enrolled in Harkirat Cohort 3.0, covering advanced web development, DevOps, and Web3/Blockchain technologies.",
    achievements: [
      "Hands-on MERN stack development",
      "Learning DevOps practices including CI/CD pipelines",
      "Building blockchain applications using Solidity and Rust",
      "Participating in live coding sessions and collaborative projects"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "Solidity", "Rust", "Web3"]
  },
  {
    title: "C Language Certification",
    company: "P.C.R.N",
    location: "Online",
    period: "2024",
    type: "Certification",
    description: "Completed C programming course covering core concepts and problem-solving.",
    achievements: [
      "Mastered C fundamentals, loops, arrays, pointers, and functions",
      "Built multiple programs demonstrating algorithmic thinking",
      "Credential ID: PE343132367"
    ],
    technologies: ["C"]
  },
  {
    title: "Core Java Certification",
    company: "Self/Online Course",
    location: "Online",
    period: "2024",
    type: "Certification",
    description: "Completed Core Java course covering OOP, collections, and basic application development.",
    achievements: [
      "Built Java projects using object-oriented principles",
      "Practiced algorithms and data structures in Java"
    ],
    technologies: ["Java"]
  }
];

  const getTypeVariant = (type: string) => {
    switch (type) {
      case "Internship":
        return "default";
      case "Part-time":
        return "secondary";
      case "Freelance":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <section id="experience" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey includes internships, part-time roles, and freelance projects 
            that have shaped my skills in software development and teamwork.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <Badge variant={getTypeVariant(experience.type)}>{experience.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{experience.company}</span>
                      </div>
                      <span>•</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                
                <div className="mb-4">
                  <h4 className="mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 bottom-0 w-px h-8 bg-border transform translate-y-full"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}