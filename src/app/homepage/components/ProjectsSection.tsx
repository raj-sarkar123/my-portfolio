"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  longDesc: string;
  tech: string[];
  github: string;
  demo: string | null;
  emoji: string;
  color: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "job-portal",
    title: "Job Portal",
    description:
      "Full-featured job portal connecting recruiters and job seekers with real-time listings, application tracking, and role-based dashboards.",
    longDesc:
      "Built with MERN stack featuring JWT authentication, role-based access control for employers and candidates, real-time job listings with filters, resume upload via Multer, and an admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/raj-sarkar123/Job-Portal-Application-JobPilot-",
    demo: "https://job-pilot-application.vercel.app/",
    emoji: "💼",
    color: "#F59E0B",
    category: "Web App",
  },
  {
  id: "event-scraping",
  title: "Automated Event Data Scraping and Aggregation System",
  description:
    "Developed a full-stack web application that automatically extracts, processes, and aggregates event data from multiple online sources using scheduled scraping jobs.",
  longDesc:
    "Designed and implemented a scalable event data extraction system using Python-based web scraping techniques. Integrated automated cron jobs for periodic data collection, implemented data cleaning and structuring pipelines, and stored processed event information in a database for efficient retrieval. Built a responsive frontend interface to display aggregated event listings with filtering and search functionality.",
  tech: ["Python", "Cheerio", "Axios", "Cron Jobs", "MongoDB", "REST API"],
  github: "https://github.com/raj-sarkar123/Event-Scraping-Application", // update if different
  demo: "https://unrivaled-rabanadas-885a9c.netlify.app/",
  emoji: "📅",
  color: "#6366F1",
  category: "Web Scraping",
},
  {
    id: "hand-gesture",
    title: "Hand Gesture Control",
    description:
      "Real-time hand gesture recognition system that controls volume using only a webcam — no hardware required.",
    longDesc:
      "Uses OpenCV for video capture and MediaPipe for 21-point hand landmark detection. Maps gesture patterns to system controls — volume, brightness, mouse cursor movement — with 94% recognition accuracy.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "PyAutoGUI"],
    github: "https://github.com/rajsarkar/hand-gesture-control",
    demo: null,
    emoji: "🖐️",
    color: "#A78BFA",
    category: "Computer Vision",
  },
  {
  id: "handwritten-digit-recognition",
  title: "Handwritten Digit Recognition using Convolutional Neural Networks (CNNs)",
  description:
    "Developed a deep learning model to accurately classify handwritten digits using Convolutional Neural Networks trained on image datasets.",
  longDesc:
    "Designed and implemented a CNN-based image classification model for recognizing handwritten digits. Performed data preprocessing including normalization and reshaping of image tensors, built a multi-layer convolutional architecture with ReLU activation and max-pooling layers, and trained the model using backpropagation with the Adam optimizer. Evaluated performance using accuracy metrics and confusion matrix analysis, achieving high classification accuracy on test data.",
  tech: ["Python", "TensorFlow/Keras", "CNN", "NumPy", "Matplotlib"],
  github: "https://github.com/raj-sarkar123/Handwritten-digit-recognition-using-CNNs", 
  demo: null,
  emoji: "🔢",
  color: "#60A5FA",
  category: "Machine Learning",
},
];

// Individual Project Card
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="project-card rounded-3xl flex flex-col overflow-hidden group cursor-pointer"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Card Header */}
      <div
        className="h-48 relative flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(${project.color} 1px, transparent 1px),
              linear-gradient(90deg, ${project.color} 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
        <span
          className="text-6xl z-10 transition-transform duration-500 group-hover:scale-110"
        >
          {project.emoji}
        </span>

        {/* Category badge */}
        <span
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold font-mono"
          style={{
            background: `${project.color}20`,
            color: project.color,
            border: `1px solid ${project.color}40`,
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3
            className="font-bold text-lg mb-2 font-sans"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {isExpanded ? project.longDesc : project.description}
          </p>
        </div>

        {/* See more toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold font-mono self-start"
          style={{ color: "var(--accent-teal)" }}
        >
          {isExpanded ? "↑ Show less" : "↓ Read more"}
        </button>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs font-mono font-medium"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-muted)",
                border: "1px solid var(--border-color)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: "var(--bg-secondary)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-color)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: project.color,
                color: "#0D0D0F",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          ) : (
            <span
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium opacity-50"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-muted)",
              }}
            >
              No Demo
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Projects Section
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 lg:py-32 relative"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span
            className="font-mono text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--accent-amber)" }}
          >
            03 / Projects
          </span>
          <div
            className="flex-1 h-px max-w-24"
            style={{ background: "var(--border-color)" }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold tracking-tight leading-[1.1]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--text-primary)",
            }}
          >
            Things I&apos;ve{" "}
            <span style={{
                  color: 'var(--accent-amber)',
                  textShadow: '0 0 20px rgba(245,158,11,0.3)',
                }}>built</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm max-w-xs"
            style={{ color: "var(--text-muted)" }}
          >
            A selection of projects spanning web development, computer vision,
            and data analysis.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/raj-sarkar123?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{
              background: "var(--bg-card)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-color)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View all on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;