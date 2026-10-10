# CLAUDE.md — Site O'Motion

Ce fichier donne à Claude Code le contexte du projet. Lis-le en entier avant toute modification. Les éléments marqués `[À COMPLÉTER]` sont des informations que le propriétaire doit fournir : ne les invente pas, laisse un placeholder visible et signale-le.

## Le projet

O'Motion est le service d'un graphiste free-lance. Le site est un portfolio vitrine dont le seul but est de **transformer un visiteur en demande de devis**.

Deux services, et seulement deux :

- **Key visuals** : un visuel fort et polyvalent pour promouvoir un nouveau produit ou un événement sans campagne coûteuse. Après la prise de contact, un questionnaire ciblé définit le ton et les supports de diffusion ; le visuel est pensé pour fonctionner sur chacun. Délai : 48 h après les réponses (24 h de création, puis 24 h pour que le client demande ses retouches, 3 maximum).
- **Montage vidéo**, en deux formules :
  - **Vidéo scénarisée** : entièrement générée par l'IA (ex. vidéo produit qui met en avant la gourmandise d'une barre de chocolat, scénario au rendu cinéma). Argument : pas de coût de tournage en studio. Le client valide le scénario puis le storyboard ; ensuite 4 jours : 3 jours de création (retouches signalées le 3e jour), retouches et livraison le 4e. Une seule vidéo à la fois par client.
  - **Vidéo institutionnelle** : montage plus simple à partir de vidéos libres de droits, textes, images et animations (outils : CapCut, Canva, non cités sur le site). Délai : 5 jours, recherche des contenus comprise. Retouches nombreuses (nombre exact `[À COMPLÉTER]`).

Le processus créatif est **assisté par l'IA** (génération d'images, retouche, montage). C'est un argument assumé : rapidité, volume d'exploration, coûts maîtrisés, avec une direction artistique humaine. Le site doit le dire clairement et honnêtement, sans en faire un gadget ni s'en excuser.

Cibles : **PME et entrepreneurs**, souvent avec un petit budget, mais qui veulent un rendu professionnel. Le site doit rassurer sur le sérieux et montrer que la qualité reste accessible, sans parler de « low cost ».

## Identité de marque

- Nom : **O'Motion**, comme sur le logo. Dans le texte du site, écris « O’Motion » avec l'apostrophe typographique, jamais "Omotion", "O'motion" ni "O'MOTION". Dans les noms de fichiers et le code : `omotion`.
- Logo : dans `src/assets/brand/` (voir `docs/design-plan.md`, section 1). `omotion-logo-light.png` est une variante claire provisoire, créée avec l'accord du propriétaire : seul le logotype est passé en blanc. N'en crée pas d'autres. SVG officiel : `[À COMPLÉTER — plus tard]`
- Palette : validée, voir `docs/design-plan.md` section 2 (ink `#470F79`, violet `#9432EF`, rose `#ED258A`, magenta `#A31373`, paper `#FFFFFF`, night `#150A22`).
- Typographies : validées, Outfit (titres) + Instrument Sans (texte), auto-hébergées via `@fontsource`.
- Ton : direct, confiant, concret. **Vouvoiement** des visiteurs ; le graphiste parle à la première personne (« je »). Phrases courtes, verbes d'action, aucun jargon marketing creux ("solutions innovantes", "sublimer votre image").

## Direction artistique

Le nom contient "motion" : le mouvement est le fil conducteur, mais il doit servir le travail, pas le décorer.

