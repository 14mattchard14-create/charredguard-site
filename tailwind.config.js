/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  corePlugins: {
    // Keep off while the legacy globals.css design system is still in use
    // on most pages. Flip this on once every page has migrated off it.
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        // Mirrors the CSS custom properties in app/globals.css so the two
        // systems can share a palette during the migration.
        brand: {
          50: "#fbe9e2",
          100: "#f6d2c2",
          400: "#d97a54",
          500: "#c1502e",
          600: "#9c3f22",
          700: "#7c331c",
        },
        ink: {
          900: "#151f28",
          600: "#576975",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f4f6f8",
          line: "#d7dee3",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
