import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* Fondos dinámicos */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-15%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[180px] animate-pulse-slow"></div>
        <div className="absolute bottom-[5%] right-[-20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[180px] animate-spin-slow"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4">
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}