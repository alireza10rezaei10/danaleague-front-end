const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-sky-500",
    "bg-orange-500",
  ],
  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
