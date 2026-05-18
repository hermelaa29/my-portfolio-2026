import { Cpu, Shield } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function useInView() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

function AnimatedProgressBar({ level, duration = 1500 }) {
  const [ref, inView] = useInView();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setWidth(level), 200);
    }
  }, [inView, level]);

  return (
    <div ref={ref} className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
      <div 
        className="bg-gradient-to-r from-emerald-400 to-green-400 h-full rounded-full transition-all ease-out" 
        style={{ width: `${width}%`, transitionDuration: `${duration}ms` }}
      ></div>
    </div>
  );
}

function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Green Network Connection Background Component
function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes = [];
    const nodeCount = 8;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 2,
      });
    }

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(5, 7, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x - node.radius < 0 || node.x + node.radius > canvas.width) {
          node.vx *= -1;
        }
        if (node.y - node.radius < 0 || node.y + node.radius > canvas.height) {
          node.vy *= -1;
        }

        node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
        node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));

        // Draw node glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(node.x - node.radius * 3, node.y - node.radius * 3, node.radius * 6, node.radius * 6);

        // Draw node
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.3 * (1 - distance / 200)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function SecurityExpertise() {
  const [ref, isInView] = useInView();

  const advancedCapabilities = [
    { name: 'Full-Stack Development', level: 80, category: 'Development' },
    { name: 'Mobile App Development', level: 60, category: 'Development' },
    { name: 'Reverse Engineering', level: 65, category: 'Security' },
    { name: 'OSINT', level: 60, category: 'Security' },
    { name: 'Ethical Hacking', level: 60, category: 'Security' },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-[#05070a] to-[#090d16]">
      {/* Animated Network Background */}
      <NetworkBackground />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/80 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Advanced Capabilities Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Security &amp; <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]">Advanced Expertise</span>
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Core competencies in security disciplines and advanced development domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Development Category */}
          <div className="space-y-6 p-8 rounded-3xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10 hover:border-blue-500/20 transition-all backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400">
                <Cpu size={20} />
              </div>
              <h4 className="font-display font-bold text-lg text-white">Development</h4>
            </div>
            
            <div className="space-y-5">
              {advancedCapabilities.filter(cap => cap.category === 'Development').map((capability, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-200">{capability.name}</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold"><AnimatedCounter end={capability.level} suffix="%" /></span>
                  </div>
                  <AnimatedProgressBar level={capability.level} />
                </div>
              ))}
            </div>
          </div>

          {/* Security Category - Only render when in view */}
          {isInView && (
            <div className="space-y-6 p-8 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 hover:border-purple-500/20 transition-all backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400">
                  <Shield size={20} />
                </div>
                <h4 className="font-display font-bold text-lg text-white">Security</h4>
              </div>
              
              <div className="space-y-5">
                {advancedCapabilities.filter(cap => cap.category === 'Security').map((capability, idx) => (
                  <div key={idx} className="space-y-2 animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-200">{capability.name}</span>
                      <span className="text-xs font-mono text-emerald-400 font-bold"><AnimatedCounter end={capability.level} suffix="%" /></span>
                    </div>
                    <AnimatedProgressBar level={capability.level} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
