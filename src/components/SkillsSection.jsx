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
              <h3 className="font-card-header text-card-header mb-6 flex justify-between items-baseline leading-relaxed">
                Frontend Architecture
              </h3>
              <div className="w-full h-1 bg-border-steel relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-primary cyan-glow w-0" style={{ animation: "fillProgress 1.5s ease-out forwards", width: "90%" }} />
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-primary/30 text-primary bg-primary/5">HTML</span>
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-primary/30 text-primary bg-primary/5">CSS</span>
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-primary/30 text-primary bg-primary/5">JavaScript</span>
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-primary/30 text-primary bg-primary/5">React</span>
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-primary/30 text-primary bg-primary/5">Flutter/Dart</span>
              </div>
            </div>
            <div className="skill-group">
              <h3 className="font-card-header text-card-header mb-6 flex justify-between items-baseline leading-relaxed">
                Backend Systems
              </h3>
              <div className="w-full h-1 bg-border-steel relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-tertiary w-0" style={{ animation: "fillProgress 1.5s ease-out forwards", width: "85%" }} />
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-tertiary/30 text-tertiary bg-tertiary/5">Firebase</span>
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-tertiary/30 text-tertiary bg-tertiary/5">PHP</span>
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-tertiary/30 text-tertiary bg-tertiary/5">REST API</span>
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-tertiary/30 text-tertiary bg-tertiary/5">SQLLITE</span>
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-tertiary/30 text-tertiary bg-tertiary/5">MYSQL</span>
              </div>
            </div>
            <div className="skill-group">
              <h3 className="font-card-header text-card-header mb-6 flex justify-between items-baseline leading-relaxed">
                Developer Tools
              </h3>
              <div className="w-full h-1 bg-border-steel relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-secondary w-0" style={{ animation: "fillProgress 1.5s ease-out forwards", width: "80%" }} />
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-secondary/30 text-secondary bg-secondary/5">Cursor</span>
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-secondary/30 text-secondary bg-secondary/5">AntiGravity</span>      
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-secondary/30 text-secondary bg-secondary/5">Codex</span>          
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-secondary/30 text-secondary bg-secondary/5">WindSurf</span>   
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-secondary/30 text-secondary bg-secondary/5">AmazonQ</span>   
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-secondary/30 text-secondary bg-secondary/5">Lovable</span>
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-secondary/30 text-secondary bg-secondary/5">Bolt</span>
                <span className="font-label-caps text-xs tracking-tighter px-3 py-1 border border-secondary/30 text-secondary bg-secondary/5">Google Stitch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
