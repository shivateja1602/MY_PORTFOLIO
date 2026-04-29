"use client"

import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
    title: "Introduction to Jira",
    issuer: "Simplilearn",
    date: "July 2025",
    type: "certification",
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
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications & Badges</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise in cloud technologies and AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certs.map((cert) => (
                <Card key={cert.title} className="bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        {cert.logo && (
                          <img src={cert.logo} alt={cert.issuer} className="w-8 h-8 object-contain shrink-0 mt-1" />
                        )}
                        <div>
                          <h4 className="font-medium text-foreground">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary shrink-0">
                        {cert.date}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Skill Badges
            </h3>
            <div className="space-y-4">
              {badges.map((badge) => (
                <a key={badge.title} href={badge.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="bg-card border-border hover:border-primary/50 transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-medium text-foreground">{badge.title}</h4>
                          <p className="text-sm text-muted-foreground">{badge.issuer}</p>
                        </div>
                        <Badge variant="secondary" className="bg-secondary text-secondary-foreground shrink-0">
                          {badge.date}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
