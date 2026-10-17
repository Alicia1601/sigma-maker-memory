/* =========================================================
   SIGMA Maker Memory - script.js
   1) CONFIGURATION  : les infos à compléter (coordonnées, liens, noms)
   2) CONTENUS       : projets, équipe, Groupe 17
   3) MÉCANIQUE      : en-tête, pied de page, animations, fenêtre de détail
   ========================================================= */
'use strict';
document.documentElement.classList.add('js');

/* ---------------------------------------------------------
   1) CONFIGURATION : complète ici, tout le site se met à jour
   Laisse '' (vide) tant que l'information n'est pas confirmée.
   --------------------------------------------------------- */
const SITE = {
  logo: 'images/logo-sigma.png',
  slogan: 'SCIENCE-CONSCIENCE-METHODE',                // ex. : 'Le slogan officiel de SIGMA'
  localisation: 'Angle rue Dansou et rue Awoudi,Lomé-TOGO',          // ex. : 'Lomé, Togo'
  email: 'contact@gs-sigma.com',                 // ex. : 'contact@exemple.com'
  telephone: '+228 92 10 98 98',             // ex. : '+228 90 00 00 00'
  facebook: ' https://www.facebook.com/SigmaOfficiel1',              // lien complet https://...
  tiktok: 'https://www.tiktok.com/@.gs.sigma?_r=1&_t=ZS-9AdhFV92GGG',                // lien complet https://...
  linkedin: 'https://www.linkedin.com/company/gs-sigma/ ',              // lien complet https://...
  formulaireIdees: 'https://ee.kobotoolbox.org/x/imiT9W9R'        // lien du Google Form (active le bouton « Proposer une idée »)
};

/* ---------------------------------------------------------
   2) CONTENUS
   --------------------------------------------------------- */

/* Équipe du FabLab SIGMA (genre : 'f' = icône féminine, 'h' = icône masculine) */
const EQUIPE = [
  { civ: 'Mme', nom: 'ASSOLOHOU Cica',  role: 'Référente du Lab', genre: 'f', principal: true },
  { civ: 'M.',  nom: 'ADJARE Armand',   role: 'FabManager',       genre: 'h' },
  { civ: 'M.',  nom: 'AKAKPO Aimée',    role: 'FabManager',       genre: 'h' },
  { civ: 'M.',  nom: 'OLANLO Sylvestre', role: 'FabManager',      genre: 'h' }
];

/* Groupe 17 : remplace les « nom: '' » par les vrais noms (ex. civ: 'M.', nom: 'DUPONT Jean', genre: 'h') */
const GROUPE17 = [
  { civ: 'Mlle', nom: 'AMOUSSOU Alice Kafui', role: 'Stagiaire FabManager', genre: 'f' },
  { civ: 'M.', nom: 'ABALO Essohan-Eyouemou ', role: 'Stagiaire FabManager', genre: 'h' },
  { civ: 'M.', nom: 'KADANGA tchamiè', role: 'Stagiaire FabManager', genre: 'h' },
  { civ: 'M.', nom: 'KADE Yata Lido Djo', role: 'Stagiaire FabManager', genre: 'h' },
  { civ: 'M.', nom: 'ABRANGAO Loukman', role: 'Stagiaire FabManager', genre: 'h' }
];

/* Icônes (SVG en ligne, aucune bibliothèque nécessaire) */
const ICONS = {
  traffic: '<rect x="8" y="2" width="8" height="20" rx="3"/><circle cx="12" cy="7" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="17" r="1.6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
  scale: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10a4 4 0 0 1 8 0"/><path d="M12 10l2-2.2"/>',
  drop: '<path d="M12 2.7s6 6.3 6 10.8a6 6 0 0 1-12 0C6 9 12 2.7 12 2.7z"/>',
  map: '<path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2z"/><path d="M9 3v16"/><path d="M15 5v16"/>'
};
const svg = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

/* Les six projets du catalogue initial.
   Les fiches expliquent le besoin, l'utilité et le principe général. Rien n'est inventé sur la fabrication.
   Image de chaque carte : images/projet-1.jpg ... projet-6.jpg */
