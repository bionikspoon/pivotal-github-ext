module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'scripts/**/*.js',
          'webpack.config.js',
          '**/*.spec.js',
          'src/testSetup.js',
        ],
      },
    ],
  },
  overrides: [
    {
      files: '**/*.spec.js',
      env: { jest: true },
    },
  ],
}
