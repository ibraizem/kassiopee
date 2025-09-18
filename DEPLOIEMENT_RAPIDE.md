# ⚡ Déploiement rapide - Kassiopée Formation

## 🚀 Déploiement en 5 minutes

### Étape 1 : Préparer le projet
```bash
npm run deploy
```

### Étape 2 : Déployer sur Netlify
1. **Allez sur** https://netlify.com
2. **Créez un compte** (gratuit)
3. **Glissez-déposez** le dossier `.next` dans la zone de déploiement
4. **Attendez** la fin du déploiement (2-3 minutes)
5. **Votre site est en ligne !** 🎉

### Étape 3 : Personnaliser l'URL
1. Allez dans **"Site settings"** > **"Site details"**
2. Changez le nom en **"kassiopee-formation"**
3. Votre URL sera : **https://kassiopee-formation.netlify.app**

### Étape 4 : Configurer les variables d'environnement
1. Allez dans **"Site settings"** > **"Environment variables"**
2. Ajoutez ces variables :
   ```
   NEXT_PUBLIC_SITE_URL=https://kassiopee-formation.netlify.app
   NEXT_PUBLIC_TELEPHONE=01 XX XX XX XX
   NEXT_PUBLIC_EMAIL_SIEGE=contact@kassiopee-formation.fr
   NEXT_PUBLIC_ADDRESS_SIEGE=15 rue de la Formation, 75001 Paris
   ```

### Étape 5 : Redéployer
1. Allez dans **"Deploys"** > **"Trigger deploy"** > **"Deploy site"**
2. Attendez la fin du déploiement

## ✅ C'est fait !

Votre site **Kassiopée Formation** est maintenant en ligne et accessible au monde entier !

**URL de votre site :** https://kassiopee-formation.netlify.app

## 🔄 Pour mettre à jour le site

1. **Modifiez** votre code local
2. **Lancez** `npm run deploy`
3. **Glissez-déposez** le nouveau dossier `.next` sur Netlify
4. **C'est tout !** Le site se met à jour automatiquement

## 🎯 Prochaines étapes (optionnelles)

- **Ajouter des images personnalisées** (voir `GUIDE_IMAGES.md`)
- **Configurer un domaine personnalisé** (ex: www.kassiopee-formation.fr)
- **Ajouter Google Analytics** pour suivre les visiteurs
- **Configurer une base de données** pour les candidatures

## 🆘 Besoin d'aide ?

- **Documentation Netlify :** https://docs.netlify.com/
- **Support Netlify :** https://www.netlify.com/support/
- **Guide complet :** Voir `DEPLOYMENT.md` pour plus de détails

---

**🎉 Félicitations ! Votre site de formation professionnelle est maintenant en ligne !**
