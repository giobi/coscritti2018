# AI Agent Instructions - Coscritti 2018

**Project**: Coscritti 2018 portale genitori
**Tech Stack**: Static HTML/CSS/JS (no Jekyll)
**Last Updated**: 2025-11-17

---

## 🎯 Purpose

Questo file contiene istruzioni per AI agents che lavorano su questo progetto.

**Usage**:
- Consistency checks tra pagine HTML
- Validation struttura progetto
- Quick reference per modifiche

**See also**: `docs/project-specs.md` per specifiche complete

---

## 📋 Pre-Flight Checklist

Prima di modificare il sito, controlla:

1. **Read specs**: `docs/project-specs.md`
2. **Check structure**: File list e naming conventions
3. **Verify consistency**: FAB, footer, navbar (vedi sotto)
4. **Test locally** (opzionale): `python -m http.server 8000`

---

## ✅ Consistency Checks

### 1. FAB (Floating Action Buttons)

**MUST BE IDENTICAL in all HTML files**:

```html
<!-- Floating Action Buttons -->
<div class="fab-container">
    <a href="https://paypal.me/coscritti2018" target="_blank" class="fab" style="background: #0070ba;" title="Dona con PayPal">
        <i class="fab fa-paypal"></i>
    </a>
    <a href="https://classroom.google.com/u/4/c/NzI0NjQwODc0ODU2" target="_blank" class="fab fab-classroom" title="Google Classroom">
        <i class="fas fa-chalkboard-teacher"></i>
    </a>
    <a href="calendario.html" class="fab fab-calendar" title="Calendario">
        <i class="fas fa-calendar-alt"></i>
    </a>
</div>
```

**Check command**:
```bash
grep -A 10 'fab-container' *.html | grep -E 'paypal|classroom|calendario'
```

**Files to check**:
- `index.html`
- `blog.html`
- `calendario.html`
- `info.html`
- `2025-11-16-*.html` (blog posts)

### 2. Navbar Top

**Desktop nav MUST have these 5 links** (in order):

```html
<ul class="nav-menu" id="navMenu">
    <li><a href="index.html" [class="active"]>Home</a></li>
    <li><a href="calendario.html" [class="active"]>Calendario</a></li>
    <li><a href="blog.html" [class="active"]>Blog</a></li>
    <li><a href="info.html" [class="active"]>Info Utili</a></li>
    <li><a href="https://paypal.me/coscritti2018" target="_blank" class="nav-cta">Dona</a></li>
</ul>
```

**Rules**:
- `class="active"` only on current page
- `nav-cta` class on Dona link
- Dona link must be `https://paypal.me/coscritti2018` with `target="_blank"`

**Check command**:
```bash
grep -A 6 'nav-menu' index.html | grep -E 'paypal|calendario|blog|info'
```

### 3. Mobile Bottom Nav

**MUST have 5 items** (order: Home, Calendario, Blog, Info, Dona):

```html
<nav class="bottom-nav">
    <ul class="bottom-nav-items">
        <li class="bottom-nav-item">
            <a href="index.html" class="bottom-nav-link [active]">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="bottom-nav-item">
            <a href="calendario.html" class="bottom-nav-link [active]">
                <i class="fas fa-calendar"></i>
                <span>Calendario</span>
            </a>
        </li>
        <li class="bottom-nav-item">
            <a href="blog.html" class="bottom-nav-link [active]">
                <i class="fas fa-newspaper"></i>
                <span>Blog</span>
            </a>
        </li>
        <li class="bottom-nav-item">
            <a href="info.html" class="bottom-nav-link [active]">
                <i class="fas fa-info-circle"></i>
                <span>Info</span>
            </a>
        </li>
        <li class="bottom-nav-item">
            <a href="https://paypal.me/coscritti2018" target="_blank" class="bottom-nav-link [active]">
                <i class="fas fa-heart"></i>
                <span>Dona</span>
            </a>
        </li>
    </ul>
</nav>
```

**Rules**:
- `class="active"` only on current page
- Dona link must be PayPal with `target="_blank"`

### 4. Footer

**MUST have 4 sections**:

1. **Logo + tagline**:
```html
<div class="footer-section">
    <h3>Coscritti 2018</h3>
    <p>Portale genitori classe seconda elementare</p>
    <p class="footer-tagline">Insieme per i nostri bambini <i class="fas fa-graduation-cap"></i></p>
</div>
```

2. **Link Rapidi**:
```html
<div class="footer-section">
    <h4>Link Rapidi</h4>
    <ul>
        <li><a href="calendario.html">Calendario</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="info.html">Info Utili</a></li>
        <li><a href="https://paypal.me/coscritti2018" target="_blank">Dona</a></li>
    </ul>
</div>
```

3. **Contatti**:
```html
<div class="footer-section">
    <h4>Contatti</h4>
    <p>Per informazioni contattare i rappresentanti di classe</p>
    <a href="info.html#contatti" class="footer-link">Vedi contatti →</a>
</div>
```

