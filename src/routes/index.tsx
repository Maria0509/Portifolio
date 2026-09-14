import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard, TagList } from "@/components/portfolio/project-ui";
import { interests, profileLinks, projects, skillGroups } from "@/data/portfolio";

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

function PlaceholderAction({ icon: Icon, label }: { icon: typeof Github; label: string }) {
  return <Button variant="outline" disabled title={`${label} link to be added`}><Icon />{label}</Button>;
}

function Index() {
  return (
    <main>
      <section className="border-b border-border" aria-labelledby="intro-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_280px] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-primary">Engineering Portfolio · Portugal</p>
            <h1 id="intro-title" className="max-w-4xl text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">Maria Eduarda</h1>
            <p className="mt-5 text-lg font-medium text-foreground sm:text-xl">Electrical &amp; Computer Engineering MSc Student</p>
            <p className="mt-3 font-mono text-xs leading-6 text-muted-foreground sm:text-sm">Embedded Systems <span className="text-primary">•</span> Robotics <span className="text-primary">•</span> TinyML <span className="text-primary">•</span> Cyber-Physical Systems</p>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">I build intelligent systems that connect software, sensors and hardware.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><a href="#projects">View Projects <ArrowDown /></a></Button>
              {profileLinks.github ? <Button asChild variant="outline"><a href={profileLinks.github}>GitHub <Github /></a></Button> : <PlaceholderAction icon={Github} label="GitHub" />}
              {profileLinks.linkedin ? <Button asChild variant="outline"><a href={profileLinks.linkedin}>LinkedIn <Linkedin /></a></Button> : <PlaceholderAction icon={Linkedin} label="LinkedIn" />}
              {profileLinks.cv ? <Button asChild variant="outline"><a href={profileLinks.cv}>Download CV <Download /></a></Button> : <PlaceholderAction icon={Download} label="Download CV" />}
            </div>
          </div>
          <div className="border-l-2 border-primary pl-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Current status</p>
            <p className="mt-2 text-sm leading-6 text-foreground">Open to internships, graduate opportunities and engineering roles.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 border-b border-border py-20 sm:py-24" aria-labelledby="projects-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="section-kicker">01 / Selected Work</p><h2 id="projects-title" className="section-title">Featured Projects</h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Embedded hardware, sensing, robotics and connected systems—from physical integration to deployed inference.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-b border-border py-20" aria-labelledby="about-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div><p className="section-kicker">02 / Profile</p><h2 id="about-title" className="section-title">About</h2></div>
          <div className="max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
            <p>I am currently pursuing a Master’s degree in Electrical and Computer Engineering at NOVA School of Science and Technology, following a Bachelor’s degree in Biomedical Technology.</p>
            <p>My work focuses on embedded systems, robotics, TinyML, cyber-physical systems and intelligent sensing—particularly projects that combine hardware, sensors, software and real-time decision-making.</p>
            <p>My experience includes C/C++, Python, Arduino-based development, embedded machine learning, sensor integration, Git and IoT-related technologies.</p>
            <p className="border-l-2 border-primary pl-5 font-medium text-foreground">Currently looking for internships, graduate opportunities and engineering roles in embedded systems, robotics, IoT and related fields.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 border-b border-border py-20" aria-labelledby="skills-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="section-kicker">03 / Technical Toolkit</p><h2 id="skills-title" className="section-title">Skills</h2>
          <div className="mt-10 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => <article key={group.title} className="border-b border-r border-border p-6"><h3 className="font-mono text-xs uppercase tracking-widest text-primary">{group.title}</h3><div className="mt-5"><TagList items={group.skills} /></div></article>)}
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-20 border-b border-border py-20" aria-labelledby="education-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="section-kicker">04 / Academic Background</p><h2 id="education-title" className="section-title">Education</h2>
          <div className="mt-10 border-t border-border">
            <article className="grid gap-4 border-b border-border py-8 md:grid-cols-[180px_1fr]"><p className="font-mono text-xs text-primary">2025 — PRESENT</p><div><h3 className="text-xl font-semibold text-foreground">MSc in Electrical and Computer Engineering</h3><p className="mt-2 text-sm text-muted-foreground">NOVA School of Science and Technology · Universidade NOVA de Lisboa</p><div className="mt-5"><TagList items={["Embedded Systems", "Robotics", "Cyber-Physical Systems", "Control", "Intelligent Systems"]} /></div></div></article>
            <article className="grid gap-4 border-b border-border py-8 md:grid-cols-[180px_1fr]"><p className="font-mono text-xs text-muted-foreground">DATES TO ADD</p><div><h3 className="text-xl font-semibold text-foreground">BSc in Biomedical Technology</h3><p className="mt-2 text-sm text-muted-foreground">Instituto Politécnico de Bragança</p><p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">This combination of Biomedical Technology and Electrical &amp; Computer Engineering supports an interdisciplinary interest in intelligent sensing and biomedical embedded systems.</p></div></article>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14" aria-labelledby="interests-title">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-[240px_1fr] md:items-center"><div><p className="section-kicker">05 / Current Interests</p><h2 id="interests-title" className="mt-2 text-xl font-semibold text-foreground">Currently Exploring</h2></div><TagList items={interests} /></div>
      </section>

      <section id="contact" className="scroll-mt-20 py-20 sm:py-24" aria-labelledby="contact-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="section-kicker">06 / Contact</p><h2 id="contact-title" className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">Let’s Connect</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">I am open to internships, graduate opportunities and engineering roles in embedded systems, robotics, IoT, TinyML and related fields.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {profileLinks.email ? <Button asChild><a href={`mailto:${profileLinks.email}`}><Mail />Email</a></Button> : <PlaceholderAction icon={Mail} label="Email" />}
            {profileLinks.linkedin ? <Button asChild variant="outline"><a href={profileLinks.linkedin}><Linkedin />LinkedIn</a></Button> : <PlaceholderAction icon={Linkedin} label="LinkedIn" />}
            {profileLinks.github ? <Button asChild variant="outline"><a href={profileLinks.github}><Github />GitHub</a></Button> : <PlaceholderAction icon={Github} label="GitHub" />}
            {profileLinks.cv ? <Button asChild variant="outline"><a href={profileLinks.cv}><Download />Download CV</a></Button> : <PlaceholderAction icon={Download} label="Download CV" />}
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 text-primary" /> Portugal</p>
        </div>
      </section>
    </main>
  );
}
