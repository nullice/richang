module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "@\/(.*)$": "<rootDir>/src/$1",
  },
    setupFiles: [
        "./test/beforeAll.js"
    ]
};
