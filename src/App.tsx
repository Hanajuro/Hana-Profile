/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Terminal, Cpu } from "lucide-react";

const projects = [
  {
    title: "Enterprise Network Design",
    description: "Designing and implementing a robust network infrastructure for a large-scale office environment.",
    tags: ["Cisco", "VLAN", "Routing"],
    link: "#"
  },
  {
    title: "Server Virtualization Project",
    description: "Setting up a high-availability server cluster using Proxmox and VMware for enterprise workloads.",
    tags: ["Linux", "Virtualization", "Proxmox"],
    link: "#"
  },
  {
    title: "Infrastructure Monitoring System",
    description: "Real-time monitoring of network health and server performance using Zabbix and Grafana.",
    tags: ["Zabbix", "Grafana", "Monitoring"],
    link: "#"
  }
];

const skills = [
  { name: "Networking", icon: <Palette className="w-4 h-4" />, items: ["Cisco CCNA", "Mikrotik MTCNA", "VLAN/STP", "Routing & Switching"] },
  { name: "Servers", icon: <Terminal className="w-4 h-4" />, items: ["Linux Administration", "Windows Server", "Active Directory", "Web Servers"] },
  { name: "Infrastructure", icon: <Cpu className="w-4 h-4" />, items: ["Virtualization", "Cloud Computing", "Data Center Management", "Backup Solutions"] },
  { name: "Security", icon: <Code className="w-4 h-4" />, items: ["Firewall", "VPN Setup", "Network Security", "Intrusion Detection"] }
];

export default function App() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Clear any existing timeout to show the header
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (latest > lastScrollY.current && latest > 150) {
      // Scrolling down and past a threshold
      setHidden(true);
    } else {
      // Scrolling up
      setHidden(false);
    }

    // Set a timeout to show the header after scrolling stops (stationary)
    timeoutRef.current = setTimeout(() => {
      setHidden(false);
    }, 800); // 800ms delay after stopping

    lastScrollY.current = latest;
  });

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-400 selection:text-black">
      {/* Navigation */}
      <motion.nav 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          REYHAN.
        </motion.div>
        <div className="flex gap-8 text-xs uppercase tracking-widest font-medium">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            IT Infrastructure Specialist
          </span>
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter mb-8">
            Optimizing <br />
            <span className="text-transparent border-white border-[1px] [-webkit-text-stroke:1px_white]">Network</span> <br />
            Systems.
          </h1>
          <p className="max-w-md text-gray-400 text-lg leading-relaxed mb-10">
            Lulusan SMK Prima Unggul yang berfokus pada pembangunan dan pengelolaan 
            infrastruktur IT yang andal, aman, dan efisien.
          </p>
          <div className="flex gap-6">
            <a href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-cyan-400 transition-all duration-300">
              Get in Touch
            </a>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 hover:text-cyan-400 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 hover:text-cyan-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <div className="absolute right-[-10%] top-[20%] w-[60vw] h-[60vw] bg-cyan-400/10 rounded-full blur-[120px] -z-0" />
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-24 bg-[#0f172a]">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-gray-900 overflow-hidden relative group"
          >
            <img 
              src="https://picsum.photos/seed/profile/800/1000" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[20px] border-[#0f172a] pointer-events-none" />
          </motion.div>
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-cyan-400" />
              About Me
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Saya adalah seorang profesional IT lulusan SMK Prima Unggul jurusan Teknik Komputer Jaringan (TKJ). 
              Memiliki ketertarikan mendalam dan keahlian dalam merancang serta mengelola infrastruktur IT yang kompleks.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Fokus utama saya adalah memastikan sistem jaringan dan server berjalan dengan performa maksimal. 
              Saya percaya bahwa infrastruktur yang kuat adalah fondasi utama dari setiap solusi digital yang sukses.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">12+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-24">
        <h2 className="text-4xl font-bold mb-20 text-center uppercase tracking-tighter">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skill, idx) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/10 hover:border-cyan-400/50 transition-colors group"
            >
              <div className="mb-6 p-3 bg-white/5 w-fit group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map(item => (
                  <li key={item} className="text-gray-500 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-24 bg-[#0f172a]">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-6xl font-black uppercase tracking-tighter">Selected <br /> Works</h2>
          <a href="#" className="text-xs uppercase tracking-widest font-bold border-b border-cyan-400 pb-2 hover:text-cyan-400 transition-colors">View All Projects</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-gray-900 mb-6 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/${project.title}/800/450`} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 md:px-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12">
            Let's <br /> <span className="text-cyan-400">Connect.</span>
          </h2>
          <p className="max-w-xl text-gray-400 mb-12 text-lg">
            Currently available for freelance projects and full-time opportunities. 
            Have an idea? Let's bring it to life.
          </p>
          <a 
            href="mailto:reyhanns57@gmail.com" 
            className="text-2xl md:text-4xl font-bold border-b-4 border-white hover:border-cyan-400 hover:text-cyan-400 transition-all pb-2"
          >
            Hubungi Saya!
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs uppercase tracking-[0.3em] text-gray-500">
          © 2026 HANAJURO. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-xs uppercase tracking-widest font-bold hover:text-cyan-400 transition-colors">Instagram</a>
          <a href="#" className="text-xs uppercase tracking-widest font-bold hover:text-cyan-400 transition-colors">Twitter</a>
          <a href="#" className="text-xs uppercase tracking-widest font-bold hover:text-cyan-400 transition-colors">Dribbble</a>
        </div>
      </footer>
    </div>
  );
}
