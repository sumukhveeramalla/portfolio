// src/sections/About.jsx

import React from "react";
import myPhoto from "../assets/sumukh_photo.JPG"; // Update path if needed

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-24 bg-transparent text-inherit"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Text section */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m <strong>Sumukh Veeramalla</strong>, a passionate Open Source and Research
            enthusiast. Currently a Computer Science PhD student at{" "}
            <strong>UMass Boston</strong>, exploring the intersection of{" "}
            <strong>AI, health</strong>, and{" "}
            <strong>privacy-preserving technologies</strong>. My journey combines
            rigorous research, impactful projects, and a strong belief in
            technology for good.
          </p>
        </div>

        {/* Photo section */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={myPhoto}
            alt="Sumukh Veeramalla"
            className="w-64 h-64 object-cover rounded-xl shadow-lg border border-white/20"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