const PROJETS = [
  {
    titre: 'Système de feux tricolores', periode: '2022–2024', groupe: '2022-2024', icone: 'traffic', image: 'images/projet-1.jpg',
    court: 'Rouge, orange, vert : un panneau de signalisation pour matérialiser les règles de circulation.',
    besoin: 'Sur la route, véhicules et piétons se partagent le même espace. Sans règle commune, les risques d’accident augmentent et la circulation se bloque.',
    utilite: 'Les feux tricolores indiquent à chacun quand s’arrêter, se préparer ou passer. Ils rendent les déplacements plus fluides et protègent les usagers.',
    applications: ['Carrefours', 'Passages piétons', 'Chantiers', 'Éducation routière'],
    principe: 'Le principe général : des lumières qui se succèdent dans un ordre précis et pendant des durées définies, pour donner un signal clair et prévisible.'
  },
  {
    titre: 'Horloge', periode: '2022–2024', groupe: '2022-2024', icone: 'clock', image: 'images/projet-2.jpg',
    court: 'Un objet du quotidien repensé par les élèves : une horloge qui donne l’heure et qui prend vie grâce à leur créativité.',
    besoin: 'En classe comme à l’atelier, bien gérer son temps est essentiel. Cette horloge offre un repère simple pour s’organiser, coordonner les activités et respecter les horaires.',
    utilite: 'Une horloge permet de suivre le temps qui passe, de planifier les activités et d’arriver à l’heure.',
    applications: ['Salles de classe', 'Ateliers', 'Bureaux', 'Gestion du temps'],
    principe: 'Le principe général : mesurer le temps écoulé de façon régulière, puis l’afficher sous une forme lisible par tous.'
  },
  {
    titre: 'Alarme pour l’établissement', periode: '2022–2024', groupe: '2022-2024', icone: 'bell', image: 'images/projet-3.jpg',
    court: 'Un signal fort pour alerter toute une communauté, pensé pour l’établissement.',
    besoin: 'Dans un établissement où se côtoient de nombreuses personnes, il faut pouvoir attirer l’attention de tous, rapidement et sans ambiguïté.',
    utilite: 'Une alarme transmet une information importante en quelques secondes : un danger, un évènement ou une consigne à suivre.',
    applications: ['Sécurité des personnes', 'Protection des locaux', 'Signalement d’évènements', 'Exercices d’évacuation'],
    principe: 'Le principe général : un déclencheur active un signal sonore, assez puissant pour être entendu dans les espaces concernés.'
  },
  {
    titre: 'Prise de poids et calcul automatique de l’IMC', periode: '2022–2024', groupe: '2022-2024', icone: 'scale', image: 'images/projet-4.jpg',
    court: 'Monter sur la balance et obtenir son IMC sans calculer : la technologie au service de la santé.',
    besoin: 'Suivre sa corpulence aide à mieux connaître son corps. Mais le calcul de l’IMC (poids divisé par la taille au carré) rebute souvent.',
    utilite: 'Le système automatise ce calcul et donne un repère immédiat. L’IMC reste un indicateur, pas un diagnostic : pour un avis de santé, on consulte un professionnel.',
    applications: ['Suivi de la santé', 'Activités sportives', 'Sensibilisation à l’hygiène de vie', 'Infirmerie'],
    principe: 'Le principe général : mesurer le poids, appliquer automatiquement la formule de l’IMC, puis afficher le résultat.'
  },
  {
    titre: 'Dispositif distributeur de liquide', periode: '2025–2026', groupe: '2025-2026', icone: 'drop', image: 'images/projet-5.jpg',
    court: 'Servir un verre de jus sans toucher au récipient : pratique, propre et dosé.',
    besoin: 'Servir une boisson à beaucoup de monde peut être long, salissant et peu hygiénique, surtout quand chacun manipule le même récipient.',
    utilite: 'Un distributeur sert le liquide au bon endroit, avec moins de gaspillage et plus de propreté.',
    applications: ['Évènements scolaires', 'Cantines et buvettes', 'Points d’eau', 'Distribution de boissons'],
    principe: 'Le principe général : commander l’écoulement d’un liquide depuis un réservoir jusqu’au verre.'
  },
  {
    titre: 'Carte interactive racontant l’histoire des villes du Togo', periode: '2025–2026', groupe: '2025-2026', icone: 'map', image: 'images/projet-6.jpg',
    court: 'Voyager à travers le Togo et découvrir le passé de ses villes, d’un simple geste.',
    besoin: 'L’histoire des villes est souvent dispersée dans les livres. Beaucoup d’élèves aimeraient la découvrir de façon plus vivante.',
    utilite: 'Une carte interactive transforme l’apprentissage en exploration : on choisit un lieu et on découvre ce qu’il raconte.',
    applications: ['Cours d’histoire-géographie', 'Culture générale', 'Valorisation du patrimoine', 'Découverte du pays'],
    principe: 'Le principe général : l’utilisateur sélectionne un lieu sur la carte et accède à son histoire.'
  }
];

/* ---------------------------------------------------------
   3) MÉCANIQUE DU SITE (pas besoin d'y toucher)
   --------------------------------------------------------- */
const page = document.body.dataset.page;

const logoTag = (cls) => `<img class="${cls}" src="${SITE.logo}" alt="Logo SIGMA" data-logo>`;

