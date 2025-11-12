import Link from "next/link";

const MicroFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h4 className="text-white font-medium mb-4">Kassiopée Formation</h4>
            <p className="mb-4">
              Organisme de formation certifié Qualiopi, spécialisé dans les formations professionnelles certifiantes.
            </p>
            <p className="text-xs text-gray-500">
              SIRET : 123 456 789 00045<br />
              NDA : 12345678901
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Informations légales</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="hover:text-white transition-colors">
                  Conditions générales de vente
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Politique de cookies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <address className="not-italic">
              <p className="mb-2">
                35 rue Armand Brette<br />
                93380 Pierrefitte-sur-Seine
              </p>
              <p className="mb-2">
                Tél : <a href="tel:0743678768" className="hover:text-white">07 43 67 87 68</a>
              </p>
              <p>
                Email : <a href="mailto:formationkassiopee@gmail.com" className="hover:text-white">formationkassiopee@gmail.com</a>
              </p>
            </address>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Médiation</h4>
            <p className="mb-4">
              En cas de litige, vous pouvez faire appel à notre service client à l'adresse suivante :
            </p>
            <p className="text-xs bg-gray-800 p-3 rounded">
              Service Médiation de la Consommation<br />
              Par courrier : 14 rue Saint-Jean, 75017 Paris<br />
              Par email : <a href="mailto:mediation@kassiopee-formation.com" className="text-blue-400 hover:underline">mediation@kassiopee-formation.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-xs">
          <p>© {currentYear} Kassiopée Formation - Tous droits réservés</p>
          <p className="mt-2">
            Site hébergé par : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Vercel</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MicroFooter;
