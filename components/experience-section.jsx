"use client"

import { Briefcase, GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    type: "work",
    title: "MERN Developer Intern",
    organization: "InternPro",
    location: "Remote",
    duration: "2024",
    description: [
      "Completed internship with hands-on MERN development experience",
      "Developed responsive web applications using MongoDB, Express, React, and Node.js",
      "Gained practical experience in full-stack web development",
    ],
  },
  {
    type: "education",
    title: "B.Tech in Computer Science & Technology (IV-I)",
    organization: "Madanapalle Institute of Technology & Science",
    location: "Madanapalle, Andhra Pradesh",
    duration: "2022 - May 2026",
    description: ["CGPA: 8.46/10", "Relevant Coursework: Data Structures, Cloud Computing, Web Development"],
  },
  {
    type: "education",
    title: "Intermediate (MPC)",
    organization: "Sri Masters Junior College",
    location: "Ananthapuramu, Andhra Pradesh",
    duration: "April 2022",
    description: ["GPA: 7.04/10", "Mathematics, Physics, Chemistry focus"],
  },
  {
    type: "education",
    title: "Secondary Education (SSC)",
    organization: "ZPHS Medapuram",
    location: "Medapuram, Andhra Pradesh",
    duration: "April 2020",
    description: ["Percentage: 95%", "Strong foundation in academics"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background in technology and software development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              const Icon = exp.type === "work" ? Briefcase : GraduationCap

              return (
                <div
                  key={exp.title + exp.organization}
                  className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="bg-card border-border hover:border-primary/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 rounded bg-primary/10 text-primary">
                            <Icon className="w-4 h-4" />
                          </div>
                          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.duration}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium mb-1">{exp.organization}</p>
                        <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                        <ul className="space-y-1">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
