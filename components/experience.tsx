import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description:
      "Led development of multiple web applications using React, Node.js, and PostgreSQL. Mentored junior developers and implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Junior Web Developer",
    company: "Startup Co.",
    period: "2019 - 2020",
    description:
      "Built and maintained company website and internal tools. Gained experience in full-stack development.",
    technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
