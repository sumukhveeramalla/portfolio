// src/sections/Experience.jsx
const experiences = [
  {
    title: "Research Assistant – Mobile Computing Lab, UMass Boston",
    date: "Jan 2025 – Aug 2025",
    description: (
      <>
        Conducted research under <strong>Prof. Xiaohui Liang</strong> on AI-driven health monitoring
        systems such as <strong>NutriTalk</strong> and <strong>UADA</strong>. Developed
        privacy-preserving frameworks leveraging <strong>LLMs</strong>,{" "}
        <strong>knowledge graphs</strong>, and{" "}
        <strong>EMA-based personalized dietary modeling</strong>. Built a full-stack web
        application using <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
        <strong>MongoDB</strong> for managing clinical datasets.
      </>
    ),
  },
  {
    title: "Teaching Assistant – ENGIN 104 & ENGIN 346, UMass Boston",
    date: "Sep 2025 – Present",
    description: (
      <>
        Assisting in undergraduate embedded systems and electrical engineering courses. Responsibilities
        include <strong>grading</strong> and <strong>evaluating</strong> hands-on labs involving{" "}
        <strong>STM32 microcontrollers</strong>, <strong>UART communication</strong>,{" "}
        <strong>EXTI interrupts</strong>, and <strong>system clock configuration</strong>. Provided
        detailed feedback and debugging support to over <strong>100 students</strong> each semester.
      </>
    ),
  },
  {
    title: "Ph.D. Student / Researcher – Computer Science, UMass Boston",
    date: "Sep 2025 – Present",
    description: (
      <>
        Pursuing research focused on <strong>AI-driven health assessment</strong>,{" "}
        <strong>privacy-preserving learning</strong>, and{" "}
        <strong>multi-modal data fusion</strong>. Working on integrating{" "}
        <strong>speech biomarkers</strong> and{" "}
        <strong>personalized dietary inference</strong> models into next-generation healthcare systems.
      </>
    ),
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-24"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
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
                <h3 className="text-xl font-semibold">
                  {exp.title}
                </h3>
                <span className="text-sm text-white/60 mt-1 md:mt-0">
                  {exp.date}
                </span>
              </div>

              <p className="mt-2 text-sm md:text-base leading-relaxed text-white/90">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

  
  