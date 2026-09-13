// Pretty Layana Braids — logique du site (vanilla JS, sans dépendance)

const NUMERO_WHATSAPP = '2250757422805';

function lienWhatsApp(message) {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function formaterFCFA(montant) {
  return new Intl.NumberFormat('fr-FR').format(montant) + ' FCFA';
}

// ---------- Rendu des filtres ----------

function construireFiltres() {
  const conteneur = document.getElementById('filtres');
  conteneur.innerHTML = '';

  CATEGORIES.forEach((cat, index) => {
    const bouton = document.createElement('button');
    bouton.className = 'filtre' + (index === 0 ? ' est-actif' : '');
    bouton.type = 'button';
    bouton.textContent = cat.label;
    bouton.dataset.categorie = cat.id;
    bouton.addEventListener('click', () => {
      document.querySelectorAll('.filtre').forEach((b) => b.classList.remove('est-actif'));
      bouton.classList.add('est-actif');
      construireGrille(cat.id);
    });
    conteneur.appendChild(bouton);
  });
}

// ---------- Rendu de la grille produits ----------

function construireGrille(categorieActive) {
  const grille = document.getElementById('grille-produits');
  grille.innerHTML = '';

  const produitsAffiches =
    categorieActive === 'toutes'
      ? PRODUITS
      : PRODUITS.filter((p) => p.categorie === categorieActive);

  produitsAffiches.forEach((produit) => {
    grille.appendChild(construireCarteProduit(produit));
  });
}

function construireCarteProduit(produit) {
  const carte = document.createElement('article');
  carte.className = 'carte-produit';

  const categorieLabel =
    CATEGORIES.find((c) => c.id === produit.categorie)?.label || produit.categorie;

  const visuel = document.createElement('div');
  if (produit.image) {
    visuel.className = 'carte-produit__visuel';
    visuel.innerHTML = `<img src="${produit.image}" alt="${produit.nom} — ${categorieLabel}" loading="lazy">`;
    visuel.addEventListener('click', () => ouvrirLightbox(produit.image, produit.nom));
  } else {
    visuel.className = 'carte-produit__visuel carte-produit__visuel--sans-photo';
    visuel.style.background = `linear-gradient(160deg, var(--acajou), var(--or))`;
    visuel.textContent = produit.nom;
  }

  const messageCommande = `Bonjour Pretty Layana Braids, je souhaite commander : ${produit.nom}.`;

  carte.innerHTML = `
    <div class="carte-produit__contenu">
      <span class="carte-produit__tag">${categorieLabel}</span>
      <h3 class="carte-produit__nom">${produit.nom}</h3>
      <p class="carte-produit__description">${produit.description}</p>
      <div class="carte-produit__pied">
        ${
          produit.prix
            ? `<span class="carte-produit__prix">${formaterFCFA(produit.prix)}</span>`
            : `<span class="carte-produit__prix carte-produit__prix--demande">Prix sur demande</span>`
        }
        <a class="bouton bouton--plein bouton--petit" href="${lienWhatsApp(messageCommande)}" target="_blank" rel="noopener">Commander</a>
      </div>
    </div>
  `;

  carte.prepend(visuel);
  return carte;
}

// ---------- Lightbox ----------

function ouvrirLightbox(src, legende) {
  const lightbox = document.getElementById('lightbox');
  document.getElementById('lightbox-image').src = src;
  document.getElementById('lightbox-image').alt = legende;
  document.getElementById('lightbox-legende').textContent = legende;
  lightbox.classList.add('est-ouvert');
  document.body.style.overflow = 'hidden';
}

function fermerLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('est-ouvert');
  document.body.style.overflow = '';
}

// ---------- Menu mobile ----------

function initMenuMobile() {
  const bouton = document.getElementById('bouton-menu');
  const nav = document.getElementById('nav-principale');

  bouton.addEventListener('click', () => {
    nav.classList.toggle('est-ouvert');
  });

  nav.querySelectorAll('a').forEach((lien) => {
    lien.addEventListener('click', () => nav.classList.remove('est-ouvert'));
  });
}

// ---------- Liens WhatsApp génériques (data-whatsapp-msg) ----------

function initLiensWhatsApp() {
  document.querySelectorAll('[data-whatsapp-msg]').forEach((lien) => {
    lien.href = lienWhatsApp(lien.dataset.whatsappMsg);
  });
}

// ---------- Initialisation ----------

document.addEventListener('DOMContentLoaded', () => {
  construireFiltres();
  construireGrille('toutes');
  initMenuMobile();
  initLiensWhatsApp();

  document.getElementById('lightbox-fermer').addEventListener('click', fermerLightbox);
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') fermerLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fermerLightbox();
  });

  document.getElementById('annee').textContent = new Date().getFullYear();
});
