import { useEffect } from "react"
import Lenis from "lenis"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"

export default function App() {
  useEffect(() => {
    if (import.meta.env.MODE === "test") {
      return undefined
    }

    const lenisInstance = new Lenis({
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
    })
    window.__lenis = lenisInstance

    return () => {
      lenisInstance.destroy()
      delete window.__lenis
    }
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip">
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(240,74,0,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.12),transparent_40%)]" />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  )
}
