import { interests, projects, skillGroups, type Project } from "./portfolio";
import { interestsPt, projectsPt, skillGroupsPt } from "./portfolio.pt";
import { useLanguage } from "@/i18n/language";

export function usePortfolioContent() {
  const { language } = useLanguage();
  const isPt = language === "pt";
  return {
    projects: isPt ? projectsPt : projects,
    skillGroups: isPt ? skillGroupsPt : skillGroups,
    interests: isPt ? interestsPt : interests,
  };
}

export function useProject(slug: string): Project | undefined {
  const { projects: list } = usePortfolioContent();
  return list.find((project) => project.slug === slug);
}
