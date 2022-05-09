module.exports = {
  presets: ["next/babel", "react"],
  plugins: [
    ["styled-components", { "ssr": true }],
    "inline-react-svg"
  ]
};
