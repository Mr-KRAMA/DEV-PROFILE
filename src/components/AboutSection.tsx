import { Card, CardContent } from "./ui/card";
import { Code, Lightbulb, Users, Target } from "lucide-react";

export function AboutSection() {
    const highlights = [
        {
            icon: Code,
            title: "Problem Solver",
            description: "I enjoy breaking down complex problems into manageable solutions."
        },
        {
            icon: Lightbulb,
            title: "Creative Thinker",
            description: "I bring fresh perspectives to development challenges."
        },
        {
            icon: Users,
            title: "Team Player",
            description: "I collaborate effectively in diverse, cross-functional teams."
        },
        {
            icon: Target,
            title: "Goal Oriented",
            description: "I'm driven to deliver quality results within deadlines."
        }
    ];

    return (
        <section id="about" className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="mb-4">About Me</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I'm a dedicated Computer Science student with a passion for technology and innovation.
                        My journey began with curiosity about how things work, and has evolved into a deep love for creating software solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="mb-4">My Story</h3>
                        <p className="text-muted-foreground mb-4">
                            I am a final-year student at Siddhant College of Engineering, passionate about full-stack development, DevOps, and Web3 technologies. I enjoy building scalable, innovative applications and exploring the latest in web development.
                        </p>
                        <p className="text-muted-foreground">
                            When I'm not coding, you can find me contributing to open-source projects, participating in
                            hackathons, or exploring the latest developments in AI and web technologies.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4">What Drives Me</h3>
                        <p className="text-muted-foreground mb-4">
                            I believe technology should be accessible and inclusive. My goal is to create applications
                            that not only function well but also provide exceptional user experiences for everyone.
                        </p>
                        <p className="text-muted-foreground">
                            I'm constantly learning new technologies and methodologies, always striving to improve
                            my skills and stay current with industry best practices.
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {highlights.map((highlight, index) => (
                        <Card key={index} className="text-center">
                            <CardContent className="pt-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                                    <highlight.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="mb-2">{highlight.title}</h4>
                                <p className="text-muted-foreground text-sm">{highlight.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}