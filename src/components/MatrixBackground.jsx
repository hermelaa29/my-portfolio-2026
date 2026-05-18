import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationId;
    
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix characters: Binary, Hex, Operators, Katakana, and standard glyphs
    const letters = '010110010110100101000110010001011000000000111111ABCDEF<>{}[]_+-*/%!#@$';
    const alphabet = letters.split('');
    
    // Slightly larger size for matrix rain characters (changed from 18 to 21)
    const fontSize = 21;
    const columns = Math.ceil(canvas.width / fontSize);
    
    // Raindrops positions
    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = Math.random() * -100;
    }
    
    const draw = () => {
      // Create trails with semi-transparent background matching --color-dark-bg (#0b0f19)
      ctx.fillStyle = 'rgba(11, 15, 25, 0.06)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = 'bold ' + fontSize + 'px monospace';
      
      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;
        
        // Simulating 3D depth by dividing columns into layers
        const depth = (i % 3) + 1; // 1 = back, 2 = mid, 3 = front
        
        if (depth === 1) {
          // Background layer - faint terminal green
          ctx.fillStyle = 'rgba(0, 255, 102, 0.15)'; 
        } else if (depth === 2) {
          // Midground layer - medium terminal green
          ctx.fillStyle = 'rgba(0, 255, 102, 0.45)'; 
        } else {
          // Foreground layer - maximum visibility neon console green (solid and bright)
          ctx.fillStyle = 'rgba(0, 255, 102, 0.85)';  
          
          // Classic terminal glowing header spark in pure white
          if (Math.random() > 0.96) {
            ctx.fillStyle = '#ffffff';
          }
        }
        
        ctx.fillText(text, x, y);
        
        // Reset column to top
        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        
        // Fall speed based on depth layer (foreground falls faster)
        rainDrops[i] += 0.35 + (depth * 0.15);
      }
    };
    
    const interval = setInterval(draw, 33);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full object-cover pointer-events-none opacity-[0.45] z-0"
    />
  );
}
