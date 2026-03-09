"use client"

import { Mail, MessageCircle, MapPin, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shivateja1602@gmail.com",
    href: "mailto:shivateja1602@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "Call / WhatsApp",
    value: "+91 6305189399",
    href: "https://wa.me/916305189399",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dharmavaram, Andhra Pradesh, India",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/shivateja1602",
    username: "@shivateja1602",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shiva-teja-nune-puttaparthi-cloud-engineer",
    username: "Shiva Teja Nune Puttaparthi",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
            {contactInfo.map((item) => {
              const Icon = item.icon
              const content = (
                <Card className="bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              )

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="bg-card border-border hover:border-primary/50 transition-all">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{social.label}</p>
                        <p className="text-foreground font-medium">{social.username}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              )
            })}

            <div className="pt-6">
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="mailto:shivateja1602@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send Me a Message
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            Designed and built by Siva Teja Nune Puttaparthi
          </p>
        </div>
      </div>
    </section>
  )
}
