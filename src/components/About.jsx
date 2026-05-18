import { useState, useEffect, useRef } from 'react';
import { User, Award, ShieldCheck, Zap } from 'lucide-react';

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

function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease out cubic
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

function AnimatedProgress({ level, duration = 1500 }) {
  const [ref, inView] = useInView();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setWidth(level), 200);
    }
  }, [inView, level]);

  return (
    <div ref={ref} className="flex-1 bg-emerald-950/60 rounded-full h-1.5 overflow-hidden">
      <div 
        className="bg-gradient-to-r from-emerald-500 to-green-400 h-full rounded-full transition-all ease-out" 
        style={{ width: `${width}%`, transitionDuration: `${duration}ms` }}
      ></div>
    </div>
  );
}

export default function About() {
  const stats = [
    { label: 'Years Experience', value: 4, suffix: '+', icon: Award },
    { label: 'Completed Projects', value: 50, suffix: '+', icon: Zap },
    { label: 'Ethical Exploits Found', value: 12, suffix: '+', icon: ShieldCheck },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090d16] to-[#05070a] border-t border-emerald-950/60">

      {/* 1. Cyber Ambient Glow Orbs */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none select-none"></div>
      <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-teal-500/[0.04] rounded-full blur-[140px] pointer-events-none select-none"></div>

      {/* 2. Cyber Dotted Grid Pattern Overlay with Radial Transparency Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.06)_1.5px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - High-end green console styling */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            <User size={12} className="text-emerald-400 animate-pulse" />
            <span>sys.profile_info</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]">Me</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            A software developer and security engineer passionate about building highly-optimized web apps and reverse engineering.
          </p>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Profile Mockup & Capabilities */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-stretch space-y-12 relative">
            
            {/* Profile Mockup Visual - Cyber scanning terminal visual card */}
            <div className="flex justify-center relative w-full">
              <div className="relative group max-w-sm w-full flex justify-center">
                {/* Card Aura - green neon glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-green-400 rounded-3xl opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500"></div>

                {/* Decorative Corner Brackets (Hacker themed) */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-lg pointer-events-none"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-500/40 rounded-tr-lg pointer-events-none"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-500/40 rounded-bl-lg pointer-events-none"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-500/40 rounded-br-lg pointer-events-none"></div>

                {/* Inner container - terminal card styling */}
                <div className="relative w-[288px] h-[410px] sm:w-[320px] sm:h-[430px] rounded-3xl overflow-hidden border border-emerald-500/25 bg-[#0b0f19]/90 p-4 shadow-2xl shadow-emerald-500/5 transition-transform duration-500 group-hover:scale-[1.01]">

                  {/* Floating terminal statuses */}
                  <div className="absolute top-3 left-4 text-[8px] font-mono text-emerald-500/35 select-none">[SEC_LEVEL: ALPHA]</div>
                  <div className="absolute top-3 right-4 text-[8px] font-mono text-emerald-500/35 select-none">[STATE: OPTIMAL]</div>

                  {/* Cyber Scanner Animated radar lines behind avatar */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-2xl select-none">
                    <div className="absolute w-[260px] h-[260px] border border-emerald-500/[0.04] rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute w-[180px] h-[180px] border border-emerald-500/[0.08] rounded-full animate-pulse"></div>
                    <div className="absolute w-[320px] h-[320px] border-t border-emerald-500/[0.06] rounded-full animate-spin" style={{ animationDuration: '12s' }}></div>
                  </div>

                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-950/15 via-[#0c1220]/40 to-slate-950 flex flex-col items-center justify-center p-6 text-center space-y-4 relative z-10">
                    {/* Profile Avatar Glow Wrapper */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-green-500 flex items-center justify-center text-white shadow-xl shadow-emerald-500/25 relative group-hover:scale-[1.05] transition-transform duration-500">
                      <User size={38} className="stroke-[1.5]" />
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-xl text-white tracking-wide">Hermela Addis</h3>
                      <p className="text-xs text-emerald-400 font-mono mt-1">Full-Stack Dev &amp; Reverse Engineer</p>
                    </div>

                    <div className="w-full bg-[#05070a]/75 border border-emerald-500/10 rounded-xl p-3 text-left hover:border-emerald-500/20 transition-colors">
                      <p className="text-[10px] text-emerald-500/60 uppercase tracking-widest font-semibold font-mono">Location</p>
                      <p className="text-sm text-gray-300 font-medium font-sans">Addis Ababa, Ethiopia</p>
                    </div>

                    <div className="w-full bg-[#05070a]/75 border border-emerald-500/10 rounded-xl p-3 text-left hover:border-emerald-500/20 transition-colors">
                      <p className="text-[10px] text-emerald-500/60 uppercase tracking-widest font-semibold font-mono">Interests</p>
                      <p className="text-sm text-gray-300 font-medium font-sans">Ethical Hacking, Reverse Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Biography & Stats */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                I am a software engineer who loves building problem solver software solution through modern tech and best practices. I have been a trainee at INSA and now i am looking for a full time remote job.
                <br /><br />
                I am eager to know more about technological careers, such as ethical hacking, reverse engineering, and OSINT. I hope I will upgrade my skills and knowledge in this field on the comeing years.
                I am looking for a place where i can utilize my skills and knowledge to solve real-world problems and contribute to the growth of the organization.
              </p>
            </div>


            {/* Quick Stats Grid - High-end terminal panels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0b0f19]/45 p-5 rounded-2xl border border-emerald-500/10 flex flex-col items-start space-y-2 hover:border-emerald-500/25 hover:scale-[1.03] transition-all duration-300 shadow-md shadow-emerald-500/2 group"
                  >
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <span className="font-display font-extrabold text-2xl text-white drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                      <AnimatedCounter end={item.value} suffix={item.suffix} />
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-500/40 uppercase tracking-wider leading-tight">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
