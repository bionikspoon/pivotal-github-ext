module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/**/*.stories.js',
          'scripts/**/*.js',
          'webpack.config.js',
          '**/*.spec.js',
          'src/test/*.js',
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
