// components/projects/IslandConnections.tsx
'use client';

import { useRef, useEffect } from 'react';

interface Connection {
  from: string;
  to: string;
  strength?: number; // 0-1, affects line thickness
  color?: string;
}

interface IslandConnectionsProps {
  connections: Connection[];
  islandPositions: Record<string, { x: number; y: number }>;
  hoveredIsland: string | null;
}

export default function IslandConnections({ 
  connections, 
  islandPositions, 
  hoveredIsland 
}: IslandConnectionsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const container = canvas.parentElement;
    if (container) {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Center point
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Draw connections
    connections.forEach(connection => {
      const fromPos = islandPositions[connection.from];
      const toPos = islandPositions[connection.to];
      
      if (fromPos && toPos) {
        const fromX = centerX + fromPos.x;
        const fromY = centerY + fromPos.y;
        const toX = centerX + toPos.x;
        const toY = centerY + toPos.y;
        
        // Check if this connection involves the hovered island
        const isActive = hoveredIsland === connection.from || hoveredIsland === connection.to;
        
        // Set line style
        ctx.beginPath();
        
        // Create gradient
        const gradient = ctx.createLinearGradient(fromX, fromY, toX, toY);
        const color = connection.color || '#ffffff';
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.2)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = isActive ? 2 : 1;
        
        // For inactive connections, use dotted line
        if (!isActive) {
          ctx.setLineDash([2, 4]);
        } else {
          ctx.setLineDash([]);
        }
        
        // Draw line
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
      }
    });
  }, [connections, islandPositions, hoveredIsland]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}