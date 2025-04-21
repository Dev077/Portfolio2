// components/ui/OrbitingTech.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, JSX } from 'react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiJavascript } from 'react-icons/si';

interface OrbitingTechProps {
  technologies: string[];
  isActive: boolean;
  size: 'small' | 'medium' | 'large';
}

// Map of tech names to icons
const techIcons: Record<string, JSX.Element> = {
  'React': <FaReact className="text-[#61DAFB]" />,
  'Node.js': <FaNodeJs className="text-[#339933]" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />,
  'Express': <SiExpress className="text-white" />,
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
  'Python': <FaPython className="text-[#3776AB]" />,
};

export default function OrbitingTech({ technologies, isActive, size }: OrbitingTechProps) {
  const [visibleTechs, setVisibleTechs] = useState<string[]>([]);
  
  // Limit the number of orbiting techs based on island size
  useEffect(() => {
    const maxTechs = size === 'small' ? 2 : size === 'medium' ? 3 : 4;
    setVisibleTechs(technologies.slice(0, maxTechs));
  }, [technologies, size]);
  
  return (
    <div className="absolute inset-0">
      {visibleTechs.map((tech, index) => {
        // Calculate position around the circle
        const angle = (index / visibleTechs.length) * 2 * Math.PI;
        const radius = size === 'small' ? 30 : size === 'medium' ? 40 : 50;
        
        // Position based on angle and radius
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={tech}
            className="absolute w-6 h-6 flex items-center justify-center rounded-full bg-gray-900 z-20"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            animate={{
              scale: isActive ? 1.2 : 1,
              x: isActive ? x * 1.1 : x,
              y: isActive ? y * 1.1 : y,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {techIcons[tech] || tech.charAt(0)}
          </motion.div>
        );
      })}
    </div>
  );
}