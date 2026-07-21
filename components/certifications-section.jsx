"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "AI for All: From Basics to GenAI Practice",
    issuer: "NVIDIA",
    date: "April 22, 2026",
    type: "certification",
    logo: "/images/nvidia-logo.svg",
  },
  {
    title: "Python Fundamentals for Beginners",
    issuer: "Great Learning",
    date: "October 2023",
    type: "certification",
  },
  {
    title: "Get started with Jira",
    issuer: "Coursera Project Network",
    date: "July 2025",
    type: "certification",
    href: "",
  },
  {
    title: "Introduction to Generative AI using AWS",
    issuer: "Udacity",
    date: "July 2025",
    type: "certification",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Skillbuilder",
    date: "September 2025",
    type: "certification",
  },
  {
    title: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google Cloud",
    date: "September 2024",
    type: "badge",
    href: "https://www.credly.com/users/shiva-teja.6521e6e9/badges#credly",
  },
  {
    title: "AWS Educate Machine Learning Foundations",
    issuer: "AWS Educate",
    date: "July 2025",
    type: "badge",
    href: "https://www.credly.com/users/shiva-teja.6521e6e9/badges#credly",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "August 2025",
    type: "badge",
    href: "https://www.credly.com/users/shiva-teja.6521e6e9/badges#credly",
  },
]

export function CertificationsSection() {
  const certs = certifications.filter((c) => c.type === "certification")
  const badges = certifications.filter((c) => c.type === "badge")

  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Certifications & Badges</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise in cloud technologies and AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </motion.h3>
            <div className="space-y-4">
              {certs.map((cert, index) => (
                <motion.div 
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  className="flex items-start justify-between gap-4 p-5 rounded-2xl hover:bg-secondary/40 transition-colors border border-transparent hover:border-border"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {cert.logo ? (
                      <img src={cert.logo} alt={cert.issuer} className="w-10 h-10 object-contain shrink-0 mt-1" loading="lazy" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-lg text-foreground leading-tight mb-1">{cert.title}</h4>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium shrink-0 hidden sm:block">
                    {cert.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <Award className="w-6 h-6 text-primary" />
              Skill Badges
            </motion.h3>
            <div className="space-y-4">
              {badges.map((badge, index) => (
                <motion.a 
                  key={badge.title} 
                  href={badge.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  className="block group"
                >
                  <div className="flex items-start justify-between gap-4 p-5 rounded-2xl hover:bg-secondary/40 transition-colors border border-transparent hover:border-border">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors flex items-center gap-2 leading-tight mb-1">
                        {badge.title}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-muted-foreground">{badge.issuer}</p>
                    </div>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium shrink-0 hidden sm:block">
                      {badge.date}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
