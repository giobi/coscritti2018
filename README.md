# Coscritti 2018 - Portale Genitori 🎒

Portale web dedicato ai genitori della classe seconda elementare - Coscritti 2018.

## 🌐 Live Site

**URL**: [https://coscritti2018.it](https://coscritti2018.it)

## 📋 Contenuti del Sito

### Pagine Principali

1. **Home** (`index.html`)
   - Benvenuto e introduzione
   - Link rapidi alle sezioni
   - Ultimi aggiornamenti dal blog
   - Sezione community

2. **Calendario** (`calendario.html`)
   - Eventi scolastici e festività
   - Placeholder per Google Calendar embed
   - Lista eventi organizzata per mese
   - Legenda tipologie eventi

3. **Blog** (`blog.html`)
   - Comunicazioni dalle insegnanti
   - Notizie e aggiornamenti
   - Pronto per integrazione Jekyll

4. **Info Utili** (`info.html`)
   - Contatti rappresentanti e insegnanti
   - Orari scolastici e ricevimento
   - Materiale didattico necessario
   - Info mensa e trasporti
   - Regole gruppo WhatsApp
   - Gestione emergenze

5. **Dona** (`dona.html`)
   - Modalità di donazione (PayPal + bonifico)
   - Utilizzo fondi raccolti
   - Trasparenza e rendicontazione

## 🎨 Design

### Design System

- **Font Heading**: Syne (600, 700)
- **Font Body**: Quicksand (400, 500, 600)
- **Palette Colori**:
  - Background: `#faf8f5` (warm cream)
  - Text: `#2d2416` (dark brown)
  - Accent: `#e87d3e` (warm orange)
  - Accent Secondary: `#f4a261` (soft orange)

### Caratteristiche

- ✅ Mobile-first responsive design
- ✅ Semantic HTML5
- ✅ CSS custom properties per theming
- ✅ Accessibilità (ARIA labels, alt text)
- ✅ Smooth transitions e hover effects
- ✅ Hamburger menu su mobile
- ✅ Immagini di qualità da Unsplash
- ✅ Typography ottimizzata per leggibilità

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript** - Mobile navigation
- **Google Fonts** - Syne + Quicksand
- **Unsplash** - High-quality images
- **GitHub Pages** - Hosting

## 📁 Struttura File

```
coscritti2018/
├── index.html              # Homepage
├── calendario.html         # Calendario eventi
├── blog.html              # Blog/comunicazioni
├── info.html              # Info utili
├── dona.html              # Donazioni
├── assets/
│   └── css/
│       ├── style.css      # Main styles
│       └── pages.css      # Page-specific styles
├── CNAME                  # Custom domain config
└── README.md              # This file
```

## 🚀 Deployment

Il sito è hostato su **GitHub Pages** e si aggiorna automaticamente ad ogni push su `main`.

**Custom Domain**: `coscritti2018.it` (configurato via CNAME)

## 🔧 Personalizzazione

### Modificare Contenuti

1. **Contatti** - Aggiornare `info.html` sezione contatti
2. **Eventi** - Aggiungere/modificare eventi in `calendario.html`
3. **Blog** - Aggiungere file in `_posts/` (formato Jekyll)
4. **Donazioni** - Configurare ID PayPal in `dona.html`
5. **Google Calendar** - Sostituire placeholder in `calendario.html`

### Modificare Design

Tutte le variabili di design sono in `assets/css/style.css` sotto `:root`:

```css
:root {
  --font-heading: 'Syne', sans-serif;
  --font-body: 'Quicksand', sans-serif;
  --color-bg: #faf8f5;
  --color-text: #2d2416;
  --color-accent: #e87d3e;
  /* ... */
}
```

## 📝 TODO

- [ ] Configurare Google Calendar embed reale
- [ ] Sostituire ID PayPal con quello vero
- [ ] Aggiornare contatti rappresentanti con dati reali
- [ ] Aggiungere primi post blog Jekyll in `_posts/`
- [ ] Inserire nomi insegnanti reali
- [ ] Configurare analytics (opzionale)

## 📞 Supporto

Per modifiche o assistenza, contattare i rappresentanti di classe.

---

**Made with ❤️ by parents for parents**

*Generated with [PressLess Manager](https://github.com/giobi/brain/tree/main/tools/pressless) - Claude Code*
