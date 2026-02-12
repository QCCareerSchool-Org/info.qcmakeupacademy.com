/** @type {import('postcss-preset-env').pluginOptions} */
const postCSSPresetEnvOptions = {
  autoprefixer: { flexbox: 'no-2009' },
  stage: 3,
  features: { 'custom-properties': false },
};

/** @type {import('postcss-load-config').Config} */
const postCSSConfig = {
  plugins: {
    '@tailwindcss/postcss': {},
    'autoprefixer': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': postCSSPresetEnvOptions,
  },
};

export default postCSSConfig;
