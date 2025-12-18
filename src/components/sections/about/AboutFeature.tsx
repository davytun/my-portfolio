
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface AboutFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

const AboutFeature = ({ icon: Icon, title, description, iconColor }: AboutFeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverCard open={isHovered} onOpenChange={setIsHovered}>
      <HoverCardTrigger asChild>
        <div
          className={`p-6 glass rounded-2xl shadow-xl transition-all duration-500 
            hover:-translate-y-2 hover:shadow-2xl border border-white/30 cursor-pointer
            ${isHovered ? 'border-white/60 bg-white/90' : ''}
          `}
          style={{
            background: isHovered 
              ? `linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))` 
              : 'rgba(255,255,255,0.8)'
          }}
        >
          <div className="relative z-10">
            <div 
              className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 
                transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
              style={{
                background: isHovered 
                  ? `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))` 
                  : `hsl(var(--background))`
              }}
            >
              <Icon 
                className={`h-7 w-7 transition-all duration-500 
                  ${isHovered ? 'text-white' : iconColor}`} 
              />
            </div>
            <h4 className={`text-xl font-bold mb-2 transition-all duration-300
              ${isHovered ? 'text-primary' : ''}`}>
              {title}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{description.substring(0, 75)}...</p>
          </div>
          
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/5 -z-10 blur-xl transition-all duration-500"></div>
          <div className={`absolute bottom-0 left-0 w-20 h-20 rounded-full bg-secondary/5 -z-10 blur-xl transition-all duration-500 
            ${isHovered ? 'scale-150 opacity-80' : 'opacity-50'}`}>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-80 p-5 backdrop-blur-xl bg-white/95 border border-white/30 shadow-2xl rounded-xl"
        align="center"
        sideOffset={10}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
              <Icon className={`h-5 w-5 ${iconColor}`} />
            </div>
            <h4 className="text-lg font-bold">{title}</h4>
          </div>
          <p className="text-sm text-foreground/80">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AboutFeature;
