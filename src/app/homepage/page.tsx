import type { Metadata } from "next";
import type { Viewport } from "next";
import HomepageClient from "./components/HomepageClient";

// SEO Metadata
export const metadata: Metadata = {
  title: "Raj Sarkar | Full Stack Developer & MERN Stack Engineer",
  description:
    "B.Tech Computer Science student from Kolkata building full-stack web applications, computer vision tools, and data analysis solutions. MERN Stack | React | Node.js | Python.",
  keywords: [
    "Raj Sarkar",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "B.Tech Computer Science Kolkata",
    "Web Developer Portfolio",
    "Python Developer",
    "OpenCV MediaPipe",
    "JavaScript Developer India",
  ],
  authors: [{ name: "Raj Sarkar" }],
  creator: "Raj Sarkar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rajsarkar.dev",
    title: "Raj Sarkar | Full Stack Developer",
    description:
      "Portfolio of Raj Sarkar — Full Stack Developer, MERN Stack Engineer, and Computer Science student from Kolkata.",
    siteName: "Raj Sarkar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Sarkar | Full Stack Developer",
    description:
      "Portfolio of Raj Sarkar — Full Stack Developer, MERN Stack Engineer, and Computer Science student from Kolkata.",
    creator: "@rajsarkar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0F" },
    { media: "(prefers-color-scheme: light)", color: "#F8F7F4" },
  ],
};

// Server Component — imports font, exports metadata, renders Client wrapper
export default function HomepagePage() {
  return (
    <>
      {/* Google Fonts — Plus Jakarta Sans + DM Sans + JetBrains Mono */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
          `,
        }}
      />
      <HomepageClient />
    </>
  );
}