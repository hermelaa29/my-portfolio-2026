import { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, Terminal } from 'lucide-react';
import MatrixBackground from './MatrixBackground';

export default function Hero() {
  const words = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Web Designer',
    'Reverse Engineer'
  ];

  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIdx];

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBeforeDelete = 2200;

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => (prev + 1) % words.length);
    } else {
      const nextText = isDeleting
        ? fullWord.substring(0, currentText.length - 1)
        : fullWord.substring(0, currentText.length + 1);

      timer = setTimeout(() => {
        setCurrentText(nextText);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Immersive 3D Matrix Canvas Background */}
      <MatrixBackground />

      {/* Terminal Green themed background glow effects - scoped to hero only */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid Pattern overlays with a subtle emerald-green hue */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left space-y-8">

            {/* Status Tag - Green Console styling and Part-time change */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles size={12} className="text-emerald-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Available for Freelance &amp; Part-time Roles</span>
            </div>

            {/* Dynamic Typing Title - Terminal green gradients */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] min-h-[140px] sm:min-h-[160px] md:min-h-[180px] flex flex-col justify-center">
              <span>''</span>
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300 bg-clip-text text-transparent inline-flex items-center pt-2">
                {currentText}
                <span className="ml-1 text-emerald-400 font-light animate-pulse">|</span>
              </span>
            </h1>

            {/* Description - green accents on name */}
            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-normal leading-relaxed">
              Hi, my name is <span className="text-emerald-400 font-semibold drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]">Hermela Addis</span>. I am a Full-Stack Developer specializing in high-performance web applications, beautiful UI/UX designs, and scalable architectures.
            </p>

            {/* CTA Buttons - Scoped to console green */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#projects"
                className="group flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-medium rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/src/assets/cv dev.pdf"
                download
                className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-300 font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={18} className="text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Tech Badges - Emerald border on hover */}
            <div className="pt-4 border-t border-emerald-950/60 max-w-lg">
              <p className="text-xs font-semibold text-emerald-500/60 uppercase tracking-widest mb-3">Primary Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Flutter', 'Figma', 'Tailwind CSS', 'Firebase'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-emerald-950/20 border border-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 rounded-md text-xs font-medium text-gray-300 hover:text-emerald-300 transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Right Code Visual Panel - Ultra-Transparent Green Glowing Terminal */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 animate-float">

            {/* Emerald glow aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-green-500/10 rounded-3xl blur-2xl -z-10"></div>

            {/* Highly transparent console container to let matrix rain run clearly behind it */}
            <div className="bg-[#0b0f19]/35 backdrop-blur-[1px] rounded-2xl border border-emerald-500/20 shadow-xl shadow-emerald-500/5 overflow-hidden text-left">

              {/* Window Header */}
              <div className="bg-[#0b0f19]/60 border-b border-emerald-500/20 px-4 py-3 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-mono">
                  <Terminal size={12} className="text-emerald-400" />
                  <span>hermela.js</span>
                </div>
                <div className="w-8"></div>
              </div>

              {/* Code Editor Body - fully transparent backdrop */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-gray-300 bg-transparent">
                <p><span className="text-emerald-400">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-gray-400">name:</span> <span className="text-emerald-300">'Hermela Addis'</span>,</p>
                <p className="pl-4"><span className="text-gray-400">role:</span> <span className="text-emerald-300">'Full-Stack Developer'</span>,</p>
                <p className="pl-4"><span className="text-gray-400">skills:</span> <span className="text-purple-400">[</span></p>
                <p className="pl-8"><span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Node.js'</span>, <span className="text-emerald-300">'Express.js'</span>,</p>
                <p className="pl-8"><span className="text-emerald-300">'PostgreSQL'</span>, <span className="text-emerald-300">'MongoDB'</span>, <span className="text-emerald-300">'Flutter'</span>,</p>
                <p className="pl-8"><span className="text-emerald-300">'Figma'</span>, <span className="text-emerald-300">'TailwindCSS'</span>, <span className="text-emerald-300">'Firebase'</span></p>
                <p className="pl-4"><span className="text-purple-400">]</span>,</p>
                <p className="pl-4"><span className="text-gray-400">passion:</span> <span className="text-emerald-300">'Building high-performance apps &amp; reverse engineering'</span>,</p>
                <p className="pl-4"><span className="text-gray-400">coffeeLover:</span> <span className="text-emerald-400">true</span>,</p>
                <p className="pl-4"><span className="text-gray-400">hireable:</span> <span className="text-emerald-400">function</span>() &#123;</p>
                <p className="pl-8"><span className="text-emerald-400">return</span> (</p>
                <p className="pl-12"><span className="text-purple-400">this</span>.coffeeLover &amp;&amp;</p>
                <p className="pl-12"><span className="text-purple-400">this</span>.skills.length &gt;= <span className="text-amber-400">7</span></p>
                <p className="pl-8">);</p>
                <p className="pl-4">&#125;</p>
                <p>&#125;;</p>
                <p className="mt-4 text-emerald-700 font-normal">// Print state</p>
                <p><span className="text-emerald-400">console</span>.<span className="text-emerald-300">log</span>(developer.hireable()); <span className="text-emerald-700">// true</span></p>
              </div>
            </div>

            {/* Visual element decorations */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl opacity-20 blur-md -z-20"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
