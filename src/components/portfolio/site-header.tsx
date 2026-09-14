import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-mono text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          ME<span className="text-primary">/</span>ENG
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => <a key={item.label} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>)}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border px-5 py-3 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground">{item.label}</a>)}
        </nav>
      )}
    </header>
  );
}
