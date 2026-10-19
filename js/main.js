// Showreel: click (or Enter) to load the video
const frame = document.getElementById('showreel');
if (frame) {
  const load = () => {
    const src = frame.dataset.video;
    if (!src) { alert('Add your video embed link in index.html (data-video).'); return; }
    const sep = src.includes('?') ? '&' : '?';
    frame.innerHTML = `<iframe src="${src}${sep}autoplay=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Showreel"></iframe>`;
    frame.style.cursor = 'default';
    frame.removeEventListener('click', load);
  };
  frame.addEventListener('click', load);
  frame.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); load(); } });
}

// Project modal
const modal = document.getElementById('modal');
if (modal) {
  const box = modal.querySelector('.box');
  const close = () => { modal.classList.remove('open'); box.querySelector('iframe')?.remove(); };
  document.querySelectorAll('.card[data-video]').forEach(card => {
    card.addEventListener('click', () => {
      const src = card.dataset.video;
      if (!src) { alert('Add your video embed link in projects.html (data-video).'); return; }
      const sep = src.includes('?') ? '&' : '?';
      const f = document.createElement('iframe');
      f.src = src + sep + 'autoplay=1';
      f.allow = 'autoplay; fullscreen; picture-in-picture';
      f.allowFullscreen = true;
      box.appendChild(f);
      modal.classList.add('open');
    });
  });
  modal.addEventListener('click', e => { if (e.target === modal || e.target.tagName === 'BUTTON') close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
