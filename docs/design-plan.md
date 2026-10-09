# Plan de design — O'Motion

Statut : **validé.** Seul point ouvert : une version vectorielle (SVG) officielle du logo, à fournir plus tard.

## 1. Analyse du logo

Fichier source : `src/assets/brand/omotion-logo.png` (PNG 1080×1080, fond transparent, conservé tel quel).

- **Symbole** : deux formes fluides entrelacées qui dessinent un « S » / un mouvement de rotation, avec deux petites gouttes satellites. Dégradé violet → rose, volumes doux, aucun angle vif.
- **Logotype** : sans-serif géométrique, graisse semi-grasse, terminaisons arrondies, violet très profond uni.
- **Ce que ça dit** : mouvement continu, deux éléments qui s'enchaînent (les deux services ?), énergie pop, plutôt chaleureux que technique.

Couleurs relevées dans le fichier (médianes par famille de pixels) :

| Rôle dans le logo | Hex |
|---|---|
| Logotype | `#470F79` |
| Violet vif (haut du symbole) | `#9432EF` |
| Violet profond (ombres) | `#4C0B8E` |
| Rose vif (haut du symbole) | `#ED258A` |
| Magenta profond (ombres) | `#A31373` |

### Décisions prises

1. **Nom : « O'Motion »**, comme sur le logo. Dans les textes du site, on écrit « O’Motion » avec l'apostrophe typographique (’), la convention en français. Dans les noms de fichiers et le code, on garde `omotion`.
2. **Recadrage autorisé** : seules les marges transparentes ont été retirées, le dessin n'a pas été touché.
3. **Version claire** : tu n'en as pas et tu m'as laissé décider. J'ai créé une variante provisoire où **seul le logotype passe du violet au blanc**. Le symbole est intact : ses couleurs restent lisibles sur fond sombre (violet 3,6:1 et rose 4,8:1 sur `night`, au-delà du seuil de 3:1 exigé pour un élément graphique).

Fichiers dans `src/assets/brand/` :

| Fichier | Contenu | Usage |
|---|---|---|
| `omotion-logo.png` | original 1080×1080, intouché | archive, source |
| `omotion-logo-cropped.png` | original sans les marges (518×420) | en-tête, fonds clairs |
| `omotion-logo-light.png` | logotype blanc, symbole d'origine (518×420) | hero vidéo, pied de page, fonds sombres |
| `omotion-symbol.png` | symbole seul (326×287) | favicon, en-tête mobile compact |

Limite : ces fichiers sont des PNG d'environ 500 px de large. C'est suffisant pour l'en-tête et le pied de page, mais trop juste pour un logo géant. Le jour où tu as un SVG (demande-le à la personne qui a créé le logo), on remplacera ces fichiers sans rien changer d'autre. `[À COMPLÉTER — SVG du logo, plus tard]`

## 2. Palette (6 tokens) — validée

| Token | Hex | Origine | Usage |
|---|---|---|---|
| `--color-ink` | `#470F79` | logotype | texte principal, titres |
| `--color-violet` | `#9432EF` | violet vif | bouton « Demander un devis », liens, focus clavier |
| `--color-rose` | `#ED258A` | rose vif | accent ponctuel : survol, état actif, détails graphiques |
| `--color-magenta` | `#A31373` | magenta profond | survol du bouton, texte d'accent sur fond clair |
| `--color-paper` | `#FFFFFF` | fond du logo | fond principal |
| `--color-night` | `#150A22` | dérivé du violet profond | hero vidéo, pied de page, visionneuse de projet |

Plus un gris-violet très clair `#F4F2F8` pour séparer les zones si besoin (variante de `paper`, pas une couleur de plus).

Contrastes vérifiés (WCAG AA = 4,5:1 pour le texte courant) :

