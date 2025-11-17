# AI Agent Instructions - Coscritti 2018

**Project**: Coscritti 2018 portale genitori
**Tech Stack**: Jekyll + HTML/CSS/JS
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

**Defined ONCE in** `_includes/fab.html`:
All pages using `layout: default` automatically include FAB.

**Standard FAB structure**:

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

**To modify**: Edit `_includes/fab.html` once → changes propagate to all pages

### 2. Navbar Top

**Defined ONCE in** `_includes/navbar.html`:
All pages using `layout: default` automatically include navbar.

**Standard navbar structure**:

```html
<ul class="nav-menu" id="navMenu">
    <li><a href="index.html" [class="active"]>Home</a></li>
    <li><a href="calendario.html" [class="active"]>Calendario</a></li>
    <li><a href="blog.html" [class="active"]>Blog</a></li>
    <li><a href="info.html" [class="active"]>Info Utili</a></li>
    <li><a href="https://paypal.me/coscritti2018" target="_blank" class="nav-cta">Dona</a></li>
</ul>
```

**Active state**: Automatically handled via Jekyll `{% if page.url == '/index.html' %}` conditionals

**To modify**: Edit `_includes/navbar.html` once → changes propagate to all pages

### 3. Mobile Bottom Nav

**Defined in** `_layouts/default.html`:
Automatically included on all pages.

**Standard structure**:

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

**Active state**: Automatically handled via Jekyll conditionals

**To modify**: Edit `_layouts/default.html` bottom-nav section

### 4. Footer

**Defined ONCE in** `_includes/footer.html`:
All pages automatically include footer.

**Standard footer structure (4 sections)**:

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

**Copy Token Button**: Included in Contatti section, copies `https://coscritti2018.it/?token=...`

**To modify**: Edit `_includes/footer.html` once → changes propagate to all pages

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

### Quick Jekyll Structure Check

```bash
#!/bin/bash
# Run from project root

echo "=== Checking Jekyll structure ==="
[ -f "_config.yml" ] && echo "✅ _config.yml" || echo "❌ Missing _config.yml"
[ -d "_layouts" ] && echo "✅ _layouts/" || echo "❌ Missing _layouts/"
[ -d "_includes" ] && echo "✅ _includes/" || echo "❌ Missing _includes/"
[ -d "_posts" ] && echo "✅ _posts/" || echo "❌ Missing _posts/"

echo ""
echo "=== Checking includes ==="
[ -f "_includes/navbar.html" ] && echo "✅ navbar.html" || echo "❌ Missing navbar.html"
[ -f "_includes/footer.html" ] && echo "✅ footer.html" || echo "❌ Missing footer.html"
[ -f "_includes/fab.html" ] && echo "✅ fab.html" || echo "❌ Missing fab.html"

echo ""
echo "=== Checking layouts ==="
[ -f "_layouts/default.html" ] && echo "✅ default.html" || echo "❌ Missing default.html"
[ -f "_layouts/post.html" ] && echo "✅ post.html" || echo "❌ Missing post.html"

echo ""
echo "=== Checking posts ==="
post_count=$(find _posts -name "*.md" 2>/dev/null | wc -l)
echo "📝 Found $post_count blog posts in _posts/"
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

**With Jekyll** (EASY!):
1. **Create markdown file**: `_posts/YYYY-MM-DD-slug.md`
2. **Add frontmatter**:
   ```yaml
   ---
   layout: post
   title: "Post Title"
   date: 2025-11-16
   category: Comunicazioni
   excerpt: "Short description"
   image: assets/images/photo.jpg
   ---
   ```
3. **Write content**: Use markdown syntax
4. **Commit and push**: Auto-appears in blog list!

**No need to**:
- ❌ Manually update homepage
- ❌ Manually update blog.html
- ❌ Copy HTML template
- ❌ Add navbar/footer/FAB (layout handles it)

### Updating Images

1. **Add to**: `assets/images/`
2. **Naming**: Descriptive names (no generic "image1.jpg")
3. **Usage**: Real class photos > stock photos
4. **Alt text**: Always descriptive
5. **Commit**: Note which pages use the image

### Modifying Navigation

**With Jekyll** (EASY!):

1. **Edit** `_includes/navbar.html` **ONCE**
2. **Push** → changes propagate to ALL pages automatically
3. **Test** mobile nav still works (in `_layouts/default.html`)

**No need to**:
- ❌ Update 5+ HTML files manually
- ❌ Search/replace across files
- ❌ Check consistency manually

---

## ⚠️ Important Notes

### DO NOT

❌ Create `.nojekyll` (disables Jekyll!)
❌ Modify navbar/footer/FAB in individual pages (use includes!)
❌ Create `dona.html` (Dona → PayPal direct)
❌ Use placeholder images (use real class photos)
❌ Remove footer disclaimer
❌ Add analytics/tracking (privacy-first)
❌ Create HTML blog posts in root (use `_posts/*.md`)

### ALWAYS

✅ Use Jekyll layouts and includes (DRY!)
✅ Create blog posts in `_posts/` as markdown
✅ Test locally with `jekyll serve` if possible
✅ Edit navbar/footer/FAB in `_includes/` ONCE
✅ Update `docs/project-specs.md` if architecture changes
✅ Commit frontmatter-compliant markdown for posts

---

## 🚀 Deployment

**Auto-deploy**: Push to `main` branch
**GitHub Pages**: Automatic
**No build step**: Static files served directly

**Before pushing**:
```bash
# 1. Run Jekyll structure check
bash validation-script.sh

# 2. Check git status
git status

# 3. Commit with descriptive message
git add .
git commit -m "Your descriptive message"

# 4. Push
git push origin main
```

**Live in**: ~2-5 minutes (includes Jekyll build time ~30s)

---

## 📞 Support

**Questions**: Check `docs/project-specs.md` first
**Bugs**: Report via GitHub Issues or WhatsApp
**Content updates**: Contact rappresentanti di classe

---

**Version**: 1.0.0
**Last Updated**: 2025-11-17
