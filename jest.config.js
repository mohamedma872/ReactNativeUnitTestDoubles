module.exports = {
    preset: 'react-native',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
      },
      setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

      testEnvironment: 'jsdom',
      "transformIgnorePatterns": [
        "!node_modules/"
      ]
  };