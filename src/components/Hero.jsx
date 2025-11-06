// src/components/Hero.jsx
import React from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Button } from "./ui/button";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20"
    >
      <p className="text-gray-400 text-sm uppercase tracking-widest">Hey there, I am</p>
      <h1 className="text-5xl md:text-6xl font-bold text-white mt-2">
        Sumukh Veeramalla
      </h1>
      <h2 className="text-lg md:text-xl text-gray-300 mt-4">
        <Typewriter
          options={{
            strings: ["Full Stack Developer", "AI/ML Researcher", "Open Source Enthusiast"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <div className="flex gap-6 mt-6">
        <a href="https://linkedin.com/in/veeramalla-sumukh" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-blue-400 hover:scale-110 transition" />
        </a>
        <a href="https://github.com/sumukhveeramalla" target="_blank" rel="noopener noreferrer">
          <Github className="text-white hover:scale-110 transition" />
        </a>
        <a href="mailto:sumukhveeramalla2345@gmail.com">
          <Mail className="text-red-400 hover:scale-110 transition" />
        </a>
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8"
      >
        <Button className="flex items-center gap-2 bg-white text-black hover:bg-gray-200">
          <Download size={18} />
          View Resume
        </Button>
      </a>
    </section>
  );
}