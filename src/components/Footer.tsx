export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 text-center relative z-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-gray-500 text-sm tracking-widest uppercase">
          © 2026 Mateo Calcagno — Hecho con React & Tailwind
        </p>
        <div className="flex gap-6 text-gray-400">
          <a 
            href="https://github.com/MateoCalcagno" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/mateo-calcagno" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}