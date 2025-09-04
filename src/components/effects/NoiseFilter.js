'use client';
import { useEffect, useState } from 'react';

export default function NoiseFilter({ 
  color = '#000000',
  size = 1,
  randomness = 0.5,
  opacity = 0.05
}) {
  const [noisePattern, setNoisePattern] = useState('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const scale = size * 100;
    
    canvas.width = scale;
    canvas.height = scale;

    for(let x = 0; x < scale; x++) {
      for(let y = 0; y < scale; y++) {
        if(Math.random() < randomness) {
          ctx.fillStyle = color;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }

    setNoisePattern(canvas.toDataURL());
  }, [color, size, randomness]);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage: `url(${noisePattern})`,
        opacity: opacity,
        mixBlendMode: 'multiply',
      }}
    />
  );
}