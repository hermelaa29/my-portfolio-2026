import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SecurityExpertise from './components/SecurityExpertise';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-gray-100 overflow-x-hidden selection:bg-primary-500/30 selection:text-white">
      {/* Dynamic Background Noise/Mesh Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.03),transparent_45%)] pointer-events-none"></div>
      
      {/* Header & Navigation */}
      <Navbar />

      {/* Main Pages Content */}
      <main>
        {/* Section 1: Hero Section */}
        <Hero />

        {/* Section 2: About Me Section */}
        <About />

        {/* Section 3: Featured Projects Section */}
        <Projects />

        {/* Section 4: Skills & Tech Section */}
        <Skills />

        {/* Section 5: Security & Advanced Expertise Section */}
        <SecurityExpertise />

        {/* Section 6: Connect Contact Section */}
        <Contact />
      </main>

      {/* Layout Footer */}
      <Footer />
    </div>
  );
}
