module.exports = {
  extends: [
    'standard',
    'standard-react',
    'plugin:import/errors',
    'plugin:import/warnings',
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  env: {
    "browser": true,
    "jasmine": true,
    "jest": true,
    "node": true
  },
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}
