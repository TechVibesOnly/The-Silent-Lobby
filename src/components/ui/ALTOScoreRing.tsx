import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface ALTOScoreRingProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const ALTOScoreRing: React.FC<ALTOScoreRingProps> = ({ 
  score, 
  size = 'md', 
  animated = true 
}) => {
  const [displayScore, setDisplayScore] = useState(0);
  
  const dimensions = {
    sm: { size: 80, stroke: 6, fontSize: '1.25rem', letterSize: '0.75rem' },
    md: { size: 160, stroke: 10, fontSize: '2.5rem', letterSize: '1rem' },
    lg: { size: 240, stroke: 14, fontSize: '4rem', letterSize: '1.5rem' },
  };

  const { size: dSize, stroke, fontSize, letterSize } = dimensions[size];
  const center = dSize / 2;
  const radius = center - stroke;
  const circumference = 2 * Math.PI * radius;
  
  const getGrade = (s: number) => {
    if (s >= 800) return { letter: 'A', color: '#4ADE80' }; // Teal/Green
    if (s >= 600) return { letter: 'B', color: '#7CB9E8' }; // Blue
    if (s >= 400) return { letter: 'C', color: '#C9A84C' }; // Gold
    if (s >= 200) return { letter: 'D', color: '#F59E0B' }; // Amber
    return { letter: 'F', color: '#F87171' }; // Crimson
  };

  const getRingColor = (s: number) => {
    if (s >= 800) return '#C9A84C'; // Gold
    if (s >= 600) return '#4ADE80'; // Teal
    if (s >= 400) return '#F59E0B'; // Amber
    return '#F87171'; // Crimson
  };

  const grade = getGrade(score);
  const ringColor = getRingColor(score);

  useEffect(() => {
    if (animated) {
      const duration = 2000;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setDisplayScore(Math.floor(easeOutQuart * score));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    } else {
      setDisplayScore(score);
    }
  }, [score, animated]);

  return (
    <div className="relative flex items-center justify-center" style={{ width: dSize, height: dSize }}>
      <svg width={dSize} height={dSize} className="-rotate-90">
        {/* Background Ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={stroke}
        />
        {/* Progress Ring */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={ringColor}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - score / 1000) }}
          transition={{ duration: 2, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span 
          className="font-mono font-bold leading-none" 
          style={{ fontSize, color: 'white' }}
        >
          {displayScore}
        </span>
        <span 
          className="font-display font-bold mt-1" 
          style={{ fontSize: letterSize, color: grade.color }}
        >
          GRADE {grade.letter}
        </span>
      </div>
    </div>
  );
};
