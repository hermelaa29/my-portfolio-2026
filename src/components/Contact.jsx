import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Github = ({ size = 20, ...props }) => (
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

const Linkedin = ({ size = 20, ...props }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 20, ...props }) => (
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
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);


export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_hhzc9pq',
        'template_9meq9v9',
        {
          from_name: formState.name,
          from_email: formState.email,
          reply_to: formState.email,
          message: formState.message,
          to_email: 'hermelaa2919@gmail.com'
        },
        'CgVOrBetFniryY-PU'
      );
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090d16] to-[#05070a] border-t border-emerald-950/60">
      {/* Circle Wave Animation Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/50"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                animation: `pulse-slow ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
                boxShadow: '0 0 40px rgba(16, 185, 129, 0.4), inset 0 0 40px rgba(16, 185, 129, 0.2)',
                filter: 'blur(0.5px)'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Cyber Ambient Glow Orbs */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-emerald-500/[0.08] rounded-full blur-[80px] pointer-events-none select-none"></div>
      <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-teal-500/[0.08] rounded-full blur-[80px] pointer-events-none select-none"></div>

      {/* Cyber Dotted Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.06)_1.5px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Green console styling */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            <MessageSquare size={12} className="text-emerald-400 animate-pulse" />
            <span>sys.contact_channel</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Have an exciting project or want to collaborate? Send a message and let's talk.
          </p>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-stretch">
          
          {/* Info Details Panel (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
            
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-white">Let's create something remarkable together.</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have an fully fleshed-out idea, a temporary freelance assignment, or are just curious to chat code, feel free to drop me a message.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="bg-[#0b0f19]/40 p-5 rounded-2xl border border-emerald-500/10 flex items-center space-x-4 hover:border-emerald-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 backdrop-blur-sm">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-500/60 uppercase tracking-wider font-mono">Email Me</p>
                  <a href="mailto:hermelaa2919@gmail.com" className="text-sm font-medium text-white hover:text-emerald-300 transition-colors">
                    hermelaa2919@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-[#0b0f19]/40 p-5 rounded-2xl border border-emerald-500/10 flex items-center space-x-4 hover:border-emerald-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 backdrop-blur-sm">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-500/60 uppercase tracking-wider font-mono">Based In</p>
                  <p className="text-sm font-medium text-white">Addis Ababa, Ethiopia</p>
                </div>
              </div>

            </div>

            {/* Social Connect Icons Row */}
            <div className="pt-6 border-t border-emerald-500/10">
              <p className="text-xs font-semibold text-emerald-500/60 uppercase tracking-widest mb-4 font-mono">Follow My Work</p>
              <div className="flex space-x-4">
                <a href="https://github.com/hermelaa29" className="p-3 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 hover:text-emerald-300 text-emerald-400/60 border border-emerald-500/20 hover:border-emerald-500/40 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="p-3 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 hover:text-emerald-300 text-emerald-400/60 border border-emerald-500/20 hover:border-emerald-500/40 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" className="p-3 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 hover:text-emerald-300 text-emerald-400/60 border border-emerald-500/20 hover:border-emerald-500/40 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Interactive Form Panel (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b0f19]/40 p-8 sm:p-10 rounded-3xl border border-emerald-500/10 shadow-2xl backdrop-blur-sm relative">
              
              {/* Form Success State Card */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-[#0b0f19]/95 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center p-8 text-center z-20 space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400">
                    <CheckCircle size={48} className="stroke-[1.5]" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-gray-400 max-w-sm">
                    Thank you for reaching out. I've received your request and will get back to you within 24 hours.
                  </p>
                </div>
              )}

              {/* Contact Form Element */}
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-emerald-500/60 uppercase tracking-wider font-mono">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="w-full bg-emerald-950/30 border border-emerald-500/20 focus:border-emerald-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-emerald-500/60 uppercase tracking-wider font-mono">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      className="w-full bg-emerald-950/30 border border-emerald-500/20 focus:border-emerald-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-emerald-500/60 uppercase tracking-wider font-mono">Message Description</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timelines, or anything else..."
                    required
                    className="w-full bg-emerald-950/30 border border-emerald-500/20 focus:border-emerald-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 disabled:opacity-50 cursor-pointer border border-emerald-500/30 hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Secure Message</span>
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
