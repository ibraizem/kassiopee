import { MapPin, Phone, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre avenir professionnel ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-6 w-6 mr-2" />
                Siège social
              </h3>
              <p className="text-blue-100">
                35 rue Armand Brette<br />
                93380 Pierrefitte-sur-Seine
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Téléphone
                </h3>
                <a 
                  href="tel:0743678768" 
                  className="text-blue-100 hover:text-white text-lg font-medium"
                >
                  07 43 67 87 68
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </h3>
                <a 
                  href="mailto:formationkassiopee@gmail.com" 
                  className="text-blue-100 hover:text-white text-lg font-medium"
                >
                  formationkassiopee@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
