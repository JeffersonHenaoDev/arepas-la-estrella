// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Horizontal wheel scroll for the product gallery
const galleryTrack = document.querySelector('.gallery-track');

if (galleryTrack) {
  galleryTrack.addEventListener(
    'wheel',
    (evt) => {
      if (Math.abs(evt.deltaY) <= Math.abs(evt.deltaX)) return;
      evt.preventDefault();
      galleryTrack.scrollLeft += evt.deltaY;
    },
    { passive: false }
  );
}
