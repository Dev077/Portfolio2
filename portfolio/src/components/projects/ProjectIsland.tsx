'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/lib/projects';
import OrbitingTech from '@/components/ui/OrbitingTech';

interface ProjectIslandProps {
  project?: Project;
  id: string;
  title: string;
  position: { x: number; y: number };
  size: 'small' | 'medium' | 'large';
  color: string;
  onHover: (id: string | null) => void;
  isHovered: boolean;
}

export default function ProjectIsland({
  project,
  id,
  title,
  position,
  size,
  color,
  onHover,
  isHovered,
}: ProjectIslandProps) {
  // Size dimensions
  const dimensions = {
    small: { width: 120, height: 100 },
    medium: { width: 180, height: 150 },
    large: { width: 240, height: 200 },
  };
  
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        width: dimensions[size].width,
        height: dimensions[size].height,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: isHovered ? -20 : 0,
        scale: isHovered ? 1.05 : 1,
        zIndex: isHovered ? 10 : 1,
      }}
      transition={{ 
        duration: 0.4, 
        y: { 
          repeat: isHovered ? 0 : Infinity, 
          repeatType: "reverse", 
          duration: isHovered ? 0.4 : 3
        }
      }}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <Link href={project ? `/project/${project.id}` : `/projects/${id !== 'featured' ? id : ''}`}>
        <div
          className="w-full h-full rounded-lg p-4 flex flex-col justify-between relative overflow-hidden"
          style={{ backgroundColor: 'rgba(10, 10, 15, 0.9)', backdropFilter: 'blur(10px)' }}
        >
          {/* Glow effect */}
          <div 
            className="absolute inset-0 opacity-25"
            style={{ 
              boxShadow: `inset 0 0 30px ${color}`,
              border: `1px solid ${color}`
            }}
          />
          
          <h3 className="font-bold z-10">{project?.title || title}</h3>
          
          {project && (
            <div className="mt-2 z-10">
              <p className="text-sm opacity-70 line-clamp-2">
                {project.description}
              </p>
              {project.impact && (
                <p className="text-xs mt-1 font-mono text-green-400">
                  {project.impact}
                </p>
              )}
            </div>
          )}
          
          {/* Orbiting tech stack */}
          {project && project.techStack && (
            <OrbitingTech 
              technologies={project.techStack} 
              isActive={isHovered} 
              size={size} 
            />
          )}
        </div>
      </Link>
    </motion.div>
  );
}