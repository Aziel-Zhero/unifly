// js/gsapAnimations.js
export function animateConfirmCard() {
  const container = document.getElementById('cardContainer');
  const btn = document.getElementById('voltarHomeCard');
  const title = document.querySelector('#confirmCard > h2');

  // Timeline GSAP para animação
  const tl = gsap.timeline();

  tl.from(title, { duration: 0.6, y: 40, opacity: 0, ease: "power3.out" })
    .from(container, { duration: 0.8, y: 80, opacity: 0, ease: "power3.out" }, "-=0.4")
    .from(btn, { duration: 0.5, opacity: 0, ease: "power1.out" }, "-=0.3");
}
