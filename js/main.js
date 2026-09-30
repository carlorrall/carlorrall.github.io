// Fade elements in as they scroll into view.
// Any element with class="rv" starts hidden (see css/style.css) and gets
// the class "in" once at least 12% of it is visible on screen.

const revealElements = document.querySelectorAll('.rv');

if (!('IntersectionObserver' in window)) {
  // Very old browser: just show everything immediately
  revealElements.forEach((el) => el.classList.add('in'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((el) => observer.observe(el));
}
