# Kassiopée Formation - Site Web Complet

Site web moderne et complet pour Kassiopée Formation, organisme de formation professionnelle spécialisé dans les formations RNCP, développement personnel, langues et marketing digital.

## 🚀 Aperçu

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **TypeScript**: Oui
- **Base de données**: SQLite (développement) / PostgreSQL (production)
- **Déploiement**: Vercel/Netlify ready
- **SEO**: Optimisé (sitemap, robots.txt, OpenGraph, JSON-LD)
- **Accessibilité**: WCAG AA compliant
- **Performance**: Optimisé Lighthouse

## 🛠 Installation et Développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [URL_DU_REPO]
cd kassiopee-formation

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
```

### Configuration des variables d'environnement

Créez un fichier `.env.local` avec les variables suivantes :

```env
# URL du site
NEXT_PUBLIC_SITE_URL=https://kassiopee-formation.fr

# Informations de contact
NEXT_PUBLIC_TELEPHONE=01 XX XX XX XX
NEXT_PUBLIC_EMAIL_SIEGE=contact@kassiopee-formation.fr
NEXT_PUBLIC_ADDRESS_SIEGE="15 rue de la Formation, 75001 Paris"

# Analytics (optionnel)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxx

# API Admin (pour les stats leads)
ADMIN_API_KEY=your-secure-admin-key

# Base de données (production)
DATABASE_URL=postgresql://user:password@localhost:5432/kassiopee_prod
```

### Développement
```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint

# Tests
npm test
```

## 📁 Structure du Projet

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── formations/        # Catalogue formations
│   ├── regions/           # Pages régionales
│   ├── inscription/       # Formulaire inscription
│   ├── api/               # API Routes
│   └── ...
├── components/
│   ├── ui/                # Composants UI réutilisables
│   └── layout/            # Header, Footer
├── lib/                   # Utilitaires et config
│   ├── database.ts        # Config base de données
│   └── seo.ts             # Utilitaires SEO
└── content/               # Contenu en Markdown
```

## 🎨 Design System

### Palette de couleurs
- **Bleu navy**: `#1e3a8a` (principal)
- **Or**: `#fbbf24` (accent)
- **Bleu clair**: `#0ea5e9` (liens, CTA secondaires)

### Typographie
- **Corps**: Inter (Google Fonts)
- **Titres**: Playfair Display (Google Fonts)

### Composants principaux
- `Header`: Navigation responsive avec mega-menu
- `Hero`: Section hero configurable
- `FormationCard`: Carte formation avec informations
- `ContactForm`: Formulaire RGPD compliant
- `Footer`: Footer complet avec liens et infos légales

## 📊 Fonctionnalités

### SEO & Performance
- ✅ Meta tags dynamiques
- ✅ OpenGraph & Twitter Cards
- ✅ JSON-LD (Organisation, LocalBusiness, Course)
- ✅ Données structurées schema.org pour formations
- ✅ Sitemap.xml automatique
- ✅ Robots.txt
- ✅ Images optimisées (next/image)
- ✅ Lazy loading
- ✅ Core Web Vitals optimisés
- ✅ Métadonnées spécifiques par formation avec codes RNCP

### Accessibilité
- ✅ Navigation clavier
- ✅ ARIA labels
- ✅ Contrastes WCAG AA
- ✅ Screen readers friendly
- ✅ Focus management

### RGPD & Sécurité
- ✅ Formulaires avec consentement explicite
- ✅ Hash des adresses IP
- ✅ Politique de confidentialité complète
- ✅ Gestion des cookies
- ✅ Validation côté client/serveur

## 🎓 Catalogue de Formations (Mise à jour 2025-01-22)

### Formations RNCP Certifiantes
1. **RNCP NTC - Négociateur Technico-Commercial** (Code RNCP: 39063)
   - Durée: 5 jours (35h)
   - Public: Conseillers commerciaux, télévendeurs
   - Compétences: Prospection, argumentation, closing, CRM
   - URL: `/formations/formation-ntc`

2. **RNCP ARH - Assistant Ressources Humaines** (Code RNCP: 35030)
   - Durée: 5 jours (35h)
   - Public: Assistant(e) RH, gestionnaire personnel
   - Compétences: Administration personnel, recrutement, GPEC
   - URL: `/formations/formation-arh`

### Formations Développement Personnel
3. **Booster sa Candidature - Un CV Qui Ouvre des Portes**
   - Durée: 1 journée (6-7h)
   - Public: Tout public
   - Compétences: Rédaction CV, mise en page, stratégie candidature
   - URL: `/formations/formation-cv`

### Formations Langues
4. **Anglais Professionnel - Niveau Opérationnel**
   - Durée: 2 jours (14h)
   - Public: Salariés, demandeurs d'emploi
   - Compétences: Emails professionnels, téléphone, présentations
   - URL: `/formations/formation-anglais`

### Formations Marketing Digital
5. **Marketing Digital - Réseaux Sociaux & Acquisition**
   - Durée: 3 jours (21h)
   - Public: Entrepreneurs, responsables marketing
   - Compétences: Stratégie social media, contenu, campagnes pub
   - URL: `/formations/formation-marketing`

