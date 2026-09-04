const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');

if(menuBtn&&nav){
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}

// Logo intégré directement dans la page pour éviter tout problème de chargement.
const logoSVG=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 120" role="img" aria-label="Pretty Layana Braids"><circle cx="60" cy="60" r="43" fill="none" stroke="#df5b83" stroke-width="2"/><text x="60" y="69" text-anchor="middle" font-family="Georgia,serif" font-size="28" font-weight="700" fill="#df5b83">PL</text><g fill="none" stroke="#231f20" stroke-width="4" stroke-linecap="round"><path d="M91 22c-20 9-27 27-20 43 6 14 19 23 10 43"/><path d="M101 27c-17 10-22 25-17 39 5 14 15 23 8 39"/><path d="M110 34c-14 10-17 23-13 35 4 12 10 19 5 32"/><path d="M116 42c-9 9-11 19-8 28 3 9 7 15 3 25"/></g><g fill="#df5b83"><circle cx="82" cy="40" r="3"/><circle cx="89" cy="55" r="3"/><circle cx="84" cy="71" r="3"/><circle cx="96" cy="83" r="3"/></g><text x="140" y="57" font-family="Georgia,serif" font-weight="700" font-size="31" fill="#231f20">Pretty Layana</text><text x="143" y="82" font-family="Arial,sans-serif" font-weight="700" font-size="12" letter-spacing="7" fill="#df5b83">BRAIDS</text><path d="M141 92h165" stroke="#df5b83" stroke-width="1"/></svg>`;

document.querySelectorAll('.brand-logo').forEach(brand=>{
  brand.innerHTML=logoSVG;
});

document.querySelectorAll('.brand-logo svg').forEach(svg=>{
  svg.style.width='100%';
  svg.style.height='100%';
  svg.style.display='block';
});

function order(product){
  const message=`Bonjour Pretty Layana Braids 🌸\nJe suis intéressé(e) par la mèche : ${product}.\nPouvez-vous m'envoyer le prix et les disponibilités ?`;
  window.open('https://wa.me/2250757422805?text='+encodeURIComponent(message),'_blank');
}

document.querySelectorAll('.filter').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    button.classList.add('active');
    const category=button.dataset.filter;
    document.querySelectorAll('.product').forEach(product=>product.classList.toggle('hidden',category!=='all'&&product.dataset.category!==category));
  });
});