- `ink` sur blanc : **13,0** ✔
- `violet` sur blanc / texte blanc sur bouton violet : **5,3** ✔
- `magenta` sur blanc : **7,3** ✔
- `rose` sur blanc : **4,0** ✘ → jamais pour du texte courant sur fond clair ; réservé aux grands titres, aux formes et aux états de survol. Sur `night` : 4,8 ✔.
- blanc sur `night` : **17+** ✔

**Le dégradé violet → rose** du symbole est la signature. Il apparaît à 2 ou 3 endroits maximum (soulignement du lien actif, barre de progression de la vidéo, survol du bouton devis), jamais en fond de section. Le fond reste neutre pour que les visuels clients, qui auront leurs propres couleurs, ne se battent pas avec la marque.

## 3. Typographies — option A validée

Aucune police de marque connue. Les deux options suivent le logotype (géométrique, arrondi) et sont gratuites, auto-hébergées via `@fontsource` (pas d'appel à Google Fonts : plus rapide et sans transfert de données vers Google, utile pour le RGPD).

- **Option A — proche du logo** : *Outfit* (titres, 600) + *Instrument Sans* (texte, 400/500). Cohérence maximale avec le logotype, rendu propre et calme.
- **Option B — plus de caractère** : *Bricolage Grotesque* (titres, 700) + *Figtree* (texte, 400/500). Titres plus expressifs qui contrastent avec les formes fluides du symbole, texte toujours très lisible sur mobile.

**Choix retenu : A** — Outfit (titres) + Instrument Sans (texte).

Échelle : base 16 px mobile / 18 px desktop, ratio ~1,25, titres en casse normale (pas de majuscules espacées).

## 4. Grille et mise en page

- **Mobile d'abord** (trafic Instagram/TikTok) : une colonne, marges 16 px, médias pleine largeur.
- **Tablette / desktop** : 12 colonnes, largeur max 1440 px pour les médias, 68 caractères max pour le texte.
- **Portfolio** : grille en colonnes de type « maçonnerie » qui **respecte le ratio natif** de chaque œuvre (9:16, 1:1, 16:9 côte à côte). Pas de cartes identiques, pas d'ombre, pas de coins arrondis forcés : l'image fait la carte, le titre et le client sont posés dessous.
- **Fiche projet** : visuel principal grand format sur fond `night` (comme une salle de projection), puis texte sur fond clair : contexte, brief, livrables, puis un encadré « Rôle de l'IA » au même niveau visuel que les autres infos, ni caché ni mis en vedette.
- **En-tête** : logo à gauche, Projets / Services / À propos à droite, bouton « Demander un devis » toujours visible (barre fixe en bas d'écran sur mobile, dans l'en-tête sur desktop).

## 5. Mouvement

- **Un seul moment fort** : le hero d'accueil en plein écran avec le showreel muet en boucle sur fond `night`, logo clair par-dessus.
- **Ensuite, uniquement en réponse à l'utilisateur** : survol (ou entrée dans l'écran sur mobile) d'une miniature → l'aperçu vidéo se lance ; ouverture d'un projet → transition douce entre la miniature et la fiche (View Transitions d'Astro).
- Courbes d'accélération souples, inspirées des formes du symbole ; durées courtes (150–300 ms).
- Pas d'animation d'entrée sur les sections.
- `prefers-reduced-motion` : vidéos en pause sur leur image `poster`, transitions remplacées par un simple fondu ou supprimées.

## 6. Principes

1. Le travail occupe l'espace, l'interface s'efface.
2. La couleur de marque sert à agir (devis, liens, focus), pas à décorer.
3. Chaque œuvre garde son format d'origine.
4. L'IA est expliquée projet par projet, simplement.
5. Lisible et utilisable au pouce, au clavier, sans animation.

## 7. À valider

- [x] Orthographe du nom : **O'Motion**
- [x] Palette des 6 tokens
- [x] Typographie : **A** (Outfit + Instrument Sans)
- [x] Recadrage des marges vides
- [x] Version claire provisoire (logotype blanc)
- [ ] SVG officiel du logo, à fournir plus tard
- [x] Principes de grille et de mouvement
