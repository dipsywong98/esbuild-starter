const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/server'],
  outfile: './dist/index.js',
  bundle: true,
  minify: true,
  platform: 'node',
  sourcemap: true,
  target: 'node14',
  plugins: [],
  watch: process.env.NODE_ENV === 'development',
});
