import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArchitectureDiagram, MediaPlaceholder, TagList } from "@/components/portfolio/project-ui";
import { profileLinks, projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Project Not Found | Maria Eduarda" }, { name: "robots", content: "noindex" }] };
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} | Maria Eduarda` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.title} | Maria Eduarda` },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const isRobot = project.slug === "line-following-robot";
  const isIot = project.slug === "iot-monitoring-system";
  return (
    <main>
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft className="size-4" /> All projects</Link>
          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-primary">Project Study</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-foreground sm:text-6xl">{project.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">{project.subtitle}</p>
          <div className="mt-7"><TagList items={project.areas} /></div>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">{project.description}</p>
          {project.context && <p className="mt-5 max-w-3xl border-l-2 border-primary pl-4 text-sm text-foreground">{project.context}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            {profileLinks.github ? <Button asChild><a href={profileLinks.github}><Github />View on GitHub</a></Button> : <Button disabled title="Project repository link to be added"><Github />View on GitHub</Button>}
            <Button asChild variant="outline"><a href="#technical-details">Technical Details</a></Button>
          </div>
        </div>
      </header>

      <section className="border-b border-border py-16 sm:py-20" aria-labelledby="overview-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div><MediaPlaceholder label={project.media[0]} large /></div>
          <div><p className="section-kicker">System Overview</p><h2 id="overview-title" className="section-title">Architecture</h2><div className="mt-8"><ArchitectureDiagram steps={project.architecture} /></div></div>
        </div>
      </section>

      <section id="technical-details" className="scroll-mt-20 border-b border-border py-16 sm:py-20" aria-labelledby="details-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="section-kicker">Technical Details</p><h2 id="details-title" className="section-title">{project.contribution ? "My Contribution" : "Implemented Scope"}</h2>
          {isRobot && <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">The project’s strongest area was physical integration and electronic assembly, supported by straightforward embedded control logic.</p>}
          {isIot && <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">Designed around containerized services and integrated as part of the academic project.</p>}
          <ul className="mt-9 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {(project.contribution ?? project.highlights ?? []).map((item) => <li key={item} className="flex gap-3 border-b border-border py-3 text-sm text-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}
          </ul>
        </div>
      </section>

      {project.machineLearning && (
        <section className="border-b border-border py-16" aria-labelledby="ml-title"><div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_320px]"><div><p className="section-kicker">Embedded Machine Learning</p><h2 id="ml-title" className="section-title">On-device classification</h2><p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{project.machineLearning}</p><ul className="mt-6 space-y-3">{project.highlights?.map((item) => <li key={item} className="flex items-center gap-3 text-sm text-foreground"><Check className="size-4 text-primary" />{item}</li>)}</ul></div><div className="flex min-h-48 items-center border border-primary bg-secondary/40 p-7"><div><p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Model result</p><p className="mt-3 text-3xl font-semibold text-foreground">{project.metric}</p></div></div></div></section>
      )}

      {!project.contribution && project.highlights && (
        <section className="border-b border-border py-16" aria-labelledby="scope-title"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="section-kicker">System Capabilities</p><h2 id="scope-title" className="section-title">Integrated elements</h2><ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">{project.highlights.map((item) => <li key={item} className="flex gap-3 border-b border-border py-3 text-sm text-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}</ul></div></section>
      )}

      <section className="border-b border-border py-16" aria-labelledby="tech-title"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="section-kicker">Technical Toolkit</p><h2 id="tech-title" className="section-title">Technologies</h2><div className="mt-8"><TagList items={project.technologies} /></div></div></section>

      <section className="py-16" aria-labelledby="media-title"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="section-kicker">Project Media</p><h2 id="media-title" className="section-title">Documentation placeholders</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{project.media.slice(1).map((item) => <MediaPlaceholder key={item} label={item} />)}</div><div className="mt-10"><Button asChild variant="outline"><Link to="/" hash="projects"><ArrowLeft />Back to projects</Link></Button></div></div></section>
    </main>
  );
}
