export const metadata = {
  title: "Integrations - Open PRO",
  description: "Connect Linear, Notion and GitHub to Open PRO and get answers from every tool your team uses.",
};


export default function Integrations() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Integrations</h1>
            <p className="text-lg text-indigo-200/65">Open PRO reads the tools your team already works in, so an answer can draw on an issue, a spec and a pull request at once.</p>
          </div>
        </div>
      </div>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Linear</h2>
              <p className="text-lg text-indigo-200/65">Issues, projects and roadmaps arrive as they change. Ask what shipped last week or what blocks a release, and the answer links to the issues behind it.</p>
              <p className="text-lg text-indigo-200/65">Setup takes a minute from the <a className="font-medium text-indigo-500" href="https://linear.app/integrations">Linear integrations page</a>, and Open PRO only reads the teams you pick.</p>
            </div>
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">Notion</h2>
              <p className="text-lg text-indigo-200/65">Specs, research notes and meeting docs are read with their page permissions, so nobody sees an answer drawn from a page they cannot open.</p>
              <p className="text-lg text-indigo-200/65">Connect a workspace once and every new page is read within minutes. See how in the <a className="font-medium text-indigo-500" href="https://www.notion.com/integrations">Notion integrations gallery</a>.</p>
            </div>
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">GitHub</h2>
              <p className="text-lg text-indigo-200/65">Pull requests and their reviews tell Open PRO what changed and why. Ask why a decision was made and get the pull request that made it.</p>
              <p className="text-lg text-indigo-200/65">Install the app on the repositories you choose from <a className="font-medium text-indigo-500" href="https://github.com/marketplace">GitHub Marketplace</a>; nothing is written back to your code.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
