const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let drops = [];

const characters = 'AI010101CYBERDATASECUREAUTOMATE';

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  const columns = Math.floor(width / 20);
  drops = Array(columns).fill(1);
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(5, 13, 24, 0.12)';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(29, 212, 255, 0.75)';
  ctx.font = '16px "Space Grotesk"';

  drops.forEach((y, i) => {
    const text = characters.charAt(Math.floor(Math.random() * characters.length));
    const x = i * 20;
    ctx.fillText(text, x, y * 20);
    drops[i] = y * 20 > height && Math.random() > 0.96 ? 0 : y + 1;
  });

  requestAnimationFrame(drawMatrix);
}

resizeCanvas();
drawMatrix();
window.addEventListener('resize', resizeCanvas);

// Intersection animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.panel, .service-card, .project-card, .holo-card, .pill').forEach((el, idx) => {
  el.style.setProperty('--delay', `${idx * 60}ms`);
  observer.observe(el);
});

// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId !== '#') {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Contact form mock submit
const form = document.querySelector('.contact__form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
  const existing = form.querySelector('.success');
  if (existing) existing.remove();
  form.insertAdjacentHTML('beforeend', '<p class="success">Thanks! We will reach out shortly.</p>');
});
