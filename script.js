// ========================================
// Poyokuma-Lab - Script
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation ---
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Close nav on link click
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // --- Scroll Fade-in Animation ---
  const fadeTargets = document.querySelectorAll(
    '.section__label, .section__title, .about__text, .about__info, .card, .philosophy__item, .contact__desc, .btn--outline'
  );

  fadeTargets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  fadeTargets.forEach(el => observer.observe(el));

  // --- Header shadow on scroll ---
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 10) {
      header.style.boxShadow = '0 1px 12px rgba(0,0,0,0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastScroll = scrollY;
  }, { passive: true });
});
