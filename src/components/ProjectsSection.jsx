const projects = [
  {
    title: "HIDENGEN BLOGSITE",
    year: "2024",
    description: "A comprehensive academic management system featuring real-time enrollment modules, grade tracking with data visualization, and an automated scheduling engine built on Next.js.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    image: "Asssets/HidenGen.png",
    href: "https://hiden-genn.netlify.app/",
    accent: "text-primary"
  },
  {
    title: "THINK'C",
    year: "2024",
    description: "An offline, gamified learning tool for Grades 4–6 that combines Math, Science, and Language lessons with eco-health concepts, improving engagement, motivation, and accessibility for Filipino pupils.",
    tags: ["Flutter", "Dart", "SqlLite"],
    image: "Asssets/Step6SelectLesson.jpg",
    href: "https://hiden-genn.netlify.app/",
    accent: "text-tertiary"
  },
  {
    title: "LEAD GENERATION AUTOMATION",
    year: "2026",
    description: "This is a standalone WordPress plugin for ArkiDevs that streamlines outbound lead prospecting by collecting potential client data from public sources, organizing qualified leads in a database, syncing them with Google Sheets, and providing a dashboard to manage outreach pipelines.",
    tags: ["PHP", "MySQL", "JavaScript", "REST API"],
    image: "Asssets/Dashboard-‹-LeadGen-—-WordPress.png",
    href: "#",
    accent: "text-secondary"
  },
  {
    title: "TICKETING SYSTEM",
    year: "2026",
    description: "A modernized WordPress support and ticket management plugin for ArkiDevs that enables customers to submit and manage support tickets, while agents and administrators can track issues, manage ticket workflows, monitor support hours, log work time, and handle customer support operations through the WordPress admin dashboard.",
    tags: ["PHP", "MySQL", "JavaScript", "REST API"],
    image: "Asssets/Support-Tickets-‹-RafWillD-—-WordPress.png",
    href: "#",
    accent: "text-secondary"
  }
];

export default function ProjectsSection() {
  return (
    <section aria-label="Featured Projects" className="py-section-gap bg-surface" id="work">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-section-title text-section-title mb-16">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {projects.map((project) => (
            <a key={project.title} className="glass-card group cursor-pointer overflow-hidden block" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <div className="aspect-video relative overflow-hidden">
                {project.image.startsWith("http") ? (
                  <iframe className="w-full h-full border-0" src={project.image} title={project.title} />
                ) : (
                  <img alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={project.image} />
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-card-header text-xl ${project.accent}`}>{project.title}</h3>
                  <span className="font-code text-xs text-muted border border-border-steel px-2 py-1">{project.year}</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-4">{project.description}</p>
                <div className="flex gap-4 flex-wrap">
                  {project.tags.map((tag) => <span key={tag} className="font-label-caps text-[12px] tracking-widest text-muted uppercase">{tag}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
