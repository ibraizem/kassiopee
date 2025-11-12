import { cn } from "@/lib/utils";

interface DefaultFormationImageProps {
  title: string;
  className?: string;
}

const DefaultFormationImage = ({ title, className }: DefaultFormationImageProps) => {
  const getBackgroundColor = (str: string) => {
    // Generate a color based on the title
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const colors = [
      'from-kassiopee-navy/90 to-kassiopee-navy',
      'from-kassiopee-gold/90 to-kassiopee-navy',
      'from-kassiopee-lightblue/90 to-kassiopee-navy',
      'from-kassiopee-gold/80 to-kassiopee-lightblue/80',
    ];
    
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div 
      className={cn(
        "w-full h-full flex items-center justify-center p-4 text-center",
        "bg-gradient-to-br",
        getBackgroundColor(title),
        className
      )}
    >
      <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
        {title}
      </h3>
    </div>
  );
};

export default DefaultFormationImage;
