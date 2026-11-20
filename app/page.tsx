import Image from "next/image";

// Shared Tailwind patterns keep the page spacing and technical labels consistent.
const container = "mx-auto w-full max-w-[1160px] px-5 sm:px-8";
const mono = "font-mono text-[10px] uppercase tracking-[0.04em]";
const button = "inline-flex items-center gap-2 rounded border border-[var(--border)] px-4 py-3 font-mono text-[11px]";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Single-page composition: navigation, presentation, work, experience and contact.
export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Fixed-height header gives every section a stable navigation entry point. */}
      <header className={`${container} flex h-[4.5rem] items-center justify-between border-b border-[var(--border)]`}>
        <a className="flex items-center gap-2.5 text-xs font-semibold" href="#top" aria-label="Guilherme Gomes, home">
          <span className="font-mono text-base font-semibold text-[var(--accent)]">g.g</span>
          <span>Guilherme Gomes</span>
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-3 sm:gap-7">
            <li className="hidden sm:block"><a className={`${mono} text-[var(--muted)] hover:text-[var(--foreground)]`} href="#expertise">Expertise</a></li>
            <li className="hidden sm:block"><a className={`${mono} text-[var(--muted)] hover:text-[var(--foreground)]`} href="#work">Work</a></li>
            <li className="hidden sm:block"><a className={`${mono} text-[var(--muted)] hover:text-[var(--foreground)]`} href="#about">About</a></li>
            <li><a className={`${mono} rounded border border-[var(--border)] px-3.5 py-2.5 text-[var(--foreground)]`} href="#contact">Let&apos;s talk ↗</a></li>
          </ul>
        </nav>
      </header>

      <main id="top">
        {/* Hero: the first viewport communicates who Guilherme is and what he does. */}
        <section className={`${container} grid items-center gap-12 py-16 sm:gap-16 sm:py-20 lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(18rem,.72fr)]`} aria-labelledby="hero-title">
          <div>
            <h1 className="max-w-[11ch] text-[clamp(2.75rem,6vw,5.25rem)] font-medium leading-[.98] tracking-[-.07em]" id="hero-title">Hello, My name is Guilherme Gomes</h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className={`${button} border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]`} href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className={`${button} bg-[var(--surface)]`} href={`${basePath}/resume.pdf`}>View résumé <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square min-h-72 overflow-hidden rounded bg-[linear-gradient(145deg,#f7f7fa_0%,#a5a5ad_45%,#222228_70%,#111116_100%)]" aria-label="Photo of Guilherme Gomes">
              <Image src={`${basePath}/eu.jpg`} alt="Guilherme Gomes" fill priority className="object-cover" />
            </div>
            <div className="rounded border border-[var(--border)] bg-[rgb(17_17_22_/_94%)] p-4 font-mono">
              <span className="float-right text-[9px] uppercase text-[var(--accent)]">Production</span>
              <span className={`${mono} text-[var(--muted)]`}>~/guilherme / portfolio</span>
              <p className="mt-3 text-[10px] text-[var(--foreground)]">$ build something meaningful</p>
              <p className="mt-2 text-[10px] text-[var(--muted)]">✓ Ideas → Interfaces → Infrastructure</p>
            </div>
          </div>
        </section>

        {/* A compact technology strip provides a quick scan of the core stack. */}
        <div className="border-y border-[var(--border)]">
          <div className={`${container} flex items-center justify-between gap-6 overflow-x-auto py-4 font-mono text-[10px] text-[var(--muted)]`}>
            <span>TypeScript</span><span>React &amp; Next.js</span><span>Node.js</span><span>PostgreSQL</span><span>C#</span>
          </div>
        </div>

        {/* Expertise cards explain the three capabilities behind the portfolio. */}
        <section className="border-t border-[var(--border)] py-20 sm:py-32" id="expertise" aria-labelledby="expertise-title">
          <div className={container}>
            <SectionHeading eyebrow="Expertise" title="The whole stack. The small details." index="" id="expertise-title" />
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard icon="▣" title="Front end." copy="Responsive, accessible interfaces with thoughtful interactions and performance built in." stack="React · Next.js · TypeScript · Tailwind CSS" />
              <InfoCard icon="▤" title="Back end." copy="Secure APIs and dependable data models that make complex products feel effortless." stack="Node.js · Python · PostgreSQL · REST · GraphQL · C# · SQL Server · MySQL" />
              <InfoCard icon="⌁" title="Delivery." copy="Tested code, repeatable deployments, and observability beyond the launch button." stack="Cloudflare · Docker · GitHub Actions · Vitest · Git · Firebase · Supabase" />
            </div>
          </div>
        </section>

        {/* Work is intentionally data-light: each ProjectCard can be replaced with real project content. */}
        <section className="border-t border-[var(--border)] py-20 sm:py-32" id="work" aria-labelledby="work-title">
          <div className={container}>
            <div>
              <p className={`${mono} mb-4 text-[var(--accent)]`}>Work</p>
              <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-medium leading-none tracking-[-.06em]" id="work-title">Ideas shipped into reality.</h2>
              <p className="mt-4 max-w-xl text-xs leading-6 text-[var(--muted)]">A few sample builds that connect thoughtful design with solid engineering. Each one solves a different kind of problem.</p>
            </div>
            <div className="grid gap-5">
              <ProjectCard name="ISTEC Space Manager" status="In development" copy="A platform that turns scattered data into clearer decisions." tags={["Laravel", "PostgreSQL", "Blade"]} imageUrl={`${basePath}/gestor-espacos.svg`} sourceUrl="https://github.com/Dev-GuilhermeGomes/Gestor-de-Reservas-de-Espacos-ISTEC" featured />
              <div className="grid gap-5 md:grid-cols-2">
                <ProjectCard
                  name="ProjetoFinalPWS"
                  status="Offline · Finished"
                  copy="Laravel application for managing games organized by studios, with a public studio page and dynamic game counts. Includes authentication, user profiles, a private dashboard, an external MySQL database connection and REST API integration."
                  tags={["Laravel", "Blade", "MySQL", "API REST"]}
                  imageUrl={`${basePath}/logo-game-studios-manager.png`}
                  sourceUrl="https://github.com/Dev-GuilhermeGomes/trabalhoFinal"
                />
                <ProjectCard
                  name="falltobook"
                  status="Being updated"
                  copy="Responsive digital library website with a searchable catalog, individual book pages and light/dark mode. The project is still in development."
                  tags={["React", "TypeScript", "Tailwind CSS", "Vite"]}
                  imageUrl={`${basePath}/falltobook-cover.svg`}
                  liveUrl="https://eldoria-1zm.pages.dev/"
                  sourceUrl="https://github.com/Dev-GuilhermeGomes/Eldoria"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About combines the personal profile with a chronological experience timeline. */}
        <section className="border-t border-[var(--border)] py-20 sm:py-32" id="about" aria-labelledby="about-title">
          <div className={`${container} grid gap-14 lg:grid-cols-[minmax(17rem,.85fr)_minmax(0,1.15fr)]`}>
            <div>
              <p className={`${mono} mb-5 text-[var(--accent)]`}>About Me</p>
              <Image src={`${basePath}/eu.jpg`} alt="Guilherme Gomes" width={144} height={144} className="mb-7 h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36" />
              <h2 className="max-w-[12ch] text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[.95] tracking-[-.06em]" id="about-title">Guilherme Figueiredo Gomes</h2>
              <div className="mt-5 max-w-md space-y-5 text-xs leading-6 text-[var(--muted)]">
                <p>I&apos;m a frontend-focused developer who has always been drawn to the visual, interactive side of software and websites. I&apos;m currently studying Software Development at ISTEC Porto, where I work mainly with React, Next.js, Laravel and Blade, and I enjoy picking up new languages and frameworks.</p>
                <p>My day-to-day is about learning new methodologies and technologies, including relational and non-relational databases. I&apos;m most comfortable with Agile and Scrum, but I also know how to work with Waterfall.</p>
                <p>I&apos;m currently looking for an internship in the Porto area (Leça da Palmeira, Matosinhos or Porto). If you&apos;re company is hiring, or you know someone who is, feel free to get in touch.</p>
              </div>
              <p className="mt-7 flex items-center gap-2 text-xs text-[var(--foreground)]"><span className="text-base text-[var(--accent)]">✣</span>Always learning. Always building.</p>
            </div>

            <div>
              <h3 className="mb-7 text-base font-medium sm:text-lg">The journey so far</h3>
              <div className="divide-y divide-[var(--border)]">
                <Experience year="2024" title="1SA Group-(MBIT) Internship" subtitle="Local Support, RMA & Technical Logistics Specialists" copy="I worked as an IT support technician, repairing equipment like PCs and smartphones, and managed RMAs based on the company&apos;s internal rules." mentor="Mentor: Sílvia" />
                <Experience year="2025" title="Loja-Enter - Internship" subtitle="Local Support" copy="I worked as an IT support technician, repairing equipment such as PCs, smartphones, tablets, and routers. This was one of my most valuable professional experiences, allowing me to significantly grow and develop my technical skills." mentor="Mentor(s): Paulo and Bruno" />
                <Experience year="ONGOING" title="Independent builder" subtitle="Side projects · Open source" copy="Exploring developer tools, contributing fixes, and learning by shipping small, useful products." />
              </div>
            </div>
          </div>
        </section>

        {/* Contact is the final conversion point and keeps the email visible without a form backend. */}
        <section className="border-t border-[var(--border)] py-20 sm:py-24" id="contact" aria-labelledby="contact-title">
          <div className={`${container} flex flex-col items-start justify-between gap-12 sm:flex-row sm:items-start`}>
            <div>
              <h2 className="text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-none tracking-[-.07em]" id="contact-title">Get in Touch</h2>
              <p className="mt-5 text-xs leading-6 text-[var(--muted)]">I&apos;d love to hear what you&apos;re working on.<br />The best way to reach me is directly by email.</p>
              <a className="mt-3 inline-block text-base text-[var(--accent)] sm:text-lg" href="mailto:Guilherme.FGgomes07@gmail.com">Guilherme.FGgomes07@gmail.com <span aria-hidden="true">↗</span></a>
            </div>
            <div className="min-w-52">
              <a className={`${button} border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]`} href="mailto:Guilherme.FGgomes07@gmail.com">Say hello <span aria-hidden="true">✉</span></a>
              <p className="mt-4 flex items-center gap-2 text-[10px] text-[var(--muted)]"><span className="text-[var(--accent)]">•</span> Open to the right opportunity</p>
              <div className="mt-4 flex gap-5 font-mono text-[10px] text-[var(--foreground)]"><a href="https://github.com" target="_blank" rel="noreferrer">Github ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal footer closes the page and provides a keyboard-friendly back-to-top link. */}
      <footer className={`${container} flex flex-col justify-between gap-8 border-t border-[var(--border)] py-6 font-mono text-[9px] text-[var(--subtle)] sm:flex-row`}><span>© 2026 Guilherme Gomes · Porto, Portugal.</span><span>Back to top <a className="text-[var(--accent)]" href="#top">↑</a></span></footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, index, id }: { eyebrow: string; title: string; index: string; id: string }) {
  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className={`${mono} mb-5 text-[var(--accent)]`}>{eyebrow}</p>
        <h2 className="max-w-[15ch] text-[clamp(2rem,4vw,3.25rem)] font-medium leading-none tracking-[-.06em]" id={id}>
          {title}
        </h2>
      </div>
      {index && <span className={`${mono} text-[var(--accent)]`}>{index}</span>}
    </div>
  );
}