4. **Gestione Sito** (disclaimer volontariato):
```html
<div class="footer-section">
    <h4>🌐 Gestione Sito</h4>
    <p>Questo sito è realizzato e mantenuto da un genitore volontario nel tempo libero. Facciamo del nostro meglio per tenerlo aggiornato, ma chiediamo comprensione per eventuali limiti. 💚</p>
    <p class="footer-note"><small>Per segnalazioni urgenti: gruppo WhatsApp genitori</small></p>
</div>
```

**Check command**:
```bash
grep -A 5 'footer-section' index.html | grep -E 'Gestione Sito|volontario|💚'
```

### 5. Footer Bottom

**MUST have**:
```html
<div class="footer-bottom">
    <p>&copy; 2025 Coscritti 2018 - Classe Seconda Elementare</p>
    <p>Made with ❤️ by parents for parents</p>
</div>
```

---

## 🔍 Validation Scripts

### Quick Consistency Check

```bash
#!/bin/bash
# Run from project root

echo "=== Checking FAB consistency ==="
for file in index.html blog.html calendario.html info.html; do
    echo "--- $file ---"
    grep -c 'paypal.me/coscritti2018' "$file" || echo "❌ PayPal FAB missing!"
done

echo ""
echo "=== Checking navbar Dona link ==="
for file in index.html blog.html calendario.html info.html; do
    echo "--- $file ---"
    grep 'nav-cta' "$file" | grep -c 'paypal' || echo "❌ Dona nav link wrong!"
done

echo ""
echo "=== Checking footer disclaimer ==="
for file in index.html blog.html calendario.html info.html; do
    echo "--- $file ---"
    grep -c 'volontario' "$file" || echo "❌ Footer disclaimer missing!"
done
```

### Full Structure Validation

```bash
#!/bin/bash
# Validates entire project structure

# Check required files exist
REQUIRED_FILES=(
    "index.html"
    "blog.html"
    "calendario.html"
    "info.html"
    "gate.html"
    "assets/css/style.css"
    "assets/css/pages.css"
    "assets/css/fab-and-nav.css"
    "assets/js/auth.js"
    "docs/project-specs.md"
    "agents.md"
    ".nojekyll"
    "CNAME"
)

echo "=== Checking required files ==="
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ MISSING: $file"
    fi
done

# Check Jekyll files removed
JEKYLL_FILES=(
    "_config.yml"
    "Gemfile"
    "index.md"
    "dona.md"
)

echo ""
echo "=== Checking Jekyll files removed ==="
for file in "${JEKYLL_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "✅ $file removed"
    else
        echo "❌ STILL EXISTS: $file (should be deleted!)"
    fi
done

# Check no dona.html exists
if [ ! -f "dona.html" ]; then
    echo "✅ dona.html removed"
else
    echo "❌ dona.html still exists (should be deleted!)"
fi
```

---

## 🛠️ Common Tasks

### Adding a New Blog Post

1. **Create HTML file**: `YYYY-MM-DD-slug.html` in root
2. **Use template**: Copy structure from existing post
3. **Update homepage**: Add to "Latest Updates" section
4. **Update blog.html**: Add to post list
5. **Check FAB**: Ensure standard FAB included
6. **Commit**: Descriptive message

### Updating Images

1. **Add to**: `assets/images/`
2. **Naming**: Descriptive names (no generic "image1.jpg")
3. **Usage**: Real class photos > stock photos
4. **Alt text**: Always descriptive
5. **Commit**: Note which pages use the image

### Modifying Navigation

**CRITICAL**: If you change navbar structure:

1. **Update ALL pages** (5 main + 2 blog posts)
2. **Check consistency** using validation scripts
3. **Test mobile nav** (bottom-nav)
4. **Verify FAB** not affected

---

## ⚠️ Important Notes

### DO NOT

❌ Re-add Jekyll files (`_config.yml`, `Gemfile`, etc.)
❌ Create `dona.html` (Dona → PayPal direct)
❌ Use placeholder images (use real class photos)
❌ Break FAB consistency across pages
❌ Remove footer disclaimer
❌ Add analytics/tracking (privacy-first)

### ALWAYS

✅ Use `.nojekyll` (already present)
✅ Test locally before commit
✅ Check consistency after changes
✅ Keep FAB/navbar/footer identical
✅ Update `docs/project-specs.md` if architecture changes

---

## 🚀 Deployment

**Auto-deploy**: Push to `main` branch
**GitHub Pages**: Automatic
**No build step**: Static files served directly

**Before pushing**:
```bash
# 1. Run consistency check
bash validation-script.sh

# 2. Check git status
git status

# 3. Commit with descriptive message
git add .
git commit -m "Your descriptive message"

# 4. Push
git push origin main
```

**Live in**: ~2-5 minutes

---

## 📞 Support

**Questions**: Check `docs/project-specs.md` first
**Bugs**: Report via GitHub Issues or WhatsApp
**Content updates**: Contact rappresentanti di classe

---

**Version**: 1.0.0
**Last Updated**: 2025-11-17