- **Le travail est la star.** Les visuels et vidéos occupent l'espace ; l'interface reste sobre autour.
- **Un moment fort** : le hero ouvre sur le showreel ou un key visual animé, plein écran, avec des formes fluides en mouvement inspirées du symbole. Ailleurs, le mouvement reste discret.
- Les animations répondent aux actions de l'utilisateur (survol d'une miniature qui lance un aperçu vidéo, ouverture d'un projet). Respecte toujours `prefers-reduced-motion`.
- **Icônes animées** (demande du propriétaire) : icônes maison dans `src/components/Icon.astro`, trait arrondi en dégradé violet → rose comme le symbole. Elles se dessinent une fois à l'apparition et bougent légèrement au survol de leur bloc (`.has-icon`). Les étapes des offres apparaissent l'une après l'autre. Pas de bibliothèque d'icônes génériques, pas d'animation en boucle hors du hero.
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
- Vidéos : **YouTube** pour les vidéos complètes (champ `youtubeId`), affichées avec `YouTubePlayer.astro` : image d'abord, YouTube chargé seulement au clic, domaine `youtube-nocookie.com`. Pas de synchronisation automatique de la chaîne : le portfolio reste une sélection, chaque vidéo a sa fiche (contexte, rôle de l'IA). Les extraits muets en boucle (film d'accueil, aperçus au survol) restent des MP4/WebM courts et compressés dans `public/videos/`, découpés à partir des originaux.
- Échange de fichiers : le propriétaire partage un **dossier Google Drive** en lien public (« Tous les utilisateurs disposant du lien », lecteur). Télécharger avec `gdown` (pip), puis optimiser et ranger ; ne jamais committer les originaux lourds.
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

## Portfolio disponible

Inventaire fourni par le propriétaire (les fichiers arrivent via Google Drive, à optimiser puis ranger) :

- **Key visuals** (~20) : 4 pour des clients (2 clients, 2 visuels chacun), 2 d'auto-promotion, ~14 créations de démonstration (dont une dizaine en campagnes, le reste en visuels indépendants).
- **Vidéos** (~10) : 1 pour un client, 1 d'auto-promotion, 2 vidéos produit, 2 en motion design 2D, 2 scénarisées, 2 films (les plus travaillés, sans visée publicitaire, pour montrer le savoir-faire).
- **Films d'accueil** (`src/data/hero.ts`) : plein écran, sans cadre ni texte superposé (choix du propriétaire). Écran horizontal : extrait du court métrage « Amour All », 16:9. Écran vertical : extrait de « Tempête d’ambre », publicité concept (démo, non commandée) pour le parfum Zara #Tobacco, vertical. Texte et bouton devis sous le film.

Musique : « Amour All » utilise « All I Know » (The Weeknd) sans licence. Sur le site, les extraits restent muets ; pour une version publique (YouTube), recommander une musique sous licence ou libre de droits.

Key visuals en ligne (`src/content/projects/`), un fichier par campagne, classés par thème (`src/data/themes.ts`) : Chrysto (restauration, 9), Coco Flavours (restauration, 2), Le goût de l’inédit (boissons, 2), Top (boissons, vraie marque, 1), Savon noir El Hiama (beauté, 6), L’Interdit Givenchy (beauté, vraie marque, 3), Ochrysto (mode, 8 ; marque du propriétaire réutilisée pour ses démos), Your Money (finance, **seul vrai client**, 2), Graphiste pour key visual (auto-promotion, 2). Tous les autres sont des démos.

Honnêteté : chaque projet indique son contexte (`context` : `client`, `auto-promotion` ou `concept`). Une création de démonstration est toujours affichée comme telle, jamais présentée comme une commande client. Afficher le nom d'un client suppose son accord.

## Modèle de contenu d'un projet

Frontmatter de `src/content/projects/*.md` :

```yaml
title: "Nom du projet"
context: client                # client | auto-promotion | concept
client: "Nom du client"        # seulement si context = client
date: 2026-05-01
category: key-visual           # key-visual | video
videoType: film                # optionnel : produit | motion-design | scenario | film | institutionnel
campaign: "Nom de la campagne" # optionnel, regroupe des key visuals
featured: true                 # affiché sur l'accueil
cover: ../../assets/projects/xxx/cover.jpg
coverAlt: "Description précise du visuel"
videoPreview: /videos/xxx-preview.mp4   # optionnel, boucle muette
youtubeId: "dQw4w9WgXcQ"                # optionnel, vidéo complète sur YouTube
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
- Après envoi : message de confirmation clair indiquant le délai de réponse : **sous 24 h**.
- Protection anti-spam (honeypot), pas de reCAPTCHA intrusif.
- Mentions légales conformes au droit français : le propriétaire travaille en indépendant et n'a **pas de SIRET** pour l'instant. Rédige les mentions sans SIRET (identité de l'éditeur, contact, hébergeur, RGPD) et prévois un emplacement à ajouter si un SIRET est obtenu plus tard. N'invente jamais de numéro. Pas de cookies de tracking sans consentement ; préfère une analytique sans cookies (Plausible, Umami).

## À ne pas faire

- Inventer des projets, des clients, des témoignages ou des chiffres. Utilise des placeholders clairement marqués.
- Utiliser des images de stock ou générées pour représenter de faux travaux clients.
- Modifier, redessiner ou recolorer le logo.
- Ajouter des sections non demandées (blog, boutique, tarifs détaillés) sans validation.
- Cacher ou minimiser l'usage de l'IA, ou au contraire en faire l'argument principal à la place du travail.
