
import { useRef, useEffect } from 'react';

interface SkillProps {
  name: string;
  level: number;
  color: string;
  index: number;
}

const AboutSkill = ({ name, level, color, index }: SkillProps) => {
  const skillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && skillRef.current) {
            skillRef.current.classList.add("w-full");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="font-medium text-lg">{name}</span>
        <span className="text-primary font-bold">{level}%</span>
      </div>
      <div className="h-3 bg-muted/60 rounded-full overflow-hidden w-full backdrop-blur-sm shadow-inner">
        <div
          ref={skillRef}
          className={`h-full bg-gradient-to-r ${color} rounded-full w-0 transition-all duration-1500 ease-out shadow-lg`}
          style={{ maxWidth: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default AboutSkill;
