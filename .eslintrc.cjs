module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard",
    "prettier",
    "plugin:react/jsx-runtime"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', "prettier", 'tailwindcss'],
  rules: {
    'react/react-in-jsx-scope': 0,
  },
};
