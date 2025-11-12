import { Award, GraduationCap, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Diplômés",
    color: "text-kassiopee-gold",
  },
  {
    icon: GraduationCap,
    value: "7",
    label: "Formations",
    color: "text-kassiopee-lightblue",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Taux de réussite",
    color: "text-kassiopee-gold",
  },
  {
    icon: Award,
    value: "10+",
    label: "Ans d'expertise",
    color: "text-kassiopee-lightblue",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-kassiopee-navy to-kassiopee-navy/90">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-kassiopee-gold/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-kassiopee-gold/10"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div 
                    className={`p-3 rounded-full ${
                      stat.color.includes('gold') 
                        ? 'bg-kassiopee-gold/20 group-hover:bg-kassiopee-gold/30' 
                        : 'bg-kassiopee-lightblue/20 group-hover:bg-kassiopee-lightblue/30'
                    } transition-colors duration-300`}
                  >
                    <Icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 font-medium">
                    {stat.label}
                  </p>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-kassiopee-gold/0 to-kassiopee-lightblue/0 group-hover:from-kassiopee-gold/5 group-hover:to-kassiopee-lightblue/5 transition-all duration-300 -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
