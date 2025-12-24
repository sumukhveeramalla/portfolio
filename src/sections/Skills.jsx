// src/sections/Skills.jsx

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "HTML", "CSS", "SQL", "R"],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Model Evaluation & Metrics",
      "Feature Engineering",
      "Fine-tuning & Transfer Learning",
    ],
  },
  {
    title: "Systems & Software Engineering",
    skills: [
      "REST API Design",
      "MVC Architecture",
      "Object-Oriented Design",
      "Design Patterns",
      "Authentication & Authorization",
      "Concurrency & Multithreading",
      "Distributed Systems Basics",
    ],
  },    
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Node.js",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Keras",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
    ],
  },
  {
    title: "Tools & Databases",
    skills: [
      "Git",
      "VS Code",
      "Selenium",
      "Postman",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-24"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
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
              <h3 className="text-lg font-semibold mb-4 text-center">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1.5 text-sm rounded-full
                      border border-white/20
                      bg-white/10
                      text-white/90
                      transition
                      hover:bg-white/20
                      hover:border-white/40
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

  
  