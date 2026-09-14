# Maria Eduarda Engineering Portfolio

## Goal
Build a fast, accessible, English-language portfolio that lets recruiters identify Maria’s engineering focus, strongest projects, technical experience, education, and contact options within 30 seconds.

## Information architecture
- Create a compact home page with a short introduction, recruiter-focused summary, four featured project previews, grouped skills, education, current interests, and contact details.
- Keep projects above the longer supporting sections so visitors reach technical work quickly.
- Give each project a dedicated detail page linked from its preview card, with focused descriptions, contribution lists, technologies, diagrams, and media placeholders.
- Add a restrained shared navigation and footer across the site.

## Visual direction
- Use a neutral light engineering aesthetic with one restrained accent color, strong sans-serif typography, subtle borders, square-to-lightly-rounded geometry, and generous whitespace.
- Make project imagery and architecture diagrams the primary visual elements.
- Use small technical tags, restrained hover feedback, and minimal motion with reduced-motion support.
- Avoid gradients, glass effects, skill bars, decorative animation, oversized introductions, and promotional language.

## Home page
- Compact introduction with Maria’s name, degree, focus areas, statement, and four clear actions.
- Concise About text and opportunity-status line.
- Featured Projects grid with Erradisnore visually prioritized.
- Skills grouped exactly by the supplied categories, without proficiency claims.
- Education timeline using the supplied institutions and focus areas; show an editable placeholder for the missing BSc dates.
- Small “Currently Exploring” section.
- Contact section with Portugal and editable placeholders for email, LinkedIn, GitHub, and CV.

## Project pages
- **Erradisnore:** lead project treatment, verified contribution list, model accuracy shown as approximately 86%, on-device inference notes, architecture flow, and device/model/demo placeholders.
- **IoT Monitoring System:** containerized acquisition architecture, carefully scoped ownership wording, course context, and diagram/dashboard/infrastructure placeholders.
- **Autonomous Line-Following Robot:** emphasize assembly, electronics, sensor integration, calibration, and straightforward embedded control rather than advanced software.
- **UR5 Robot Monitoring Platform:** show the supplied simulation-to-cloud architecture and integrations without adding unsupported outcomes.
- Every page will include its own metadata, project-specific title and description, and a clear path back to all projects.

## Maintainability and content safeguards
- Store project, skill, education, and link content in simple structured data so it is easy to update.
- Use reusable project cards, tags, architecture-flow blocks, media placeholders, and link controls.
- Keep all unknown URLs and media as clearly labeled placeholders; do not invent contact details, repositories, CV files, dates, metrics, or results.
- Use the supplied wording as the factual source, editing only for concise presentation and consistency.

## Accessibility and quality
- Use semantic landmarks and heading order, visible keyboard focus, descriptive labels, sufficient contrast, and accessible link text.
- Ensure diagrams have text equivalents and media placeholders include meaningful descriptions.
- Verify desktop and mobile layouts, navigation, project links, text wrapping, and the short path from introduction to projects.
- Add the requested page title and meta description, plus unique metadata for each project page.

## Technical details
- Implement with the existing TanStack Start and Tailwind setup.
- Define all colors, typography, borders, and spacing through shared semantic design tokens.
- Use local CSS/HTML diagrams and placeholders for speed; no external image hotlinks or unnecessary animation packages.
- Preserve a fast static experience with no database or login requirement.
