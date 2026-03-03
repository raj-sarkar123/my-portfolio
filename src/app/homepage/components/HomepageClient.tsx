"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import PageLoader from "./PageLoader";

// Main interactive wrapper — handles dark/light mode state
const HomepageClient = () => {
  const [isDark, setIsDark] = useState(true);

  // Apply dark class to html on mount and toggle
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList?.add("dark");
    } else {
      root.classList?.remove("dark");
    }
  }, [isDark]);

  // Detect system preference on first load
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")?.matches;
    setIsDark(prefersDark);
  }, []);

  const handleToggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
      {/* Page loading animation */}
      <PageLoader />

      {/* Sticky navbar with theme toggle */}
      <Navbar isDark={isDark} onToggleTheme={handleToggleTheme} />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </>
  );
};

export default HomepageClient;