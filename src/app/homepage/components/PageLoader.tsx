"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Page loading animation component
const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load — remove after 1.8s
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Spinning ring */}
            <div className="relative w-16 h-16">
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent loader-ring"
                style={{
                  borderTopColor: "var(--accent-amber)",
                  borderRightColor: "var(--accent-teal)",
                }}
              />
              <div
                className="absolute inset-2 rounded-full border border-transparent"
                style={{ borderTopColor: "rgba(245,158,11,0.3)" }}
              />
            </div>

            {/* Name pulse */}
            <motion.div
              className="loader-pulse text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p
                className="font-mono text-sm tracking-[0.3em] uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                raj.sarkar
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;