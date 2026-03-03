'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  type: 'education' | 'activity';
  status: 'current' | 'completed';
  highlights?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    year: '2023 – 2027',
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'Brainware University',
    location: 'Kolkata, West Bengal',
    description:
      'Pursuing a comprehensive computer science curriculum with focus on data structures, algorithms, web development, machine learning, and software engineering principles.',
    type: 'education',
    status: 'current',
    highlights: [
      'CGPA: 9.13/10 (current)',
      'Core subjects: DSA, OS, DBMS, Computer Networks, ML',
      'Active member of Coding Club',
    ],
  },
  {
    year: '2023',
    title: 'Higher Secondary (Class XII)',
    institution: 'Parulia K.K. High School',
    location: 'Kolkata, West Bengal',
    description:
      'Completed higher secondary education with Science stream (Physics, Chemistry, Mathematics, Biology).',
    type: 'education',
    status: 'completed',
    highlights: ['Score: 82%', 'Subjects: PCBM'],
  },
  {
    year: '2021',
    title: 'Secondary (Class X)',
    institution: 'Parulia K.K. High School',
    location: 'Kolkata, West Bengal',
    description: 'Completed secondary education with distinction.',
    type: 'education',
    status: 'completed',
    highlights: ['Score: 92.1%'],
  },
];

const activities = [
  {
    icon: '🏆',
    title: 'Competitive Programming',
    desc: 'Active on LeetCode — 200+ problems solved',
  },
  { icon: '🌐', title: 'Open Source', desc: 'Contributing to GitHub projects & documentation' },
  { icon: '📚', title: 'Self Learning', desc: 'Udemy Full Stack, CS50x, Machine Learning courses' },
  { icon: '🤝', title: 'Coding Club', desc: 'Member of college coding community, peer mentoring' },
];

// Education Section with timeline
const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 lg:py-32 relative"
      style={{ background: 'var(--bg-primary)' }}
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
            style={{ color: 'var(--accent-amber)' }}
          >
            04 / Education
          </span>
          <div className="flex-1 h-px max-w-24" style={{ background: 'var(--border-color)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-bold tracking-tight leading-[1.1] mb-16"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'var(--text-primary)',
          }}
        >
          Academic <span className="gradient-text">Journey</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-4 top-2 bottom-2 w-0.5 timeline-line rounded-full"
              style={{ opacity: 0.3 }}
            />

            <div className="flex flex-col gap-10">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-2 top-2 w-4 h-4 rounded-full -translate-x-1/2 border-2 transition-colors"
                    style={{
                      background:
                        item.status === 'current' ? 'var(--accent-amber)' : 'var(--bg-card)',
                      borderColor:
                        item.status === 'current' ? 'var(--accent-amber)' : 'var(--text-muted)',
                      boxShadow:
                        item.status === 'current' ? '0 0 12px rgba(245,158,11,0.5)' : 'none',
                    }}
                  />

                  {/* Content */}
                  <div
                    className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-soft)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span
                          className="text-xs font-mono font-bold"
                          style={{ color: 'var(--accent-teal)' }}
                        >
                          {item.year}
                        </span>
                        <h3
                          className="font-bold text-sm mt-1"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      {item.status === 'current' && (
                        <span
                          className="shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            background: 'rgba(245,158,11,0.15)',
                            color: 'var(--accent-amber)',
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                      📍 {item.institution}, {item.location}
                    </p>
                    <p
                      className="text-xs leading-relaxed mb-3"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.description}
                    </p>

                    {item.highlights && (
                      <ul className="flex flex-col gap-1">
                        {item.highlights.map((h) => {
                          const isCGPA = h.toLowerCase().includes('cgpa');

                          return (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-xs"
                              style={{
                                color: isCGPA ? 'var(--accent-amber)' : 'var(--text-muted)',
                                fontWeight: isCGPA ? '600' : '400',
                              }}
                            >
                              <span
                                className="w-1 h-1 rounded-full shrink-0"
                                style={{
                                  background: isCGPA
                                    ? 'var(--accent-amber)'
                                    : 'var(--accent-amber)',
                                }}
                              />
                              {h}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Activities & Extra */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-bold text-xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Beyond the classroom
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activities.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <span className="text-2xl mb-3 block">{a.icon}</span>
                    <h4
                      className="font-semibold text-sm mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {a.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {a.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(45,212,191,0.08))',
                border: '1px solid var(--border-color)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">📖</span>
                <h4 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                  Currently Learning
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Next.js', 'System Design', 'Docker', 'Redis', 'GraphQL'].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                      style={{
                        background: 'var(--bg-card)',
                        color: 'var(--accent-teal)',
                        border: '1px solid rgba(45,212,191,0.3)',
                      }}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
