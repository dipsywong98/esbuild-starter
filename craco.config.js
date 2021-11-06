const CracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
  plugins: [{ plugin: CracoEsbuildPlugin }],
  eslint: {
    enable: false,
  },
};