module.exports = {
  // Add plugin names as key and arguments as value
  // Install them before as dependencies with npm or yarn
  plugins: {
    // Disable a plugin by passing false as value
    "postcss-import": {},
    "postcss-url": false,
    "postcss-simple-vars": {},
    // 'postcss-at-rules-variables': {},
    // 'postcss-each': {},
    // 'postcss-mixins': {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    "postcss-responsive-type": false,
    // 'postcss-hexrgba': false,
  },
  preset: {
    // Change the postcss-preset-env settings
    features: { "nesting-rules": false },
  },
  autoprefixer: {
    grid: false,
  },
};
