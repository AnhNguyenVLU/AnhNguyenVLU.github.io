(function () {
  const body = document.body;
  const btn = document.querySelector('.drawer-btn');
  const sidebar = document.querySelector('.sidebar');
  const scrim = document.querySelector('.scrim');

  function setDrawer(open) {
    body.classList.toggle('nav-open', open);
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  if (btn && sidebar) {
    btn.addEventListener('click', function () {
      setDrawer(!body.classList.contains('nav-open'));
    });

    if (scrim) scrim.addEventListener('click', function () { setDrawer(false); });

    // Any link inside the drawer closes it on mobile
    sidebar.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setDrawer(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && body.classList.contains('nav-open')) {
        setDrawer(false);
        btn.focus();
      }
    });

    // Reset state when the viewport grows back to desktop width
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onChange = function (e) { if (e.matches) setDrawer(false); };
    if (desktop.addEventListener) desktop.addEventListener('change', onChange);
    else desktop.addListener(onChange);
  }

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
