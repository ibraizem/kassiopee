# 🚀 Guide de déploiement - Kassiopée Formation

## 📋 Prérequis

- Compte GitHub
- Compte Netlify
- Git installé sur votre machine

## 🔧 Étape 1 : Préparation du projet

### 1.1 Vérifier que tout fonctionne
```bash
npm run build
npm run dev
```

### 1.2 Tester les images
```bash
npm run check-images
```

### 1.3 Configurer les variables d'environnement
Copiez `env.example` vers `.env.local` et remplissez les valeurs :
```bash
cp env.example .env.local
```

## 🌐 Étape 2 : Déploiement sur GitHub

### 2.1 Initialiser Git (si pas déjà fait)
```bash
git init
git add .
git commit -m "Initial commit: Kassiopée Formation website"
```

### 2.2 Créer un repository sur GitHub
1. Allez sur https://github.com
2. Cliquez sur "New repository"
3. Nom : `kassiopee-formation`
4. Description : "Site web Kassiopée Formation - Organisme de formation professionnelle"
5. Public ou Private (votre choix)
6. Ne pas cocher "Initialize with README"

### 2.3 Connecter le projet local à GitHub
```bash
git remote add origin https://github.com/VOTRE_USERNAME/kassiopee-formation.git
git branch -M main
git push -u origin main
```

## 🌍 Étape 3 : Déploiement sur Netlify

### 3.1 Méthode 1 : Déploiement automatique depuis GitHub

1. **Connecter à Netlify**
   - Allez sur https://netlify.com
   - Cliquez sur "New site from Git"
   - Choisissez "GitHub"
   - Autorisez l'accès à votre repository

2. **Configurer le déploiement**
   - Repository : `VOTRE_USERNAME/kassiopee-formation`
   - Branch : `main`
   - Build command : `npm run build`
   - Publish directory : `.next`

3. **Variables d'environnement**
   - Allez dans "Site settings" > "Environment variables"
   - Ajoutez les variables suivantes :
     ```
     NEXT_PUBLIC_SITE_URL=https://votre-site.netlify.app
     NEXT_PUBLIC_TELEPHONE=01 XX XX XX XX
     NEXT_PUBLIC_EMAIL_SIEGE=contact@kassiopee-formation.fr
     NEXT_PUBLIC_ADDRESS_SIEGE=15 rue de la Formation, 75001 Paris
     ```

### 3.2 Méthode 2 : Déploiement manuel

1. **Build du projet**
   ```bash
   npm run build
   ```

2. **Upload sur Netlify**
   - Allez sur https://netlify.com
   - Glissez-déposez le dossier `.next` dans la zone de déploiement

## ⚙️ Étape 4 : Configuration post-déploiement

### 4.1 Domaine personnalisé (optionnel)
1. Allez dans "Site settings" > "Domain management"
2. Ajoutez votre domaine personnalisé
3. Configurez les DNS selon les instructions Netlify

### 4.2 SSL/HTTPS
- Netlify fournit automatiquement un certificat SSL
- Votre site sera accessible en HTTPS

### 4.3 Analytics (optionnel)
1. Créez un compte Google Analytics
2. Ajoutez l'ID dans les variables d'environnement
3. Le tracking sera automatiquement activé

## 🔄 Étape 5 : Mise à jour continue

### 5.1 Workflow de mise à jour
```bash
# Faire vos modifications
git add .
git commit -m "Description des modifications"
git push origin main
```

### 5.2 Netlify se mettra à jour automatiquement
- Chaque push sur la branche `main` déclenchera un nouveau déploiement
- Vous recevrez un email de confirmation

## 🛠️ Dépannage

### Problème : Build échoue
- Vérifiez les logs dans Netlify
- Testez localement avec `npm run build`
- Vérifiez que toutes les dépendances sont dans `package.json`

### Problème : Images ne s'affichent pas
- Vérifiez que les images sont dans `public/images/`
- Vérifiez les chemins dans le code
- Testez avec `npm run check-images`

### Problème : Variables d'environnement
- Vérifiez que les variables commencent par `NEXT_PUBLIC_`
- Redéployez après modification des variables

## 📊 Monitoring

### 4.1 Analytics Netlify
- Allez dans "Analytics" pour voir les statistiques de visite
- Surveillez les performances

### 4.2 Logs
- Allez dans "Functions" > "Logs" pour voir les logs de l'API
- Surveillez les erreurs

## 🎯 Prochaines étapes

1. **Configurer un domaine personnalisé**
2. **Ajouter Google Analytics**
3. **Configurer une base de données PostgreSQL** (pour les leads)
4. **Ajouter des tests automatisés**
5. **Configurer un CDN** (optionnel)

---

**Besoin d'aide ?** Consultez la documentation Netlify : https://docs.netlify.com/
