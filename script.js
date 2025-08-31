// script.js
gsap.registerPlugin(ScrollTrigger);

// Images tilt on mouse move
document.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  gsap.to(".men img", { rotationY: x, rotationX: -y, transformPerspective: 800, transformOrigin: "center", duration: 0.5 });
  gsap.to(".women img", { rotationY: x, rotationX: -y, transformPerspective: 800, transformOrigin: "center", duration: 0.5 });
});

// Buttons floating effect
document.querySelectorAll(".button a").forEach(btn => {
  gsap.to(btn, { y: "-=10", repeat: -1, yoyo: true, ease: "sine.inOut", duration: 2 });

  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.3, backgroundColor: "#fff", color: "#000", duration: 0.3 });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, backgroundColor: "rgba(0,0,0,0.5)", color: "#fff", duration: 0.3 });
  });
});

// Scroll animation
gsap.utils.toArray(".common").forEach((section, i) => {
  gsap.from(section, {
    y: i % 2 === 0 ? 150 : -150,
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
});

