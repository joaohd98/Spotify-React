module.exports = {
  verbose: true,
  setupFiles: [
    "<rootDir>/src/config/jest/test-shim.js",
    "<rootDir>/src/config/jest/test-setup.js"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/src/config/jest/test-preprocessor.js"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
};
