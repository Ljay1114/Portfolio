import { useEffect } from "react";
import * as THREE from "three";

export default function useSkillsSphere(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return undefined;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2.5;
    const group = new THREE.Group();
    const skills = ["React", "JavaScript", "Node", "Three.js", "Tailwind", "Docker", "SQL", "Git", "Figma", "Sass", "PHP", "Python"];
    skills.forEach((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      const textCanvas = document.createElement("canvas");
      textCanvas.width = 256;
      textCanvas.height = 128;
      const ctx = textCanvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#3cd7ff";
        ctx.font = "Bold 40px Barlow Condensed";
        ctx.textAlign = "center";
        ctx.fillText(skill.toUpperCase(), 128, 64);
      }
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(textCanvas) }));
      sprite.position.set(Math.cos(theta) * Math.sin(phi), Math.sin(theta) * Math.sin(phi), Math.cos(phi));
      sprite.scale.set(0.6, 0.3, 1);
      group.add(sprite);
    });
    scene.add(group);
    const onResize = () => {
      const size = canvas.parentElement.clientWidth;
      renderer.setSize(size, size);
    };
    onResize();
    window.addEventListener("resize", onResize);
    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      group.rotation.y += 0.005;
      group.rotation.x += 0.002;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, [canvasRef]);
}
