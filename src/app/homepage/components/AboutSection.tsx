"use client";

import { useRef } from "react";
import { motion, useInView ,Variants } from "framer-motion";

const highlights = [
  {
    icon: "🌐",
    title: "MERN Stack",
    desc: "MongoDB, Express, React, Node.js — end-to-end web development",
    color: "var(--accent-amber)",
  },
  {
    icon: "🧩",
    title: "Data Structures & Algorithms",
    desc: "Competitive programming, LeetCode problem solving, complexity analysis",
    color: "var(--accent-teal)",
  },
  {
    icon: "🤖",
    title: "Machine Learning",
    desc: "Python-based ML models, OpenCV, MediaPipe for computer vision",
    color: "#A78BFA",
  },
  {
    icon: "⚙️",
    title: "Automation Projects",
    desc: "Scripting, data pipelines, browser automation with Python",
    color: "#34D399",
  },
];

// About Section — Asymmetric 60/40 layout
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

 const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

  return (
    <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
>
    <section
    
      id="about"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-amber), transparent)",
          opacity: 0.3,
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span
            className="font-mono text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--accent-amber)" }}
          >
            01 / About
          </span>
          <div
            className="flex-1 h-px max-w-24"
            style={{ background: "var(--border-color)" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: 3/5 — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3 flex flex-col gap-8"
          >
            <motion.h2
              variants={itemVariants}
              className="font-sans font-bold tracking-tight leading-[1.1]"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--text-primary)",
              }}
            >
              Building the web,{" "}
              <span className="gradient-text">one commit at a time.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m Raj Sarkar, a third-year B.Tech Computer Science student at
              a university in Kolkata. I&apos;m deeply passionate about full-stack
              web development and enjoy turning complex problems into simple,
              elegant solutions.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              My journey started with competitive programming, which gave me a
              strong foundation in algorithms and logical thinking. Since then,
              I&apos;ve built everything from full-featured job portals to computer
              vision automation tools — always focused on writing clean,
              maintainable code.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              
            </motion.p>

            {/* Quick stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4"
            >
              {[
                { value: "10+", label: "Projects" },
                { value: "2027", label: "Graduation" },
                { value: "DSA", label: "Problem Solving" },
              ]?.map((stat) => (
                <div
                  key={stat?.label}
                  className="text-center p-4 rounded-2xl"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <p
                    className="text-2xl font-bold font-mono mb-1"
                    style={{ color: "var(--accent-amber)" }}
                  >
                    {stat?.value}
                  </p>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {stat?.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 2/5 — Highlight Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <motion.h3
              variants={itemVariants}
              className="font-semibold text-sm uppercase tracking-widest mb-2"
              style={{ color: "var(--text-muted)" }}
            >
              Core Expertise
            </motion.h3>
            {highlights?.map((item) => (
              <motion.div
                key={item?.title}
                variants={itemVariants}
                className="p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] group"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: `${item?.color}18` }}
                  >
                    {item?.icon}
                  </span>
                  <div>
                    <h4
                      className="font-semibold text-sm mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item?.title}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item?.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
      </motion.div>
  );
};

export default AboutSection;