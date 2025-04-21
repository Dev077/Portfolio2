'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Terminal() {
  const [text, setText] = useState('');
  const fullText = `> Loading portfolio.exe...\n> Hello World! I am Your Name\n> Software Engineering Student @ Western\n> Ready to explore my projects? Navigate through the floating islands below.`;
  const index = useRef(0);
  
  useEffect(() => {
    if (index.current < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index.current));
        index.current += 1;
      }, 50);
      
      return () => clearTimeout(timeout);
    }
  }, [text]);
  
  return (
    <motion.div 
      className="bg-black border border-gray-700 rounded-md p-6 font-mono text-green-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">_</span></pre>
    </motion.div>
  );
}