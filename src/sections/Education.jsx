// src/sections/Education.jsx

const education = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "University of Massachusetts Boston",
    date: "Sep 2025 – Present",
    description: (
      <>
        GPA: <strong>3.95/4.00</strong> — Focused on <strong>AI-driven health systems</strong>,{" "}
        <strong>secure computing</strong>, and <strong>personalized learning</strong>. Conducting
        doctoral research while completing M.S. requirements en route.
      </>
    ),
  },
  {
    degree: "M.S. in Computer Science",
    institution: "University of Massachusetts Boston",
    date: "Sep 2024 – May 2026 (Expected)",
    description: (
      <>
        Enrolled in a combined <strong>Master’s–Ph.D. track</strong>. Completed foundational
        coursework and projects in <strong>machine learning</strong> and{" "}
        <strong>full-stack systems</strong>.
      </>
    ),
  },
  {
    degree: "B.Tech. in Computer Science and Engineering",
    institution: "NIT Andhra Pradesh",
    date: "Nov 2020 – May 2024",
    description: (
      <>
        GPA: <strong>7.71/10</strong> — Graduated with experience in <strong>AI/ML</strong>,{" "}
        <strong>full-stack web development</strong>, and <strong>academic research</strong>.
        Completed a thesis in <strong>skeleton-based action recognition</strong> with{" "}
        <strong>93.55% model accuracy</strong>.
      </>
    ),
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-24"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="
                rounded-xl border border-white/10
                bg-white/5 backdrop-blur-sm
                p-6 transition-all duration-300
                hover:border-white/40
                hover:bg-white/10
                hover:-translate-y-1
                hover:shadow-lg hover:shadow-white/10
              "
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <h3 className="text-xl font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-white/70">
                    {edu.institution}
                  </p>
                </div>

                <span className="text-sm text-white/60 mt-2 md:mt-0">
                  {edu.date}
                </span>
              </div>

              <p className="mt-3 text-sm md:text-base leading-relaxed text-white/90">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

  
  