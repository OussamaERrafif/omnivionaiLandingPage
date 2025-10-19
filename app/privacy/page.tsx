import Header from "@/components/landing/header"
import Footer from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"

export default function PrivacyPage() {
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
              <h1 className="text-3xl font-bold text-foreground mb-8 text-center">Privacy Policy</h1>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-6">
                  We collect information you provide directly to us, such as when you create an account,
                  use our AI research services, or contact us for support. This may include your name,
                  email address, and research queries.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-6">
                  We use the information we collect to provide, maintain, and improve our AI research
                  services, process transactions, send you technical notices and support messages,
                  and respond to your comments and questions.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties
                  without your consent, except as described in this policy. We may share your information
                  only in limited circumstances, such as with service providers who help us operate our platform.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-6">
                  We implement appropriate security measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction. Your research queries and
                  results are processed securely using industry-standard encryption.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground mb-6">
                  We retain your personal information for as long as necessary to provide our services
                  and fulfill the purposes outlined in this privacy policy, unless a longer retention
                  period is required by law.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-6">
                  You have the right to access, update, or delete your personal information. You may
                  also object to or restrict certain processing of your information. To exercise these
                  rights, please contact us using the information provided below.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">7. Cookies</h2>
                <p className="text-muted-foreground mb-6">
                  We use cookies and similar technologies to enhance your experience, analyze usage,
                  and assist in our marketing efforts. You can control cookie preferences through
                  your browser settings.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
                <p className="text-muted-foreground mb-6">
                  We may update this privacy policy from time to time. We will notify you of any
                  material changes by posting the new policy on this page and updating the "last updated" date.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this privacy policy, please contact us at:
                  <br />
                  Email: privacy@aideepsearch.com
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