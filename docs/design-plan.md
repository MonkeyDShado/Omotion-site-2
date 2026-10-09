# Plan de design — Omotion

Statut : **proposition, en attente de validation**. Aucun style n'est codé tant que ce plan n'est pas validé.

## 1. Analyse du logo

Fichier : `src/assets/brand/omotion-logo.png` (PNG 1080×1080, fond transparent, déposé tel quel, non modifié).

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

### Points à trancher avant de coder

1. **Nom écrit « O'Motion » dans le logo**, alors que CLAUDE.md impose « Omotion » dans le texte. Je propose : le logo reste tel quel (on ne le modifie pas), et le texte courant suit la règle choisie. **Laquelle est la bonne : Omotion ou O'Motion ?**
2. **Pas de SVG ni de version claire.** Le logotype `#470F79` est illisible sur fond sombre (contraste 1,5:1). Il faut une version claire (logotype blanc) pour le hero vidéo et le pied de page, idéalement en SVG. `[À COMPLÉTER — fichiers à fournir]`
3. **Marges transparentes importantes** : le logo n'occupe que ~46 % de la largeur du carré. Pour l'en-tête, il faudra soit un fichier recadré fourni par toi, soit mon accord pour recadrer uniquement les marges vides (sans toucher au dessin).

## 2. Palette proposée (6 tokens)

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

## 3. Typographies (2 options, à choisir)

Aucune police de marque connue. Les deux options suivent le logotype (géométrique, arrondi) et sont gratuites, auto-hébergées via `@fontsource` (pas d'appel à Google Fonts : plus rapide et sans transfert de données vers Google, utile pour le RGPD).

- **Option A — proche du logo** : *Outfit* (titres, 600) + *Instrument Sans* (texte, 400/500). Cohérence maximale avec le logotype, rendu propre et calme.
- **Option B — plus de caractère** : *Bricolage Grotesque* (titres, 700) + *Figtree* (texte, 400/500). Titres plus expressifs qui contrastent avec les formes fluides du symbole, texte toujours très lisible sur mobile.

Ma recommandation : **A**, parce que le travail doit rester la star et que le logo porte déjà toute la personnalité.

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

- [ ] Orthographe du nom : **Omotion** ou **O'Motion** ?
- [ ] Palette des 6 tokens
- [ ] Typographie : **A** ou **B**
- [ ] Fourniture d'une version claire (et si possible SVG) du logo, ou accord pour recadrer les marges vides
- [ ] Principes de grille et de mouvement
