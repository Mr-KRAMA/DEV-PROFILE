import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Siddhant College of Engineering",
      period: "2022 - 2026 (Expected)",
      gpa: "8.5/10",
      description: "Focused on full-stack development, DevOps, and Web3 technologies. Active participant in coding competitions and college tech events.",
      coursework: [
        "Data Structures & Algorithms",
        "Java & Core Programming",
        "Web Development (HTML, CSS, JS, React)",
        "Database Management Systems",
        "Operating Systems",
        "Software Engineering"
      ]
    }
  ];

  const certifications = [
     {
    title: "C Language Certificate",
    issuer: "P.C.R.N",
    date: "2024",
    credentialId: "PE343132367"
  },
  {
    title: "Core Java Certificate",
    issuer: "Self/Online Course",
    date: "2024",
    credentialId: ""
  },
   {
    title: "Full Stack Developer (includes DevOps & Web3)",
    issuer: "Online Course",
    date: "2025",
    credentialId: ""
  },
    {
    title: "100xDevs Cohort 3.0",
    issuer: "Harkirat Singh",
    date: "Ongoing",
    credentialId: ""
  }
  ];

  const achievements = [
    {
      title: "NSS Leadership Recognition",
      description: "Led the NSS camp for cleaning Shivneri, coordinating volunteers and activities.",
      date: "Feb 2025"
    },
    {
      title: "College Hackathon Winner",
      description: "1st place in college coding hackathon for innovative web app.",
      date: "October 2024"
    },
    {
      title: "Top Project in Web Development",
      description: "Final year project selected as the top web app project of the semester.",
      date: "2025"
    }
  ];

  return (
    <section id="education" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background and continuous learning journey in computer science and technology.
          </p>
        </div>

        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3>Education</h3>
          </div>
          
          {education.map((edu, index) => (
            <Card key={index} className="mb-6">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>{edu.degree}</CardTitle>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{edu.period}</p>
                    <p className="text-muted-foreground">GPA: {edu.gpa}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                <div>
                  <h4 className="mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge key={courseIndex} variant="secondary">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h3>Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">{cert.date}</p>
                  <p className="text-sm text-muted-foreground">ID: {cert.credentialId}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h3>Academic Achievements</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{achievement.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
