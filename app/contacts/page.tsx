import Header from "@/components/landing/header"
import Footer from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"
import { Mail, MessageSquare, Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactsPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        <Header />

        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions about AI Deep Search? Need support, or want to share feedback?
                We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Methods */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Methods</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        For general inquiries, support requests, or technical issues.
                      </p>
                      <a
                        href="mailto:support@aideepsearch.com"
                        className="text-primary hover:underline text-sm"
                      >
                        support@aideepsearch.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Inquiries</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        For partnerships, enterprise solutions, or business opportunities.
                      </p>
                      <a
                        href="mailto:business@aideepsearch.com"
                        className="text-primary hover:underline text-sm"
                      >
                        business@aideepsearch.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Security Reports</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        For security vulnerabilities or security-related concerns.
                      </p>
                      <a
                        href="mailto:security@aideepsearch.com"
                        className="text-primary hover:underline text-sm"
                      >
                        security@aideepsearch.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media & Community */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Community & Social</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Check out our open-source projects and contribute to the community.
                      </p>
                      <a
                        href="https://github.com/aideepsearch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        github.com/aideepsearch
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Twitter className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Twitter</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Follow us for updates, tips, and AI research insights.
                      </p>
                      <a
                        href="https://twitter.com/aideepsearch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        @aideepsearch
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Connect with us professionally and stay updated on company news.
                      </p>
                      <a
                        href="https://linkedin.com/company/aideepsearch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        linkedin.com/company/aideepsearch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Additional Information</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Response Times</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Support inquiries: Within 24 hours</li>
                    <li>• Technical issues: Within 12 hours</li>
                    <li>• Security reports: Within 4 hours</li>
                    <li>• Business inquiries: Within 48 hours</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Office Hours</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                    <li>• Saturday: 10:00 AM - 4:00 PM EST</li>
                    <li>• Sunday: Closed</li>
                    <li>• Emergency support: 24/7</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  For urgent security matters or system outages, please include "URGENT" in your email subject line.
                  We prioritize these messages and respond as quickly as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}