module.exports = {
    preset: 'react-native',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
      },
      setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

      testEnvironment: 'jsdom',
      "collectCoverageFrom": [
        "src/**/*.js"  // or the appropriate path to include all files you want covered
      ],
      "coverageThreshold": {
        "global": {
          "branches": 100,
          "functions": 100,
          "lines": 100,
          "statements": 100
        }
      },
      "transformIgnorePatterns": [
        "!node_modules/"
      ]
  };