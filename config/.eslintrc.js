module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'parser': 'typescript-eslint-parser',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
    },
    'sourceType': 'module',
  },
  'plugins': [
    'typescript',
  ],
  'extends': [
    '@team-griffin/eslint-config/frontend-config/core',
  ],
  'settings': {
    'import/ignore': [
      'svg\'$',
    ],
  },
  'rules': {
    'no-unused-vars': 'off',
    'typescript/no-unused-vars': 'error',
    'max-len': [ 2, { code: 100 } ],
  },
};
