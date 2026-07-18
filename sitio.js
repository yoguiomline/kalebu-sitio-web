// sitio.js — chrome compartido del sitio Kalebu Terapéutico
// Inyecta header, footer y botón flotante de WhatsApp en cada página.
// Cada página define: <body data-page="home"> (home | ninos | adultos | nosotros | contacto)

// ── Píxel de Meta ─────────────────────────────────────────────────────────
// Mide visitas y clics a WhatsApp para las campañas de Meta Ads.
(function () {
  const PIXEL_ID = "1352810583459560"; // Píxel "Kalebu Web"

  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');

  // Cada clic a WhatsApp cuenta como contacto — es la conversión que nos importa.
  document.addEventListener('click', (e) => {
    const wa = e.target.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
    if (!wa) return;
    fbq('track', 'Contact', {
      content_name: document.body.dataset.page || 'home',
      content_category: 'whatsapp'
    });
  });
})();

(function () {
  const WA = "https://wa.me/message/PY6KR3HE6FSEK1";
  const IG = "https://instagram.com/kalebu_espacioterapeutico";
  const PHONE_LABEL = "11 7366-4757";

  const NAV = [
    { id: "home",     label: "Inicio",                href: "/" },
    { id: "ninos",    label: "Niños y adolescentes",  href: "/ninos" },
    { id: "adultos",  label: "Adultos",               href: "/adultos" },
    { id: "nosotros", label: "Nosotros",              href: "/nosotros" },
    { id: "contacto", label: "Contacto",              href: "/contacto" },
  ];

  const page = document.body.dataset.page || "home";

  // ── Brand mark — figura Kalebu (figura humana con hojas) ─────────────────
  const MARK = `
    <svg class="brand-mark" viewBox="0 0 200 230" aria-hidden="true">
      <ellipse cx="59"  cy="76"  rx="9.5" ry="21" fill="#8EC8C4" transform="rotate(-62 59 76)"/>
      <ellipse cx="73"  cy="50"  rx="9.5" ry="21" fill="#B8AECC" transform="rotate(-40 73 50)"/>
      <ellipse cx="89"  cy="34"  rx="9.5" ry="21" fill="#ACCAA6" transform="rotate(-16 89 34)"/>
      <ellipse cx="111" cy="34"  rx="9.5" ry="21" fill="#8CC8CA" transform="rotate(16 111 34)"/>
      <ellipse cx="127" cy="50"  rx="9.5" ry="21" fill="#EAB8AC" transform="rotate(40 127 50)"/>
      <ellipse cx="141" cy="76"  rx="9.5" ry="21" fill="#EEDAA0" transform="rotate(62 141 76)"/>
      <line x1="90"  y1="78" x2="68"  y2="56" stroke="#6E7C82" stroke-width="15" stroke-linecap="round"/>
      <line x1="110" y1="78" x2="132" y2="56" stroke="#6E7C82" stroke-width="15" stroke-linecap="round"/>
      <path d="M 87 72 C 83 104 79 130 76 156 L 124 156 C 121 130 117 104 113 72 Z" fill="#6E7C82"/>
      <circle cx="100" cy="54" r="13" fill="#6E7C82"/>
    </svg>`;

  const waIco = (s = 24) => `
    <svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.42 1.32-1.95 1.36-.5.04-.97.22-3.27-.68-2.76-1.09-4.5-3.92-4.64-4.1-.13-.18-1.1-1.46-1.1-2.79 0-1.32.69-1.97.94-2.24.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.56.81 1.94.88 2.08.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.72 1.18 1.54 1.91 1.06.95 1.95 1.24 2.22 1.38.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.6-.14.24.09 1.55.73 1.82.86.27.14.45.2.51.31.07.11.07.63-.17 1.31z"/>
    </svg>`;

  const pin = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg>`;
  const igIco = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>`;
  const phoneIco = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>`;

  // ── Header ──────────────────────────────────────────────────────────────
  const navLinks = NAV.map(n =>
    `<a href="${n.href}"${n.id === page ? ' class="is-active"' : ''}>${n.label}</a>`
  ).join("");

  const header = `
    <header class="site-header">
      <div class="wrap">
        <a class="brand" href="/" aria-label="Kalebu Terapéutico — Inicio">
          ${MARK}
          <span class="brand-text">
            <span class="brand-name">Kalebu</span>
            <span class="brand-sub">CET · Centro Espacio Terapéutico</span>
          </span>
        </a>
        <nav class="nav">${navLinks}</nav>
        <button class="menu-btn" id="menuBtn" aria-label="Abrir menú">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </header>`;

  // ── Mobile drawer ─────────────────────────────────────────────────────────
  const drawerLinks = NAV.map(n =>
    `<a class="dl${n.id === page ? ' is-active' : ''}" href="${n.href}">${n.label}</a>`
  ).join("");

  const drawer = `
    <div class="drawer" id="drawer">
      <div class="drawer-shade" data-close></div>
      <div class="drawer-panel">
        <div class="drawer-head">
          <a class="brand" href="/">${MARK}<span class="brand-text"><span class="brand-name">Kalebu</span><span class="brand-sub">CET · Centro Espacio Terapéutico</span></span></a>
          <button class="menu-btn" data-close aria-label="Cerrar menú">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>
          </button>
        </div>
        ${drawerLinks}
        <a class="btn btn--wa btn--block" href="${WA}" target="_blank" rel="noopener">${waIco(20)} Reservá tu primera consulta</a>
      </div>
    </div>`;

  // ── Footer ────────────────────────────────────────────────────────────────
  const footer = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="brand" href="/">${MARK}<span class="brand-text"><span class="brand-name">Kalebu</span><span class="brand-sub">CET · Centro Espacio Terapéutico</span></span></a>
            <p>Juntos encontramos el camino. Centro Educativo Terapéutico en Zona Oeste. 🌱</p>
          </div>
          <div class="footer-col">
            <h4>Navegación</h4>
            ${NAV.map(n => `<a href="${n.href}">${n.label}</a>`).join("")}
          </div>
          <div class="footer-col">
            <h4>Contacto</h4>
            <div class="footer-line">${pin}<span>Morón, Zona Oeste<br>Buenos Aires</span></div>
            <div class="footer-line">${phoneIco}<a href="${WA}" target="_blank" rel="noopener">WhatsApp ${PHONE_LABEL}</a></div>
            <div class="footer-line">${igIco}<a href="${IG}" target="_blank" rel="noopener">@kalebu_espacioterapeutico</a></div>
          </div>
          <div class="footer-col">
            <h4>Zona de cobertura</h4>
            <a href="/haedo">Psicólogo en Haedo</a>
            <a href="/castelar">Psicólogo en Castelar</a>
            <a href="/merlo">Psicólogo en Merlo</a>
            <a href="/ituzaingo">Psicólogo en Ituzaingó</a>
            <a href="/hurlingham">Psicólogo en Hurlingham</a>
            <a href="/el-palomar">Psicólogo en El Palomar</a>
            <a href="/ramos-mejia">Psicólogo en Ramos Mejía</a>
          </div>
          <div class="footer-col">
            <h4>Obras sociales</h4>
            <p>OSDE · Galeno<br>Swiss Medical · OSECAC<br>y más</p>
            <a href="/nosotros">Ver formas de pago →</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Kalebu Terapéutico — Centro Educativo Terapéutico.</span>
          <span>Atención presencial · Obra social y particular.</span>
        </div>
      </div>
    </footer>`;

  // ── Floating WhatsApp ───────────────────────────────────────────────────────
  const waFloat = `
    <a class="wa-float" href="${WA}" target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp">
      ${waIco(28)}<span class="wa-label">Reservá tu primera consulta</span>
    </a>`;

  // ── Mount ─────────────────────────────────────────────────────────────────
  document.body.insertAdjacentHTML("afterbegin", header + drawer);
  document.body.insertAdjacentHTML("beforeend", footer + waFloat);

  // Drawer behaviour
  const drawerEl = document.getElementById("drawer");
  document.getElementById("menuBtn").addEventListener("click", () => {
    drawerEl.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });
  drawerEl.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]") || e.target.classList.contains("drawer-shade")) {
      drawerEl.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  });
})();
