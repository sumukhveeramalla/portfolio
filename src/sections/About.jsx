// src/sections/About.jsx

import myPhoto from "../assets/sumukh_photo.JPG";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-24"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          About Me
        </h2>

        {/* Card */}
        <div
          className="
            rounded-2xl border border-white/10
            bg-white/5 backdrop-blur-sm
            p-8 md:p-10
            transition-all duration-300
            hover:border-white/30
            hover:bg-white/10
            hover:shadow-lg hover:shadow-white/10
          "
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text */}
            <div className="md:w-2/3">
              <p className="text-lg leading-relaxed text-white/90">
                I’m <strong>Sumukh Veeramalla</strong>, a passionate{" "}
                <strong>Open Source</strong> and <strong>Research</strong>{" "}
                enthusiast. Currently a <strong>Computer Science Ph.D. student</strong>{" "}
                at <strong>UMass Boston</strong>, exploring the intersection of{" "}
                <strong>AI</strong>, <strong>health</strong>, and{" "}
                <strong>privacy-preserving technologies</strong>.
                <br />
                <br />
                My journey combines <strong>rigorous research</strong>,{" "}
                <strong>impactful projects</strong>, and a strong belief in{" "}
                <strong>technology for good</strong>.
              </p>
            </div>

            {/* Photo */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src={myPhoto}
                alt="Sumukh Veeramalla"
                className="
                  w-64 h-64 object-cover rounded-xl
                  border border-white/20
                  shadow-lg
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
