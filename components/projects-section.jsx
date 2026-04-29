"use client"

import { ExternalLink, Github, Bug, Users, CheckSquare, Calendar, DollarSign, Activity } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Money Manager",
    description:
      "A full-stack monorepo financial management application built with React 19 and Vite on the frontend, and Node/Express on the backend. Features account management, transaction tracking, and offline mode support with seamless API integration.",
    icon: DollarSign,
    technologies: ["React 19", "Vite", "Tailwind CSS", "Node.js", "Express"],
    highlights: [
      "Full-stack monorepo architecture",
      "Account and transaction management",
      "Offline mode with local fallback",
      "RESTful API with CORS",
      "Deployed on Vercel",
    ],
    github: "https://github.com/shivateja1602/Money_manager",
    duration: "December 2025 - February 2026",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "BugSense",
    description:
      "A React-based bug detection tool that integrates the Gemini API for advanced code analysis. Provides AI-driven root cause explanations and generates precise code fixes for security flaws and performance issues.",
    icon: Bug,
    technologies: ["React", "Vite", "Tailwind CSS", "Gemini API"],
    highlights: [
      "AI-driven root cause analysis",
      "Security flaw detection",
      "Performance issue identification",
      "Streamlined debugging workflow",
    ],
    github: "https://github.com/shivateja1602/BugSense-Project",
    duration: "January 2025 - February 2025",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "B2B CRM Lite",
    description:
      "Designed and developed the landing page for a MERN-based CRM tool using React and Tailwind CSS. Focused on clean UI, responsive design, and clear feature highlights.",
    icon: Users,
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    highlights: [
      "Clean UI design",
      "Responsive layout",
      "Clear feature highlights",
      "MERN stack showcase",
    ],
    github: "https://github.com/shivateja1602",
    duration: "June 2025 - August 2025",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Quantum Medical Denoising",
    description:
      "A Python-based quantum-inspired medical image denoising pipeline with a minimal public release for reproducible experiments on X-ray images and report generation.",
    icon: Activity,
    technologies: ["Python", "Image Processing", "Medical Imaging", "Research"],
    highlights: [
      "Quantum-inspired denoising workflow",
      "Minimal public-safe release",
      "Single-command pipeline execution",
      "Automated markdown report generation",
    ],
    github: "https://github.com/shivateja1602/quantum-medical-denoising-minimal",
    duration: "April 2026 - Present",
    color: "from-fuchsia-500/20 to-violet-500/20",
  },
  {
    title: "Task Management System",
    description:
      "A Java AWT-based desktop application developed to manage daily tasks through a graphical user interface. Uses MySQL for persistent data storage with seamless frontend-backend interaction.",
    icon: CheckSquare,
    technologies: ["Java", "AWT", "MySQL", "JDBC"],
    highlights: [
      "Desktop GUI application",
      "MySQL database integration",
      "Add, remove, list tasks",
      "Persistent data storage",
    ],
    github: "https://github.com/shivateja1602",
    duration: "June 2024 - August 2024",
    color: "from-green-500/20 to-emerald-500/20",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in cloud computing, AI integration, and modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <Card
                key={project.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                      <Calendar className="w-3 h-3" />
                      {project.duration}
                    </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
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
