/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colores de fondo oscuros profesionales
        slate: {
          950: "#0b0c10", // Fondo principal
          900: "#14161a", // Fondo de tarjetas
          800: "#1e2229", // Tono ligeramente más claro para hover
        },
        // Colores vibrantes para iconos y detalles
        cyan: {
          400: "#00d8ff", // React
          500: "#00b5d1", // Enfoque principal
        },
        purple: {
          500: "#a855f7", // Spring Boot
          600: "#9333ea", // Detalles
        },
        // Otros colores para el stack
        orange: { 500: "#f97316" }, // Java
        green: { 500: "#22c55e" }, // SQL/Spring
        blue: { 500: "#3b82f6" }, // TS/Git
        white: "#ffffff",
        gray: {
          300: "#d1d5db", // Texto secundario
          400: "#9ca3af", // Texto de descripción
          500: "#6b7280", // Detalles de metadata
        },
      },
      borderRadius: {
        "3xl": "1.5rem", // Redondeado pronunciado para tarjetas
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};