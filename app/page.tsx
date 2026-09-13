'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Heart, MapPin, Menu, Phone, Plus, Search, ShoppingBag, Sparkles, X } from 'lucide-react'

const products = [
  { name: 'Bohemian Honey', category: 'Bohemian', price: 7500, color: 'Miel & brun', image: '/images/bohemian-braids.png', badge: 'Best-seller' },
  { name: 'Knotless Curls', category: 'Knotless', price: 8500, color: 'Noir naturel', image: '/images/knotless-curls.png', badge: 'Nouveau' },
  { name: 'Ginger Wave', category: 'Ondulées', price: 7000, color: 'Ginger cuivré', image: '/images/ginger-wave.png', badge: 'Tendance' },
  { name: 'Ombre Box', category: 'Box braids', price: 6500, color: 'Noir & auburn', image: '/images/ombre-box.png', badge: '' },
]
const categories = ['Tout voir', 'Bohemian', 'Knotless', 'Ondulées', 'Box braids']

export default function Page() {
  const [category, setCategory] = useState('Tout voir')
  const [cart, setCart] = useState(0)
  const [liked, setLiked] = useState<number[]>([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const filtered = useMemo(() => category === 'Tout voir' ? products : products.filter((product) => product.category === category), [category])

  return (
    <main className="site-shell">
      <div className="announcement">Livraison partout en Côte d&apos;Ivoire <span>•</span> Commandes WhatsApp au 07 57 42 28 05</div>
      <header className="navbar">
        <button className="mobile-menu" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <a className="brand" href="#accueil">Pretty <span>Layana</span><small>BEAUTY SUPPLY</small></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navigation principale">
          <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a><a href="#catalogue" onClick={() => setMenuOpen(false)}>Catalogue</a><a href="#apropos" onClick={() => setMenuOpen(false)}>À propos</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions"><button aria-label="Rechercher"><Search size={19} /></button><button aria-label="Mes favoris"><Heart size={19} /></button><button className="bag-button" aria-label="Panier" onClick={() => setCartOpen(true)}><ShoppingBag size={19} /><span>{cart}</span></button></div>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy"><p className="eyebrow"><Sparkles size={15} /> La beauté, à votre façon</p><h1>Des mèches qui<br /><em>racontent</em> votre style.</h1><p className="hero-text">Découvrez notre sélection de mèches premium, pensées pour sublimer chaque coiffure et révéler votre personnalité.</p><a className="button button-dark" href="#catalogue">Voir le catalogue <ArrowRight size={17} /></a></div>
        <div className="hero-art"><div className="sun-shape" /><div className="hero-card hero-card-main"><img src="/images/bohemian-braids.png" alt="Mèches Bohemian couleur miel" /></div><div className="hero-card hero-card-small"><img src="/images/ginger-wave.png" alt="Mèches ondulées ginger" /></div><div className="hero-stamp">PRETTY<br /><span>LAYANA</span><small>BEAUTY SUPPLY</small></div></div>
      </section>

      <section className="promise-row"><div><span className="promise-icon">✦</span><div><strong>Qualité premium</strong><p>Des mèches douces et durables</p></div></div><div><span className="promise-icon">◌</span><div><strong>Livraison rapide</strong><p>Partout en Côte d&apos;Ivoire</p></div></div><div><span className="promise-icon">♡</span><div><strong>Conseils personnalisés</strong><p>On vous aide à choisir</p></div></div></section>

      <section className="catalogue" id="catalogue"><div className="section-heading"><div><p className="eyebrow">Notre sélection</p><h2>Le catalogue <em>Pretty Layana</em></h2></div><p className="section-note">Des textures et des couleurs pour<br />toutes vos envies.</p></div><div className="filters">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="product-grid">{filtered.map((product, index) => <article className="product-card" key={product.name}><div className="product-image"><img src={product.image} alt={`Mèches ${product.name}`} />{product.badge && <span className="badge">{product.badge}</span>}<button className={liked.includes(index) ? 'like liked' : 'like'} aria-label={`Ajouter ${product.name} aux favoris`} onClick={() => setLiked(liked.includes(index) ? liked.filter((i) => i !== index) : [...liked, index])}><Heart size={17} fill={liked.includes(index) ? 'currentColor' : 'none'} /></button></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.color}</p></div><strong>{product.price.toLocaleString('fr-FR')} F</strong></div><button className="add-cart" onClick={() => setCart(cart + 1)}>Ajouter au panier <Plus size={16} /></button></article>)}</div></section>

      <section className="about" id="apropos"><div className="about-image"><img src="/images/knotless-curls.png" alt="Mèches Pretty Layana" /></div><div className="about-copy"><p className="eyebrow">L&apos;histoire Pretty Layana</p><h2>Votre beauté mérite<br /><em>le meilleur.</em></h2><p>Pretty Layana est une boutique pensée pour celles qui aiment changer de look, oser et se sentir belles. Nous sélectionnons des mèches de qualité pour vous accompagner dans chaque nouvelle idée.</p><a className="text-link" href="#contact">En savoir plus <ArrowRight size={16} /></a></div></section>

      <section className="contact" id="contact"><div><p className="eyebrow">Une question ?</p><h2>Parlons de votre<br /><em>prochaine coiffure.</em></h2></div><div className="contact-details"><p><MapPin size={18} /> Abidjan, Angré KFC — 8e tranche</p><p><Phone size={18} /> 07 57 42 28 05</p><a className="button button-light" href="https://wa.me/2250757422805" target="_blank" rel="noreferrer">Commander sur WhatsApp <ArrowRight size={17} /></a></div></section>
      <footer><a className="brand" href="#accueil">Pretty <span>Layana</span><small>BEAUTY SUPPLY</small></a><p>© 2026 Pretty Layana. Tous droits réservés.</p><div><a href="#contact">Instagram ↗</a></div></footer>
      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={(e) => e.stopPropagation()}><button className="close-cart" onClick={() => setCartOpen(false)}><X /></button><p className="eyebrow">Votre sélection</p><h2>Mon panier</h2>{cart ? <><div className="cart-item"><img src="/images/bohemian-braids.png" alt="Produit sélectionné" /><div><strong>Votre sélection Pretty Layana</strong><p>{cart} article{cart > 1 ? 's' : ''}</p></div><span>{(cart * 7500).toLocaleString('fr-FR')} F</span></div><a className="button button-dark cart-cta" href="https://wa.me/2250757422805" target="_blank" rel="noreferrer">Finaliser sur WhatsApp <ArrowRight size={16} /></a></> : <p className="empty-cart">Votre panier est encore vide.<br />Découvrez nos mèches pour commencer.</p>}</aside></div>}
    </main>
  )
}
