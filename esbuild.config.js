const esbuild = require('esbuild');

const githash = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim()

esbuild.build({
  entryPoints: ['./src/server'],
  outfile: './dist/index.js',
  bundle: true,
  minify: false,
  platform: 'node',
  sourcemap: true,
  target: 'node14',
  plugins: [],
  watch: process.env.NODE_ENV === 'development',
  define: {
    'process.env.githash': `'${githash}'`
  }
});
