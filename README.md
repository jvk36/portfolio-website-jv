# John Konnayil Vincent — Portfolio

## View the site (no npm required)

1. Open File Explorer and go to:
   `d:\Users\annaj\Portfolio-Website-JV-Cursor\standalone`
2. Double-click **`index.html`**.

The page opens in your browser. No install, no terminal.

To edit copy or links, change **`standalone/index.html`** (search for the section you want).

Replace `contact@example.com` in the footer with your real email.

---

## Put it on the web (still no npm)

Upload the entire **`standalone`** folder to any static host, for example:

- [Netlify Drop](https://app.netlify.com/drop) — drag the `standalone` folder onto the page
- [GitHub Pages](https://pages.github.com/) — push the folder and enable Pages

---

## Optional: Astro version (needs Node.js)

The `src/` folder is an Astro + Tailwind project for later, if you install Node.js (npm is included).

1. Install Node.js LTS from [https://nodejs.org](https://nodejs.org) (restart the terminal after install).
2. In PowerShell:

```powershell
cd d:\Users\annaj\Portfolio-Website-JV-Cursor
npm install
npm run dev
```

Open http://localhost:4321. Content for that version is in `src/data/site.json`.

---

## Customize

| What | Where (no npm) | Where (Astro) |
|------|----------------|---------------|
| Bio, links | `standalone/index.html` | `src/data/site.json` |
| Styles | `standalone/styles.css` | Tailwind in `src/` |
| Images | Add files next to `index.html`, reference in HTML | `public/` |
