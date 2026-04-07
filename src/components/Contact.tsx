import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const GithubLogo = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinLogo = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-tighter italic">Contáctame</h2>
          <div className="h-px flex-1 bg-white/10 hidden md:block mx-8 mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta de contacto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 bg-slate-900 rounded-[2rem] border border-white/5 space-y-8"
          >
            <p className="text-gray-400 leading-relaxed text-lg">
              Estoy abierto a nuevas oportunidades y desafíos técnicos. ¡No dudes en escribirme!
            </p>
            
            <div className="space-y-4">
              {/* Email (no pointer) */}
              <div className="flex items-center gap-4 text-gray-300 group cursor-default">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:text-cyan-400 transition-colors">
                  <Mail size={20} />
                </div>
                <p className="text-white font-medium">mateocalcagno5@gmail.com</p>
              </div>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/mateo-calcagno"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 text-gray-300 group"
              >
                <div className="p-3 bg-slate-800 rounded-xl group-hover:text-blue-500 transition-colors">
                  <LinkedinLogo />
                </div>
                <p className="text-white font-medium">linkedin.com/in/mateo-calcagno</p>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/MateoCalcagno"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 text-gray-300 group"
              >
                <div className="p-3 bg-slate-800 rounded-xl group-hover:text-white transition-colors">
                  <GithubLogo />
                </div>
                <p className="text-white font-medium">github.com/MateoCalcagno</p>
              </motion.a>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-slate-900 rounded-[2rem] border border-white/5"
          >
            <form className="space-y-5" action="mailto:mateocalcagno5@gmail.com" method="POST" encType="text/plain">
              <input type="text" placeholder="Tu nombre" required className="w-full px-5 py-4 rounded-2xl bg-slate-800 border border-white/5 text-white focus:border-cyan-500 outline-none transition-all" />
              <input type="email" placeholder="Tu correo" required className="w-full px-5 py-4 rounded-2xl bg-slate-800 border border-white/5 text-white focus:border-cyan-500 outline-none transition-all" />
              <textarea rows={4} placeholder="Tu mensaje" required className="w-full px-5 py-4 rounded-2xl bg-slate-800 border border-white/5 text-white focus:border-cyan-500 outline-none transition-all"></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-cyan-500 text-slate-950 py-4 rounded-2xl font-black uppercase tracking-widest transition-all"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}