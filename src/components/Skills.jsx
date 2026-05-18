import { LayoutGrid, Globe, Database, Terminal, Shield } from 'lucide-react';
import { useRef, useEffect } from 'react';
import SecurityExpertise from './SecurityExpertise';

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

export default function Skills() {
  const skillDomains = [
    {
      title: 'Frontend Development',
      description: 'Crafting responsive, high-performance interactive interfaces.',
      icon: Globe,
      skills: ['HTML', 'Tailwind', 'React', 'JavaScript'],
    },
    {
      title: 'Backend Engineering',
      description: 'Building secure, stable, and highly-scalable server architectures.',
      icon: Database,
      skills: ['Node', 'MongoDB', 'PostgreSQL', 'Express', 'Prisma'],
    },
    {
      title: 'Cyber Security',
      description: 'Advanced security analysis and ethical exploitation techniques.',
      icon: Shield,
      skills: ['Linux', 'Wireshark', 'Burpsuite', 'Ollydbg', 'Ghidra'],
    },

    {
      title: 'Tools & DevOps',
      description: 'Configuring modern workflows and deployment environments.',
      icon: Terminal,
      skills: ['Git / GitHub', 'Vercel / Netlify', 'Windows CLI'],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090d16] to-[#05070a] border-t border-emerald-950/60">
      {/* Animated Network Background */}
      <NetworkBackground />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/80 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            <LayoutGrid size={12} className="text-emerald-400 animate-pulse" />
            <span>sys.expertise_matrix</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Skills &amp; <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]">Capabilities</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            A comprehensive mapping of technologies, languages, and design methodologies I practice.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillDomains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <div 
                key={idx}
                className="group bg-[#0b0f19]/35 p-8 rounded-3xl border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon and Title Header */}
                  <div className="flex items-start justify-between text-left">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                        {domain.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-normal font-normal">
                        {domain.description}
                      </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-emerald-500/10 group-hover:bg-emerald-500/15 text-emerald-400 group-hover:text-emerald-300 border border-emerald-500/10 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2.5 pt-4 border-t border-emerald-500/10">
                    {domain.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-3.5 py-1.5 bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/10 hover:border-emerald-500/20 rounded-xl text-xs font-semibold text-gray-300 hover:text-emerald-300 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      
      {/* SecurityExpertise component will be added separately in App.jsx */}
    </section>
  );
}
