import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import OrderSystemImg from "../assets/sp.png";
import VaultImg from "../assets/vault.png";
import BeatAIImg from "../assets/beatai.jpeg";

// Componente SVG para GitHub
const GithubLogo = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const projects = [
  {
    name: "Order System App",
    description: "Sistema fullstack para gestión de productos y órdenes con autenticación y dashboard de estadísticas.",
    longDesc: "Proyecto propio. Desarrollado con Java, Spring Boot y React. Incluye autenticación JWT, roles ADMIN/USER, carrito dinámico, CRUD de productos y dashboard de ventas. Arquitectura en capas y buenas prácticas de desarrollo.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT"],
    github: "https://github.com/MateoCalcagno/OrderSystem",
    link: "https://order-system-vert.vercel.app",
    image: OrderSystemImg 
  },
  {
    name: "Vault - Virtual Wallet",
    description: "Billetera virtual para gestionar dinero digital de manera segura y sencilla.",
    longDesc: "Construida con Ruby, Sinatra y ActiveRecord. Permite ingresos, transferencias, retiros, reservas y consulta de actividad. Dockerizado para entorno consistente y confiable.",
    tags: ["Ruby", "Sinatra", "ActiveRecord", "SQLite3", "Docker"],
    github: "https://github.com/Elias-Raimundo/Vault-app",
    link: "#",
    image: VaultImg
  },
  {
    name: "BeatAI",
    description: "Aplicación para análisis de electrocardiogramas con soporte visual de resultados de IA.",
    longDesc: "Desarrollé frontend con React, HTML, CSS y JavaScript, y colaboré en el backend con Flask y SQLite, implementando la conexión con la base de datos y algunas funcionalidades auxiliares. La IA fue desarrollada por el equipo especializado de AI training.",
    tags: ["React", "JavaScript", "Flask", "SQLite", "Python"],
    github: "https://github.com/SantiagoBuffa/BeatAI",
    link: "#",
    image: BeatAIImg
  }
];

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Cabecera de sección */}
        <div className="flex flex-col gap-2 mb-16">
          <p className="text-cyan-500 font-mono text-sm tracking-widest uppercase">Mis Proyectos</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Algunos trabajos que hice</h2>
          <div className="w-24 h-1.5 bg-cyan-500 mt-4 rounded-full"></div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-slate-900 rounded-[2rem] border border-white/5 overflow-hidden flex flex-col hover:border-cyan-500/30 transition-all shadow-xl"
            >
              {/* Imagen */}
              <div className="p-4">
                <div className="aspect-video rounded-[1.5rem] overflow-hidden relative cursor-pointer" onClick={() => setSelectedImg(p.image)}>
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 pt-2 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{p.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-6 italic">{p.longDesc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {p.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full bg-slate-800 border border-white/5 text-gray-300 text-[11px] font-mono font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                  {p.github && (
                    <a href={p.github} className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white transition-colors">
                      <GithubLogo /> Código
                    </a>
                  )}
                  {p.link && p.link !== "#" && (
                    <a href={p.link} className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox para ver imágenes en grande */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img 
              src={selectedImg} 
              alt="Proyecto" 
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}