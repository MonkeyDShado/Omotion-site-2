# CLAUDE.md — Site Omotion

Ce fichier donne à Claude Code le contexte du projet. Lis-le en entier avant toute modification. Les éléments marqués `[À COMPLÉTER]` sont des informations que le propriétaire doit fournir : ne les invente pas, laisse un placeholder visible et signale-le.

## Le projet

Omotion est le service d'un graphiste free-lance. Le site est un portfolio vitrine dont le seul but est de **transformer un visiteur en demande de devis**.

Deux services, et seulement deux :

- **Key visuals** : visuels clés pour campagnes, lancements produit, événements, pochettes, affiches, réseaux sociaux.
- **Montage vidéo** : clips, teasers, contenus réseaux sociaux (formats verticaux et horizontaux), motion design léger.

Le processus créatif est **assisté par l'IA** (génération d'images, retouche, montage). C'est un argument assumé : rapidité, volume d'exploration, coûts maîtrisés, avec une direction artistique humaine. Le site doit le dire clairement et honnêtement, sans en faire un gadget ni s'en excuser.

Cibles : `[À COMPLÉTER — ex. marques indépendantes, artistes musicaux, agences événementielles, créateurs de contenu]`.

## Identité de marque

- Nom : **Omotion** (toujours avec cette casse, jamais "OMotion" ni "OMOTION" dans le texte courant).
- Logo : fourni par le propriétaire, à placer dans `src/assets/brand/`. Formats attendus : SVG (prioritaire), PNG transparent, version claire et version foncée. `[À COMPLÉTER — déposer les fichiers]`
- Palette : **à extraire du logo**. Avant de coder les styles, ouvre le logo, relève ses couleurs exactes, puis propose une palette de 4 à 6 tokens nommés et fais-la valider. Ne choisis pas une palette par défaut.
- Typographies : `[À COMPLÉTER si une police de marque existe]`. Sinon, propose deux options cohérentes avec le logo et attends validation.
- Ton : direct, confiant, concret. Tutoiement ou vouvoiement : `[À COMPLÉTER]`. Phrases courtes, verbes d'action, aucun jargon marketing creux ("solutions innovantes", "sublimer votre image").

## Direction artistique

Le nom contient "motion" : le mouvement est le fil conducteur, mais il doit servir le travail, pas le décorer.

- **Le travail est la star.** Les visuels et vidéos occupent l'espace ; l'interface reste sobre autour.
- **Un seul moment fort** : le hero ouvre sur le showreel ou un key visual animé, plein écran. Pas d'animations d'entrée sur chaque section.
- Les animations répondent aux actions de l'utilisateur (survol d'une miniature qui lance un aperçu vidéo, ouverture d'un projet). Respecte toujours `prefers-reduced-motion`.
- À éviter, car ces choix font "site généré" : fond crème avec accent terracotta, fond quasi-noir avec un unique accent vert acide, grilles de cartes identiques arrondies avec la même ombre grise, labels en MAJUSCULES espacées au-dessus de chaque titre, numérotation 01/02/03 sur du contenu qui n'est pas une séquence, flèches "→" ajoutées à tous les liens.
- Avant de coder le design, rédige un court plan (couleurs, typos, grille, principes) dans `docs/design-plan.md` et fais-le valider.

## Arborescence du site

```
/                 Accueil : showreel, sélection de projets, les 2 services, appel à l'action
/projets          Portfolio filtrable (Key visual / Vidéo)
/projets/[slug]   Fiche projet : contexte, brief, livrables, visuels, rôle de l'IA
/services         Détail des 2 offres, processus, délais indicatifs
/a-propos         Le graphiste, l'approche, la place de l'IA dans le processus
/contact          Formulaire de demande de devis
/mentions-legales Mentions légales + politique de confidentialité
```

Navigation principale : Projets, Services, À propos, Contact. Le bouton "Demander un devis" reste accessible partout.

## Stack technique

- **Astro** (site statique, rapide, idéal pour un portfolio riche en médias)
- **TypeScript** en mode strict
- **CSS** : variables CSS pour les tokens de design + Tailwind si souhaité `[À CONFIRMER]`
- **Content Collections** d'Astro pour les projets (Markdown/MDX + frontmatter typé)
- Vidéos : hébergement externe (`[À COMPLÉTER — Vimeo, Bunny Stream, Cloudflare Stream…]`) pour les longues ; fichiers locaux MP4/WebM courts et muets pour les aperçus en boucle
- Formulaire : `[À COMPLÉTER — Formspree, Netlify Forms, Resend…]`
- Hébergement : `[À COMPLÉTER — Netlify, Vercel, Cloudflare Pages]`

