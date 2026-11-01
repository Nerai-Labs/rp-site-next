export const metadata = {
  title: "Pricing - Open PRO",
  description:
    "Open PRO plans for product teams: start free, then pay per seat when your team grows.",
};

import Cta from "@/components/cta";

export default function Pricing() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Plans for teams of every size
              </h1>
              <p className="text-xl text-indigo-200/65">
                Start free with your first project, then pay per seat. Every
                plan runs on{" "}
                <a className="text-indigo-300 underline" href="https://vercel.com/">
                  Vercel
                </a>{" "}
                and keeps your files in your own workspace.
              </p>
            </div>
            <div className="mx-auto max-w-3xl pb-8 text-center">
              <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
                Pick a plan
              </h2>
              <p className="text-lg text-indigo-200/65">
                Every plan includes unlimited viewers and the{" "}
                <a className="text-indigo-300 underline" href="https://slack.com/">
                  Slack
                </a>{" "}
                integration.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
              <article>
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Starter
                </h3>
                <p className="text-indigo-200/65">
                  One project and three seats, free for as long as you need.
                </p>
              </article>
              <article>
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Team
                </h3>
                <p className="text-indigo-200/65">
                  Unlimited projects and roles for every member, at $12 per
                  seat a month.
                </p>
              </article>
              <article>
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Enterprise
                </h3>
                <p className="text-indigo-200/65">
                  Single sign-on, audit logs and a named contact.{" "}
                  <a className="text-indigo-300 underline" href="/rp-site-next/signin/">
                    Talk to sales
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
