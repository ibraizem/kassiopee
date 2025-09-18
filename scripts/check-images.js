const fs = require('fs');
const path = require('path');

// Configuration des images attendues
const expectedImages = {
  'public/images/hero/kassiopee-hero-main.jpg': 'Image hero page d\'accueil',
  'public/images/hero/kassiopee-about-hero.jpg': 'Image hero page à propos',
  'public/images/hero/kassiopee-formations-hero.jpg': 'Image hero page formations',
  'public/images/hero/kassiopee-contact-hero.jpg': 'Image hero page contact',
  
  'public/images/formations/aide-soignant.jpg': 'Image formation aide-soignant',
  'public/images/formations/auxiliaire-vie-sociale.jpg': 'Image formation auxiliaire de vie',
  'public/images/formations/auxiliaire-puericultrice.jpg': 'Image formation auxiliaire puéricultrice',
  'public/images/formations/accompagnant-educatif-social.jpg': 'Image formation accompagnant éducatif',
  'public/images/formations/agent-service-hospitalier.jpg': 'Image formation agent service hospitalier',
  'public/images/formations/assistant-vie-familles.jpg': 'Image formation assistant vie familles',
  'public/images/formations/savoirs-base-numerique.jpg': 'Image formation savoirs de base',
  'public/images/formations/preparation-concours.jpg': 'Image formation préparation concours',
  
  'public/images/team/marie-dubois.jpg': 'Photo Marie Dubois',
  'public/images/team/pierre-martin.jpg': 'Photo Pierre Martin',
  'public/images/team/sarah-benali.jpg': 'Photo Sarah Benali',
  
  'public/images/centres/paris-republique.jpg': 'Photo centre Paris République',
  'public/images/centres/paris-bastille.jpg': 'Photo centre Paris Bastille',
  'public/images/centres/lyon-part-dieu.jpg': 'Photo centre Lyon Part-Dieu',
  'public/images/centres/marseille-vieux-port.jpg': 'Photo centre Marseille Vieux-Port',
  'public/images/centres/lille-centre.jpg': 'Photo centre Lille Centre',
  'public/images/centres/orleans-centre.jpg': 'Photo centre Orléans Centre',
  
  'public/images/og/kassiopee-og-default.jpg': 'Image OpenGraph par défaut',
  'public/images/og/kassiopee-og-formations.jpg': 'Image OpenGraph formations',
  'public/images/og/kassiopee-og-contact.jpg': 'Image OpenGraph contact',
};

console.log('🔍 Vérification des images personnalisées...\n');

let missingImages = [];
let presentImages = [];

// Vérifier chaque image
Object.entries(expectedImages).forEach(([imagePath, description]) => {
  const fullPath = path.join(process.cwd(), imagePath);
  
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`✅ ${description} (${sizeKB} KB)`);
    presentImages.push(imagePath);
  } else {
    console.log(`❌ ${description} - MANQUANTE`);
    missingImages.push(imagePath);
  }
});

console.log('\n📊 Résumé :');
console.log(`✅ Images présentes : ${presentImages.length}/${Object.keys(expectedImages).length}`);
console.log(`❌ Images manquantes : ${missingImages.length}`);

if (missingImages.length > 0) {
  console.log('\n📝 Images à ajouter :');
  missingImages.forEach(imagePath => {
    console.log(`   - ${imagePath}`);
  });
  
  console.log('\n💡 Conseil :');
  console.log('   Consultez le fichier GUIDE_IMAGES.md pour savoir quelles images ajouter en priorité.');
} else {
  console.log('\n🎉 Toutes les images personnalisées sont présentes !');
  console.log('   Vous pouvez maintenant passer à l\'étape suivante : configuration des variables d\'environnement.');
}

console.log('\n🚀 Pour lancer l\'application : npm run dev');
