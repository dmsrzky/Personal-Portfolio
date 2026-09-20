# Personal Portfolio — dimasrahmandiansyah.app

Source for my personal portfolio: embedded and control work, IoT hardware, and the
web studio I run, each with the details that show how it was built.

**Live:** https://www.dimasrahmandiansyah.app

## Stack
Vanilla HTML, CSS and JavaScript. No framework, no build step.

## Sections
- **Hero** — who I am and what I'm working on now
- **Engineering** — closed-loop DC motor speed control (capstone) and AUDROS, a hydroponic
  nutrient and pH controller that took Gold at I2ASPO 2023
- **Ventures** — Studiowebsite.id: a client site, a demo, and the studio's own SEO work
- **Working with AI** — where I am with it, honestly
- **Record** — education, awards, skills

## Structure
```
index.html
css/style.css
js/script.js        nav, active-section highlight, scroll reveal
assets/images/
```

## Local preview
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000
