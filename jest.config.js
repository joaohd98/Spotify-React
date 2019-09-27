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
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": '<rootDir>/src/config/jest/styleMock',
    "\\.(css|less|scss|sass)$": '<rootDir>/src/config/jest/fileMock'
  },
};
