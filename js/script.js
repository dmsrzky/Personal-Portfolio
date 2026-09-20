/* ---------- nav ---------- */
(function () {
  var b = document.getElementById('burger'), m = document.getElementById('navM'),
      h = document.getElementById('head');
  if (b && m) {
    b.addEventListener('click', function () {
      var o = m.classList.toggle('open');
      b.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    m.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        m.classList.remove('open'); b.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var hero = document.querySelector('.hero');
  function onScroll() {
    var past = window.scrollY > (hero ? hero.offsetHeight - 80 : 400);
    h.classList.toggle('solid', past);
    var p = document.getElementById('progress');
    if (p) {
      var max = document.body.scrollHeight - window.innerHeight;
      p.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- active section ---------- */
(function () {
  var links = document.querySelectorAll('.nav-d a[data-sec]');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (l) {
        l.classList.toggle('on', l.getAttribute('data-sec') === e.target.id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['work', 'ventures', 'ai', 'record'].forEach(function (id) {
    var el = document.getElementById(id); if (el) io.observe(el);
  });
})();

/* ---------- reveal ---------- */
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (e) { e.classList.add('in'); }); return;
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  items.forEach(function (e) { io.observe(e); });
})();
