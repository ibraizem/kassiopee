const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Déploiement de Kassiopée Formation...\n');

// Vérifier que le build fonctionne
console.log('📦 Vérification du build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build réussi !\n');
} catch (error) {
  console.error('❌ Erreur lors du build:', error.message);
  process.exit(1);
}

// Vérifier les images
console.log('🖼️ Vérification des images...');
try {
  execSync('npm run check-images', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️ Certaines images personnalisées sont manquantes (normal si c\'est la première fois)');
}

// Créer un fichier de déploiement
const deployInfo = {
  timestamp: new Date().toISOString(),
  buildVersion: process.env.npm_package_version || '1.0.0',
  nodeVersion: process.version,
  platform: process.platform,
  arch: process.arch
};

fs.writeFileSync('.next/deploy-info.json', JSON.stringify(deployInfo, null, 2));

console.log('\n🎯 Instructions de déploiement :');
console.log('1. Allez sur https://netlify.com');
console.log('2. Glissez-déposez le dossier ".next" dans la zone de déploiement');
console.log('3. Attendez la fin du déploiement');
console.log('4. Configurez les variables d\'environnement dans Netlify');
console.log('\n📁 Dossier prêt pour le déploiement : .next/');
console.log('📊 Informations de déploiement : .next/deploy-info.json');

console.log('\n✨ Déploiement préparé avec succès !');
