# Coscritti 2018 - Project Specifications

**Last Updated**: 2025-11-17
**Status**: Production
**Tech Stack**: Static HTML/CSS/JS (no Jekyll, no build step)

---

## 🎯 Project Overview

Portale web per genitori della classe seconda elementare (Coscritti 2018).

**Purpose**: Centralizzare comunicazioni, calendario eventi, informazioni utili in un unico punto accessibile.

**Target Audience**: Genitori classe 2° elementare (anno scolastico 2025-2026)

**Hosting**: GitHub Pages (https://coscritti2018.it)

---

## 📐 Architecture

### Tech Stack

**Frontend**:
- HTML5 semantico (static files)
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (no frameworks)
- Font Awesome 6.4.2 (icons)
- Google Fonts (Syne + Quicksand)

**Hosting**:
- GitHub Pages (automatic deploy on push to main)
- DNS: Cloudflare (4 A records → GitHub Pages IPs)
- SSL: Enforced via GitHub Pages

**Authentication**:
- Token-based gate with 30-day cookie
- SHA256 token: `8c121210dde619fb32da41bdb2ffbc1ff51ca4558705f00351318eb5cd783195`
- Access URL: `https://coscritti2018.it/?token={token}`

### Why Static HTML (No Jekyll)

✅ `.nojekyll` file presente - Jekyll processing disabilitato
✅ Zero build step - push = live immediato
✅ Performance - no server-side processing
✅ Simplicità - HTML puro, facile da mantenere
✅ Adatto per progetto small-scale (2 blog post, 6 pagine)

---

## 🗂️ File Structure

```
coscritti2018/
├── index.html              # Homepage
├── calendario.html         # Calendario + progetti educativi
├── blog.html              # Lista post blog
├── info.html              # Informazioni utili + disclaimer
├── gate.html              # Token auth gate
├── 2025-11-16-*.html      # Blog posts (static files)
├── assets/
│   ├── css/
│   │   ├── style.css      # Main styles
│   │   ├── pages.css      # Page-specific styles
│   │   └── fab-and-nav.css # FAB + mobile nav
│   ├── js/
│   │   └── auth.js        # Token validation + cookie
│   └── images/
│       ├── 20251028_111946.jpg  # Devero trip photo
│       ├── 20251031_114748.jpg  # Halloween class
│       ├── Z306Oox.png          # Class activity
│       ├── m02Dk8J.png          # PACE banner
│       └── seYpHzy.png          # Cooperation hands
├── docs/
│   └── project-specs.md   # This file
├── agents.md              # AI agent instructions
├── .nojekyll              # Disable Jekyll processing
├── CNAME                  # Domain config
└── README.md              # GitHub readme
```

---

## 🎨 Design System

### Typography

- **Headings**: Syne (weights 600, 700)
- **Body**: Quicksand (weights 400, 500, 600)
- Font pairing name: "sans-friendly"

### Color Palette

**Theme**: earth-warm light

```css
--background: #faf6f0;
--text: #3d2817;
--accent: #8b6f47;
--accent-secondary: #d4a574;
```

### Components

**Navbar**:
- Desktop: Horizontal nav
- Mobile: Bottom fixed nav (< 768px)

**FAB (Floating Action Buttons)**:
- Stack verticale bottom-right
- 3 buttons sempre:
  1. PayPal dona (`#0070ba`)
  2. Google Classroom (`#0f9d58`)
  3. Calendario (`#4285f4`)

**Footer**:
- Fat footer con 4 sezioni:
  1. Logo + tagline
  2. Link rapidi
  3. Contatti
  4. Gestione sito (disclaimer volontariato)

---

## 📄 Pages

### index.html
- Hero section (40/60 split)
- Quick links cards (4)
- Latest updates (2 real blog posts)
- Community section

### calendario.html
- Google Calendar iframe embed
- Progetti educativi (7 card):
  - Progetto DIDEROT (gratuito)
  - Musica e Movimento (finanziato Comune)
  - Giocosport (finanziato Comune)
  - Legambiente (gratuito)
  - Babygame (gratuito)
  - Educazione Stradale (programma scolastico)
  - CCRR (gratuito)

### blog.html
- Lista post statici (2 posts reali)
- No Jekyll, HTML statico

### info.html
- Orari scolastici
- Coming soon: Numeri utili, Altre info
- **Disclaimer gestione volontaria** (sezione completa)

### gate.html
- Landing page per non-autenticati
- Token input + validation

---

## 🔗 External Integrations

### Google Calendar

**Calendar ID**: `49a918f78275c7a1ddad809741bb1698e276cfe7393c2670865961e1dcf6cccf@group.calendar.google.com`

**Embed URL**:
```
https://calendar.google.com/calendar/embed?src=49a918f78275c7a1ddad809741bb1698e276cfe7393c2670865961e1dcf6cccf%40group.calendar.google.com&ctz=Europe%2FRome
```

**Eventi** (2025-2026):
- Uscita a DEVERO (21 Ott 2025)
- Progetto COOP - Piccoli Cerchi (5-12 Nov 2025)
- Uscita a Cannero (31 Mar 2026)
- Giornata Sportiva (20 Mag 2026)
- Uscita ad Alpeggio Burki (27 Mag 2026)

### Google Classroom

**Class URL**: `https://classroom.google.com/u/4/c/NzI0NjQwODc0ODU2`

### PayPal

**Donate link**: `https://paypal.me/coscritti2018`

**Usage**:
- Nav link "Dona" → PayPal direct
- FAB PayPal button (sempre presente)
- Quick link card in homepage

---

## 📝 Content Guidelines

### Blog Posts

**Format**: Static HTML files (non Jekyll)
**Naming**: `YYYY-MM-DD-slug.html`
**Location**: Root directory

**Current posts**:
1. `2025-11-16-verbale-prima-riunione-genitori.html`
2. `2025-11-16-cena-fine-novembre.html`

**Post structure**:
- Header con background image + overlay
- Post meta (date, category)
- Content sections
- Footer with back-to-blog link

### Images

**Location**: `assets/images/`

**Real class photos** (no placeholders):
- Hero: Devero trip
- Blog cards: Class activities, Halloween
- Community: Cooperation hands
- Projects: PACE banner

**Guidelines**:
- Use real class photos whenever possible
- Alt text descriptive
- Lazy loading for below-fold images

---

## 🔐 Security & Privacy

### Authentication

**Method**: Token-based gate (cookie 30 giorni)

**Token SHA256**: `8c121210dde619fb32da41bdb2ffbc1ff51ca4558705f00351318eb5cd783195`

**Flow**:
1. Visitor → redirect to `/gate.html`
2. Access with `?token=...` → set cookie
3. Redirect to clean URL
4. Cookie valid → full site access

### Privacy

**No analytics** (privacy-first)
**No forms** (contatti via WhatsApp)
**No personal data collection**

---

## 🚀 Deployment

### GitHub Pages

**Branch**: `main`
**Auto-deploy**: On push to main
**DNS**: Cloudflare (A records)

**SSL Certificate**:
- ✅ Provisioned and enforced
- HTTPS funzionante su coscritti2018.it

**Build**: None (static files serviti direttamente)

### DNS Configuration

**Provider**: Cloudflare
**Type**: DNS-only (non proxied)

**A records** (4):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

---

## 🤝 Maintenance

### Volunteer Management

**Sito gestito da**: Un genitore volontario (Giobi)
**Tempo dedicato**: Tempo libero, compatibilmente con lavoro/famiglia

**Disclaimer presente in**:
- Footer di tutte le pagine
- Sezione dedicata in `info.html`

**Tone**: Gentile ma fermo - chiarisce limiti senza essere difensivo

**Comunicazioni urgenti**: Gruppo WhatsApp genitori o rappresentanti

---

## 📊 Performance

**Page load**: <1s (static files, no build)
**Mobile-friendly**: ✅ (responsive grid + bottom nav)
**Lighthouse score**: Target 90+ (all metrics)

---

## 🔜 Future Enhancements

**Low priority** (only if requested):
- [ ] Completare sezione "Numeri Utili" in info.html
- [ ] Aggiungere più post blog quando necessario
- [ ] Considerare form contatti (opzionale vs WhatsApp)

**Non in scope**:
- Jekyll integration (già rimosso)
- Dynamic backend
- User accounts
- Complex features richiedenti tempo professionale

---

## 📞 Support

**Per modifiche sito**: Contattare genitore volontario tramite rappresentanti
**Per segnalazioni urgenti**: Gruppo WhatsApp genitori
**Per contenuti**: Rappresentanti di classe

---

## 📚 Documentation

**Project specs**: `docs/project-specs.md` (this file)
**AI instructions**: `agents.md` (consistency checks)
**GitHub README**: `README.md` (public-facing)

---

**Versione**: 1.0.0
**Ultimo aggiornamento**: 2025-11-17
