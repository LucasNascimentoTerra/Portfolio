"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <img
                src="/professional-headshot.png"
                alt="Professional headshot"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-pretty">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I create beautiful, functional web applications with a focus on user experience and clean, maintainable
              code. Passionate about modern technologies and solving complex problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button variant="ghost" onClick={scrollToAbout} className="animate-bounce">
            <ArrowDown className="h-5 w-5" />
          </Button>
        </Card>
      </div>
    </section>
  )
}
