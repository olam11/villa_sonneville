const btn = document.getElementById('nav-toggle');
const menu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
btn.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
  btn.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('hidden');
  iconOpen.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
}); // Fermer le menu quand on clique sur un lien (utile sur mobile) menu.querySelectorAll('a').forEach(link => { link.addEventListener('click', () => { menu.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false'); iconOpen.classList.remove('hidden'); iconClose.classList.add('hidden'); }); });
