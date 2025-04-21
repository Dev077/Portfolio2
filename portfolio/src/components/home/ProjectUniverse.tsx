'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectIsland from '@/components/projects/ProjectIsland';

const CATEGORIES = [
  { 
    id: 'featured', 
    title: 'Featured Project', 
    position: { x: 0, y: 0 }, 
    size: 'large',
    color: '#F1C40F'
  },
  { 
    id: 'academic', 
    title: 'Academic Projects', 
    position: { x: -150, y: 100 }, 
    size: 'medium',
    color: '#2C3E50' 
  },
  { 
    id: 'personal', 
    title: 'Personal Projects', 
    position: { x: 0, y: 150 }, 
    size: 'medium',
    color: '#8E44AD'
  },
  { 
    id: 'hackathon', 
    title: 'Hackathon Projects', 
    position: { x: 150, y: 100 }, 
    size: 'medium',
    color: '#27AE60'
  },
];

export default function ProjectUniverse() {
  const [hoveredIsland, setHoveredIsland] = useState<string | null>(null);
  
  return (
    <div className="h-[600px] relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {CATEGORIES.map((category) => (
          <ProjectIsland
            key={category.id}
            id={category.id}
            title={category.title}
            position={category.position}
            size={category.size as 'small' | 'medium' | 'large'}
            color={category.color}
            onHover={setHoveredIsland}
            isHovered={hoveredIsland === category.id}
          />
        ))}
      </div>
    </div>
  );
}