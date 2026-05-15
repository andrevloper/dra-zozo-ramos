document.addEventListener('DOMContentLoaded', () => {

  /* SMOOTH SCROLL */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const navH = document.querySelector('.nav')?.offsetHeight || 58;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
      document.getElementById('mobile-menu')?.classList.remove('open');
    });
  });

  /* MOBILE MENU */
  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('mobile-menu')?.classList.toggle('open');
  });

  /* ACTIVE NAV */
  const ids = ['inicio','midia','servicos','ebooks','sobre','contato','artigos'];
  const navAs = document.querySelectorAll('.nav-links a[data-section]');
  function tick() {
    const y = window.scrollY + 70;
    let cur = ids[0];
    ids.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top + window.scrollY <= y) cur = id; });
    navAs.forEach(a => a.classList.toggle('active', a.dataset.section === cur));
  }
  window.addEventListener('scroll', tick, { passive: true });
  tick();

  /* TESTIMONIALS */
  const T = [
    { t: 'A consulta com a Dra. Zozo Ramos mudou completamente a saúde do meu gato. Profissional extremamente competente e atenciosa!', a: 'Joana R.' },
    { t: 'Minha cachorra estava com sérios problemas. Com o plano da Dra. Zozo Ramos, se recuperou em semanas!', a: 'Carlos M.' },
    { t: 'Abordagem personalizada faz toda a diferença. Minha gata está radiante!', a: 'Ana L.' },
    { t: 'Profissional incrível! Transformou a alimentação do meu golden retriever.', a: 'Pedro S.' },
    { t: 'Atendimento humanizado e resultado visível em poucas semanas. Recomendo!', a: 'Carla T.' },
  ];
  let cur = 0;
  const txt  = document.getElementById('depo-text');
  const auth = document.getElementById('depo-author');
  const dots = document.querySelectorAll('.dot');

  window.setT = i => {
    if (!txt) return;
    txt.style.opacity = auth.style.opacity = '0';
    setTimeout(() => { txt.textContent = T[i].t; auth.textContent = T[i].a; txt.style.opacity = auth.style.opacity = '1'; cur = i; }, 280);
    dots.forEach((d, x) => d.classList.toggle('active', x === i));
  };
  setInterval(() => setT((cur + 1) % T.length), 5000);

});