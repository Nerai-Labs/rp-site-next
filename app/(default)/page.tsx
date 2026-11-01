export const metadata = {
  title: "Open PRO: answers from your team's files",
  description: "Open PRO reads your team's files and answers product questions in one line, with sources.",
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
              <p className="text-lg text-indigo-200/65">Connect Linear, Notion and GitHub in a minute, and Open PRO keeps their answers in one place. See the <a href="https://linear.app/">Linear</a> integration.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Questions</h2>
              <h3>Does Open PRO train on our files?</h3>
              <p className="text-lg text-indigo-200/65">No. Your files stay in your workspace and are never used to train a model.</p>
              <h3>Can we try it first?</h3>
              <p className="text-lg text-indigo-200/65">Yes, the Starter plan is free for one project.</p>
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
