// Scroll Reveal Animation using Intersection Observer
const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger 50px before the element enters the viewport
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  revealElements.forEach(element => {
    observer.observe(element);
  });
};

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', initScrollReveal);

// Also initialize after React renders (in case DOM is ready before)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}
