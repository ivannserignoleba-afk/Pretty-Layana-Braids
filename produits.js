/**
 * Catalogue Pretty Layana Braids
 * ================================
 * Pour AJOUTER un produit : copie un objet ci-dessous, modifie ses champs,
 * ajoute-le au tableau PRODUITS. Pour une photo, dépose le fichier dans
 * images/produits/ puis indique son nom dans le champ "image".
 *
 * Champs :
 *  - id         : identifiant unique (texte court, sans espace)
 *  - nom        : nom affiché sur la carte
 *  - categorie  : une valeur parmi CATEGORIES ci-dessous (sert au filtre)
 *  - prix       : nombre en FCFA, ou null pour afficher "Prix sur demande"
 *  - image      : chemin vers la photo (dans images/produits/), ou null
 *                 pour une carte sans photo (couleur de fond automatique)
 *  - description: courte description affichée sous le nom
 */

const CATEGORIES = [
  { id: 'toutes', label: 'Toutes' },
  { id: 'tissages', label: 'Tissages naturels' },
  { id: 'bouclees', label: 'Bouclées' },
  { id: 'tresses', label: 'Tresses' },
  { id: 'marley', label: 'Marley' },
  { id: 'kinky', label: 'Kinky' },
  { id: 'twist', label: 'Twist' },
  { id: 'nattes', label: 'Nattes' },
  { id: 'premium', label: 'Premium' },
];

const PRODUITS = [
  // ---- Tissages naturels (photos réelles) ----
  {
    id: 'tissage-raide-noir-jais',
    nom: 'Raide Noir Jais',
    categorie: 'tissages',
    prix: null,
    image: 'images/produits/tissage-raide-noir-jais.jpg',
    description: 'Tissage lisse et soyeux, noir profond.',
  },
  {
    id: 'tissage-raide-soyeux',
    nom: 'Raide Soyeux',
    categorie: 'tissages',
    prix: null,
    image: 'images/produits/tissage-raide-soyeux.jpg',
    description: 'Double mèche raide, finition brillante.',
  },
  {
    id: 'tissage-balayage-miel',
    nom: 'Balayage Miel',
    categorie: 'tissages',
    prix: null,
    image: 'images/produits/tissage-balayage-miel.jpg',
    description: 'Dégradé châtain doré, effet balayage naturel.',
  },
  {
    id: 'tissage-duo-noir-platine',
    nom: 'Duo Noir & Platine',
    categorie: 'tissages',
    prix: null,
    image: 'images/produits/tissage-duo-noir-platine.jpg',
    description: 'Contraste noir intense et blond platine.',
  },
  {
    id: 'tissage-ondule-bouncy',
    nom: 'Ondulé Bouncy',
    categorie: 'tissages',
    prix: null,
    image: 'images/produits/tissage-ondule-bouncy.jpg',
    description: 'Pointes ondulées, mouvement volumineux.',
  },
  {
    id: 'tissage-blond-platine',
    nom: 'Blond Platine',
    categorie: 'tissages',
    prix: null,
    image: 'images/produits/tissage-blond-platine.jpg',
    description: 'Blond platine lumineux, longueur généreuse.',
  },
  {
    id: 'tissage-ombre-cendre',
    nom: 'Ombré Cendré',
    categorie: 'tissages',
    prix: null,
    image: 'images/produits/tissage-ombre-cendre.jpg',
    description: 'Mélange cendré et blond, effet ombré.',
  },

  // ---- Mèches (catalogue existant) ----
  { id: 'curly-braid', nom: 'Curly Braid', categorie: 'bouclees', prix: 2800, image: null, description: 'Mèches bouclées' },
  { id: 'super-marley', nom: 'Super Marley', categorie: 'marley', prix: 2200, image: null, description: 'Mèches Marley' },
  { id: 'loli', nom: 'Loli', categorie: 'tresses', prix: 2000, image: null, description: 'Mèches pour tresses' },
  { id: 'ganda', nom: 'Ganda', categorie: 'tresses', prix: 800, image: null, description: 'Mèches pour tresses' },
  { id: 'kinky', nom: 'Kinky', categorie: 'kinky', prix: 2400, image: null, description: 'Mèches kinky' },
  { id: 'noura-curl', nom: 'Noura Curl', categorie: 'bouclees', prix: 3500, image: null, description: 'Mèches bouclées' },
  { id: 'sanja', nom: 'Sanja', categorie: 'bouclees', prix: 3500, image: null, description: 'Mèches bouclées' },
  { id: 'suzy', nom: 'Suzy', categorie: 'bouclees', prix: 3000, image: null, description: 'Mèches bouclées' },
  { id: 'passion-twist', nom: 'Passion Twist', categorie: 'twist', prix: 3200, image: null, description: 'Mèches twist' },
  { id: 'vivi', nom: 'Vivi', categorie: 'bouclees', prix: 3500, image: null, description: 'Mèches bouclées' },
  { id: 'kinky-long', nom: 'Kinky Long', categorie: 'kinky', prix: 3000, image: null, description: 'Mèches kinky' },
  { id: 'jumbo-braid', nom: 'Jumbo Braid', categorie: 'tresses', prix: 3300, image: null, description: 'Mèches pour tresses' },
  { id: 'reina', nom: 'Reina', categorie: 'nattes', prix: 3000, image: null, description: 'Mèches pour nattes' },
  { id: 'goddess', nom: 'Goddess', categorie: 'premium', prix: 3800, image: null, description: 'Mèches premium' },
];
