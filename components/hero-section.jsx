"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, MessageCircle, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const profileImageSrc = `${import.meta.env.BASE_URL}images/profile.png`

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20">
      <div
        className={`flex flex-col items-center gap-8 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Profile Image */}
        <div className="relative">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
            <img
              src={profileImageSrc}
              alt="Shiva Teja Nune Puttaparthi"
              className="object-cover object-top w-full h-full"
              width={208}
              height={208}
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background" />
        </div>

        {/* Name and Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Shiva Teja Nune Puttaparthi
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-4">
            Cloud Engineer & Software Developer
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Aspiring software engineer with expertise in cloud technologies, generative AI, and frontend development.
            Building real-world solutions with React, AWS, and modern web technologies.
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>Dharmavaram, Andhra Pradesh, India</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shivateja1602"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/shiva-teja-nune-puttaparthi-cloud-engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:shivateja1602@gmail.com"
            className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/916305189399"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("experience")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to experience section"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </button>
    </section>
  )
}
