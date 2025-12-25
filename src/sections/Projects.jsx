// src/sections/Projects.jsx
import { Github, ExternalLink } from "lucide-react";

// src/sections/Projects.jsx
const projects = [
  {
    title: "Web Recommender System",
    description: (
      <>
        The Web Recommender System is a full-stack, AI-powered movie recommendation platform designed to provide personalized and explainable movie suggestions based on user preferences. The system integrates modern web technologies with large language model–based reasoning to deliver recommendations that are not only accurate, but also transparent and fairness-aware.
      </>
    ),
    link: "https://recommender-d124b.web.app/",
  },
  {
    title: "Roko – Distributed LLM Inference Platform",
    description: (
      <>
        Built using <strong>Hedera</strong> and <strong>Petals</strong> for distributed LLM training
        with crypto-incentives.
        <br />
        🥉 <em>Harvard LIVE AI Hackathon Bronze Winner</em>
      </>
    ),
    link: "https://github.com/alpacaswillrule/Roko/",
  },
  {
    title: "Bachelor’s Thesis: Skeleton-based Action Recognition",
    description: (
      <>
        Developed a <strong>ConMLP-based model</strong> with encoder–decoder architecture using
        <strong> Contrastive</strong> and <strong> Reconstruction</strong> losses; achieved
        <strong> 93.55% accuracy</strong> on the NTU RGB+D dataset using <strong>PyTorch</strong>.
      </>
    ),
    link: "https://github.com/sumukhveeramalla/majorProject/",
  },
  {
    title: "Facial Verificatin using a Siamese Network",
    description: (
      <>
        This project implements a facial verification system using a Siamese neural network, which determines whether two facial images belong to the same person. Instead of classifying faces into fixed identities, the model learns a similarity function by extracting feature embeddings from each image and measuring the distance between them.
      </>
    ),
    link: "https://github.com/sumukhveeramalla/face_verification/"
  },
  {
    title: "Image Caption Generation",
    description: (
      <>
        Built two pipelines: (1) <strong>Data2Vec + Transformer</strong> (BLEU-1 = 0.51, +8%) and
        (2) <strong>CNN + Transformer</strong> hybrid for image-to-text generation.
      </>
    ),
    link: "https://github.com/YOUR_USERNAME/image-caption-generation",
  },
  {
    title: "Food Delivery Web App",
    description: (
      <>
        Implemented <strong>browsing</strong>, <strong>cart</strong>, <strong>orders</strong>, and
        <strong> authentication</strong> using the <strong>MERN stack</strong>.
      </>
    ),
    link: "https://github.com/sumukhveeramalla/Wah-webapp",
  }
  
  
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-24"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block rounded-xl border border-white/10
                bg-white/5 backdrop-blur-sm
                p-6 transition-all duration-300
                hover:border-white/40
                hover:bg-white/10
                hover:-translate-y-1
                hover:shadow-lg hover:shadow-white/10
                cursor-pointer
              "
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

