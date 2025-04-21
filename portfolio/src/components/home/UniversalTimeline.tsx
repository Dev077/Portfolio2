'use client';

import { motion } from 'framer-motion';

const TIMELINE_ITEMS = [
  { year: 2022, projects: 2 },
  { year: 2023, projects: 3 },
  { year: 2024, projects: 4 },
];

export default function UniversalTimeline() {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="min-w-[768px] relative h-40">
        {/* Timeline line */}
        <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-700" />
        
        {/* Year markers */}
        <div className="flex justify-between px-12">
          {TIMELINE_ITEMS.map((item, index) => (
            <motion.div 
              key={item.year}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Year label */}
              <div className="absolute -left-4 -top-10 font-mono">
                {item.year}
              </div>
              
              {/* Marker */}
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-600 relative -top-4 flex items-center justify-center">
                {item.projects}
              </div>
              
              {/* Project count */}
              <div className="absolute -left-10 top-8 font-mono text-sm text-gray-400">
                {item.projects} projects
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}