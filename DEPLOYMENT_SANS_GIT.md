# 🚀 Déploiement sans Git - Kassiopée Formation

## 📋 Méthode 1 : Déploiement manuel sur Netlify

### Étape 1 : Préparer le projet
```bash
npm run build
```

### Étape 2 : Créer un compte Netlify
1. Allez sur https://netlify.com
2. Cliquez sur "Sign up"
3. Créez un compte (email + mot de passe)

### Étape 3 : Déploiement par glisser-déposer
1. Allez sur https://app.netlify.com/drop
2. Glissez-déposez le dossier `.next` dans la zone
3. Attendez que le déploiement se termine
4. Votre site sera accessible via une URL Netlify (ex: https://amazing-name-123456.netlify.app)

### Étape 4 : Configuration
1. Allez dans "Site settings" > "Site details"
2. Changez le nom du site en "kassiopee-formation"
3. Votre URL sera : https://kassiopee-formation.netlify.app

### Étape 5 : Variables d'environnement
1. Allez dans "Site settings" > "Environment variables"
2. Ajoutez les variables suivantes :
   ```
   NEXT_PUBLIC_SITE_URL=https://kassiopee-formation.netlify.app
   NEXT_PUBLIC_TELEPHONE=01 XX XX XX XX
   NEXT_PUBLIC_EMAIL_SIEGE=contact@kassiopee-formation.fr
   NEXT_PUBLIC_ADDRESS_SIEGE=15 rue de la Formation, 75001 Paris
   ```

### Étape 6 : Redéployer
1. Allez dans "Deploys" > "Trigger deploy" > "Deploy site"
2. Attendez la fin du déploiement

## 📋 Méthode 2 : Déploiement via Netlify CLI

### Étape 1 : Installer Netlify CLI
```bash
npm install -g netlify-cli
```

### Étape 2 : Se connecter à Netlify
```bash
netlify login
```

### Étape 3 : Déployer
```bash
netlify deploy --prod --dir=.next
```

## 📋 Méthode 3 : Déploiement via Vercel (alternative)

### Étape 1 : Installer Vercel CLI
```bash
npm install -g vercel
```

### Étape 2 : Déployer
```bash
vercel --prod
```

## 🔄 Mise à jour du site

### Pour mettre à jour le site :
1. Modifiez votre code local
2. Lancez `npm run build`
3. Glissez-déposez le nouveau dossier `.next` sur Netlify
4. Ou utilisez `netlify deploy --prod --dir=.next`

## 🎯 Avantages de chaque méthode

### Déploiement manuel (glisser-déposer)
- ✅ Simple et rapide
- ✅ Pas besoin de Git
- ❌ Pas de versioning
- ❌ Pas de déploiement automatique

### Netlify CLI
- ✅ Plus professionnel
- ✅ Possibilité de rollback
- ✅ Logs détaillés
- ❌ Nécessite l'installation de la CLI

### Vercel
- ✅ Optimisé pour Next.js
- ✅ Déploiement très rapide
- ✅ Fonctionnalités avancées
- ❌ Nécessite l'installation de la CLI

## 🚀 Recommandation

**Pour commencer rapidement :** Utilisez la méthode 1 (glisser-déposer)
**Pour un usage professionnel :** Installez Git et suivez le guide `DEPLOYMENT.md`

---

**Besoin d'aide ?** Consultez la documentation Netlify : https://docs.netlify.com/
