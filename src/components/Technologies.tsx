import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Backend",
    skills: ["Java", "Framework Spring", "APIs REST", "Arquitectura en Capas", "Python", "Ruby"]
  },
  {
    title: "Bases de datos",
    skills: ["MySQL", "PostgreSQL", "SQLite"]
  },
  {
    title: "Herramientas",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  }
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Encabezado */}
        <div className="flex flex-col gap-2 mb-16">
          <p className="text-cyan-500 font-mono text-sm tracking-widest uppercase italic">Tecnologías</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Herramientas con las que trabajo</h2>
          <div className="w-20 h-1.5 bg-cyan-500 mt-4 rounded-full"></div>
        </div>

        {/* Grid de 2x2 para las categorías */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-slate-900/50 rounded-[2rem] border border-white/5 shadow-2xl flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-8 italic tracking-tight underline decoration-cyan-500/30 underline-offset-8">
                {cat.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {cat.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-5 py-2.5 rounded-full bg-slate-800/80 border border-cyan-500/10 text-cyan-400 font-mono text-sm hover:border-cyan-500/40 hover:bg-slate-800 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}