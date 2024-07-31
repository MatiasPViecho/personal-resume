import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        xanh_mono: ["var(--font-xanh_mono)"],
        work_sans: ["var(--font-work_sans)"],
      },
      colors: {
        fuschia: "#ED4B9E",
        iris: "#4B4DED",
        onyx: "#0E0E2C",
        evergreen: "#ED4B9E",
        dorian: "#ECF1F4",
        slate: "#4A4A68",
        light_slate: "#8C8CA1",
        cloud: "#FAFCFE",
      },
    },
  },
  safelist: [
    {
      pattern: /left-(1|2|3|4|5|6|7|8|9|10|11|12)/,
    },
  ],
  plugins: [],
};
export default config;
