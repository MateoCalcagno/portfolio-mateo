import { motion } from "framer-motion";
import { Download, Coffee, Globe, Server, Database, GitBranch, Terminal, MapPin } from "lucide-react";

const stackIcons = [
  { name: "Java", icon: <Coffee size={15} />, color: "text-orange-500" },
  { name: "Spring Boot", icon: <Server size={15} />, color: "text-green-500" },
  { name: "React", icon: <Terminal size={15} />, color: "text-cyan-400" },
  { name: "REST APIs", icon: <Globe size={15} />, color: "text-green-400" },
  { name: "SQL", icon: <Database size={15} />, color: "text-indigo-400" },
  { name: "Git", icon: <GitBranch size={15} />, color: "text-orange-600" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 overflow-hidden bg-slate-950 pt-[80px] sm:pt-[80px] py-12 sm:py-16"
    >
      {/* Fondo dinámico sutil */}
      <div className="absolute inset-0 -z-10 opacity-25">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">
        {/* Lado izquierdo: Presentación */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7 flex flex-col space-y-7"
        >
          <span className="self-start px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 font-bold text-[12px] tracking-[0.2em] uppercase inline-block">
            Portfolio Personal
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Hola, soy <span className="text-cyan-400">Mateo Calcagno</span>
          </h1>

          <p className="text-gray-300 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed border-l-2 border-cyan-500/30 pl-4 sm:pl-6">
            Analista en Computación y apasionado por crear soluciones tecnológicas innovadoras y eficientes. 
            Me especializo en desarrollo de software, diseño de algoritmos y aplicaciones escalables, combinando lógica, creatividad y precisión. 
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#projects" 
              className="bg-cyan-500 text-slate-950 px-6 sm:px-8 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-cyan-400 transition-all text-sm uppercase tracking-widest shadow-lg shadow-cyan-500/20"
            >
              Ver Proyectos
            </a>
            
            <a
              href="/MateoCalcagnoCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="relative overflow-hidden border border-white/10 text-white/80 px-6 sm:px-8 py-3.5 rounded-2xl font-bold hover:bg-white/5 hover:text-white transition-all flex items-center gap-2 group text-sm uppercase tracking-widest"
            >
              <Download size={16} className="group-hover:animate-bounce" /> Descargar CV
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
            </a>
          </div>
        </motion.div>

        {/* Lado derecho: Bento Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 space-y-4 mt-10 md:mt-0"
        >
          {/* Card: Stack Principal */}
          <div className="p-6 sm:p-7 bg-slate-900/50 backdrop-blur-2xl rounded-[2rem] border border-white/5 space-y-4 shadow-2xl">
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Stack Principal</h3>
            <div className="flex flex-wrap gap-2.5">
              {stackIcons.map((tech) => (
                <div key={tech.name} className={`flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/40 border border-white/5 ${tech.color} text-xs font-mono font-bold hover:bg-slate-800 transition-colors`}>
                  {tech.icon}
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900/50 rounded-[2rem] border border-white/5 hover:border-cyan-500/20 transition-colors group">
              <p className="text-cyan-500/70 text-[10px] uppercase tracking-widest font-black mb-1">Ubicación</p>
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <MapPin size={16} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                Córdoba, AR
              </div>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-[2rem] border border-white/5 hover:border-cyan-500/20 transition-colors">
              <p className="text-cyan-500/70 text-[10px] uppercase tracking-widest font-black mb-1">Perfil</p>
              <p className="text-white font-bold text-base italic">Backend & FullStack</p>
            </div>
          </div>

          <div className="p-6 sm:p-7 bg-slate-900/50 rounded-[2rem] border border-white/5 hover:border-cyan-500/20 transition-colors">
            <p className="text-cyan-500/70 text-[10px] uppercase tracking-widest font-black mb-2">Mi Objetivo</p>
            <p className="text-white/90 font-medium text-base leading-relaxed">
              Quiero seguir creciendo como desarrollador, trabajando en <span className="text-white font-bold">proyectos desafiantes</span>, colaborando con equipos diversos y explorando nuevas tecnologías.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}