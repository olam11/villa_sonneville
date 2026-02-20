class SiteNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* On laisse Tailwind gérer le style global */
        :host {
          display: block;
        }
      </style>

      <nav class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            
            <!-- Logo -->
            <div class="shrink-0">
              <a href="./index.html" class="flex items-center">
                <img src="src/img/logo.webp" alt="Logo" class="h-12 w-auto" />
              </a>
            </div>

            <!-- Desktop links -->
            <div class="hidden md:flex md:items-center md:space-x-6">
              <div class="relative group">
                <button class="text-gray-700 hover:text-gray-900 flex items-center gap-1">
                  Artistes
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div class="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="./christophe-boulanger.html" class="block px-4 py-2 hover:bg-gray-100 text-gray-700">Christophe Boulanger</a>
                  <a href="./cedric-carre.html" class="block px-4 py-2 hover:bg-gray-100 text-gray-700">Cédric Carré</a>
                </div>
              </div>

              <a href="./about.html" class="text-gray-700 hover:text-gray-900">À propos</a>
              <a href="./contact.html" class="text-gray-700 hover:text-gray-900">Contact</a>
              <a href="https://uh5.fr/" class="text-gray-700 hover:text-gray-900">UH5</a>
            </div>

            <!-- Mobile burger -->
            <div class="md:hidden">
              <button id="nav-toggle" aria-controls="mobile-menu" aria-expanded="false"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100">
                <span class="sr-only">Ouvrir le menu</span>

                <svg id="icon-open" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg id="icon-close" class="h-6 w-6 hidden" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu -->
        <div id="mobile-menu" class="md:hidden hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm">
            <details class="px-3 py-2 rounded-md text-gray-700 bg-white">
              <summary class="cursor-pointer text-base font-medium">Artistes</summary>
              <div class="pl-4 mt-2 space-y-1">
                <a href="./christophe-boulanger.html" class="block py-1 text-gray-700 hover:bg-gray-100 rounded">Christophe Boulanger</a>
                <a href="./cedric-carre.html" class="block py-1 text-gray-700 hover:bg-gray-100 rounded">Cédric Carré</a>
              </div>
            </details>

            <a href="./about.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">À propos</a>
            <a href="https://uh5.fr/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">UH5</a>
          </div>
        </div>
      </nav>
    `;

    this.initMenu();
  }

  initMenu() {
    const btn = this.shadowRoot.getElementById('nav-toggle');
    const menu = this.shadowRoot.getElementById('mobile-menu');
    const iconOpen = this.shadowRoot.getElementById('icon-open');
    const iconClose = this.shadowRoot.getElementById('icon-close');

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('hidden');
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    });
  }
}

customElements.define('site-navbar', SiteNavbar);
