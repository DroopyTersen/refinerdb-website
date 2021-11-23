module.exports = {
  mode: "jit",
  purge: ["./app/**/*.tsx", "./app/**/*.jsx", "./app/**/*.js", "./app/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        refinerdb: {
          primary: "#5aacb5",
          "primary-focus": "#49878d",
          "primary-content": "#ffffff",
          secondary: "#ffd866",
          "secondary-focus": "#bda14c",
          "secondary-content": "#2c2a2e",
          accent: "#ff6188",
          "accent-focus": "#cd5170",
          "accent-content": "#ffffff",
          neutral: "#2c2a2e",
          "neutral-focus": "#383739",
          "neutral-content": "#ffffff",
          "base-100": "#404545",
          "base-200": "#3d4242",
          "base-300": "#d1d5db",
          "base-content": "#ffffff",
          info: "#b8d9f4",
          success: "#88eca1",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};
