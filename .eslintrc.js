module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "import", "react-hooks"],
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "no-undef": "off",
    // interface や jsx をうまく扱えないので off にして noUnusedLocals を tsconfig で有効化
    "no-unused-vars": "off",
    curly: ["error", "all"],
    eqeqeq: ["error", "always"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "import/no-duplicates": "error",
    "import/order": ["error", { alphabetize: { order: "asc" } }],
    "import/no-default-export": "error",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  ignorePatterns: ["node_modules/", "!.eslintrc.js", "!.prettierrc.js", "lib/"],
};
