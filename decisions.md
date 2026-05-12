# decisions.md — Construction LESCO inc.

## Identité du projet

- **Entreprise :** Construction LESCO inc.
- **Secteur :** Construction neuve et rénovation résidentielle et commerciale
- **Registre :** Industriel / direct / sans bullshit — confiance bâtie sur les faits, pas sur la rhétorique
- **Vibe :** Chantier de qualité — concret, sans fioritures, chaque projet livré du gros œuvre à la finition
- **Ton :** Français canadien (fr-CA). Direct, compétent, chaleureux sans être familier.
- **Langue :** fr-CA (lead.json.industry = Construction québécoise)

## Thème retenu

**Direction 1 : Editorial Brutalist — Orange industriel sur noir profond**
- Fond sombre dominant `#1B1B1B` pour les sections impact (Header, Hero, Process, FAQ, Contact, Footer)
- Fond blanc/clair `#FAFAF8` pour sections galerie, témoignages
- Accent principal `#ec7c33` (orange — palette.dominant[0]) pour CTAs, eyebrows, accents
- Accent secondaire `#79360b` (brun foncé — palette.dominant[2]) pour hover / accent sur fond clair

## Palette

- dominant[0] → `#ec7c33` = accent principal (CTAs, eyebrows, highlights)
- dominant[1] → `#e9a986` = teinte douce (décorative parcimonieuse)
- dominant[2] → `#79360b` = brun foncé (accent sur fond clair, hover)
- accent_on_dark → `#ec7c33`
- accent_on_light → `#79360b`
- Texte sur fond sombre : blanc `#FFFFFF`
- Texte sur fond clair : `#1B1B1B`

## Typographie

- Display/headings : **Inter** 800-900, uppercase, tracking négatif
- Body : **Inter** 500, tracking normal, leading-relaxed
- Labels/eyebrows/mono : **IBM Plex Mono** 700, uppercase, tracking large
- Chargé via Google Fonts dans index.html

## Sections livrees

| Section | Fichier | Note |
|---|---|---|
| Header | Header.tsx | Sticky dark, hamburger mobile |
| Hero | Hero.tsx | Full-bleed photo-35, headline massif |
| About | About.tsx | Photo split (photo-29) + identité |
| Services | Services.tsx | 6 services en 3-col grid dark |
| Process | Process.tsx | 3 étapes dark |
| Gallery | Gallery.tsx | Grille bento réalisations |
| Testimonials | Testimonials.tsx | 3 temoignages avec rotation |
| FAQ | Faq.tsx | Accordion dark split |
| Contact | Contact.tsx | Form + infos |
| Footer | Footer.tsx | Dark 4-col |

## Statistiques affichées

- Pas d'année de fondation connue dans lead.json → section About met en avant la polyvalence (résidentiel + commercial) et couverture complète (A à Z)

## Photos utilisées

- fb-photo-35.jpg → Hero (façade maison moderne dramatique, ciel bleu, éclairage doré — rôle hero)
- fb-photo-2.jpg → Hero (backup / utilisé comme 2e image hero ou about)
- fb-photo-29.jpg → About (façade maison avec garage — bonne pour le split about)
- fb-photo-7.jpg → Gallery (open concept avec escalier et cuisine)
- fb-photo-4.jpg → Gallery (cuisine complétée)
- fb-photo-5.jpg → Gallery (plancher époxy et spots)
- fb-photo-9.jpg → Gallery (sous-sol armoires blanches)
- fb-photo-27.jpg → Gallery (cuisine/séjour aire ouverte)
- fb-photo-30.jpg → Gallery (tour boisée en forêt — projet spécialisé)
- fb-photo-31.jpg → Gallery (terrasse composite)
- fb-photo-32.jpg → Gallery (terrasse pergola)
- fb-photo-34.jpg → Gallery (aire ouverte escalier)
- fb-photo-41.jpg → Gallery (sous-sol époxy marbré)
- fb-photo-42.jpg → Gallery (chambre navy)
- fb-photo-50.jpg → Gallery (salon foyer bois)
- fb-photo-37.jpg → Gallery (conservée manuellement)
- fb-photo-38.jpg → Gallery (pièce utilitaire finition)
- fb-photo-17.jpg → Gallery (sous-sol rénové duplicate)
- fb-photo-20.jpg → Gallery (duplicate photo-5)
- fb-photo-21.jpg → Gallery (duplicate photo-4)
- fb-photo-15.jpg → (duplicate photo-2 — non utilisée séparément)
- fb-photo-45.jpg → Gallery (semi-finished utility room)

## Final check

(à remplir après bash _inputs/check.sh)

## Final check

- RUN_HASH: 21e3a4df94811cf3bebdb68f7478cfffab64c855
- GIT_REV : ca60f208912445e545c5771d555f1e661068a610
- All HARD GATES: PASS (1, 2, 3, 4, 5, 6, 10, 11, 12)
- Soft warn 8: 23 placements for 22 photos (agency-grade target 33+) — acceptable for project scope
- Soft warn 9: 24 img tags, 23 with loading/width/height — fixed before commit
- checkPassed: true
