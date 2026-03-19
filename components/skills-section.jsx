"use client"

import { Code, Database, Cloud, Globe, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript"],
    tone: "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
    iconColor: "text-sky-300",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["React", "HTML", "CSS", "Tailwind CSS", "WordPress"],
    tone: "from-cyan-500/30 via-teal-500/20 to-emerald-500/30",
    iconColor: "text-cyan-300",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
    tone: "from-emerald-500/30 via-green-500/20 to-lime-500/30",
    iconColor: "text-emerald-300",
  },
  {
    title: "Cloud & AI",
    icon: Cloud,
    skills: ["AWS Cloud Fundamentals", "Generative AI APIs"],
    tone: "from-amber-500/30 via-orange-500/20 to-red-500/30",
    iconColor: "text-amber-300",
  },
  {
    title: "Operating Systems",
    icon: Wrench,
    skills: ["Windows", "Linux"],
    tone: "from-slate-400/30 via-zinc-400/20 to-neutral-400/30",
    iconColor: "text-slate-300",
  },
  {
    title: "Areas of Interest",
    icon: Globe,
    skills: ["Cloud Computing", "Generative AI", "Frontend Development"],
    tone: "from-teal-500/30 via-cyan-500/20 to-sky-500/30",
    iconColor: "text-teal-300",
  },
  {
    title: "Interpersonal Skills",
    icon: Wrench,
    skills: ["Leadership", "Adaptability", "Time Management", "Collaboration"],
    tone: "from-rose-500/30 via-pink-500/20 to-fuchsia-500/30",
    iconColor: "text-rose-300",
  },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-[radial-gradient(circle_at_top_right,rgba(240,74,0,0.14),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.12),transparent_40%)]"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-primary/90 mb-3">Capability Matrix</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A high-energy skill map spanning cloud, modern web engineering, databases, and collaborative execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={category.title}
                className="group relative overflow-hidden border-border/70 bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.tone}`} />
                <div className={`absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gradient-to-br ${category.tone} blur-2xl opacity-40 group-hover:opacity-70 transition-opacity`} />

                <CardHeader className="pb-4 relative">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-secondary/70 border border-border/60 ${category.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg text-foreground leading-tight">{category.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-secondary/75 text-secondary-foreground rounded-full border border-border/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                      >
                        <span className="text-primary/70 mr-1.5">{String(skillIndex + 1).padStart(2, "0")}</span>
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
