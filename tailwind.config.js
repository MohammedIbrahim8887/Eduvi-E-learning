/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "testimonial-card": "#EEF4FA",
        // Add your custom pagination colors here
        "custom-pagination-dot": "rgba(38,5,242,0.4)",
        "custom-pagination-dot-active": "rgb(38,5,242)",
      },
    },
  },
  plugins: [],
};
