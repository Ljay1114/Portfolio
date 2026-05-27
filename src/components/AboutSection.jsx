import { useState } from "react";

export default function AboutSection() {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  return (
    <section aria-label="About Lexel" className="py-section-gap bg-surface relative" id="about">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-7">
          <h2 className="font-section-title text-section-title mb-8 flex items-center gap-4"><span className="w-12 h-px bg-primary" />THE ARCHITECT</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">Passionate and AI-driven Developer with hands-on experience building automation tools, custom WordPress plugins, Website Development, and business systems using modern AI-assisted development workflows. Experienced in developing ticketing systems, lead generation platforms integrated with Google Maps API and Google Sheets, and dashboarding solutions for monitoring website health and system analytics.</p>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">Strong interest in leveraging Artificial Intelligence to accelerate software development, optimize workflows, and create scalable digital solutions. Continuously exploring emerging technologies, automation systems, and AI-powered development practices to deliver efficient and innovative results.</p>
        </div>
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <div className="tilt-card glass-card p-4 aspect-[4/5] relative overflow-hidden group" style={{ transform }} onMouseMove={handleMove} onMouseLeave={() => setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)")}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50" />
            <img alt="Lexel Jay Alejo Profile" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" src="Asssets/The Developer.png" />
            <div className="absolute top-8 right-8 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-bounce duration-1000 delay-100"><span className="material-symbols-outlined text-primary text-xl">javascript</span></div>
            <div className="absolute bottom-1/4 left-4 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-bounce duration-1000 delay-300"><span className="material-symbols-outlined text-tertiary text-xl">database</span></div>
            <div className="absolute top-1/2 -right-2 w-10 h-10 glass-card rounded-full flex items-center justify-center animate-bounce duration-1000 delay-500"><span className="material-symbols-outlined text-secondary text-xl">terminal</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
