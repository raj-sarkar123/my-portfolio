"use client";



// Superhuman Minimal Footer (Pattern 4)
const Footer = () => {
  const currentYear = 2026;

  return (
    <footer
      className="py-12 px-6 text-center"
      style={{
        borderTop: "1px solid var(--border-color)",
        background: "var(--bg-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Social row */}
        <div className="flex items-center gap-6">
          {[
            { href: "https://github.com/raj-sarkar123", label: "GitHub" },
            { href: "https://www.linkedin.com/in/raj-sarkar-7b43b027a/", label: "LinkedIn" },
            { href: "https://leetcode.com/u/rajsarkar964/", label: "LeetCode" },
          ]?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors duration-200 hover:opacity-60"
              style={{ color: "var(--text-muted)" }}
            >
              {link?.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-sm font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          © {currentYear} Raj Sarkar 
        </p>

        {/* Privacy · Terms */}
        <div className="flex items-center gap-4">
          <span
            className="text-xs"
            style={{ color: "var(--text-muted)", opacity: 0.5 }}
          >
            Privacy · Terms
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;