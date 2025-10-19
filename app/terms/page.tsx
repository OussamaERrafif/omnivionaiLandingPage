import Header from "@/components/landing/header"
import Footer from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        <Header />

        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 shadow-lg">
              <h1 className="text-3xl font-bold text-foreground mb-8 text-center">Terms of Service</h1>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-6">
                  By accessing and using AI Deep Search ("the Service"), you accept and agree to be bound
                  by the terms and provision of this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground mb-6">
                  AI Deep Search is an AI-powered research assistant that helps users conduct comprehensive
                  research by analyzing web content, generating insights, and providing citations from
                  trusted sources. The service uses advanced AI technology to deliver fast, verifiable results.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground mb-6">
                  To access certain features of the Service, you may be required to create an account.
                  You are responsible for maintaining the confidentiality of your account credentials
                  and for all activities that occur under your account.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
                <p className="text-muted-foreground mb-6">
                  You agree to use the Service only for lawful purposes and in accordance with these Terms.
                  You shall not use the Service to conduct research or generate content that is illegal,
                  harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or invasive of
                  another's privacy.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">5. AI Content and Limitations</h2>
                <p className="text-muted-foreground mb-6">
                  The Service uses artificial intelligence to generate research results. While we strive
                  for accuracy, AI-generated content may contain errors or inaccuracies. You acknowledge
                  that AI Deep Search is a research tool and should not be used as a substitute for
                  professional advice or expert consultation.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground mb-6">
                  The Service and its original content, features, and functionality are owned by AI Deep Search
                  and are protected by international copyright, trademark, patent, trade secret, and other
                  intellectual property laws. You may not reproduce, distribute, modify, or create derivative
                  works without our express written permission.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">7. Privacy</h2>
                <p className="text-muted-foreground mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs
                  your use of the Service, to understand our practices regarding the collection and use
                  of your personal information.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">8. Termination</h2>
                <p className="text-muted-foreground mb-6">
                  We may terminate or suspend your account and access to the Service immediately, without
                  prior notice or liability, for any reason whatsoever, including without limitation if
                  you breach the Terms.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">9. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground mb-6">
                  The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations
                  or warranties of any kind, express or implied, as to the operation of the Service or
                  the information, content, or materials included therein.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">
                  In no event shall AI Deep Search be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising out of or related to your use of the Service.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground mb-6">
                  We reserve the right to modify or replace these Terms at any time. If a revision is
                  material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at:
                  <br />
                  Email: legal@aideepsearch.com
                  <br />
                  Address: [Your Business Address]
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