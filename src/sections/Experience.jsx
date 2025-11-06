// src/sections/Experience.jsx
const Experience = () => {
    return (
      <section
        id="experience"
        className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-24 bg-transparent text-inherit"
      >
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Experience</h2>
  
          <ul className="space-y-10">
            {/* Research Assistant */}
            <li>
              <h3 className="text-xl font-semibold">
                Research Assistant – Mobile Computing Lab, UMass Boston
              </h3>
              <p className="text-sm opacity-70">Jan 2025 – Aug 2025</p>
              <p className="mt-2 leading-relaxed">
                Conducted research under <strong>Prof. Xiaohui Liang</strong> on AI-driven health monitoring systems such as{" "}
                <strong>NutriTalk</strong> and <strong>UADA</strong>. Developed privacy-preserving
                frameworks leveraging <strong>LLMs</strong>, <strong>knowledge graphs</strong>, and{" "}
                <strong>EMA-based personalized dietary modeling</strong>. Built a full-stack web
                application using <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
                <strong>MongoDB</strong> for managing clinical datasets.
              </p>
            </li>
  
            {/* Teaching Assistant */}
            <li>
              <h3 className="text-xl font-semibold">
                Teaching Assistant – ENGIN 104 & ENGIN 346, UMass Boston
              </h3>
              <p className="text-sm opacity-70">Sep 2025 – Present</p>
              <p className="mt-2 leading-relaxed">
                Assisting in undergraduate embedded systems and electrical engineering courses.
                Responsibilities include <strong>grading</strong> and <strong>evaluating</strong>{" "}
                hands-on labs involving <strong>STM32 microcontrollers</strong>,{" "}
                <strong>UART communication</strong>, <strong>EXTI interrupts</strong>, and{" "}
                <strong>system clock configuration</strong>. Provide detailed feedback and debugging
                support to over <strong>100 students</strong> each semester.
              </p>
            </li>
  
            {/* Ph.D. Student / Researcher */}
            <li>
              <h3 className="text-xl font-semibold">
                Ph.D. Student / Researcher – Computer Science, UMass Boston
              </h3>
              <p className="text-sm opacity-70">Sep 2025 – Present</p>
              <p className="mt-2 leading-relaxed">
                Pursuing research focused on <strong>AI-driven health assessment</strong>,
                <strong> privacy-preserving learning</strong>, and <strong>multi-modal data fusion</strong>.
                Working on integrating <strong>speech biomarkers</strong> and{" "}
                <strong>personalized dietary inference</strong> models into next-generation
                healthcare systems.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Experience;
  
  