function InfoCard({ icon, title, copy, stack }: { icon: string; title: string; copy: string; stack: string }) {
  return (
    <article className="min-h-56 rounded border border-[var(--border)] bg-[var(--surface)] p-5">
      <span className="font-mono text-lg text-[var(--accent)]">{icon}</span>
      <h3 className="mt-6 text-base font-medium">{title}</h3>
      <p className="mt-3 text-xs leading-5 text-[var(--muted)]">{copy}</p>
      <p className="mt-3 font-mono text-[9px] leading-4 text-[var(--accent)]">{stack}</p>
    </article>
  );
}

function ProjectCard({ name, status, copy, tags, dark = false, featured = false, imageUrl, liveUrl, sourceUrl }: { name: string; status: string; copy: string; tags: string[]; dark?: boolean; featured?: boolean; imageUrl?: string; liveUrl?: string; sourceUrl?: string }) {
  // Optional URLs keep cards reusable while allowing each project to expose its own repository.
  return (
    <article className={`overflow-hidden rounded border border-[var(--border)] bg-[var(--surface)] ${featured ? "md:grid md:grid-cols-[.8fr_1.2fr]" : ""}`}>
      <div className={`flex min-h-60 items-center overflow-hidden font-mono text-3xl ${imageUrl ? "bg-white" : `p-6 ${dark ? "bg-[#171320] text-[var(--accent)]" : "bg-[#dedee5] text-[#111116]"}`} ${featured ? "md:order-2 md:min-h-full" : ""}`}>
        {imageUrl ? <Image src={imageUrl} alt={`Project image for ${name}`} width={1260} height={420} className="h-full w-full object-contain" /> : name.toLowerCase()}
      </div>
      <div className={`p-5 sm:p-6 ${featured ? "md:order-1" : ""}`}>
        <p className={`${mono} mb-4 text-[var(--accent)]`}>{status}</p>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="mt-4 text-xs leading-7 text-[var(--muted)]">{copy}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li className="border border-[var(--border)] px-2 py-1 font-mono text-[9px] text-[var(--subtle)]" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-5 text-xs font-medium">
          <a className="text-[var(--foreground)] hover:text-[var(--accent)]" href={liveUrl ?? "#contact"} target={liveUrl ? "_blank" : undefined} rel={liveUrl ? "noreferrer" : undefined}>Live demo ↗</a>
          <a className="text-[var(--foreground)] hover:text-[var(--accent)]" href={sourceUrl ?? "#contact"} target={sourceUrl ? "_blank" : undefined} rel={sourceUrl ? "noreferrer" : undefined}>Source code ↗</a>
        </div>
      </div>
    </article>
  );
}

// Experience keeps timeline markup consistent and makes adding a new role one line of data.
function Experience({ year, title, subtitle, copy, mentor }: { year: string; title: string; subtitle: string; copy: string; mentor?: string }) {
  return (
    <article className="py-0 pb-6 pt-0 first:pt-0 sm:pb-7">
      <p className={`${mono} mb-2 text-[var(--accent)]`}>{year}</p>
      <h4 className="text-base font-medium">{title}</h4>
      <p className="mt-1 text-xs text-[var(--muted)]">{subtitle}</p>
      <p className="mt-2 max-w-2xl text-xs leading-6 text-[var(--muted)]">{copy}</p>
      {mentor && <p className="mt-1 text-xs text-[var(--muted)]">{mentor}</p>}
    </article>
  );
}
