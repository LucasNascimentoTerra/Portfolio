import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">My Story</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                With over 5 years of experience in web development, I've had the privilege of working with startups and
                established companies to bring their digital visions to life.
              </p>
              <p className="text-muted-foreground text-pretty">
                I specialize in React, Node.js, and modern web technologies, always staying up-to-date with the latest
                industry trends and best practices.
              </p>
            </Card>
          </div>

          <div>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">What I Do</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Full-stack web application development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>UI/UX design and prototyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>API development and integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Performance optimization</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
