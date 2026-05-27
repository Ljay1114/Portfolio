export default function ExperienceSection() {
  return (
    <section aria-label="Career Journey" className="py-section-gap bg-surface-void" id="experience">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-section-title text-section-title text-center mb-24 uppercase">THE TIMELINE</h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-border-steel timeline-axis">
            <div className="w-full h-0 bg-primary shadow-[0_0_10px_#3cd7ff]" id="timeline-progress" />
          </div>
          <div className="space-y-section-gap relative">
            <div className="flex flex-col md:flex-row items-start justify-between w-full journey-card opacity-0">
              <div className="w-full md:w-[45%] text-right pr-0 md:pr-12 overflow-visible">
                <span className="font-code text-primary mb-2 block leading-normal">2026 January - March</span>
                <h3 className="font-card-header text-2xl  !leading-[1.75] pb-1.5 overflow-visible">Plugin Developer Intern</h3>
                <br></br>
                <p className="text-on-surface-variant !leading-[1.75] pb-1 overflow-visible">Developed custom WordPress plugins and internal business systems for ArkiDevs, including a ticketing platform, dashboard management system, and automated lead generation solution with REST API integrations, database management, and admin workflow automation.</p>
              </div>
              <div className="relative z-10 w-4 h-4 rounded-full bg-surface-void border-2 border-primary cyan-glow my-8 md:my-0 shrink-0" />
              <div className="w-full md:w-[45%] pl-0 md:pl-12 hidden md:block" />
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between w-full journey-card opacity-0">
              <div className="w-full md:w-[45%] pr-0 md:pr-12 hidden md:block" />
              <div className="relative z-10 w-4 h-4 rounded-full bg-surface-void border-2 border-tertiary shadow-[0_0_10px_#00fdb0] my-8 md:my-0 shrink-0" />
              <div className="w-full md:w-[45%] pl-0 md:pl-12 overflow-visible">
                <span className="font-code text-tertiary mb-2 block leading-normal">2022 - 2026</span>
                <h3 className="font-card-header text-2xl mb-4 !leading-[1.75] pb-1.5 overflow-visible">College IT Student</h3>
                <p className="text-on-surface-variant !leading-[1.75] pb-1 overflow-visible">Developed responsive web applications and Systems focusing on database optimization and UI refinement.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between w-full journey-card opacity-0">
              <div className="w-full md:w-[45%] text-right pr-0 md:pr-12 overflow-visible">
                <span className="font-code text-secondary mb-2 block leading-normal">2020 - 2022</span>
                <h3 className="font-card-header text-2xl mb-4 !leading-[1.75] pb-1.5 overflow-visible">Senior igh ICT Student</h3>
                <p className="text-on-surface-variant !leading-[1.75] pb-1 overflow-visible">Learned basic programming, web development, and computer system maintenance through school activities and projects.</p>
              </div>
              <div className="relative z-10 w-4 h-4 rounded-full bg-surface-void border-2 border-secondary shadow-[0_0_10px_#c9bfff] my-8 md:my-0 shrink-0" />
              <div className="w-full md:w-[45%] pl-0 md:pl-12 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
