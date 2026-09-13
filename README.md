# ✨ Pretty Layana Braids — Site vitrine

Site vitrine statique (HTML/CSS/JS, aucun framework, aucune installation
requise) pour la vente de mèches et de tissages naturels, avec commande
directe par WhatsApp.

Ce dossier reprend et améliore le site existant :
- **Vraies photos** de tissages naturels ajoutées au catalogue (7 modèles).
- **Filtres corrigés** : chaque catégorie de mèches a désormais son propre
  filtre (avant, certaines catégories comme "Bouclées" ou "Kinky" n'avaient
  pas de bouton de filtre dédié).
- **Lightbox** : cliquer sur une photo l'affiche en grand.
- **Menu mobile** et **bouton WhatsApp flottant**.
- Palette et typographie retravaillées (bordeaux/or inspirés de vos propres
  photos, polices Fraunces + Manrope) pour un rendu plus haut de gamme.

## Structure du projet

```
pretty-layana-braids/
├── index.html              # Toute la structure de la page (une seule page)
├── css/
│   └── style.css           # Tous les styles
├── js/
│   ├── produits.js         # ⭐ Le catalogue : c'est ICI qu'on ajoute un produit
│   └── main.js             # Logique du site (filtres, lightbox, menu...)
├── images/
│   ├── logo.svg             # Logo (placeholder à remplacer par le vôtre)
│   └── produits/            # Toutes les photos du catalogue
│       ├── tissage-raide-noir-jais.jpg
│       ├── tissage-raide-soyeux.jpg
│       ├── tissage-balayage-miel.jpg
│       ├── tissage-duo-noir-platine.jpg
│       ├── tissage-ondule-bouncy.jpg
│       ├── tissage-blond-platine.jpg
│       └── tissage-ombre-cendre.jpg
├── vercel.json
├── .gitignore
└── README.md
```

## 📸 Ajouter une nouvelle photo / un nouveau produit

1. Dépose ta photo dans `images/produits/` (nomme le fichier simplement,
   sans espace ni accent, ex : `mon-nouveau-modele.jpg`).
2. Ouvre `js/produits.js` et ajoute un objet dans le tableau `PRODUITS` :

```js
{
  id: 'mon-nouveau-modele',
  nom: 'Mon Nouveau Modèle',
  categorie: 'tissages',       // voir la liste CATEGORIES juste au-dessus
  prix: 15000,                  // ou `null` pour afficher "Prix sur demande"
  image: 'images/produits/mon-nouveau-modele.jpg',
  description: 'Une courte description.',
},
```

3. Sauvegarde. Aucune autre modification n'est nécessaire — le site
   affiche automatiquement le produit dans la bonne catégorie.

> Les 7 produits "Tissages naturels" ont été ajoutés avec `prix: null`
> (donc "Prix sur demande") car je ne connaissais pas vos tarifs réels
> pour ces modèles. Remplacez `null` par le prix en FCFA dès que vous
> l'avez (ex : `prix: 18000`).

## 🖼️ Remplacer le logo

`images/logo.svg` est un simple monogramme "PL" que j'ai créé en attendant
votre vrai logo (je n'ai pas pu récupérer le fichier `logo.svg` original
depuis votre site GitHub Pages). Remplacez simplement ce fichier par le
vôtre (même nom `logo.svg`, ou changez le chemin dans `index.html` — il y
a 3 endroits : l'en-tête, le pied de page, et la favicon).

## 💻 Tester en local

Aucune installation n'est nécessaire. Deux options :

- Double-cliquez sur `index.html` pour l'ouvrir directement dans votre
  navigateur, **ou**
- Pour un rendu identique à la production (recommandé) :
  ```bash
  npx serve .
  ```
  puis ouvrez l'URL affichée (ex: http://localhost:3000).

## 🚀 Déploiement

### Sur votre dépôt GitHub existant (Pretty-Layana-Braids)

```bash
# Dans votre dossier local du dépôt Pretty-Layana-Braids :
# 1. Remplacez tous les fichiers par ceux de ce dossier
#    (gardez votre .git, ne le touchez pas)

git add .
git commit -m "Ajout des tissages naturels + refonte du design"
git push origin main
```

Comme GitHub Pages est déjà activé sur ce dépôt, le site sera mis à jour
automatiquement à l'adresse habituelle
(`https://ivannserignoleba-afk.github.io/Pretty-Layana-Braids/`).

### Ajouter aussi un déploiement Vercel (en plus de GitHub Pages)

Les deux peuvent coexister sans problème — Vercel donnera une URL
supplémentaire (plus rapide, avec HTTPS et un domaine personnalisable).

**Option A — via le site Vercel :**
1. Allez sur https://vercel.com/new
2. Importez le dépôt GitHub `Pretty-Layana-Braids`
3. Framework preset : choisissez **"Other"** (site statique, aucune
   compilation nécessaire)
4. Build command : laissez vide — Output directory : `.`
5. Cliquez sur **Deploy**

**Option B — via Vercel CLI :**
```bash
npm install -g vercel
cd pretty-layana-braids
vercel login
vercel --prod
```

Vercel vous donnera une URL du type `https://pretty-layana-braids.vercel.app`.

## Notes

- Le numéro WhatsApp (`2250757422805`) est centralisé en haut du fichier
  `js/main.js` — modifiez-le à un seul endroit si besoin.
- Adresse, téléphone et email affichés dans la section Contact sont repris
  tels quels de votre site actuel ; modifiez-les directement dans
  `index.html` (section `<section id="contact">`) si besoin.
- Les 7 photos de tissages ont été légèrement recadrées (bandeaux noirs
  WhatsApp supprimés) et compressées pour un chargement rapide du site.
