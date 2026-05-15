document.addEventListener('DOMContentLoaded', () => {

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const navH = document.querySelector('.nav')?.offsetHeight || 72;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
      document.getElementById('mobile-menu')?.classList.remove('open');
    });
  });

  /* ── MOBILE MENU ── */
  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('mobile-menu')?.classList.toggle('open');
  });

  /* ── NAV SCROLL SHADOW ── */
  const nav = document.getElementById('nav');
  const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── ACTIVE NAV ── */
  const sectionIds = ['inicio','midia','servicos','sobre','ebooks','cursos','artigos','lead','contato'];
  const navAs = document.querySelectorAll('.nav-links a[data-section]');

  function updateActiveNav() {
    const y = window.scrollY + 90;
    let cur = sectionIds[0];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top + window.scrollY <= y) cur = id;
    });
    navAs.forEach(a => a.classList.toggle('active', a.dataset.section === cur));
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 75);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => revealObs.observe(el));

  /* ── COUNTER ANIMATION ── */
  function animateCounter(el, target) {
    const dur = 2000;
    const step = target / (dur / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = Math.floor(cur).toLocaleString('pt-BR');
      if (cur >= target) clearInterval(t);
    }, 16);
  }

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const statsObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-count]').forEach(el => {
            animateCounter(el, parseInt(el.dataset.count));
          });
          statsObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statsObs.observe(heroStats);
  }

  /* ── LEAD FORM ── */
  document.getElementById('lead-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    if (!validateForm(this)) return;
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Guia enviado! Verifique seu e-mail ✓';
      btn.style.background = '#22968c';
      this.reset();
      setTimeout(() => {
        btn.textContent = 'Quero o guia gratuito!';
        btn.style.background = '';
        btn.disabled = false;
      }, 5000);
    }, 1500);
  });

  /* ── CONTATO FORM ── */
  document.getElementById('contato-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    if (!validateForm(this)) return;
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Mensagem enviada! Entrarei em contato em breve ✓';
      btn.style.background = '#22968c';
      this.reset();
      setTimeout(() => {
        btn.textContent = 'Enviar mensagem →';
        btn.style.background = '';
        btn.disabled = false;
      }, 6000);
    }, 1500);
  });

  /* ── FORM VALIDATION ── */
  function validateForm(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#e85f1e';
        valid = false;
      }
      if (field.type === 'email' && field.value && !field.value.includes('@')) {
        field.style.borderColor = '#e85f1e';
        valid = false;
      }
    });
    return valid;
  }

});
