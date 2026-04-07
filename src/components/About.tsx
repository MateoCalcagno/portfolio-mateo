import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Encabezado con línea de acento */}
        <div className="flex flex-col gap-2 mb-16">
          <p className="text-cyan-500 font-mono text-sm tracking-widest uppercase italic">Sobre mí</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Un vistazo a mi perfil</h2>
          <div className="w-20 h-1.5 bg-cyan-500 mt-4 rounded-full"></div>
        </div>

        {/* Grid de dos columnas para las tarjetas de perfil */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-slate-900/50 rounded-[2rem] border border-white/5 shadow-2xl"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              Soy <span className="text-white font-bold italic">Mateo Calcagno</span>, Analista en Computación, apasionado por transformar ideas en soluciones tecnológicas. Me encanta desarrollar software, crear aplicaciones web eficientes y resolver problemas complejos con código. Siempre busco aprender nuevas herramientas y perfeccionar mis habilidades para mantenerme a la vanguardia en tecnología.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-slate-900/50 rounded-[2rem] border border-white/5 shadow-2xl"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              Disfruto construir proyectos que combinen <span className="text-white font-bold">claridad, orden y creatividad</span>. Me motiva trabajar en equipo, colaborar con otros desarrolladores y diseñadores, y enfrentar desafíos que me permitan seguir creciendo como profesional en el mundo IT. Cada proyecto es una oportunidad para aprender, innovar y dejar mi huella en la tecnología.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}