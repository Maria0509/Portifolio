import { Link } from "@tanstack/react-router";
import { Languages, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language";
import type { StringKey } from "@/i18n/strings";

const navItems: { key: StringKey; href: string }[] = [
  { key: "nav.projects", href: "/#projects" },
  { key: "nav.skills", href: "/#skills" },
  { key: "nav.education", href: "/#education" },
  { key: "nav.contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-mono text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          ME<span className="text-primary">/</span>ENG
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => <a key={item.key} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{t(item.key)}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={toggleLanguage} className="font-mono text-xs" aria-label={t("lang.toggle")}>
            <Languages aria-hidden="true" />
            {language === "en" ? "PT" : "EN"}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? t("nav.close") : t("nav.open")}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border px-5 py-3 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.key} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground">{t(item.key)}</a>)}
        </nav>
      )}
    </header>
  );
}
