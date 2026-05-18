import { useState, useEffect, useRef } from 'react';
import { Briefcase, ExternalLink, Sparkles } from 'lucide-react';

const Github = ({ size = 18, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'UI/UX'];

  const projectsData = [
    {
      title: 'Rent Managment Dashboard',
      description: 'A premium Rent Managment system that tracks real-time lessee profile and payment status.',
      category: 'Full Stack',
      imageBg: 'src/assets/img3.png',
      tech: ['React', 'typescript', 'PostgreSQL', 'TailwindCSS', 'Prisma', 'Node.js'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'mini note app',
      description: 'a simple note taking app',
      category: 'Frontend',
      imageBg: 'src/assets/img5.png',
      tech: ['HTML', 'CSS', 'JS', 'Localstorage'],
      demoLink: 'https://note101-pro.netlify.app/',
      githubLink: '#',
    },
    {
      title: 'food ordering Commerce Platform',
      description: 'A food ordering platform with a modern UI and smooth user experience.',
      category: 'Frontend',
      imageBg: 'src/assets/img1.png',
      tech: ['html', 'CSS', 'JS'],
      demoLink: 'https://food-ordering-webpage.netlify.app/',
      githubLink: '#',
    },
    {
      title: 'Tourism booking System',
      description: 'A tourism booking system that allows users to book tours and activities.',
      category: 'Full Stack',
      imageBg: 'src/assets/img2.png',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS'],
      demoLink: 'https://tourism-app123.vercel.app/',
      githubLink: '#',
    },
    {
      title: 'e-commerce Platform',
      description: 'an e-commerce platform that allows users to buy and sell products.',
      category: 'UI/UX',
      imageBg: 'src/assets/img4.png',
      tech: ['Figma'],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking && scrollContainerRef.current) {
        const scrollY = window.scrollY;
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          const sectionTop = projectsSection.offsetTop;
          const sectionHeight = projectsSection.offsetHeight;
          const windowHeight = window.innerHeight;
          
          // Calculate how far we've scrolled into the section
          const scrollProgress = Math.max(0, Math.min(1, (scrollY - sectionTop + windowHeight * 0.3) / (sectionHeight + windowHeight * 0.5)));
          
          // Scroll the container horizontally based on vertical scroll progress
          const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
          const targetScroll = scrollProgress * maxScroll;
          
          // Direct scroll without behavior: 'smooth' for continuous smooth scrolling
          scrollContainerRef.current.scrollLeft = targetScroll;
          
          ticking = false;
        }
      }
      
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Green console styling */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            <Briefcase size={12} className="text-emerald-400 animate-pulse" />
            <span>sys.project_portfolio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            A handpicked selection of application projects I designed, engineered, and shipped.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${filter === cat ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/20 border border-emerald-500/30' : 'bg-emerald-950/30 border border-emerald-500/10 hover:border-emerald-500/30 text-emerald-400 hover:text-emerald-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 mt-12 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx}
              className="group min-w-[320px] sm:min-w-[360px] md:min-w-[400px] rounded-3xl border border-emerald-500/10 hover:border-emerald-500/25 overflow-hidden shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2 hover:scale-[1.02] bg-[#0b0f19]/40 backdrop-blur-sm snap-start hover:shadow-emerald-500/20"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Background Cover */}
              <div 
                className="h-52 w-full relative p-6 flex flex-col justify-between overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${project.imageBg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/50 to-transparent"></div>
                
                {/* Tech Badges Row */}
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-emerald-950/60 backdrop-blur-md rounded-md text-[10px] font-bold text-emerald-300 tracking-wide uppercase border border-emerald-500/20">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-emerald-950/60 backdrop-blur-md rounded-md text-[10px] font-bold text-emerald-300 tracking-wide uppercase border border-emerald-500/20">
                      +{project.tech.length - 3} More
                    </span>
                  )}
                </div>

                {/* Decorative Visual element inside the card cover */}
                <div className="absolute bottom-[-20%] right-[-10%] opacity-15 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Sparkles size={160} className="text-emerald-400 stroke-[1]" />
                </div>
                
                {/* Project Category Tag */}
                <span className="relative z-10 self-start px-2.5 py-1 rounded-md bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                  {project.category}
                </span>
              </div>

              {/* Description Body */}
              <div className="p-6 flex-grow flex flex-col justify-between text-left space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags Details & Actions */}
                <div className="pt-4 border-t border-emerald-500/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono text-emerald-500/60 mr-2">
                        #{t.toLowerCase()}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <a 
                      href={project.githubLink}
                      className="p-2 rounded-lg bg-emerald-950/30 hover:bg-emerald-950/50 text-emerald-400 hover:text-emerald-300 border border-emerald-500/20 transition-all"
                      aria-label="View Github Repository"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.demoLink}
                      className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-bold transition-all border border-emerald-500/30"
                    >
                      <span>Live</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
