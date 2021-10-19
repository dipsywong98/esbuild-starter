module.exports = {
  coverageReporters: [
    'html',
    'text',
    'text-summary',
    'cobertura',
  ],
  testEnvironment: 'node',
  transform: {
    '.+\\.(j|t)sx?$': [
      'esbuild-jest',
      {
        sourcemap: true,
        target: 'node14',
      },
    ],
  },
};
