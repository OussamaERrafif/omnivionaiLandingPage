import Header from "@/components/landing/header"
import Footer from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"

export default function SecurityPage() {
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
              <h1 className="text-3xl font-bold text-foreground mb-8 text-center">Security Overview</h1>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">🔒 Our Security Commitment</h2>
                <p className="text-muted-foreground mb-6">
                  At AI Deep Search, security is fundamental to everything we do. We employ multiple layers
                  of protection to ensure your data remains safe, your research queries are secure, and
                  our AI systems operate with integrity.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">🛡️ AI Security Measures</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Prompt Injection Protection</h3>
                    <p className="text-muted-foreground text-sm">
                      All AI agents are hardened against prompt injection attacks. Our systems are designed
                      to treat user input as data only, preventing malicious attempts to override system instructions.
                    </p>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Output Validation</h3>
                    <p className="text-muted-foreground text-sm">
                      Every AI response undergoes strict validation to ensure it meets our quality and
                      security standards. Structured output formats prevent unexpected or harmful content.
                    </p>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Content Integrity</h3>
                    <p className="text-muted-foreground text-sm">
                      Our AI systems are trained to prioritize factual, verifiable information from trusted
                      sources. Hallucination prevention measures ensure research results are grounded in reality.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-foreground mb-4">🔐 Data Protection</h2>
                <p className="text-muted-foreground mb-6">
                  We implement industry-standard encryption for all data transmission and storage.
                  Your research queries, personal information, and search results are protected using
                  TLS 1.3 encryption and secure database practices.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">🌐 Infrastructure Security</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Cloud Security</h3>
                    <p className="text-muted-foreground text-sm">
                      Deployed on secure cloud infrastructure with enterprise-grade security controls,
                      regular security audits, and compliance with industry standards.
                    </p>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Access Controls</h3>
                    <p className="text-muted-foreground text-sm">
                      Strict access controls ensure that only authorized personnel can access systems
                      and data. Multi-factor authentication and role-based access control are standard.
                    </p>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Monitoring & Logging</h3>
                    <p className="text-muted-foreground text-sm">
                      Continuous monitoring and comprehensive logging allow us to detect and respond
                      to security incidents quickly. All access and activities are logged for audit purposes.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-foreground mb-4">📊 Trust & Verification</h2>
                <p className="text-muted-foreground mb-6">
                  Our research results include trust scores and source verification. We prioritize
                  content from academic institutions, government sources, and verified publications
                  to ensure the highest quality and reliability of information.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">🚨 Incident Response</h2>
                <p className="text-muted-foreground mb-6">
                  We have established incident response procedures to handle security events effectively.
                  In the unlikely event of a security incident, we will notify affected users promptly
                  and take immediate steps to mitigate any potential impact.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">🔄 Regular Security Updates</h2>
                <p className="text-muted-foreground mb-6">
                  Our security measures evolve continuously. We regularly update our systems, review
                  security practices, and implement the latest security technologies to stay ahead
                  of emerging threats.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4">📞 Security Contact</h2>
                <p className="text-muted-foreground">
                  If you discover a security vulnerability or have security concerns, please contact us immediately:
                  <br />
                  Email: security@aideepsearch.com
                  <br />
                  We appreciate your help in keeping our platform secure for all users.
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