module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
  },
}
