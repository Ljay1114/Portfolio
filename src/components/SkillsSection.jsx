import { useRef } from "react";
import useSkillsSphere from "../hooks/useSkillsSphere";

export default function SkillsSection() {
  const skillsCanvasRef = useRef(null);
  useSkillsSphere(skillsCanvasRef);

  return (
    <section aria-label="Technical Skills" className="py-section-gap bg-surface-void overflow-hidden" id="skills">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <h2 className="font-section-title text-section-title mb-4">ENGINEERING STACK</h2>
          <p className="font-label-caps text-label-caps tracking-widest text-primary uppercase">Core Competencies & Tooling</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
            <canvas id="skills-sphere" ref={skillsCanvasRef} />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 rounded-full border border-primary/20 animate-ping" />
            </div>
          </div>
          <div className="space-y-12">
            <div className="skill-group">
              <h3 className="font-card-header text-card-header mb-6 leading-relaxed text-primary">Frontend Architecture</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-primary/60 text-primary bg-primary/10 rounded-lg">HTML</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-primary/60 text-primary bg-primary/10 rounded-lg">CSS</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-primary/60 text-primary bg-primary/10 rounded-lg">JavaScript</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-primary/60 text-primary bg-primary/10 rounded-lg">React</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-primary/60 text-primary bg-primary/10 rounded-lg">Flutter/Dart</span>
              </div>
            </div>
            <div className="skill-group">
              <h3 className="font-card-header text-card-header mb-6 leading-relaxed text-tertiary">Backend Systems</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-tertiary/60 text-tertiary bg-tertiary/10 rounded-lg">Firebase</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-tertiary/60 text-tertiary bg-tertiary/10 rounded-lg">PHP</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-tertiary/60 text-tertiary bg-tertiary/10 rounded-lg">REST API</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-tertiary/60 text-tertiary bg-tertiary/10 rounded-lg">SQLLITE</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-tertiary/60 text-tertiary bg-tertiary/10 rounded-lg">MYSQL</span>
              </div>
            </div>
            <div className="skill-group">
              <h3 className="font-card-header text-card-header mb-6 leading-relaxed text-secondary">System Design</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-secondary/60 text-secondary bg-secondary/10 rounded-lg">UI/UX</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-secondary/60 text-secondary bg-secondary/10 rounded-lg">Lovable</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-secondary/60 text-secondary bg-secondary/10 rounded-lg">Bolt</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-secondary/60 text-secondary bg-secondary/10 rounded-lg">FIGMA</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-secondary/60 text-secondary bg-secondary/10 rounded-lg">ChartJS</span>
                <span className="font-label-caps text-sm tracking-wide px-4 py-2 border border-secondary/60 text-secondary bg-secondary/10 rounded-lg">Google Stitch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
