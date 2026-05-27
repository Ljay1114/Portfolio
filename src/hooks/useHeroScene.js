import { useEffect } from "react";
import * as THREE from "three";

export default function useHeroScene(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pointLight = new THREE.PointLight(0x3cd7ff, 2);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);
    const icosahedron = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2, 1),
      new THREE.MeshPhongMaterial({ color: 0x3cd7ff, wireframe: true, transparent: true, opacity: 0.6 })
    );
    scene.add(icosahedron);
    const cubes = Array.from({ length: 5 }, () => {
      const cube = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), new THREE.MeshPhongMaterial({ color: 0x7b61ff }));
      cube.orbitRadius = 3 + Math.random();
      cube.orbitSpeed = 0.005 + Math.random() * 0.01;
      cube.orbitAngle = Math.random() * Math.PI * 2;
      scene.add(cube);
      return cube;
    });
    const gridHelper = new THREE.GridHelper(20, 20, 0x1e2a3a, 0x1e2a3a);
    gridHelper.position.y = -3;
    scene.add(gridHelper);
    const starsGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000 * 3; i += 1) posArray[i] = (Math.random() - 0.5) * 20;
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const starsMesh = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ size: 0.005, color: 0xffffff }));
    scene.add(starsMesh);
    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      icosahedron.rotation.y += 0.002;
      icosahedron.rotation.x += 0.001;
      cubes.forEach((cube) => {
        cube.orbitAngle += cube.orbitSpeed;
        cube.position.x = Math.cos(cube.orbitAngle) * cube.orbitRadius;
        cube.position.z = Math.sin(cube.orbitAngle) * cube.orbitRadius;
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });
      starsMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    animate();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      starsGeometry.dispose();
    };
  }, [canvasRef]);
}
