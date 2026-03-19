import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.dataset.hover === 'true';
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="custom-cursor hidden md:block"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHovering ? 4 : 1,
        backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'white',
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 250,
        mass: 0.5,
      }}
    />
  );
};
