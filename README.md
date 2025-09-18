# Kassiopée Formation - Site Web Complet

Site web moderne et complet pour Kassiopée Formation, organisme de formation professionnelle spécialisé dans les secteurs sanitaire, social et services à la personne.

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
- ✅ JSON-LD (Organisation, LocalBusiness)
- ✅ Sitemap.xml automatique
- ✅ Robots.txt
- ✅ Images optimisées (next/image)
- ✅ Lazy loading
- ✅ Core Web Vitals optimisés

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

## 📝 Pages Principales

1. **Accueil** (`/`) - Hero, formations, régions, témoignages
2. **Formations** (`/formations`) - Catalogue filtrable
3. **Régions** (`/regions/*`) - Pages par région
4. **Inscription** (`/inscription`) - Formulaire candidature
5. **À propos** (`/a-propos`) - Histoire, équipe, valeurs
6. **Contact** (`/contact`) - Coordonnées et formulaire
7. **Centres** (`/centres`) - Liste des centres
8. **Pages légales** - Mentions, CGU, confidentialité

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
Publish directory: out

# Ajouter les variables d'environnement dans l'interface Netlify
```

## 📋 TODO / Personnalisation

### Obligatoire avant production :

1. **Variables d'environnement** :
   - ✅ Remplacer toutes les valeurs `[À COMPLÉTER]`
   - ✅ Configurer les emails de contact
   - ✅ Ajouter l'adresse du siège social réelle

2. **Contenu** :
   - ✅ Remplacer les images Pexels par vos vraies images
   - ✅ Personnaliser les témoignages
   - ✅ Adapter les formations au catalogue réel
   - ✅ Compléter les mentions légales

3. **Analytics** :
   - ✅ Configurer Google Analytics
   - ✅ Ajouter Google Search Console
   - ✅ Configurer les pixels de tracking (Facebook, etc.)

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