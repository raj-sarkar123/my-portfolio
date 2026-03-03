'use client';

import { motion, Variants } from 'framer-motion';

import AppImage from '@/src/components/ui/AppImage';
import { useEffect, useState } from "react";

// Floating stat card component
const FloatingCard = ({
  children,
  className,
  delay = 0,
  floatClass = 'float-animation',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  floatClass?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 2.2 + delay, ease: [0.16, 1, 0.3, 1] }}
    className={`glass-card rounded-xl lg:rounded-2xl shadow-card absolute 
text-xs lg:text-sm px-3 py-2 lg:px-4 lg:py-3 
${floatClass} ${className}`}
  >
    {children}
  </motion.div>
);
function useTyping(words: string[], typingSpeed = 80, deletingSpeed = 40, pause = 1500) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    } 
    else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } 
    else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);
    } 
    else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

// Social icon button
const SocialLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1"
    style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-color)',
      color: 'var(--text-secondary)',
    }}
  >
    {icon}
  </a>
);

// Hero Section — Split-tone dark hero with floating cards
const HeroSection = () => {
  const roles = ["Full Stack Developer", "MERN Stack", "Problem Solver"];
const typedText = useTyping(roles);
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 2.0 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(var(--border-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-color) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient Orbs */}
      <div
        className="absolute top-1/4 -right-20 w-96 h-96 rounded-full blur-[120px] opacity-20 dark:opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)' }}
      />

      <div
        className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-15 dark:opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2DD4BF, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 z-10"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase font-mono"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--accent-amber)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-base font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              Hi there, I&apos;m 👋
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="hero-title font-sans font-bold tracking-tight leading-[1.05]"
              style={{
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                color: 'var(--text-primary)',
              }}
            >
              Raj{' '}
              <span
                style={{
                  color: 'var(--accent-amber)',
                  textShadow: '0 0 20px rgba(245,158,11,0.3)',
                }}
              >
                Sarkar
              </span>
            </motion.h1>

            {/* Title */}
           <motion.div
  variants={itemVariants}
  className="h-10 flex items-center"
>
  <span
    className="px-4 py-1 rounded-full text-sm font-medium font-mono"
    style={{
      background: 'var(--bg-secondary)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-color)',
    }}
  >
    {typedText}
    <span className="ml-1 animate-blink">|</span>
  </span>
</motion.div>

            {/* Intro */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              B.Tech Computer Science student at Kolkata, passionate about building scalable web
              applications and solving complex problems. I craft clean, efficient code — from REST
              APIs to React interfaces — and enjoy exploring ML and automation along the way.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => handleScroll('#projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-glow-amber"
                style={{
                  background: 'var(--accent-amber)',
                  color: '#0D0D0F',
                }}
              >
                View Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* <a
                href="/RAJ_SARKAR"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </a> */}
              <a
                href="/RAJ_SARKAR.pdf"
                download="Raj-Sarkar-Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </a>
              <button
                onClick={() => handleScroll('#contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: 'transparent',
                  color: 'var(--accent-amber)',
                  border: '1.5px solid var(--accent-amber)',
                }}
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
              <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                Find me on
              </span>
              <div className="flex gap-2">
                <SocialLink
                  href="https://github.com/raj-sarkar123"
                  label="GitHub"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  }
                />

                <SocialLink
                  href="https://www.linkedin.com/in/raj-sarkar-7b43b027a/"
                  label="LinkedIn"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  }
                />

                <SocialLink
                  href="https://leetcode.com/u/rajsarkar964/"
                  label="LeetCode"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    </svg>
                  }
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual with floating cards */}
          <div className="relative h-[350px] sm:h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Central Avatar Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden"
              style={{
                border: '3px solid var(--accent-amber)',
                boxShadow: '0 0 60px rgba(245,158,11,0.2), 0 0 120px rgba(245,158,11,0.1)',
              }}
            >
              <img src="/raj.png" alt="Raj Sarkar" className="object-cover object-[center_40%]" />

              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 60%, rgba(13,13,15,0.3) 100%)',
                }}
              />
            </motion.div>

            {/* Floating Card 1: MERN Stack */}
            <FloatingCard
              className="top-2 -left-4 sm:top-6 sm:-left-6 lg:top-12 lg:-left-8 ..."
              delay={0}
              floatClass="float-animation"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <div>
                  <p
                    className="text-xs font-bold font-mono"
                    style={{ color: 'var(--accent-amber)' }}
                  >
                    MERN Stack
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Full Stack Dev
                  </p>
                </div>
              </div>
            </FloatingCard>

            {/* Floating Card 2: DSA */}
            <FloatingCard
              className="
top-6 right-2
sm:top-10 sm:right-4
lg:top-20 lg:-right-4
min-w-[110px] sm:min-w-[120px] lg:min-w-[130px]
"
              delay={0.2}
              floatClass="float-animation-delay-1"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🧩</span>
                <div>
                  <p
                    className="text-xs font-bold font-mono"
                    style={{ color: 'var(--accent-teal)' }}
                  >
                    DSA
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Problem Solver
                  </p>
                </div>
              </div>
            </FloatingCard>

            {/* Floating Card 3: Projects */}
            <FloatingCard
              className="bottom-24 -left-12 px-4 py-3 min-w-[150px]"
              delay={0.4}
              floatClass="float-animation-delay-2"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  style={{ background: 'rgba(245,158,11,0.15)' }}
                >
                  🚀
                </div>
                <div>
                  <p
                    className="text-sm font-bold font-mono"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    10+
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Projects Built
                  </p>
                </div>
              </div>
            </FloatingCard>

            {/* Floating Card 4: ML */}
            <FloatingCard
            className="bottom-12 -right-4 sm:bottom-16 sm:-right-6 lg:bottom-16 lg:-right-8 ..."
              delay={0.6}
              floatClass="float-animation"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🤖</span>
                <div>
                  <p
                    className="text-xs font-bold font-mono"
                    style={{ color: 'var(--accent-teal)' }}
                  >
                    ML & CV
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    OpenCV · MediaPipe
                  </p>
                </div>
              </div>
            </FloatingCard>

            {/* Floating Card 5: B.Tech */}
            <FloatingCard
              className="bottom-2 left-1/2 -translate-x-1/2 px-4 py-3 min-w-[160px]"
              delay={0.8}
              floatClass="float-animation-delay-1"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🎓</span>
                <div>
                  <p className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                    B.Tech CSE
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Kolkata · 2023
                  </p>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--text-muted)' }}
          >
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-0.5 h-8 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, var(--accent-amber), transparent)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
