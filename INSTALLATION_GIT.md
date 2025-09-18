# 📥 Installation de Git pour le déploiement

## 🚀 Installation de Git sur Windows

### Méthode 1 : Téléchargement direct
1. Allez sur https://git-scm.com/download/win
2. Téléchargez la version 64-bit pour Windows
3. Lancez l'installateur
4. Suivez les instructions (gardez les options par défaut)
5. Redémarrez votre terminal/PowerShell

### Méthode 2 : Via Chocolatey (si installé)
```powershell
choco install git
```

### Méthode 3 : Via Winget (Windows 10/11)
```powershell
winget install Git.Git
```

## ✅ Vérification de l'installation
```bash
git --version
```

## 🔧 Configuration initiale
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@exemple.com"
```

## 📋 Prochaines étapes
Une fois Git installé, vous pourrez :
1. Initialiser le repository : `git init`
2. Ajouter les fichiers : `git add .`
3. Faire le premier commit : `git commit -m "Initial commit"`
4. Connecter à GitHub et déployer sur Netlify

---

**Note :** Si vous préférez, vous pouvez aussi déployer directement sur Netlify sans Git en utilisant la méthode de déploiement manuel décrite dans `DEPLOYMENT.md`.
