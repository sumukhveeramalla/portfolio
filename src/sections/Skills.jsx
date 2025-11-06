// src/sections/Skills.jsx

const Skills = () => {
    return (
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-24 bg-transparent text-inherit"
      >
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              // Languages
              "Python", "Java", "C++", "JavaScript", "HTML", "CSS", "SQL", "R",
  
              // Frameworks & Libraries
              "React", "Node.js", "NumPy", "Pandas", "Matplotlib", "Keras", "TensorFlow", "PyTorch", "OpenCV",
  
              // Tools & Databases
              "Git", "VS Code", "Selenium", "Postman", "MySQL", "PostgreSQL", "MongoDB",
  
            ].map((skill, idx) => (
              <span
                key={idx}
                className="text-center border border-gray-400 dark:border-gray-600 rounded px-4 py-2 bg-inherit shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  
  