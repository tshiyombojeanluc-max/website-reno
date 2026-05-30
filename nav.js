// Shared nav scroll behaviour
const nav = document.getElementById('nav');

if (nav && !nav.classList.contains('scrolled')) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

function toggleMobileMenu() {
  const existing = document.getElementById('mobileMenu');
  if (existing) { existing.remove(); return; }

  const menu = document.createElement('div');
  menu.id = 'mobileMenu';
  menu.style.cssText = `
    position: fixed; top: 64px; left: 0; right: 0; z-index: 99;
    background: #fafaf8; border-bottom: 1px solid #e7e5e4;
    padding: 24px 20px; display: flex; flex-direction: column; gap: 16px;
  `;

  const links = [
    ['index.html', 'Home'],
    ['projects.html', 'Projects'],
    ['services.html', 'Services'],
    ['process.html', 'Process'],
    ['testimonials.html', 'Testimonials'],
    ['contact.html', 'Contact'],
  ];

  links.forEach(([href, label]) => {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = label;
    a.style.cssText = 'font-size:10px; letter-spacing:0.2em; text-transform:uppercase; text-decoration:none; color:#78716c;';
    menu.appendChild(a);
  });

  document.body.appendChild(menu);
}
