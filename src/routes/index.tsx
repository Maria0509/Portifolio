import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard, TagList } from "@/components/portfolio/project-ui";
import { profileLinks } from "@/data/portfolio";
import { usePortfolioContent } from "@/data/use-portfolio-content";
import { useLanguage } from "@/i18n/language";

const description = "Electrical and Computer Engineering MSc student focused on embedded systems, robotics, TinyML, IoT and cyber-physical systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maria Eduarda | Embedded Systems & Robotics" },
      { name: "description", content: description },
      { property: "og:title", content: "Maria Eduarda | Embedded Systems & Robotics" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function PlaceholderAction({ icon: Icon, label, pending }: { icon: typeof Github; label: string; pending: string }) {
  return <Button variant="outline" disabled title={`${label} — ${pending}`}><Icon />{label}</Button>;
}

function Index() {
  const { t } = useLanguage();
  const { projects, skillGroups, interests } = usePortfolioContent();
  const pending = t("link.pending");

  return (
    <main>
      <section className="border-b border-border" aria-labelledby="intro-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_280px] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-primary">{t("hero.kicker")}</p>
            <h1 id="intro-title" className="max-w-4xl text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">Maria Eduarda</h1>
            <p className="mt-5 text-lg font-medium text-foreground sm:text-xl">{t("hero.role")}</p>
            <p className="mt-3 font-mono text-xs leading-6 text-muted-foreground sm:text-sm">{t("skills.title") === "Skills" ? "Embedded Systems" : "Sistemas Embebidos"} <span className="text-primary">•</span> {t("skills.title") === "Skills" ? "Robotics" : "Robótica"} <span className="text-primary">•</span> TinyML <span className="text-primary">•</span> {t("skills.title") === "Skills" ? "Cyber-Physical Systems" : "Sistemas Ciberfísicos"}</p>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">{t("hero.tagline")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><a href="#projects">{t("hero.cta")} <ArrowDown /></a></Button>
              {profileLinks.github ? <Button asChild variant="outline"><a href={profileLinks.github}>{t("link.github")} <Github /></a></Button> : <PlaceholderAction icon={Github} label={t("link.github")} pending={pending} />}
              {profileLinks.linkedin ? <Button asChild variant="outline"><a href={profileLinks.linkedin}>{t("link.linkedin")} <Linkedin /></a></Button> : <PlaceholderAction icon={Linkedin} label={t("link.linkedin")} pending={pending} />}
              {profileLinks.cv ? <Button asChild variant="outline"><a href={profileLinks.cv}>{t("link.cv")} <Download /></a></Button> : <PlaceholderAction icon={Download} label={t("link.cv")} pending={pending} />}
            </div>
          </div>
          <div className="border-l-2 border-primary pl-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t("hero.statusLabel")}</p>
            <p className="mt-2 text-sm leading-6 text-foreground">{t("hero.status")}</p>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 border-b border-border py-20 sm:py-24" aria-labelledby="projects-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="section-kicker">{t("projects.kicker")}</p><h2 id="projects-title" className="section-title">{t("projects.title")}</h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">{t("projects.intro")}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-b border-border py-20" aria-labelledby="about-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div><p className="section-kicker">{t("about.kicker")}</p><h2 id="about-title" className="section-title">{t("about.title")}</h2></div>
          <div className="max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <p className="border-l-2 border-primary pl-5 font-medium text-foreground">{t("about.p4")}</p>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 border-b border-border py-20" aria-labelledby="skills-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="section-kicker">{t("skills.kicker")}</p><h2 id="skills-title" className="section-title">{t("skills.title")}</h2>
          <div className="mt-10 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => <article key={group.title} className="border-b border-r border-border p-6"><h3 className="font-mono text-xs uppercase tracking-widest text-primary">{group.title}</h3><div className="mt-5"><TagList items={group.skills} /></div></article>)}
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-20 border-b border-border py-20" aria-labelledby="education-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="section-kicker">{t("education.kicker")}</p><h2 id="education-title" className="section-title">{t("education.title")}</h2>
          <div className="mt-10 border-t border-border">
            <article className="grid gap-4 border-b border-border py-8 md:grid-cols-[180px_1fr]"><p className="font-mono text-xs text-primary">{t("education.present")}</p><div><h3 className="text-xl font-semibold text-foreground">{t("education.msc")}</h3><p className="mt-2 text-sm text-muted-foreground">{t("education.mscSchool")}</p><div className="mt-5"><TagList items={skillGroups[1]?.skills.slice(0, 5) ?? []} /></div></div></article>
            <article className="grid gap-4 border-b border-border py-8 md:grid-cols-[180px_1fr]"><p className="font-mono text-xs text-primary">{t("education.datesToAdd")}</p><div><h3 className="text-xl font-semibold text-foreground">{t("education.bsc")}</h3><p className="mt-2 text-sm text-muted-foreground">{t("education.bscSchool")}</p><p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">{t("education.note")}</p></div></article>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14" aria-labelledby="interests-title">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-[240px_1fr] md:items-center"><div><p className="section-kicker">{t("interests.kicker")}</p><h2 id="interests-title" className="mt-2 text-xl font-semibold text-foreground">{t("interests.title")}</h2></div><TagList items={interests} /></div>
      </section>

      <section id="contact" className="scroll-mt-20 py-20 sm:py-24" aria-labelledby="contact-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="section-kicker">{t("contact.kicker")}</p><h2 id="contact-title" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">{t("contact.title")}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{t("contact.body")}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {profileLinks.email ? <Button asChild><a href={`mailto:${profileLinks.email}`}><Mail />{t("link.email")}</a></Button> : <PlaceholderAction icon={Mail} label={t("link.email")} pending={pending} />}
            {profileLinks.linkedin ? <Button asChild variant="outline"><a href={profileLinks.linkedin}><Linkedin />{t("link.linkedin")}</a></Button> : <PlaceholderAction icon={Linkedin} label={t("link.linkedin")} pending={pending} />}
            {profileLinks.github ? <Button asChild variant="outline"><a href={profileLinks.github}><Github />{t("link.github")}</a></Button> : <PlaceholderAction icon={Github} label={t("link.github")} pending={pending} />}
            {profileLinks.cv ? <Button asChild variant="outline"><a href={profileLinks.cv}><Download />{t("link.cv")}</a></Button> : <PlaceholderAction icon={Download} label={t("link.cv")} pending={pending} />}
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 text-primary" /> Portugal</p>
        </div>
      </section>
    </main>
  );
}
