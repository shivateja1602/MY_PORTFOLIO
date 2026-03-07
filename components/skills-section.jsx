"use client"

import { Code, Database, Cloud, Globe, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript"],
    color: "text-blue-400",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["React", "HTML", "CSS", "Tailwind CSS", "WordPress"],
    color: "text-cyan-400",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
    color: "text-green-400",
  },
  {
    title: "Cloud & AI",
    icon: Cloud,
    skills: ["AWS Cloud Fundamentals", "Generative AI APIs"],
    color: "text-orange-400",
  },
  {
    title: "Operating Systems",
    icon: Wrench,
    skills: ["Windows", "Linux"],
    color: "text-purple-400",
  },
  {
    title: "Areas of Interest",
    icon: Globe,
    skills: ["Cloud Computing", "Generative AI", "Frontend Development"],
    color: "text-teal-400",
  },
  {
    title: "Interpersonal Skills",
    icon: Wrench,
    skills: ["Leadership", "Adaptability", "Time Management", "Collaboration"],
    color: "text-pink-400",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning cloud technologies, modern web development, and AI integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card
                key={category.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-secondary ${category.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
