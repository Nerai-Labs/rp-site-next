export const metadata = {
  title: "Open PRO: answers from your team's files",
  description: "Open PRO reads your team's specs, tickets and research and answers product questions in one line, with the source beside it.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Works with the tools you have</h2>
              <p className="text-lg text-indigo-200/65">Connect Linear, Notion and GitHub in a minute. Open PRO reads issues, docs and pull requests as they change, so an answer is never older than the work behind it.</p>
              <p className="text-lg text-indigo-200/65">Permissions follow each tool: a person only sees answers drawn from pages they can already open. See how the <a href="https://linear.app/integrations">Linear integration</a> keeps roadmaps and answers in sync.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Questions product teams ask</h2>
              <h3>Does Open PRO train a model on our files?</h3>
              <p className="text-lg text-indigo-200/65">No. Your files stay in your workspace and are only read to answer your team&apos;s questions. Nothing is used to train a model.</p>
              <h3>Can we try it before we pay?</h3>
              <p className="text-lg text-indigo-200/65">Yes. The Starter plan is free for one project and three seats, for as long as you need it.</p>
              <h3>How long does setup take?</h3>
              <p className="text-lg text-indigo-200/65">Most teams connect their first tool and ask a first question in under ten minutes.</p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Open PRO",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web"
      }) }} />
    </>
  );
}
