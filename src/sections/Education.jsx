// src/sections/Education.jsx

const Education = () => {
    return (
      <section
        id="education"
        className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-24 bg-transparent text-inherit"
      >
        <div className="max-w-3xl w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>
  
          {/* PhD Program */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Ph.D. in Computer Science, University of Massachusetts Boston
            </h3>
            <p className="text-sm opacity-70">Sep 2025 – Present</p>
            <p className="mt-2">
              GPA: 3.95/4.00 — Focused on AI-driven health systems, secure computing, and personalized learning. Conducting doctoral research while completing M.S. requirements en route.
            </p>
          </div>
  
          {/* MS Program */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              M.S. in Computer Science, University of Massachusetts Boston
            </h3>
            <p className="text-sm opacity-70">Sep 2024 – May 2026 (Expected)</p>
            <p className="mt-2">
              Enrolled in M.S. program as part of a combined Master’s–Ph.D. track. Completed foundational coursework and projects in machine learning, full-stack systems.
            </p>
          </div>
  
          {/* Undergraduate */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              B.Tech. in Computer Science and Engineering, NIT Andhra Pradesh
            </h3>
            <p className="text-sm opacity-70">Nov 2020 – May 2024</p>
            <p className="mt-2">
              GPA: 7.71/10 — Graduated with core experience in AI/ML, full-stack web development, and academic research. Completed a thesis in skeleton-based action recognition with 93.55% model accuracy.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  
  