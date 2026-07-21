"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const timelineEntries = [
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
    title: "B.Tech in Computer Science & Technology",
    organization: "Madanapalle Institute of Technology & Science",
    location: "Madanapalle, Andhra Pradesh",
    duration: "2022 - May 2026",
    description: ["CGPA: 8.57/10", "Relevant Coursework: Data Structures, AWS Cloud, Web Development"],
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
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Fresher profile with a strong academic foundation in software engineering and modern web technologies.
          </p>
        </motion.div>

        <div className="w-full space-y-12">
          {timelineEntries.map((exp, index) => {
            const Icon = exp.type === "work" ? Briefcase : GraduationCap

            return (
              <motion.div
                key={exp.title + exp.organization}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-8 md:pl-10 border-l-2 border-border"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-foreground" />
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground pointer-events-none">
                    <Calendar className="w-3 h-3 mr-1" />
                    {exp.duration}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                <p className="text-lg text-primary font-medium mb-4">{exp.organization} | {exp.location}</p>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