function buildHeader() {
  const liens = [['accueil', 'index.html', 'Accueil'], ['projets', 'projets.html', 'Projets'], ['apropos', 'apropos.html', 'À propos']];
  const items = liens.map(([id, href, label]) =>
    `<li><a href="${href}"${id === page ? ' aria-current="page"' : ''}>${label}</a></li>`).join('');
  return `<header class="site-header">
    <div class="container header-in">
      <a class="brand" href="index.html" aria-label="FabLab SIGMA, retour à l’accueil">
        ${logoTag('logo-img')}
        <span class="brand-text">FabLab <strong>SIGMA</strong></span>
      </a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="menu" aria-label="Ouvrir le menu"><span></span><span></span><span></span></button>
      <nav class="nav" id="menu" aria-label="Navigation principale"><ul>${items}</ul></nav>
    </div>
  </header>`;
}

function buildFooter() {
  const ligne = (label, valeur, lien) => valeur
    ? `<li><span class="f-label">${label}</span>${lien ? `<a href="${lien}">${valeur}</a>` : valeur}</li>`
    : `<li><span class="f-label">${label}</span><span class="soon">Bientôt disponible</span></li>`;
  const reseau = (nom, url) => url
    ? `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${nom}</a></li>`
    : `<li><span class="soon">${nom} : bientôt disponible</span></li>`;
  const slogan = SITE.slogan || 'La mémoire vivante du FabLab de SIGMA.';
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="f-brand-logo">${logoTag('logo-img')}</div>
          <p><strong>SIGMA Maker Memory</strong></p>
          <p>${slogan}</p>
        </div>
        <div>
          <h4>Nous trouver</h4>
          <ul>
            ${ligne('Localisation', SITE.localisation)}
            ${ligne('E-mail', SITE.email, SITE.email ? 'mailto:' + SITE.email : '')}
            ${ligne('Téléphone', SITE.telephone, SITE.telephone ? 'tel:' + SITE.telephone.replace(/\s+/g, '') : '')}
          </ul>
        </div>
        <div>
          <h4>Nous suivre</h4>
          <ul>
            ${reseau('Facebook', SITE.facebook)}
            ${reseau('TikTok', SITE.tiktok)}
            ${reseau('LinkedIn', SITE.linkedin)}
          </ul>
        </div>
      </div>
      <p class="footer-bottom">© ${new Date().getFullYear()} SIGMA Maker Memory. Un projet réalisé par le Groupe 17. Tous droits réservés.</p>
    </div>
  </footer>`;
}

function mountLayout() {
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = buildHeader();
  if (f) f.outerHTML = buildFooter();

  /* Logo : si l'image est absente, on affiche le nom SIGMA à la place */
  document.querySelectorAll('img[data-logo]').forEach((img) => {
    const secours = () => {
      const s = document.createElement('span');
      s.className = 'logo-fallback';
      s.textContent = 'SIGMA';
      img.replaceWith(s);
    };
    img.addEventListener('error', secours, { once: true });
    if (img.complete && img.naturalWidth === 0) secours();
  });

  /* Menu mobile */
  const bouton = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (bouton && menu) {
    bouton.addEventListener('click', () => {
      const ouvert = menu.classList.toggle('open');
      bouton.setAttribute('aria-expanded', ouvert);
      bouton.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
    });
  }
  const entete = document.querySelector('.site-header');
  const surScroll = () => entete && entete.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', surScroll, { passive: true });
  surScroll();
}

/* Apparition douce au défilement */
function observerReveals() {
  const cibles = document.querySelectorAll('[data-reveal]:not(.in)');
  if (!('IntersectionObserver' in window)) { cibles.forEach((c) => c.classList.add('in')); return; }
  const obs = new IntersectionObserver((entrees) => {
    entrees.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: .12 });
  cibles.forEach((c, i) => { c.style.setProperty('--d', (i % 4) * 0.08 + 's'); obs.observe(c); });
}

/* Accueil : mot qui change + halo qui suit la souris */
function initAccueil() {
  const rot = document.getElementById('rotator');
  if (rot && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const mots = ['forme', 'vie', 'du relief', 'leur envol'];
    let i = 0;
    setInterval(() => {
      rot.classList.add('out');
      setTimeout(() => { i = (i + 1) % mots.length; rot.textContent = mots[i]; rot.classList.remove('out'); }, 350);
    }, 2600);
  }
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      hero.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    });
  }
}

/* Bouton « Proposer une idée » : actif seulement quand le lien du formulaire existe */
function initBoutonIdee() {
  document.querySelectorAll('[data-idea-btn]').forEach((btn) => {
    if (SITE.formulaireIdees) {
      btn.href = SITE.formulaireIdees;
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
      btn.removeAttribute('aria-disabled');
    } else {
      btn.setAttribute('aria-disabled', 'true');
      btn.removeAttribute('href');
    }
  });
  document.querySelectorAll('[data-idea-hint]').forEach((h) => { h.hidden = Boolean(SITE.formulaireIdees); });
}

/* Page Projets : cartes, filtres et fenêtre de détail */
function initProjets() {
  const grille = document.getElementById('projects-grid');
  if (!grille) return;

  PROJETS.forEach((p, i) => {
    const carte = document.createElement('article');
    carte.className = 'pcard';
    carte.dataset.groupe = p.groupe;
    carte.setAttribute('data-reveal', '');
    carte.innerHTML = `
      <div class="media">
        <span class="badge">${p.periode}</span>
        <div class="ph">${svg(p.icone)}<span>Image à ajouter<br>${p.image}</span></div>
        <img src="${p.image}" alt="Photo du projet : ${p.titre}" loading="lazy">
      </div>
      <div class="pbody">
        <h3>${p.titre}</h3>
        <p>${p.court}</p>
        <button class="btn btn-primary btn-small" type="button" data-index="${i}">Accéder</button>
      </div>`;
    const img = carte.querySelector('img');
    img.addEventListener('error', () => img.remove(), { once: true });
    grille.appendChild(carte);
  });

  /* Filtres par période */
  document.querySelectorAll('.chip[data-filter]').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-filter]').forEach((c) => c.setAttribute('aria-pressed', c === chip));
      const f = chip.dataset.filter;
      grille.querySelectorAll('.pcard').forEach((c) => { c.hidden = !(f === 'tous' || c.dataset.groupe === f); });
    });
  });

  /* Fenêtre de détail */
  const modal = document.getElementById('modal');
  const contenu = document.getElementById('modal-content');
  let declencheur = null;

  const ouvrir = (index, bouton) => {
    const p = PROJETS[index];
    declencheur = bouton;
    contenu.innerHTML = `
      <div class="modal-top">
        <div class="m-icon">${svg(p.icone)}</div>
        <div><h3 id="modal-title">${p.titre}</h3><small>Période : ${p.periode}</small></div>
        <button class="modal-close" type="button" aria-label="Fermer la fiche">&times;</button>
      </div>
      <div class="modal-body">
        <div class="m-block"><h4>Le besoin</h4><p>${p.besoin}</p></div>
        <div class="m-block"><h4>À quoi ça sert</h4><p>${p.utilite}</p></div>
        <div class="m-block"><h4>Applications concrètes</h4><ul class="tags">${p.applications.map((a) => `<li>${a}</li>`).join('')}</ul></div>
        <div class="m-block"><h4>Comment ça fonctionne</h4><p>${p.principe}</p></div>
        <p class="m-note">Cette fiche présente le projet de façon générale.</p>
      </div>`;
    contenu.querySelector('.modal-close').addEventListener('click', () => modal.close());
    modal.showModal();
    document.body.classList.add('no-scroll');
  };

  grille.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-index]');
    if (b) ouvrir(Number(b.dataset.index), b);
  });
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
  modal.addEventListener('close', () => {
    document.body.classList.remove('no-scroll');
    if (declencheur) declencheur.focus();
  });
}

/* Page À propos : avatars et cartes de personnes */
function avatar(genre) {
  const cheveux = genre === 'f'
    ? '<path d="M31 45c0-13 7-21 19-21s19 8 19 21v21c0 4-4 6-8 4V49H39v21c-4 2-8 0-8-4z" fill="rgba(255,255,255,.55)"/>'
    : '';
  const fond = genre === 'f' ? '#DA593D' : '#1F6980';
  return `<svg viewBox="0 0 100 100" role="img" aria-label="Icône de profil">
    <rect width="100" height="100" fill="${fond}"/>${cheveux}
    <circle cx="50" cy="44" r="13.5" fill="#fff"/>
    <path d="M17 100c2-20 15-29 33-29s31 9 33 29z" fill="#fff"/>
  </svg>`;
}

function carte(p) {
  const vide = !p.nom;
  const titre = vide ? 'Nom à compléter' : `${p.civ ? p.civ + ' ' : ''}${p.nom}`;
  return `<article class="person${p.principal ? ' lead' : ''}${vide ? ' empty' : ''}" data-reveal>
    <div class="avatar">${avatar(p.genre)}</div>
    <h3>${titre}</h3>
    <p class="role">${p.role}</p>
  </article>`;
}

function initApropos() {
  const eq = document.getElementById('team-grid');
  const g17 = document.getElementById('group-grid');
  if (eq) eq.innerHTML = EQUIPE.map(carte).join('');
  if (g17) g17.innerHTML = GROUPE17.map(carte).join('');
}

/* Démarrage */
mountLayout();
if (page === 'accueil') initAccueil();
if (page === 'projets') initProjets();
if (page === 'apropos') initApropos();
initBoutonIdee();
observerReveals();
