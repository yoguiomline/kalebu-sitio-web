# Kalebu Terapéutico — Sitio web público

Sitio estático (HTML + CSS + JS). No necesita build ni instalación: son archivos que cualquier navegador abre directo.

## Archivos
```
index.html        → Inicio
ninos.html        → Niños y adolescentes
adultos.html      → Adultos
nosotros.html     → Nosotros / equipo / obras sociales
contacto.html     → Contacto
sitio-styles.css  → Estilos (sistema visual de Kalebu)
sitio.js          → Header, footer, menú mobile y botón flotante de WhatsApp
```

## Ver en local (VS Code)
1. Abrí esta carpeta en VS Code: `code .`
2. Instalá la extensión **Live Server** → clic derecho en `index.html` → "Open with Live Server".
   (o en una terminal: `npx serve .`)

## Backup en GitHub
```bash
git init
git add .
git commit -m "Kalebu — sitio web v1"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/kalebu-sitio.git
git push -u origin main
```

## Publicar en Netlify
**Opción rápida (drag & drop):** entrá a Netlify → "Add new site" → "Deploy manually" → arrastrá ESTA carpeta completa. Listo.

**Opción con GitHub (recomendada, redeploy automático):**
1. Netlify → "Add new site" → "Import from Git" → elegí el repo.
2. **Build command:** *(dejar vacío)*
3. **Publish directory:** `.` (la raíz de esta carpeta)
4. Deploy. Cada `git push` actualiza el sitio solo.

## Pendientes / próximos pasos
- Reemplazar el **logo** (hoy es un placeholder con la marca de puntos).
- Reemplazar las **fotos** (hay placeholders marcados "Foto…" en hero, accesos y equipo).
- Sumar al resto del **equipo** en `nosotros.html` (hay tarjetas "Próximamente").
- WhatsApp configurado: `https://wa.me/message/PY6KR3HE6FSEK1`. Instagram: `@kalebu_espacioterapeutico`.
