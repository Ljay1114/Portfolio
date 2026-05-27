import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useGsapAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (document.querySelector("#logo-svg path")) {
      gsap.to("#logo-svg path", { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" });
    }
    if (document.querySelector(".stagger-reveal")) {
      gsap.to(".stagger-reveal", { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power4.out", delay: 0.5 });
    }

    [
      { id: "stat-years", target: 4 },
      { id: "stat-projects", target: 24 },
      { id: "stat-clients", target: 12 },
      { id: "stat-uptime", target: 99 }
    ].forEach((stat) => {
      const statElement = document.getElementById(stat.id);
      if (!statElement) return;

      gsap.to(`#${stat.id}`, {
        innerText: stat.target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: { trigger: `#${stat.id}`, start: "top 90%" },
        onUpdate() {
          const [target] = this.targets();
          if (!target) return;
          if (stat.id === "stat-uptime") {
            target.innerText = `${Math.round(Number(target.innerText) || 0)}%`;
          }
        }
      });
    });
    if (document.querySelector("#timeline-progress") && document.querySelector("#experience")) {
      gsap.to("#timeline-progress", {
        height: "100%",
        scrollTrigger: { trigger: "#experience", start: "top 30%", end: "bottom 80%", scrub: 1 }
      });
    }
    const journeyCards = gsap.utils.toArray(".journey-card");
    if (journeyCards.length) {
      journeyCards.forEach((card) => {
        gsap.to(card, { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: card, start: "top 80%" } });
      });
    }

    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
}
