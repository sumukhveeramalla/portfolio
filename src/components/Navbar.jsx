// src/components/Navbar.jsx
import React from "react";

const navItems = [
  "Home",
  "About",
  "Experience",
  "Education",
  "Skills",
  "Projects",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Sumukh Veeramalla</h1>
        <nav className="flex gap-6 text-sm font-medium text-white">
          {navItems.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}