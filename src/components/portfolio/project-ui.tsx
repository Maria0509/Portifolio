import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Image, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/portfolio";

export function TagList({ items }: { items: string[] }) {
  return <div className="flex flex-wrap gap-2">{items.map((item) => <Badge key={item} variant="outline" className="border-border bg-secondary/50 font-mono text-[11px] font-medium text-muted-foreground">{item}</Badge>)}</div>;
}

export function MediaPlaceholder({ label, large = false }: { label: string; large?: boolean }) {
  const isVideo = label.toLowerCase().includes("video") || label.toLowerCase().includes("gif");
  const Icon = isVideo ? Video : Image;
  return (
    <div className={cn("media-grid flex min-h-44 items-center justify-center border border-border bg-secondary/40 p-6 text-center", large && "min-h-72")} role="img" aria-label={`${label} placeholder`}>
      <div>
        <Icon className="mx-auto mb-3 size-5 text-primary" aria-hidden="true" />
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Media placeholder</p>
      </div>
    </div>
  );
}

export function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-2" aria-label={`System flow: ${steps.join(", then ")}`}>
      {steps.map((step, index) => (
        <li key={step} className="contents">
          <div className="flex min-h-14 items-center justify-between border border-border bg-background px-4 py-3">
            <span className="font-mono text-[10px] text-primary">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-right text-sm font-semibold text-foreground">{step}</span>
          </div>
          {index < steps.length - 1 && <ArrowDown className="mx-auto size-4 text-muted-foreground" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={cn("group grid overflow-hidden border border-border bg-card transition-transform duration-200 hover:-translate-y-1", project.featured && "lg:col-span-2 lg:grid-cols-[1.15fr_0.85fr]")}>
      <MediaPlaceholder label={project.media[0] ?? "Project image"} large={project.featured} />
      <div className="flex flex-col p-6 sm:p-8">
        <p className="font-mono text-xs text-primary">PROJECT {String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">{project.title}</h3>
        <p className="mt-2 text-sm font-medium text-muted-foreground">{project.subtitle}</p>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">{project.summary}</p>
        <div className="mt-6"><TagList items={project.areas} /></div>
        <Link to="/projects/$slug" params={{ slug: project.slug }} className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary">
          View Project <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
