/* ============================================================
   PuntoCom – script.js
   Interactividad: tabs de planes + animaciones de entrada
   ============================================================ */

/* ── TABS DE TECNOLOGÍA ──────────────────────────────────────
   Alterna entre los paneles "por aire" y "fibra óptica".
   Se llama desde los botones del HTML: onclick="switchTab('aire')"
──────────────────────────────────────────────────────────── */
function switchTab(type) {
  const tabAire   = document.getElementById('tab-aire');
  const tabFibra  = document.getElementById('tab-fibra');
  const panelAire  = document.getElementById('panel-aire');
  const panelFibra = document.getElementById('panel-fibra');

  if (type === 'aire') {
    tabAire.className  = 'tab-btn active-aire';
    tabFibra.className = 'tab-btn';
    panelAire.classList.add('active');
    panelFibra.classList.remove('active');
  } else {
    tabFibra.className = 'tab-btn active-fibra';
    tabAire.className  = 'tab-btn';
    panelFibra.classList.add('active');
    panelAire.classList.remove('active');
  }
}

/* ── ANIMACIONES DE ENTRADA (Intersection Observer) ─────────
   Las tarjetas aparecen con fade+slide-up al entrar en vista.
   Afecta a: .plan-card, .stat-card y .tl-item (línea de tiempo)
──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.plan-card, .stat-card, .tl-item').forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });

});
