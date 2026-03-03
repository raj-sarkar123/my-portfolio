'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  category: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'JavaScript', icon: 'JS', level: 88, category: 'Frontend', color: '#F7DF1E' },
  { name: 'React', icon: '⚛', level: 85, category: 'Frontend', color: '#61DAFB' },
  { name: 'Node.js', icon: '⬡', level: 80, category: 'Backend', color: '#68A063' },
  { name: 'Express.js', icon: 'EX', level: 78, category: 'Backend', color: '#000000' },
  { name: 'MongoDB', icon: '🍃', level: 76, category: 'Database', color: '#47A248' },
  { name: 'Python', icon: '🐍', level: 82, category: 'Language', color: '#3776AB' },
  { name: 'SQL', icon: '🗄', level: 70, category: 'Database', color: '#F29111' },
  { name: 'Git & GitHub', icon: '🔀', level: 85, category: 'Tools', color: '#F05032' },
];

const marqueeItems = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Python',
  'SQL',
  'Git',
  'OpenCV',
  'MediaPipe',
  'REST APIs',
  'TypeScript',
];

// Skill Card with animated progress bar
const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
  duration: 0.6,     // was 1.2
  delay: index * 0.04 + 0.1, // reduced delay
  ease: "easeOut",
}}
      className="p-5 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      {/* Icon + Name */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold"
            style={{
              background: `${skill.color}20`,
              color: skill.color === '#F7DF1E' ? '#997A00' : skill.color,
              border: `1px solid ${skill.color}30`,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: skill.icon.length > 2 ? '0.75rem' : '1rem',
            }}
          >
            {skill.icon}
          </span>
          <div>
            <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
              {skill.name}
            </p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {skill.category}
            </p>
          </div>
        </div>
        <span className="text-sm font-bold font-mono" style={{ color: 'var(--accent-amber)' }}>
          {skill.level}%
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.07 + 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
          }}
        />
      </div>
    </motion.div>
  );
};

// Skills Section with bento grid + marquee
const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 lg:py-32 relative"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="flex items-center gap-3 mb-6"
        >
          <span
            className="font-mono text-sm font-bold tracking-widest uppercase"
            style={{ color: 'var(--accent-amber)' }}
          >
            02 / Skills
          </span>
          <div className="flex-1 h-px max-w-24" style={{ background: 'var(--border-color)' }} />
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold tracking-tight leading-[1.1]"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--text-primary)',
            }}
          >
            What I work with
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base max-w-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            Technologies I use daily to build production-ready applications.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Also Familiar With */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 rounded-2xl"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'TypeScript',
              'OpenCV',
              'MediaPipe',
              'Pandas',
              'NumPy',
              'Matplotlib',
              'REST APIs',
              'JWT',
              'Tailwind CSS',
              'Vite',
              'Postman',
              'VS Code',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium font-mono transition-colors duration-200 hover:border-amber-500"
                style={{
                  background: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee band */}
      <div
        className="mt-20 w-full overflow-hidden border-y py-4"
        style={{ borderColor: 'var(--border-color)' }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-4 px-6 text-sm font-mono font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              {item}
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: 'var(--accent-amber)' }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