Si une autre stack te semble plus adaptée, propose-la avec ses raisons avant d'initialiser le projet.

## Commandes

```bash
npm install        # installer les dépendances
npm run dev        # serveur local (http://localhost:4321)
npm run build      # build de production
npm run preview    # prévisualiser le build
npm run check      # vérification TypeScript / Astro
```

Lance `npm run build` et `npm run check` avant de considérer une tâche terminée.

## Structure des fichiers

```
src/
  assets/brand/        logo et éléments de marque
  assets/projects/     images des projets (optimisées par Astro)
  components/          composants réutilisables
  content/projects/    un fichier .md/.mdx par projet
  layouts/             gabarits de page
  pages/               routes
  styles/tokens.css    couleurs, typos, espacements
public/videos/         aperçus vidéo courts
docs/                  plan de design, notes
```

## Modèle de contenu d'un projet

Frontmatter de `src/content/projects/*.md` :

```yaml
title: "Nom du projet"
client: "Nom du client"        # ou "Projet personnel"
date: 2026-05-01
category: key-visual           # key-visual | video
featured: true                 # affiché sur l'accueil
cover: ../../assets/projects/xxx/cover.jpg
coverAlt: "Description précise du visuel"
videoPreview: /videos/xxx-preview.mp4   # optionnel, boucle muette
videoUrl: "https://..."                  # optionnel, vidéo complète
formats: ["16:9", "9:16", "1:1"]
tools: ["Midjourney", "Photoshop", "Premiere Pro"]
aiRole: "Exploration des pistes visuelles et génération des fonds, composition et retouches finales à la main."
```

Le champ `aiRole` est obligatoire : chaque projet explique en une ou deux phrases ce que l'IA a fait et ce qui relève du travail humain.

## Règles de développement

- Composants petits et lisibles ; pas de dépendance ajoutée sans la justifier.
- Images : toujours via `<Image />` / `<Picture />` d'Astro, formats AVIF/WebP, dimensions explicites, `loading="lazy"` sauf au-dessus de la ligne de flottaison.
- Vidéos d'aperçu : `muted`, `playsinline`, `loop`, `preload="none"` ou `metadata`, une image `poster`, lecture seulement quand visibles. Aucune vidéo avec son en lecture automatique.
- Respecte les ratios natifs des œuvres (vertical, carré, horizontal) : ne recadre pas un key visual pour le faire entrer dans une grille uniforme.
- Responsive mobile en priorité : une grande partie du trafic viendra d'Instagram/TikTok.
- Accessibilité : contraste AA minimum, focus clavier visible, textes alternatifs réels, sous-titres sur les vidéos parlées, navigation possible sans souris.
- Performance cible : Lighthouse ≥ 90 en performance, 100 en accessibilité et SEO.

## SEO et réseaux

- Langue principale : français (`lang="fr"`). Version anglaise : `[À COMPLÉTER — oui/non]`.
- Chaque page : `title` unique, meta description, balises Open Graph avec un visuel de projet.
- Données structurées JSON-LD `ProfessionalService` sur l'accueil.
- Sitemap et `robots.txt` générés au build.
- Liens réseaux sociaux : `[À COMPLÉTER — Instagram, Behance, LinkedIn, TikTok, YouTube…]`.

## Contact et légal

- Formulaire de devis : nom, email, type de service (Key visual / Vidéo / Les deux), budget indicatif, délai souhaité, message, lien de référence optionnel.
- Après envoi : message de confirmation clair indiquant le délai de réponse `[À COMPLÉTER]`.
- Protection anti-spam (honeypot), pas de reCAPTCHA intrusif.
- Mentions légales conformes au droit français : statut `[À COMPLÉTER — ex. micro-entreprise]`, SIRET, hébergeur, RGPD. Pas de cookies de tracking sans consentement ; préfère une analytique sans cookies (Plausible, Umami).

## À ne pas faire

- Inventer des projets, des clients, des témoignages ou des chiffres. Utilise des placeholders clairement marqués.
- Utiliser des images de stock ou générées pour représenter de faux travaux clients.
- Modifier, redessiner ou recolorer le logo.
- Ajouter des sections non demandées (blog, boutique, tarifs détaillés) sans validation.
- Cacher ou minimiser l'usage de l'IA, ou au contraire en faire l'argument principal à la place du travail.
