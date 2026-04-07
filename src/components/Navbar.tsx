export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.05] bg-slate-950/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center text-[12px] md:text-[14px] tracking-[0.2em] uppercase font-medium">
        <a href="#hero" className="text-white hover:opacity-70 transition-opacity font-bold">
          Mateo Calcagno
        </a>

        <ul className="hidden md:flex gap-10 text-gray-500">
          {[
            { name: "Inicio", href: "#hero" },
            { name: "Sobre mí", href: "#about" },
            { name: "Tecnologías", href: "#technologies" },
            { name: "Proyectos", href: "#projects" },
            { name: "Contacto", href: "#contact" }
          ].map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-white transition-colors duration-300">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}