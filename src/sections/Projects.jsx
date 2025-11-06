// src/sections/Projects.jsx
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-24 bg-transparent text-inherit"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
        <ul className="space-y-10">

          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                Bachelor’s Thesis: Skeleton-based Action Recognition
              </h3>
              <a
                href="https://github.com/sumukhveeramalla/majorProject/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-white hover:scale-110 transition" />
              </a>
            </div>
            <p className="mt-2">
              Developed a <strong>ConMLP-based model</strong> with encoder–decoder architecture using
              <strong> Contrastive</strong> and <strong> Reconstruction</strong> losses; achieved
              <strong> 93.55% accuracy</strong> on the NTU RGB+D dataset using <strong>PyTorch</strong>.
            </p>
          </li>

          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Image Caption Generation</h3>
              <a
                href="https://github.com/YOUR_USERNAME/image-caption-generation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-white hover:scale-110 transition" />
              </a>
            </div>
            <p className="mt-2">
              Built two pipelines: (1) <strong>Data2Vec + Transformer</strong> (BLEU-1 = 0.51, +8%) and
              (2) <strong>CNN + Transformer</strong> hybrid for robustness in image-to-text generation tasks.
            </p>
          </li>

          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Food Delivery Web App</h3>
              <a
                href="https://github.com/sumukhveeramalla/Wah-webapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-white hover:scale-110 transition" />
              </a>
            </div>
            <p className="mt-2">
              Implemented core functionalities—<strong>browsing</strong>, <strong>cart</strong>, <strong>orders</strong>,
              and <strong>authentication</strong>—using the <strong>MERN stack</strong>: MongoDB, Express.js, React, and Node.js.
            </p>
          </li>

          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Roko – Distributed LLM Inference Platform</h3>
              <a
                href="https://github.com/alpacaswillrule/Roko/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-white hover:scale-110 transition" />
              </a>
              <a
                  href="https://devpost.com/software/roko-bhtl5p"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="text-white hover:scale-110 transition" />
                </a>
            </div>
            <p className="mt-2">
              Built using <strong>Hedera</strong> and <strong>Petals</strong>, this platform enables
              cost-efficient distributed LLM training with crypto-incentives. <br />
              🥉 <em>Harvard LIVE AI Hackathon Bronze Winner, 2nd Place Blockchain, 3rd Place AI/ML</em>
            </p>
          </li>

        </ul>
      </div>
    </section>
  );
};

export default Projects;
