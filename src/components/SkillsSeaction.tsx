import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "C++", level: 70 },
        { name: "Solidity", level: 65 },
        { name: "Rust", level: 60 }
      ]
    },
    
     {
  title: "Frontend Development",
  skills: [
    { name: "React/Next.js", level: 90 },
    { name: "HTML/CSS", level: 92 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript/TypeScript", level: 88 } // optional extra emphasis
  ]
}
,
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 78 },
        { name: "Web3/Blockchain", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 85 },
        { name: "CI/CD", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "Postman", level: 60 }
      ]
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB",
    "PostgreSQL", "Tailwind CSS", "HTML/CSS", "Git/GitHub", "Docker", "AWS",
    "Solidity", "Rust", "Web3", "DevOps", "REST APIs", "Postman", "Figma",
    "Machine Learning", "Data Structures", "Algorithms"
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills, certifications, and technologies I regularly work with.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Technologies I Work With</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