## 📝 Pages Principales

1. **Accueil** (`/`) - Hero, formations, régions, témoignages
2. **Formations** (`/formations`) - Catalogue filtrable avec 5 formations professionnelles
3. **Pages détaillées formations** - Pages complètes avec programme, objectifs, CTA
4. **Régions** (`/regions/*`) - Pages par région
5. **Inscription** (`/inscription`) - Formulaire candidature
6. **À propos** (`/a-propos`) - Histoire, équipe, valeurs
7. **Contact** (`/contact`) - Coordonnées et formulaire
8. **Centres** (`/centres`) - Liste des centres
9. **Pages légales** - Mentions, CGU, confidentialité

## 🔌 API Routes

### POST `/api/leads`
Sauvegarde des demandes de contact/inscription.

**Body:**
```json
{
  "nom": "Dupont",
  "prenom": "Jean",
  "email": "jean.dupont@email.com",
  "telephone": "0123456789",
  "message": "Intéressé par la formation aide-soignant",
  "formation_interest": "Aide-soignant",
  "region": "Île-de-France",
  "centre_preference": "Paris République",
  "consentement_rgpd": true,
  "source_page": "/formations/aide-soignant"
}
```

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Variables d'environnement à configurer sur Vercel
```

### Netlify
```bash
# Build settings
Build command: npm run build
Publish directory: {{ ... }}

# Ajouter les variables d'environnement dans l'interface Netlify
```

## 🚀 Changements Récents (2025-01-22)

### ✅ Transformation Complète du Catalogue de Formations
- **Suppression** : Toutes les anciennes formations IT (Transformation Digitale, ITIL, Scrum, IA, etc.)
- **Ajout** : 5 nouvelles formations professionnelles avec focus RNCP et développement personnel
- **Navigation** : Mise à jour complète du menu header et des catégories
- **SEO** : Optimisation avec données structurées schema.org/Course pour chaque formation
- **CTA** : Boutons d'action vers FranceCompétences et MonCompteFormation
- **Responsive** : Design mobile-first conservé avec optimisations tactiles

### 📁 Fichiers Modifiés
- `src/app/formations/page.tsx` - Page principale formations
- `src/app/formations/layout.tsx` - Layout avec métadonnées SEO
- `src/components/layout/Header.tsx` - Navigation mise à jour
- `src/components/ui/FormationCard.tsx` - Support RNCP et CTA
- `src/components/seo/StructuredData.tsx` - Nouveau composant données structurées
- `src/app/formations/formation-ntc/page.tsx` - Page RNCP NTC
- `src/app/formations/formation-arh/page.tsx` - Page RNCP ARH
- `src/app/formations/formation-cv/page.tsx` - Page CV professionnel
- `src/app/formations/formation-anglais/page.tsx` - Page anglais professionnel
- `src/app/formations/formation-marketing/page.tsx` - Page marketing digital

### 🔗 URLs des Nouvelles Pages
- `/formations/formation-ntc` - RNCP Négociateur Technico-Commercial (39063)
- `/formations/formation-arh` - RNCP Assistant Ressources Humaines (35030)
- `/formations/formation-cv` - Booster sa Candidature
- `/formations/formation-anglais` - Anglais Professionnel
- `/formations/formation-marketing` - Marketing Digital

## 📋 TODO / Personnalisation

### Obligatoire avant production :

1. **Variables d'environnement** :
   - ✅ Remplacer toutes les valeurs `[À COMPLÉTER]`
   - ✅ Configurer les emails de contact
   - ✅ Ajouter l'adresse du siège social réelle

2. **Contenu** :
   - ✅ Remplacer les images Pexels par vos vraies images
   - ✅ Personnaliser les témoignages
   - ✅ Adapter les formations au catalogue réel (FAIT - 5 nouvelles formations)
   - ✅ Compléter les mentions légales

3. **Analytics** :
   - ✅ Configurer Google Analytics
   - ✅ Ajouter Google Search Console

4. **Base de données** :
   - ✅ Migrer vers PostgreSQL en production
   - ✅ Configurer les sauvegardes
   - ✅ Sécuriser l'accès

### Optionnel :

1. **CRM Integration** :
   - Webhook vers Salesforce/HubSpot
   - Synchronisation automatique des leads

2. **Paiement** :
   - Intégration Stripe pour les préinscriptions
   - Système de réservation de places

3. **Multilingue** :
   - Configuration next-intl
   - Traductions EN/ES

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests E2E (à implémenter)
npm run test:e2e

# Tests d'accessibilité
npm run test:a11y
```

## 📞 Support

Pour toute question technique :
- Email : tech@kassiopee-formation.fr
- Documentation : [URL_CONFLUENCE]

## 📄 Licence

Propriétaire - © 2024 Kassiopée Formation. Tous droits réservés.

---

**Note importante** : Ce site respecte les standards les plus élevés en matière de performance, accessibilité et SEO. Il est prêt pour la production mais nécessite la personnalisation du contenu et la configuration des services externes.